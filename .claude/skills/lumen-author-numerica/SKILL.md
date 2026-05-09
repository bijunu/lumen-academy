---
name: lumen-author-numerica
description: Author one Year 7 maths skill node for Lumen Academy in the Numerica realm. Loads the rubric, reference shelf, and curriculum slice; produces a single SkillNode draft conforming to src/types/content.ts. Use when drafting a new maths node or re-grading an existing one against the new rubric. Quality bar is Bond 11+ for Challenge tier rigour and CGP KS3 Maths for breadth and clarity.
disable-model-invocation: true
---

# Lumen Author: Numerica (Year 7 Maths)

You are drafting one Year 7 maths skill node for Lumen Academy. Quality bar: at or above Bond 11+ for Challenge tier rigour and CGP KS3 Maths for breadth and clarity.

This skill produces ONE node per invocation. If the user asks for "a zone", confirm they want one node first; offer to repeat the skill per node afterwards.

## Required reading before drafting

Read these files in order. Do not skip; the rubric is the contract.

1. `docs/00-build-prompt.md` — product scope and curriculum coverage.
2. `src/types/content.ts` — the exact `SkillNode` shape; your output must conform.
3. `docs/02-content-schema.md` — the data shape AND the "Renderer support matrix" at the bottom. You MUST consult the matrix before writing any scene `instructions`. Promising "click" or "drag" on a non-interactive scene type is a hard blocker (caught by the pre-commit linter rule R4). If you need a renderer that doesn't exist, stop and surface it as a handoff note; do not improvise action-promising copy.
4. `docs/07-slice-protocol.md` — the slice loop, the `.claude/slice-state.json` contract, and the script reference. Run `scripts/slice-init.sh maths <nodeId>` BEFORE drafting (see Workflow below).
5. `docs/05-reference-shelf.md` — what to take from Bond 11+, CGP KS3 Maths, DfE programme of study, AQA, Edexcel, OCR, plus product cues from Brilliant, Seneca, Tassomai, Khan, Sparx, DragonBox.
6. `docs/06-authoring-playbook.md` — the must-pass rubric. This is the bar.
7. `docs/04-eval-set.md` — locate the zone section. Confirm coverage of every Content probe (`C-...`); satisfy every Question shape probe (`Q-...`) with at least one question. If the zone section does not exist yet, draft probes for it alongside the node.
8. `docs/03-curriculum-map.md` — find the topic. Copy the KS3 objective verbatim from there or from the DfE programme of study.
9. `src/content/seed/maths/fractions.ts` — structural template only. The fractions seed predates the new rubric; copy the file shape, not its quality bar.

## Numerica realm guidance

Realm id: `numerica`. Subject id: `maths`.

### Voice and UK context library

Use these for question stems, scenes, and word problems:

- School day: canteen change in pence, lunchtime queues, tuck shop, library books
- Travel: Tube fares, train tickets, bus journey times, distances in km along UK roads
- Cooking: recipe scaling for portions, oven temperatures in degrees Celsius only, ingredient ratios
- Sport: Premier League goal differences, cricket runs, county team ages
- Money: GBP, pounds and pence, no dollars or cents anywhere
- UK places: Sevenoaks, Tunbridge Wells, Manchester, Dover, the Lake District; avoid generic American-sounding place names

### Distractor patterns to lean on

Each wrong MCQ option must correspond to a specific misstep, not a random number. Use these:

- Off-by-one (counted boundaries wrong)
- Swapped operations (subtracted when adding, divided when multiplying)
- Place-value slip (decimal moved the wrong way)
- Cross-multiplication confusion (applied to equivalent fractions where addition was needed)
- Forgot to convert units (cm to m, pence to pounds)
- Misread the stem (a Bond 11+ trap; question says "how many more", learner answers the total)
- Sign error at Challenge tier (negative result mishandled)

### Stretch ceiling

Challenge tier reaches Bond 11+ Maths Paper difficulty: 2 to 3 sentence word problems with 1 or 2 unstated intermediate steps. For topics where Year 7 maths approaches GCSE territory (algebra, ratio, percentages), Challenge can pull from early KS4 Foundation tier items. The aim is the strong Year 7 grammar school learner stays engaged at the top of the range.

### Year 7 zones

Use the exact zoneId and zoneName below.

