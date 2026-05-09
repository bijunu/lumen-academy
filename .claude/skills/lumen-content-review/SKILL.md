---
name: lumen-content-review
description: Independently grade one Lumen Academy SkillNode draft against the playbook (docs/06), reference shelf (docs/05), and eval set (docs/04). Returns Pass / Revise / Reject with specific cited findings. Use after a lumen-author-* skill has produced a draft, or to re-grade an existing seeded node. Best run in a fresh Claude Code session so the review is independent of the authoring rationale.
disable-model-invocation: true
---

# Lumen Content Review

You grade one SkillNode draft against the Lumen Academy quality contract. Your output is a Pass, Revise, or Reject grade with cited findings against three pillars: rubric, lift signals, and eval probes.

## Independence is load-bearing

This skill exists to prevent marking your own homework. Two rules:

1. If you can see the author's rationale or working notes anywhere in this conversation, you are not independent. Stop and ask the user to start a fresh Claude Code session and invoke this skill there with the draft file path. The user can also spawn a sub-agent with fresh context (Agent tool, subagent_type general-purpose) and have it invoke the skill.
2. Until you have written the grade, do NOT read the author's handoff note. Read only the schema, the rubric, the shelf, the eval set, and the draft file. Read the handoff note only after the grade is set, to resolve disagreements.

If you cannot meet both conditions, refuse the review and explain why.

## Procedure

1. Confirm inputs from the user:
   - Path to the draft file (e.g. `src/content/seed/maths/decimals.ts`, `src/content/seed/biology/cells-animal-cell.ts`).
   - Optional: path to the handoff note (read only after grading).
   If a path is missing, ask.

2. Read these files in order. Do not skip:
   - `src/types/content.ts` — the SkillNode schema.
   - `docs/06-authoring-playbook.md` — the rubric.
   - `docs/05-reference-shelf.md` — lift signals expected per source.
   - `docs/04-eval-set.md` — locate the zone section for the draft's `zoneId`. If no section exists, the author should have drafted one alongside the node; flag absence under Pillar 3.
   - The draft file at the supplied path.

3. Run the pre-checks:
   - `npm run eval-content` and capture output. Filter to findings whose node id matches the draft.
   - `npm run typecheck`.
   - `npm run lint`.
   Any pre-check failure is at minimum a Revise (Reject if the file does not parse or the schema is broken).

4. Grade against three pillars (see below). Cite specific question ids, misconception ids, scene ids, or line numbers in the draft for every finding.

5. Set a grade: Pass, Revise, or Reject.

6. Write the report in the output format below.

7. ONLY now, if a handoff note path was supplied, read it. For any rubric line the author flagged as deliberately not met, accept or reject the rationale and add an addendum to the report.

## Three-pillar review

### Pillar 1: Rubric (`docs/06-authoring-playbook.md`)

The validator catches the countable items. You add the qualitative checks the validator cannot:

- KS3 objective is verbatim from the DfE programme of study, not paraphrased.
- All misconceptions cite a source in a `// Source:` code comment above the entry; at most one is `// Authored, no external source`.
- Misconception `description` reads from the learner's point of view ("Adding the same number to top and bottom gives an equivalent fraction"), not the teacher's diagnosis.
- Distractors in MCQs are pedagogically motivated; each wrong option corresponds to a specific misstep, not a random number.
- Reading age is 12 or younger across all stems and explanations.
- UK English throughout (colour, metre, learnt). No em dashes anywhere.
- At least one Challenge tier question matches Bond 11+ stem shape (2 to 3 sentences, 1 to 2 unstated steps) for maths, or early KS4 GCSE Foundation tier shape for sciences.
- Anti-grind: no two consecutive questions in the bank test the same procedure on different numbers (the validator cannot detect this).
- The first scene is a manipulation, not a static diagram, especially for abstract topics (algebra, ratio, BIDMAS).

### Pillar 2: Lift signals (`docs/05-reference-shelf.md`)

For the relevant subject, confirm at least one signal from each primary source is visible:

