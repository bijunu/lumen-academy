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

## Pending zones

The following zones are scheduled for authoring during Phase 10e+. Their eval sections will be added alongside the content drafts.

### Numerica
- Four operations
- Percentages
- Ratio and proportion
- BIDMAS
- Basic algebra
- Sequences
- Coordinates
- Angle rules
- 2D and 3D shapes
- Perimeter, area, volume
- Averages and range
- Probability basics
- Charts and graphs

### Vitalia
- Cells
- Microscopy
- Body systems
- Reproduction
- Variation and classification
- Ecosystems and food webs
- Photosynthesis basics

### Elementia
- Particle model
- Separating mixtures
- Atoms, elements, compounds
- Periodic table
- Acids and alkalis
- pH
- Simple reactions

### Mechanica
- Forces
- Gravity, weight, mass
- Energy stores and transfers
- Electricity and circuits
- Waves
- Space