| zoneId | zoneName |
|---|---|
| maths-place-value | Place Value |
| maths-four-operations | Four Operations |
| maths-factors-multiples | Factors and Multiples |
| maths-primes | Primes |
| maths-fractions | Fractions |
| maths-decimals | Decimals |
| maths-percentages | Percentages |
| maths-ratio | Ratio and Proportion |
| maths-bidmas | BIDMAS |
| maths-algebra | Basic Algebra |
| maths-sequences | Sequences |
| maths-coordinates | Coordinates |
| maths-angles | Angle Rules |
| maths-shapes-2d-3d | 2D and 3D Shapes |
| maths-perimeter-area-volume | Perimeter, Area, Volume |
| maths-averages-range | Averages and Range |
| maths-probability | Probability Basics |
| maths-charts-graphs | Charts and Graphs |

### Scene type guidance

Read the **"Renderer support matrix"** in `docs/02-content-schema.md` first. Today only `fraction-wall` and `labelled-diagram` are interactive renderers; `number-line`, `diagram`, and `simulation` render to a static "Continue" card. For maths:

- Use `labelled-diagram` for any scene where the learner should pick out parts (number line landmarks, fraction parts, coordinate quadrants, place-value columns). Action verbs ("click each marker") are allowed and expected here.
- Use `number-line`, `diagram`, or `simulation` only for narrative reveals — write `instructions` as readable narrative ("Read how each calculation lays out as jumps on the line. Three jumps of -4 land on -12..."). Do NOT write "drag", "click", "tap", "move", or "drop".

Slider-explore questions (different from `simulation` scenes — questions render interactively) are required for continuous-relationship topics (ratio, percentages, probability). Data-extraction questions are required for charts and graphs.

If a topic genuinely needs a renderer that doesn't exist (real `number-line` interaction, sketch scene, dynamic simulation), surface it via `handoffNotes` in `.claude/slice-state.json`. Do not improvise action-promising copy.

## Worktree boundaries

This skill is designed to run inside a Numerica-only worktree (e.g. `~/lumen-academy-maths` on branch `content/maths`). Stay in your lane.

**Allowed scope (this worktree):**
- `src/content/seed/maths/` — your seed files and per-subject `index.ts`
- `docs/03-curriculum-map.md` — the maths sections only
- `docs/04-eval-set.md` — the zone section for the node you're drafting
- `docs/_drafts/<nodeId>.md` — handoff note

**Off-limits without infra-owner approval (route via the main repo session):**
- `src/types/`, `src/components/{questions,scenes,learn}/`, `src/lib/`, `src/app/`, `scripts/` — schema, renderers, engine, routes, seeders
- `src/content/seed/index.ts` — top-level aggregator (only edit `src/content/seed/maths/index.ts`)
- `package.json`, `next.config.mjs`, `CLAUDE.md`
- Other subjects' seed directories (`src/content/seed/{biology,chemistry,physics}/`)

If you need a new scene type, question type, schema field, or shared component to do justice to your topic, stop and surface the requirement to the user. Do not extend shared infrastructure from this worktree.

## Workflow

0. **Slice init.** From the maths worktree (`~/lumen-academy-maths`), run `scripts/slice-init.sh maths <nodeId>` (e.g. `scripts/slice-init.sh maths maths-decimals-rounding`). This resets the branch to `origin/main` and writes `.claude/slice-state.json` with `status="drafting"`. Update `nodeTitle` and `tier` in the file once you know them.
1. Confirm the topic (zone + specific node concept), proposed node id (e.g. `maths-decimals-place-value`), and tier (`core` / `confident` / `challenge`).
2. Read all required docs above.
3. Locate the KS3 objective in the DfE programme of study; copy verbatim into `curriculum.ks3Objective`.
4. Source 2 or more GCSE spec refs from AQA, Edexcel, OCR for `curriculum.awardingBodies`.
5. For each misconception, source from CGP KS3 Maths, AQA / Edexcel / OCR examiner report, or DfE exemplar. Cite in a code comment above the entry, e.g. `// Source: CGP KS3 Maths Study Guide p.42 Common mistake box` or `// Source: AQA GCSE Maths examiner report 2023, Q5`. At most 1 entry per node may be `// Authored, no external source`. The pre-commit linter rule R2 blocks any `(verify ...)` placeholder; pin sources before committing.
6. Draft the `SkillNode`:
   - 3 or more scenes; consult the renderer matrix in `docs/02-content-schema.md` for `instructions` voice (readable narrative on non-interactive scenes; action verbs only on `fraction-wall` / `labelled-diagram`).
   - 2 or more worked examples; the second has at least one missing step the engine can hide.
   - 20 or more questions in tier mix 6 to 8 Core / 6 to 8 Confident / 4 to 6 Challenge.
   - Type quotas: 6 to 10 multiple-choice, 4 to 7 numeric-entry, 1 to 2 spot-misconception, 1 or more drag (drag-order or drag-drop-builder), 1 or more missing-step. Slider-explore required for continuous-relationship topics. Data-extraction required for chart and graph topics.
   - 6 or more misconceptions; every entry sourced (with allowance for 1 unsourced).
   - At least one Challenge tier word problem in Bond 11+ shape (2 to 3 sentences, 1 to 2 unstated steps).
   - Anti-grind: no two consecutive questions test the same procedure on different numbers.
   - MCQ correctIndex distribution: rotate across A/B/C/D so no single position dominates. The pre-commit linter rule R5 blocks any single position holding more than 50% of correctIndex values when MCQ count >= 6.
