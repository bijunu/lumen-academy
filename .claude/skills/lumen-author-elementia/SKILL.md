---
name: lumen-author-elementia
description: Author one Year 7 chemistry skill node for Lumen Academy in the Elementia realm. Loads the rubric, reference shelf, and curriculum slice; produces a single SkillNode draft conforming to src/types/content.ts. Use when drafting a new chemistry node or re-grading an existing one. Quality bar is CGP KS3 Chemistry for breadth and clarity, with stretch reaching early KS4 GCSE Foundation tier.
disable-model-invocation: true
---

# Lumen Author: Elementia (Year 7 Chemistry)

You are drafting one Year 7 chemistry skill node for Lumen Academy. Quality bar: at or above CGP KS3 Chemistry for breadth and clarity, with Challenge tier reaching early KS4 GCSE Foundation tier.

This skill produces ONE node per invocation. If the user asks for "a zone", confirm they want one node first.

## Required reading before drafting

Read these files in order. Do not skip; the rubric is the contract.

1. `docs/00-build-prompt.md` — product scope and curriculum coverage.
2. `src/types/content.ts` — exact `SkillNode` shape; output must conform. Five `InteractiveScene` types are supported; the workhorses for chemistry are `labelled-diagram` (clickable hotspots reveal labels) and `simulation`. The `labelled-image` question type pairs with `labelled-diagram` for assessment. If you need a particle-model heat-slider simulator or a periodic-table picker, stop and ask the user.
3. `docs/05-reference-shelf.md` — what to take from CGP KS3 Chemistry, DfE Science programme of study, AQA / Edexcel / OCR GCSE Chemistry specs and examiner reports, plus product cues.
4. `docs/06-authoring-playbook.md` — the must-pass rubric.
5. `docs/04-eval-set.md` — locate the zone section. Confirm `C-...` coverage; satisfy `Q-...` probes. If absent, draft probes alongside the node.
6. `docs/03-curriculum-map.md` — find the topic. Copy the KS3 objective verbatim.
7. `src/content/seed/maths/fractions.ts` — structural template only (study the file shape, not the maths-specific content).

Note: Bond 11+ does not cover chemistry. Stretch references for Elementia are CGP KS3, examiner reports, and early KS4 GCSE Chemistry Foundation tier.

## Elementia realm guidance

Realm id: `elementia`. Subject id: `chemistry`.

### Voice and UK context library

- Domestic UK chemistry: kettle limescale, hard water in the South East, baking soda, vinegar, lemon juice
- Cooking: salt dissolving in soup, butter melting, cake baking (raising agents), tea brewing
- Cleaning and household: soap, washing-up liquid, bleach (mention only safety-aware contexts), garden lime
- Garden and seasonal: soil pH, compost decomposition, frost on a windowpane (state changes)
- School laboratory: Bunsen burner colours, test tubes, beakers, filter paper, evaporating basin

Avoid US household brand names; prefer generic terms (washing-up liquid, white vinegar, bicarbonate of soda).

### Distractor patterns to lean on

Common Year 7 chemistry errors that make good distractors and misconceptions:

- Element vs compound vs mixture confusion (water as "an element", air as "a compound")
- Atom vs molecule vs ion mix-up
- "Particles get bigger when heated" (the classic; particles space increases, not size)
- Solid vs liquid vs gas particle behaviour mistakes (particles in solids "stop completely")
- Group vs Period on the Periodic Table
- Acid + alkali names confused (hydrochloric vs sulfuric, sodium hydroxide vs sodium chloride)
- Melting vs dissolving (very common Year 7 confusion: "sugar melted in my tea")
- pH scale: thinking acids are pH 7 or below 0

### Stretch ceiling

Challenge tier draws from CGP KS3 stretch boxes and early KS4 GCSE Chemistry Foundation tier. Examples: simple ion charge prediction from group number, balanced word equations for simple reactions, qualitative pH change predictions. Do not pull content requiring GCSE Higher prior knowledge (orbitals, mole calculations, electronegativity).

### Year 7 zones

| zoneId | zoneName |
|---|---|
| chemistry-particle-model | Particle Model |
| chemistry-separating-mixtures | Separating Mixtures |
| chemistry-atoms-elements-compounds | Atoms, Elements, Compounds |
| chemistry-periodic-table | Periodic Table |
| chemistry-acids-alkalis | Acids and Alkalis |
| chemistry-ph | pH |
| chemistry-simple-reactions | Simple Reactions |

### Scene type guidance