- Bond 11+ (maths only): one Challenge question matches Bond stem shape with 1 to 2 unstated steps.
- CGP KS3: every misconception reads like a "Common mistake" callout (short, specific, fix in one line).
- DfE programme of study: `ks3Objective` is verbatim.
- AQA / Edexcel / OCR: at least 2 boards' GCSE refs in `awardingBodies`.
- Examiner reports: misconceptions cite source years and question numbers where applicable.
- Brilliant: at least one scene is a manipulation, not a static diagram.
- Seneca: 20 or more questions across three tiers.
- Sparx: where a question pattern is the workhorse of the node, 3 to 5 varied numeric instances of it.
- DragonBox (abstract topics only): the first scene is a manipulation.

### Pillar 3: Eval probes (`docs/04-eval-set.md`)

For the draft's zone:

- Every Content probe (`C-...`) must be addressed by a misconception, scene, or worked example. List which artefact addresses each by id.
- Every Question shape probe (`Q-...`) must be satisfied by at least one question. Cite the question id.
- Tutor probes (`T-...`) are not your concern, but flag any draft content that would obviously break a tutor probe (for example a stem that invites off-topic conversation).

If the zone section does not exist in `docs/04-eval-set.md`, the author should have drafted it alongside the node. Absence without explicit author note is a Revise.

## Grade definitions

- **Pass**: all three pillars green. All pre-checks green. The node ships after the user runs `npm run seed`.
- **Revise**: one or more failures the author can fix without redoing the node. Most reviews land here. Examples: missing one misconception source, one Challenge question is not in Bond shape, one eval probe missed, voice register slips on one question stem.
- **Reject**: fundamental misalignment. Wrong topic. Wrong KS3 objective. Tier mix that cannot be fixed without rebuilding. Pervasive voice problems requiring full rewrite. Reject is rare; most issues are Revise.

A node with WARN-level findings only (no FAIL) can still be Pass; note the warnings so the author considers them on the next node.

## Output format

Produce one markdown report. Use this template literally:

```
# Review: <nodeId> (<title>)

**Grade**: <Pass | Revise | Reject>

## Pre-checks
- npm run eval-content: <pass | fail with summary of FAIL findings for this node>
- npm run typecheck: <pass | fail>
- npm run lint: <pass | fail>

## Pillar 1: Rubric
- ✓ <rule>: <evidence>
- ✗ <rule>: <evidence>, expected <bar>, found <actual>

## Pillar 2: Lift signals
- ✓ <source>: <evidence>
- ✗ <source>: <missing signal>

## Pillar 3: Eval probes
- ✓ C-FRAC-1: addressed by misconception <id>
- ✓ Q-FRAC-3: satisfied by question <id>
- ✗ C-FRAC-4: not addressed; cross-multiplication confusion has no misconception entry

## Required actions before resubmission
1. <specific action>
2. <specific action>

## Optional improvements (not blocking)
1. <suggestion>
```

Findings must cite specific ids or line numbers. Vague findings ("some questions are weak", "could be better") are not acceptable; rewrite them with citations or drop them.

## After grading: reading the handoff note

Once the grade is written, read the author's handoff note if supplied. For any rubric line the author flagged as deliberately not met:

- Accept the rationale if it reasonably applies to this node (for example: "topic does not have a continuous relationship, so slider-explore is omitted" is a fair claim for a primes node).
- Reject the rationale if it loosens the rubric inappropriately ("I could not find a Bond-style word problem so I skipped it" is not a fair claim).

Add a short "Addendum" section to the report covering acceptance or rejection of each flagged item. Update the grade only if the addendum reveals a previously hidden Pass condition (rare).

## What not to do

- Do not produce a grade without reading the rubric, shelf, eval set, and draft file.
- Do not read the handoff note before grading.
- Do not Pass a node that fails any pre-check.
- Do not write or edit the draft file. Your job is grading, not drafting.
- Do not seed Atlas or commit. The user runs both after the author has revised.
- Do not skip Pillar 3 if the zone has an eval section.
- Do not produce findings without citations to ids or line numbers.
- Do not mark a node Pass on the strength of one strong pillar; all three must be green.
