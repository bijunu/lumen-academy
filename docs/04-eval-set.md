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

Covers `maths-fractions-what-is`, `maths-fractions-equivalent`, `maths-fractions-simplify`, plus future fraction-arithmetic nodes.

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

### Question shape probes

- Q-FRAC-1: At least one Challenge tier word problem requires recognising equivalent fractions inside a multi-step calculation (recipe scaling, money sharing, ingredient proportions).
- Q-FRAC-2: At least one Confident MCQ has all four options as valid equivalent fractions of different anchor fractions, so the question tests selection rather than generation.
- Q-FRAC-3: At least one numeric entry asks for a missing numerator or denominator in `a/b = ?/c` form.
- Q-FRAC-4: At least one spot-misconception question presents a learner's reasoning and asks whether the method is sound.
- Q-FRAC-5: At least one drag-order question places fractions in size order using a mix of simple and equivalent forms.
- Q-FRAC-6: At least one numeric entry asks the learner to simplify a fraction whose simplest form is not visually obvious (for example 24/36 to 2/3).
- Q-FRAC-7: At least one Challenge tier MCQ tests recognising fractions greater than one whole (improper fractions), with distractors that include valid proper fractions.

### Tutor probes

- T-FRAC-1: Given "I think 1/2 and 1/3 are the same because they both have a 1 on top", the tutor's first reply is a Socratic prompt about what the bottom number represents, not a direct correction.
- T-FRAC-2: Given a wrong answer matching the additive misconception trigger (for example `2/3 = 4/5`), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-FRAC-3: Given "Can you just give me the answer?", the tutor declines and offers a scaffolded next step.
- T-FRAC-4: Given an off-topic input (for example a question about US dollar prices), the tutor steers back to fractions politely.
- T-FRAC-5: After three wrong attempts in a row paired with negative sentiment, the tutor offers a break or an easier sibling node and the frustration signal is logged for the parent digest.
- T-FRAC-6: Given a request for an inline definition (tap on "denominator"), the glossary returns a UK English age-12 definition under 2 seconds.

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

## Zone: Numerica > Decimals

Covers `maths-decimals-place-value` plus future decimal nodes (decimal arithmetic, decimal-fraction-percentage equivalence, ordering and rounding decimals).

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

### Question shape probes

- Q-DEC-1: At least one MCQ asks the learner to name the column for a specified digit after the decimal point in a 3-or-more-decimal-place number.
- Q-DEC-2: At least one comparison or ordering question pairs decimals of different lengths where the longer one is smaller (longer-bigger trap).
- Q-DEC-3: At least one numeric-entry question requires writing a decimal whose simplest form includes a placeholder zero (for example 7/100 = 0.07).
- Q-DEC-4: At least one MCQ on fraction-to-decimal conversion includes the stacked-digits answer as a distractor.
- Q-DEC-5: At least one Challenge tier word problem requires comparing or ordering decimals in a UK context (race times, ribbon lengths, money to pence).
- Q-DEC-6: At least one spot-misconception question presents a longer-bigger or trailing-zero argument and asks whether the reasoning is sound.

### Tutor probes

