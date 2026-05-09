# Slice Protocol

How the parallel-authoring slice loop works, and the file-based handoff contract that lets four subject sessions and one infra-owner session ship Year 7 content without manual relay through chat.

This document is the source of truth. All five `.claude/skills/lumen-author-*` and `.claude/skills/lumen-content-review` SKILL.md files defer to it.

## Roles

- **Infra-owner session** — runs in `~/lumen-academy` on `main`. Owns merging, seeding, schema, renderers, scripts, top-level seed index. Does not author content. Does not run author skills.
- **Subject author session** — runs in one of the four worktrees `~/lumen-academy-{maths,biology,chemistry,physics}` on branch `content/<subject>`. Owns drafting one node per slice (Tier 1) or N nodes per slice (Tier 2+). Invokes `/lumen-author-<realm>`.
- **Reviewer agent** — fresh sub-agent spawned by the infra-owner. Runs `/lumen-content-review` against a single subject's draft. Independent of the author by construction (no draft context).

## The slice loop

```
[infra-owner]   Tells you to start slice N. Per-session prompts include the subject + recommended next node.
[author]        scripts/slice-init.sh <subject>     # resets to origin/main, prompts for nodeId, writes initial slice-state
[author]        Drafts the node in src/content/seed/<subject>/<file>.ts.
[author]        npm run lint:content && npm run eval-content && npm run typecheck && npm run lint
[author]        git add <scoped files> && git commit                       # commits the draft (DO NOT push)
[author]        Updates .claude/slice-state.json: status=ready-for-review
[author]        Reports "ready" to infra-owner.
[infra-owner]   Spawns reviewer agent against the subject's worktree.
[reviewer]      Reads .claude/slice-state.json to learn nodeId being reviewed.
[reviewer]      Verifies git status is clean and HEAD is the draft commit.
[reviewer]      Grades against three pillars (rubric / lift signals / eval probes). Runs eval-content + typecheck + lint.
[reviewer]      Writes verdict + findings back to .claude/slice-state.json.
[reviewer]      Returns concise summary to infra-owner.
[infra-owner]   On Pass: scripts/slice-finish.sh <subject>    # force-pushes, opens PR, squash-merges
[infra-owner]   On Revise: relays findings to author session. Author re-drafts and re-commits.
[infra-owner]   After all four subjects shipped: pulls main, runs npm run seed -- --subject=<each>, updates worktrees.md memory.
```

## The `.claude/slice-state.json` contract

One file per worktree. Gitignored. Owned jointly by author and reviewer.

```json
{
  "version": 1,
  "subject": "maths",
  "nodeId": "maths-four-operations-multiply-divide-negatives",
  "nodeTitle": "Multiplying and Dividing Negative Numbers",
  "zoneId": "maths-four-operations",
  "tier": "core",
  "seedFilePath": "src/content/seed/maths/four-operations.ts",
  "status": "drafting",
  "startedAt": "2026-05-09T20:30:00Z",
  "lastReviewVerdict": null,
  "lastReviewFindings": [],
  "lastReviewSummary": null,
  "shippedPr": null,
  "shippedCommit": null
}
```

### Status values (state machine)

```
drafting
   |
   v
ready-for-review
   |
   +--- (reviewer Pass)  ----> reviewed-pass ----> shipped
   |
   +--- (reviewer Revise) ---> reviewed-revise ---> drafting (back to top)
   |
   +--- (reviewer Reject) ---> reviewed-reject (escalates to user, loop ends)
```

### Who writes which fields

- **slice-init.sh** writes the initial record (everything up to `startedAt`, `status="drafting"`).
- **Author session** updates `status="ready-for-review"` after committing.
- **Reviewer agent** writes `status`, `lastReviewVerdict`, `lastReviewFindings`, `lastReviewSummary`.
- **slice-finish.sh** writes `shippedPr`, `shippedCommit`, `status="shipped"`.

The schema is enforced by `.slice-state.schema.json` in the repo root.

## Pre-commit linter

