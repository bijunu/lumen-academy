# Reference Shelf

The materials Lumen Academy benchmarks its content against, with a precise note for each on what we take and what we leave. Authors must read this before drafting a node. Reviewers grade against it.

This is not a reading list. It is a list of quality signals. Each entry says: at the question, scene, or misconception level, what should our content look like once we have absorbed this source.

## How to use this

Authoring a node:

1. Read the entry for the subject you are writing.
2. Pull at least one concrete signal per primary source into your draft (for example, "Bond 11+ Maths Paper difficulty is the floor for a Challenge tier word problem on this topic").
3. Cite the source in the misconception or question note when relevant.

Reviewing a node:

1. Cross-check the draft against this shelf.
2. A node missing the lift signals from its primary sources is a Revise.

## Primary sources

### Bond 11+ Assessment Papers (Maths, Verbal Reasoning, Non-Verbal Reasoning)

Publisher: Oxford University Press / Bond. Used UK-wide for grammar school 11+ preparation.

- **Take**: difficulty floor for Challenge tier maths and reasoning. Multi-step word problems with one or two unstated intermediate steps. Distractor design where the wrong answer is the result of a specific misstep, not a random number. Compact stems that reward careful reading.
- **Leave**: timed-pressure framing. Heavy English language traps that punish slow readers more than weak reasoners.
- **Lift signal**: a Lumen Challenge tier maths question should be answerable by a strong Year 7 in roughly 90 seconds, with at least one step the learner has to infer.

### CGP KS3 study guides and workbooks (Maths, Biology, Chemistry, Physics)

Publisher: Coordination Group Publications. The default UK secondary revision shelf.

- **Take**: coverage breadth (every spec point gets a page). The "Common mistake" callout register: short, specific, written in a voice that respects the learner. The explanation tone for ages 11 to 14. Diagrams labelled with everyday analogies before the formal term arrives.
- **Leave**: the dense static-page format. The lack of interaction. The broad MCQ banks where many distractors are not pedagogically motivated.
- **Lift signal**: every misconception entry on a Lumen node should read like a CGP "Common mistake" box: name the error, name the fix, give one quick reason why it feels right but is wrong.

### DfE National Curriculum: KS3 programmes of study

Source: Department for Education, *Mathematics programmes of study: key stage 3* (2014, current). Department for Education, *Science programmes of study: key stage 3* (2014, current).

- **Take**: the verbatim wording for `curriculum.ks3Objective`. This is the statutory anchor.
- **Leave**: nothing. It is the syllabus.
- **Lift signal**: `ks3Objective` strings come from this document, lightly trimmed if needed but not paraphrased.

### AQA, Edexcel, OCR GCSE specifications

Source: each board's GCSE Mathematics, GCSE Biology, GCSE Chemistry, GCSE Physics specifications.

- **Take**: the reference codes used in the awarding-body fields. KS3 has no statutory exams, but UK secondary schemes of work mirror their chosen GCSE board's spec, and listing the GCSE refs anchors a Year 7 node to where it leads.
- **Leave**: GCSE-only depth (the learner is two years off that).
- **Lift signal**: provide refs for at least two of the three boards on every node. Where a topic only appears at GCSE Higher tier, mark it Challenge tier in Lumen.

### AQA / Edexcel / OCR examiner reports and mark schemes

- **Take**: the actual misconceptions examiners see in scripts. These are the gold source for our `misconceptions` arrays.
- **Leave**: the GCSE-specific scoring detail.
- **Lift signal**: every misconception on a Lumen node cites a source (CGP page, examiner report year and question, or a named DfE exemplar) in a code comment. Untraceable but pedagogically motivated entries are allowed up to a count of 1 per node and clearly marked as authored.

## Inspiration sources for product feel

These are not curriculum sources. They shape how the content is presented.

### Atom Learning

UK 11+/ISEB and GCSE practice platform. The closest published benchmark to Lumen's target learner profile (Year 7 entering grammar school).

- **Take**: question style and difficulty curve for 11+/ISEB-adjacent maths and English. Mark-scheme-aligned feedback that names exactly which concept was demonstrated or missed, addressed directly to the learner ("you halved instead of doubled" rather than "incorrect"). Personalised pacing that adapts to current level rather than marching every learner through the same sequence.
- **Leave**: subscription/paywall framing. Past-paper-first pedagogy (Lumen's Brilliant-style scenes go before any test format). Per-paper test framing (Lumen is mastery-paced, not test-paced). Parent-facing analytics dashboards built primarily to drive renewal.
- **Lift signal**: free-text feedback (now LLM-judged) should read like an Atom-style instant mark: one short sentence, examiner voice, name the concept the learner did or did not show. Generic "not quite" feedback is a Revise.

### Brilliant

- **Take**: scene before symbol. The lesson begins with something the learner manipulates, and notation arrives only after intuition is in place. Sliders that show how a relationship moves.
- **Leave**: US examples, US units, subscription paywall framing.
- **Lift signal**: every Lumen node has at least one interactive scene that runs before any worked example.

### Seneca Learning

- **Take**: density of questions per spec point, exam-board-aligned tagging, short cycles between read and recall.
- **Leave**: dry UI, low engagement for ages 11 to 12, lack of stretch beyond the spec.
- **Lift signal**: a Lumen node has 20 or more questions across the three tiers, comfortably more than a typical Seneca topic of equivalent breadth.

### Tassomai

- **Take**: the spaced repetition schedule shape and the interleaving of topics across daily sessions.
- **Leave**: GCSE focus, monotony of question style.
- **Lift signal**: SM-2 intervals and Daily Quest mix already in Lumen reflect this. Authoring should ensure questions are short enough to fit a daily-review pace (under 2 minutes each).

### Khan Academy

- **Take**: prerequisite graph design, mastery thresholds, the principle that you cannot unlock a node without earning the precursors.
- **Leave**: US curriculum, video-heavy delivery, weak gamification for ages 11 to 12.
- **Lift signal**: every Lumen node lists prerequisites by id, and the prerequisite chain is acyclic and walkable from a starter node in the same realm.

### Sparx Maths and MyMaths

- **Take**: many variants of the same question stem so a learner sees the structure rather than memorising the numbers. Step-out feedback that reveals the worked solution after submission.
- **Leave**: school-issued model with no learner agency, weekly homework framing.
- **Lift signal**: where a question pattern is the workhorse of a node (for example `a/b = ?/c` for equivalent fractions), include three to five varied numeric instances.

### DragonBox

- **Take**: teaching the mechanic before the symbol. The learner moves objects on screen, and only later does the algebra notation slide in over what they have been doing.
- **Leave**: limited topic coverage, ages out fast.
- **Lift signal**: for the most abstract Year 7 topics (basic algebra, ratio, BIDMAS), the first scene is a manipulation, not a definition.

## Things every Lumen node leaves on the shelf

Universal exclusions, regardless of source.

- US units (feet, miles, gallons, °F, US dollars)
- US-specific cultural references (sports, food brands, school grade names)
- Em dashes in any user-facing copy
- "All of the above" or "None of the above" MCQ options
- Trivia questions where the difficulty is recall of a name, not application of a concept
- Streak-guilt or time-on-task gamification dressed as content
- Gendered occupational stereotypes in word problems
- Any third-party tracking script in interactive scenes