- T-DEC-1: Given "0.785 must be bigger than 0.8 because it has more digits", the tutor's first reply is a Socratic prompt about column-by-column comparison, not a direct correction.
- T-DEC-2: Given a wrong answer matching the half-as-0.2 trigger, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-DEC-3: Given "Why is 0.5 the same as 0.50?", the tutor explains using a fraction-wall analogy, not a definition.
- T-DEC-4: Given an off-topic input (for example a question about US dollar prices to two decimal places), the tutor steers back to UK pence and decimal place value politely.
- T-DEC-5: Given a request for an inline definition (tap on "thousandths"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Numerica > Percentages

Covers `maths-percentages-as-decimals-fractions` plus future percentages nodes (percentage of an amount, percentage change, reverse percentages).

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

### Question shape probes

- Q-PCT-1: At least one question asks the learner to convert a common percentage (50%, 25%, 75%, 10%, 20%, 1%, 5%, 12.5%, 33⅓%) to a decimal or simplest-form fraction in numeric or MCQ form.
- Q-PCT-2: At least one question asks the learner to convert a fraction with denominator 100 to a percentage by direct reading.
- Q-PCT-3: At least one question requires converting a fraction with a non-100 denominator (eighths, fifths, twentieths) to a percentage via equivalent fractions over 100.
- Q-PCT-4: At least one Challenge tier word problem requires comparing or ordering across mixed forms (percent vs fraction vs decimal) in a UK context (test scores, retail discounts, sports stats).
- Q-PCT-5: At least one MCQ on fraction-to-percent conversion includes the stacked-digits answer as a distractor.
- Q-PCT-6: At least one spot-misconception question presents the per-cent-as-number or stacked-digits argument and asks whether the reasoning is sound.
- Q-PCT-7: At least one Challenge tier question recognises a percentage greater than 100% as valid (for example, an exam score reported above 100% on a re-scaled mark scheme, or a doubled quantity expressed as 200%).

### Tutor probes

- T-PCT-1: Given "Why is 50% bigger than 1/4? They both have small numbers", the tutor's first reply is a Socratic prompt about converting both to the same form, not a direct correction.
- T-PCT-2: Given a wrong answer matching the decimal-shift trigger (for example "35% = 3.5"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-PCT-3: Given an off-topic input (for example a question about US sales tax percentages), the tutor steers back to UK percentage forms politely.
- T-PCT-4: Given a request for an inline definition (tap on "per cent"), the glossary returns a UK English age-12 definition under 2 seconds.

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

### Question shape probes

- Q-BID-1: At least one MCQ asks the learner to evaluate a two-operation expression `a + b × c` or `a − b × c`, with the strict-left-to-right answer present as a distractor.
- Q-BID-2: At least one numeric-entry question asks the learner to evaluate a two-operation expression where the conventionally lower-precedence operation appears to the left.
- Q-BID-3: At least one question asks the learner to evaluate an expression with brackets where the brackets change the result.
- Q-BID-4: At least one question asks the learner to evaluate an expression with one index (square or cube) where the index applies to a single factor inside a product.
- Q-BID-5: At least one drag-order question asks the learner to put the BIDMAS evaluation steps for a mixed expression into the correct order.
- Q-BID-6: At least one missing-step question hides one BIDMAS step in a worked solution and asks the learner to fill it in.
- Q-BID-7: At least one Challenge tier word problem asks the learner to construct a BIDMAS expression from a UK context (transport fares, tuck shop totals, sports scoring) and then evaluate it.
- Q-BID-8: At least one spot-misconception question presents a strict-left-to-right or wrong-base-exponent argument and asks whether the reasoning is sound.

### Tutor probes

- T-BID-1: Given "Why doesn't BIDMAS just mean go in that exact order — divide before multiply?", the tutor's first reply explains that division and multiplication share a tier and run left to right, not a definition dump.
- T-BID-2: Given a wrong answer matching the strict-left-to-right trigger (for example "6 + 4 × 3 = 30"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-BID-3: Given an off-topic input (for example a question about US calculator brand BIDMAS settings), the tutor steers back to UK KS3 order-of-operations conventions politely.
- T-BID-4: Given a request for an inline definition (tap on "indices"), the glossary returns a UK English age-12 definition under 2 seconds.

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
- _to be drafted by the Vitalia author session_

### Question shape probes
- _to be drafted by the Vitalia author session_

### Tutor probes
- _to be drafted by the Vitalia author session_

## Zone: Vitalia > Reproduction

Covers `biology-reproduction-flowering-plant`, `biology-reproduction-human-overview`.

### Content probes
- _to be drafted by the Vitalia author session_

### Question shape probes
- _to be drafted by the Vitalia author session_

### Tutor probes
- _to be drafted by the Vitalia author session_

## Zone: Vitalia > Variation and Classification

Covers `biology-variation-continuous-discontinuous`, `biology-classification-five-kingdoms`.

### Content probes
- _to be drafted by the Vitalia author session_

### Question shape probes
- _to be drafted by the Vitalia author session_

### Tutor probes
- _to be drafted by the Vitalia author session_

## Zone: Vitalia > Ecosystems and Food Webs

Covers `biology-ecosystems-food-chains`, `biology-ecosystems-food-webs`.

### Content probes
- _to be drafted by the Vitalia author session_

### Question shape probes
- _to be drafted by the Vitalia author session_

### Tutor probes
- _to be drafted by the Vitalia author session_

## Zone: Vitalia > Photosynthesis

Covers `biology-photosynthesis-overview`, `biology-photosynthesis-rate`.

### Content probes
- _to be drafted by the Vitalia author session_

### Question shape probes
- _to be drafted by the Vitalia author session_

### Tutor probes
- _to be drafted by the Vitalia author session_

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

### Tutor probes

- T-SM-1: Given "I will use filter paper to take the salt out of saltwater", the tutor's first reply is a Socratic prompt about whether the salt has dissolved or stayed as visible lumps, not a direct correction.
- T-SM-2: Given a wrong answer matching the "the water stays in the basin and the salt evaporates" trigger, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-SM-3: Given "After filtering 100 g of muddy water and getting 80 g of filtrate, where did the missing 20 g go?", the tutor scaffolds the learner toward conservation of mass without simply stating the residue mass.
- T-SM-4: Given an off-topic input (for example a question about US units or a different subject), the tutor steers back to UK KS3 separating-mixtures language and metric units politely.
- T-SM-5: Given "if I distil a 50:50 ethanol and water mixture I will get pure ethanol in the beaker", the tutor's first reply is a Socratic prompt about whether a column is in use, not a flat correction.
- T-SM-6: Given a wrong answer matching the "salt evaporates with the water during distillation" trigger, the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.

## Zone: Elementia > Atoms, Elements, Compounds

Covers `chemistry-atoms-elements-compounds-basics`, `chemistry-atoms-symbols-formulae`.

### Content probes
- _to be drafted by the Elementia author session_

### Question shape probes
- _to be drafted by the Elementia author session_

### Tutor probes
- _to be drafted by the Elementia author session_

## Zone: Elementia > Periodic Table

Covers `chemistry-periodic-table-layout`, `chemistry-periodic-table-group-1-7`.

### Content probes
- _to be drafted by the Elementia author session_

### Question shape probes
- _to be drafted by the Elementia author session_

### Tutor probes
- _to be drafted by the Elementia author session_

## Zone: Elementia > Acids and Alkalis

Covers `chemistry-acids-alkalis-common`, `chemistry-acids-alkalis-neutralisation`.

### Content probes
- _to be drafted by the Elementia author session_

### Question shape probes
- _to be drafted by the Elementia author session_

### Tutor probes
- _to be drafted by the Elementia author session_

## Zone: Elementia > pH

Covers `chemistry-ph-scale`, `chemistry-ph-strong-weak`.

### Content probes
- _to be drafted by the Elementia author session_

### Question shape probes
- _to be drafted by the Elementia author session_

### Tutor probes
- _to be drafted by the Elementia author session_

## Zone: Elementia > Simple Reactions

Covers `chemistry-simple-reactions-combustion`, `chemistry-simple-reactions-acid-metal`.

### Content probes
- _to be drafted by the Elementia author session_

### Question shape probes
- _to be drafted by the Elementia author session_

### Tutor probes
- _to be drafted by the Elementia author session_

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

### Question shape probes

- Q-FO-1: At least one labelled-image question on the forces-types node has the learner place names ("Weight", "Normal contact", "Friction", "Air resistance", "Upthrust", "Tension", "Magnetic", "Electrostatic") onto a gallery diagram, with a label pool no larger than twice the hotspot count. (Covers `physics-forces-types`.)
- Q-FO-2: At least three core multiple-choice questions on the forces-types node each show one everyday UK situation and ask the learner to pick the named force, with distractors drawn from neighbouring forces (tension vs upthrust, friction vs air resistance). (Covers `physics-forces-types`.)
- Q-FO-3: At least one Confident drag-order or missing-step question walks the learner through naming all the forces on a moving object (cyclist, swimmer, or sledge). (Covers `physics-forces-types`.)
- Q-FO-4: At least one Challenge tier multi-step word problem on the forces-types node maps a UK context (Tube carriage, school field, garden swing, kitchen ceiling hook) onto a free-body force list including a non-contact force and at least two contact forces. (Covers `physics-forces-types`.)
- Q-FO-5: At least one labelled-image question on the forces-balanced node has the learner place named forces (with their direction) on a free-body diagram of a stationary or constant-velocity object. (Covers `physics-forces-balanced`.)
- Q-FO-6: At least one Confident or Challenge multiple-choice question on the forces-balanced node uses a pair of arrow lengths (e.g. 30 N right, 20 N left) and asks for the net force value and direction. (Covers `physics-forces-balanced`.)
- Q-FO-7: At least one spot-misconception question on the forces-balanced node presents the "balanced means stopped" or "needs a force to keep moving" argument and asks if the method is sound. (Covers `physics-forces-balanced`.)

### Tutor probes

- T-FO-1: Given "I think gravity is a contact force because I am stood on the ground", the tutor asks the learner whether the Earth still pulls a diver in mid-air, before stating the rule.
- T-FO-2: Given a wrong answer matching the air-resistance-only-falls trigger (for example "A car on a flat road has no air resistance"), the tutor cites the relevant misconception's `reExplanation` and offers a Tube carriage or cycling example.
- T-FO-3: Given "If two forces are balanced, does the object stop?", the tutor walks the learner through the difference between zero net force on a stationary object and zero net force on a moving object, using a coasting puck as a concrete example.
- T-FO-4: Given an off-topic input (for example a question about US football tackling forces), the tutor steers back to KS3 UK Physics examples (Tube, cycling, garden, swimming pool).
- T-FO-5: Given a request for an inline definition (tap on "tension" or "upthrust"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Mechanica > Gravity, Weight, Mass

Covers `physics-gravity-mass-vs-weight`, `physics-gravity-weight-calculation`.

### Content probes
- _to be drafted by the Mechanica author session_

### Question shape probes
- _to be drafted by the Mechanica author session_

### Tutor probes
- _to be drafted by the Mechanica author session_

## Zone: Mechanica > Energy Stores and Transfers

Covers `physics-energy-stores`, `physics-energy-transfers`, `physics-energy-efficiency`.

### Content probes
- _to be drafted by the Mechanica author session_

### Question shape probes
- _to be drafted by the Mechanica author session_

### Tutor probes
- _to be drafted by the Mechanica author session_

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

Covers `physics-waves-anatomy`, `physics-waves-sound-light`.

### Content probes
- _to be drafted by the Mechanica author session_

### Question shape probes
- _to be drafted by the Mechanica author session_

### Tutor probes
- _to be drafted by the Mechanica author session_

## Zone: Mechanica > Space

Covers `physics-space-solar-system`, `physics-space-day-night-seasons`.

### Content probes
- _to be drafted by the Mechanica author session_

### Question shape probes
- _to be drafted by the Mechanica author session_

### Tutor probes
- _to be drafted by the Mechanica author session_

## Pending zones

The following Numerica zones are scheduled for authoring during Phase 10e+. Their eval sections will be added alongside the content drafts.

### Numerica
- Four operations
- Angle rules
- 2D and 3D shapes
- Perimeter, area, volume
- Averages and range
- Probability basics
- Charts and graphs
