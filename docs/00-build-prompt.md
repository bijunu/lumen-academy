# Lumen Academy: Build Prompt

A UK KS3 learning app for Year 7, covering Maths, Biology, Chemistry, and Physics. Gamified, mastery first, parent visible, safe by design. Web app, desktop primary.

> Source: planning conversation, May 2026. Merged from initial design plan plus SciRevise v3 feature exploration. Updated for desktop first delivery.

---

## Goal

Build a gamified web learning app for an 11 to 12 year old UK secondary school learner (Year 7, Kent grammar school) covering Maths, Biology, Chemistry, and Physics. Fully aligned to the UK National Curriculum at Key Stage 3, with cross references to AQA, Edexcel, and OCR, and a stretch tier reaching early KS4 and 11+ style reasoning. The app must feel like a game first and a tutor second, while teaching genuine mastery.

## Target user

Year 7 student at a Kent grammar school, working at a family computer. Sessions of 15 to 45 minutes after school and at weekends. Reliable home internet. Parent (the account holder) wants a weekly digest and basic controls.

## Platform decision

- **Primary**: web app on a laptop or desktop computer, viewport 1280px and up. This is where real study happens.
- **Secondary**: iPad in landscape, supported but not optimised for. The same web app loads, layout adapts, but new feature design assumes mouse and keyboard.
- **Tertiary**: phone, parent dashboard works, learner side is glossary lookup and progress check only. No full study sessions on phone.

Single Next.js codebase. No native apps. PWA installable for a desktop dock icon and offline glossary cache.

## Non goals

No advertising. No in app purchases. No open chat with strangers. No leagues. No US curriculum content. No infinite scroll. No streak guilt mechanics. No grinding rewards. No native mobile apps in v1. No phone optimised study sessions.

---

## Curriculum coverage (Year 7)

Build skill trees for the following, with each node tagged to a National Curriculum KS3 objective and to AQA, Edexcel, and OCR equivalents.

**Maths**: place value, four operations, factors and multiples, primes, fractions, decimals, percentages, ratio and proportion, BIDMAS, basic algebra, sequences, coordinates, angle rules, 2D and 3D shapes, perimeter, area, volume, averages and range, probability basics, charts and graphs.

**Biology**: cells, microscopy, body systems, reproduction, variation and classification, ecosystems and food webs, photosynthesis basics.

**Chemistry**: particle model, separating mixtures, atoms elements compounds, periodic table, acids and alkalis, pH, simple reactions.

**Physics**: forces, gravity and weight vs mass, energy stores and transfers, electricity and circuits, waves, space.

Each topic has Core, Confident, and Challenge tiers. Challenge includes 11+ style reasoning and early KS4 stretch.

---

## Pedagogical model

1. Concept introduction through an interactive scene (drag, scrub, rotate, sketch) before any symbols. Scenes use SVG and Canvas, with WebGL for the few 3D moments (cell anatomy, solar system).
2. Worked example with one step revealed at a time.
3. Guided practice with tiered AI Socratic hints (nudge, partial, full worked).
4. Independent practice with mixed question formats.
5. Misconception aware feedback. Wrong answers map to known misconceptions and trigger targeted re explanation.
6. Mastery measured by retention over time, using SM 2 style spaced repetition across sessions, plus in session reshuffle for cards marked unsure.

---

## Layout and information architecture (desktop)

Three pane layout at 1280px and up.

- **Left sidebar (240px)**: realm navigation (Numerica, Vitalia, Elementia, Mechanica), Home, Profile, Glossary, Parent link
- **Main canvas (flexible)**: the active scene, question, skill tree map, or dashboard
- **Right rail (360px, collapsible)**: AI tutor panel, hint history, current node info

Below 1024px (iPad portrait, small laptops), right rail collapses to an overlay triggered by a button. Below 768px (phone), the layout falls back to a single column read only summary view, since this is not a study surface.

### Home screen modules

Two column grid on desktop.

