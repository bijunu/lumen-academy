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
2. `src/types/content.ts` — exact `SkillNode` shape; output must conform. Five `InteractiveScene` types are supported; the workhorses for biology are `labelled-diagram` (clickable hotspots reveal labels) and `simulation`. The `labelled-image` question type pairs with `labelled-diagram` for assessment. If you need a continuous-magnification microscopy scene or a drag-the-organism-into-the-food-web builder, stop and ask the user.
3. `docs/05-reference-shelf.md` — what to take from CGP KS3 Biology, DfE Science programme of study, AQA / Edexcel / OCR GCSE Biology specs and examiner reports, plus product cues from Brilliant, Seneca, Tassomai, Khan.
4. `docs/06-authoring-playbook.md` — the must-pass rubric.
5. `docs/04-eval-set.md` — locate the zone section. Confirm coverage of every `C-...` probe; satisfy every `Q-...` probe. If the zone section does not exist, draft it alongside the node.
6. `docs/03-curriculum-map.md` — find the topic. Copy the KS3 objective verbatim.
7. `src/content/seed/maths/fractions.ts` — structural template only (study the file shape, not the maths-specific content).

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

Supported scene types: `fraction-wall`, `number-line`, `diagram`, `simulation`, `labelled-diagram`. For Vitalia, **`labelled-diagram` is the workhorse** — use it for the labelled animal cell, plant cell, body systems (digestive, circulatory, respiratory), flower parts, leaf cross-section, food webs (organisms as hotspots), and microscope parts. Pair it with the `labelled-image` question type so the learner places labels onto the same diagram for assessment.

Reach for `simulation` only when the topic genuinely needs a continuous slider (microscope magnification scrub, food-web disruption strength). Use `diagram` (the unstyled fallback) only when a labelled-diagram would be inappropriate.

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

1. Confirm topic (zone + node concept), proposed node id (e.g. `biology-cells-animal-cell`), and tier.
2. Read all required docs.
3. Locate KS3 objective in DfE Science programme of study; copy verbatim.
4. Source 2 or more GCSE Biology spec refs from AQA, Edexcel, OCR.
5. For each misconception, source from CGP KS3 Biology, an examiner report, or a DfE exemplar. Cite in a code comment. At most 1 entry per node may be unsourced.
6. Draft the `SkillNode`:
   - 3+ scenes; at least one interactive
   - 2+ worked examples; second has a missing step
   - 20+ questions, tier mix 6 to 8 / 6 to 8 / 4 to 6
   - Type quotas: 6 to 10 multiple-choice, 4 to 7 numeric-entry where applicable (counts of plant types, magnification calculations, food-web nodes), 1 to 2 spot-misconception, 1+ drag, 1+ missing-step. **Labelled-image required for cell-anatomy and body-system nodes.** Data-extraction required for any node touching charts or tables of data. Sketch optional for cell labelling-from-memory.
   - 6+ misconceptions, sourced.
   - Challenge tier includes at least one early KS4 Foundation level item.
7. Run `npm run eval-content`. Fix every FAIL.
8. Write handoff note (under 200 words): lift signals with sources, rubric lines unmet (with reason), open questions.
9. Stop. Hand off to the user.

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
- Do not extend the content schema, or touch any path under `src/types/`, `src/components/`, `src/lib/`, `src/app/`, or `scripts/`. Flag the need; the infra-owner session handles shared changes.
- Do not seed Atlas or commit; user runs both after review.

## Output and handoff

Single TypeScript file `src/content/seed/biology/<zoneId-tail>.ts` plus a one-line re-export added to `src/content/seed/biology/index.ts` (the per-subject aggregator; the top-level `src/content/seed/index.ts` re-exports from there and you do not edit it). The handoff note can live in chat or at `docs/_drafts/<nodeId>.md`.

After writing, run `npm run eval-content` and `npm run typecheck`; report both. Confirm zero FAIL findings before passing to review.
