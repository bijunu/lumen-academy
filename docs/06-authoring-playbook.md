# Authoring Playbook

The rubric every Lumen Academy skill node must pass before it ships, and the rules for the components inside it. Pair with `docs/05-reference-shelf.md` for the quality signals each component should embody.

The playbook is the contract between authoring and review. An author follows it. A reviewer grades against it. Anything not in the rubric is style and may vary; anything in the rubric is a Pass or Revise gate.

## Reading order before drafting a node

1. `docs/00-build-prompt.md` for product scope
2. `docs/02-content-schema.md` for the data shape
3. `docs/05-reference-shelf.md` for quality signals
4. This playbook
5. The relevant slice of `docs/03-curriculum-map.md`

## The rubric

A node ships when all of the following are true.

### Structural minimums

- 3 or more interactive scenes
- 2 or more worked examples
- 20 or more questions
- 6 or more misconceptions
- Tier mix across questions: 6 to 8 Core, 6 to 8 Confident, 4 to 6 Challenge (totalling 20 or more)
- At least one Challenge question is a Bond-style multi-step word problem
- Prerequisites listed by node id; the chain walks back to a starter node in the same realm

### Curriculum tagging

- `curriculum.ks3Objective` taken verbatim (or lightly trimmed) from the DfE KS3 programme of study for the relevant subject
- `curriculum.awardingBodies` populated for at least two of `aqa`, `edexcel`, `ocr` using GCSE spec ref codes from the source board
- Where a topic only appears at GCSE Higher tier, the node is tier `challenge`

### Misconceptions

- Each misconception has `description`, `triggerAnswer`, `correction` (40 words or fewer), `reExplanation` (80 words or fewer)
- Every listed misconception cites a source in a code comment above its definition (CGP page, examiner report year and question, or a named DfE exemplar). Untraceable but pedagogically motivated entries go in a separate `// Authored, no external source` block and count toward at most 1 of the 6 or more
- Every misconception is referenced by `misconceptionId` from at least one question in the node, where the trigger applies

### Voice and language

- UK English throughout (colour, metre, litre, learnt, recognised, organised, programme)
- GBP and metric units only
- Reading age 12 or younger across all stems and explanations (Flesch-Kincaid Grade Level 7 or lower; aim for 6)
- No em dashes anywhere
- Hyphens minimised; restructure rather than chain hyphens
- Active voice in question stems
- Concrete examples from UK contexts (Tube journeys, school canteen, Premier League ages, Sunday roast portions, the Lake District)

### Forbidden

- "All of the above" or "None of the above" MCQ options
- US units or currency
- US sports, school grade names, food brands
- Distractors that are not pedagogically motivated
- Trivia-only questions
- Idioms or wordplay that depend on US English
- Gendered occupational stereotypes in word problems
- Unsourced factual claims in scene narration or worked examples
- Time-pressure mechanics in question stems ("hurry", "quick", "30 seconds")
- Reward-bait framing in stems ("Get this right for bonus XP")
- Synthetic place names that read American by accident (Springfield, Lakeville). Use real UK places (Sevenoaks, Tunbridge Wells, Dover, Manchester)

## Per-component rules

### Scenes

A scene is the first thing a learner meets on a node. It must run before any symbolic notation appears.

- At least one scene per node is interactive in a non-trivial way: drag-sort, slider scrub, sketch, click to explore, or rotate. A static diagram is not enough on its own.
- Scene `instructions` are a single sentence in the imperative ("Drag the markers ...", "Click on the bars ...").
- Scene data conforms to the typed shape for that scene type (see `src/types/content.ts`).
- A learner who completes the scenes but reads nothing else should leave with the right intuition for the concept.

### Worked examples

- The first worked example is fully revealed; the second (and any further) has at least one missing step the engine can hide. The author writes all steps; the engine handles the reveal pacing.
- Each step has `explanation` (one or two sentences) and, where relevant, `maths` (the algebraic or numeric line).
- No step explains more than one move. If a sentence contains "and then", split it.
- The final step states the result and ties it back to the question stem.

### Questions

Quotas per node, by type:

- Multiple-choice: 6 to 10 (most are Core, two or three Confident)
- Numeric entry: 4 to 7
- Spot-misconception: 1 to 2, each linked to a listed misconception by id
- Drag-order or drag-drop builder: 1 to 2
- Missing-step worked example: 1 or more (anchors the worked-example pedagogy)
- Slider-explore: required where the topic is a continuous relationship (ratio, percentage of, gravity, current and voltage, pH); optional otherwise
- Data-extraction: 1 or more where the KS3 objective involves charts, tables, or graph reading
- Sketch: required for coordinate-geometry and graph nodes
- Free-text: optional, encouraged for science "explain why" questions
- At least one Challenge tier word problem in numeric-entry or multiple-choice format

Distractor design rules for multiple-choice:

- Each wrong option corresponds to a specific misstep a learner might make
- Where possible, link the distractor to a misconception via `misconceptionId`
- The correct answer is not always the longest or shortest option, and not always B (rotate the position across the question set)
- Numeric distractors must be plausible. The "off by one" or "forgot to convert" answer is good; "negative answer to a length question" is not

Stems:

- One sentence where possible, two at most
- No leading definitions; the scene and worked example carry that
- No phrases like "Choose the best answer" or "Which of the following ...". Ask the question directly

### Tier calibration

- **Core**: a single application of the definition or rule introduced on this node. Direct numbers, no traps. A learner who has seen the worked example should answer in under 30 seconds.
- **Confident**: two-step, or requires choosing the right rule from a small set, or applies the rule in a slightly novel framing. Roughly 60 seconds for a strong Year 7.
- **Challenge**: multi-step word problem, novel context, at least one inferred intermediate step. Bond 11+ Maths Paper difficulty. Roughly 90 to 120 seconds. Includes early KS4 stretch where the topic supports it.

Additional rules:

- Challenge tier must include at least one question whose stem matches the shape of a Bond 11+ Maths Paper word problem: two to three sentences with one or two unstated intermediate steps. For science nodes, an early KS4 GCSE Foundation tier item meets the same bar.
- No two consecutive questions in the bank may test the exact same procedure on different numbers (anti-grind).

### Misconceptions

Schema reminder:

```ts
{ id, description, triggerAnswer, correction, reExplanation }
```

Quality rules:

- `description` names the belief from the learner's point of view ("Adding the same number to top and bottom gives an equivalent fraction"), not the diagnosis from the teacher's
- `correction` is a calm, one-sentence rebuttal. Avoid "wrong" or "incorrect"; use "actually" or "in fact"
- `reExplanation` offers a concrete worked alternative, often using a fraction wall, number line, or counter-example
- Cite the source in a code comment where the misconception is defined, for example `// Source: AQA GCSE Maths examiner report 2023, Q5` or `// Source: CGP KS3 Maths Study Guide p.42 Common mistake box`

## Lift signals from the reference shelf

A node's draft must reflect at least one signal from each of these sources for the relevant subject. Cross-checked at review.

| Source | Signal a draft node must show |
|---|---|
| Bond 11+ | One Challenge question is a multi-step word problem with an unstated intermediate step |
| CGP KS3 | Every misconception reads like a "Common mistake" callout: short, specific, fix in one line |
| DfE KS3 programme of study | `ks3Objective` is verbatim from the official document |
| AQA / Edexcel / OCR | At least two boards' GCSE spec refs in `awardingBodies` |
| Brilliant | At least one scene is a manipulation, not a static diagram |
| Seneca | 20 or more questions across three tiers |
| Sparx | Where a question pattern is the workhorse, three to five varied instances of it |
| DragonBox | For abstract topics (algebra, ratio, BIDMAS), the first scene is a manipulation |

## Worked example: a good question and a weak one

Topic: equivalent fractions, Confident tier.

### Weak

> Q. Which of these is equivalent to 2/3?
> A) 4/6  B) 3/4  C) 6/12  D) 2/6

Why it is weak:

- The correct answer is the first option (predictable position)
- The distractors are random rather than each tied to a misstep
- No misconception link
- Reads like trivia rather than reasoning

### Good

> Q. Aisha says 2/3 of her 24-marble bag is 16 marbles. Which fraction equivalent to 2/3 did she use?
> A) 12/18  B) 16/24  C) 8/12  D) 6/9

Why it is good:

- Word problem, UK name, real-world framing
- Every option is a valid equivalent fraction; the question tests which one matches this denominator
- Answering requires a numeric step (24 marbles, 2/3 of 24 = 16, so 16/24) plus a recognition step
- Wrong options each correspond to a different denominator, useful for review
- Correct answer is not in position A

A node should hold 8 to 10 questions on the "good" side of this line. The remaining structural questions (drill numerics, single-step Core MCQs) need not be word problems but must still satisfy the distractor and misconception rules.

## Authoring to review handoff

When an author finishes a draft node, they hand it off as:

1. The complete `SkillNode` object, conforming to `src/types/content.ts`
2. A short note (under 200 words) listing:
   - The lift signals deliberately included, with the source for each
   - Any rubric line the author chose not to meet, and why
   - Open questions for review

The reviewer grades only against this playbook and the schema. The reviewer does not see the author's working notes during grading; the handoff note is read only after the grade is set, to resolve disagreements.

## Updating the playbook

This playbook is the quality contract for Lumen Academy. Changes to the rubric require an explicit decision and a note in the relevant phase plan. Loosening a rule mid-Phase 10 means we authored content under a weaker bar; tightening it mid-Phase 10 means we re-grade everything authored before. Both are expensive. Get the rubric right at 10a; expect to leave it alone through 10e and beyond.