- **Today's Quest** (large card, left): 3 mixed tasks, server locked per UTC day
- **Continue Adventure** (large card, right): resume current zone with realm artwork
- **Daily Challenge** (small card): one bonus question, 25 XP, anti refresh enforced server side
- **Weak Spots** (small card): three topics surfaced by spaced repetition, framed as ready for another go
- **Streak strip** (full width along the bottom): last 14 days as dots
- **Subject progress bars** (under the strip): four bars, one per realm, click to jump to that skill tree

---

## Gamification model

Setting: Lumen Academy with four realms.

- **Numerica** for maths
- **Vitalia** for biology
- **Elementia** for chemistry
- **Mechanica** for physics

Player is a Scholar.

### Mechanics

- XP weighted by tier (Core, Confident, Challenge) and first try success
- Scholar Rank per realm and overall
- Skill tree per realm rendered as a pannable, zoomable map (the desktop canvas makes this genuinely useful, not a vertical list)
- Mastery stars per node (bronze to platinum) tied to retention
- Boss battles at zone end (cross node synthesis), full screen takeover for atmosphere
- Insight (soft currency) for hints and cosmetics. Spark (rare currency) earned only, never purchasable
- Avatar customisation, evolving companion creature visible in a corner of the main canvas
- Unlockable realm themes (changes the visual atmosphere of the realm)
- Mini games as breaks: Atom Sort, Force Balance, Cell Quest, Equation Sprint
- Daily Quest, Daily Challenge, Weekly Challenge, Monthly Expedition story chapter
- Streak with one auto freeze per week, 14 day calendar view, no guilt notifications
- Confetti only on perfect scores, badge unlocks, mastery upgrades, boss defeats
- Sound effects toggleable, off by default. Optional ambient music per realm.
- No hearts or lives. Wrong answers route to guided rewind.

### Keyboard shortcuts

A grammar school student will pick these up fast and feel competent.

- `1` to `9`: pick answer option N
- `Enter` or `Space`: submit
- `H`: open or focus tutor for a hint
- `N`: next question
- `R`: rewind to the last scene
- `G`: open glossary search
- `Esc`: close any open panel
- `?`: show shortcut help overlay

### Badges (12)

Reward learning behaviour, not presence or grinding.

1. **First Light**: complete your first interactive scene
2. **Curious Mind**: define 10 words using the inline glossary
3. **Bounce Back**: master a node you previously failed
4. **Polymath**: master at least one node in each of the four realms
5. **Deep Diver**: earn platinum mastery on 5 nodes
6. **Boss Tamer**: defeat your first boss
7. **Realm Walker**: complete a full zone in any realm
8. **Stretch Scholar**: complete 10 Challenge tier questions
9. **Steady Hand**: improve a topic trend chart for 3 sessions in a row
10. **Quest Keeper**: complete Daily Quest 10 days in any 14 day window
11. **Misconception Hunter**: correctly answer 5 spot the misconception questions
12. **Lumen Scholar**: earn Scholar Rank 10 across all four realms

---

## Question and interaction types

Desktop input lets these be richer than a phone version.

- Tap or click to select
- Drag to order or sort, with hover previews
- Slider scrub to explore relationships (ratio, gravity strength, current vs voltage)
- Free numeric entry with keyboard
- Sketch on a coordinate grid for graphs (mouse, trackpad, or iPad finger)
- Drag and drop builders with parts palette (cells from organelles, circuits from components, balanced equations from formulas, food webs from organisms)
- Spot the misconception (reasoning question)
- Worked example with one missing step
- Scenario with data extraction from a chart or paragraph
- 3D rotate (cell, solar system, molecular shapes) using mouse drag

---

## Feedback and progress views

- **Skill tree per realm**: visual map with pan and zoom, unlocked nodes glow, mastery shown via star count, prerequisites shown as edges
- **Subject progress bars** in profile and on home
- **Topic trend charts** showing score over time per topic, line chart with last 10 sessions
- **Weak Spots** module on home
- **Mastery upgrade animations** (modest, not slot machine)
- **Session summary** at the end of each study session: nodes touched, mastery moved, time spent, suggested next session

