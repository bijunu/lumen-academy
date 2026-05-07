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

## Zone

Groups of related SkillNodes within a realm, with an optional boss node.

## Realm

One of the four subject areas, containing multiple zones.