`scripts/lint-content.mjs` runs as a pre-commit hook in every worktree (activated via `git config core.hooksPath .githooks`, set automatically by `npm install`'s `prepare` script).

### Blocker rules (commit fails)

- **R1 em-dash-in-seed** — em dash (`—`) anywhere in `src/content/seed/`.
- **R2 verify-placeholder** — regex `(verify [^)]+)` in source-citation comments. Pin sources before committing.
- **R3 us-spelling** — `\b(color|meter|learned|favorite|center|fiber|behavior)\b` in user-facing string fields (title, description, stem, options, hint, reExplanation, instructions, label). Comments excluded.
- **R4 scene-instruction-mismatch** — scene `instructions` text contains `\b(click|drag|tap|move|drop)\b` AND scene `type` is not in {`fraction-wall`, `labelled-diagram`}. See `docs/02-content-schema.md` "Renderer support matrix".
- **R5 mcq-position-dominant** — across MCQs in a single node, any single `correctIndex` value held by more than 50% of MCQs when MCQ count >= 6.

### Warnings (printed but don't fail)

- **W1 mcq-position-bunch** — any of {0,1,2,3} missing as `correctIndex` across the node's MCQs.
- **W2 author-without-source** — more than 1 misconception with `// Authored, no external source` per node (max 1 per playbook).

### Bypassing the linter

Don't. If a rule is wrong, fix the rule in `scripts/lint-content.mjs` and commit that fix as its own change. `--no-verify` defeats the purpose.

## Scripts

### `scripts/slice-init.sh <subject>`

Run by the author session as the first action of every slice.

1. `cd ~/lumen-academy-<subject>`
2. `git fetch origin && git reset --hard origin/main`
3. Verify worktree is clean
4. Prompt for nodeId (or accept as argv)
5. Look up node metadata from the seed file (zoneId, tier, file path)
6. Write initial `.claude/slice-state.json` with `status="drafting"`
7. Print next-step guidance

### `scripts/slice-finish.sh <subject>`

Run by the infra-owner session after the reviewer returns Pass.

1. Read `.claude/slice-state.json` from `~/lumen-academy-<subject>`
2. Verify `status == "reviewed-pass"` and `lastReviewVerdict == "pass"`
3. Verify scoped files are staged-clean (not in working tree, only in HEAD)
4. `git push --force-with-lease`
5. `gh pr create --base main --head content/<subject>` with title from `nodeTitle` and body from `lastReviewSummary`
6. `gh pr merge --squash --auto`
7. Update `.claude/slice-state.json`: `status="shipped"`, `shippedPr`, `shippedCommit`

Force-with-lease is required because `git reset --hard origin/main` in slice-init.sh leaves the remote pointing at the previous slice's pre-squash commit. That commit is already represented in main via its squash-merge, so abandoning it on the branch is safe.

## Boundaries (each subject author session)

The subject author is allowed to modify:

- `src/content/seed/<subject>/**/*.ts` — own subject's seed files.
- `docs/03-curriculum-map.md` — for own subject's nodes (add/update the `### Zone` / `#### Node` row).
- `docs/04-eval-set.md` — for own subject's nodes (add `C-XXX-N` / `Q-XXX-N` probes covering the new node).
- `.claude/slice-state.json` — own session state.

The subject author is NOT allowed to modify:

- Any other subject's seed files.
- Renderers (`src/components/learn/`, `src/components/questions/`, `src/components/scenes/`).
- Schema (`src/types/`, `docs/02-content-schema.md`).
- Scripts (`scripts/`, `.githooks/`).
- The infra-owner's `package.json`, `tsconfig`, `next.config.mjs`.
- Other subjects' realm-of-the-curriculum-map sections.
- This document, or `docs/00-build-prompt.md`, `docs/01-tutor-system-prompt.md`, `docs/05-reference-shelf.md`, `docs/06-authoring-playbook.md`.

If the author needs an infra change (new renderer, new question type, schema change, script bug), they surface it as a **handoff note** in `.claude/slice-state.json` under a new field `handoffNotes: string[]`. The infra-owner reads these at slice end and triages.

## Multi-node slices (Tier 2 — slice 3 onward)

Each subject session can ship multiple nodes per slice by cycling through the protocol N times. There is no schema change for this — the author session simply repeats the loop:

```
for nodeId in <pack>:
  scripts/slice-init.sh <subject> <nodeId>      # resets to current main + writes new slice-state
  draft → commit → mark ready
  await infra-owner review verdict
  on revise: fix per findings, re-commit, re-mark ready
  on pass: infra-owner runs scripts/slice-finish.sh <subject> (or scripts/slice-ship-all.sh in batch)
```

Important: each `slice-init.sh` invocation **does `git reset --hard origin/main`**, picking up any nodes shipped by other subjects between cycles. This is correct — the worktree's branch always rebases onto current main.

Within a single subject session, nodes can be drafted in parallel using sub-agents (Agent tool, `subagent_type: general-purpose`). The pattern:

1. Author session spawns N sub-agents in one message, each given a different nodeId from the pack and the playbook context.
2. Each sub-agent writes its draft to its own file (different seed files = no merge conflicts).
3. Author session waits for all sub-agents to return, runs `npm run lint:content && npm run eval-content && npm run typecheck && npm run lint` as a batch.
4. Author session commits the batch (one commit per node, or one squash commit per pack — the protocol supports either).
5. Author session marks ready.

Reviewer agents fan out the same way: infra-owner spawns one reviewer agent per node-commit, all running in parallel. Each reviewer reads `.claude/slice-state.json` for the subject + the relevant commit hash.

For shipping, the infra-owner runs:

```
scripts/slice-ship-all.sh maths biology chemistry physics
```

This runs `slice-finish.sh` for all four subjects as background jobs in parallel, waits for all, then runs `npm run seed -- --subject=<each>` in parallel. Single command, ~5 min wall-clock for four shipped subjects instead of ~20 min serial.

## Why this exists

Slice 2 cost ~2 hours wall-clock for 4 nodes because the human (you) was on the relay path for every transition. The single biggest lever was eliminating that — file-based handoff replaces chat-based relay, and explicit boundaries prevent the off-policy edits (wrong file, wrong node, infra modifications from author sessions) that bit slice 2.

The Tier 2 multi-node-per-slice pattern + `slice-ship-all.sh` deliver the second multiplier: from 4 nodes per ~120 min wall-clock to 12 nodes per ~45 min wall-clock.

See `memory/tier1_plan.md` for the full design document and `memory/worktrees.md` for the operational history.
