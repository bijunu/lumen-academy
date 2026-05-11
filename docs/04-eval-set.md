# Eval Set

Probes that authored content and the AI tutor must handle for each zone in Lumen Academy. The eval set grows alongside content authoring; populate the per-zone section as part of the relevant Phase 10e+ slice.

This file is read by:

- Authors, before drafting a node, to confirm coverage of known learner mistakes.
- Reviewers, before grading a draft against `docs/06-authoring-playbook.md`.
- The future review skill (Phase 10d), as part of its evaluation context.

## Probe taxonomy

- **C** = Content probe. A learner mistake, scenario, or edge case the authored node must address through its misconceptions, scenes, or worked examples.
- **Q** = Question shape probe. A specific question pattern at least one question in the bank must satisfy.
- **T** = Tutor probe. A learner input the tutor must handle correctly when scoped to a node in this zone.

## How to use

When authoring a node:

1. Open the section for the relevant zone.
2. Confirm the draft includes coverage for each Content probe (`C-...`).
3. Confirm at least one question satisfies each Question shape probe (`Q-...`).
4. Note any probe the draft cannot meet, with reason, in the handoff note to review.

When reviewing:

1. Cross-check the draft against this list before applying the rubric.
2. A missed probe without a documented reason is a Revise.

When verifying the tutor:

1. Use Tutor probes (`T-...`) as inputs in a tutor session scoped to a node in this zone.
2. The observed response must match the expected behaviour.

## Format per zone

```
### Zone: <Realm> > <Zone name>

#### Content probes
- C-<KEY>-<n>: <one-sentence learner mistake or scenario>.
  - Required handling: <what the node must include>.

#### Question shape probes
- Q-<KEY>-<n>: <one-sentence question pattern>.

#### Tutor probes
- T-<KEY>-<n>: Given <learner input>, the tutor <expected behaviour>.
```

## Zone: Numerica > Fractions

Covers `maths-fractions-what-is`, `maths-fractions-equivalent`, `maths-fractions-simplify`, `maths-fractions-add-subtract`, plus future fraction-arithmetic nodes (multiplying/dividing fractions, mixed numbers).

### Content probes

- C-FRAC-1: Learner adds the same number to numerator and denominator and believes the result is equivalent (2/3 becomes 4/5).
  - Required handling: misconception entry; at least one question with `misconceptionId` linking to this misconception.
- C-FRAC-2: Learner stops simplifying at a non-HCF common factor (8/12 becomes 4/6 instead of 2/3).
  - Required handling: misconception entry; at least one Confident or Challenge question that exposes a partially simplified intermediate form.
- C-FRAC-3: Learner believes a larger numerator and denominator means a larger fraction (4/8 is greater than 1/2).
  - Required handling: misconception entry; a scene or worked example that uses a fraction wall or number line as a concrete counter-example.
- C-FRAC-4: Learner confuses cross-multiplication with finding equivalent fractions.
  - Required handling: misconception entry, or a worked example that explicitly contrasts the two techniques.
- C-FRAC-5: Learner swaps numerator and denominator when reading or writing a fraction.
  - Required handling: misconception entry on the introductory node; clear scene labelling of "top" and "bottom".
- C-FRAC-6: Learner reads a fraction as a ratio of two separate quantities rather than a part of a whole.
  - Required handling: a scene or worked example that frames the same number as a fraction and as a ratio side by side.
- C-FRAC-7: Learner believes a fraction cannot have a numerator larger than its denominator (rejects improper fractions).
  - Required handling: misconception entry; at least one Challenge tier question that explicitly tests improper fraction recognition (for example, identifying which option among given fractions is greater than one whole).
- C-FRAC-8: Learner reads the line in a fraction as a subtraction or addition sign rather than "out of".
  - Required handling: misconception entry; a scene or worked example that explicitly labels the line as "out of".
- C-FRAC-9: Learner adds (or subtracts) two fractions by combining the numerators AND the denominators (so 1/2 + 1/3 becomes 2/5, or 2/5 + 1/5 becomes 3/10). (Covers `maths-fractions-add-subtract`.)
  - Required handling: misconception entry; at least one spot-misconception question that names the "add tops and bottoms" trap and at least one MCQ whose distractors include the wrongly combined denominator.
- C-FRAC-10: Learner attempts to add or subtract fractions with different denominators without first finding a common denominator. (Covers `maths-fractions-add-subtract`.)
  - Required handling: misconception entry; at least one Confident or Challenge question whose stem requires the LCM step before combining numerators, plus a worked example or missing-step that walks the rewriting.
- C-FRAC-11: Learner combines numerators correctly but forgets to simplify, leaving 6/12 instead of 1/2. (Covers `maths-fractions-add-subtract`.)
  - Required handling: misconception entry; at least one question whose correct answer is in simplest form but where the unsimplified intermediate appears as a distractor.
- C-FRAC-12: Learner multiplies fractions by adding numerators and adding denominators (1/2 x 1/3 = 2/5). (Covers `maths-fractions-multiply-divide`.)
  - Required handling: misconception entry; at least one MCQ whose distractors include the added-tops-and-bottoms answer; one spot-misconception that names the trap.
- C-FRAC-13: Learner believes a common denominator is required before multiplying two fractions, the same way it is for adding. (Covers `maths-fractions-multiply-divide`.)
  - Required handling: misconception entry; at least one Confident or Challenge question that exposes the unnecessary-LCM step, plus a worked example that contrasts adding with multiplying.
- C-FRAC-14: Learner believes dividing always makes the result smaller, so rejects answers larger than the dividend when dividing by a fraction less than 1. (Covers `maths-fractions-multiply-divide`.)
  - Required handling: misconception entry; at least one question on `1/2 / 1/4` or similar where the correct answer is larger than the dividend; a scene that walks "how many quarters fit in a half".
- C-FRAC-15: Learner flips the dividend rather than the divisor when applying Keep, Flip, Change. (Covers `maths-fractions-multiply-divide`.)
  - Required handling: misconception entry; at least one missing-step or numeric-entry question that walks the correct flip on the divisor.
- C-FRAC-16: Learner reads a mixed number as an implicit multiplication, so writes 2 1/3 = 2 x 1/3 = 2/3. (Covers `maths-fractions-mixed-numbers`.)
  - Required handling: misconception entry; at least one spot-misconception question that names the implicit-multiplication slip.
- C-FRAC-17: Learner adds mixed numbers by adding the whole parts and the fractional parts separately and never carries when the fractional sum exceeds one whole. (Covers `maths-fractions-mixed-numbers`.)
  - Required handling: misconception entry; at least one Confident or Challenge question whose stem produces a fractional sum greater than one whole.
- C-FRAC-18: Learner subtracts mixed numbers without borrowing across the whole, so produces a negative fractional part or silently reverses the subtraction. (Covers `maths-fractions-mixed-numbers`.)
  - Required handling: misconception entry; at least one missing-step or numeric-entry question that walks the borrow.
- C-FRAC-19: Learner multiplies mixed numbers by multiplying the wholes together and the fractions together, dropping the cross-product terms. (Covers `maths-fractions-mixed-numbers`.)
  - Required handling: misconception entry; at least one MCQ whose distractors include the dropped-cross-product answer.

### Question shape probes

