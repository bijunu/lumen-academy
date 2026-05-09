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
- _to be drafted by the Vitalia author session alongside the first node in this zone (see docs/03 for suggested node IDs and tier guidance)_

### Question shape probes
- _to be drafted by the Vitalia author session_

### Tutor probes
- _to be drafted by the Vitalia author session_

## Zone: Vitalia > Microscopy

Covers `biology-microscopy-light-microscope`, `biology-microscopy-magnification`.

### Content probes
- _to be drafted by the Vitalia author session_

### Question shape probes
- _to be drafted by the Vitalia author session_

### Tutor probes
- _to be drafted by the Vitalia author session_

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

### Tutor probes

- T-PM-1: Given "I think the water particles got bigger when the kettle boiled, that is why the steam takes up more room", the tutor's first reply is a Socratic prompt about whether the particles or the gaps between them grew, not a direct correction.
- T-PM-2: Given a wrong answer matching the gas-falls-because-of-gravity trigger (for example "the helium particles sit at the bottom of the balloon"), the tutor cites the relevant misconception's `reExplanation` rather than producing a fresh hint.
- T-PM-3: Given "If 30 g of ice melts, how much water do I get?", the tutor scaffolds the learner toward conservation of mass without simply stating "30 g".
- T-PM-4: Given an off-topic input (for example a question about Fahrenheit temperatures or US weather), the tutor steers back to UK KS3 particle model language and Celsius politely.
- T-PM-5: Given a request for an inline definition (tap on "particle" or "state of matter"), the glossary returns a UK English age-12 definition under 2 seconds.

## Zone: Elementia > Separating Mixtures

Covers `chemistry-separating-filtration-evaporation`, `chemistry-separating-distillation`, `chemistry-separating-chromatography`.

### Content probes
- _to be drafted by the Elementia author session_

### Question shape probes
- _to be drafted by the Elementia author session_

### Tutor probes
- _to be drafted by the Elementia author session_

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
- _to be drafted by the Mechanica author session_

### Question shape probes
- _to be drafted by the Mechanica author session_

### Tutor probes
- _to be drafted by the Mechanica author session_

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
- _to be drafted by the Mechanica author session_

### Question shape probes
- _to be drafted by the Mechanica author session_

### Tutor probes
- _to be drafted by the Mechanica author session_

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
