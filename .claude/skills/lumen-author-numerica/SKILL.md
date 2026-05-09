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
2. `src/types/content.ts` — the exact `SkillNode` shape; your output must conform. Note the five `InteractiveScene` types and eleven `Question` types currently supported (see `docs/02-content-schema.md` for the data shapes). If you need a new scene type, stop and ask the user; schema changes are a separate step.
3. `docs/05-reference-shelf.md` — what to take from Bond 11+, CGP KS3 Maths, DfE programme of study, AQA, Edexcel, OCR, plus product cues from Brilliant, Seneca, Tassomai, Khan, Sparx, DragonBox.
4. `docs/06-authoring-playbook.md` — the must-pass rubric. This is the bar.
5. `docs/04-eval-set.md` — locate the zone section. Confirm coverage of every Content probe (`C-...`); satisfy every Question shape probe (`Q-...`) with at least one question. If the zone section does not exist yet, draft probes for it alongside the node.
6. `docs/03-curriculum-map.md` — find the topic. Copy the KS3 objective verbatim from there or from the DfE programme of study.
7. `src/content/seed/maths/fractions.ts` — structural template only. The fractions seed predates the new rubric; copy the file shape, not its quality bar.

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

Supported scene types in `src/types/content.ts`: `fraction-wall`, `number-line`, `diagram`, `simulation`, `labelled-diagram`. For most maths nodes, `simulation` (slider-driven) and `diagram` cover the cases. `labelled-diagram` is the workhorse for sciences but is also useful in maths for labelled coordinate planes, parts of a number line, and parts of a fraction (numerator, denominator, fraction bar). Topics like coordinates, sequences, and graphs may want a sketch-style scene; flag the schema addition rather than improvising. Slider-explore questions are required for continuous-relationship topics (ratio, percentages, probability). Data-extraction questions are required for charts and graphs.

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

1. Confirm the topic (zone + specific node concept), proposed node id (e.g. `maths-decimals-place-value`), and tier (`core` / `confident` / `challenge`).
2. Read all required docs above.
3. Locate the KS3 objective in the DfE programme of study; copy verbatim into `curriculum.ks3Objective`.
4. Source 2 or more GCSE spec refs from AQA, Edexcel, OCR for `curriculum.awardingBodies`.
5. For each misconception, source from CGP KS3 Maths, AQA / Edexcel / OCR examiner report, or DfE exemplar. Cite in a code comment above the entry, e.g. `// Source: CGP KS3 Maths Study Guide p.42 Common mistake box` or `// Source: AQA GCSE Maths examiner report 2023, Q5`. At most 1 entry per node may be `// Authored, no external source`.
6. Draft the `SkillNode`:
   - 3 or more scenes; at least one is interactive (drag-sort, slider scrub, sketch, click to explore)
   - 2 or more worked examples; the second has at least one missing step the engine can hide
   - 20 or more questions in tier mix 6 to 8 Core / 6 to 8 Confident / 4 to 6 Challenge
   - Type quotas: 6 to 10 multiple-choice, 4 to 7 numeric-entry, 1 to 2 spot-misconception, 1 or more drag (drag-order or drag-drop-builder), 1 or more missing-step. Slider-explore required for continuous-relationship topics. Data-extraction required for chart and graph topics.
   - 6 or more misconceptions; every entry sourced (with allowance for 1 unsourced).
   - At least one Challenge tier word problem in Bond 11+ shape (2 to 3 sentences, 1 to 2 unstated steps).
   - Anti-grind: no two consecutive questions test the same procedure on different numbers.
7. Run `npm run eval-content` against the new node. Fix every FAIL finding. WARN findings are review judgement calls; address or note in handoff.
8. Write the handoff note for review (under 200 words):
   - Lift signals included, with source per signal (Bond, CGP, examiner report, DfE).
   - Any rubric line not met, with reason.
   - Open questions for review.
9. Stop. Hand off to the user. Do not seed Atlas, commit, or push; the user runs `npm run seed` and `git commit` themselves after review.

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
- Do not extend `InteractiveScene` or `Question` type unions, or change any other content schema field, or touch any path under `src/types/`, `src/components/`, `src/lib/`, `src/app/`, or `scripts/`. Flag the need; user approves the schema change as a separate step in the infra-owner session.
- Do not seed Atlas or commit. The user runs `npm run seed` after review and `git commit` themselves.
- Do not write a US dollar sign, a US unit (feet, miles, gallons, fahrenheit), an em dash, or a "all of the above" option anywhere.

## Output and handoff

A single TypeScript file at `src/content/seed/maths/<zoneId-tail>.ts` exporting the new node, plus a one-line addition to `src/content/seed/maths/index.ts` re-exporting it (the top-level `src/content/seed/index.ts` re-exports from there; do not edit the top-level index). The new node's id and zoneId match the table above. The handoff note can be a short markdown block in chat, or a temporary file at `docs/_drafts/<nodeId>.md` if the user prefers a paper trail.

After writing, run `npm run eval-content` and `npm run typecheck` and report both results in the handoff. Confirm zero FAIL findings before declaring the draft ready for the `lumen-content-review` skill.