Supported scene types: `fraction-wall`, `number-line`, `diagram`, `simulation`, `labelled-diagram`. For Elementia, **`labelled-diagram` is the workhorse** — use it for laboratory apparatus (Bunsen burner parts, distillation set-up, filter funnel and conical flask), simple molecule structures (water, methane, oxygen, carbon dioxide as ball-and-stick), particle-arrangement diagrams (solid / liquid / gas particle layouts as snapshots), and the periodic-table layout (group / period hotspots). Pair it with `labelled-image` so the learner places labels onto the same diagram for assessment.

Reach for `simulation` only when the topic genuinely needs a continuous slider (heat-driven state-change, pH-scale slider). Use `diagram` (the unstyled fallback) only when neither labelled-diagram nor simulation fits.

Slider-explore questions are required where the topic is continuous (pH scale, temperature in state-change). Data-extraction questions are required for any node involving reading mass-of-product or volume tables. Sketch questions can supplement for particle-arrangement drawing-from-memory.

## Worktree boundaries

This skill is designed to run inside an Elementia-only worktree (e.g. `~/lumen-academy-chemistry` on branch `content/chemistry`). Stay in your lane.

**Allowed scope (this worktree):**
- `src/content/seed/chemistry/` — your seed files and per-subject `index.ts`
- `docs/03-curriculum-map.md` — the chemistry sections only
- `docs/04-eval-set.md` — the zone section for the node you're drafting
- `docs/_drafts/<nodeId>.md` — handoff note

**Off-limits without infra-owner approval (route via the main repo session):**
- `src/types/`, `src/components/{questions,scenes,learn}/`, `src/lib/`, `src/app/`, `scripts/` — schema, renderers, engine, routes, seeders
- `src/content/seed/index.ts` — top-level aggregator (only edit `src/content/seed/chemistry/index.ts`)
- `package.json`, `next.config.mjs`, `CLAUDE.md`
- Other subjects' seed directories (`src/content/seed/{maths,biology,physics}/`)

If you find you need a new scene type, question type, schema field, or shared component to do justice to an Elementia topic, stop and surface the requirement to the user. Do not extend shared infrastructure from this worktree.

## Workflow

1. Confirm topic (zone + node concept), proposed node id (e.g. `chemistry-particle-model-states`), tier.
2. Read all required docs.
3. Locate KS3 objective in DfE Science programme of study; copy verbatim.
4. Source 2+ GCSE Chemistry spec refs from AQA, Edexcel, OCR.
5. For each misconception, source from CGP KS3 Chemistry, examiner report, or DfE exemplar. Cite in a code comment. At most 1 unsourced entry per node.
6. Draft the `SkillNode`:
   - 3+ scenes; at least one interactive
   - 2+ worked examples; second has a missing step
   - 20+ questions, tier mix 6 to 8 / 6 to 8 / 4 to 6
   - Type quotas: 6 to 10 multiple-choice, 4 to 7 numeric-entry, 1 to 2 spot-misconception, 1+ drag, 1+ missing-step. **Labelled-image encouraged for molecule structure, periodic-table-region, and apparatus identification nodes.** Slider-explore required for pH and state-change topics. Data-extraction required for any reading-from-table topic. Sketch optional for particle-arrangement drawings.
   - 6+ misconceptions, sourced.
   - Challenge tier includes at least one early KS4 Foundation level item.
7. Run `npm run eval-content`. Fix every FAIL.
8. Write handoff note (under 200 words).
9. Stop. Hand off to the user.

## Rubric reminder

`docs/06-authoring-playbook.md` is authoritative.

- 3+ scenes, 2+ worked examples, 20+ questions, 6+ misconceptions
- Tier mix: 6 to 8 / 6 to 8 / 4 to 6
- UK English, metric, no em dashes, reading age 12 or younger
- All misconceptions cite a source

## What not to do

- Do not author more than one node per invocation.
- Do not paraphrase the KS3 objective.
- Do not invent awarding-body refs.
- Do not include content depending on GCSE Higher prior knowledge (electron configuration beyond shells, mole calculations, redox).
- Do not introduce US units (Fahrenheit, gallons) or US chemistry names ("baking soda" is acceptable; "a quarter-cup of vinegar" is not — use millilitres).
- Do not extend the content schema, or touch any path under `src/types/`, `src/components/`, `src/lib/`, `src/app/`, or `scripts/`. Flag the need; the infra-owner session handles shared changes.
- Do not seed Atlas or commit; user runs both after review.

## Output and handoff

Single TypeScript file `src/content/seed/chemistry/<zoneId-tail>.ts` plus a one-line re-export in `src/content/seed/chemistry/index.ts` (the per-subject aggregator; the top-level `src/content/seed/index.ts` re-exports from there and you do not edit it). Handoff note in chat or at `docs/_drafts/<nodeId>.md`.

After writing, run `npm run eval-content` and `npm run typecheck`; report both. Confirm zero FAIL findings before passing to review.
