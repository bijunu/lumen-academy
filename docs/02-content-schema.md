# Content Schema

Full type definitions live in `src/types/content.ts`. This document summarises the data model.

## SkillNode

The atomic unit of learning. Each node covers one concept at one tier level.

| Field | Type | Description |
|---|---|---|
| id | string | Unique identifier, e.g. `maths-fractions-equivalent` |
| title | string | Human readable title |
| description | string | Brief overview of the concept |
| subject | SubjectId | `maths`, `biology`, `chemistry`, or `physics` |
| realm | RealmId | `numerica`, `vitalia`, `elementia`, or `mechanica` |
| zoneId | string | Groups related nodes, e.g. `maths-fractions` |
| zoneName | string | Display name for the zone |
| tier | Tier | `core`, `confident`, or `challenge` |
| prerequisites | string[] | Node IDs that must be mastered first |
| curriculum | CurriculumTag | KS3 objective and awarding body references |
| scenes | InteractiveScene[] | Interactive introductions to the concept |
| workedExamples | WorkedExample[] | Step by step examples |
| questions | Question[] | Practice questions (discriminated union of 10 types) |
| misconceptions | Misconception[] | Common errors with corrections |
| masteryRule | MasteryRule | Streak target and spaced review schedule |

## Question Types

1. `multiple-choice` with numbered options and keyboard selection
2. `numeric-entry` with optional tolerance and unit
3. `drag-order` for sequencing
4. `spot-misconception` for reasoning
5. `slider-explore` for relationships
6. `free-text` with keyword matching
7. `drag-drop-builder` for construction
8. `missing-step` in worked examples
9. `data-extraction` from charts or paragraphs
10. `sketch` on coordinate grids
11. `labelled-image` for placing labels onto hotspots on a diagram (workhorse for biology cells, chemistry molecules, physics circuits)

## Scene Types

`InteractiveScene.type` is one of:

- `fraction-wall` — bars of varying denominators, click to highlight (maths)
- `number-line` — fractions or values on a line (maths; renderer pending)
- `diagram` — generic illustrative diagram with no required interaction (renderer pending)
- `simulation` — bespoke simulation tied to a specific node (renderer per simulation)
- `labelled-diagram` — SVG with click-to-reveal hotspots; the workhorse science scene type. Expected `data` shape:

  ```ts
  {
    svg?: string             // inline SVG markup (preferred for cells/molecules/circuits)
    image?: string           // OR external image src for photos
    viewBox?: string         // SVG viewBox; default '0 0 600 400'
    hotspots: {
      id: string
      x: number              // 0-100 (% of viewBox width)
      y: number              // 0-100 (% of viewBox height)
      label: string          // canonical label text
      description?: string   // optional one-line caption shown on reveal
    }[]
  }
  ```

## Labelled Image Question

`LabelledImageQuestion` adds drag-style labelling to a diagram. Shape:

```ts
{
  type: 'labelled-image'
  svg?: string
  image?: string
  viewBox?: string                       // default '0 0 600 400'
  hotspots: {
    id: string
    x: number                            // 0-100
    y: number                            // 0-100
    correctLabel: string
  }[]
  labels: string[]                       // pool, includes correctLabels and optional distractors
}
```

Grading: every hotspot must hold its `correctLabel` exactly. Any wrong placement reports `'incorrect'`.

## Zone

Groups of related SkillNodes within a realm, with an optional boss node.

## Realm

One of the four subject areas, containing multiple zones.

## Renderer support matrix

Single source of truth for which scene and question types are interactive vs static today. Author skills MUST consult this matrix before writing scene `instructions` text. Authors MUST NOT promise interactions the renderer cannot deliver — the slice-2 review cycle blocked four nodes for this exact failure.

### Scene types

| Scene `type` | Renderer | Author guidance for `instructions` |
|---|---|---|
| `fraction-wall` | Interactive (click to highlight bars) | Action verbs OK: "Click each bar to highlight it." |
| `labelled-diagram` | Interactive (SVG with click-to-reveal hotspots) | Action verbs OK: "Click each marker to reveal..." |
| `number-line` | Static (renders to a generic Continue card) | Narrative only: "Look at how each calculation is laid out as jumps on the line. Three jumps of -4 land on -12..." NO "drag", "click", "tap". |
| `diagram` | Static (renders to a generic Continue card) | Narrative only. Treat as a labelled illustration the learner reads, not a thing they manipulate. |
| `simulation` | Static (renders to a generic Continue card unless the node ships its own bespoke renderer) | Narrative only. If a node truly needs a bespoke simulation renderer, surface that as an infra request to the main checkout — do not write action-promising copy hoping a future renderer fills the gap. |

### Question types

| Question `type` | Renderer status |
|---|---|
| `multiple-choice` | Interactive (numbered keyboard selection 1-9) |
| `numeric-entry` | Interactive (text field with optional unit + tolerance) |
| `drag-order` | Interactive (drag to reorder list items) |
| `spot-misconception` | Interactive (click the unsound statement) |
| `slider-explore` | Interactive (drag a slider to a target value) |
| `free-text` | Interactive (free-text with keyword matching) |
| `drag-drop-builder` | Interactive (drag tokens onto a build target) |
| `missing-step` | Interactive (fill the hidden step in a worked example) |
| `data-extraction` | Interactive (read values off a chart or paragraph) |
| `sketch` | Interactive (sketch on a coordinate grid) |
| `labelled-image` | Interactive (drag labels onto SVG hotspots) |

All eleven question types render interactively today. The matrix exists primarily for **scenes**, where the gap between authored intent and renderer reality has been the dominant failure mode.

### When the matrix changes

Adding a new interactive scene type (e.g. shipping a real `number-line` renderer) is an infra change owned by the main checkout. Update this matrix in the same PR. Author skills key off this matrix; they should not lag the renderer.