---

## Tools

- **Inline word definitions**: tap or hover any term in a question for an AI generated definition, example sentence, and related terms (UK English, age 12 reading level, Claude Haiku)
- **Glossary search** across all four subjects, accessible by `G` shortcut from anywhere
- **Notes view** generated on demand from the learner's mastery gaps
- **Spaced repetition flashcards** with both in session reshuffle and cross session SM 2 scheduling
- **Text to speech** on questions, notes, and flashcards using the browser's Web Speech API, UK English voice, off by default
- **Focus mode**: PWA install hides browser chrome, full screen Lumen Academy world, optional ambient music

---

## Personalisation

First run diagnostic sets starting position per subject. Adaptive difficulty within each node. Daily Quest selection prefers nodes due for spaced review plus one new node. Subject focus week setting (parent or learner can pick) biases content selection.

---

## AI tutor

Anthropic Claude API. Sonnet for tutor, Haiku for inline classification and glossary. Scoped per node. Lives in the right rail on desktop. System prompt enforces:

- Never give the answer directly on first hint
- Use Socratic prompts and analogies appropriate for age 12
- UK English, UK examples, metric units, GBP
- Refuse off topic conversation, steer back politely
- Detect frustration (multiple wrong attempts plus negative sentiment) and offer a break or an easier sibling node
- Log frustration signal to parent digest if it crosses threshold

See companion file: `lumen-academy-tutor-system-prompt.md`

---

## Parent layer

Same Next.js app, separate authenticated route at `/parent`. Works equally well on phone or desktop, since parents check briefly rather than studying.

- Weekly digest email with time on app, mastery progress per realm, struggling topics, suggested home conversation prompts
- Settings: daily time cap, curfew, subject focus week
- Time tracking visible to parent only, not gamified for the learner
- No real time location or behaviour tracking

---

## Safety, privacy, accessibility

UK GDPR and ICO Age Appropriate Design Code. Parental email verified onboarding. Data minimisation. No third party behavioural ad tracking. WCAG 2.2 AA. Light and dark mode (default system), high contrast option, dyslexia friendly font option (OpenDyslexic available as a toggle). Keyboard navigation throughout. Visible focus rings.

---

## Tech stack

- **Frontend**: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui, single codebase serving learner app and parent dashboard
- **Interactive scenes**: SVG for most diagrams and animations, HTML Canvas for performance heavy 2D, react-three-fiber (Three.js) for the few 3D moments
- **Charts**: Recharts for trend lines and progress bars
- **Backend**: Next.js API routes for the standard CRUD, separate Node.js worker for spaced repetition scheduling and digest generation
- **Database**: MongoDB Atlas for content and progress, Redis for session state and Daily Challenge anti refresh locks
- **AI**: Anthropic Claude API (Sonnet for tutor, Haiku for glossary and classification)
- **Auth**: Clerk or Auth.js with parental verification flow
- **Analytics**: Plausible or Umami, self hosted, no third party trackers
- **Hosting**: Vercel for the Next.js app, MongoDB Atlas managed, Upstash Redis
- **PWA**: installable for desktop dock icon and offline glossary

---

## Content schema (sketch)

```ts
type SkillNode = {
  id: string
  subject: 'maths' | 'biology' | 'chemistry' | 'physics'
  realm: 'numerica' | 'vitalia' | 'elementia' | 'mechanica'
  zoneId: string
  tier: 'core' | 'confident' | 'challenge'
  prerequisites: string[]
  curriculum: {
    ks3Objective: string
    awardingBodies: { aqa?: string; edexcel?: string; ocr?: string }
  }
  scenes: InteractiveScene[]
  workedExamples: WorkedExample[]
  questions: Question[]
  misconceptions: Misconception[]
  masteryRule: { streak: number; spacedReviewDays: number[] }
}
```

