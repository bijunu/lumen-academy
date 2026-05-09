---
name: lumen-author-mechanica
description: Author one Year 7 physics skill node for Lumen Academy in the Mechanica realm. Loads the rubric, reference shelf, and curriculum slice; produces a single SkillNode draft conforming to src/types/content.ts. Use when drafting a new physics node or re-grading an existing one. Quality bar is CGP KS3 Physics for breadth and clarity, with stretch reaching early KS4 GCSE Foundation tier.
disable-model-invocation: true
---

# Lumen Author: Mechanica (Year 7 Physics)

You are drafting one Year 7 physics skill node for Lumen Academy. Quality bar: at or above CGP KS3 Physics for breadth and clarity, with Challenge tier reaching early KS4 GCSE Foundation tier.

This skill produces ONE node per invocation. If the user asks for "a zone", confirm they want one node first.

## Required reading before drafting

Read these files in order. Do not skip; the rubric is the contract.

1. `docs/00-build-prompt.md` — product scope and curriculum coverage.
2. `src/types/content.ts` — exact `SkillNode` shape; output must conform. Five `InteractiveScene` types are supported; the workhorses for physics are `labelled-diagram` (clickable hotspots reveal labels) and `simulation`. The `labelled-image` question type pairs with `labelled-diagram` for assessment. If you need a force-arrow drag-and-balance simulator or a circuit-builder drag-drop scene, stop and ask the user.
3. `docs/05-reference-shelf.md` — what to take from CGP KS3 Physics, DfE Science programme of study, AQA / Edexcel / OCR GCSE Physics specs and examiner reports, plus product cues.
4. `docs/06-authoring-playbook.md` — the must-pass rubric.
5. `docs/04-eval-set.md` — locate the zone section. Confirm `C-...` coverage; satisfy `Q-...` probes. If absent, draft probes alongside the node.
6. `docs/03-curriculum-map.md` — find the topic. Copy the KS3 objective verbatim.
7. `src/content/seed/maths/fractions.ts` — structural template only (study the file shape, not the maths-specific content).

Note: Bond 11+ does not cover physics. Stretch references for Mechanica are CGP KS3, examiner reports, and early KS4 GCSE Physics Foundation tier.

## Mechanica realm guidance

Realm id: `mechanica`. Subject id: `physics`.

### Voice and UK context library

- UK transport: cycling on a flat road versus the South Downs, the Tube accelerating from a station, double-decker bus braking, electric car regen
- Domestic electricity: 230 V mains, kettle, immersion heater, torch with two AA cells, plug fuses
- Sport and motion: cricket bowling speeds (mph appears in commentary; convert to m/s for any quantitative work), football kick energy, cycling cadence
- Astronomy from the UK: night sky, the Moon's phases, ISS pass, why summer days are long
- Weather and forces: wind on a sail, friction on icy pavements, raindrops reaching terminal velocity

Avoid US-specific framings (school buses, gas stations, US units). Use metric throughout: m, m/s, N, J, W, V, A, Hz.

### Distractor patterns to lean on

Common Year 7 physics errors that make good distractors and misconceptions:

- Mass vs weight ("kg vs Newtons"; weight changes on the Moon, mass does not)
- Speed vs velocity (no direction in speed)
- Forces always cancel when moving at constant speed (often missed)
- Current vs voltage swap
- Series vs parallel current behaviour (current splits in parallel, not series)
- Energy vs power (joules vs watts)
- "Heavier objects fall faster" (Aristotelian, very persistent)
- "Light is made of particles only" or "waves only" (KS3 light is treated as a wave; particle picture comes later)

### Stretch ceiling

Challenge tier draws from CGP KS3 stretch and early KS4 GCSE Physics Foundation tier. Examples: simple F = m × a applied to a single push, V = I × R for a known resistor, GPE = m × g × h with g = 10 N/kg approximation. Do not pull content depending on GCSE Higher prior knowledge (kinematic equations, capacitance, AC analysis).

### Year 7 zones

| zoneId | zoneName |
|---|---|
| physics-forces | Forces |
| physics-gravity-mass | Gravity, Weight, Mass |
| physics-energy-stores-transfers | Energy Stores and Transfers |
| physics-electricity-circuits | Electricity and Circuits |
| physics-waves | Waves |
| physics-space | Space |

### Scene type guidance

