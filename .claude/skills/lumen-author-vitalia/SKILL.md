---
name: lumen-author-vitalia
description: Author one Year 7 biology skill node for Lumen Academy in the Vitalia realm. Loads the rubric, reference shelf, and curriculum slice; produces a single SkillNode draft conforming to src/types/content.ts. Use when drafting a new biology node or re-grading an existing one. Quality bar is CGP KS3 Biology for breadth and clarity, with stretch reaching early KS4 GCSE Foundation tier.
disable-model-invocation: true
---

# Lumen Author: Vitalia (Year 7 Biology)

You are drafting one Year 7 biology skill node for Lumen Academy. Quality bar: at or above CGP KS3 Biology for breadth and clarity, with Challenge tier reaching early KS4 GCSE Foundation tier.

This skill produces ONE node per invocation. If the user asks for "a zone", confirm they want one node first.

## Required reading before drafting

Read these files in order. Do not skip; the rubric is the contract.

1. `docs/00-build-prompt.md` — product scope and curriculum coverage.
2. `src/types/content.ts` — exact `SkillNode` shape; output must conform.
3. `docs/02-content-schema.md` — the data shape AND the "Renderer support matrix" at the bottom. You MUST consult the matrix before writing any scene `instructions`. For Vitalia the workhorse is `labelled-diagram` (interactive hotspots) paired with `labelled-image` (drag-label questions). Promising "click" or "drag" on a non-interactive scene type is a hard blocker (caught by pre-commit linter rule R4).
4. `docs/07-slice-protocol.md` — the slice loop, the `.claude/slice-state.json` contract, and the script reference. Run `scripts/slice-init.sh biology <nodeId>` BEFORE drafting (see Workflow below).
5. `docs/05-reference-shelf.md` — what to take from CGP KS3 Biology, DfE Science programme of study, AQA / Edexcel / OCR GCSE Biology specs and examiner reports, plus product cues from Brilliant, Seneca, Tassomai, Khan.
6. `docs/06-authoring-playbook.md` — the must-pass rubric.
7. `docs/04-eval-set.md` — locate the zone section. Confirm coverage of every `C-...` probe; satisfy every `Q-...` probe. If the zone section does not exist, draft it alongside the node.
8. `docs/03-curriculum-map.md` — find the topic. Copy the KS3 objective verbatim.
9. An existing biology seed file (e.g. `src/content/seed/biology/cells.ts`) — structural template only.

Note: Bond 11+ does not cover biology. Stretch references for Vitalia are CGP KS3, examiner reports, and early KS4 GCSE Biology Foundation tier.

## Vitalia realm guidance

Realm id: `vitalia`. Subject id: `biology`.

### Voice and UK context library

- UK wildlife: oak, sycamore, holly, hedgehog, badger, robin, blue tit, grey squirrel, fox, common frog
- UK ecosystems: woodland, hedgerow, pond, meadow, coastal rockpool, garden lawn
- NHS and health: balanced diet, school nurse, vaccination, the Eatwell Guide
- School and home: lunchtime food groups, kitchen mould on bread, garden soil composting, classroom potted plants
- Domestic biology: yeast in bread-making, tea brewing as solute extraction, decomposing leaves

### Distractor patterns to lean on

Each wrong MCQ option corresponds to a specific Year 7 biology error:

- Mitosis vs meiosis confusion (where reproduction is touched at Year 7 light level)
- Cell wall vs cell membrane mix-up (animal vs plant)
- Vein vs artery direction confusion
- Scale errors (cell, tissue, organ, organ system, organism)
- Producer vs primary consumer in a food web
- Continuous vs discontinuous variation mix-up
- Photosynthesis and respiration swapped (very common: "plants only photosynthesise")
- Confusing inheritance with environment for a given trait

### Stretch ceiling

Challenge tier draws from CGP KS3 stretch boxes and early KS4 GCSE Biology Foundation tier. Examples: photosynthesis word equation, organ system interactions (digestive plus circulatory), simple genetic variation, food web disruption scenarios. Avoid pulling content that requires GCSE Higher level prior knowledge.

### Year 7 zones

| zoneId | zoneName |
|---|---|
| biology-cells | Cells |
| biology-microscopy | Microscopy |
| biology-body-systems | Body Systems |
| biology-reproduction | Reproduction |
| biology-variation-classification | Variation and Classification |
| biology-ecosystems-food-webs | Ecosystems and Food Webs |
| biology-photosynthesis | Photosynthesis |

### Scene type guidance

Read the **"Renderer support matrix"** in `docs/02-content-schema.md` first. Today only `fraction-wall` and `labelled-diagram` are interactive renderers; `number-line`, `diagram`, and `simulation` render to a static "Continue" card.

For Vitalia, **`labelled-diagram` is the workhorse** — use it for the labelled animal cell, plant cell, body systems (digestive, circulatory, respiratory), flower parts, leaf cross-section, food webs (organisms as hotspots), and microscope parts. Action verbs ("click each marker", "click to reveal") are allowed and expected on `labelled-diagram`. Pair it with the `labelled-image` question type so the learner places labels onto the same diagram for assessment.

If you reach for `simulation` (e.g. microscope magnification scrub) or `diagram`, write `instructions` as readable narrative — no "click", "drag", "tap", "move", or "drop". Either convert to `labelled-diagram` with hotspots or surface a renderer request via `handoffNotes` in `.claude/slice-state.json`.

Data-extraction questions are required for variation-and-classification topics. Sketch questions can supplement labelled-image where the learner draws structure from memory rather than identifying it.

## Worktree boundaries

This skill is designed to run inside a Vitalia-only worktree (e.g. `~/lumen-academy-biology` on branch `content/biology`). Stay in your lane.