- Q-FRAC-1: At least one Challenge tier word problem requires recognising equivalent fractions inside a multi-step calculation (recipe scaling, money sharing, ingredient proportions).
- Q-FRAC-2: At least one Confident MCQ has all four options as valid equivalent fractions of different anchor fractions, so the question tests selection rather than generation.
- Q-FRAC-3: At least one numeric entry asks for a missing numerator or denominator in `a/b = ?/c` form.
- Q-FRAC-4: At least one spot-misconception question presents a learner's reasoning and asks whether the method is sound.
- Q-FRAC-5: At least one drag-order question places fractions in size order using a mix of simple and equivalent forms.
- Q-FRAC-6: At least one numeric entry asks the learner to simplify a fraction whose simplest form is not visually obvious (for example 24/36 to 2/3).
- Q-FRAC-7: At least one Challenge tier MCQ tests recognising fractions greater than one whole (improper fractions), with distractors that include valid proper fractions.
- Q-FRAC-8: At least one numeric-entry on the add-subtract node requires the learner to add or subtract fractions with different denominators (denominators chosen so the LCM is small, e.g. 3 and 4, 4 and 6, 6 and 8). (Covers `maths-fractions-add-subtract`.)
- Q-FRAC-9: At least one Challenge tier word problem on the add-subtract node frames a UK context (water butt, charity stall, builder's mix) and requires both finding a common denominator and simplifying the result. (Covers `maths-fractions-add-subtract`.)
- Q-FRAC-10: At least one missing-step question on the add-subtract node walks the LCM rewriting before the numerators are combined. (Covers `maths-fractions-add-subtract`.)
- Q-FRAC-11: At least one MCQ on the multiply-divide node has the added-tops-and-bottoms slip as a distractor (for example 2/5 alongside 1/6 for 1/2 x 1/3). (Covers `maths-fractions-multiply-divide`.)
- Q-FRAC-12: At least one numeric-entry on the multiply-divide node divides by a fraction less than 1 and produces an answer larger than the dividend. (Covers `maths-fractions-multiply-divide`.)
- Q-FRAC-13: At least one Challenge tier word problem on the multiply-divide node frames a UK context (recipe scaling, ribbon cutting, share-of-budget) and requires KFC division with simplification. (Covers `maths-fractions-multiply-divide`.)
- Q-FRAC-14: At least one numeric-entry on the mixed-numbers node requires conversion from mixed to improper form before applying multiplication or division. (Covers `maths-fractions-mixed-numbers`.)
- Q-FRAC-15: At least one MCQ on the mixed-numbers node tests subtraction with borrowing where the wrongly negative fractional part is a distractor. (Covers `maths-fractions-mixed-numbers`.)
- Q-FRAC-16: At least one Challenge tier word problem on the mixed-numbers node requires both addition and subtraction of mixed numbers in a UK context (rope cut, recipe, market stall). (Covers `maths-fractions-mixed-numbers`.)

### Tutor probes

- T-FRAC-1: Given "I think 1/2 and 1/3 are the same because they both have a 1 on top", the tutor's first reply is a Socratic prompt about what the bottom number represents, not a direct correction.
- T-FRAC-2: Given a wrong answer matching the additive misconception trigger (for example `2/3 = 4/5`), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-FRAC-3: Given "Can you just give me the answer?", the tutor declines and offers a scaffolded next step.
- T-FRAC-4: Given an off-topic input (for example a question about US dollar prices), the tutor steers back to fractions politely.
- T-FRAC-5: After three wrong attempts in a row paired with negative sentiment, the tutor offers a break or an easier sibling node and the frustration signal is logged for the parent digest.
- T-FRAC-6: Given a request for an inline definition (tap on "denominator"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-FRAC-7: Given "I added 1/2 and 1/3 and got 2/5 by adding the tops and bottoms", the tutor's first reply is a Socratic prompt about whether halves and thirds are the same size, not a direct correction. (Covers `maths-fractions-add-subtract`.)
- T-FRAC-8: Given a wrong answer matching the no-common-denominator trigger (for example "1/2 + 1/4 = 2/6"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint. (Covers `maths-fractions-add-subtract`.)
- T-FRAC-9: Given "I multiplied 1/2 by 1/3 and got 2/5 by adding the tops and bottoms", the tutor's first reply is a Socratic prompt about what "of" means with the area model, not a direct correction. (Covers `maths-fractions-multiply-divide`.)
- T-FRAC-10: Given a wrong answer matching the divide-makes-smaller trigger (for example "1/2 / 1/4 must be less than 1/2"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint. (Covers `maths-fractions-multiply-divide`.)
- T-FRAC-11: Given "I read 2 1/3 as 2 times 1/3", the tutor's first reply is a Socratic prompt about whether 2 1/3 sits between 2 and 3 on the number line. (Covers `maths-fractions-mixed-numbers`.)

## Zone: Numerica > Four Operations

Covers `maths-four-operations-negative-numbers-add-subtract` plus future four-operations nodes (multiplying and dividing negatives, formal written methods on multi-digit integers, choosing the operation in word problems, mixed-operation chains).

### Content probes

- C-4OP-1: Learner believes the "two negatives make a positive" rule applies to addition and subtraction, so writes `(-6) + (-7) = +13` or similar.
  - Required handling: misconception entry; at least one numeric, MCQ, or spot-misconception question whose distractors include the wrongly positive answer.
- C-4OP-2: Learner believes a negative number with a larger digit is greater than one with a smaller digit (treats `-12 > -5` because `12 > 5`).
  - Required handling: misconception entry; at least one comparison or ordering question that pairs negatives whose magnitudes invert the order.
- C-4OP-3: Learner believes that subtraction can never produce a result larger than the starting number, even when subtracting a negative.
  - Required handling: misconception entry; at least one Confident or Challenge question whose stem invites the learner to recognise that `5 - (-4) > 5`.
- C-4OP-4: Learner believes you cannot subtract a larger number from a smaller, so treats `6 - 9` as impossible or reverses it to `9 - 6 = 3`.
  - Required handling: misconception entry; at least one numeric or MCQ question that crosses zero on a single subtraction.
- C-4OP-5: Learner computes a signed sum by ignoring the signs, adding the digits, then attaching a sign at the end somewhat arbitrarily (so `-3 + 5` becomes `8` or `-8`).
  - Required handling: misconception entry; at least one MCQ whose distractors include the magnitude-only and the magnitude-with-wrong-sign answers.
- C-4OP-6: Learner treats two adjacent minus signs as a single minus, reading `5 - (-3)` as `5 - 3` instead of `5 + 3`.
  - Required handling: misconception entry; at least one Confident or Challenge question that exposes the double-sign trap, plus a worked example or missing-step question that walks through the rewriting.
- C-4OP-7: Learner relies on a memorised "rule" rather than the number-line picture, so cannot adapt when the calculation chains together more than two terms.
  - Required handling: a scene or worked example that explicitly walks a multi-term calculation on the number line or via counter pairs; at least one Challenge question whose stem has three or more directed-number steps.
- C-4OP-8: Learner believes the addition rule for like signs (two negatives summing to a more-negative value) also governs multiplication, so writes `(-3) × (-4) = -12` or treats the leading negative as the only sign that matters. (Covers `maths-four-operations-multiply-divide-negatives`.)
  - Required handling: misconception entry; at least one MCQ or spot-misconception question whose distractors include the wrongly negative product of two negatives, plus a scene or worked example that derives the sign rule from repeated addition or counter groups.
- C-4OP-9: Learner believes the sign rule for multiplication does not apply to division, so writes `(-12) ÷ (-4) = -3` or attaches a sign by guesswork. (Covers `maths-four-operations-multiply-divide-negatives`.)
  - Required handling: misconception entry; at least one numeric-entry or MCQ question that requires dividing two negatives or two unlike signs, plus an explicit statement in the node that the same rule applies to multiplication and division.
- C-4OP-10: Learner reads `(-a)²` as `-(a × a)` and so writes `(-4)² = -16`, conflating the bracketed expression with the unbracketed `-4²`. (Covers `maths-four-operations-multiply-divide-negatives`.)
  - Required handling: misconception entry; at least one spot-misconception or numeric-entry question whose stem explicitly brackets the negative before squaring and credits only the positive answer.
- C-4OP-11: Learner believes that in a chain of three or more signed factors only the leading negative survives, so writes `(-3) × (-4) × (-2) = -24` from "the negative on the left wins" rather than from counting the negatives. (Covers `maths-four-operations-multiply-divide-negatives`.)
  - Required handling: misconception entry; at least one Challenge tier numeric-entry or worked example that chains three or more signed factors, with reasoning that pairs the negatives.
- C-4OP-12: Learner treats `(-a) × b` and `a × (-b)` as different cases and computes one correctly and the other not, missing the commutativity of multiplication for signed numbers. (Covers `maths-four-operations-multiply-divide-negatives`.)
  - Required handling: misconception entry or worked-example callout; at least one question that pairs a positive-times-negative and a negative-times-positive of the same magnitudes.

### Question shape probes

- Q-4OP-1: At least one MCQ tests addition of two negatives where the wrongly positive answer is among the distractors.
- Q-4OP-2: At least one numeric-entry question requires subtracting a negative (i.e. computing `a - (-b)` for given integers).
- Q-4OP-3: At least one comparison or ordering question (MCQ or drag-order) pairs negative numbers whose magnitudes invert the value order.
- Q-4OP-4: At least one numeric-entry question crosses zero on a single subtraction (subtracting a larger positive from a smaller positive).
- Q-4OP-5: At least one Challenge tier word problem requires a three-or-more-step directed-number calculation in a UK context (temperature change across the day, submarine depth, bank balance, lift floors).
- Q-4OP-6: At least one missing-step or worked-example question walks through the rewriting of a `- (-N)` term into `+ N` before evaluating.
- Q-4OP-7: At least one spot-misconception question presents a "two negatives make a positive" or "larger digit means larger negative" argument and asks whether the reasoning is sound.
- Q-4OP-8: At least one slider-explore or number-line-anchored question asks the learner to place an integer (positive or negative) on a marked number line.
- Q-4OP-9: At least one MCQ on the multiply-divide node tests the product of two negatives where the wrongly negative answer is among the distractors. (Covers `maths-four-operations-multiply-divide-negatives`.)
- Q-4OP-10: At least one numeric-entry or MCQ on the multiply-divide node requires dividing two negatives, returning a positive integer answer. (Covers `maths-four-operations-multiply-divide-negatives`.)
- Q-4OP-11: At least one spot-misconception question on the multiply-divide node presents the `(-a)² = -a²` argument and asks whether the reasoning is sound. (Covers `maths-four-operations-multiply-divide-negatives`.)
- Q-4OP-12: At least one Challenge tier numeric-entry or word problem on the multiply-divide node chains three or more signed factors, requiring the learner to count the negatives. (Covers `maths-four-operations-multiply-divide-negatives`.)

### Tutor probes

- T-4OP-1: Given "I worked out (-6) + (-7) and got +13 because two negatives make a positive", the tutor's first reply is a Socratic prompt about what each negative does on the number line, not a direct correction.
- T-4OP-2: Given a wrong answer matching the larger-negative-bigger trigger (for example "-12 is greater than -5"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-4OP-3: Given "I do not understand why 5 - (-3) is 8. Can you just tell me?", the tutor declines a direct answer and offers a scaffolded number-line walk.
- T-4OP-4: Given an off-topic input (for example a question about US sports scores or temperatures in fahrenheit), the tutor steers back to UK context directed numbers politely.
- T-4OP-5: Given a request for an inline definition (tap on "integer", "directed number", or "negative"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Numerica > Place Value

Covers `maths-place-value-whole-numbers` plus future place value nodes (large-number reading, rounding to powers of 10, ordering and comparing).

### Content probes

- C-PV-1: Learner names the wrong column when reading the value of a digit, swapping ten-thousands and hundred-thousands or similar.
  - Required handling: misconception entry; at least one question that asks the learner to name the column or the value of a specific digit in a 5-digit-or-larger number.
- C-PV-2: Learner ignores zero placeholders when reading or writing a number, treating "two hundred thousand and ninety" as 200,90 or 200,9.
  - Required handling: misconception entry; at least one numeric or MCQ question where a placeholder zero is the test.
- C-PV-3: Learner believes a number with more digits is always larger, even when the smaller digit count belongs to a number with a larger leading digit.
  - Required handling: misconception entry; at least one comparison question where digit count alone misleads.
- C-PV-4: Learner rounds by truncation (chops off trailing digits to zeros) rather than by inspecting the next digit and rounding 5 or more up.
  - Required handling: misconception entry; at least one question that exposes a rounding-by-truncation answer as a distractor or a spot-misconception trigger.
- C-PV-5: Learner inspects the wrong deciding digit when rounding (for example, looks at the tens digit instead of the units digit when rounding to the nearest 100).
  - Required handling: misconception entry; at least one question that pairs the right and wrong deciding digit as distractor positions.
- C-PV-6: Learner uses "million" and "billion" interchangeably or believes 1 billion = 1,000 million in some contexts and 1,000,000 million in others.
  - Required handling: misconception entry referencing the UK / international short-scale convention (1 billion = 1,000 million); at least one question where the misconception is the trap.
- C-PV-7: Learner reads a large number digit by digit ("two zero zero four nine") rather than naming the place values, especially when zero placeholders are present.
  - Required handling: misconception entry; a scene or worked example that explicitly groups digits in threes and names the column heads.

### Question shape probes

- Q-PV-1: At least one question presents a 5-digit-or-larger number and asks for the value (not just the name) of a specified digit.
- Q-PV-2: At least one question asks the learner to write a large number in figures from a worded form, with at least one zero placeholder in the answer.
- Q-PV-3: At least one comparison question forces the learner to discriminate between numbers of different digit counts where the smaller-digit-count number has a larger leading digit (or vice versa).
- Q-PV-4: At least one numeric-entry question asks the learner to round a 4-digit-or-larger number to a specified power of 10 where the deciding digit is a 4 or a 5 (boundary case).
- Q-PV-5: At least one Challenge tier question asks the learner to round to satisfy two simultaneous constraints (for example, round to nearest 1,000 to give X and round to nearest 10,000 to give Y), or to subtract two large numbers in a UK context (transport, populations, finance).
- Q-PV-6: At least one spot-misconception question presents a rounding-by-truncation argument and asks whether the method is sound.

### Tutor probes

- T-PV-1: Given "I read 200,090 as twenty thousand and ninety because the zeros are silent", the tutor's first reply is a Socratic prompt about reading digit groups in threes, not a direct correction.
- T-PV-2: Given "Why isn't 4,500 rounded to 4,000? It only had a 5", the tutor explains the round-half-up convention with a concrete example, not a definition.
- T-PV-3: Given an off-topic input (for example a question about US zip code formats), the tutor steers back to UK place value politely.
- T-PV-4: Given a request for an inline definition (tap on "placeholder"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Numerica > Factors and Multiples

Covers `maths-factors-multiples-finding-factors` plus future factors and multiples nodes (HCF and LCM, prime factorisation as a procedure).

### Content probes

- C-FM-1: Learner reverses the meaning of "factor" and "multiple", or uses the words interchangeably.
  - Required handling: misconception entry; at least one question that distinguishes the two directions (factor of vs multiple of) on the same pair of numbers.
- C-FM-2: Learner skips 1 and the number itself when listing factors of a positive integer, believing they "do not count".
  - Required handling: misconception entry; at least one question whose correct answer requires both 1 and the number itself in the factor list.
- C-FM-3: Learner adds two numbers to find a common multiple instead of finding a number in both times tables (for example, says LCM of 4 and 6 is 10).
  - Required handling: misconception entry; at least one Confident or Challenge question whose distractors include the additive trap.
- C-FM-4: Learner double-counts the repeated factor of a square number (lists the factors of 49 as 1, 7, 7, 49 and counts four).
  - Required handling: misconception entry; at least one question that exposes the double-count as a distractor or spot-misconception trigger.
- C-FM-5: Learner includes 0 as the first multiple of any positive integer, miscounting in "first n multiples" questions.
  - Required handling: misconception entry; at least one question that distinguishes 0 from the first positive multiple.
- C-FM-6: Learner stops the factor-pair walk too early, missing factors on the upper half (lists 12, 18 stopping at the square root without reflecting the pairs).
  - Required handling: misconception entry or worked example that walks the factor pairs systematically up to the square root and reflects each pair.

### Question shape probes

- Q-FM-1: At least one question asks the learner to list every factor of a 2-digit composite (12, 18, 24, 36) in numeric or drag-order form.
- Q-FM-2: At least one MCQ asks "which of these is NOT a factor of N" for a small composite, with each distractor tied to a specific misstep.
- Q-FM-3: At least one Challenge tier word problem requires recognising the LCM of two numbers in a UK context (clubs meeting on the same day, train schedules, canteen menus).
- Q-FM-4: At least one numeric-entry question asks for the nth multiple of a given small integer.
- Q-FM-5: At least one spot-misconception question presents a factor-vs-multiple language slip and asks whether the method is sound.
- Q-FM-6: At least one Challenge tier question asks the learner to identify a common multiple in a fixed range (for example, the only fare in £18 to £30 inclusive that is a multiple of both 4 and 6).
- Q-FM-7: At least one missing-step or worked-example question walks the learner through a factor-pair listing for a square number, exposing the double-count trap.

### Tutor probes

- T-FM-1: Given "Is 1 a factor of every number?", the tutor confirms with a Socratic prompt about what "factor" means rather than a yes/no.
- T-FM-2: Given a wrong answer matching the additive trap (for example "LCM of 4 and 6 is 10"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-FM-3: Given an off-topic input (for example a question about US Common Core factor trees), the tutor steers back to UK KS3 factor and multiple language.
- T-FM-4: Given a request for an inline definition (tap on "multiple" or "factor"), the glossary returns a UK English age-12 definition under 2 seconds.

### HCF and LCM extensions (`maths-factors-multiples-hcf-lcm`)

#### Content probes
- C-FML-1: Learner swaps HCF and LCM, returning the LCM when asked for the HCF or vice versa.
  - Required handling: misconception entry; at least one spot-misconception question that contrasts "divides into" with "is divisible by".
- C-FML-2: Learner always finds the LCM by multiplying the two numbers, ignoring shared factors.
  - Required handling: misconception entry; at least one Confident or Challenge question where the product is a distractor.
- C-FML-3: Learner assumes the HCF of two numbers is just the smaller one, even when the smaller does not divide the larger.
  - Required handling: misconception entry; at least one question with the smaller-input as a distractor.
- C-FML-4: Learner writes a common multiple but not the LOWEST, returning e.g. 24 for LCM(4, 6) instead of 12.
  - Required handling: misconception entry; at least one question whose distractors include valid but non-lowest common multiples.

#### Question shape probes
- Q-FML-1: At least one numeric-entry on the HCF-LCM node asks for the HCF of three numbers.
- Q-FML-2: At least one Confident question on the HCF-LCM node frames the LCM as a "smallest common denominator" for adding fractions.
- Q-FML-3: At least one Challenge tier word problem on the HCF-LCM node frames a scheduling or tiling scenario (clock bells, bus timetable, paving slabs).
- Q-FML-4: At least one drag-order question on the HCF-LCM node sorts four LCM pairs by size.

#### Tutor probes
- T-FML-1: Given "HCF(4, 6) = 12 because 12 is the highest number that 4 and 6 go into", the tutor's first reply is a Socratic prompt about whether HCF means "goes into" or "goes from".
- T-FML-2: Given a wrong answer matching the LCM-as-product trigger (for example "LCM(6, 8) = 48"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.

## Zone: Numerica > Primes

Covers `maths-primes-recognising-primes` plus future prime nodes (prime factorisation as a procedure, prime factor decomposition for HCF and LCM).

### Content probes

- C-PR-1: Learner believes 1 is a prime number because it has no factors other than itself.
  - Required handling: misconception entry; at least one question that explicitly tests the recognition that 1 is not prime.
- C-PR-2: Learner believes every odd number is prime, missing composite odds such as 9, 15, 21, 25, 33, 49, 51, 57, 63, 77, 91.
  - Required handling: misconception entry; at least one question that pairs a composite odd with a true prime as distractors.
- C-PR-3: Learner believes no even number can be prime, ignoring 2.
  - Required handling: misconception entry; at least one question that confirms 2 as the only even prime.
- C-PR-4: Learner tests every divisor up to N when checking whether N is prime, rather than stopping at the square root of N.
  - Required handling: misconception entry; at least one question that tests the square-root rule on a 2-digit-or-larger candidate.
- C-PR-5: Learner uses a digit-pattern shortcut ("ends in 1, 3, 7, or 9 so it must be prime") and over-applies it to numbers like 21, 27, 33, 51, 57.
  - Required handling: misconception entry; at least one Challenge tier question that exposes the shortcut as a distractor.
- C-PR-6: Learner confuses primes with multiples of small primes (says "primes are the multiples of 1 and itself").
  - Required handling: misconception entry; at least one question that surfaces the language slip.
- C-PR-7: Learner misreads the square-root test as "test all primes up to and including the square root, even if it is not a whole number" and includes a non-prime check.
  - Required handling: misconception entry or a worked example that walks through testing primes up to the floor of the square root.

### Question shape probes

- Q-PR-1: At least one MCQ asks "which of these is prime" with each distractor being a composite tied to a specific misstep.
- Q-PR-2: At least one numeric-entry question asks the learner to count or list primes in a specified range (for example, primes between 1 and 20, or between 30 and 50).
- Q-PR-3: At least one Challenge tier word problem requires recognising primality in a UK context (rectangular displays, equal team sizes, library shelving).
- Q-PR-4: At least one drag-order question places primes in ascending order, distinct from any composite ordering.
- Q-PR-5: At least one missing-step or worked-example question walks through a primality test on a 2-digit-or-larger candidate using the square-root rule.
- Q-PR-6: At least one spot-misconception question presents a "looks-prime" composite (such as 51, 57, 91, 143) and asks whether the reasoning is sound.

### Tutor probes

- T-PR-1: Given "Is 1 a prime number?", the tutor's first reply is a Socratic prompt about the definition of a prime, not a direct correction.
- T-PR-2: Given a wrong answer matching the odd-equals-prime misconception trigger (for example "57 is prime"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-PR-3: Given "Can the tutor just list every prime under 100 for me?", the tutor declines and offers a scaffolded sieve approach.
- T-PR-4: Given an off-topic input (for example a question about US lottery numbers), the tutor steers back to primes politely.
- T-PR-5: Given a request for an inline definition (tap on "prime"), the glossary returns a UK English age-12 definition under 2 seconds.

### Prime factorisation extensions (`maths-primes-prime-factorisation`)

#### Content probes
- C-PFM-1: Learner includes 1 in a prime factorisation, writing 30 = 1 x 2 x 3 x 5.
  - Required handling: misconception entry; at least one MCQ whose distractors include the "1 x primes" answer.
- C-PFM-2: Learner reads 2^3 as 2 x 3 = 6 (or 3^2 as 3 x 2 = 6), confusing index notation with multiplication.
  - Required handling: misconception entry; at least one Core MCQ that contrasts the index value with the factor product.
- C-PFM-3: Learner stops a factor tree at a composite factor (writes 28 = 4 x 7 as the prime factorisation).
  - Required handling: misconception entry; at least one question where the half-broken tree appears as a distractor.
- C-PFM-4: Learner computes HCF from prime factorisations by multiplying ALL primes from both numbers (producing the LCM) instead of just shared ones.
  - Required handling: misconception entry; at least one Confident question where the LCM answer appears as a distractor for an HCF prompt.

#### Question shape probes
- Q-PFM-1: At least one numeric-entry on the prime-factorisation node asks the learner to read off an exponent (the a or b in 2^a x 3^b).
- Q-PFM-2: At least one Confident MCQ on the prime-factorisation node tests an HCF or LCM by prime-factor comparison, with both the HCF and the LCM among the options.
- Q-PFM-3: At least one Challenge tier word problem on the prime-factorisation node frames a perfect-square or perfect-cube prompt requiring extra prime factors.
- Q-PFM-4: At least one drag-order question on the prime-factorisation node orders numbers by total prime-factor count (with multiplicity).

#### Tutor probes
- T-PFM-1: Given "2^3 = 6 because 2 multiplied by 3 is 6", the tutor's first reply is a Socratic prompt about what the small 3 above the 2 means (exponent vs factor).
- T-PFM-2: Given a wrong answer matching the include-1-in-factorisation trigger, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.

## Zone: Numerica > Decimals

Covers `maths-decimals-place-value`, `maths-decimals-rounding`, plus future decimal nodes (decimal arithmetic, decimal-fraction-percentage equivalence).

### Content probes

- C-DEC-1: Learner names the wrong column for decimal place value, calling tenths "decimals" or hundredths "decimals" without precision.
  - Required handling: misconception entry; at least one question that asks the learner to name the column for a specified digit after the decimal point.
- C-DEC-2: Learner believes a decimal with more digits after the decimal point must be larger ("longer-bigger"), saying 0.785 > 0.8.
  - Required handling: misconception entry; at least one comparison or ordering question where the longer-bigger trap is a distractor.
- C-DEC-3: Learner treats trailing zeros as changing the value of a decimal, believing 0.5 ≠ 0.50 ≠ 0.500.
  - Required handling: misconception entry; at least one question whose correct answer requires recognising trailing-zero equivalence.
- C-DEC-4: Learner converts a fraction to a decimal by stacking the digits ("3/4 becomes 0.34") rather than dividing or using equivalent fractions over a power of 10.
  - Required handling: misconception entry; at least one question whose distractors include the stacked-digits answer.
- C-DEC-5: Learner remembers "1/2 = 0.2" by reading the denominator as the digit after the point, or makes similar surface-pattern slips on simple fraction-decimal equivalences.
  - Required handling: misconception entry; at least one question on simple fraction-decimal equivalence (1/2, 1/4, 1/10, 1/100, 3/4) where the surface-pattern answer is a distractor.
- C-DEC-6: Learner ignores the placeholder zero in numbers like 0.07, reading 0.07 as 0.7 or 0.7 as 0.07.
  - Required handling: misconception entry; at least one numeric-entry question that requires writing a decimal with a placeholder zero from a worded form.
- C-DEC-7: Learner reads "0.005" as "five thousands" rather than "five thousandths", or otherwise confuses the magnitude descriptor.
  - Required handling: misconception entry; a scene or worked example that explicitly contrasts thousands with thousandths.
- C-DR-1: Learner picks the wrong digit as the rounding decider, choosing one beyond or before the digit immediately to the right of the kept part. (Covers `maths-decimals-rounding`.)
  - Required handling: misconception entry; at least one MCQ that names the decider digit explicitly and at least one MCQ whose distractors come from picking the wrong one.
- C-DR-2: Learner truncates rather than rounds (chops digits without checking the decider). (Covers `maths-decimals-rounding`.)
  - Required handling: misconception entry; at least one spot-misconception question that contrasts truncation with rounding for a value where the decider is 5 or more.
- C-DR-3: Learner believes a decider of exactly 5 stays put rather than rounding up. (Covers `maths-decimals-rounding`.)
  - Required handling: misconception entry; at least one Confident question where the kept-and-decider sequence ends in 5 and the correct answer rounds up.
- C-DR-4: Learner fails to carry into the next column when adding 1 to a 9 in the kept part during rounding. (Covers `maths-decimals-rounding`.)
  - Required handling: misconception entry; at least one Confident or Challenge numeric-entry where the kept part ends in 9 (or several 9s) and rounding propagates a carry.
- C-DR-5: Learner counts leading zeros after a decimal point as significant figures. (Covers `maths-decimals-rounding`.)
  - Required handling: misconception entry; at least one MCQ that asks for the first significant figure of a number with leading zeros.
- C-DR-6: Learner mixes up "decimal places" with "significant figures", giving the wrong answer when the question target changes between them. (Covers `maths-decimals-rounding`.)
  - Required handling: misconception entry or worked-example callout that contrasts the two on the same number.
- C-DA-1: Learner aligns decimals by the right edge of the digits when adding or subtracting, the way whole numbers stack right-justified. (Covers `maths-decimals-arithmetic`.)
  - Required handling: misconception entry; at least one MCQ whose distractors include the right-aligned slip; a worked example that pads with trailing zeros.
- C-DA-2: Learner places the decimal point in the wrong column when multiplying two decimals, so 0.3 x 0.4 becomes 1.2 or 12 instead of 0.12. (Covers `maths-decimals-arithmetic`.)
  - Required handling: misconception entry; a scene that uses the 10 x 10 grid model; at least one MCQ whose distractors include each common place-shift error.
- C-DA-3: Learner believes multiplication always makes the answer bigger, so rejects answers smaller than either factor when multiplying decimals less than 1. (Covers `maths-decimals-arithmetic`.)
  - Required handling: misconception entry; at least one Confident question whose stem produces an answer smaller than both factors.
- C-DA-4: Learner believes division always makes the answer smaller, so rejects answers larger than the dividend when dividing by a decimal less than 1. (Covers `maths-decimals-arithmetic`.)
  - Required handling: misconception entry; at least one Confident question on `a / b` where `b < 1` and the quotient exceeds `a`.
- C-DA-5: Learner skips the leading zero in the quotient when the answer is less than 1, so 1.2 / 5 becomes 24 or 2.4 instead of 0.24. (Covers `maths-decimals-arithmetic`.)
  - Required handling: misconception entry; at least one numeric-entry that produces a leading-zero quotient and accepts only the leading-zero form.
- C-DA-6: Learner fails to borrow across a column-zero in decimal subtraction, so 5.0 - 2.4 becomes 3.4 instead of 2.6. (Covers `maths-decimals-arithmetic`.)
  - Required handling: misconception entry; at least one Core or Confident numeric-entry whose minuend ends in zero in the tenths column.

### Question shape probes

- Q-DEC-1: At least one MCQ asks the learner to name the column for a specified digit after the decimal point in a 3-or-more-decimal-place number.
- Q-DEC-2: At least one comparison or ordering question pairs decimals of different lengths where the longer one is smaller (longer-bigger trap).
- Q-DEC-3: At least one numeric-entry question requires writing a decimal whose simplest form includes a placeholder zero (for example 7/100 = 0.07).
- Q-DEC-4: At least one MCQ on fraction-to-decimal conversion includes the stacked-digits answer as a distractor.
- Q-DEC-5: At least one Challenge tier word problem requires comparing or ordering decimals in a UK context (race times, ribbon lengths, money to pence).
- Q-DEC-6: At least one spot-misconception question presents a longer-bigger or trailing-zero argument and asks whether the reasoning is sound.
- Q-DR-1: At least one MCQ on the rounding node names the decider digit for a specified target (1, 2, or 3 decimal places). (Covers `maths-decimals-rounding`.)
- Q-DR-2: At least one numeric-entry on the rounding node has a kept part ending in 9, requiring a carry into the next column. (Covers `maths-decimals-rounding`.)
- Q-DR-3: At least one Challenge tier word problem on the rounding node requires rounding to the nearest penny in a UK money context (till receipt, train fare, sale price). (Covers `maths-decimals-rounding`.)
- Q-DR-4: At least one numeric-entry or MCQ on the rounding node requires rounding to a number of significant figures with at least one leading zero present. (Covers `maths-decimals-rounding`.)
- Q-DA-1: At least one MCQ on the arithmetic node tests adding two decimals with different decimal-place counts, with the right-aligned slip as a distractor. (Covers `maths-decimals-arithmetic`.)
- Q-DA-2: At least one numeric-entry on the arithmetic node multiplies two decimals each less than 1, producing an answer smaller than both factors. (Covers `maths-decimals-arithmetic`.)
- Q-DA-3: At least one numeric-entry on the arithmetic node divides a decimal less than 2 by a single-digit whole number, producing a leading-zero quotient (for example 1.2 / 5 = 0.24). (Covers `maths-decimals-arithmetic`.)
- Q-DA-4: At least one Challenge tier word problem on the arithmetic node frames a UK context (market stall, ribbon comparison, fuel consumption, bulk-vs-single pricing) and requires at least one decimal multiplication or division step. (Covers `maths-decimals-arithmetic`.)

### Tutor probes

- T-DEC-1: Given "0.785 must be bigger than 0.8 because it has more digits", the tutor's first reply is a Socratic prompt about column-by-column comparison, not a direct correction.
- T-DEC-2: Given a wrong answer matching the half-as-0.2 trigger, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-DEC-3: Given "Why is 0.5 the same as 0.50?", the tutor explains using a fraction-wall analogy, not a definition.
- T-DEC-4: Given an off-topic input (for example a question about US dollar prices to two decimal places), the tutor steers back to UK pence and decimal place value politely.
- T-DEC-5: Given a request for an inline definition (tap on "thousandths"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-DR-1: Given "I rounded 6.45 to 1 decimal place and got 6.4 because I treat 5 as a tie", the tutor's first reply is a Socratic prompt about the school convention for rounding ties up, not a direct correction. (Covers `maths-decimals-rounding`.)
- T-DR-2: Given a wrong answer matching the truncation trigger (for example "8.972 to 1 dp = 8.9"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint. (Covers `maths-decimals-rounding`.)
- T-DA-1: Given "0.5 x 0.4 should be more than 0.5 because multiplying makes things bigger", the tutor's first reply is a Socratic prompt about multiplying by a number smaller than 1, not a direct correction. (Covers `maths-decimals-arithmetic`.)
- T-DA-2: Given a wrong answer matching the leading-zero-quotient trigger (for example "1.2 / 5 = 24"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint. (Covers `maths-decimals-arithmetic`.)

## Zone: Numerica > Percentages

Covers `maths-percentages-as-decimals-fractions`, `maths-percentages-of-amount`, plus future percentages nodes (percentage change, reverse percentages, simple interest).

### Content probes

- C-PCT-1: Learner reads "30%" as the number 30 (or 30 of something countable) rather than as 30 per hundred.
  - Required handling: misconception entry; at least one question that asks the learner to interpret the per-cent meaning.
- C-PCT-2: Learner shifts a percentage by one decimal place rather than two when converting to a decimal (writes 35% as 3.5 instead of 0.35).
  - Required handling: misconception entry; at least one question whose distractors include the off-by-a-factor-of-10 trap.
- C-PCT-3: Learner converts a fraction to a percentage by stacking the digits (writes 3/4 as 34%).
  - Required handling: misconception entry; at least one question whose distractors include the stacked-digits answer.
- C-PCT-4: Learner uses the wrong denominator when writing a percentage as a fraction (writes 25% as 25/10 or 25/1000 instead of 25/100).
  - Required handling: misconception entry; at least one question whose distractors include a mis-placed denominator.
- C-PCT-5: Learner believes a value with the bigger number is the bigger percentage when comparing across forms (says 65% > 3/5 just because the printed number is 65).
  - Required handling: misconception entry; at least one Challenge tier question that compares mixed forms.
- C-PCT-6: Learner orders fractions, decimals, and percentages by surface form rather than by numerical value.
  - Required handling: misconception entry; at least one ordering question on a mix of three or more forms.
- C-PCT-7: Learner believes percentages cannot exceed 100%.
  - Required handling: misconception entry; at least one Challenge tier question that recognises a percentage above 100% as valid.
- C-PA-1: Learner divides by 100 when finding 10% of an amount (mixing up the rule for 10% with the rule for 1%). (Covers `maths-percentages-of-amount`.)
  - Required handling: misconception entry; at least one MCQ whose distractors include the divide-by-100 answer for a 10% question, plus a spot-misconception that names the slip.
- C-PA-2: Learner finds 10% of an amount but multiplies by the percentage value (rather than the number of building blocks) to reach larger percentages, so 30% becomes 30 lots of 10%. (Covers `maths-percentages-of-amount`.)
  - Required handling: misconception entry; at least one Confident or Challenge question whose distractors include the multiply-by-30 answer.
- C-PA-3: Learner reports the calculated VAT or discount as the new total price rather than adding it to (or subtracting it from) the original amount. (Covers `maths-percentages-of-amount`.)
  - Required handling: misconception entry; at least one Challenge tier multi-step question (VAT or sale-price) where the percentage of the amount is a distractor and the new total is the correct answer.
- C-PA-4: Learner finds 20% VAT by computing 10% only and forgetting to double the result. (Covers `maths-percentages-of-amount`.)
  - Required handling: misconception entry; at least one Confident or Challenge question whose distractors include the half-VAT (10%-only) answer.
- C-PC-1: Learner believes a percentage increase and a decrease of the same size cancel out, so 20% up then 20% down returns to the original. (Covers `maths-percentages-change`.)
  - Required handling: misconception entry; at least one Confident or Challenge question that chains an increase and a decrease and shows the net effect.
- C-PC-2: Learner calculates percentage change by dividing the change by the new value instead of the original. (Covers `maths-percentages-change`.)
  - Required handling: misconception entry; at least one question whose distractors include the change-against-new answer.
- C-PC-3: Learner reads a multiplier (1.20) as an addition (add 1.20 to the amount) rather than a multiplication. (Covers `maths-percentages-change`.)
  - Required handling: misconception entry; at least one spot-misconception question that names the multiplier-as-add trap.
- C-PC-4: Learner adds the percentages in chained changes rather than multiplying the multipliers, so 10% off then 10% off equals 20% off. (Covers `maths-percentages-change`.)
  - Required handling: misconception entry; at least one Confident or Challenge question whose distractors include the additive-percentages answer.
- C-PR-1: Learner undoes a 20% sale by adding 20% of the sale price back on, instead of dividing by the multiplier. (Covers `maths-percentages-reverse`.)
  - Required handling: misconception entry; at least one spot-misconception question that names the inverse-on-new trap.
- C-PR-2: Learner treats a reverse percentage problem as a direct one, multiplying instead of dividing. (Covers `maths-percentages-reverse`.)
  - Required handling: misconception entry; at least one MCQ whose distractors include the multiply-by-the-multiplier answer.
- C-PR-3: Learner confuses "after a 25% sale" with "is 25% of the original", so divides by 0.25 instead of by 0.75. (Covers `maths-percentages-reverse`.)
  - Required handling: misconception entry; at least one Confident or Challenge spot-misconception that exposes the "of vs by" slip.
- C-PR-4: Learner uses the VAT rate alone (0.20) as the multiplier when reversing a VAT-inclusive total, instead of 1.20. (Covers `maths-percentages-reverse`.)
  - Required handling: misconception entry; at least one question whose distractors include the divide-by-the-rate answer.

### Question shape probes

- Q-PCT-1: At least one question asks the learner to convert a common percentage (50%, 25%, 75%, 10%, 20%, 1%, 5%, 12.5%, 33⅓%) to a decimal or simplest-form fraction in numeric or MCQ form.
- Q-PCT-2: At least one question asks the learner to convert a fraction with denominator 100 to a percentage by direct reading.
- Q-PCT-3: At least one question requires converting a fraction with a non-100 denominator (eighths, fifths, twentieths) to a percentage via equivalent fractions over 100.
- Q-PCT-4: At least one Challenge tier word problem requires comparing or ordering across mixed forms (percent vs fraction vs decimal) in a UK context (test scores, retail discounts, sports stats).
- Q-PCT-5: At least one MCQ on fraction-to-percent conversion includes the stacked-digits answer as a distractor.
- Q-PCT-6: At least one spot-misconception question presents the per-cent-as-number or stacked-digits argument and asks whether the reasoning is sound.
- Q-PCT-7: At least one Challenge tier question recognises a percentage greater than 100% as valid (for example, an exam score reported above 100% on a re-scaled mark scheme, or a doubled quantity expressed as 200%).
- Q-PA-1: At least one Core or Confident numeric-entry on the percentage-of-amount node requires finding a single building-block percentage (50%, 25%, 10%, 5%, or 1%) of a UK money amount. (Covers `maths-percentages-of-amount`.)
- Q-PA-2: At least one Confident question on the percentage-of-amount node combines two or more building blocks (for example 35% = 25% + 10%, or 65% = 50% + 10% + 5%). (Covers `maths-percentages-of-amount`.)
- Q-PA-3: At least one Challenge tier word problem on the percentage-of-amount node frames a UK VAT or sale-price scenario where the new total (not the percentage of the amount) is the correct answer. (Covers `maths-percentages-of-amount`.)
- Q-PA-4: At least one numeric-entry on the percentage-of-amount node requires a decimal percentage (12.5%, 17.5%) found by halving a building block. (Covers `maths-percentages-of-amount`.)
- Q-PC-1: At least one MCQ on the percentage-change node tests an X% increase followed by an X% decrease, with the wrongly-restored-to-original answer as a distractor. (Covers `maths-percentages-change`.)
- Q-PC-2: At least one numeric-entry on the percentage-change node computes a percentage change from old to new values, where dividing by the new value (instead of the old) is a distractor pattern. (Covers `maths-percentages-change`.)
- Q-PC-3: At least one Challenge tier word problem on the percentage-change node frames a UK context (railcard payback, VAT-inclusive bill, compound pay rise) and requires either multi-step chained multipliers or a comparison across two changes. (Covers `maths-percentages-change`.)
- Q-PR-1: At least one MCQ on the reverse-percentages node tests recovery of the original from a VAT-inclusive total, with the divide-by-rate-only answer as a distractor. (Covers `maths-percentages-reverse`.)
- Q-PR-2: At least one numeric-entry on the reverse-percentages node requires reversing two chained percentage changes (e.g. 30% off label price, label price 10% lower than launch) with the answer being the launch price. (Covers `maths-percentages-reverse`.)
- Q-PR-3: At least one Challenge tier word problem on the reverse-percentages node frames a UK context (sale, salary rise, school intake growth, profit margin) and requires identifying the multiplier first. (Covers `maths-percentages-reverse`.)

### Tutor probes

- T-PCT-1: Given "Why is 50% bigger than 1/4? They both have small numbers", the tutor's first reply is a Socratic prompt about converting both to the same form, not a direct correction.
- T-PCT-2: Given a wrong answer matching the decimal-shift trigger (for example "35% = 3.5"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-PCT-3: Given an off-topic input (for example a question about US sales tax percentages), the tutor steers back to UK percentage forms politely.
- T-PCT-4: Given a request for an inline definition (tap on "per cent"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-PA-1: Given "How do I find 35% of £80?", the tutor's first reply is a Socratic prompt about which building blocks combine to make 35% (25% + 10%), not a direct multiplication formula. (Covers `maths-percentages-of-amount`.)
- T-PA-2: Given a wrong answer matching the multiply-by-percent trigger (for example "30% of £40 = £120"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint. (Covers `maths-percentages-of-amount`.)
- T-PC-1: Given "If a price goes up 20% then comes down 20%, it must be back to where it started", the tutor's first reply is a Socratic prompt about whether the two changes act on the same starting amount. (Covers `maths-percentages-change`.)
- T-PC-2: Given a wrong answer matching the multiplier-as-add trigger (for example "Increase £30 by 20% means £30 + 1.20 = £31.20"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint. (Covers `maths-percentages-change`.)
- T-PR-1: Given "After a 20% sale the price is £40, so original was £40 + 20% of £40 = £48", the tutor's first reply is a Socratic prompt about whether the 20% refers to the sale price or the original. (Covers `maths-percentages-reverse`.)

## Zone: Numerica > Ratio and Proportion

Covers `maths-ratio-introduction` plus future ratio nodes (sharing in a ratio, scaling recipes, direct and inverse proportion).

### Content probes

- C-RP-1: Learner treats a ratio as a fraction in disguise (says the ratio of red to blue beads being 2:3 means 2/3 of the beads are red).
  - Required handling: misconception entry; at least one question that contrasts part-to-part ratio with part-to-whole fraction on the same scenario.
- C-RP-2: Learner reverses the order of a ratio relative to the worded statement (for red:blue = 2:3 writes 3:2).
  - Required handling: misconception entry; at least one question that pairs the correct order with its reverse as a distractor.
- C-RP-3: Learner adds (or subtracts) the same number to both sides of a ratio to find an equivalent ratio (says 2:5 and 4:7 are equivalent because both went up by 2).
  - Required handling: misconception entry; at least one question whose distractors include the additive trap.
- C-RP-4: Learner stops simplifying a ratio at a non-HCF common factor (simplifies 12:18 to 6:9 instead of 2:3).
  - Required handling: misconception entry; at least one question that exposes the partial-simplification answer as a distractor.
- C-RP-5: Learner divides only one side of a ratio by a common factor, leaving the other side unchanged.
  - Required handling: misconception entry; at least one question whose distractors include the divide-only-one trap.
- C-RP-6: Learner scales the two sides of a ratio by different multipliers (writes an "equivalent" ratio of 2:5 as 6:10 by multiplying the first part by 3 and the second part by 2).
  - Required handling: misconception entry; at least one question that surfaces the different-multiplier slip.
- C-RP-7: Learner believes ratios with the same difference between the two sides are equivalent (says 4:6 simplifies to 1:1 because the difference is 2).
  - Required handling: misconception entry; at least one Challenge tier spot-misconception question that exposes the difference-not-factor argument.

### Question shape probes

- Q-RP-1: At least one numeric or MCQ question asks the learner to write a ratio in colon notation from a worded part-to-part description.
- Q-RP-2: At least one question asks the learner to simplify a 2-part ratio to its simplest form using the HCF.
- Q-RP-3: At least one question asks the learner to recognise an equivalent ratio from a list, with each distractor mapping to a specific misstep (additive, reversed, or different-multiplier).
- Q-RP-4: At least one Challenge tier word problem requires recognising a ratio inside a multi-step UK context (cricket club splits, school form composition, recipe scaling).
- Q-RP-5: At least one drag-order question places ratios into matching simplest-form columns or into ascending order by simplest form.
- Q-RP-6: At least one slider-explore question models the continuous relationship between the parts of a fixed-ratio mixture, asking the learner to land in a target range (the playbook lists ratio explicitly as a continuous-relationship topic where slider-explore is required).
- Q-RP-7: At least one spot-misconception question presents an additive-simplification or constant-difference argument and asks whether the reasoning is sound.

### Tutor probes

- T-RP-1: Given "Isn't 2:3 the same as 2/3?", the tutor's first reply is a Socratic prompt about whether the second number is "the rest" or "a different group", not a direct correction.
- T-RP-2: Given a wrong answer matching the additive trigger (for example "2:5 is equivalent to 4:7"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-RP-3: Given an off-topic input (for example a question about US sports team rosters using ratios), the tutor steers back to UK KS3 ratio language politely.
- T-RP-4: Given a request for an inline definition (tap on "ratio"), the glossary returns a UK English age-12 definition under 2 seconds.

### Sharing-in-a-ratio extensions (`maths-ratio-sharing`)

#### Content probes
- C-RAT-1: Learner divides the total by the larger of the two ratio numbers (or just one of them) instead of by the sum of all parts; for example reads "share £40 in ratio 1:3" as £40 / 3 = £13.33 per part.
  - Required handling: misconception entry; at least one question whose distractors include the divide-by-larger answer.
- C-RAT-2: Learner multiplies the original total by each ratio number to produce shares (£30 in 1:4 becomes £30 and £120), missing the value-of-one-part step.
  - Required handling: misconception entry; at least one question whose distractors include the multiply-by-ratio answer.
- C-RAT-3: Learner gives equal shares when asked to split among three people in a non-1:1:1 ratio, ignoring the ratio numbers entirely.
  - Required handling: misconception entry; at least one 3-part-ratio question whose distractors include three equal shares.
- C-RAT-4: Learner reads the ratio 3:5 as the fractions 3/5 and 2/5 of the total instead of 3/8 and 5/8 (denominator is the sum of parts).
  - Required handling: misconception entry; at least one Challenge tier MCQ contrasting 3/5 and 2/5 against 3/8 and 5/8.
- C-RAT-5: Learner finds the shares but skips the final check that they add back to the original total, leaving arithmetic slips uncaught (especially in 3-part ratios).
  - Required handling: misconception entry; at least one missing-step question that surfaces the add-back check explicitly.
- C-RAT-6: Learner mismatches the order of shares with the order of the people named, for example giving the 3-part share to the first person when the ratio reads 2:3 with names in order.
  - Required handling: misconception entry; at least one question whose distractors swap which person gets which share.
- C-RAT-7: Learner treats a 1 in the ratio as meaning the whole original total (rather than one part), so a 5:1 mixture of 600 g muesli/raisins reads as 600 g of raisins.
  - Required handling: misconception entry; at least one Core question on a ratio that includes a 1.

#### Question shape probes
- Q-RAT-1: At least one Core numeric-entry question asks the learner to find the total number of parts in a 2-part or 3-part ratio.
- Q-RAT-2: At least one Core MCQ asks the learner to find the value of one part for a sharing-in-a-ratio question, with the divide-by-larger answer present as a distractor.
- Q-RAT-3: At least one Confident question asks the learner to share a quantity in a 3-part ratio (such as 2:3:5 or 1:2:3) and identify all three shares.
- Q-RAT-4: At least one Confident question maps a recipe-scaling context (flour:butter, oats:nuts:raisins) onto sharing in a ratio.
- Q-RAT-5: At least one Challenge tier word problem requires recovering original counts from a worded sharing scenario, then doing one further step (for example a swap, a top-up, or an unsold remainder).
- Q-RAT-6: At least one drag-order question places the four shares of a ratio split into ascending order.
- Q-RAT-7: At least one slider-explore question asks the learner to land on a target volume so that one part of a fixed-ratio mix takes a given value.
- Q-RAT-8: At least one MCQ presents the ratio-as-direct-fraction argument (3:5 = 3/5 of the total) and asks which row corrects the slip.

#### Tutor probes
- T-RAT-1: Given "I divided £40 by 3 because the bigger number is 3, so each part is £13.33", the tutor's first reply is a Socratic prompt about how many equal parts the ratio splits the total into, not a direct correction.
- T-RAT-2: Given a wrong answer matching the multiply-by-ratio trigger (for example "£30 in ratio 1:4 gives shares of £30 and £120"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-RAT-3: Given an off-topic input (for example a question about US college tuition split by ratio), the tutor steers back to UK KS3 sharing-in-a-ratio language politely.
- T-RAT-4: Given a request for an inline definition (tap on "share in a ratio"), the glossary returns a UK English age-12 definition under 2 seconds.

### Scaling-recipes extensions (`maths-ratio-scaling-recipes`)

#### Content probes
- C-RSR-1: Learner scales a recipe additively (add a constant to every ingredient) instead of multiplicatively, so scaling from 4 to 6 portions adds 2 to each ingredient.
  - Required handling: misconception entry; at least one Confident or Challenge question with the additive-scaling answer as a distractor.
- C-RSR-2: Learner picks best-buy packs by inspection (bigger or smaller pack) without computing price per unit.
  - Required handling: misconception entry; at least one question that requires per-unit (per 100 g or per litre) comparison.
- C-RSR-3: Learner finds the per-unit value but stops there, reporting the unit value as the answer to a question that asks for a total.
  - Required handling: misconception entry; at least one question that explicitly asks for a total scaled to a target.
- C-RSR-4: Learner reads a part-to-part ratio as a part-to-whole fraction (3:2 read as 2/3 of the mix).
  - Required handling: misconception entry; at least one spot-misconception that surfaces the part-to-part vs part-to-whole slip.
- C-RSR-5: Learner mixes units mid-calculation (grams with kilograms, or millilitres with litres) without converting first.
  - Required handling: misconception entry; at least one Confident or Challenge question where mixed units would lead to a magnitude error.

#### Question shape probes
- Q-RSR-1: At least one numeric-entry asks the learner to scale a recipe ingredient by a non-integer multiplier (1.5, 1.75, 0.5).
- Q-RSR-2: At least one MCQ on best-buy contrasts two pack sizes where the bigger pack is the better per-unit value, with the buy-the-bigger-pack-by-default answer as a distractor.
- Q-RSR-3: At least one Challenge tier word problem on the scaling-recipes node frames a UK catering or classroom context (Yorkshire pudding for 8, class of 27, smoothie scale-up) and requires unitary calculation across multiple ingredients.
- Q-RSR-4: At least one drag-order question places four pack sizes into order from worst to best value per 100 g or per litre.

#### Tutor probes
- T-RSR-1: Given "to scale from 4 to 6 portions, just add 2 to every ingredient", the tutor's first reply is a Socratic prompt about whether ratios are preserved, not a direct correction.
- T-RSR-2: Given a wrong answer matching the best-buy-by-inspection trigger (for example "the bigger pack is always cheaper per gram"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.

### Direct-and-inverse-proportion extensions (`maths-ratio-proportion`)

#### Content probes
- C-RPR-1: Learner treats every proportional relationship as direct, so doubling the number of workers doubles the time taken or doubling the speed doubles the journey time. (Covers `maths-ratio-proportion`.)
  - Required handling: misconception entry; at least one Confident or Challenge question that requires identifying inverse proportion in a UK context (painters, pipes, school trip costs).
- C-RPR-2: Learner confuses "in proportion" with "the same value", treating proportional lists as identical. (Covers `maths-ratio-proportion`.)
  - Required handling: misconception entry; at least one spot-misconception question that exposes the "same value" slip.
- C-RPR-3: Learner extrapolates without first finding the constant of proportionality k, applying ad-hoc multipliers from the changes in x. (Covers `maths-ratio-proportion`.)
  - Required handling: misconception entry; at least one missing-step question that walks "find k, then apply".
- C-RPR-4: Learner picks the wrong direction of proportion based on surface word patterns, missing that the test is "what is held constant". (Covers `maths-ratio-proportion`.)
  - Required handling: misconception entry; at least one Confident or Challenge question that pairs a direct context with an inverse context using similar words.

#### Question shape probes
- Q-RPR-1: At least one Core MCQ on the proportion node asks the learner to identify which scenario is direct and which is inverse from short UK contexts (painters, tickets, pipes, taxis).
- Q-RPR-2: At least one Confident numeric-entry on the proportion node requires finding k from a single (x, y) pair and then computing y for a new x. (Covers `maths-ratio-proportion`.)
- Q-RPR-3: At least one Challenge tier word problem on the proportion node frames a multi-step inverse scenario (mid-job change in workforce, shared trip cost, partial completion).
- Q-RPR-4: At least one Confident drag-order on the proportion node arranges rates (items per minute, miles per hour) from slowest to fastest.

#### Tutor probes
- T-RPR-1: Given "12 builders take 16 days because 6 builders take 8 days", the tutor's first reply is a Socratic prompt about whether the total work depends on the number of builders. (Covers `maths-ratio-proportion`.)
- T-RPR-2: Given a wrong answer matching the all-direct trigger in an inverse-proportion context, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint. (Covers `maths-ratio-proportion`.)

## Zone: Numerica > BIDMAS

Covers `maths-bidmas-order-of-operations` plus future order-of-operations nodes (negative-number arithmetic with BIDMAS, algebraic substitution under BIDMAS).

### Content probes

- C-BID-1: Learner evaluates strictly left to right, ignoring operator precedence (says 6 + 4 × 3 = 30 because they did 6 + 4 first).
  - Required handling: misconception entry; at least one question whose distractors include the strict-left-to-right answer.
- C-BID-2: Learner treats the D in BIDMAS as strictly preceding the M (always divides before multiplying, even when the multiplication appears to the left).
  - Required handling: misconception entry; at least one question on a `÷` and `×` expression where the multiplication appears first.
- C-BID-3: Learner treats the A in BIDMAS as strictly preceding the S (always adds before subtracting, even when the subtraction appears to the left).
  - Required handling: misconception entry; at least one question on a `+` and `-` expression where the subtraction appears first.
- C-BID-4: Learner applies the exponent to the sum (or to the wrong base), so reads 2 × 3² as (2 × 3)² = 36 rather than 2 × 9 = 18.
  - Required handling: misconception entry; at least one question whose distractors include the wrong-base power answer.
- C-BID-5: Learner ignores brackets that appear in the middle of an expression, evaluating left to right around them (says 5 + (4 + 2) × 3 = (5 + 4 + 2) × 3 = 33).
  - Required handling: misconception entry; at least one question whose distractors include the brackets-ignored answer.
- C-BID-6: Learner reads an index as repeated multiplication of the wrong factors (says 3² = 6 because 3 × 2 = 6, instead of 3 × 3 = 9).
  - Required handling: misconception entry; at least one question that exposes the index-as-multiply slip.
- C-BWN-1: Learner treats -3² and (-3)² as the same expression because they assume the minus sign binds to the digit before the power applies. (Covers `maths-bidmas-with-negatives`.)
  - Required handling: misconception entry; at least one spot-misconception question that contrasts the two forms; a scene that walks priority of indices above the unary minus.
- C-BWN-2: Learner believes a negative number squared remains negative because "a negative carries through every operation". (Covers `maths-bidmas-with-negatives`.)
  - Required handling: misconception entry; at least one Core MCQ on (-3)^2 whose distractors include the negative-result slip.
- C-BWN-3: Learner overgeneralises the "two negatives make a positive" rule from multiplication to addition or to subtraction of a positive, so writes -3 + (-2) = +5 or -3 - 2 = -1. (Covers `maths-bidmas-with-negatives`.)
  - Required handling: misconception entry; at least one Confident or Challenge question whose stem mixes addition of negatives with subtraction of negatives so the rule's correct domain is visible.
- C-BWN-4: Learner believes BIDMAS means addition is strictly evaluated before subtraction (or multiplication before division), rather than left to right within shared-priority levels. (Covers `maths-bidmas-with-negatives`.)
  - Required handling: misconception entry; at least one spot-misconception question that presents the strict A-before-S argument; a worked example that contrasts left-to-right within a level.

### Question shape probes

- Q-BID-1: At least one MCQ asks the learner to evaluate a two-operation expression `a + b × c` or `a − b × c`, with the strict-left-to-right answer present as a distractor.
- Q-BID-2: At least one numeric-entry question asks the learner to evaluate a two-operation expression where the conventionally lower-precedence operation appears to the left.
- Q-BID-3: At least one question asks the learner to evaluate an expression with brackets where the brackets change the result.
- Q-BID-4: At least one question asks the learner to evaluate an expression with one index (square or cube) where the index applies to a single factor inside a product.
- Q-BID-5: At least one drag-order question asks the learner to put the BIDMAS evaluation steps for a mixed expression into the correct order.
- Q-BID-6: At least one missing-step question hides one BIDMAS step in a worked solution and asks the learner to fill it in.
- Q-BID-7: At least one Challenge tier word problem asks the learner to construct a BIDMAS expression from a UK context (transport fares, tuck shop totals, sports scoring) and then evaluate it.
- Q-BID-8: At least one spot-misconception question presents a strict-left-to-right or wrong-base-exponent argument and asks whether the reasoning is sound.
- Q-BWN-1: At least one MCQ on the BIDMAS-with-negatives node tests (-3)^2 with the wrongly-negative -9 as a distractor. (Covers `maths-bidmas-with-negatives`.)
- Q-BWN-2: At least one numeric-entry on the BIDMAS-with-negatives node chains a square of a negative, a multiplication by a negative, and a subtraction of a negative in a single expression. (Covers `maths-bidmas-with-negatives`.)
- Q-BWN-3: At least one Challenge tier word problem on the BIDMAS-with-negatives node frames a UK context (Lake District temperature, submarine depth, bank balance) and requires a multi-step BIDMAS evaluation involving at least one negative. (Covers `maths-bidmas-with-negatives`.)
- Q-BWN-4: At least one missing-step question on the BIDMAS-with-negatives node hides the index step in evaluating a (-a)^2 expression. (Covers `maths-bidmas-with-negatives`.)

### Tutor probes

- T-BID-1: Given "Why doesn't BIDMAS just mean go in that exact order — divide before multiply?", the tutor's first reply explains that division and multiplication share a tier and run left to right, not a definition dump.
- T-BID-2: Given a wrong answer matching the strict-left-to-right trigger (for example "6 + 4 × 3 = 30"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-BID-3: Given an off-topic input (for example a question about US calculator brand BIDMAS settings), the tutor steers back to UK KS3 order-of-operations conventions politely.
- T-BID-4: Given a request for an inline definition (tap on "indices"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-BWN-1: Given "-3^2 must equal 9 because the minus sign goes with the 3", the tutor's first reply is a Socratic prompt about whether the brackets are written, not a direct correction. (Covers `maths-bidmas-with-negatives`.)
- T-BWN-2: Given a wrong answer matching the double-negative-blanket trigger (for example "-3 + (-2) = +5"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint. (Covers `maths-bidmas-with-negatives`.)

## Zone: Numerica > Basic Algebra

Covers `maths-algebra-introduction` plus future algebra nodes (solving one-step equations, expanding brackets, factorising linear expressions).

### Content probes

- C-ALG-1: Learner treats a letter as an object (says 3a + 2b is "5 things" or "3 apples and 2 bananas").
  - Required handling: misconception entry; at least one question whose distractors include the combine-letters trap.
- C-ALG-2: Learner conjoins an unlike pair, writing 3a + 4 as 7a because they think every line must end with one term.
  - Required handling: misconception entry; at least one question whose correct answer is "cannot be simplified" or equivalent.
- C-ALG-3: Learner squares the letter on collection, writing 3a + 2a as 5a squared.
  - Required handling: misconception entry; at least one question that pairs 5a with 5a squared as distractors.
- C-ALG-4: Learner uses fruit-salad notation, treating b in 2b as "boy" rather than "number of boys".
  - Required handling: misconception entry; at least one Challenge tier word problem where the count interpretation is the trap.
- C-ALG-5: Learner believes a letter has a fixed value tied to its position in the alphabet (n is always 14).
  - Required handling: misconception entry; at least one question or free-text prompt that surfaces the alphabet-position slip.
- C-ALG-6: Learner drops or mishandles the sign when substituting a negative value (writes 2x with x = -3 as 6, not -6).
  - Required handling: misconception entry; at least one numeric-entry question with a negative substitution value.
- C-ALG-7: Learner reads 4n as the digits 4 and n side by side, so 4n with n = 3 becomes 43 instead of 12.
  - Required handling: misconception entry; at least one question that exposes the digits-side-by-side answer.

### Question shape probes

- Q-ALG-1: At least one MCQ asks the learner to translate a worded phrase ("a number n times 4", "twice a number, then add 1") into compact algebraic form.
- Q-ALG-2: At least one numeric-entry question asks the learner to substitute a single positive value into a one-step expression.
- Q-ALG-3: At least one numeric-entry question asks the learner to substitute two values into a two-letter expression (for example 3a - 4b with a = 5, b = 2).
- Q-ALG-4: At least one numeric-entry question asks the learner to substitute a negative value into a one- or two-step expression.
- Q-ALG-5: At least one drag-order question places the steps for collecting like terms into the correct order.
- Q-ALG-6: At least one missing-step question hides one step in a worked solution for collecting like terms or substitution and asks the learner to fill it in.
- Q-ALG-7: At least one Challenge tier word problem in a UK context (school trip, bus fare, maths club, recipe) requires writing an expression and then substituting to evaluate it.
- Q-ALG-8: At least one spot-misconception question presents a conjoining or letter-as-object argument and asks whether the reasoning is sound.
- Q-ALG-9: At least one free-text question asks the learner to explain in their own words why an unlike-terms simplification is wrong, or why a letter is not pinned to its alphabet position.

### Tutor probes

- T-ALG-1: Given "Why isn't 3a + 4 just 7a?", the tutor's first reply is a Socratic prompt about whether the two terms share the same letter, not a direct correction.
- T-ALG-2: Given a wrong answer matching the letter-as-object trigger (for example "3a + 2b = 5ab"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-ALG-3: Given "Does the letter n always equal 14 because that is its place in the alphabet?", the tutor explains with a concrete substitution example, not a definition.
- T-ALG-4: Given an off-topic input (for example a question about US algebra textbook variable conventions), the tutor steers back to UK KS3 algebraic notation politely.
- T-ALG-5: Given a request for an inline definition (tap on "coefficient" or "term"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Numerica > Sequences

Covers `maths-sequences-rules` plus future sequence nodes (nth-term derivation by differences, geometric sequences, special sequences such as triangular and Fibonacci).

### Content probes

- C-SEQ-1: Learner assumes every sequence rule must add the same amount each time, missing multiplicative or quadratic rules.
  - Required handling: misconception entry; at least one question that exposes the constant-difference default as a distractor or wrong answer.
- C-SEQ-2: Learner mixes up the position number with the term value, treating the third term as having value 3 in 5, 8, 11, 14, ... .
  - Required handling: misconception entry; at least one question that contrasts position with term value, ideally in a worked example or table.
- C-SEQ-3: Learner reads "+3 each time, first term 5" and says term 10 is 8, applying the rule once instead of nine times from term 1.
  - Required handling: misconception entry; at least one Confident or Challenge question whose distractors include the apply-once trap.
- C-SEQ-4: Learner spots the term-to-term rule "+3" and writes the position-to-term rule as 3n without checking term 1.
  - Required handling: misconception entry; at least one Confident MCQ whose distractors include 3n alongside the correct 3n + 2.
- C-SEQ-5: Learner extends a non-arithmetic pattern arithmetically, computing gaps for 1, 2, 4, 8, ... and predicting the next term from the gap series.
  - Required handling: misconception entry; at least one numeric-entry question that surfaces the multiplicative rule.
- C-SEQ-6: Learner ignores the direction of a decreasing sequence and writes "add 3" for 20, 17, 14, 11, ... instead of "subtract 3".
  - Required handling: misconception entry; at least one Core question on a decreasing sequence with both add and subtract distractors.
- C-SEQ-7: Learner substitutes the term value into the position-to-term rule instead of the position number.
  - Required handling: misconception entry; at least one Challenge question whose distractors include the term-as-input answer.

### Question shape probes

- Q-SEQ-1: At least one Core MCQ asks the learner to identify the term-to-term rule of a 4-term arithmetic sequence, with each distractor tied to a specific misstep (sign error, doubled difference, wrong operation).
- Q-SEQ-2: At least one numeric-entry question asks the learner to find the next term of a decreasing arithmetic sequence.
- Q-SEQ-3: At least one numeric-entry question asks the learner to substitute n into a position-to-term rule of the form an + b.
- Q-SEQ-4: At least one Confident MCQ asks the learner to choose the correct position-to-term rule from a list, with 3n and n + 3 as distractors against the correct 3n + 2 (or equivalent shape).
- Q-SEQ-5: At least one drag-order or numeric-entry question places terms generated by a non-linear position-to-term rule (such as n squared) into ascending order or asks for the kth term.
- Q-SEQ-6: At least one missing-step question hides a BIDMAS evaluation step inside a substitution into a position-to-term rule.
- Q-SEQ-7: At least one Challenge tier word problem maps a UK context (transport hire, library fees, canteen totals) onto a position-to-term rule of the form a + bn or bn + a, requiring substitution.
- Q-SEQ-8: At least one spot-misconception question presents the apply-once or doubled-difference argument and asks whether the reasoning is sound.
- Q-SEQ-9: At least one slider-explore question lets the learner adjust the position to land on a target term, modelling the position-to-term mapping continuously.

### Tutor probes

- T-SEQ-1: Given "The rule is +3, so the 10th term of 5, 8, 11, 14, ... must be 8", the tutor's first reply is a Socratic prompt about how many times the rule applies between term 1 and term 10, not a direct correction.
- T-SEQ-2: Given a wrong answer matching the constant-difference trigger (for example, predicting 11 as the next term of 1, 2, 4, 8), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-SEQ-3: Given "Why is the rule 3n + 2 and not just 3n?", the tutor walks the learner through testing at n = 1 with a small worked check, not a definition.
- T-SEQ-4: Given an off-topic input (for example a question about US baseball jersey number sequences), the tutor steers back to UK KS3 sequence language politely.
- T-SEQ-5: Given a request for an inline definition (tap on "term-to-term rule" or "position-to-term rule"), the glossary returns a UK English age-12 definition under 2 seconds.

### nth-term derivation extensions (`maths-sequences-nth-term`)

#### Content probes
- C-SEQN-1: Learner finds the common difference and writes the rule as an alone, never adjusting by a constant b (writes 3n for a sequence whose term 1 is not 3).
  - Required handling: misconception entry; at least one Confident MCQ whose distractors include just-an alongside the correct an + b.
- C-SEQN-2: Learner sees a common difference of 4 and writes the rule as n + 4 instead of 4n + b, treating the difference as an additive constant.
  - Required handling: misconception entry; at least one Core spot-misconception or MCQ whose distractors include n + difference.
- C-SEQN-3: Learner refuses to write a negative constant b in the rule, so writes 5n + 3 (or similar) when the correct rule is 5n - 2 because term 1 is smaller than the value of an at n = 1.
  - Required handling: misconception entry; at least one Confident MCQ whose correct answer has a negative b.
- C-SEQN-4: Learner writes a rule that matches term 1 and stops, without checking at any other term, missing slips like 5n - 0 for 5, 9, 13, 17, ... .
  - Required handling: misconception entry; at least one drag-order or missing-step question that explicitly includes the verify-at-second-term step.
- C-SEQN-5: Learner takes the value of term 1 as the constant b, so writes 3n + 4 instead of 3n + 1 for the sequence 4, 7, 10, 13, ... .
  - Required handling: misconception entry; at least one Confident question whose distractors include term-1-as-constant.
- C-SEQN-6: Learner gets confused about which number multiplies n and which is added on, swapping a and b (writes 1n + 3 instead of 3n + 1).
  - Required handling: misconception entry; at least one MCQ whose distractors include the swapped-a-and-b form.

#### Question shape probes
- Q-SEQN-1: At least one Core numeric-entry question asks the learner to substitute n into a position-to-term rule of the form an + b with positive a and positive b.
- Q-SEQN-2: At least one Confident MCQ asks the learner to find the nth term rule for a 4-term arithmetic sequence with positive coefficient and positive constant b, with the just-an form as a distractor.
- Q-SEQN-3: At least one Confident MCQ or numeric-entry question asks the learner to find the nth term rule for a 4-term arithmetic sequence whose constant b is negative, with positive-b distractors.
- Q-SEQN-4: At least one missing-step question hides the adjustment step (computing b = term1 - a) inside a worked solution.
- Q-SEQN-5: At least one drag-order question places the four steps for finding the nth term rule (find difference, write an, adjust by b, verify) into the correct order.
- Q-SEQN-6: At least one Challenge tier word problem maps a UK context (transport hire, library fees, cumulative bus parking) onto a position-to-term rule of the form an + b and asks the learner to derive a or b.
- Q-SEQN-7: At least one spot-misconception question presents the rule-as-n-plus-difference or just-an argument and asks whether the reasoning is sound.

#### Tutor probes
- T-SEQN-1: Given "The gap is 3 so the nth term rule is 3n", the tutor's first reply is a Socratic prompt about what term 1 of 3n would be at n = 1, not a direct correction.
- T-SEQN-2: Given a wrong answer matching the just-difference trigger (for example writing 3n for 4, 7, 10, 13, ...), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-SEQN-3: Given "Why does the nth term rule have to be an + b and not just n + something?", the tutor walks through one worked check at n = 1 and n = 2 to show the difference, not a definition.
- T-SEQN-4: Given an off-topic input (for example a question about US payroll arithmetic sequences), the tutor steers back to UK KS3 nth-term language politely.
- T-SEQN-5: Given a request for an inline definition (tap on "nth term" or "common difference"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Numerica > Coordinates

Covers `maths-coordinates-grid` plus future coordinates nodes (plotting linear graphs from a rule, midpoints, transformations on a coordinate grid).

### Content probes

- C-COORD-1: Learner swaps x and y when reading or writing a coordinate (writes (3, 5) for a point that is 5 across and 3 up).
  - Required handling: misconception entry; at least one MCQ and one spot-misconception question that pair the swapped pair with the correct pair as distractors.
- C-COORD-2: Learner reads a negative x value as "count from the right hand end" rather than as left of the y axis, or assumes negative on the x axis means down.
  - Required handling: misconception entry; at least one Confident question on a quadrant 2 or quadrant 3 point and one spot-misconception question that surfaces the right-end argument.
- C-COORD-3: Learner counts the origin as 1 instead of 0, shifting every coordinate by one square along each axis.
  - Required handling: misconception entry; at least one numeric-entry question whose off-by-one answer maps to this slip.
- C-COORD-4: Learner counts squares from the origin instead of reading the printed labels on an axis ruled in steps of 2 or steps of 5.
  - Required handling: misconception entry; at least one Challenge tier MCQ on a step-of-2 or step-of-5 grid where the count-of-squares answer is a distractor.
- C-COORD-5: Learner drops the minus sign on the x value when a point sits in quadrant 2, writing both numbers as positive.
  - Required handling: misconception entry; at least one Confident or Challenge question that surfaces a quadrant 2 point.
- C-COORD-6: Learner writes a coordinate pair as (3.5) with a decimal point rather than (3, 5) with a comma.
  - Required handling: misconception entry; at least one MCQ where the comma-as-decimal slip is a distractor.
- C-COORD-7: Learner believes the origin has coordinates (1, 1), or writes the origin as a single number.
  - Required handling: misconception entry; at least one Core question whose distractors include (1, 1) and (1, 0) or (0, 1).

### Question shape probes

- Q-COORD-1: At least one numeric-entry question asks the learner to read off the x value or the y value of a named coordinate pair.
- Q-COORD-2: At least one MCQ asks the learner to identify the coordinates of a point described in worded form (so many across, so many up, with at least one negative direction).
- Q-COORD-3: At least one sketch question asks the learner to plot a single given point on a first-quadrant grid.
- Q-COORD-4: At least one missing-step question hides one of the steps in plotting a point with at least one negative coordinate.
- Q-COORD-5: At least one drag-order question places coordinate pairs in order by x value or by y value.
- Q-COORD-6: At least one Challenge tier MCQ recovers the fourth corner of a rectangle from three given corner coordinates (Bond 11+ shape).
- Q-COORD-7: At least one Challenge tier numeric or MCQ requires reading or computing on a grid whose axis is labelled in steps of 2 (or 5), where the count-of-squares answer is a distractor.
- Q-COORD-8: At least one slider-explore question asks the learner to land on a target negative x value or negative y value on a number line.
- Q-COORD-9: At least one spot-misconception question presents a swap-xy or negative-as-right-end argument and asks whether the reasoning is sound.

### Tutor probes

- T-COORD-1: Given "I read (3, 5) as 3 up and 5 across because the order does not matter", the tutor's first reply is a Socratic prompt about which axis comes first, not a direct correction.
- T-COORD-2: Given a wrong answer matching the swap-xy trigger (for example a point at "5 across, 3 up" written as (3, 5)), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-COORD-3: Given "Why is the origin (0, 0) and not (1, 1)?", the tutor explains by anchoring the axes to a number line with zero at the meeting point, not a definition dump.
- T-COORD-4: Given an off-topic input (for example a question about US street grid coordinates or zip codes), the tutor steers back to UK KS3 coordinate language politely.
- T-COORD-5: Given a request for an inline definition (tap on "quadrant"), the glossary returns a UK English age-12 definition under 2 seconds.

### Shapes-and-transformations extensions (`maths-coordinates-four-quadrants-shapes`)

#### Content probes
- C-COORDS-1: Learner reflects in the wrong axis (says reflection in the x axis flips the x value, or reflection in the y axis flips the y value), missing that the axis you reflect in stays fixed.
  - Required handling: misconception entry; at least one Core MCQ and one spot-misconception that pair flipped-x vs flipped-y as distractors against the correct image.
- C-COORDS-2: Learner thinks reflection in either axis flips the signs of both coordinates (does the 180-degree rotation about the origin instead of a reflection).
  - Required handling: misconception entry; at least one Challenge tier spot-misconception question that contrasts a reflection with a rotation.
- C-COORDS-3: Learner adds the y component of a column vector instead of subtracting when the wording says "down" (reads "3 right and 2 down" as +2 to y instead of -2).
  - Required handling: misconception entry; at least one Core MCQ whose distractors include the wrong-direction translation answer.
- C-COORDS-4: Learner translates only the labelled vertex and leaves the others where they were, producing a distorted image rather than a translated shape.
  - Required handling: misconception entry; at least one Confident drag-order question that places the "every vertex moves" step explicitly in the workflow.
- C-COORDS-5: Learner names a quadrilateral with two distinct side lengths (a non-square rectangle) as a square, ignoring the side-length check.
  - Required handling: misconception entry; at least one Confident MCQ whose distractors include the square answer for a true rectangle.
- C-COORDS-6: Learner swaps the x and y components of a column vector, reading (3, -2) as 3 up and 2 left.
  - Required handling: misconception entry; at least one Confident question whose distractors include the swapped-component image.
- C-COORDS-7: Learner joins listed vertices in the order they appear on the page rather than in the order around the perimeter, ending up with a self-crossing figure.
  - Required handling: misconception entry; at least one scene or worked example that explicitly addresses the perimeter-order rule (no question required, since the renderer is static).

#### Question shape probes
- Q-COORDS-1: At least one Core MCQ asks the learner to identify the image of a point under reflection in the x or y axis, with the wrong-axis distractor present.
- Q-COORDS-2: At least one Core question asks the learner to translate a single point by a worded vector ("3 right and 1 down").
- Q-COORDS-3: At least one Confident MCQ asks the learner to identify the image of a named vertex of a triangle or rectangle under a translation by a column vector.
- Q-COORDS-4: At least one Confident MCQ asks the learner to name a shape (square vs rectangle vs parallelogram) from a list of four vertices spanning multiple quadrants.
- Q-COORDS-5: At least one missing-step question hides the flip-the-coordinate step inside a reflection worked solution.
- Q-COORDS-6: At least one drag-order question places the steps for translating a shape by a column vector into the correct order.
- Q-COORDS-7: At least one Challenge tier MCQ recovers the fourth corner of a rectangle from three given corner coordinates spanning multiple quadrants (Bond 11+ shape).
- Q-COORDS-8: At least one Challenge tier multi-step question asks the learner to apply two transformations in sequence (translate then reflect, or reflect then translate) and identify the final image of a vertex.
- Q-COORDS-9: At least one spot-misconception question presents the both-signs-flipped or wrong-axis argument and asks whether the reasoning is sound.

#### Tutor probes
- T-COORDS-1: Given "I reflected (3, 2) in the x axis and got (-3, 2)", the tutor's first reply is a Socratic prompt about which axis is the mirror line and which coordinate flips, not a direct correction.
- T-COORDS-2: Given a wrong answer matching the both-signs-flipped trigger (for example "(4, 3) reflected in the x axis is (-4, -3)"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-COORDS-3: Given "Why does only one coordinate flip?", the tutor walks through a small worked check by measuring distance to the axis on both sides, not a definition.
- T-COORDS-4: Given an off-topic input (for example a question about US street grid translations), the tutor steers back to UK KS3 transformation language politely.
- T-COORDS-5: Given a request for an inline definition (tap on "translation" or "reflection"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Vitalia > Cells

Covers `biology-cells-animal-cell`, `biology-cells-plant-cell`, `biology-cells-specialised-cells`.

### Content probes

- C-CELL-1: Learner believes animal cells have a cell wall like plant cells.
  - Required handling: misconception entry; at least one question whose distractors include the cell-wall-on-animal-cell trap.
- C-CELL-2: Learner says mitochondria "make" or "create" energy, rather than releasing energy from glucose during respiration.
  - Required handling: misconception entry; at least one spot-misconception or MCQ that surfaces the make-energy phrasing.
- C-CELL-3: Learner believes animal cells contain chloroplasts.
  - Required handling: misconception entry; at least one question whose distractors include chloroplast on an animal cell, ideally a Challenge tier item linking the absence of chloroplasts to animals taking in food rather than photosynthesising.
- C-CELL-4: Learner attributes control of substances entering and leaving the cell to the nucleus rather than the cell membrane.
  - Required handling: misconception entry; at least one MCQ that pairs nucleus and cell membrane as competing answers for that role.
- C-CELL-5: Learner blurs the hierarchy of organisation, treating cell, tissue, organ, organ system, and organism as interchangeable.
  - Required handling: misconception entry; at least one drag-order question that places the five levels in size order.
- C-CELL-6: Learner believes animal cells have a large permanent vacuole like plant cells, or otherwise treats the vacuole as a feature shared by both cell types.
  - Required handling: misconception entry; at least one question whose distractors include large permanent vacuole on an animal cell.
- C-CELL-7: Learner believes all cells in the body are about the same size, so cell size cannot be used to compare cell types.
  - Required handling: misconception entry; at least one spot-misconception or Challenge tier question that surfaces cell-size variation between cell types.
- C-CELL-8: Learner believes a red blood cell has a nucleus like every other animal cell.
  - Required handling: misconception entry on the specialised-cells node; at least one MCQ or spot-misconception that surfaces the missing-nucleus adaptation and links it to haemoglobin.
- C-CELL-9: Learner attributes the energy that powers a sperm cell's swim to its tail rather than to the mitochondria packed in its midpiece.
  - Required handling: misconception entry on the specialised-cells node; at least one spot-misconception or MCQ that pairs the tail (motion) against the midpiece mitochondria (energy release).
- C-CELL-10: Learner believes root hair cells contain chloroplasts because they are plant cells, missing that no light reaches them in the soil.
  - Required handling: misconception entry on the specialised-cells node; at least one MCQ that asks the learner to spot the chloroplast error on a root cell drawing.
- C-CELL-11: Learner believes airway cilia trap dust and bacteria themselves, rather than wafting mucus that traps the particles.
  - Required handling: misconception entry on the specialised-cells node; at least one Challenge tier MCQ that links damaged cilia to chest infection risk via the mucus-escalator model.

### Question shape probes

- Q-CELL-1: At least one labelled-image question places animal-cell organelle labels onto hotspots on an animal-cell diagram, with at least one plant-only label included as a distractor in the pool.
- Q-CELL-2: At least one MCQ pairs an animal-cell-only feature against a plant-cell-only feature as distractors, so the question tests structure recognition rather than recall of a single name.
- Q-CELL-3: At least one drag-order or drag-drop-builder question requires placing the five levels of organisation (cell, tissue, organ, organ system, organism) in size order, or building an animal cell from a parts pool that includes plant-only structures.
- Q-CELL-4: At least one Challenge tier word problem set in a UK context (school nurse, classroom microscope, school sample slide) requires reading or computing on cell counts or cell sizes with at least one inferred intermediate step.
- Q-CELL-5: At least one spot-misconception question presents a "mitochondria make energy" or "animal cells have a cell wall" argument and asks whether the reasoning is sound.
- Q-CELL-6: At least one numeric-entry question asks the learner to count which of a listed set of structures are found in animal cells, distinguishing animal-cell from plant-only features.
- Q-CELL-7: At least one Challenge tier MCQ uses an early KS4 GCSE Foundation tier framing (specialised cell adaptation, sperm cell mitochondria density, nerve cell length) to stretch the learner beyond the bare KS3 list.
- Q-CELL-8: At least one labelled-image question on the specialised-cells node places six specialised cell labels (red blood cell, sperm cell, root hair cell, ciliated epithelial cell, nerve cell, palisade leaf cell) onto hotspots on a single overview diagram, with at least one off-topic label in the pool.
- Q-CELL-9: At least one drag-drop-builder question on the specialised-cells node requires building a sperm cell from a parts pool that mixes correct features (head, midpiece mitochondria, tail) with plant-only distractors (cell wall, chloroplasts).
- Q-CELL-10: At least one Challenge tier numeric-entry on the specialised-cells node requires reading a UK clinical or class-microscope context (red-cell count per cubic millimetre, nerve cell length in metres versus red blood cell in micrometres) and computing through at least one inferred unit step.
- Q-CELL-11: At least one data-extraction question on the specialised-cells node uses a small surface-area-to-volume ratio table and asks which cell best matches a job demanding a large surface for taking in dissolved substances.

### Tutor probes

- T-CELL-1: Given "Animal cells have cell walls because they need to be strong, right?", the tutor's first reply is a Socratic prompt about what holds an animal cell in shape, not a direct correction.
- T-CELL-2: Given a wrong answer matching the chloroplast trigger (for example "skin cells contain chloroplasts"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-CELL-3: Given "Mitochondria make energy from nothing, right?", the tutor walks the learner through a respiration analogy (glucose plus oxygen, energy transferred), not a definition dump.
- T-CELL-4: Given an off-topic input (for example a question about US biology textbook diagrams or AP Biology mitochondria), the tutor steers back to UK KS3 cell language politely.
- T-CELL-5: Given a request for an inline definition (tap on "cytoplasm" or "mitochondrion"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-CELL-6: Given "A sperm cell's tail makes the energy that powers it, right?", the tutor's first reply is a Socratic prompt that separates motion (tail) from energy release (mitochondria), not a direct correction.
- T-CELL-7: Given a wrong answer matching the red-blood-cell-has-nucleus trigger, the tutor cites the relevant misconception's `reExplanation` (mature red cells lose the nucleus to make room for haemoglobin) rather than producing a fresh hint.

## Zone: Vitalia > Microscopy

Covers `biology-microscopy-light-microscope`, `biology-microscopy-magnification`.

### Content probes

- C-MICRO-1: Learner believes the eyepiece lens does all the magnifying on a compound light microscope.
  - Required handling: misconception entry on the light-microscope node; at least one MCQ or spot-misconception that distinguishes objective and eyepiece magnification, with at least one Confident tier item that pairs them.
- C-MICRO-2: Learner believes the mirror or built-in light at the base magnifies the cell, rather than just providing illumination.
  - Required handling: misconception entry on the light-microscope node; at least one MCQ that pairs the mirror's job with the lens system's job.
- C-MICRO-3: Learner starts on the highest power objective and cannot find the specimen.
  - Required handling: misconception entry on the light-microscope node; at least one Core MCQ on which objective to use first.
- C-MICRO-4: Learner uses the coarse focus knob on the highest power objective and risks driving the lens through the slide.
  - Required handling: misconception entry on the light-microscope node; at least one Confident tier MCQ or data-extraction that links coarse-knob misuse at high power to slide damage.
- C-MICRO-5: Learner believes higher magnification shows a wider area of the slide, rather than a smaller patch in greater detail.
  - Required handling: misconception entry on the light-microscope node; at least one spot-misconception or Challenge tier numeric that quantifies the field-of-view trade-off.
- C-MICRO-6: Learner places the coverslip flat onto the specimen and traps air bubbles, or places it before adding water and specimen.
  - Required handling: misconception entry on the light-microscope node; at least one drag-order or Challenge tier MCQ that surfaces the coverslip-from-an-edge step.
- C-MICRO-7: Learner writes magnification with units (for example "x400 mm") rather than as a unit-less ratio.
  - Required handling: misconception entry on the magnification node; at least one MCQ that flags the units error and reinforces magnification as a ratio.
- C-MICRO-8: Learner reports the objective magnification as the total magnification, ignoring the eyepiece.
  - Required handling: misconception entry on the magnification node; at least one spot-misconception or MCQ that requires multiplying the two stages.
- C-MICRO-9: Learner divides image size by actual size (or vice versa) without converting to a common unit first.
  - Required handling: misconception entry on the magnification node; at least one Confident or Challenge tier numeric that requires a mm-to-µm conversion before the division.
- C-MICRO-10: Learner multiplies image size by magnification to find the actual cell size, instead of dividing.
  - Required handling: misconception entry on the magnification node; at least one MCQ that flags the wrong direction of the formula.
- C-MICRO-11: Learner treats a scale bar as if it is the magnification, rather than a labelled real distance from which the magnification is computed.
  - Required handling: misconception entry on the magnification node; at least one Challenge tier numeric that asks the learner to derive magnification from a scale bar.

### Question shape probes

- Q-MICRO-1: At least one labelled-image question on the light-microscope node places eyepiece, objective, stage, coarse focus, fine focus, and mirror or built-in light onto hotspots on a microscope diagram, with at least one off-microscope distractor in the pool.
- Q-MICRO-2: At least one drag-order question on the light-microscope node places the steps of slide setup (slide on bench, water drop, specimen, coverslip, stage, focus) in order.
- Q-MICRO-3: At least one drag-drop-builder question on the light-microscope node requires building a working slide from a parts pool that mixes correct items (slide, water, specimen, coverslip) with off-slide distractors (mirror, lens, pencil).
- Q-MICRO-4: At least one Challenge tier numeric on the light-microscope node requires reasoning about field-of-view shrinkage or class-time arithmetic in a UK school context.
- Q-MICRO-5: At least one Challenge tier MCQ uses an early KS4 GCSE Foundation tier framing (image inversion, slide-direction reasoning, error diagnosis) to stretch the learner beyond the bare KS3 list.
- Q-MICRO-6: At least one numeric-entry on the magnification node asks the learner to compute total magnification from eyepiece x objective, with at least one Confident-tier item using a non-standard eyepiece (for example x15) to test whether the learner reads both numbers.
- Q-MICRO-7: At least one numeric-entry on the magnification node uses the rearranged formula A = I / M with image size in mm and asks for the actual size in micrometres, requiring the learner to convert units in the final step.
- Q-MICRO-8: At least one Challenge tier numeric on the magnification node requires deriving the magnification from a scale bar (image distance plus labelled real distance), with at least one mm-to-µm conversion in the working.
- Q-MICRO-9: At least one drag-order question on the magnification node sequences the steps from picture to actual size (read image, find total magnification, divide, convert units).

### Tutor probes

- T-MICRO-1: Given "I can just start at x40 and find the cells anyway, right?", the tutor's first reply is a Socratic prompt about the field of view at high power, not a direct correction.
- T-MICRO-2: Given a wrong answer matching the mirror-magnifies trigger, the tutor cites the relevant misconception's `reExplanation` (mirror provides light, lenses magnify) rather than producing a fresh hint.
- T-MICRO-3: Given "Why can I not use the coarse knob at x40?", the tutor walks the learner through the close lens-to-slide distance at high power, not a definition dump.
- T-MICRO-4: Given an off-topic input (for example a question about US lab microscopes or electron microscopes beyond KS3), the tutor steers back to UK KS3 light-microscope language politely.
- T-MICRO-5: Given a request for an inline definition (tap on "objective" or "coverslip"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-MICRO-6: Given "Why does my magnification answer have x400 mm at the end?", the tutor's first reply is a Socratic prompt about the units in the formula, not a direct correction.
- T-MICRO-7: Given a wrong answer matching the multiply-not-divide trigger on actual cell size, the tutor cites the relevant misconception's `reExplanation` (the magnification triangle) rather than producing a fresh hint.

## Zone: Vitalia > Body Systems

Covers `biology-body-systems-digestive`, `biology-body-systems-circulatory`, `biology-body-systems-respiratory`.

### Content probes

- C-BS-1: Learner believes all digestion happens in the stomach in one go.
  - Required handling: misconception entry on the digestive node; at least one MCQ or spot-misconception that distributes digestion across mouth, stomach, and small intestine.
- C-BS-2: Learner believes digested food enters the blood from the stomach rather than from the small intestine.
  - Required handling: misconception entry on the digestive node; at least one Core MCQ that asks where food enters the blood.
- C-BS-3: Learner skips the oesophagus when sequencing the gut from mouth to anus.
  - Required handling: misconception entry on the digestive node; at least one drag-order or labelled-image item that includes the oesophagus.
- C-BS-4: Learner conflates mechanical and chemical digestion (for example, claiming "mechanical uses enzymes and chemical uses teeth").
  - Required handling: misconception entry on the digestive node; at least one MCQ that defines both kinds correctly and at least one Confident-tier item that distinguishes them.
- C-BS-5: Learner believes the large intestine does most of the digesting, rather than reclaiming water.
  - Required handling: misconception entry on the digestive node; at least one MCQ on the role of the large intestine.
- C-BS-6: Learner believes food passes through non-gut organs (heart, lungs, liver) on its journey through the body.
  - Required handling: misconception entry on the digestive node; at least one drag-drop-builder or MCQ that excludes non-gut organs from the gut path.
- C-BS-7: Learner reverses the direction of arteries and veins (for example, claiming "arteries carry blood back to the heart").
  - Required handling: misconception entry on the circulatory node; at least one Core MCQ that asks which vessel carries blood AWAY from the heart.
- C-BS-8: Learner conflates red and white blood cells, attributing germ-fighting to red cells or oxygen-carrying to white cells.
  - Required handling: misconception entry on the circulatory node; at least one MCQ on red blood cell function.
- C-BS-9: Learner uses single circulation rather than double circulation when tracing a drop of blood.
  - Required handling: misconception entry on the circulatory node; at least one spot-misconception or numeric (count of heart passes per trip) probing the double-circulation idea.
- C-BS-10: Learner believes all arteries carry oxygen-rich blood and all veins carry oxygen-low blood, missing the lung-loop exception.
  - Required handling: misconception entry on the circulatory node; at least one Confident-tier spot-misconception that surfaces the lung-loop exception.
- C-BS-11: Learner believes the lungs make oxygen rather than taking it from the air.
  - Required handling: misconception entry on the respiratory node; at least one MCQ that distinguishes "make" from "take in".
- C-BS-12: Learner conflates breathing with respiration, treating the two as one chemical process.
  - Required handling: misconception entry on the respiratory node; at least one Confident-tier spot-misconception or MCQ that separates air movement (lungs) from energy release (cells).
- C-BS-13: Learner reverses the direction of gas exchange at the alveolus (oxygen out, carbon dioxide in).
  - Required handling: misconception entry on the respiratory node; at least one Core MCQ that asks which gas passes into the alveolus.
- C-BS-14: Learner believes inhaled air is pure oxygen and exhaled air is pure carbon dioxide, ignoring nitrogen.
  - Required handling: misconception entry on the respiratory node; at least one Confident-tier spot-misconception that flags the nitrogen majority.
- C-BS-15: Learner treats breathing rate and heart rate as independent during exercise.
  - Required handling: misconception entry on the respiratory node; at least one MCQ on the respiratory node that explains why both rise together, with reference back to the circulatory pair.

### Question shape probes

- Q-BS-1: At least one labelled-image question on the digestive node places mouth, oesophagus, stomach, small intestine, and large intestine onto hotspots on a gut diagram, with at least one off-gut distractor (heart / lung / liver) in the pool.
- Q-BS-2: At least one drag-order question on the digestive node sequences the gut organs from mouth to anus.
- Q-BS-3: At least one Challenge tier numeric on the digestive node uses a UK school-meal context (Sunday roast, school lunch portions in grams, vitamin C in mg) for arithmetic that includes a conversion or fraction step.
- Q-BS-4: At least one Core MCQ on the circulatory node distinguishes arteries from veins by direction relative to the heart, with the distractor "veins carry blood away from the heart" present.
- Q-BS-5: At least one labelled-image question on the circulatory node places the lungs, heart, and body cells onto the double-circulation diagram, with at least one off-loop distractor (stomach / liver / brain) in the pool.
- Q-BS-6: At least one Confident tier drag-order on the circulatory node sequences a drop of blood through right heart, lungs, left heart, body cells.
- Q-BS-7: At least one Challenge tier numeric on the circulatory node uses a heart-rate or blood-volume calculation in a UK school context (PE lesson, Sevenoaks hospital, Manchester sports day).
- Q-BS-8: At least one labelled-image question on the respiratory node places trachea, bronchi, bronchioles, and alveoli onto the airway diagram, with at least one off-airway distractor in the pool.
- Q-BS-9: At least one Core MCQ on the respiratory node asks which gas passes from the blood into the alveolus, with carbon dioxide as the correct answer.
- Q-BS-10: At least one Confident tier numeric on the respiratory node converts a 30-second breathing-rate count into breaths per minute.
- Q-BS-11: At least one Challenge tier MCQ on the respiratory node explains why breathing rate and heart rate rise together after exercise, linking back to the circulatory node.
- Q-BS-12: At least one drag-drop-builder on each of the three nodes restricts the build to the correct organs / vessels / airway parts and rejects organs from other body systems.

### Tutor probes

- T-BS-1: Given "All digestion happens in the stomach, right?", the tutor's first reply is a Socratic prompt about where the food then goes when it leaves the stomach, not a direct correction.
- T-BS-2: Given a wrong answer matching the stomach-after-mouth trigger, the tutor cites the relevant misconception's `reExplanation` (the oesophagus link) rather than producing a fresh hint.
- T-BS-3: Given an off-topic input (for example a US AP Biology food-pyramid analogy), the tutor steers back to UK KS3 gut language politely.
- T-BS-4: Given "Veins carry blood away from the heart, right?", the tutor's first reply is a Socratic prompt about the meaning of the letters in "AWAY" (Arteries Away), not a direct correction.
- T-BS-5: Given a wrong answer matching the single-circulation trigger, the tutor cites the relevant misconception's `reExplanation` (lung loop plus body loop) and reinforces the "twice through the heart per trip" framing.
- T-BS-6: Given a request for an inline definition (tap on "alveolus" or "capillary"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-BS-7: Given "Breathing IS respiration, no?", the tutor's first reply is a Socratic prompt about whether you can hold your breath while still being alive, not a direct correction.
- T-BS-8: Given a wrong answer matching the gas-direction trigger on the alveolus question, the tutor cites the relevant misconception's `reExplanation` (which gas is more concentrated where) rather than producing a fresh hint.
- T-BS-9: Given "Why does my heart beat faster when I run?", the tutor walks the learner through the chain "muscles need oxygen, lungs take more in, heart moves it faster", not a definition dump.

## Zone: Vitalia > Reproduction

Covers `biology-reproduction-flowering-plant`, `biology-reproduction-human-overview`.

### Content probes

- C-REPRO-1: Learner conflates pollination with fertilisation, treating the bee landing on a flower as the moment of fertilisation.
  - Required handling: misconception entry on the flowering-plant node; at least one MCQ that defines pollination, at least one that defines fertilisation, and at least one drag-order or spot-misconception that places the two in sequence.
- C-REPRO-2: Learner swaps the male anther and the female stigma, naming the stigma as the pollen-maker.
  - Required handling: misconception entry on the flowering-plant node; at least one MCQ on which part makes pollen and at least one MCQ on which part receives it.
- C-REPRO-3: Learner believes that bright petals and nectar are signs of wind pollination.
  - Required handling: misconception entry on the flowering-plant node; at least one MCQ or spot-misconception that contrasts insect-pollinated and wind-pollinated flower features.
- C-REPRO-4: Learner believes any seed from a tall tree must be wind-dispersed (so acorns and conkers must blow away).
  - Required handling: misconception entry on the flowering-plant node; at least one MCQ that names the correct dispersal method for a UK animal-dispersed seed.
- C-REPRO-5: Learner conflates pollination and seed dispersal, treating them as the same event.
  - Required handling: misconception entry on the flowering-plant node; at least one Challenge-tier item that distinguishes the two and uses a UK example where the methods differ (e.g. silver birch wind-pollinated, wind-dispersed; bramble insect-pollinated, animal-dispersed).
- C-REPRO-6: Learner believes seeds do not need to be dispersed because the parent plant grows new seeds each year, missing the competition-for-resources reason.
  - Required handling: misconception entry on the flowering-plant node; at least one MCQ on why dispersal helps survival.
- C-REPRO-7: Learner believes the period is the egg leaving the body, rather than the lining of the uterus.
  - Required handling: misconception entry on the human-overview node; at least one Core MCQ or spot-misconception that names the lining (not the egg) as the substance shed during a period.
- C-REPRO-8: Learner names the uterus as the site of fertilisation rather than the oviduct.
  - Required handling: misconception entry on the human-overview node; at least one Core MCQ that asks where fertilisation happens; at least one Confident or Challenge spot-misconception or missing-step that places fertilisation in the oviduct followed by implantation in the uterus.
- C-REPRO-9: Learner believes the uterus produces the egg cells (largest organ on the diagram bias).
  - Required handling: misconception entry on the human-overview node; at least one Core MCQ that asks which organ releases the egg.
- C-REPRO-10: Learner places ovulation on day 1 of the cycle, when the period starts.
  - Required handling: misconception entry on the human-overview node; at least one Core MCQ that asks for the day of ovulation in an average 28-day cycle.
- C-REPRO-11: Learner believes the placenta pumps blood from the parent into the foetus.
  - Required handling: misconception entry on the human-overview node; at least one Confident-tier MCQ that asks the role of the placenta and includes "pumps blood" as an explicit distractor.
- C-REPRO-12: Learner uses "embryo" and "foetus" interchangeably from day 1 of pregnancy.
  - Required handling: misconception entry on the human-overview node; at least one MCQ on which name applies at a given week of pregnancy.
- C-REPRO-13: Learner believes the placenta blocks all harmful substances, missing the NHS warning about smoking, alcohol and medicines.
  - Required handling: misconception entry on the human-overview node; at least one Challenge-tier MCQ that maps an NHS lifestyle warning to the placenta-as-barrier mental model.

### Question shape probes

- Q-REPRO-1: At least one labelled-image question on the flowering-plant node places stigma, anther, ovary, and petal onto hotspots on a flower diagram, with off-flower distractors (root / leaf) in the pool.
- Q-REPRO-2: At least one drag-order question on the flowering-plant node sequences the four steps pollination, fertilisation, seed and fruit formation, seed dispersal, in that order.
- Q-REPRO-3: At least one Challenge-tier numeric on the flowering-plant node uses a UK orchard, hedgerow, or playing-field context (Sevenoaks, Manchester, Lake District, Tunbridge Wells) and requires at least one inferred multiplication or fraction step.
- Q-REPRO-4: At least one Confident-tier data-extraction on the flowering-plant node compares average dispersal distances of three named UK seeds in a class investigation.
- Q-REPRO-5: At least one labelled-image question on the human-overview node places ovary, oviduct, uterus, and vagina onto hotspots on the female system diagram, with at least one male-system label as a distractor.
- Q-REPRO-6: At least one labelled-image question on the human-overview node places testes, sperm tube, and penis onto hotspots on the male system diagram, with at least one female-system label as a distractor.
- Q-REPRO-7: At least one drag-order question on the human-overview node sequences fertilisation, implantation, embryo, foetus, birth in that order.
- Q-REPRO-8: At least one drag-drop-builder on the human-overview node restricts the build to the in-order journey of a sperm cell from testes through to oviduct, rejecting non-reproductive organs (stomach, bladder, lungs).
- Q-REPRO-9: At least one Challenge-tier numeric on the human-overview node uses an average-cycle date arithmetic step (cycle starts on date X, on which date does ovulation fall).
- Q-REPRO-10: At least one Challenge-tier MCQ on the human-overview node uses an NHS-sourced public-health framing (smoking and pregnancy) and asks the learner to map the warning onto the placenta mechanism.

### Tutor probes

- T-REPRO-1: Given "Pollination is the same as fertilisation, right?", the tutor's first reply is a Socratic prompt about how the pollen actually reaches the ovule, not a direct correction.
- T-REPRO-2: Given a wrong answer matching the anther/stigma swap, the tutor cites the relevant misconception's `reExplanation` (the A-for-ammo, S-for-sticky memory trick) rather than producing a fresh hint.
- T-REPRO-3: Given "All flowers must be pollinated by bees", the tutor steers the learner to compare an oak catkin with an apple blossom, not a definition dump.
- T-REPRO-4: Given an off-topic input on the human-overview node (for example a US health-class question on insurance or AP Biology hormones), the tutor steers back to UK KS3 reproductive system language politely.
- T-REPRO-5: Given "Doesn't the period mean the egg comes out?", the tutor's first reply is a Socratic prompt about the size of an egg cell vs the visible blood, not a direct correction.
- T-REPRO-6: Given a wrong answer matching the uterus-makes-eggs trigger on hro-q1, the tutor cites the relevant misconception's `reExplanation` (two ovaries, two roles) rather than producing a fresh hint.
- T-REPRO-7: Given a request for an inline definition (tap on "ovulation" or "placenta"), the glossary returns a UK English age-12 NHS-style definition under 2 seconds.
- T-REPRO-8: Given "Why does the NHS say not to smoke during pregnancy?", the tutor walks the learner through "the placenta passes small molecules across, including harmful ones; smoke molecules are small", not a moral framing or a definition of smoking.

## Zone: Vitalia > Variation and Classification

Covers `biology-variation-continuous-discontinuous`, `biology-classification-five-kingdoms`.

### Content probes

- C-VAR-1: Learner labels categorical traits such as blood group or eye colour as continuous because there are several categories.
  - Required handling: misconception entry on the variation node; at least one Core MCQ that asks for a discontinuous example with a categorical trait, and at least one Core spot-misconception or MCQ surfacing the four-blood-groups slip.
- C-VAR-2: Learner believes a trait must show a different value for every pupil to be continuous.
  - Required handling: misconception entry on the variation node; at least one Challenge-tier MCQ on a measured-data set with repeated values that is still continuous.
- C-VAR-3: Learner treats bar charts and histograms as interchangeable, missing that touching bars vs gaps carry meaning.
  - Required handling: misconception entry on the variation node; at least one Core MCQ that asks which chart fits continuous data and one that asks which chart fits discontinuous data.
- C-VAR-4: Learner judges tongue-rolling as continuous because of perceived "degrees" of ability.
  - Required handling: misconception entry on the variation node; at least one Confident-tier spot-misconception that surfaces the yes/no recording rule at KS3.
- C-VAR-5: Learner believes that rounding measurements to whole numbers turns a continuous trait into a discontinuous one.
  - Required handling: misconception entry on the variation node; at least one Challenge-tier MCQ that surfaces the "rounded values are still continuous" rule.
- C-VAR-6: Learner picks the kind of variation by the cause of the trait (single cause vs many causes) rather than by the data.
  - Required handling: misconception entry on the variation node, framed against KS3 scope (cause-of-variation depth is not in scope at Year 7).

### Question shape probes

- Q-VAR-1: At least one Core MCQ on the variation node asks for a continuous example, with discrete-category traits as distractors.
- Q-VAR-2: At least one Core MCQ on the variation node asks for a discontinuous example, with measured-on-a-scale traits as distractors.
- Q-VAR-3: At least one Core MCQ on the variation node asks which chart (histogram vs bar chart with gaps) fits a given trait, and another asks the opposite case.
- Q-VAR-4: At least one Confident-tier data-extraction on the variation node uses a UK-context Year 7 class survey histogram (shoe size in a Sevenoaks Y7 class) and asks for the modal value.
- Q-VAR-5: At least one Confident-tier numeric on the variation node asks the learner to compute a count from a class survey (e.g. "size 7 or larger").
- Q-VAR-6: At least one drag-drop-builder on the variation node asks the learner to pick all continuous traits and reject the discontinuous distractors.
- Q-VAR-7: At least one Challenge-tier numeric on the variation node uses a class survey (eye colour or blood group) and requires a percentage calculation.
- Q-VAR-8: At least one missing-step question on the variation node fills in the "group the measurements into bands" step within a chart-drawing routine.
- Q-VAR-9: At least one free-text question on the variation node asks the learner to explain why one trait is plotted as a histogram and another as a bar chart.
- Q-VAR-10: All UK-context survey contexts on the variation node use a Sevenoaks Y7 class (or another named UK school) with neutral observable traits only; no traits tied to ethnicity or race.

### Tutor probes

- T-VAR-1: Given "Why is blood group not continuous? It has four groups", the tutor's first reply is a Socratic prompt about whether anything sits between the groups, not a direct correction.
- T-VAR-2: Given a wrong answer matching the categories-as-continuous trigger on vcd-q1 or vcd-q2, the tutor cites the relevant misconception's `reExplanation` (the "halfway between two values?" test) rather than producing a fresh hint.
- T-VAR-3: Given "All bar charts are histograms", the tutor steers via "do the bars touch or have a gap?", not a definition dump.
- T-VAR-4: Given a request for an inline definition (tap on "continuous" or "histogram"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-VAR-5: Given an off-topic input on the variation node (for example a question about alleles or genetic causes), the tutor flags that cause-of-variation depth comes later in Year 8 / 9 and steers back to "is the data on a scale or in categories?".

### Content probes (classification)

- C-CLASS-1: Learner places fungi in the plant kingdom because mushrooms grow rooted to the ground.
  - Required handling: misconception entry on the classification node; at least one Core MCQ on the kingdom of a button mushroom; at least one Confident-tier spot-misconception that surfaces the photosynthesis-and-cellulose-vs-chitin sort line.
- C-CLASS-2: Learner believes animal cells have a cell wall.
  - Required handling: misconception entry on the classification node; at least one Core MCQ on what is true of every animal cell, with the cell-wall distractor as the dominant trap.
- C-CLASS-3: Learner believes the fungal cell wall is made of cellulose like the plant cell wall.
  - Required handling: misconception entry on the classification node; at least one Core MCQ on the make-up of the fungal cell wall (chitin); at least one Confident-tier MCQ that uses cellulose-plus-photosynthesis as the diagnostic for the plant kingdom.
- C-CLASS-4: Learner labels every single-celled organism as a bacterium.
  - Required handling: misconception entry on the classification node; at least one Confident-tier spot-misconception that surfaces the eukaryote-protist (Amoeba) case; at least one Challenge-tier MCQ that uses "single cell with a nucleus" to diagnose protists.
- C-CLASS-5: Learner believes bacteria have a nucleus, like other living cells.
  - Required handling: misconception entry on the classification node; at least one Confident-tier MCQ on which kingdom contains organisms with no nucleus (prokaryotes); at least one Challenge-tier MCQ contrasting bacterial and protist cells on the nucleus feature.
- C-CLASS-6: Learner believes baker's yeast is a kind of bacteria.
  - Required handling: misconception entry on the classification node; the Challenge-tier missing-step question on yeast checks the chitin-vs-cellulose and eukaryote-vs-prokaryote tests in sequence.
- C-CLASS-7: Learner uses smaller categories like "insects" as kingdoms.
  - Required handling: misconception entry on the classification node, framed against the five-kingdom-only KS3 scope; smaller categories called out explicitly as inside-the-animal-kingdom subsets.

### Question shape probes (classification)

- Q-CLASS-1: At least one Core MCQ on the classification node asks for the kingdom of each of: a robin (animal), an oak (plant), a button mushroom (fungi), Lactobacillus (prokaryote), and an Amoeba (protist), so all five kingdoms are surfaced as correct answers across the question pool.
- Q-CLASS-2: At least one Core MCQ on the classification node asks for the make-up of the fungal cell wall (chitin) with cellulose, glucose, and chlorophyll as distractors.
- Q-CLASS-3: At least one Core numeric on the classification node asks "how many kingdoms are there in the classic five-kingdom system?".
- Q-CLASS-4: At least one Confident-tier data-extraction on the classification node uses an unknown-organism feature table (cell type, cell wall material, photosynthesis, body) and asks for the kingdom.
- Q-CLASS-5: At least one drag-drop-builder on the classification node asks the learner to pick all UK animals from a pool that mixes animals, a plant, a fungus, a bacterium, and a protist.
- Q-CLASS-6: At least one Confident-tier numeric on the classification node asks the learner to count organisms in a specific kingdom from a fixed list of eight UK organisms.
- Q-CLASS-7: At least one Challenge-tier missing-step question on the classification node fills in the chitin-vs-cellulose check inside an account of why baker's yeast is a fungus, not a bacterium.
- Q-CLASS-8: At least one Challenge-tier MCQ on the classification node uses a single-celled-with-nucleus-and-cilia clue to direct the learner to the protist kingdom.
- Q-CLASS-9: All UK examples on the classification node use UK-grounded organisms (oak, robin, fox, hedgehog, holly, daisy, button mushroom, bread mould, Lactobacillus); no US wildlife.
- Q-CLASS-10: All chemical and biological terms in stems, options, and explanations on the classification node use UK English (colour, behaviour, etc.) and the SkillNode reading-age cap of 12 or younger.

### Tutor probes (classification)

- T-CLASS-1: Given "Mushrooms are plants, right?", the tutor's first reply is a Socratic prompt about whether the mushroom photosynthesises, not a direct correction.
- T-CLASS-2: Given a wrong answer matching the fungi-cellulose-wall trigger on cls-q7, the tutor cites the relevant misconception's `reExplanation` (the wall-material-by-kingdom trio) rather than producing a fresh hint.
- T-CLASS-3: Given "An Amoeba is just a small bacterium", the tutor steers the learner to the nucleus check, not a definition dump on prokaryotes.
- T-CLASS-4: Given a request for an inline definition (tap on "eukaryote", "prokaryote", or "chitin"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-CLASS-5: Given an off-topic input on the classification node (for example a US AP Biology three-domains reference, or "what about Archaea?"), the tutor flags that the three-domain system is GCSE+ depth and steers back to the five-kingdom system.

## Zone: Vitalia > Ecosystems

Covers `biology-ecosystems-food-chains`, `biology-ecosystems-food-webs`, `biology-ecosystems-energy-flow`.

### Content probes (food chains)

- C-ECO-1: Learner reverses the food chain arrow direction, treating the arrow as "what eats what" (eater to food) rather than "is eaten by" (food to eater).
  - Required handling: misconception entry on the food chains node; at least one MCQ where the wrong-direction chain is the dominant distractor; at least one spot-misconception that surfaces the eater-to-food slip.
- C-ECO-2: Learner mislabels the producer in a chain by picking the largest or most prominent organism (for example calling the fox the producer because it is the biggest).
  - Required handling: misconception entry on the food chains node; at least one Core MCQ where the producer is correctly identified by photosynthesis, with size-based distractors.
- C-ECO-3: Learner defines an organism's role purely by its position in the chain ("first thing is the producer") rather than by what it does (photosynthesises / eats which level).
  - Required handling: misconception entry on the food chains node; at least one Confident-tier spot-misconception that surfaces the position-equals-role slip.
- C-ECO-4: Learner conflates "predator" with "consumer" and uses them interchangeably, missing that primary, secondary, and top label the chain level.
  - Required handling: misconception entry on the food chains node; at least one Confident-tier MCQ that distinguishes consumer level from predator behaviour.
- C-ECO-5: Learner draws "Sun" as the first link in the chain, treating sunlight as a living organism.
  - Required handling: misconception entry on the food chains node; at least one Core free-text or MCQ that asks why the Sun is not a chain link.
- C-ECO-6: Learner believes the top predator is the most important organism because it is "at the top" and the others depend on it.
  - Required handling: misconception entry on the food chains node; at least one MCQ on the heron / sparrowhawk / fox role that surfaces the top-equals-most-important slip.

### Content probes (food webs)

- C-ECO-7: Learner predicts numerical changes when a species is removed (for example "rabbit numbers rise by 30%"), going beyond Y7 qualitative scope.
  - Required handling: misconception entry on the food webs node; at least one Confident-tier item that asks for direction-only effects (rise / fall / no immediate effect); NO numerical predictions in the bank.
- C-ECO-8: Learner believes that removing the top predator only affects the level immediately below, missing the cascade effect on producers and other levels.
  - Required handling: misconception entry on the food webs node; at least one Confident-tier item where removing a top predator changes both the prey level AND the producer level qualitatively.
- C-ECO-9: Learner reads a food web as a single chain, picking only one path through the web rather than seeing multiple chains sharing species.
  - Required handling: misconception entry on the food webs node; at least one item that asks how many chains share a named species in the web.
- C-ECO-10: Learner treats two animals at the same level as competing automatically, without checking they share a food source.
  - Required handling: misconception entry on the food webs node; at least one Confident-tier item that asks which two animals share a food source AND therefore compete.

### Content probes (energy flow)

- C-ECO-11: Learner believes energy flows in both directions along a food chain, or that the top predator passes energy "back" to lower levels.
  - Required handling: misconception entry on the energy flow node; at least one Core MCQ on the one-way direction of energy flow; at least one spot-misconception on energy "going back".
- C-ECO-12: Learner believes no energy is lost between trophic levels, treating the chain as a perfect transfer.
  - Required handling: misconception entry on the energy flow node; at least one Core MCQ that names sources of energy loss (movement, heat, waste, undigested parts).
- C-ECO-13: Learner draws a pyramid of biomass or applies the 10% rule numerically, going beyond Y7 scope.
  - Required handling: misconception entry on the energy flow node; pyramids in the bank are pyramids of NUMBERS only; NO biomass percentages or 10% rule calculations.
- C-ECO-14: Learner thinks food chains can have any number of links (including 8 or 10) without realising energy loss limits chain length to 4-5.
  - Required handling: misconception entry on the energy flow node; at least one Confident-tier item that links the chain length limit to energy lost at each step.
- C-ECO-15: Learner reads a pyramid of numbers expecting the bottom level to always have the largest organisms, missing that it has the largest count.
  - Required handling: misconception entry on the energy flow node; at least one Core data-extraction or numeric on the pyramid of numbers (one tree, many caterpillars, fewer blue tits, one sparrowhawk).

### Question shape probes

- Q-ECO-1: At least one Core MCQ on the food chains node tests arrow direction, with the reversed arrow as the dominant distractor.
- Q-ECO-2: At least one drag-order on the food chains node sequences a hedgerow chain (oak leaf, caterpillar, blue tit, sparrowhawk), with items shuffled so the natural order is NOT the input order (drag-order grading is index-based).
- Q-ECO-3: At least one drag-drop-builder on the food chains node restricts the chain to living organisms and rejects non-organism distractors (water, soil, Sun).
- Q-ECO-4: At least one labelled-image OR data-extraction on the food chains node uses a Sevenoaks pond chain (pond algae, mayfly nymph, stickleback, heron).
- Q-ECO-5: At least one Confident-tier MCQ on the food chains node distinguishes consumer level from predator behaviour (predator is HOW it hunts, consumer level is WHERE in the chain).
- Q-ECO-6: At least one Challenge-tier MCQ on the food chains node maps a 4-link Kentish meadow chain (clover, honeybee, great tit, kestrel) onto producer / primary / secondary / top predator labels.
- Q-ECO-7: At least one Core or Confident-tier item on the food webs node asks for the direction of effect when a species is removed (rise / fall / no immediate effect), NEVER a numerical prediction.
- Q-ECO-8: At least one data-extraction on the food webs node reads a Kentish farmland or oak-tree web and counts how many chains share a named species.
- Q-ECO-9: At least one Confident-tier item on the food webs node tests a top-down cascade (remove the top predator, prey rise, producer falls) qualitatively only.
- Q-ECO-10: At least one Core MCQ on the energy flow node names a source of energy loss (movement, heat, waste, undigested parts), with non-loss distractors.
- Q-ECO-11: At least one Core data-extraction or numeric on the energy flow node reads a pyramid of NUMBERS (1 oak, many caterpillars, fewer blue tits, 1 sparrowhawk).
- Q-ECO-12: At least one Confident-tier MCQ on the energy flow node connects the chain length limit (4-5 links) to energy lost at each step.
- Q-ECO-13: At least one Challenge-tier item on the energy flow node forbids biomass / 10% rule reasoning and rewards a qualitative answer.
- Q-ECO-14: NO numerical biomass percentages or 10% rule calculations anywhere in the zone.
- Q-ECO-15: All UK contexts in the zone use Kentish hedgerow / Sevenoaks pond / Kentish farmland / Sevenoaks woodland; NO US biomes (deserts of Arizona, Yellowstone wolves, etc).

### Tutor probes

- T-ECO-1: Given "the arrow shows what each animal hunts", the tutor's first reply is a Socratic prompt about reading the arrow as "is eaten by", not a direct correction.
- T-ECO-2: Given a wrong answer matching the arrow-reversed trigger on fch-q1 or fch-q7, the tutor cites the relevant misconception's `reExplanation` (the energy-as-river framing) rather than producing a fresh hint.
- T-ECO-3: Given "If foxes disappear, rabbits will rise by 50%", the tutor steers the learner to qualitative reasoning ("rise" alone is the Y7 answer; numbers are GCSE+) rather than working through the percentage.
- T-ECO-4: Given "Why are food chains never 10 links long?", the tutor walks the learner through "energy is lost at each step", not a launch into 10% rule arithmetic.
- T-ECO-5: Given a request for an inline definition (tap on "producer", "primary consumer", "trophic level"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-ECO-6: Given an off-topic input on the energy flow node (for example "what's the 10% rule?"), the tutor flags that the 10% rule is GCSE depth and steers back to the qualitative pyramid of numbers.
- T-ECO-7: Given an off-topic input on the food webs node (for example "what about Yellowstone wolves?"), the tutor steers back to UK contexts (Kentish farmland, Sevenoaks pond) politely.

## Zone: Vitalia > Photosynthesis

Covers `biology-photosynthesis-overview`, `biology-photosynthesis-rate`.

### Content probes

- C-PHOTO-1: Learner reverses the photosynthesis equation, naming glucose and oxygen as the reactants.
  - Required handling: misconception entry on the overview node; at least one Core MCQ that asks for the reactants and at least one Core MCQ that asks for the products.
- C-PHOTO-2: Learner believes plants only photosynthesise and never respire.
  - Required handling: misconception entry on the overview node; at least one Core spot-misconception or MCQ that surfaces both processes happening in the same plant cell.
- C-PHOTO-3: Learner places photosynthesis in the mitochondria, conflating it with respiration.
  - Required handling: misconception entry on the overview node; at least one Core MCQ on the location of photosynthesis (chloroplast) and one Confident-tier spot-misconception that surfaces the chloroplast vs mitochondrion mix-up.
- C-PHOTO-4: Learner writes chlorophyll into the word equation, treating it as a reactant or a product.
  - Required handling: misconception entry on the overview node; at least one drag-drop-builder that restricts the build to CO₂, water, glucose, and oxygen and rejects chlorophyll.
- C-PHOTO-5: Learner believes chlorophyll is itself converted into glucose during photosynthesis.
  - Required handling: misconception entry on the overview node; at least one Core MCQ on the role of chlorophyll (traps light, not used up).
- C-PHOTO-6: Learner believes plants can photosynthesise in the dark.
  - Required handling: misconception entry on the overview node; at least one Challenge-tier item using a dark-period investigation (starch test, mass loss, or pondweed bubbles).
- C-PHOTO-7: Learner inverts the gas exchange of photosynthesis, claiming plants take in oxygen and give out CO₂ during photosynthesis.
  - Required handling: misconception entry on the overview node; at least one Confident-tier MCQ that asks which gas is given out during photosynthesis.
- C-PHOTO-8: Learner does not connect photosynthesis to the food chain (does not see photosynthesis as the energy-trapping step almost all life depends on).
  - Required handling: at least one Confident-tier MCQ on the overview node that asks why photosynthesis underpins almost every food chain.

### Question shape probes

- Q-PHOTO-1: At least one Core MCQ on the overview node asks for the reactants of photosynthesis (carbon dioxide and water), with the products as the dominant distractor.
- Q-PHOTO-2: At least one Core MCQ on the overview node asks for the products (glucose and oxygen), with the reactants as the dominant distractor.
- Q-PHOTO-3: At least one drag-order question on the overview node sequences the journey of one CO₂ molecule from leaf intake through chloroplast trapping to glucose storage.
- Q-PHOTO-4: At least one labelled-image question on the overview node places chloroplast, nucleus, and large permanent vacuole onto a leaf cell diagram, with a non-plant-cell distractor (mitochondrion or cell membrane) in the pool.
- Q-PHOTO-5: At least one drag-drop-builder on the overview node restricts the build to the four word-equation substances and rejects chlorophyll, nitrogen, salt.
- Q-PHOTO-6: At least one Confident-tier data-extraction on the overview node compares oxygen readings across three sealed-jar conditions (empty, green plant, dead twig) and asks which jar holds a photosynthesising plant.
- Q-PHOTO-7: At least one missing-step question on the overview node fills in the chloroplast-and-chlorophyll step inside an account of photosynthesis.
- Q-PHOTO-8: At least one Challenge-tier numeric on the overview node uses a UK-context investigation (Lake District oak, Sevenoaks pondweed, Manchester field) and requires a multiplication or rate calculation across multiple beakers or hours.
- Q-PHOTO-9: At least one free-text question on the overview node asks the learner to explain a dark-room mass loss in terms of "photosynthesis off, respiration on".
- Q-PHOTO-10: All chemical formulae in stems, options, scenes, and explanations on the overview node use Unicode subscripts (CO₂, O₂, H₂O), not ASCII (CO2, O2, H2O).

### Tutor probes

- T-PHOTO-1: Given "Plants only photosynthesise, right?", the tutor's first reply is a Socratic prompt about what happens at night, not a direct correction.
- T-PHOTO-2: Given a wrong answer matching the equation-reversed trigger on po-q1 or po-q2, the tutor cites the relevant misconception's `reExplanation` (the photosynthesis-and-respiration are opposites framing) rather than producing a fresh hint.
- T-PHOTO-3: Given "Where does photosynthesis happen?" with the wrong answer "mitochondria", the tutor steers via "What colour are mitochondria? What colour are chloroplasts?", not a definition dump.
- T-PHOTO-4: Given "Is chlorophyll one of the reactants?", the tutor's first reply is a Socratic prompt about what is consumed in the reaction, not a direct correction.
- T-PHOTO-5: Given a request for an inline definition (tap on "chloroplast" or "chlorophyll"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-PHOTO-6: Given "Why does the pondweed bubble more under a torch?", the tutor walks the learner through "more light, more photosynthesis, more oxygen", not a launch into limiting-factors graphs (those belong to the rate node).
- T-PHOTO-7: Given an off-topic input (for example a US AP Biology Calvin-cycle reference), the tutor steers back to UK KS3 word-equation language politely.

### Content probes (rate)

- C-PHOTO-9: Learner believes higher temperature always speeds up photosynthesis (no peak, no decline above ~40 °C).
  - Required handling: misconception entry on the rate node; at least one Core MCQ on why the temperature-rate graph falls above the peak (enzymes denature); at least one Confident-tier spot-misconception that surfaces the warmer-is-always-better slip.
- C-PHOTO-10: Learner reads a plateau on a rate graph as the plant having stopped photosynthesising.
  - Required handling: misconception entry on the rate node; at least one Core MCQ on what a plateau on the rate-vs-light-intensity graph means; at least one Confident-tier MCQ on the same shape for the rate-vs-CO₂ graph.
- C-PHOTO-11: Learner believes light, CO₂, and temperature are all limiting at the same time.
  - Required handling: misconception entry on the rate node; at least one Confident-tier spot-misconception that surfaces the only-one-limiting-factor-at-a-time idea.
- C-PHOTO-12: Learner believes that moving the lamp closer to the pondweed gives less light.
  - Required handling: misconception entry on the rate node; at least one Core MCQ on what should happen to bubble count when the lamp distance is reduced.
- C-PHOTO-13: Learner runs the pondweed experiment changing more than one variable at once.
  - Required handling: misconception entry on the rate node; at least one drag-drop-builder that asks the learner to pick the variables to keep constant in the pondweed experiment.
- C-PHOTO-14: Learner believes there is no ceiling to photosynthesis from light alone (just keep adding light).
  - Required handling: misconception entry on the rate node; at least one Challenge-tier MCQ that surfaces the plateau ceiling and the need to raise CO₂ or temperature too.
- C-PHOTO-15: Learner reads pondweed bubbles as a sign of respiration.
  - Required handling: misconception entry on the rate node; at least one Core MCQ on what each oxygen bubble from the cut stem signals.

### Question shape probes (rate)

- Q-PHOTO-11: At least one Core MCQ on the rate node names a real limiting factor (light intensity / CO₂ / temperature) with non-factors (air pressure, soil age, pot colour) as distractors.
- Q-PHOTO-12: At least one Core numeric on the rate node converts a 30-second or 20-second bubble count into a per-minute rate.
- Q-PHOTO-13: At least one Core numeric on the rate node counts the number of named limiting factors covered (= 3).
- Q-PHOTO-14: At least one Confident-tier data-extraction on the rate node uses a pondweed lamp-distance dataset (Sevenoaks Y7 class) and asks for the distance giving the highest rate.
- Q-PHOTO-15: At least one Confident-tier numeric on the rate node asks the learner to subtract two bubble-count rates from the same dataset.
- Q-PHOTO-16: At least one drag-order on the rate node sequences the pondweed bubble-counting method (set up, place lamp, wait, count, repeat).
- Q-PHOTO-17: At least one drag-drop-builder on the rate node asks for the control variables (water temperature, CO₂ supply, pondweed size, lamp bulb), with lamp distance as the rejected entry.
- Q-PHOTO-18: At least one Challenge-tier missing-step question on the rate node fills in the "enzymes denature above ~40 °C" step inside an account of the temperature-rate graph.
- Q-PHOTO-19: At least one Challenge-tier free-text question on the rate node asks the learner to explain why the rate-vs-light-intensity graph plateaus.
- Q-PHOTO-20: At least one Challenge-tier MCQ on the rate node asks for the FASTEST conditions (bright light + plenty of CO₂ + ~30 °C), with too-cold and too-hot conditions as distractors.
- Q-PHOTO-21: All UK-context experimental setups on the rate node use Cabomba (or Elodea) in a Sevenoaks Y7 class, beaker plus lamp, sodium hydrogen carbonate as the CO₂ supply.
- Q-PHOTO-22: NO numerical rate calculations using inverse-square light-intensity formulas on the rate node. All graph reading stays qualitative.

### Tutor probes (rate)

- T-PHOTO-8: Given "Why isn't 60 °C even better than 40 °C for photosynthesis?", the tutor's first reply is a Socratic prompt about what happens to enzymes at high temperature, not a Q10 / activation-energy dump.
- T-PHOTO-9: Given a wrong answer matching the warmer-faster trigger on pr-q6 or pr-q9, the tutor cites the relevant misconception's `reExplanation` (the rise-peak-fall framing) rather than producing a fresh hint.
- T-PHOTO-10: Given "The line is flat, so the plant has stopped", the tutor steers via "is the rate at zero, or just steady?", not a definition dump.
- T-PHOTO-11: Given a request for an inline definition (tap on "limiting factor", "denature", or "Cabomba"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-PHOTO-12: Given an off-topic input on the rate node (for example a numerical inverse-square-law light intensity question), the tutor flags that numerical rate calculations are GCSE depth and steers back to the qualitative shape of the graph.

## Zone: Elementia > Particle Model

Covers `chemistry-particle-model-states`, `chemistry-particle-model-state-changes`, `chemistry-particle-model-diffusion`.

### Content probes

- C-PM-1: Learner believes that individual particles get bigger when a substance is heated, rather than moving faster with larger gaps between them.
  - Required handling: misconception entry; at least one question whose distractors include the bigger-particles answer; at least one spot-misconception or worked example that contrasts particle size with particle spacing.
- C-PM-2: Learner believes that particles in a solid stop moving completely.
  - Required handling: misconception entry; at least one question that distinguishes "vibrating in place" from "completely still".
- C-PM-3: Learner believes that gas particles fall to the bottom of a container because of gravity, instead of spreading out evenly.
  - Required handling: misconception entry; at least one spot-misconception or MC question whose distractors include the gas-settles-at-the-bottom answer.
- C-PM-4: Learner draws or expects liquid particles in a regular grid pattern, identical to a solid.
  - Required handling: misconception entry; at least one question that pairs the regular-grid answer with the correct disordered-but-touching arrangement as distractors.
- C-PM-5: Learner believes there is air (or some other substance) in the gaps between solid or liquid particles, rather than empty space.
  - Required handling: misconception entry; at least one question whose distractors include the air-between answer, ideally in a "why can a gas be compressed but a liquid cannot" framing.
- C-PM-6: Learner believes mass changes when a substance changes state (gains mass when melted, loses mass when boiled).
  - Required handling: misconception entry; at least one numeric-entry question that requires conservation of mass through melting, freezing or boiling.
- C-PM-7: Learner confuses melting with dissolving, describing sugar as having "melted" in tea.
  - Required handling: misconception entry on a sibling node (state changes or solutions) once that node is authored. Not blocking for `chemistry-particle-model-states`.
- C-PM-8: Learner believes diffusion only happens when a liquid is stirred or a draught moves the air. Without a push the particles stay still.
  - Required handling: misconception entry on `chemistry-particle-model-diffusion`; at least one MCQ or spot-misconception whose distractors include the needs-stirring answer; at least one example of dye spreading in still water or a smell crossing a still room.
- C-PM-9: Learner believes a heavy gas (such as bromine) sinks and never mixes upward into the lighter air above it.
  - Required handling: misconception entry on `chemistry-particle-model-diffusion`; at least one question on the bromine demonstration whose distractors include the gas-stays-down answer.
- C-PM-10: Learner believes the rate of diffusion is independent of temperature, or explains a faster rate at higher temperature by saying particles "get bigger" rather than "move faster".
  - Required handling: misconception entry on `chemistry-particle-model-diffusion`; at least one Challenge tier question whose distractors include the bigger-particles or temperature-no-effect answer.
- C-PM-11: Learner believes diffusion happens at the same rate in solids, liquids and gases.
  - Required handling: misconception entry on `chemistry-particle-model-diffusion`; at least one MCQ that asks the learner to compare diffusion rates across the three states.

### Question shape probes

- Q-PM-1: At least one Core MCQ asks the learner to identify the particle behaviour of a single named state (solid, liquid or gas), with each distractor mapping to one of the other two states or to a known misconception.
- Q-PM-2: At least one numeric-entry question requires applying conservation of mass through a state change (melting, freezing or boiling).
- Q-PM-3: At least one question asks the learner to recognise that a gas fills the whole volume of its container, by stating the gas volume given the container volume.
- Q-PM-4: At least one drag-order question places solid, liquid and gas in order by particle spacing or by particle motion.
- Q-PM-5: At least one labelled-image question asks the learner to drag state labels onto particle pictures, with at least one composition-type distractor (such as "Mixture" or "Element") in the label pool.
- Q-PM-6: At least one Challenge tier word problem in a UK domestic context (kettle, freezer, kitchen, garden) requires the learner to reason about which state change is happening and why.
- Q-PM-7: At least one Challenge tier MCQ approaches early KS4 territory by linking faster particle motion in a sealed container to an increase in gas pressure.
- Q-PM-8: At least one missing-step worked example hides the "particles spread out and fill the available space" or "particles break away from each other" step in a diffusion or boiling explanation.
- Q-PM-9: At least one spot-misconception question presents the bigger-particles or gas-falls-because-of-gravity argument and asks whether the reasoning is sound.
- Q-PM-10: At least one MCQ on `chemistry-particle-model-diffusion` defines diffusion as net random movement from high to low concentration, with a "needs stirring" or "carried by a current" distractor.
- Q-PM-11: At least one drag-order or comparison question on `chemistry-particle-model-diffusion` ranks scenes by rate (cold liquid, room-temperature liquid, warm gas) so the learner has to apply both state and temperature effects.
- Q-PM-12: At least one Challenge tier word problem on `chemistry-particle-model-diffusion` involves a UK domestic or laboratory context (kitchen, fume cupboard, garden centre, school lab) and requires reasoning about why temperature changes the rate.
- Q-PM-13: At least one missing-step question on `chemistry-particle-model-diffusion` hides the "net movement from high to low concentration" or "faster particles collide more often" step in a diffusion explanation.

### Tutor probes

- T-PM-1: Given "I think the water particles got bigger when the kettle boiled, that is why the steam takes up more room", the tutor's first reply is a Socratic prompt about whether the particles or the gaps between them grew, not a direct correction.
- T-PM-2: Given a wrong answer matching the gas-falls-because-of-gravity trigger (for example "the helium particles sit at the bottom of the balloon"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-PM-3: Given "If 30 g of ice melts, how much water do I get?", the tutor scaffolds the learner toward conservation of mass without simply stating "30 g".
- T-PM-4: Given an off-topic input (for example a question about Fahrenheit temperatures or US weather), the tutor steers back to UK KS3 particle model language and Celsius politely.
- T-PM-5: Given a request for an inline definition (tap on "particle" or "state of matter"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-PM-6: Given "the perfume only spreads because there is a draught in the room", the tutor's first reply is a Socratic prompt about whether particles can move on their own, not a flat correction.
- T-PM-7: Given "the dye spreads faster in hot water because the particles get bigger", the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.

## Zone: Elementia > Separating Mixtures

Covers `chemistry-separating-filtration-evaporation`, `chemistry-separating-distillation`, `chemistry-separating-chromatography`.

### Content probes

- C-SM-1: Learner believes filter paper can take a dissolved solid (such as salt or sugar) out of its solution.
  - Required handling: misconception entry on `chemistry-separating-filtration-evaporation`; at least one MCQ or spot-misconception whose distractors include the filter-the-salt answer.
- C-SM-2: Learner believes evaporation is the right method to remove an insoluble lump (such as sand) from water.
  - Required handling: misconception entry on `chemistry-separating-filtration-evaporation`; at least one MCQ pairing the wrong evaporation choice with the correct filtration choice for an insoluble solid.
- C-SM-3: Learner believes mass is lost during filtration or evaporation because part of the substance disappears.
  - Required handling: misconception entry on `chemistry-separating-filtration-evaporation`; at least one numeric-entry question that requires the learner to apply conservation of mass through the process.
- C-SM-4: Learner believes the salt evaporates and the water stays behind in an evaporating basin.
  - Required handling: misconception entry on `chemistry-separating-filtration-evaporation`; at least one Confident question whose distractors include the salt-evaporates answer.
- C-SM-5: Learner believes a clear liquid must be pure water (no dissolved particles in a clear solution).
  - Required handling: misconception entry on `chemistry-separating-filtration-evaporation`; at least one question contrasting clear salt solution with pure water by reference to evaporation results.
- C-SM-6: Learner believes filtration alone can separate two insoluble solids that have been mixed together.
  - Required handling: misconception entry on `chemistry-separating-filtration-evaporation`; at least one Challenge question whose distractors include the one-step-filtration answer for separating two insoluble solids.
- C-SM-7: Learner believes simple distillation works because the salt evaporates with the water and gets caught in the condenser.
  - Required handling: misconception entry on `chemistry-separating-distillation`; at least one MCQ or spot-misconception whose distractors include the salt-evaporates answer.
- C-SM-8: Learner places the thermometer bulb in the boiling liquid rather than at the side-arm where the vapour leaves the flask.
  - Required handling: misconception entry on `chemistry-separating-distillation`; at least one apparatus-positioning question whose distractors include the bulb-in-the-liquid answer.
- C-SM-9: Learner believes simple distillation alone can separate two miscible liquids of different boiling points; the lower boiling point liquid will come over pure.
  - Required handling: misconception entry on `chemistry-separating-distillation`; at least one Confident or Challenge question pairing simple distillation against fractional distillation for an ethanol and water mixture.
- C-SM-10: Learner believes the condenser in a distillation set-up warms the vapour to keep it as a gas, rather than cooling it back into a liquid.
  - Required handling: misconception entry on `chemistry-separating-distillation`; at least one question about the role of cold water flow through the condenser.
- C-SM-11: Learner believes the fractionating column is decorative and the apparatus would work the same without it.
  - Required handling: misconception entry on `chemistry-separating-distillation`; at least one question whose distractors include the column-redundant answer.
- C-SM-12: Learner draws the chromatography baseline in pen rather than pencil, missing that pen ink is a mixture of dyes that would itself dissolve and travel up the paper.
  - Required handling: misconception entry on `chemistry-separating-chromatography`; at least one MCQ or spot-misconception whose distractors include the pen-baseline answer.
- C-SM-13: Learner sets the solvent level in the beaker above the baseline, missing that the dye spots would dissolve straight into the bulk solvent rather than rising up the paper.
  - Required handling: misconception entry on `chemistry-separating-chromatography`; at least one MCQ whose distractors include the above-baseline solvent level.
- C-SM-14: Learner believes a pure single-colour substance should still split into several spots on a chromatogram if the experiment is done correctly, treating a one-spot result as a failed test.
  - Required handling: misconception entry on `chemistry-separating-chromatography`; at least one Confident spot-misconception whose distractors include the "one spot means it failed" reading.
- C-SM-15: Learner believes the height a dye climbs on a chromatogram is decided by the mass of the dye particles (lighter goes higher, heavier stays low).
  - Required handling: misconception entry on `chemistry-separating-chromatography`; at least one Core or Confident MCQ whose options pair "lighter dye climbs higher" against "dye that dissolves better in the solvent climbs higher".
- C-SM-16: Learner believes paper chromatography can separate any mixture, including colourless ones (sugar in water), in a Year 7 lab without any developing technique.
  - Required handling: misconception entry on `chemistry-separating-chromatography` referenced by `misconceptionId` from at least one question whose framing tests when paper chromatography is and is not the right method.
- C-SM-17: Learner believes dye direction on the paper is fixed by which way up the paper is placed, missing that the solvent is what carries the dye in the direction it travels.
  - Required handling: misconception entry on `chemistry-separating-chromatography`; at least one MCQ that explores what direction the dye spots travel.

### Question shape probes

- Q-SM-1: At least one Core MCQ on `chemistry-separating-filtration-evaporation` asks the learner to choose between filtration and evaporation given a named mixture (sand-and-water, salt-and-water, lemonade), with each distractor mapping to a known method confusion.
- Q-SM-2: At least one labelled-image question on `chemistry-separating-filtration-evaporation` requires the learner to identify the apparatus pieces in either the filtration or evaporation set-up (filter funnel, filter paper, conical flask, evaporating basin, gauze, tripod, Bunsen burner).
- Q-SM-3: At least one drag-order question on `chemistry-separating-filtration-evaporation` places the steps of filtration in the correct order from setting up the apparatus to recovering the residue and filtrate.
- Q-SM-4: At least one numeric-entry question on `chemistry-separating-filtration-evaporation` applies conservation of mass through filtration or evaporation, including a multi-step Challenge tier item that combines a percentage of mass.
- Q-SM-5: At least one Challenge tier word problem on `chemistry-separating-filtration-evaporation` uses a UK domestic or laboratory context (school lab, kitchen, garden) and requires the learner to choose a sequence of separating methods.
- Q-SM-6: At least one missing-step question on `chemistry-separating-filtration-evaporation` hides the "particles that have dissolved are too small to be caught by the filter paper" step or the "salt is left behind because only the water turns to vapour" step in a separating-mixtures explanation.
- Q-SM-7: At least one labelled-image question on `chemistry-separating-distillation` requires the learner to identify the apparatus pieces in the simple distillation set-up (round-bottom flask, thermometer, condenser, collecting beaker).
- Q-SM-8: At least one drag-order question on `chemistry-separating-distillation` places the journey of a single water particle through the apparatus in the correct order from dissolved-in-flask to dripping-into-beaker.
- Q-SM-9: At least one data-extraction question on `chemistry-separating-distillation` reads the boiling point of a fraction off a temperature-against-time table during a fractional distillation.
- Q-SM-10: At least one Challenge tier question on `chemistry-separating-distillation` distinguishes simple from fractional distillation by reference to a 50:50 ethanol and water mixture and the role of the column.
- Q-SM-11: At least one numeric-entry question on `chemistry-separating-distillation` applies conservation of mass through a distillation, including a Challenge tier item that combines what is left in the flask with what is collected in the beaker.
- Q-SM-12: At least one Core MCQ on `chemistry-separating-chromatography` asks the learner why the baseline is drawn in pencil and not in pen, with the misconception of "any pen will do" surfaced as a distractor.
- Q-SM-13: At least one labelled-image question on `chemistry-separating-chromatography` requires the learner to identify the parts of the chromatography apparatus (baseline, solvent front, solvent, pencil line / lid).
- Q-SM-14: At least one drag-order question on `chemistry-separating-chromatography` places the steps of running a chromatogram in the correct order from drawing the baseline to lifting the paper out and marking the solvent front.
- Q-SM-15: At least one Confident MCQ on `chemistry-separating-chromatography` links a UK forensics or food-checking context (suspect ink match, red sweet shell, leaf pigment) to a real outcome of the chromatogram.
- Q-SM-16: At least one Challenge MCQ on `chemistry-separating-chromatography` covers the limit of the technique at Year 7 (qualitative outcome, no formula determination, multiple solvents needed for some dyes).
- Q-SM-17: At least one spot-misconception question on `chemistry-separating-chromatography` presents either the pen-baseline plan or the "one spot is a failed run" reading.

### Tutor probes

- T-SM-1: Given "I will use filter paper to take the salt out of saltwater", the tutor's first reply is a Socratic prompt about whether the salt has dissolved or stayed as visible lumps, not a direct correction.
- T-SM-2: Given a wrong answer matching the "the water stays in the basin and the salt evaporates" trigger, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-SM-3: Given "After filtering 100 g of muddy water and getting 80 g of filtrate, where did the missing 20 g go?", the tutor scaffolds the learner toward conservation of mass without simply stating the residue mass.
- T-SM-4: Given an off-topic input (for example a question about US units or a different subject), the tutor steers back to UK KS3 separating-mixtures language and metric units politely.
- T-SM-5: Given "if I distil a 50:50 ethanol and water mixture I will get pure ethanol in the beaker", the tutor's first reply is a Socratic prompt about whether a column is in use, not a flat correction.
- T-SM-6: Given a wrong answer matching the "salt evaporates with the water during distillation" trigger, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-SM-7: Given "the dye that travels highest must be the lightest", the tutor cites the chromatography mass-misconception `reExplanation` rather than a fresh hint and steers the learner to the dissolves-vs-sticks rule.
- T-SM-8: Given "I will mark my baseline in red biro to make it stand out", the tutor's first reply is a Socratic prompt about what pen ink is made of, not a flat correction.

## Zone: Elementia > Atoms, Elements, Compounds

Covers `chemistry-atoms-elements-compounds-basics`, `chemistry-atoms-symbols-formulae`.

### Content probes

- C-AT-1: Learner believes water (or air) is an element because it looks like a single uniform substance with no parts you can see.
  - Required handling: misconception entry on `chemistry-atoms-elements-compounds-basics`; at least one MCQ or spot-misconception whose distractors include the water-as-element answer.
- C-AT-2: Learner believes that any sample with more than one substance is a compound, missing the bonded vs simply mixed distinction.
  - Required handling: misconception entry on `chemistry-atoms-elements-compounds-basics`; at least one MCQ pairing brass, sea water or muddy water against a true compound.
- C-AT-3: Learner believes a pure element can hold more than one kind of atom as long as it shares a single appearance.
  - Required handling: misconception entry on `chemistry-atoms-elements-compounds-basics`; at least one MCQ that asks how many kinds of atom a sample of a named element contains.
- C-AT-4: Learner believes that when a substance dissolves, the solute and solvent bond chemically into a new compound.
  - Required handling: misconception entry on `chemistry-atoms-elements-compounds-basics`; at least one Confident MCQ or spot-misconception covering sugar in tea or salt in water as a mixture.
- C-AT-5: Learner believes two substances that are touching, sticking or otherwise stuck together are bonded into a compound.
  - Required handling: misconception entry on `chemistry-atoms-elements-compounds-basics`; at least one Challenge spot-misconception or MCQ presenting iron filings on a magnet as a compound.
- C-AT-6: Learner believes alloys (brass, steel) are compounds because two metals have been combined.
  - Required handling: misconception entry on `chemistry-atoms-elements-compounds-basics`; at least one Confident MCQ on brass or steel that pairs alloy-as-mixture against alloy-as-compound.
- C-AT-7: Learner believes every chemical symbol is taken from the first one or two letters of the English name (writing Sd for sodium, Po for potassium, Go for gold).
  - Required handling: misconception entry on `chemistry-atoms-symbols-formulae`; at least one MCQ or spot-misconception covering the Latin-derived symbols Na, K, Fe, Cu, Au, Pb.
- C-AT-8: Learner believes subscript numbers in a formula are optional decoration, so CO and CO2 mean the same thing.
  - Required handling: misconception entry on `chemistry-atoms-symbols-formulae`; at least one MCQ contrasting CO with CO2 or HO with H2O.
- C-AT-9: Learner writes subscript numbers in front of a symbol (e.g. 3H rather than H3), mixing the meaning of a multiplier with the meaning of a subscript.
  - Required handling: misconception entry on `chemistry-atoms-symbols-formulae`; at least one MCQ asking the learner to write the formula for ammonia or methane from a description.
- C-AT-10: Learner writes diatomic gas elements as single atoms (O for oxygen gas, H for hydrogen gas), missing that several gases exist as bonded pairs.
  - Required handling: misconception entry on `chemistry-atoms-symbols-formulae`; at least one MCQ on the formula of oxygen gas with O, O2, 2O and OO as distractors.
- C-AT-11: Learner treats the big number in front of a formula and the small subscript number after a symbol as the same thing, so 2H2O is read as 2 hydrogens plus 2 oxygens.
  - Required handling: misconception entry on `chemistry-atoms-symbols-formulae`; at least one Challenge spot-misconception or numeric-entry question that asks the learner to count atoms in a multiplied formula such as 2H2O or 3CO2.
- C-AT-12: Learner treats two capital letters in a row in a chemistry formula as one element, so Co (cobalt) and CO (carbon monoxide) are read as the same thing.
  - Required handling: misconception entry on `chemistry-atoms-symbols-formulae`; at least one Core MCQ contrasting Co with CO.

### Question shape probes

- Q-AT-1: At least one labelled-image question on `chemistry-atoms-elements-compounds-basics` requires the learner to drag the labels Element, Compound and Mixture onto the matching particle picture, with a label pool no larger than twice the hotspot count.
- Q-AT-2: At least one numeric-entry question on `chemistry-atoms-elements-compounds-basics` asks the learner to count the total number of atoms in a small molecule (water, carbon dioxide, methane).
- Q-AT-3: At least one numeric-entry question on `chemistry-atoms-elements-compounds-basics` asks the learner to count the number of different kinds of atom in a particle picture.
- Q-AT-4: At least one drag-order question on `chemistry-atoms-elements-compounds-basics` ranks named substances by how many kinds of atom they hold (element, compound, mixture).
- Q-AT-5: At least one Challenge tier word problem on `chemistry-atoms-elements-compounds-basics` uses a UK domestic or laboratory context (1p coin, brass band trumpet, sea water in the English Channel, a green-crusted church roof) and requires the learner to choose between element, compound and mixture.
- Q-AT-6: At least one missing-step question on `chemistry-atoms-elements-compounds-basics` hides the "the substances are not chemically bonded, only mixed together" step in a mixture-or-compound explanation.
- Q-AT-7: At least one labelled-image question on `chemistry-atoms-symbols-formulae` requires the learner to drag element names (Copper, Gold, Iron, Lead) onto periodic-table tiles showing the Latin-derived symbols (Cu, Au, Fe, Pb), with a label pool no larger than twice the hotspot count.
- Q-AT-8: At least three numeric-entry questions on `chemistry-atoms-symbols-formulae` ask the learner to count atoms in a formula, spread across Core, Confident, and Challenge tiers (water; methane; calcium hydroxide).
- Q-AT-9: At least one drag-order question on `chemistry-atoms-symbols-formulae` ranks named formulae (NaCl, H2O, CH4) by the number of atoms in one particle.
- Q-AT-10: At least one missing-step question on `chemistry-atoms-symbols-formulae` hides the "add the carbon and hydrogen atom counts together" step in a counting-atoms-in-CH4 walk-through.
- Q-AT-11: At least one data-extraction question on `chemistry-atoms-symbols-formulae` requires the learner to read four common compound formulae from a table and pick the one with the most atoms in one particle.
- Q-AT-12: At least one Challenge tier item on `chemistry-atoms-symbols-formulae` involves a multiplied formula (2H2O or 3CO2) and asks the learner to count atoms in total.

### Tutor probes

- T-AT-1: Given "Water has to be an element because it is a single clear liquid", the tutor's first reply is a Socratic prompt about how many kinds of atom are in each water particle, not a flat correction.
- T-AT-2: Given a wrong answer matching the alloy-as-compound trigger (for example "Brass is a compound of copper and zinc"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-AT-3: Given "If sugar dissolves in tea, the sugar bonds with the water and the tea is a compound", the tutor scaffolds the learner toward the test of recovering the sugar by evaporation, without flatly stating the answer.
- T-AT-4: Given an off-topic input (for example a question about US units or a different subject), the tutor steers back to UK KS3 atoms, elements and compounds language and metric units politely.
- T-AT-5: Given a request for an inline definition (tap on "atom", "element", "compound" or "mixture"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-AT-6: Given "The symbol for sodium is Sd because the first two letters of sodium are S and d", the tutor's first reply is a Socratic prompt about which Latin name sodium comes from, not a flat correction.
- T-AT-7: Given a wrong answer matching the subscript-optional trigger (for example "CO and CO2 are the same"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-AT-8: Given "2H2O means 2 hydrogens and 2 oxygens", the tutor scaffolds the learner toward the multiplier rule by walking through one H2O particle first, without simply stating the right atom counts.
- T-AT-9: Given a request for an inline definition (tap on "subscript" or "formula"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Elementia > Periodic Table

Covers `chemistry-periodic-table-layout`, `chemistry-periodic-table-group-1-7`.

### Content probes

- C-PT-1: Learner swaps the words group and period, naming a vertical column as a period and a horizontal row as a group.
  - Required handling: misconception entry on `chemistry-periodic-table-layout`; at least one Core MCQ asking what a vertical column is called and at least one Core MCQ or spot-misconception asking what a horizontal row is called.
- C-PT-2: Learner believes metals sit on the right of the periodic table and non-metals on the left.
  - Required handling: misconception entry on `chemistry-periodic-table-layout`; at least one MCQ asking where the metals sit relative to the staircase line.
- C-PT-3: Learner believes elements in the same period (row) share chemical properties, missing that the row crosses from metals on the left to non-metals on the right.
  - Required handling: misconception entry on `chemistry-periodic-table-layout`; at least one Confident MCQ that gives a list of period-3 elements and asks what they have in common.
- C-PT-4: Learner believes the noble gases (Group 0) are very reactive, like the alkali metals (Group 1).
  - Required handling: misconception entry on `chemistry-periodic-table-layout`; at least one Challenge MCQ that asks the learner to predict the chemistry of a new Group 0 element.
- C-PT-5: Learner believes there are the same number of groups across the table as periods down it.
  - Required handling: misconception entry on `chemistry-periodic-table-layout`; at least one labelled-image or numeric question that requires the learner to identify rows and columns separately.
- C-PT-6: Learner places the noble gases in Group 8 (the eighth column from the left) rather than Group 0.
  - Required handling: misconception entry on `chemistry-periodic-table-layout`; at least one Confident free-text or MCQ asking which group holds the noble gases on the UK GCSE periodic table.

### Question shape probes

- Q-PT-1: At least one labelled-image question on `chemistry-periodic-table-layout` requires the learner to drag the labels Group 1, Group 0, Metals, and Non-metals onto a coloured-region periodic table outline, with a label pool no larger than twice the hotspot count.
- Q-PT-2: At least three Core multiple-choice questions on `chemistry-periodic-table-layout` cover the meaning of a group, the meaning of a period, and the position of metals.
- Q-PT-3: At least one numeric-entry question on `chemistry-periodic-table-layout` asks the learner to read the period or group number for a named element such as carbon or sodium.
- Q-PT-4: At least one drag-order question on `chemistry-periodic-table-layout` orders the noble gases by their position in Group 0 from helium at the top down.
- Q-PT-5: At least one Challenge tier word problem on `chemistry-periodic-table-layout` uses a UK domestic context (double-glazed windows, neon shop signs, party balloons) and requires the learner to choose a noble gas by reasoning about Group 0 properties.
- Q-PT-6: At least one missing-step question on `chemistry-periodic-table-layout` hides the "elements in the same group share similar chemical properties" step in a Group 1 reactivity walk-through.
- Q-PT-7: At least one Challenge tier question on `chemistry-periodic-table-layout` asks the learner to count how many of the first 20 elements fall into a stated category (noble gases, metals).
- C-G17-1: Learner swaps the trends, saying reactivity falls down Group 1 or rises down Group 7. (Covers `chemistry-periodic-table-group-1-7`.)
  - Required handling: misconception entry on `chemistry-periodic-table-group-1-7`; at least one MCQ on the Group 1 trend and at least one MCQ on the Group 7 trend; at least one spot-misconception that names the swap directly.
- C-G17-2: Learner believes the gas given off when an alkali metal reacts with water is oxygen, not hydrogen.
  - Required handling: misconception entry on `chemistry-periodic-table-group-1-7`; at least one Core MCQ asking which gas is given off in the reaction.
- C-G17-3: Learner believes all halogens are gases at room temperature, missing that bromine is a liquid and iodine is a solid.
  - Required handling: misconception entry; at least one Core MCQ asking the state of chlorine, bromine and iodine at room temperature.
- C-G17-4: Learner reverses halogen displacement, saying the less reactive halogen displaces the more reactive one.
  - Required handling: misconception entry; at least one MCQ comparing what happens with chlorine into KBr versus iodine into KCl, plus at least one numeric or free-text question on a displacement word equation.
- C-G17-5: Learner swaps Group 1 and Group 7, naming halogens as Group 1 or alkali metals as Group 7.
  - Required handling: misconception entry; at least one Core MCQ asking which group holds the alkali metals and at least one asking which group holds the halogens.
- C-G17-6: Learner believes Group 1 metals are mild reactive metals like iron or copper at home, missing that they are stored under oil in school labs.
  - Required handling: misconception entry; at least one Challenge MCQ on why sodium is stored under oil.

- Q-G17-1: At least one labelled-image question on `chemistry-periodic-table-group-1-7` requires the learner to drag labels (Group 1 alkali metals, Group 7 halogens, "Reactivity rises down Group 1", "Reactivity falls down Group 7") onto a simplified periodic-table outline, with a label pool no larger than twice the hotspot count.
- Q-G17-2: At least two drag-order questions on `chemistry-periodic-table-group-1-7` rank Group 1 metals (Li, Na, K) by reactivity ascending and Group 7 halogens (Cl, Br, I) by reactivity descending.
- Q-G17-3: At least four numeric-entry questions on `chemistry-periodic-table-group-1-7` ask the learner to read outer-shell electron counts (matching group number) or count which of a small set of metals or test tubes show a stated reaction.
- Q-G17-4: At least one missing-step question on `chemistry-periodic-table-group-1-7` hides the "elements in the same group share similar chemical properties, so [Rb / Cs] is more reactive than [K / Na]" step in a Group 1 prediction.
- Q-G17-5: At least one Challenge tier word problem on `chemistry-periodic-table-group-1-7` uses a UK school context (storage of sodium under oil in Dover; francium in Manchester; chlorine displacement experiments in a Sevenoaks chemistry club) and requires the learner to apply a Group 1 or Group 7 trend.
- Q-G17-6: At least one free-text question on `chemistry-periodic-table-group-1-7` asks the learner to write a halogen-displacement word equation (chlorine + potassium iodide → potassium chloride + iodine).
- Q-G17-7: At least one Challenge tier drag-order extends the displacement trend to a fourth halogen (fluorine above chlorine), requiring the learner to apply the Group 7 trend to an element they have not seen react.

### Tutor probes

- T-PT-1: Given "I think a period is a vertical column on the periodic table", the tutor's first reply is a Socratic prompt about what shape a row makes versus a column, not a flat correction.
- T-PT-2: Given a wrong answer matching the noble-gases-are-reactive trigger (for example "Argon must be very reactive because it is a gas"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-PT-3: Given "Most elements are non-metals because the right side of the periodic table looks bigger", the tutor scaffolds the learner toward counting metal vs non-metal positions, without flatly stating the answer.
- T-PT-4: Given an off-topic input (for example a question about US units or a different subject), the tutor steers back to UK KS3 periodic-table language and metric units politely.
- T-PT-5: Given a request for an inline definition (tap on "group", "period", "noble gas" or "metal"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-G17-1: Given "Group 1 reactivity falls going down", the tutor asks the learner to picture lithium then sodium then potassium reacting with water in turn, building toward the rising trend without flatly stating it.
- T-G17-2: Given "Bromine displaces chlorine from potassium chloride", the tutor cites the displacement-direction misconception's `reExplanation` rather than producing a fresh hint.
- T-G17-3: Given an off-topic input (for example a question about US chemistry brands or another subject), the tutor steers back to UK KS3 Group 1 and Group 7 examples (sodium under oil in a school lab, chlorine in a UK swimming pool, iodine antiseptic in a UK pharmacy).

## Zone: Elementia > Acids and Alkalis

Covers `chemistry-acids-alkalis-common`, `chemistry-acids-alkalis-neutralisation`.

### Content probes

- C-AA-1: Learner reverses the universal indicator colour code, saying acids are blue or purple and alkalis are red. (Covers `chemistry-acids-alkalis-common`.)
  - Required handling: misconception entry on `chemistry-acids-alkalis-common`; at least one Core MCQ on each end of the colour scale, plus a labelled-image question that places the band labels onto the strip.
- C-AA-2: Learner believes pure distilled water is a weak acid. (Covers `chemistry-acids-alkalis-common`.)
  - Required handling: misconception entry; at least one Core MCQ on the indicator colour for pure water.
- C-AA-3: Learner believes acids burn skin but alkalis are safe to touch with bare hands. (Covers `chemistry-acids-alkalis-common`, `chemistry-acids-alkalis-neutralisation`.)
  - Required handling: misconception entry; at least one Confident spot-misconception that names the safety claim, plus at least one Challenge MCQ on a sodium hydroxide household-cleaner safety label.
- C-AA-4: Learner names citric acid (the lemon acid) as the acid in the human stomach, missing that the stomach makes hydrochloric acid. (Covers `chemistry-acids-alkalis-common`.)
  - Required handling: misconception entry; at least one Challenge MCQ asking which acid the human stomach makes.
- C-AA-5: Learner believes every acid is dangerous and would burn skin, missing that food acids in juice and vinegar are weak and safe at the amounts present. (Covers `chemistry-acids-alkalis-common`.)
  - Required handling: misconception entry; at least one Core MCQ on vinegar as a food acid plus at least one Challenge MCQ on weak food acids in juice.
- C-AA-6: Learner thinks sodium chloride (table salt) is an alkali because it contains sodium, swapping it with sodium hydroxide. (Covers `chemistry-acids-alkalis-common`.)
  - Required handling: misconception entry; at least one Challenge free-text or MCQ that contrasts sodium chloride (neutral salt, green) with baking soda or sodium hydroxide (alkali).
- C-AA-7: Learner writes the neutralisation rule as acid + alkali → water + carbon dioxide, missing the salt. (Covers `chemistry-acids-alkalis-neutralisation`.)
  - Required handling: misconception entry on `chemistry-acids-alkalis-neutralisation`; at least one Core MCQ asking the learner to complete the rule.
- C-AA-8: Learner believes the green colour is a final state, so adding more alkali after the green appears keeps the mixture neutral. (Covers `chemistry-acids-alkalis-neutralisation`.)
  - Required handling: misconception entry; at least one spot-misconception that names the "green is final" argument plus at least one Challenge MCQ on the antacid-overdose case.
- C-AA-9: Learner believes pure water can neutralise an acid spill. (Covers `chemistry-acids-alkalis-neutralisation`.)
  - Required handling: misconception entry; at least one Core MCQ on what kind of substance neutralises an acid; at least one Challenge MCQ on a UK lab acid spill.
- C-AA-10: Learner names the salt from acid + alkali after the alkali (HCl + NaOH → sodium hydroxide), missing that the second name comes from the acid. (Covers `chemistry-acids-alkalis-neutralisation`.)
  - Required handling: misconception entry; at least two Confident questions on naming a salt from given acid-alkali pairs (HCl + KOH; H₂SO₄ + KOH; HNO₃ + NaOH).
- C-AA-11: Learner believes only the acid is destroyed in a neutralisation; the alkali survives. (Covers `chemistry-acids-alkalis-neutralisation`.)
  - Required handling: misconception entry; at least one spot-misconception that names the asymmetry claim.
- C-AA-12: Learner believes an antacid tablet turns the stomach into an alkali, missing that the goal is to settle the stomach back near neutral. (Covers `chemistry-acids-alkalis-neutralisation`.)
  - Required handling: misconception entry; at least one Core MCQ on what an antacid does.

### Question shape probes

- Q-AA-1: At least one labelled-image question on `chemistry-acids-alkalis-common` requires the learner to drag the band labels (Strong acid, Weak acid, Neutral, Weak alkali, Strong alkali) onto a universal indicator colour strip, with a label pool no larger than twice the hotspot count.
- Q-AA-2: At least four Core multiple-choice questions on `chemistry-acids-alkalis-common` cover (a) the formula of HCl, (b) the formula of H₂SO₄, (c) one everyday acid, and (d) one everyday alkali.
- Q-AA-3: At least three numeric-entry questions on `chemistry-acids-alkalis-common` ask the learner to count atoms in an acid or alkali formula (H₂SO₄, NH₃) or count solutions of a stated kind from a small set of indicator-colour observations.
- Q-AA-4: At least one drag-order question on `chemistry-acids-alkalis-common` orders three solutions from most acidic at the top to most alkaline at the bottom.
- Q-AA-5: At least one Challenge tier word problem on `chemistry-acids-alkalis-common` uses a UK domestic context (Sevenoaks kitchen baking soda vs table salt; a Tunbridge Wells supplier of unlabelled bottles; a Dover sodium hydroxide cleaner label) and requires the learner to apply the indicator-colour rule.
- Q-AA-6: At least one labelled-image question on `chemistry-acids-alkalis-neutralisation` requires the learner to drag the labels Acid, Alkali, Salt and Water onto a four-box neutralisation equation diagram, with a label pool no larger than twice the hotspot count.
- Q-AA-7: At least one missing-step question on `chemistry-acids-alkalis-neutralisation` hides the "an alkali added to acidic soil neutralises some of the acid and shifts it towards neutral" step in a Manchester gardening walk-through.
- Q-AA-8: At least three numeric-entry questions on `chemistry-acids-alkalis-neutralisation` ask the learner to count products in the rule (acid + alkali → salt + water = 2), to count salts produced from a stated set of pairs, or to count colour-change stages in a titration-style colour drift.
- Q-AA-9: At least one drag-order or free-text question on `chemistry-acids-alkalis-neutralisation` places the four parts of a salt-naming word equation in the right order and surfaces the salt-naming rule (metal from alkali, non-metal from acid).
- Q-AA-10: At least one Challenge tier MCQ on `chemistry-acids-alkalis-neutralisation` uses a UK school-lab acid-spill safety scenario (Dover technician, dilute sulfuric acid bench spill) and asks the learner to choose between bicarbonate of soda (mild alkali) and pure water.

### Tutor probes

- T-AA-1: Given "Acids turn universal indicator dark blue", the tutor asks the learner to recall what colour a lemon turns the indicator (orange or yellow), before naming the rule.
- T-AA-2: Given a wrong answer matching the salt-naming misconception (for example "HCl + NaOH gives sodium hydroxide"), the tutor cites the relevant misconception's `reExplanation` and walks through which half of each name comes from which reactant.
- T-AA-3: Given "Pure water neutralises an acid spill on the bench", the tutor asks the learner what kind of substance can cancel an acid, before naming bicarbonate of soda as the better choice.
- T-AA-4: Given an off-topic input (for example a question about US grades of bleach or a different subject), the tutor steers back to UK KS3 examples (UK kitchen vinegar, UK pharmacy antacid tablet, UK garden lime, UK school lab sodium hydroxide).
- T-AA-5: Given a request for an inline definition (tap on "acid", "alkali", "neutral", "salt", "indicator" or "neutralisation"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Elementia > pH

Covers `chemistry-ph-scale`, `chemistry-ph-strong-weak`.

### Content probes

- C-PH-1: Learner reverses the universal-indicator colour code, marking acid as blue or purple and alkali as red.
  - Required handling: misconception entry on `chemistry-ph-scale`; at least one MCQ or spot-misconception whose distractors include the colour-reversed reading.
- C-PH-2: Learner believes a low pH number means a small amount of acid (so pH 1 holds less acid than pH 4).
  - Required handling: misconception entry on `chemistry-ph-scale`; at least one Confident MCQ that asks the learner to identify a kind of substance from its pH (e.g. pH 11 = weak alkali).
- C-PH-3: Learner reads pH 0 as the empty end of the scale (no acid present at all), rather than the strong-acid end.
  - Required handling: misconception entry on `chemistry-ph-scale`; at least one Confident spot-misconception that pairs the empty-pH reading against the strong-acid reading.
- C-PH-4: Learner extends the everyday pH scale below 0 or above 14 in Year 7 work.
  - Required handling: misconception entry on `chemistry-ph-scale`; at least one Confident MCQ on the bounds of the standard 0 to 14 pH scale.
- C-PH-5: Learner believes that diluting an acid with water makes the acid stronger (lowers the pH further), rather than weaker (raises pH towards 7).
  - Required handling: misconception entry on `chemistry-ph-scale`; at least one question linked to a dilution scenario.
- C-PH-6: Learner believes universal indicator gives an exact pH number rather than a band.
  - Required handling: misconception entry on `chemistry-ph-scale`; at least one Confident or Challenge numeric-entry that points the learner to a band edge rather than a single value.
- C-PH-7: Learner conflates concentration with strength, calling a concentrated weak acid "stronger" than a dilute strong acid.
  - Required handling: misconception entry on `chemistry-ph-strong-weak`; at least one MCQ or spot-misconception that compares dilute strong HCl against concentrated weak vinegar by pH.
- C-PH-8: Learner believes a strong acid is one that always burns skin, rather than one that splits up completely in water.
  - Required handling: misconception entry on `chemistry-ph-strong-weak`; at least one MCQ that pairs the splits-completely definition against the burns-skin definition.
- C-PH-9: Learner believes that all acids in food are weak and all acids in a school lab are strong, so the food vs lab line decides strong vs weak (the boundary is whether the acid splits up completely, not where it is found).
  - Required handling: misconception entry on `chemistry-ph-strong-weak`; at least one MCQ pairing concentrated lab citric acid (still weak) against dilute lab HCl (still strong).
- C-PH-10: Learner believes pH alone tells you whether an acid is strong or weak, missing that a concentrated weak acid can have a lower pH than a dilute strong acid.
  - Required handling: misconception entry on `chemistry-ph-strong-weak`; at least one Challenge spot-misconception or MCQ that surfaces a concentrated weak acid with a similar pH to a dilute strong acid.

### Question shape probes

- Q-PH-1: At least one Core MCQ on `chemistry-ph-scale` asks the learner what pH means neutral and pairs colour-reading distractors against the right answer.
- Q-PH-2: At least one labelled-image question on `chemistry-ph-scale` requires the learner to place "Acidic", "Neutral" and "Alkaline" labels onto the standard 0 to 14 universal-indicator strip.
- Q-PH-3: At least one numeric-entry question on `chemistry-ph-scale` reads a pH number directly off a stated indicator colour or a UK substance.
- Q-PH-4: At least one slider-explore question on `chemistry-ph-scale` asks the learner to slide to a real UK substance pH (vinegar, milk, soap) on the 0 to 14 scale, since pH is a continuous variable.
- Q-PH-5: At least one drag-order question on `chemistry-ph-scale` places UK substances in pH order from most acidic to most alkaline.
- Q-PH-6: At least one Challenge question on `chemistry-ph-scale` mixes a strong acid and a strong alkali at equal volumes and asks the learner to predict an approximately neutral pH (foreshadowing neutralisation).
- Q-PH-7: At least one Core MCQ on `chemistry-ph-strong-weak` asks the learner to define "strong acid" using the splits-up-completely-in-water definition.
- Q-PH-8: At least one Confident MCQ on `chemistry-ph-strong-weak` pins HCl, citric acid, NaOH and ammonia to their strong / weak labels and approximate pH bands.
- Q-PH-9: At least one Confident or Challenge spot-misconception on `chemistry-ph-strong-weak` presents a "concentrated weak acid is stronger than a dilute strong acid because it has a lower pH" claim and asks the learner to spot the trap.
- Q-PH-10: At least one numeric-entry question on `chemistry-ph-strong-weak` asks the learner to read approximate pH values for HCl, vinegar, NaOH and ammonia from a labelled chart.
- Q-PH-11: At least one Challenge MCQ on `chemistry-ph-strong-weak` uses a UK lab context (school technician, A-level open lab) and asks the learner to distinguish strong vs weak from a stem describing the splitting behaviour, not the pH alone.

### Tutor probes

- T-PH-1: Given "I think the most alkaline thing is at the bottom of the scale near pH 0", the tutor asks the learner where vinegar sits on the scale, before stating the rule.
- T-PH-2: Given a wrong answer matching the "low pH means low amount" trigger, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-PH-3: Given "If I add water to vinegar, the vinegar gets more acidic because there is more vinegar", the tutor scaffolds the learner toward "diluting an acid raises the pH" without flat correction first.
- T-PH-4: Given "The pH alone tells you whether an acid is strong or weak", the tutor cites the strong-vs-weak vs concentration-vs-strength `reExplanation` rather than producing a fresh hint.
- T-PH-5: Given an off-topic input (US grades of bleach, a different subject), the tutor steers back to UK KS3 substances (UK vinegar, UK soap, UK oven cleaner) politely.
- T-PH-6: Given a request for an inline definition (tap on "pH", "strong acid", "weak acid", "neutral", "alkaline"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Elementia > Simple Reactions

Covers `chemistry-simple-reactions-combustion`, `chemistry-simple-reactions-acid-metal`, `chemistry-simple-reactions-rusting`.

### Content probes

- C-SR-1: Learner believes that when a candle or fuel burns, the missing mass has been destroyed. (Covers `chemistry-simple-reactions-combustion`.)
  - Required handling: misconception entry; at least one spot-misconception or MCQ that contrasts an open candle (mass drops) with a sealed jar (mass stays the same).
- C-SR-2: Learner ignores oxygen as a reactant when working out combustion product masses, so they predict the mass of products equals the mass of fuel alone. (Covers `chemistry-simple-reactions-combustion`.)
  - Required handling: misconception entry; at least one Challenge MCQ or numeric-entry where the learner must add the mass of oxygen used to the mass of fuel.
- C-SR-3: Learner conflates burning with evaporation, so they say "no new substance is made when something burns". (Covers `chemistry-simple-reactions-combustion`.)
  - Required handling: misconception entry; at least one Challenge MCQ or spot-misconception that contrasts evaporation (water → water vapour) with combustion (methane → CO₂ and water).
- C-SR-4: Learner names the product of burning magnesium ribbon as magnesium hydroxide or magnesium chloride, missing that combustion in air gives the oxide. (Covers `chemistry-simple-reactions-combustion`.)
  - Required handling: misconception entry; at least one MCQ that asks the learner to choose magnesium oxide from a list including hydroxide, chloride and sulfate.
- C-SR-5: Learner thinks a fire only needs two sides (fuel and oxygen) and will keep going forever once lit. (Covers `chemistry-simple-reactions-combustion`.)
  - Required handling: misconception entry; at least one Confident or Challenge spot-misconception or MCQ that requires all three sides of the fire triangle.
- C-SR-6: Learner says a fire blanket smothers a fire by removing the fuel, missing that the blanket cuts off oxygen. (Covers `chemistry-simple-reactions-combustion`.)
  - Required handling: misconception entry; at least one Confident MCQ that maps a real UK fire-extinguishing action (fire blanket, glass cup over a tea-light) to the side of the triangle it removes.
- C-SR-7: Learner names the gas in a metal-and-acid reaction as oxygen, because the bubbles come from a watery liquid. (Covers `chemistry-simple-reactions-acid-metal`.)
  - Required handling: misconception entry; at least one Challenge MCQ that contrasts the squeaky-pop test (hydrogen) with what oxygen would do (relight a glowing splint).
- C-SR-8: Learner mismatches the salt name to the acid (e.g. "iron + sulfuric acid → iron chloride"). (Covers `chemistry-simple-reactions-acid-metal`.)
  - Required handling: misconception entry; at least one MCQ that maps each acid to its salt ending (HCl → chloride, sulfuric → sulfate, nitric → nitrate).
- C-SR-9: Learner thinks more concentrated acid changes the products of metal + acid, not just the speed. (Covers `chemistry-simple-reactions-acid-metal`.)
  - Required handling: misconception entry; at least one Confident or Challenge spot-misconception or MCQ that holds the products fixed while concentration varies.
- C-SR-10: Learner thinks the squeaky-pop test responds to any gas, not specifically hydrogen. (Covers `chemistry-simple-reactions-acid-metal`.)
  - Required handling: misconception entry; at least one Core spot-misconception or MCQ that contrasts pop (hydrogen), relighting a glowing splint (oxygen), and turning limewater milky (CO₂).
- C-SR-11: Learner predicts every metal fizzes at the same rate in the same dilute acid, missing the Mg > Zn > Fe ordering at Y7. (Covers `chemistry-simple-reactions-acid-metal`.)
  - Required handling: misconception entry; at least one Confident or Core MCQ that asks which of Mg, Zn, Fe fizzes fastest in the same dilute HCl.
- C-SR-12: Learner thinks water is a product of metal + acid, confusing it with metal-oxide + acid neutralisation. (Covers `chemistry-simple-reactions-acid-metal`.)
  - Required handling: misconception entry; at least one MCQ that holds the general equation `metal + acid → salt + hydrogen` against decoys with `+ water`.
- C-SR-13: Learner thinks rusting only needs iron and oxygen, missing the role of water. (Covers `chemistry-simple-reactions-rusting`.)
  - Required handling: misconception entry; at least one Core spot-misconception or MCQ that contrasts dry-air iron (no rust) with damp iron (rusts).
- C-SR-14: Learner thinks rusting only needs iron and water, missing the role of oxygen. (Covers `chemistry-simple-reactions-rusting`.)
  - Required handling: misconception entry; at least one Confident MCQ that explains why the boiled-water-with-oil tube does not rust.
- C-SR-15: Learner thinks paint only hides rust visually, missing that paint blocks water and oxygen from reaching the metal. (Covers `chemistry-simple-reactions-rusting`.)
  - Required handling: misconception entry; at least one Confident or Challenge spot-misconception or MCQ on UK paint contexts (Forth Bridge, garden gates).
- C-SR-16: Learner thinks rust forms a protective layer like aluminium oxide, missing that rust is flaky and exposes fresh iron. (Covers `chemistry-simple-reactions-rusting`.)
  - Required handling: misconception entry; at least one Challenge MCQ that asks the learner to choose paint or galvanising over leaving the metal bare.
- C-SR-17: Learner thinks salt is the rusting agent rather than oxygen and water, missing that salt only speeds up rusting. (Covers `chemistry-simple-reactions-rusting`.)
  - Required handling: misconception entry; at least one Challenge MCQ that compares rusting in tap water vs salty water and isolates the role of salt as a speed-up.
- C-SR-18: Learner thinks rust is dust or dirt that lands on iron from the air, missing that rust IS the iron itself, chemically transformed. (Covers `chemistry-simple-reactions-rusting`.)
  - Required handling: misconception entry; at least one numeric-entry that asks for the increase in mass when iron rusts (proving extra mass came from oxygen and water).

### Question shape probes

- Q-SR-1: At least one Core MCQ on `chemistry-simple-reactions-combustion` asks the learner to name the three things on the fire triangle (fuel, oxygen, heat).
- Q-SR-2: At least one Core MCQ on `chemistry-simple-reactions-combustion` asks the learner to write the word equation for methane burning on a UK gas hob: methane + oxygen → carbon dioxide + water.
- Q-SR-3: At least one Confident MCQ on `chemistry-simple-reactions-combustion` names magnesium oxide as the product of burning magnesium ribbon (UK Bonfire Night sparkler context).
- Q-SR-4: At least one numeric-entry question on `chemistry-simple-reactions-combustion` asks the learner to add the mass of fuel and the mass of oxygen to get the mass of products.
- Q-SR-5: At least one drag-order question on `chemistry-simple-reactions-combustion` asks the learner to assemble the word equation `methane + oxygen → carbon dioxide + water` from shuffled phrases.
- Q-SR-6: At least one labelled-image question on `chemistry-simple-reactions-combustion` places "Fuel", "Oxygen" and "Heat" labels on the three corners of the fire triangle.
- Q-SR-7: At least one Challenge MCQ on `chemistry-simple-reactions-combustion` describes a sealed-jar combustion scenario and tests conservation of mass when gas products are trapped.
- Q-SR-8: All combustion questions stay at word-equation depth: no balanced symbol equations, no enthalpy values, no percentage yield.
- Q-SR-9: At least one Core MCQ on `chemistry-simple-reactions-acid-metal` states the general rule `metal + acid → salt + hydrogen`, with `+ water` and `+ oxygen` as named distractors.
- Q-SR-10: At least one Core MCQ on `chemistry-simple-reactions-acid-metal` names the salt for zinc + HCl (zinc chloride) and another names the salt for magnesium + sulfuric acid (magnesium sulfate).
- Q-SR-11: At least one Confident MCQ or numeric-entry on `chemistry-simple-reactions-acid-metal` orders Mg, Zn, Fe by speed of fizz in the same dilute acid (Mg fastest, Fe slowest).
- Q-SR-12: At least one Core MCQ on `chemistry-simple-reactions-acid-metal` asks the learner to interpret a "pop" sound as confirmation of hydrogen.
- Q-SR-13: At least one Confident or Challenge spot-misconception on `chemistry-simple-reactions-acid-metal` pairs concentration with speed and holds products fixed.
- Q-SR-14: At least one drag-order question on `chemistry-simple-reactions-acid-metal` assembles `zinc + hydrochloric acid → zinc chloride + hydrogen` from shuffled phrases.
- Q-SR-15: All acid-metal questions stay at word-equation depth: no ionic equations, no half-equations, reactivity-series ranking limited to Mg, Zn, Fe.
- Q-SR-16: At least one Core MCQ on `chemistry-simple-reactions-rusting` states the word equation `iron + oxygen + water → iron oxide`, with `iron + oxygen → iron oxide` as a named distractor.
- Q-SR-17: At least one Core MCQ on `chemistry-simple-reactions-rusting` asks the learner to identify which test tube in the three-tube experiment rusts (the one with both water and oxygen).
- Q-SR-18: At least one Confident MCQ on `chemistry-simple-reactions-rusting` explains why the boiled-water-with-oil tube does not rust (no oxygen).
- Q-SR-19: At least one Core MCQ on `chemistry-simple-reactions-rusting` lists three UK rust-prevention methods (paint, oil, galvanising).
- Q-SR-20: At least one MCQ on `chemistry-simple-reactions-rusting` uses the Forth Bridge in Scotland or another famous UK iron context.
- Q-SR-21: At least one numeric-entry on `chemistry-simple-reactions-rusting` asks for the increase in mass when iron rusts (extra mass from oxygen + water atoms).
- Q-SR-22: At least one drag-order question on `chemistry-simple-reactions-rusting` assembles `iron + oxygen + water → iron oxide` from shuffled phrases.
- Q-SR-23: At least one Challenge MCQ on `chemistry-simple-reactions-rusting` compares rusting in tap water vs salty seawater and isolates salt as a speed-up.
- Q-SR-24: All rusting questions stay at word-equation depth: no sacrificial-anode mechanism depth, no redox half-equations.

### Tutor probes

- T-SR-1: Given "the wax has been destroyed when a candle burns", the tutor scaffolds toward the sealed-jar mental picture before stating the rule (mass conserved when gas products are counted).
- T-SR-2: Given a wrong answer matching the "magnesium chloride / hydroxide" trigger, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-SR-3: Given "fuel and oxygen alone are enough to keep a fire going", the tutor reminds the learner of the heat side of the triangle, ideally by reference to a blown-out candle.
- T-SR-4: Given a request for an inline definition (tap on "combustion", "fire triangle", "fuel", "oxygen", "magnesium oxide"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-SR-5: Given "the fire blanket put out the chip-pan fire by removing the fuel", the tutor scaffolds the learner toward "the blanket removed oxygen" without flat correction first.
- T-SR-6: Given "the bubbles from zinc and acid are oxygen", the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint, and references the squeaky-pop test.
- T-SR-7: Given "iron + sulfuric acid gives iron chloride and hydrogen", the tutor scaffolds toward the salt-naming rule (sulfuric → sulfate, hydrochloric → chloride) without flat correction first.
- T-SR-8: Given a request for an inline definition (tap on "salt", "hydrogen", "squeaky-pop test", "reactivity"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-SR-9: Given "rusting only needs iron and oxygen", the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint, and references the dry-air tube of the three-test-tube experiment.
- T-SR-10: Given "paint just hides rust", the tutor scaffolds the learner toward "paint is a barrier against water and oxygen" without flat correction first.
- T-SR-11: Given "the salt in seawater is what causes rust", the tutor scaffolds the learner toward "salt speeds up rusting; iron, oxygen and water still do the reaction" without flat correction first.
- T-SR-12: Given "rust is just dust on the iron, the iron itself has not changed", the tutor scaffolds toward "weigh a rusty bolt to see it is heavier than when shiny" without flat correction first.
- T-SR-13: Given a request for an inline definition (tap on "rust", "iron oxide", "galvanising", "Forth Bridge"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Mechanica > Forces

Covers `physics-forces-types`, `physics-forces-balanced`, `physics-forces-friction`.

### Content probes

- C-FO-1: Learner labels gravity as a contact force in a sort-into-two-families task, on the grounds that you are stood on the ground when it acts. (Covers `physics-forces-types`.)
  - Required handling: misconception entry; at least one Confident multiple-choice question that asks the learner to pick a list containing only contact (or only non-contact) forces.
- C-FO-2: Learner names the upward push of a surface vaguely as "force of the table" or "support force" rather than "normal contact" (also called reaction). (Covers `physics-forces-types`.)
  - Required handling: misconception entry; at least one multiple-choice question whose distractors include vague names against the standard name "normal contact".
- C-FO-3: Learner uses informal names for air resistance ("wind", "force of the air") rather than the standard "air resistance" or "drag". (Covers `physics-forces-types`.)
  - Required handling: misconception entry; at least one multiple-choice question that pairs "air resistance" against "wind" or "force of the air" as distractors.
- C-FO-4: Learner believes air resistance only acts on falling objects, so a car or runner on a flat road has no air resistance. (Covers `physics-forces-types`.)
  - Required handling: misconception entry; at least one spot-misconception question presenting the "air resistance is for falls only" argument.
- C-FO-5: Learner forgets to count tension in a rope or string holding a hanging object, listing only the weight on a free-body diagram. (Covers `physics-forces-types`.)
  - Required handling: misconception entry; at least one numeric-entry or free-text question about a hanging object that requires both forces to be named.
- C-FO-6: Learner believes an applied push or pull keeps acting on an object after the hand or boot has let go, e.g. saying a thrown ball still has a forwards force. (Covers `physics-forces-types`, `physics-forces-balanced`.)
  - Required handling: misconception entry; at least one Challenge tier question about a kicked ball or a let-go boat that requires the learner to drop the applied force from the list.
- C-FO-7: Learner draws or names forces on the wrong object in a free-body diagram, e.g. saying tension acts on the rope rather than on the sledge the rope pulls. (Covers `physics-forces-types`, `physics-forces-balanced`.)
  - Required handling: misconception entry; at least one Challenge tier multiple-choice question that pairs the named force to the object it acts on.
- C-FO-8: Learner calls the force between a charged balloon and a wall "magnetic" because both kinds of force act at a distance. (Covers `physics-forces-types`.)
  - Required handling: misconception entry; at least one multiple-choice question that contrasts magnetic and electrostatic forces in the same stem.
- C-FO-9: Learner believes a non-zero net force is needed to keep an object moving at a constant speed, so a coasting cyclist or sliding puck must have an applied force still acting on it. (Covers `physics-forces-balanced`.)
  - Required handling: misconception entry; at least one Confident or Challenge multiple-choice question that asks what the net force is on an object moving at constant velocity.
- C-FO-10: Learner predicts that two equal and opposite force arrows always make the object stop, rather than continue at constant velocity if it was already moving. (Covers `physics-forces-balanced`.)
  - Required handling: misconception entry; at least one spot-misconception question presenting the "balanced means stopped" argument.
- C-FO-11: Learner believes friction only acts on a moving object, so a still box being pushed gently has no friction acting on it. (Covers `physics-forces-friction`.)
  - Required handling: misconception entry; at least one spot-misconception or MCQ that contrasts a still pulled box (static friction matches the pull) with the no-friction claim.
- C-FO-12: Learner believes static friction equals sliding friction, so once an object starts sliding it needs the same force to keep going as it did to start it. (Covers `physics-forces-friction`.)
  - Required handling: misconception entry; at least one MCQ asking how the largest static friction compares with sliding friction on the same pair of surfaces.
- C-FO-13: Learner believes drag only happens in air, so a swimmer or rowing boat moving through water has no resistive force. (Covers `physics-forces-friction`.)
  - Required handling: misconception entry; at least one MCQ that pairs water resistance (drag in a fluid) against an "air only" or "upthrust" distractor in a UK pool or rowing context.
- C-FO-14: Learner believes air resistance is a fixed size that does not depend on speed, so a falling object never reaches a steady terminal speed. (Covers `physics-forces-friction`.)
  - Required handling: misconception entry; at least one MCQ on a falling skydiver where drag grows with speed until it balances the weight; at least one data-extraction question reading terminal speed off a v-t graph.
- C-FO-15: Learner believes that when forces balance on a falling skydiver the skydiver stops in mid-air, rather than continuing to fall at a steady terminal speed. (Covers `physics-forces-friction`, `physics-forces-balanced`.)
  - Required handling: misconception entry on the friction node; at least one MCQ that asks what happens once drag equals weight.
- C-FO-16: Learner adds (rather than subtracts) the friction force when finding the net horizontal force on an object pulled along a flat surface. (Covers `physics-forces-friction`.)
  - Required handling: misconception entry; at least one numeric-entry question requiring the learner to subtract a backwards friction from a forwards pull, with the friction-added distractor visible in MCQ form.
- C-FO-17: Learner believes friction is always a bad thing to remove, missing that brakes, walking, gripping a pencil, and tyres on a road all rely on friction. (Covers `physics-forces-friction`.)
  - Required handling: misconception entry; at least one Challenge tier MCQ or free-text question that asks the learner to sort everyday steps into "lowers unwanted friction" and "raises useful friction".

### Question shape probes

- Q-FO-1: At least one labelled-image question on the forces-types node has the learner place names ("Weight", "Normal contact", "Friction", "Air resistance", "Upthrust", "Tension", "Magnetic", "Electrostatic") onto a gallery diagram, with a label pool no larger than twice the hotspot count. (Covers `physics-forces-types`.)
- Q-FO-2: At least three core multiple-choice questions on the forces-types node each show one everyday UK situation and ask the learner to pick the named force, with distractors drawn from neighbouring forces (tension vs upthrust, friction vs air resistance). (Covers `physics-forces-types`.)
- Q-FO-3: At least one Confident drag-order or missing-step question walks the learner through naming all the forces on a moving object (cyclist, swimmer, or sledge). (Covers `physics-forces-types`.)
- Q-FO-4: At least one Challenge tier multi-step word problem on the forces-types node maps a UK context (Tube carriage, school field, garden swing, kitchen ceiling hook) onto a free-body force list including a non-contact force and at least two contact forces. (Covers `physics-forces-types`.)
- Q-FO-5: At least one labelled-image question on the forces-balanced node has the learner place named forces (with their direction) on a free-body diagram of a stationary or constant-velocity object. (Covers `physics-forces-balanced`.)
- Q-FO-6: At least one Confident or Challenge multiple-choice question on the forces-balanced node uses a pair of arrow lengths (e.g. 30 N right, 20 N left) and asks for the net force value and direction. (Covers `physics-forces-balanced`.)
- Q-FO-7: At least one spot-misconception question on the forces-balanced node presents the "balanced means stopped" or "needs a force to keep moving" argument and asks if the method is sound. (Covers `physics-forces-balanced`.)
- Q-FO-8: At least one Confident MCQ on the friction node compares the largest static friction with sliding friction for the same pair of surfaces. (Covers `physics-forces-friction`.)
- Q-FO-9: At least one labelled-image question on the friction node has the learner place "Pull", "Static friction", and "Sliding friction" labels onto a paired free-body diagram (still box vs same box sliding), with a label pool no larger than twice the hotspot count. (Covers `physics-forces-friction`.)
- Q-FO-10: At least two numeric-entry questions on the friction node require subtracting backwards friction from a forwards pull on a UK domestic context (kitchen, sledge, school library, cyclist), at least one with the result equal to zero (constant velocity). (Covers `physics-forces-friction`.)
- Q-FO-11: At least one drag-order or missing-step question on the friction node walks the learner through the static-then-sliding sequence (small pull, growing static friction, breakaway, sliding friction, constant-speed slide). (Covers `physics-forces-friction`.)
- Q-FO-12: At least one data-extraction question on the friction node reads the terminal speed of a falling object off a labelled v-t graph description before the parachute opens. (Covers `physics-forces-friction`.)
- Q-FO-13: At least one Challenge tier item on the friction node maps a UK context (Sheffield bike workshop, South Downs descent, school library) onto either a free-body force list with three or more arrows or a useful-vs-unwanted friction sort. (Covers `physics-forces-friction`.)

### Tutor probes

- T-FO-1: Given "I think gravity is a contact force because I am stood on the ground", the tutor asks the learner whether the Earth still pulls a diver in mid-air, before stating the rule.
- T-FO-2: Given a wrong answer matching the air-resistance-only-falls trigger (for example "A car on a flat road has no air resistance"), the tutor cites the relevant misconception's `reExplanation` and offers a Tube carriage or cycling example.
- T-FO-3: Given "If two forces are balanced, does the object stop?", the tutor walks the learner through the difference between zero net force on a stationary object and zero net force on a moving object, using a coasting puck as a concrete example.
- T-FO-4: Given an off-topic input (for example a question about US football tackling forces), the tutor steers back to KS3 UK Physics examples (Tube, cycling, garden, swimming pool).
- T-FO-5: Given a request for an inline definition (tap on "tension" or "upthrust"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-FO-6: Given "I think a still box being pushed gently has no friction on it", the tutor's first reply is a Socratic prompt about why the box does not move under the push, before stating the static-friction rule.
- T-FO-7: Given a wrong answer matching the drag-fixed-size trigger (for example "the skydiver speeds up forever after the chute opens"), the tutor cites the relevant misconception's `reExplanation` and walks through the speed-grows-drag-grows chain.
- T-FO-8: Given a request for an inline definition (tap on "drag", "static friction", or "terminal speed"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Mechanica > Gravity, Weight, Mass

Zone id: `physics-gravity`. Covers `physics-gravity-mass-vs-weight`, `physics-gravity-weight-calculation`.

### Content probes

- C-GR-1: Learner uses the units the wrong way round, writing mass in newtons (N) and weight in kilograms (kg). (Covers `physics-gravity-mass-vs-weight`.)
  - Required handling: misconception entry; at least one Core MCQ that pairs the correct kg / N pairing against a swapped-units distractor; at least one numeric-entry that asks for weight with the unit N stated.
- C-GR-2: Learner believes mass and weight are the same idea, just different ways of writing it down. (Covers `physics-gravity-mass-vs-weight`, `physics-gravity-weight-calculation`.)
  - Required handling: misconception entry; at least one spot-misconception question presenting the "weight equals mass" claim.
- C-GR-3: Learner believes the mass of an object changes when the gravity changes, e.g. saying a 1 kg bag of sugar has less mass on the Moon. (Covers `physics-gravity-mass-vs-weight`, `physics-gravity-weight-calculation`.)
  - Required handling: misconception entry; at least one MCQ on a UK domestic object (sugar bag, bathroom scales, suitcase) taken to the Moon or Mars where the mass distractor is "less" or "zero".
- C-GR-4: Learner believes astronauts on the ISS or in deep space have no mass because they appear to float, treating "weightless" as "massless". (Covers `physics-gravity-mass-vs-weight`.)
  - Required handling: misconception entry; at least one MCQ that distinguishes free fall (apparent weightlessness) from massless.
- C-GR-5: Learner believes electronic bathroom scales directly measure mass in kilograms, missing that they sense weight in newtons and divide by g. (Covers `physics-gravity-mass-vs-weight`.)
  - Required handling: misconception entry; at least one MCQ that contrasts a newton meter, a balance, and bathroom scales as instruments.
- C-GR-6: Learner believes a balance set of scales (two pans) reads weight in newtons, missing that it compares two masses under the same gravity. (Covers `physics-gravity-mass-vs-weight`.)
  - Required handling: misconception entry; at least one Confident MCQ asking what a balance reads on the Moon for a 1 kg object; at least one spot-misconception that flags the same idea.
- C-GR-7: Learner confuses g (gravitational field strength, N/kg) with g (grams), so misuses W = m x g. (Covers `physics-gravity-mass-vs-weight`, `physics-gravity-weight-calculation`.)
  - Required handling: misconception entry; at least one numeric-entry whose hint distinguishes g for grams from g for field strength; carries forward into the calculation node.
- C-GR-8: Learner believes gravity is the same strength on every planet and moon, so weight does not change between Earth, the Moon and Mars. (Covers `physics-gravity-mass-vs-weight`, `physics-gravity-weight-calculation`.)
  - Required handling: misconception entry; at least one Challenge tier MCQ that requires recomputing weight on a non-Earth planet.
- C-GR-9: Learner uses W = m x g but forgets to convert the mass into kilograms first when the stem gives the mass in grams. (Covers `physics-gravity-weight-calculation`.)
  - Required handling: misconception entry on the calculation node; at least one numeric-entry question that gives mass in grams to force a conversion step.
- C-GR-10: Learner divides instead of multiplies (or multiplies instead of divides) when rearranging W = m x g to find a missing mass or a missing g. (Covers `physics-gravity-weight-calculation`.)
  - Required handling: misconception entry on the calculation node; at least one Challenge tier item that requires rearranging the formula to find m given W and g.

### Question shape probes

- Q-GR-1: At least three Core MCQs on the mass-vs-weight node each ask the learner to pick the correct unit, definition, or fixed-vs-changing nature of mass or weight, with one distractor mapping to the units-swapped or mass-changes-with-gravity misconception. (Covers `physics-gravity-mass-vs-weight`.)
- Q-GR-2: At least one labelled-image question on the mass-vs-weight node has the learner place "Mass on Earth", "Weight on Earth", "Mass on Moon", and "Weight on Moon" labels onto a paired sugar-bag diagram, with a label pool no larger than twice the hotspot count. (Covers `physics-gravity-mass-vs-weight`.)
- Q-GR-3: At least two numeric-entry questions on the mass-vs-weight node require either a unit conversion (g to kg or kg to g) or a weight calculation using g = 10 N/kg in a UK domestic context. (Covers `physics-gravity-mass-vs-weight`.)
- Q-GR-4: At least one Confident drag-order or missing-step question walks the learner through the four-step process of getting weight from a mass reading on kitchen scales (read mass, convert units, multiply by g, write the unit). (Covers `physics-gravity-mass-vs-weight`.)
- Q-GR-5: At least one Challenge tier item compares the same object on Earth and on a different body (Moon or Mars), explicitly stating which property changes and which does not. (Covers `physics-gravity-mass-vs-weight`, `physics-gravity-weight-calculation`.)
- Q-GR-6: At least three numeric-entry questions on the calculation node use W = m x g with g = 10 N/kg in a UK context (Lake District workshop, supermarket, kitchen, school lab); at least one item also uses a non-Earth value of g (Moon 1.6 N/kg, Mars 3.7 N/kg). (Covers `physics-gravity-weight-calculation`.)
- Q-GR-7: At least one Challenge tier numeric-entry on the calculation node requires rearranging W = m x g to find a missing mass given the weight and g. (Covers `physics-gravity-weight-calculation`.)
- Q-GR-8: At least one slider-explore question on the calculation node varies g (or mass) and asks the learner to read off the weight at a target value. (Covers `physics-gravity-weight-calculation`.)

### Tutor probes

- T-GR-1: Given "On the Moon I would have less mass", the tutor asks the learner first whether the matter in their body has changed, before stating the rule that mass does not depend on gravity.
- T-GR-2: Given a wrong answer matching the units-swapped trigger ("The bag weighs 5 kg"), the tutor cites the relevant misconception's `reExplanation` and offers the kitchen-scales / newton-meter contrast.
- T-GR-3: Given "If I drop the gravity to zero, what happens to my weight and my mass?", the tutor walks through W = m x g qualitatively, showing that weight goes to zero while mass stays unchanged.
- T-GR-4: Given an off-topic input (for example a question about US pound or ounce units), the tutor politely steers back to UK metric (kg, N) and the KS3 W = m x g framing.
- T-GR-5: Given a request for an inline definition (tap on "mass", "weight", "newton meter", or "gravitational field strength"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Mechanica > Energy Stores and Transfers

Zone id: `physics-energy-stores-transfers`. Covers `physics-energy-stores`, `physics-energy-transfers`, `physics-energy-efficiency`.

The IOPSpark "stores not types" framing is the modern KS3 standard, adopted by AQA, Edexcel, and OCR. Pupils carry forward primary-school "kinds of energy" labels (heat energy, light energy, sound energy, electrical energy, motion energy) and treat them as stores; reviewers must check that the language across all three nodes consistently uses the eight stores plus four transfer pathways.

### Content probes

- C-EN-1: Learner treats "heat energy", "light energy", "sound energy", or "electrical energy" as a store, listing them alongside the eight true stores. (Covers `physics-energy-stores`, `physics-energy-transfers`.)
  - Required handling: misconception entry; at least one spot-misconception question that presents the "kinds of energy" claim and asks whether the framing is sound; at least one labelled-image question whose label pool includes both the eight true stores and the legacy "light energy", "sound energy", "heat energy" distractors.
- C-EN-2: Learner calls the energy held in a cell or battery the "electrical store", because the cell drives a current. (Covers `physics-energy-stores`.)
  - Required handling: misconception entry; at least one core MCQ that pairs chemical store and electrical transfer for the same battery example.
- C-EN-3: Learner confuses the magnetic store of two magnets held apart with the electrostatic store of two charged objects held apart. (Covers `physics-energy-stores`.)
  - Required handling: misconception entry; at least one Confident MCQ that asks the learner to pick the correct store for a balloon-and-hair situation versus a magnet-and-paperclip situation.
- C-EN-4: Learner labels nuclear fuel (uranium rods, the Sun) as a chemical store, because both involve atoms. (Covers `physics-energy-stores`.)
  - Required handling: misconception entry; at least one Confident MCQ that contrasts a coal fire (chemical) with a nuclear power station (nuclear).
- C-EN-5: Learner believes an object can only have one energy store at a time, so a hot mug on a high shelf has either thermal or gravitational, not both. (Covers `physics-energy-stores`.)
  - Required handling: misconception entry; at least one Challenge tier MCQ or free-text item that requires listing two or more stores for one object.
- C-EN-6: Learner believes only hot things like fires and heaters have a thermal store, so a cup of room-temperature water has none. (Covers `physics-energy-stores`.)
  - Required handling: misconception entry; at least one Challenge tier MCQ comparing two cups of water at different temperatures.
- C-EN-7: Learner forgets that food holds a chemical store, so saying that food gives the body "energy" without naming the store. (Covers `physics-energy-stores`, `physics-energy-transfers`.)
  - Required handling: misconception entry on the stores node; at least one item on the transfers node that traces food chemical store to body kinetic and thermal stores.
- C-EN-8: Learner uses "transferred" and "stored" interchangeably, treating heating a cup of water as the kettle "storing" energy in the water. (Covers `physics-energy-transfers`.)
  - Required handling: misconception entry on the transfers node; at least one MCQ that asks the learner to pick the transfer pathway separately from the store names.
- C-EN-9: Learner only names mechanical (force times distance) and electrical as the two transfer pathways, missing heating (temperature difference) and radiation (light, sound, infrared). (Covers `physics-energy-transfers`.)
  - Required handling: misconception entry on the transfers node; at least one labelled-image or drag-order question that requires placing all four pathways onto example situations.
- C-EN-10: Learner says light is "given off as light energy", treating light as a store rather than a radiation transfer. (Covers `physics-energy-transfers`.)
  - Required handling: misconception entry on the transfers node; at least one spot-misconception question presenting the "light energy is given off" claim.
- C-EN-11: Learner says sound is the same kind of thing as a store and adds it to a list of stores in a kettle or speaker example. (Covers `physics-energy-transfers`.)
  - Required handling: misconception entry on the transfers node; at least one Confident or Challenge MCQ that asks the learner to label sound as a transfer (radiation), not a store.
- C-EN-12: Learner believes useful energy is created and wasted energy disappears, missing the conservation rule that energy is never lost, only transferred between stores or to the surroundings. (Covers `physics-energy-efficiency`.)
  - Required handling: misconception entry on the efficiency node; at least one spot-misconception question that presents the "wasted energy disappears" claim.
- C-EN-13: Learner uses percentage efficiency calculations from primary-school sources or from GCSE textbooks, calculating "the energy is 60% efficient", which is a GCSE Higher-tier skill not in the KS3 specification. (Covers `physics-energy-efficiency`.)
  - Required handling: in the seed file, restrict the efficiency node to qualitative useful-vs-wasted comparison; do NOT include any percentage efficiency calculations; flag in the node description that the calculation is GCSE.
- C-EN-14: Learner reads a Sankey diagram top-down or right-to-left, mistaking a wasted-energy branch for the input. (Covers `physics-energy-efficiency`.)
  - Required handling: misconception entry on the efficiency node; at least one labelled-image or data-extraction question on a Sankey diagram with the input clearly labelled on the left and useful and wasted branches separated.
- C-EN-15: Learner believes wasted energy can be recovered by waiting (the heat will "come back" into the bulb). (Covers `physics-energy-efficiency`.)
  - Required handling: misconception entry on the efficiency node; at least one MCQ that contrasts useful and wasted energy paths after a torch bulb has cooled.

### Question shape probes

- Q-EN-1: At least one labelled-image question on the stores node has the learner place all eight store names ("Kinetic store", "Gravitational store", "Elastic store", "Thermal store", "Chemical store", "Nuclear store", "Magnetic store", "Electrostatic store") onto a gallery diagram, with a label pool that includes the legacy "light energy", "sound energy", "heat energy" distractors and is no larger than twice the hotspot count. (Covers `physics-energy-stores`.)
- Q-EN-2: At least four Core MCQs on the stores node each present one everyday UK situation (kettle, cyclist, wound-up torch, book on a shelf, balloon on hair, drawn catapult, AA cell, mug of hot tea) and ask the learner to pick the main store, with one distractor mapping to the "kinds of energy" or one of the store-confusion misconceptions. (Covers `physics-energy-stores`.)
- Q-EN-3: At least one Confident drag-order or missing-step question on the stores node walks the learner through naming the main store of an object (pick the object, list what changed, match to a store, name the store). (Covers `physics-energy-stores`.)
- Q-EN-4: At least one Challenge tier item on the stores node lists more than one store for a single object (a hot mug on a shelf, a 0.5 kg apple held above the floor) and credits the learner only when both are named. (Covers `physics-energy-stores`.)
- Q-EN-5: At least one labelled-image question on the transfers node has the learner place each of the four transfer pathway labels ("Mechanical (force x distance)", "Electrical (current x voltage)", "Heating (temperature difference)", "Radiation (light or sound or infrared)") onto a gallery of example situations, with a label pool no larger than twice the hotspot count. (Covers `physics-energy-transfers`.)
- Q-EN-6: At least three Core MCQs on the transfers node each ask the learner to pick the pathway used to move energy between two named stores in a UK context (kettle, motor, torch, hot drink cooling on a counter), with distractors drawn from neighbouring pathways. (Covers `physics-energy-transfers`.)
- Q-EN-7: At least one drag-order question on the transfers node walks the learner through a store-to-store chain (chemical store of fuel falls, mechanical transfer turns wheels, kinetic store of car grows, plus a thermal-store growth from friction), in the right order. (Covers `physics-energy-transfers`.)
- Q-EN-8: At least one Challenge tier missing-step or free-text item on the transfers node maps a UK context (a falling brick, a moving car) onto a complete chain of store-to-store transfers, naming both the stores and the pathways. (Covers `physics-energy-transfers`.)
- Q-EN-9: At least one labelled-image question on the efficiency node has the learner place "Input energy", "Useful output", and "Wasted output" labels onto a Sankey diagram with the input flowing in from the left, with a label pool no larger than twice the hotspot count. (Covers `physics-energy-efficiency`.)
- Q-EN-10: At least one data-extraction question on the efficiency node reads off the largest wasted-energy branch from the description of a Sankey diagram for an everyday UK appliance (light bulb, kettle, electric motor, electric scooter). (Covers `physics-energy-efficiency`.)
- Q-EN-11: At least one Confident drag-order or missing-step question on the efficiency node walks the learner through a useful-versus-wasted analysis of a torch bulb (input chemical from cell, useful as light to read by, wasted as heat to the surroundings, total stays the same by conservation). (Covers `physics-energy-efficiency`.)
- Q-EN-12: At least two spot-misconception questions across the three energy nodes each present a "kinds of energy" claim, a "wasted energy disappears" claim, or a "battery stores electricity" claim, and ask whether the framing is sound. (Covers all three nodes.)
- Q-EN-13: No question across the three energy nodes uses a percentage efficiency calculation. Efficiency at Year 7 is qualitative only; reviewers must reject any item that asks the learner to compute a percentage. (Covers `physics-energy-efficiency`.)
- Q-EN-14: At least three numeric-entry questions on the efficiency node compare useful-vs-wasted joule values from a Sankey description (input - useful = wasted), without using division to express a percentage. (Covers `physics-energy-efficiency`.)
- Q-EN-15: At least one Challenge tier item on the efficiency node uses a UK appliance comparison (an old filament bulb versus an LED, or an old kettle versus a new kettle) framed as which one wastes the smaller share of its input, qualitatively. (Covers `physics-energy-efficiency`.)

### Tutor probes

- T-EN-1: Given "I think heat energy and light energy are stores, like kinetic", the tutor first asks the learner to name where the energy is held before the candle burns, before stating the "stores not types" rule. The reply uses the eight-stores list and names heat and light as transfer pathways.
- T-EN-2: Given a wrong answer matching the "battery stores electricity" trigger ("the battery has electrical energy"), the tutor cites the relevant misconception's `reExplanation` and contrasts the chemical store inside the cell with the electrical transfer to the bulb.
- T-EN-3: Given "Where does the wasted energy go in a torch bulb?", the tutor walks the learner through conservation: the input chemical store falls, useful light leaves by radiation, wasted thermal store of the bulb and the air around it grows. No "lost" or "destroyed" language.
- T-EN-4: Given a request to compute the percentage efficiency of an appliance (above KS3 scope), the tutor declines politely and offers a qualitative useful-vs-wasted comparison instead, and explains the calculation comes at GCSE.
- T-EN-5: Given an off-topic input (for example a question about US imperial heat units or BTUs), the tutor steers back to KS3 UK Physics examples and metric units (J for energy, W for power are GCSE).
- T-EN-6: Given a request for an inline definition (tap on "energy store", "transfer pathway", "Sankey diagram", or "thermal store"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Mechanica > Electricity and Circuits

Covers `physics-electricity-circuit-symbols`, `physics-electricity-series-parallel`, `physics-electricity-current-voltage`.

### Content probes

- C-EC-1: Learner draws the voltmeter in series with a component, believing voltage flows through it the way current does.
  - Required handling: misconception entry; at least one question with `misconceptionId` linking to this misconception, and at least one scene that shows correct ammeter and voltmeter placement side by side.
- C-EC-2: Learner confuses the ammeter symbol (A in a circle) with the voltmeter symbol (V in a circle) when sketching or reading a circuit diagram.
  - Required handling: misconception entry; at least one question that pairs the two symbols as distractors, ideally a labelled-image or a multiple-choice on a UK domestic circuit.
- C-EC-3: Learner uses single cell and battery interchangeably, drawing one cell and labelling it as a 6 V battery.
  - Required handling: misconception entry; at least one question that requires counting cells from a battery symbol or computing battery voltage from cell count.
- C-EC-4: Learner cannot tell an open switch from a closed switch in a diagram, leading to circuit predictions where a lamp is shown lit even though the switch is open.
  - Required handling: misconception entry; at least one question that contrasts open and closed switch symbols on the same circuit shape.
- C-EC-5: Learner draws the filament lamp as a plain circle (no cross), which is then easy to confuse with an ammeter or voltmeter symbol.
  - Required handling: misconception entry; at least one question whose distractors include plain circle vs circle-with-cross variants.
- C-EC-6: Learner thinks current flows out of both terminals of the cell and meets at the lamp, rather than around a single closed loop.
  - Required handling: misconception entry; a scene or worked example that walks the loop from positive terminal back to negative terminal.
- C-EC-7: Learner treats every straight line in a diagram as a component, calling the connecting wire a "resistor" or a "conductor box".
  - Required handling: misconception entry; at least one question that requires distinguishing the wire from drawn components.
- C-EC-8: Learner believes each bulb in a series circuit uses up some of the current, so bulbs further round the loop are dimmer because there is less current left. (Covers `physics-electricity-series-parallel`.)
  - Required handling: misconception entry; at least one numeric-entry question that asks for the ammeter reading at a second point on a series loop and credits only the same value as the first reading.
- C-EC-9: Learner thinks adding a second bulb in parallel makes both bulbs dimmer, because the bulbs must "share" the cell's energy. (Covers `physics-electricity-series-parallel`.)
  - Required handling: misconception entry; at least one spot-misconception question presenting the dimming argument.
- C-EC-10: Learner believes that if one bulb breaks in a series circuit, only that bulb goes out while the others stay lit. (Covers `physics-electricity-series-parallel`.)
  - Required handling: misconception entry; at least one question (multiple-choice or word problem) that contrasts the broken-bulb outcome in series with the broken-bulb outcome in parallel, plus a scene that shows both side by side.
- C-EC-11: Learner predicts that current always splits equally at a parallel junction, regardless of the components on each branch. (Covers `physics-electricity-series-parallel`.)
  - Required handling: misconception entry; at least one numeric-entry question where the two branch currents are unequal and add to the main current.
- C-EC-12: Learner believes potential differences across parallel branches add up to the cell voltage, the way they do across components in series. (Covers `physics-electricity-series-parallel`.)
  - Required handling: misconception entry; at least one Challenge tier spot-misconception question that presents the parallel-voltages-add argument.
- C-EC-13: Learner mixes the units of current and voltage, writing things like "a current of 230 V" or "a voltage of 0.5 A". (Covers `physics-electricity-current-voltage`.)
  - Required handling: misconception entry; at least one core multiple-choice item on the units of current, voltage, and resistance.
- C-EC-14: Learner believes adding more resistance to a circuit increases the current, often by mixing resistance up with the cell or with energy. (Covers `physics-electricity-current-voltage`.)
  - Required handling: misconception entry; at least one Confident or Challenge multiple-choice question that contrasts the same cell with two different resistors.
- C-EC-15: Learner thinks current is used up by a lamp or resistor, so an ammeter further round a series loop reads less than one earlier. (Covers `physics-electricity-current-voltage`.)
  - Required handling: misconception entry; at least one spot-misconception question that presents the "current used up" argument on a series loop.
- C-EC-16: Learner reads a voltmeter across a 230 V mains kettle as a flow rather than as energy per coulomb. (Covers `physics-electricity-current-voltage`.)
  - Required handling: misconception entry; at least one numeric-entry question that asks the learner to interpret a voltmeter reading as joules per coulomb.

### Question shape probes

- Q-EC-1: At least one labelled-image question asks the learner to place names on a simple series circuit (cell, switch, lamp), with a label pool no larger than twice the hotspot count.
- Q-EC-2: At least one Challenge tier labelled-image or multiple-choice question requires placing both an ammeter (in series) and a voltmeter (in parallel across a component) on the same diagram.
- Q-EC-3: At least one numeric-entry question asks the learner to count the cells in a drawn battery symbol.
- Q-EC-4: At least one numeric-entry question asks the learner to compute battery voltage from cell count using a 1.5 V cell.
- Q-EC-5: At least one Challenge tier word problem maps a UK context (torch, bedside lamp, smoke alarm, cycling helmet light) onto the number of 1.5 V cells needed for a stated battery voltage and the matching circuit symbol.
- Q-EC-6: At least one spot-misconception question presents the voltmeter-in-series argument and asks whether the method is sound.
- Q-EC-7: At least one drag-order or missing-step question walks the learner around a series-circuit loop, naming each symbol in turn.
- Q-EC-8: At least one numeric-entry question on the series-parallel node asks for the ammeter reading at a point on a series loop, with the rubric that the answer equals the reading anywhere else on the same loop. (Covers `physics-electricity-series-parallel`.)
- Q-EC-9: At least three numeric-entry questions on the series-parallel node apply the junction rule (branch currents add up to the main current), spread across Core, Confident, and Challenge tiers, with at least one three-branch instance. (Covers `physics-electricity-series-parallel`.)
- Q-EC-10: At least one Challenge tier multi-step word problem on the series-parallel node frames a UK context (Christmas fairy lights, kitchen and lounge lighting, school hall lights, cycling helmet light) and requires the learner to infer per-branch current before answering. (Covers `physics-electricity-series-parallel`.)
- Q-EC-11: At least one labelled-image question on the series-parallel node has the learner place names ("Cell", "Junction", "Lamp", "Branch") on a parallel circuit. (Covers `physics-electricity-series-parallel`.)
- Q-EC-12: At least three numeric-entry questions on the current-voltage node use V = I x R in different rearrangements (find R from V and I; find I from V and R; find V from I and R), spread across Confident and Challenge tiers. (Covers `physics-electricity-current-voltage`.)
- Q-EC-13: At least one slider-explore question on the current-voltage node makes the learner set a resistance to hit a target current for a fixed cell voltage, with feedback that the rule is I equals V over R. (Covers `physics-electricity-current-voltage`.)
- Q-EC-14: At least one data-extraction question on the current-voltage node gives a small table of V and I readings on a fixed resistor and asks for the resistance, requiring the learner to spot that V over I is the same in every row. (Covers `physics-electricity-current-voltage`.)
- Q-EC-15: At least one Challenge tier word problem on the current-voltage node uses a UK domestic context (230 V mains kettle, bedside lamp, torch with 1.5 V cells) and requires the learner to compute resistance or current from V and I. (Covers `physics-electricity-current-voltage`.)

### Tutor probes

- T-EC-1: Given "I think the voltmeter goes in series with the lamp because then the voltage flows through it", the tutor's first reply is a Socratic prompt about what a voltmeter measures across, not a direct correction.
- T-EC-2: Given a wrong answer matching the ammeter-vs-voltmeter trigger (for example "A circle with V means ammeter"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-EC-3: Given "Why does my torch need 4 cells when I want 6 V?", the tutor walks the learner through dividing 6 by 1.5 with a concrete counting example, not a definition.
- T-EC-4: Given an off-topic input (for example a question about US 110 V wall sockets), the tutor steers back to UK 230 V mains and KS3 circuit symbols politely.
- T-EC-5: Given a request for an inline definition (tap on "ammeter" or "voltmeter"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Mechanica > Waves

Zone id: `physics-waves`. Covers `physics-waves-anatomy`, `physics-waves-sound-light`.

### Content probes
- C-WV-1: Learner measures amplitude as the full distance from a trough up to a crest, doubling the correct value. (Covers `physics-waves-anatomy`.)
- C-WV-2: Learner mixes amplitude and wavelength up, calling the height of the wave its wavelength or the crest-to-crest distance its amplitude. (Covers `physics-waves-anatomy`.)
- C-WV-3: Learner writes the frequency in seconds (e.g. "5 s") rather than hertz (Hz), or the period in hertz rather than seconds. (Covers `physics-waves-anatomy`.)
- C-WV-4: Learner treats period and frequency as the same thing, missing that they are reciprocals (period = 1 ÷ frequency). (Covers `physics-waves-anatomy`.)
- C-WV-5: Learner believes sound waves are transverse, often because they are usually drawn as a sine curve in textbooks. (Covers `physics-waves-anatomy`, `physics-waves-sound-light`.)
- C-WV-6: Learner reads the rest line as an arrow showing which way the wave is travelling, rather than as the undisturbed level. (Covers `physics-waves-anatomy`.)
- C-WV-7: Learner treats "louder" as the same as "higher pitch", confusing amplitude with frequency. (Covers `physics-waves-anatomy`.)
- C-WV-8: Learner believes sound can travel through a vacuum, often picked up from films where space explosions are loud. (Covers `physics-waves-sound-light`.)
- C-WV-9: Learner believes light needs air or another medium to travel, by analogy with sound. (Covers `physics-waves-sound-light`.)
- C-WV-10: Learner calls light a longitudinal wave by analogy with sound, instead of a transverse wave. (Covers `physics-waves-sound-light`.)
- C-WV-11: Learner swaps the speed of sound (≈ 343 m/s) and the speed of light (3×10⁸ m/s), often because both numbers feature a "3". (Covers `physics-waves-sound-light`.)
- C-WV-12: Learner multiplies thunder-lag seconds by the speed of light, instead of the speed of sound, when estimating distance to a storm. (Covers `physics-waves-sound-light`.)
- C-WV-13: Learner believes sound is slower in solids than in air, because solids "feel heavier". (Covers `physics-waves-sound-light`.)
- C-WV-14: Learner believes light is truly instant — that distance does not matter for light at all. (Covers `physics-waves-sound-light`.)
- C-WV-15: Learner believes the light from a single event "starts first" or "leaves first", rather than that the light and sound start together but light travels much faster. (Covers `physics-waves-sound-light`.)

### Question shape probes
- Q-WV-1: At least one labelled-image question on the wave-anatomy node has the learner place names ("Crest", "Trough", "Amplitude", "Wavelength λ") onto a transverse-wave diagram, with a label pool no larger than twice the hotspot count. (Covers `physics-waves-anatomy`.)
- Q-WV-2: At least three Core multiple-choice questions on the wave-anatomy node ask the learner to define a single wave part (rest line, amplitude, wavelength, frequency, period) with distractors drawn from the neighbouring parts. (Covers `physics-waves-anatomy`.)
- Q-WV-3: At least one Confident numeric-entry question on the wave-anatomy node converts between frequency and period (T = 1 ÷ f) for a UK-context wave. (Covers `physics-waves-anatomy`.)
- Q-WV-4: At least one spot-misconception question on the wave-anatomy node confronts the amplitude-as-trough-to-crest mistake or the sound-as-transverse mistake. (Covers `physics-waves-anatomy`.)
- Q-WV-5: At least one data-extraction question on the wave-anatomy node reads the period off a description of a buoy bobbing on a sea wave (rest, crest, rest, trough, rest), without numeric calculation. (Covers `physics-waves-anatomy`.)
- Q-WV-6: At least three Core multiple-choice questions on the sound-light node compare sound and light along a single axis (longitudinal vs transverse, speed in air, medium dependence), each with one named UK context. (Covers `physics-waves-sound-light`.)
- Q-WV-7: At least two numeric-entry questions on the sound-light node use distance = speed × time with the speed of sound in air ≈ 343 m/s on a UK context (storm, school field, fireworks). (Covers `physics-waves-sound-light`.)
- Q-WV-8: At least one Challenge tier item on the sound-light node compares the time light and sound take to cover the same UK distance (school playground, garden, motorway), making the speed-difference quantitative. (Covers `physics-waves-sound-light`.)
- Q-WV-9: No question across the two waves nodes uses v = f × λ. The wave equation is GCSE-only at Lumen; reviewers must reject any item that asks the learner to use it. (Covers `physics-waves-anatomy`, `physics-waves-sound-light`.)
- Q-WV-10: No question on the sound-light node names individual bands of the electromagnetic spectrum (radio, microwave, infrared, ultraviolet, X-ray, gamma) beyond "visible light is part of a wider family of waves". Spectrum naming is GCSE-only at Lumen. (Covers `physics-waves-sound-light`.)
- Q-WV-11: No question on the sound-light node draws or asks the learner to draw a ray diagram (incident ray, normal, angle of incidence equals angle of reflection). Reflection at Lumen Year 7 is qualitative only. (Covers `physics-waves-sound-light`.)

### Tutor probes
- T-WV-1: Given the prompt "I don't get the difference between amplitude and wavelength", the tutor escalates from a nudge ("which one is a height? which one is a distance along the wave?") through a partial hint to a worked check, never offering a v = f × λ shortcut.
- T-WV-2: Given a thunder-lag question with a wrong-speed answer (using 3×10⁸), the tutor surfaces the speed-of-sound assumption and reframes distance = speed × time before offering a numeric reveal.
- T-WV-3: Given an off-topic input (for example a question about the electromagnetic spectrum bands), the tutor steers back to KS3-level qualitative comparison ("visible light is part of a wider family of waves; the rest is GCSE territory") politely.
- T-WV-4: Given a request for an inline definition (tap on "longitudinal" or "amplitude"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Mechanica > Space

Zone id: `physics-space`. Covers `physics-space-solar-system`, `physics-space-day-night-seasons`.

### Content probes
- C-SP-1: Learner names Pluto as the ninth planet of the Solar System, missing the IAU 2006 reclassification of Pluto as a dwarf planet. (Covers `physics-space-solar-system`.)
- C-SP-2: Learner gets the order of the planets wrong, especially swapping Mars and Jupiter, or putting Saturn before Jupiter. (Covers `physics-space-solar-system`.)
- C-SP-3: Learner believes the asteroid belt sits between Earth and Mars (or beyond Saturn), rather than between Mars and Jupiter. (Covers `physics-space-solar-system`.)
- C-SP-4: Learner mixes up rocky and gas-giant planets, calling Jupiter rocky or calling Earth a gas planet. (Covers `physics-space-solar-system`.)
- C-SP-5: Learner believes the Moon is a planet, missing that it is a natural satellite of Earth. (Covers `physics-space-solar-system`.)
- C-SP-6: Learner believes the Sun is a planet, rather than a star at the centre of the Solar System. (Covers `physics-space-solar-system`.)
- C-SP-7: Learner believes all the planets are the same size, often drawing them at the same scale on a diagram. (Covers `physics-space-solar-system`.)
- C-SP-8: Learner believes the planets orbit in straight lines, or that they orbit Earth rather than the Sun (geocentric mistake). (Covers `physics-space-solar-system`.)
- C-SP-9: Learner names a recent Mars rover or a science-fiction spacecraft as the body that astronauts live on, missing that the ISS is the long-term crewed station in low Earth orbit. (Covers `physics-space-solar-system`.)
- C-SP-10: Learner believes the UK has summer because Earth is closer to the Sun in summer than in winter, missing that perihelion (closest distance) is in early January and that axial tilt drives the seasons. (Covers `physics-space-day-night-seasons`.)
- C-SP-11: Learner believes the Sun moves round Earth once a day, citing sunrise in the east as evidence, rather than Earth spinning on its axis once every 24 hours. (Covers `physics-space-day-night-seasons`.)
- C-SP-12: Learner believes the whole Earth has the same season at the same time, missing that the southern hemisphere has the opposite season to the UK. (Covers `physics-space-day-night-seasons`.)
- C-SP-13: Learner believes Earth's orbit is strongly oval and that distance from the Sun drives the seasons, rather than the small (about 3 percent) eccentricity of the actual orbit. (Covers `physics-space-day-night-seasons`.)
- C-SP-14: Learner believes Earth's axis flips its tilt direction during the year, rather than keeping the same fixed lean as it travels round the Sun. (Covers `physics-space-day-night-seasons`.)
- C-SP-15: Learner believes Edinburgh and London have similar daylight all year, missing that Edinburgh has roughly 17 hours at midsummer and 7 hours at midwinter (about 10 hours of difference). (Covers `physics-space-day-night-seasons`.)

### Question shape probes
- Q-SP-1: At least one labelled-image question on the solar-system node has the learner place planet names onto a Sun-and-orbits diagram in the right order, with a label pool no larger than twice the hotspot count. (Covers `physics-space-solar-system`.)
- Q-SP-2: At least three Core multiple-choice questions on the solar-system node test single facts about the Solar System (Pluto's status, the position of the asteroid belt, the order of planets, rocky vs gas-giant), each with one neighbouring distractor. (Covers `physics-space-solar-system`.)
- Q-SP-3: At least one drag-order question on the solar-system node walks the learner through ordering the eight planets from closest to the Sun (Mercury) to furthest (Neptune). (Covers `physics-space-solar-system`.)
- Q-SP-4: At least one spot-misconception question on the solar-system node confronts the "Pluto is the ninth planet" claim and references the IAU 2006 reclassification. (Covers `physics-space-solar-system`.)
- Q-SP-5: At least one Confident or Challenge item on the solar-system node uses a UK astronomy context (Royal Greenwich Observatory, UK Space Agency, Tim Peake on the ISS) without quoting orbital periods or AU distances quantitatively. (Covers `physics-space-solar-system`.)
- Q-SP-6: No question on the solar-system node uses Kepler's laws, orbital-period calculations, or AU-based exact distance arithmetic. KS3 stays qualitative; quantitative orbital mechanics is GCSE+. (Covers `physics-space-solar-system`.)
- Q-SP-7: At least one Core MCQ on the day-night-seasons node names Earth's axial tilt of about 23.5° as the cause of the seasons, with at least one distractor that uses distance from the Sun. (Covers `physics-space-day-night-seasons`.)
- Q-SP-8: At least one spot-misconception question on the day-night-seasons node confronts the "closer to the Sun in summer" claim and corrects with the perihelion-in-January fact. (Covers `physics-space-day-night-seasons`.)
- Q-SP-9: At least one item on the day-night-seasons node uses the Edinburgh midsummer (about 17 hours) versus midwinter (about 7 hours) daylight contrast as a UK context. (Covers `physics-space-day-night-seasons`.)
- Q-SP-10: At least one spot-misconception or MCQ item on the day-night-seasons node addresses the "Sun moves round Earth" or "Earth fixed in space" picture and corrects with the 24-hour spin. (Covers `physics-space-day-night-seasons`.)
- Q-SP-11: At least one Confident or Challenge item on the day-night-seasons node uses a comparison between hemispheres (UK winter ↔ Australia/Cape Town summer in December, or similar) to test the opposite-season idea. (Covers `physics-space-day-night-seasons`.)
- Q-SP-12: At least one Challenge tier multi-step item on the day-night-seasons node combines two ideas (tilt + direct sunlight + longer days) or uses a numeric step (360° ÷ 24 h, hours of daylight subtraction) on a UK context. (Covers `physics-space-day-night-seasons`.)
- Q-SP-13: No question on the day-night-seasons node uses Coriolis effects, axial precession, or the formal equinox/solstice naming beyond "longest" and "shortest" day. KS3 stays qualitative; those topics are GCSE+ or A-Level. (Covers `physics-space-day-night-seasons`.)

### Tutor probes
- T-SP-1: Given the prompt "Why isn't Pluto a planet?", the tutor escalates from a nudge ("what kinds of objects do you think the IAU said a planet has to be?") to a worked recap of the 2006 reclassification (size, near-spherical, cleared its orbit), without inventing recent news.
- T-SP-2: Given a question that asks for the speed of an orbit or a Kepler-style calculation, the tutor steers back to the KS3-qualitative framing politely and notes that orbital-period calculation is GCSE+ territory.
- T-SP-3: Given an off-topic input (for example a question about black holes or dark matter), the tutor stays inside the KS3 syllabus and offers the relevant solar-system fact, deferring the bigger topic to later years.
- T-SP-4: Given a request for an inline definition (tap on "asteroid" or "dwarf planet"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-SP-5: Given the prompt "Why does the UK have summer?", the tutor nudges the learner toward axial tilt (rather than distance to the Sun) and surfaces the perihelion-in-January counter-fact if the learner sticks with the distance idea.
- T-SP-6: Given the prompt "What time is it in Sydney when it is 11 a.m. in London?", the tutor explains the 24-hour spin and the half-turn idea without reaching for time-zone tables or precise UTC offsets, since KS3 stays qualitative on this.
- T-SP-7: Given a request for an inline definition (tap on "axial tilt" or "perihelion"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Mechanica > Magnetism

Zone id: `physics-magnetism`. Covers `physics-magnetism-fields`, `physics-magnetism-electromagnets`.

### Content probes
- C-MAG-1: Learner believes every metal is magnetic, often because magnets stick to "metal" fridge doors and tools. (Covers `physics-magnetism-fields`, `physics-magnetism-electromagnets`.)
- C-MAG-2: Learner mixes up the like-poles rule, saying two strong N poles will snap together or that "stronger poles always attract". (Covers `physics-magnetism-fields`.)
- C-MAG-3: Learner draws magnetic field lines pointing from S to N outside the magnet, or as straight rays rather than as loops. (Covers `physics-magnetism-fields`.)
- C-MAG-4: Learner believes the magnetic field round a bar magnet is the same strength everywhere or strongest in the middle, missing that field strength is highest at the poles. (Covers `physics-magnetism-fields`.)
- C-MAG-5: Learner explains the compass with non-magnetic causes (gravity, the Sun, wind, a heavier N end), missing that Earth's magnetic field is what lines the needle up. (Covers `physics-magnetism-fields`.)
- C-MAG-6: Learner confuses magnetic attraction with gravity, saying things like "a magnet pulls a paper clip because of gravity" or "all heavy objects are magnetic". (Covers `physics-magnetism-fields`.)
- C-MAG-7: Learner names strength as the key advantage of an electromagnet over a permanent magnet, missing that the on-off switching ability is what determines design choices. (Covers `physics-magnetism-electromagnets`.)
- C-MAG-8: Learner believes the iron core stays magnetised after the current is switched off, treating the coil as a way to "make" a permanent magnet. (Covers `physics-magnetism-electromagnets`.)
- C-MAG-9: Learner believes more turns of wire makes an electromagnet weaker (often by reasoning about resistance), or that there is a small Year 7 limit beyond which extra turns stop helping. (Covers `physics-magnetism-electromagnets`.)
- C-MAG-10: Learner calls an electromagnet a "permanent magnet while the current is on", missing that the word "permanent" means "stays magnetic after the source is removed". (Covers `physics-magnetism-electromagnets`.)
- C-MAG-11: Learner believes any metal core works in an electromagnet (e.g. a copper or aluminium rod), missing that only iron and other magnetic metals boost the field. (Covers `physics-magnetism-electromagnets`.)
- C-MAG-12: Learner blurs the motor effect and electromagnet ideas, treating "current makes a force on a wire in a magnetic field" as the same as "a coil with current is a magnet". (Covers `physics-magnetism-electromagnets`.)

### Question shape probes
- Q-MAG-1: At least one Core MCQ on the magnetism-fields node asks "what happens when N faces N" with the like-poles-repel rule, with at least one distractor that uses the "they attract" misstep. (Covers `physics-magnetism-fields`.)
- Q-MAG-2: At least one Core MCQ on the magnetism-fields node tests "aluminium is a metal but not magnetic" or an equivalent (copper coin, gold ring), with at least one distractor that uses "all metals stick to magnets". (Covers `physics-magnetism-fields`.)
- Q-MAG-3: At least one labelled-image question on the magnetism-fields node has the learner drag material names onto magnetic vs non-magnetic columns, with a label pool no larger than twice the hotspot count. (Covers `physics-magnetism-fields`.)
- Q-MAG-4: At least one MCQ or labelled-image item on the magnetism-fields node tests "field lines run N to S outside the magnet" with a distractor that reverses the direction. (Covers `physics-magnetism-fields`.)
- Q-MAG-5: At least one item on the magnetism-fields node tests "field is strongest at the poles" with a distractor that places the strongest point in the middle of the magnet. (Covers `physics-magnetism-fields`.)
- Q-MAG-6: At least one item on the magnetism-fields node uses a UK context (fridge magnet, school lab tray, Lake District compass walk, iron-filing practical, 2p coin) without quoting a numeric field strength in tesla. (Covers `physics-magnetism-fields`.)
- Q-MAG-7: At least one Confident or Challenge spot-misconception on the magnetism-fields node confronts either the "all metals are magnetic" or the "two N poles snap together" claim. (Covers `physics-magnetism-fields`.)
- Q-MAG-8: No question on the magnetism-fields node uses Faraday's law of induction, magnetic flux density (B in tesla), or the motor effect. KS3 stays qualitative; those topics are GCSE Higher / A-Level. (Covers `physics-magnetism-fields`.)
- Q-MAG-9: At least one Core MCQ on the electromagnets node asks "what is the key advantage of an electromagnet?" with the on-off answer correct and at least one distractor that names strength. (Covers `physics-magnetism-electromagnets`.)
- Q-MAG-10: At least one item on the electromagnets node uses the scrapyard crane UK context (lifting then dropping a car by switching the current). (Covers `physics-magnetism-electromagnets`.)
- Q-MAG-11: At least one item on the electromagnets node tests "more turns = stronger" with a distractor that says more turns weakens the coil or that there is a small Year 7 limit. (Covers `physics-magnetism-electromagnets`.)
- Q-MAG-12: At least one Confident or Challenge spot-misconception on the electromagnets node confronts the "iron core stays magnetised after the switch is opened" claim. (Covers `physics-magnetism-electromagnets`.)
- Q-MAG-13: At least one item on the electromagnets node uses a UK MRI scanner, electric bell, or scrapyard crane context to ground the on-off advantage. (Covers `physics-magnetism-electromagnets`.)
- Q-MAG-14: No question on the electromagnets node uses Faraday's law of induction, Lenz's law, or the motor-effect right-hand rule. KS3 stays at "coil + current + iron core, switchable"; the rest is GCSE Higher / A-Level. (Covers `physics-magnetism-electromagnets`.)

### Tutor probes
- T-MAG-1: Given the prompt "Why doesn't a magnet stick to my Coke can?", the tutor escalates from a nudge ("which metals are actually magnetic?") to the iron/steel/nickel/cobalt rule, and notes that aluminium and copper are common metals that do not stick.
- T-MAG-2: Given the prompt "What does a field line mean?", the tutor explains it as the direction the N pole of a tiny test compass would point, and describes the loop shape (N round to S outside).
- T-MAG-3: Given a question that uses motor-effect derivation or flux density in tesla, the tutor steers back to the KS3-qualitative framing politely and notes that those calculations are GCSE+ territory.
- T-MAG-4: Given a request for an inline definition (tap on "field line", "pole", or "compass"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-MAG-5: Given the prompt "Why does a scrapyard crane use an electromagnet?", the tutor nudges toward the on-off ability ("could a permanent magnet drop the car?") and only later names "switchable" as the key advantage.
- T-MAG-6: Given the prompt "What happens to the iron core when I switch off?", the tutor explains that soft iron loses its magnetism almost straight away and that this is why the electromagnet is useful, without naming "soft" vs "hard" magnetic materials unless the learner asks.
- T-MAG-7: Given a question that asks for Faraday's law of induction, Lenz's law, or the right-hand-rule motor formula, the tutor politely defers to GCSE Higher / A-Level and offers a Year 7 alternative on switching, turns, or core material.
- T-MAG-8: Given a request for an inline definition (tap on "solenoid", "core", or "switch"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Numerica > Geometry and Measure

Covers `maths-geometry-measure-area-rectangles`, `maths-geometry-measure-perimeter`, `maths-geometry-measure-volume-cuboids`.

### Content probes

#### Area of rectangles and composite rectangles (`maths-geometry-measure-area-rectangles`)
- C-GEO-1: Learner finds the area of a rectangle by adding the side lengths (or all four sides), giving 6 + 4 = 10 m squared for a 6 m by 4 m rug instead of multiplying.
  - Required handling: misconception entry; at least one question whose distractors include the add-the-sides answer.
- C-GEO-2: Learner conflates area and perimeter, giving 2 x (length + width) and labelling it as the area.
  - Required handling: misconception entry; at least one Core question with the perimeter value present as a distractor.
- C-GEO-3: Learner treats an L-shape as a single rectangle by multiplying the two longest outer sides, giving the bounding rectangle area instead of splitting the shape.
  - Required handling: misconception entry; at least one Confident question that exposes the bounding-rectangle answer.
- C-GEO-4: Learner converts cm squared to m squared by dividing by 100 instead of 10 000 (does not square the conversion factor).
  - Required handling: misconception entry; at least one Confident question that exposes the linear-conversion slip in a square-unit context.
- C-GEO-5: Learner mixes units, multiplying a length in metres by a width in centimetres without converting first.
  - Required handling: misconception entry; at least one Confident question with a length in metres and a width in centimetres in the stem.
- C-GEO-6: Learner finds the bigger rectangle of a composite shape and forgets to add (or subtract) the smaller piece.
  - Required handling: misconception entry; at least one missing-step question that surfaces the second-rectangle calculation.

#### Perimeter of rectangles and composite shapes (`maths-geometry-measure-perimeter`)
- C-GEO-7: Learner forgets to count both pairs of sides on a rectangle, giving length + width = perimeter instead of 2 x (length + width).
  - Required handling: misconception entry; at least one Core MCQ with the half-perimeter answer present as a distractor.
- C-GEO-8: Learner multiplies length by width and labels the answer as perimeter, mixing up area and perimeter from the other direction.
  - Required handling: misconception entry; at least one Core question with the area value present as a perimeter distractor.
- C-GEO-9: Learner does not work out the missing side of a composite shape from the given sides, giving an incomplete perimeter.
  - Required handling: misconception entry; at least one Confident "missing-side" question on an L-shape or T-shape composite.
- C-GEO-10: Learner only counts the labelled sides of a composite shape, missing one or more interior segments that form part of the outline.
  - Required handling: misconception entry; at least one Confident question on a composite shape where one segment must be deduced.

#### Volume of cuboids (`maths-geometry-measure-volume-cuboids`)
- C-GEO-11: Learner finds the volume of a cuboid by adding the three side lengths, giving 5 + 4 + 3 = 12 cm cubed for a 5 cm by 4 cm by 3 cm box instead of multiplying.
  - Required handling: misconception entry; at least one Core question whose distractors include the add-the-sides answer.
- C-GEO-12: Learner multiplies only two of the three side lengths of a cuboid (treating it as a rectangle), labelling the result as volume.
  - Required handling: misconception entry; at least one Core question with the surface-pair area answer present as a distractor.
- C-GEO-13: Learner converts ml to litres or cm cubed to m cubed using the wrong factor (divides by 100 or 1 000 instead of 1 000 000 for cm cubed to m cubed).
  - Required handling: misconception entry; at least one Confident question on cm cubed/ml or m cubed/litre conversion.
- C-GEO-14: Learner does not link cm cubed to ml at the 1:1 ratio, treating capacity and volume as different quantities even when the units agree.
  - Required handling: misconception entry; at least one Confident question that asks the learner to read off capacity (ml or L) from a volume in cm cubed or m cubed.

### Question shape probes

- Q-GEO-1: At least one Core numeric-entry question asks the learner to find the area of a simple rectangle from its length and width in cm or m.
- Q-GEO-2: At least one Core MCQ on rectangle area includes the add-the-sides distractor.
- Q-GEO-3: At least one Confident question asks the learner to find the area of an L-shape composite by splitting into two rectangles.
- Q-GEO-4: At least one Confident question asks the learner to find a composite area by subtracting a cut-out rectangle from a larger rectangle.
- Q-GEO-5: At least one Challenge tier word problem requires recovering the area of a composite shape and then doing one further step (cost per m squared, ordering bags of topsoil, rounding up to the next whole m squared).
- Q-GEO-6: At least one Core numeric-entry question asks the learner to find the perimeter of a rectangle.
- Q-GEO-7: At least one Confident question asks the learner to find a missing side of an L-shape composite from the labelled sides, then state the perimeter.
- Q-GEO-8: At least one Confident MCQ asks the learner to compare the area and perimeter of the same rectangle, with the swap answer present as a distractor.
- Q-GEO-9: At least one Core numeric-entry question asks the learner to find the volume of a simple cuboid in cm cubed or m cubed from its three side lengths.
- Q-GEO-10: At least one Confident question asks the learner to convert cm cubed to ml (1 cm cubed = 1 ml) or m cubed to litres (1 m cubed = 1 000 litres) in a UK context (fish tank, removal box, swimming pool estimate).
- Q-GEO-11: At least one Challenge tier word problem on volume requires finding a cuboid volume and then doing one further step (capacity in litres, number of boxes that fit, water-fill time at a given rate).
- Q-GEO-12: At least one drag-order or missing-step question across the zone places composite-shape calculation steps into the right order.
- Q-GEO-13: At least one spot-misconception question presents the area-as-perimeter or volume-as-rectangle-area argument and asks whether the reasoning is sound.

### Tutor probes

- T-GEO-1: Given "I added the sides 6 + 4 = 10 m squared because the rug is 6 m by 4 m", the tutor's first reply is a Socratic prompt about whether the unit cm squared or m squared can come from adding two lengths, not a direct correction.
- T-GEO-2: Given a wrong answer matching the bounding-rectangle trigger ("L-shape area is 8 x 5 = 40 m squared"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-GEO-3: Given an off-topic input (for example a question about US-style "square feet" or "gallons"), the tutor steers back to UK KS3 metric units (cm squared, m squared, cm cubed, m cubed, ml, L) politely.
- T-GEO-4: Given a request for an inline definition (tap on "composite shape"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Numerica > Probability

Covers `maths-probability-scale`, `maths-probability-listing-outcomes`, `maths-probability-experimental`.

### Content probes

#### Probability scale 0 to 1 (`maths-probability-scale`)
- C-PROB-1: Learner gives a probability bigger than 1 (or less than 0), for example claiming "the probability is 1.2" after a run of favourable outcomes, or writing 120 percent for a single event.
  - Required handling: misconception entry; at least one MCQ in which a value outside [0, 1] appears as a distractor and one spot-misconception question that surfaces the "more than certain" claim.
- C-PROB-2: Learner conflates "impossible" with "unlikely", labelling small positive probabilities (1/50) as 0.
  - Required handling: misconception entry; at least one Core question that pins the wording (impossible / unlikely / even chance / likely / certain) to the corresponding region of the 0 to 1 line.
- C-PROB-3: Learner counts category labels rather than items in the bag, so a bag with 3 red, 4 blue and 1 green gives P(red) = 1/3 instead of 3/8.
  - Required handling: misconception entry; at least one Confident question that exposes the categories-not-items denominator slip.
- C-PROB-4: Learner does not use P(event) + P(not event) = 1 and works the complement from scratch, often producing a complement that does not sum to 1 with the original probability.
  - Required handling: misconception entry; at least one Challenge tier question that requires using the complement rule explicitly.

#### Listing outcomes and sample spaces (`maths-probability-listing-outcomes`)
- C-PROB-5: Learner forgets that two coins (or two dice) give an ordered sample space, treating HT and TH as the same outcome and listing only three outcomes for two coins instead of four.
  - Required handling: misconception entry; at least one Confident question that asks the learner to list HH, HT, TH, TT and to explain why HT and TH are different outcomes.
- C-PROB-6: Learner counts favourable outcomes from a two-event sample space without listing it first, for example claiming P(at least one head on two coins) = 1/2 because "the coin lands heads about half the time".
  - Required handling: misconception entry; at least one Confident question that requires a sample-space table or a list of all outcomes before computing the probability.
- C-PROB-7: Learner double-counts shared outcomes in a "favourable" tally (for example treating HH twice when listing P(at least one head)).
  - Required handling: misconception entry; at least one Confident question whose distractors include the double-count answer.
- C-PROB-8: Learner forgets that a UK 52-card deck has 4 suits of 13 cards (so P(heart) = 13/52 = 1/4, not 1/13 or 13/13).
  - Required handling: misconception entry; at least one Confident question on a UK 52-card deck.

#### Experimental probability and relative frequency (`maths-probability-experimental`)
- C-PROB-9: Learner concludes a coin is biased after a small run of imbalanced results (for example 8 heads out of 10 tosses).
  - Required handling: misconception entry; at least one Confident or Challenge spot-misconception question that puts the Bond 11+ classic "8 out of 10 heads, is the coin biased?" claim to the learner and asks if 10 trials is enough.
- C-PROB-10: Learner treats theoretical and experimental probability as the same quantity in all situations, expecting the experimental count to match the theoretical exactly even on small samples.
  - Required handling: misconception entry; at least one Confident question that contrasts theoretical (expected) and experimental (observed) counts after a small experiment.
- C-PROB-11: Learner does not understand the qualitative law of large numbers, so they expect more trials to produce a result further from the theoretical probability rather than closer.
  - Required handling: misconception entry; at least one Confident question that asks the learner to predict whether 60 die rolls or 600 die rolls give a relative frequency closer to 1/6.
- C-PROB-12: Learner divides the wrong way round when computing relative frequency, dividing total trials by favourable count rather than favourable count by total trials.
  - Required handling: misconception entry; at least one numeric-entry question on relative frequency that surfaces the division order.

### Question shape probes

- Q-PROB-1: At least one Core MCQ on the probability scale presents a value outside [0, 1] (such as 1.2 or 1.5) and asks the learner to identify it as not a probability.
- Q-PROB-2: At least one Core question links each of the words impossible, unlikely, even chance, likely and certain to a numeric value or range on the 0 to 1 line.
- Q-PROB-3: At least one Confident drag-order question orders three to five events from least likely to most likely.
- Q-PROB-4: At least one Confident MCQ on a single bag of counters presents the count-categories-not-items distractor.
- Q-PROB-5: At least one Challenge tier question on a complement event requires using P(event) + P(not event) = 1 to find P(not event).
- Q-PROB-6: At least one Confident question lists the four outcomes of two coins (HH, HT, TH, TT) explicitly and asks for P(at least one head).
- Q-PROB-7: At least one Confident question presents a sample-space table for two events (for example two dice or a coin and a die) and asks the learner to count favourable outcomes from it.
- Q-PROB-8: At least one Core numeric-entry question on a fair 6-sided die computes a single-event probability such as P(rolling a 6) = 1/6.
- Q-PROB-9: At least one Confident question uses a UK 52-card deck and asks for the probability of pulling a card from a suit, with the 1/4 answer present and the 1/13 distractor included.
- Q-PROB-10: At least one Confident or Challenge spot-misconception question presents the Bond 11+ classic "8 heads out of 10 tosses, is the coin biased?" claim and asks the learner to judge whether the trial count is enough.
- Q-PROB-11: At least one Confident question contrasts the theoretical count (60 / 6 = 10 sixes in 60 die rolls) with an experimental count from a small sample (for example 7 sixes in 60 rolls) and asks why the two values differ.
- Q-PROB-12: At least one Challenge tier question on relative frequency requires the learner to compute the experimental probability from a frequency table, then compare it to the theoretical probability and explain the gap qualitatively.
- Q-PROB-13: At least one Confident missing-step question places the calculation of a single-event probability (count favourable / count total / write as fraction or decimal) in the right order.

### Tutor probes

- T-PROB-1: Given "I rolled five 6s in a row, the probability of the next 6 is 1.2", the tutor's first reply is a Socratic prompt about whether a probability can sit outside the 0 to 1 scale, not a direct correction.
- T-PROB-2: Given "the coin landed heads 8 out of 10 times so it must be biased", the tutor cites the relevant misconception's `reExplanation` (small samples vary) rather than producing a fresh hint.
- T-PROB-3: Given a request for an inline definition (tap on "sample space"), the glossary returns a UK English age-12 definition under 2 seconds.
- T-PROB-4: Given an off-topic input (for example a question about US lottery odds), the tutor steers back to UK KS3 examples (school raffle, fair die, coin, UK 52-card deck) politely.

## Pending zones

The following Numerica zones are scheduled for authoring during Phase 10e+. Their eval sections will be added alongside the content drafts.

### Numerica
- Four operations
- Angle rules
- 2D and 3D shapes
- Averages and range
- Charts and graphs