---

## Build sequence

1. Next.js project setup with Tailwind, shadcn/ui, auth, MongoDB Atlas, basic three pane layout shell
2. Content schema and authoring tooling
3. Vertical slice: one Year 7 maths node end to end (equivalent fractions), all interaction types, AI tutor in right rail, mastery, spaced repetition, glossary inline, parent digest sample, keyboard shortcuts
4. Mastery and spaced repetition engine
5. Skill tree map UI for one realm (pan, zoom, prerequisite edges)
6. Gamification layer (XP, currency, avatar, companion, badges)
7. Boss battle full screen mode and Daily Quest plus Daily Challenge
8. Topic trend charts, Weak Spots, Streak strip
9. Parent dashboard route and digest email pipeline
10. Authoring of full Year 7 content for all four subjects
11. PWA install and offline glossary
12. Beta with the target learner, iterate

---

## Acceptance criteria for the first vertical slice

- A Year 7 learner opens the web app on the family computer, signs in, and completes a 15 minute session on equivalent fractions, hits a misconception, gets a Socratic hint from the AI tutor in the right rail, finishes with bronze mastery, sees her score on the topic trend chart, and wants to come back tomorrow
- All keyboard shortcuts work, including `1` to `9` answer selection and `H` for hint
- Daily Challenge cannot be reset by refreshing or reinstalling
- Glossary inline definitions return in under 2 seconds and are age 12 appropriate UK English
- The parent receives a sample weekly digest by email
- All UK English, GBP, metric, no US examples anywhere
- No ads, no purchases, no third party behavioural tracking
- Loads and runs comfortably on a modest family computer (target 4GB RAM, integrated graphics)

---

## Visual direction

Warm, painterly illustration. Slight Studio Ghibli influence in Vitalia. Clean geometric for Numerica. Glowing alchemical for Elementia. Blueprint and brass for Mechanica. Avoid Fortnite, Roblox, or overly cute aesthetics. A Year 7 grammar school student will reject anything that feels childish.

Desktop scale lets you do justice to the realm artwork. Skill trees are illustrated maps, not bullet lists. Boss battles take the full viewport. The companion creature lives in a corner of the canvas, animated subtly when the Scholar is working.

Type at 16 to 18px body, generous line height, plenty of whitespace. Two column layouts where the content allows. Hover states matter again now that mouse is primary.

---

## Inspiration analysis (reference)

| App | Take | Leave |
|---|---|---|
| Brilliant | Bite sized interactive lessons, visual proofs, scrubbing and tapping rather than typing, focus on intuition before formalism, desktop layout done well | US examples, no UK syllabus mapping, subscription model with no parent dashboard |
| Duolingo | Streaks, gems, leagues, character cast, daily quests | Heavy push notifications and dark patterns, ad model, leagues pressure, mobile centric |
| Prodigy Maths | Full RPG wrapper, battles powered by maths questions, pet collection | US Common Core alignment, paywall gating, combat themes |
| DragonBox | Concept first, symbol later, mechanics that teach algebra without telling you | Limited topic coverage, ages out fast |
| Seneca Learning | UK syllabus alignment, exam board specific, smart revision algorithm, web first | Drier UI, no real gamification, weak for ages 11 to 12 |
| Sparx Maths and MyMaths | Trusted by UK schools, homework integration, web based | School issued only, no choice for the learner |
| Tassomai | Spaced repetition done right for UK science | GCSE focused, not KS3 |
| KnowUnity | Peer notes, social study layer | Not safe for under 13 |
| Khan Academy | Mastery learning, knowledge map, web first done well | US curriculum, not gamified enough for this age |

**Synthesis**: the gap to fill is a UK KS3 curriculum native, mastery first, lightly RPG wrapped web app, with grammar school stretch content, parent visibility, desktop quality interactive scenes, and zero unsafe social features.