**Allowed scope (this worktree):**
- `src/content/seed/biology/` — your seed files and per-subject `index.ts`
- `docs/03-curriculum-map.md` — the biology sections only
- `docs/04-eval-set.md` — the zone section for the node you're drafting
- `docs/_drafts/<nodeId>.md` — handoff note

**Off-limits without infra-owner approval (route via the main repo session):**
- `src/types/`, `src/components/{questions,scenes,learn}/`, `src/lib/`, `src/app/`, `scripts/` — schema, renderers, engine, routes, seeders
- `src/content/seed/index.ts` — top-level aggregator (only edit `src/content/seed/biology/index.ts`)
- `package.json`, `next.config.mjs`, `CLAUDE.md`
- Other subjects' seed directories (`src/content/seed/{maths,chemistry,physics}/`)

If you find you need a new scene type, question type, schema field, or shared component to do justice to a Vitalia topic, stop and surface the requirement to the user. Do not extend shared infrastructure from this worktree.

## Workflow

0. **Slice init.** From the biology worktree (`~/lumen-academy-biology`), run `scripts/slice-init.sh biology <nodeId>` (e.g. `scripts/slice-init.sh biology biology-cells-specialised-cells`). This resets the branch to `origin/main` and writes `.claude/slice-state.json` with `status="drafting"`. Update `nodeTitle` and `tier` in the file once you know them.
1. Confirm topic (zone + node concept), proposed node id (e.g. `biology-cells-animal-cell`), and tier.
2. Read all required docs.
3. Locate KS3 objective in DfE Science programme of study; copy verbatim.
4. Source 2 or more GCSE Biology spec refs from AQA, Edexcel, OCR.
5. For each misconception, source from CGP KS3 Biology, an examiner report, or a DfE exemplar. Cite in a code comment. At most 1 entry per node may be unsourced. The pre-commit linter rule R2 blocks any `(verify ...)` placeholder; pin sources before committing.
6. Draft the `SkillNode`:
   - 3+ scenes; consult the renderer matrix in `docs/02-content-schema.md` for `instructions` voice.
   - 2+ worked examples; second has a missing step.
   - 20+ questions, tier mix 6 to 8 / 6 to 8 / 4 to 6.
   - Type quotas: 6 to 10 multiple-choice, 4 to 7 numeric-entry where applicable (counts of plant types, magnification calculations, food-web nodes), 1 to 2 spot-misconception, 1+ drag, 1+ missing-step. **Labelled-image required for cell-anatomy and body-system nodes.** Data-extraction required for any node touching charts or tables of data. Sketch optional for cell labelling-from-memory.
   - 6+ misconceptions, sourced.
   - Challenge tier includes at least one early KS4 Foundation level item.
   - MCQ correctIndex distribution: rotate across A/B/C/D so no single position dominates. Linter rule R5 blocks any single position holding more than 50% of correctIndex values when MCQ count >= 6.
7. Pre-checks (run all four; fix every failure):
   - `npm run lint:content` (em dashes, source placeholders, US spellings, scene-instruction match, MCQ position distribution)
   - `npm run eval-content` (rubric validator)
   - `npm run typecheck`
   - `npm run lint`
8. Add the curriculum-map row to `docs/03-curriculum-map.md` (your zone's section) and any new `C-...` / `Q-...` probes to `docs/04-eval-set.md`.
9. Write handoff note (under 200 words): lift signals with sources, rubric lines unmet (with reason), open questions. Place it in the `handoffNotes` array in `.claude/slice-state.json`.
10. **Commit (do NOT push).** `git add` the scoped files (your seed file, `src/content/seed/biology/index.ts`, the curriculum-map row, the eval-set probes) and commit. The pre-commit hook will run the content linter automatically.
11. **Update `.claude/slice-state.json`**: `status="ready-for-review"`. Then report ready to the infra-owner. Do not push or open a PR — the infra-owner runs `scripts/slice-finish.sh biology` after review.

## Rubric reminder

`docs/06-authoring-playbook.md` is authoritative. Headline numbers:

- 3+ scenes, 2+ worked examples, 20+ questions, 6+ misconceptions
- Tier mix: 6 to 8 / 6 to 8 / 4 to 6
- UK English, metric, no em dashes, reading age 12 or younger
- All misconceptions cite a source in a code comment

## What not to do

- Do not author more than one node per invocation.
- Do not paraphrase the KS3 objective.
- Do not invent awarding-body refs.
- Do not include facts that depend on GCSE Higher level prior knowledge (DNA structure beyond "carries information", protein synthesis, hormone feedback loops).
- Do not introduce US wildlife (groundhog, blue jay, raccoon) or US-specific health framings (insurance, ER vs A&E).
- Do not extend the content schema, or touch any path under `src/types/`, `src/components/`, `src/lib/`, `src/app/`, or `scripts/`. Surface the need via `handoffNotes` in `.claude/slice-state.json`; the infra-owner session handles shared changes.
- Do not push or open a PR. Commit, but stop short of `git push` and `gh pr create` — the infra-owner runs `scripts/slice-finish.sh biology` after review.
- Do not seed Atlas. The infra-owner runs `npm run seed -- --subject=biology` after merge.

## Output and handoff

Single TypeScript file `src/content/seed/biology/<zoneId-tail>.ts` plus a one-line re-export added to `src/content/seed/biology/index.ts` (the per-subject aggregator; the top-level `src/content/seed/index.ts` re-exports from there and you do not edit it). The handoff note can live in chat or at `docs/_drafts/<nodeId>.md`.

After writing, run `npm run eval-content` and `npm run typecheck`; report both. Confirm zero FAIL findings before passing to review.