7. Pre-checks (run all four; fix every failure):
   - `npm run lint:content` (the new content linter — em dashes, source placeholders, US spellings, scene-instruction match, MCQ position distribution)
   - `npm run eval-content` (the rubric validator)
   - `npm run typecheck`
   - `npm run lint`
8. Add the curriculum-map row to `docs/03-curriculum-map.md` (your zone's section) and any new `C-...` / `Q-...` probes to `docs/04-eval-set.md`.
9. Write the handoff note for review (under 200 words): lift signals with sources, rubric lines unmet (with reason), open questions. Place it in the `handoffNotes` array in `.claude/slice-state.json`.
10. **Commit (do NOT push).** `git add` the scoped files (your seed file, `src/content/seed/maths/index.ts`, the curriculum-map row, the eval-set probes) and commit with a meaningful message. The pre-commit hook will run the content linter automatically.
11. **Update `.claude/slice-state.json`**: `status="ready-for-review"`. Then report ready to the infra-owner. Do not push or open a PR — the infra-owner runs `scripts/slice-finish.sh maths` after review.

## Rubric reminder

`docs/06-authoring-playbook.md` is authoritative. Headline numbers:

- 3+ scenes, 2+ worked examples, 20+ questions, 6+ misconceptions
- Tier mix: 6 to 8 / 6 to 8 / 4 to 6
- All UK English, GBP, metric, no em dashes, reading age 12 or younger
- All misconceptions cite a source in a code comment

## What not to do

- Do not author more than one node in a single skill invocation.
- Do not paraphrase the KS3 objective.
- Do not invent awarding-body refs; if a board lacks a clear ref, omit that body and cite the other two.
- Do not add a misconception without a source citation, except up to 1 marked `// Authored, no external source`.
- Do not extend `InteractiveScene` or `Question` type unions, or change any other content schema field, or touch any path under `src/types/`, `src/components/`, `src/lib/`, `src/app/`, or `scripts/`. Surface the need via `handoffNotes` in `.claude/slice-state.json`; the infra-owner session approves schema changes.
- Do not push or open a PR. Commit, but stop short of `git push` and `gh pr create` — the infra-owner runs `scripts/slice-finish.sh maths` after review.
- Do not seed Atlas. The infra-owner runs `npm run seed -- --subject=maths` after merge.
- Do not write a US dollar sign, a US unit (feet, miles, gallons, fahrenheit), an em dash, or a "all of the above" option anywhere. The pre-commit linter blocks em dashes (R1) and US spellings (R3).

## Output and handoff

A single TypeScript file at `src/content/seed/maths/<zoneId-tail>.ts` exporting the new node, plus a one-line addition to `src/content/seed/maths/index.ts` re-exporting it (the top-level `src/content/seed/index.ts` re-exports from there; do not edit the top-level index). The new node's id and zoneId match the table above. The handoff note can be a short markdown block in chat, or a temporary file at `docs/_drafts/<nodeId>.md` if the user prefers a paper trail.

After writing, run `npm run eval-content` and `npm run typecheck` and report both results in the handoff. Confirm zero FAIL findings before declaring the draft ready for the `lumen-content-review` skill.
