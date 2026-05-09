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
2. `src/types/content.ts` — exact `SkillNode` shape; output must conform. Note the four `InteractiveScene` types currently supported; if you need a microscopy zoom or organism-builder scene type, stop and ask the user.
3. `docs/05-reference-shelf.md` — what to take from CGP KS3 Biology, DfE Science programme of study, AQA / Edexcel / OCR GCSE Biology specs and examiner reports, plus product cues from Brilliant, Seneca, Tassomai, Khan.
4. `docs/06-authoring-playbook.md` — the must-pass rubric.
5. `docs/04-eval-set.md` — locate the zone section. Confirm coverage of every `C-...` probe; satisfy every `Q-...` probe. If the zone section does not exist, draft it alongside the node.
6. `docs/03-curriculum-map.md` — find the topic. Copy the KS3 objective verbatim.
7. `src/content/seed/maths-fractions.ts` — structural template only.

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

Currently supported scene types: `fraction-wall`, `number-line`, `diagram`, `simulation`. For Vitalia, almost everything will be `diagram` (labelled cell, body system, food web) or `simulation` (microscope zoom, food-web disruption slider). If you need a dedicated microscopy scene type or an organism-builder, flag it; do not improvise. Data-extraction questions are required for variation-and-classification topics. Sketch questions are required where the learner draws (e.g. labelling a cell from memory).

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
   - Type quotas: 6 to 10 multiple-choice, 4 to 7 numeric-entry where applicable (counts of plant types, magnification calculations, food-web nodes), 1 to 2 spot-misconception, 1+ drag, 1+ missing-step. Data-extraction required for any node touching charts or tables of data. Sketch required for cell or system labelling.
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
- Do not extend the content schema. Flag the need.
- Do not seed Atlas or commit; user runs both after review.

## Output and handoff

Single TypeScript file `src/content/seed/biology-<zoneId-tail>.ts` plus a one-line re-export added to `src/content/seed/index.ts`. The handoff note can live in chat or at `docs/_drafts/<nodeId>.md`.

After writing, run `npm run eval-content` and `npm run typecheck`; report both. Confirm zero FAIL findings before passing to review.