Supported scene types: `fraction-wall`, `number-line`, `diagram`, `simulation`, `labelled-diagram`. For Mechanica, **`labelled-diagram` is the workhorse for static visuals** — use it for circuit-diagram identification (cell, switch, bulb, ammeter, voltmeter as hotspots), force-arrow scenes (a falling object with weight + air-resistance hotspots), wave-anatomy diagrams (crest, trough, wavelength, amplitude), planet-and-orbit layouts (Sun, Earth, Moon, axis tilt), and energy-store icons (kinetic, gravitational, chemical store labels on a roller coaster). Pair it with `labelled-image` so the learner places labels onto the same diagram for assessment.

Reach for `simulation` when the topic genuinely needs a continuous slider (force-balance scrub, circuit-current slider, orbital-distance play). Use `diagram` (the unstyled fallback) only when neither labelled-diagram nor simulation fits.

Slider-explore questions are required for force-vs-acceleration, voltage-vs-current, and gravity-vs-distance topics. Data-extraction questions are required for energy-flow charts and motion graphs. Sketch questions can supplement labelled-image where the learner draws force arrows or a basic circuit from memory.

## Worktree boundaries

This skill is designed to run inside a Mechanica-only worktree (e.g. `~/lumen-academy-physics` on branch `content/physics`). Stay in your lane.

**Allowed scope (this worktree):**
- `src/content/seed/physics/` — your seed files and per-subject `index.ts`
- `docs/03-curriculum-map.md` — the physics sections only
- `docs/04-eval-set.md` — the zone section for the node you're drafting
- `docs/_drafts/<nodeId>.md` — handoff note

**Off-limits without infra-owner approval (route via the main repo session):**
- `src/types/`, `src/components/{questions,scenes,learn}/`, `src/lib/`, `src/app/`, `scripts/` — schema, renderers, engine, routes, seeders
- `src/content/seed/index.ts` — top-level aggregator (only edit `src/content/seed/physics/index.ts`)
- `package.json`, `next.config.mjs`, `CLAUDE.md`
- Other subjects' seed directories (`src/content/seed/{maths,biology,chemistry}/`)

If you find you need a new scene type, question type, schema field, or shared component to do justice to a Mechanica topic, stop and surface the requirement to the user. Do not extend shared infrastructure from this worktree.

## Workflow

1. Confirm topic (zone + node concept), proposed node id (e.g. `physics-forces-balanced`), tier.
2. Read all required docs.
3. Locate KS3 objective in DfE Science programme of study; copy verbatim.
4. Source 2+ GCSE Physics spec refs from AQA, Edexcel, OCR.
5. For each misconception, source from CGP KS3 Physics, examiner report, or DfE exemplar. Cite in a code comment. At most 1 unsourced entry per node.
6. Draft the `SkillNode`:
   - 3+ scenes; at least one interactive
   - 2+ worked examples; second has a missing step
   - 20+ questions, tier mix 6 to 8 / 6 to 8 / 4 to 6
   - Type quotas: 6 to 10 multiple-choice, 4 to 7 numeric-entry, 1 to 2 spot-misconception, 1+ drag, 1+ missing-step. **Labelled-image encouraged for circuit-component, force-diagram, and wave-anatomy nodes.** Slider-explore required for continuous-relationship topics. Data-extraction required for motion-graph or energy-flow topics. Sketch optional for force-arrow or circuit-diagram drawing-from-memory.
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
- Do not include content depending on GCSE Higher prior knowledge (kinematic equations beyond v = u + at, AC circuit analysis, quantum effects, special relativity).
- Do not introduce US units (mph as a quantitative unit, feet, miles, fahrenheit). UK weather contexts can mention "miles per hour" only in qualitative news-style framing; quantitative work is m/s.
- Do not extend the content schema, or touch any path under `src/types/`, `src/components/`, `src/lib/`, `src/app/`, or `scripts/`. Flag the need; the infra-owner session handles shared changes.
- Do not seed Atlas or commit; user runs both after review.

## Output and handoff

Single TypeScript file `src/content/seed/physics/<zoneId-tail>.ts` plus a one-line re-export in `src/content/seed/physics/index.ts` (the per-subject aggregator; the top-level `src/content/seed/index.ts` re-exports from there and you do not edit it). Handoff note in chat or at `docs/_drafts/<nodeId>.md`.

After writing, run `npm run eval-content` and `npm run typecheck`; report both. Confirm zero FAIL findings before passing to review.
