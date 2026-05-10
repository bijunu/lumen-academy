# Codex review prompt

Copy the body below into `codex "..."` verbatim. The agent definition lives in `./codex-review/AGENTS.md`; read that first for role, scope, and product calibration.

---

You are reviewing the Lumen Academy codebase as a senior architect giving a second opinion. Read `./codex-review/AGENTS.md`, `./codex-review/FOCUS.md`, `./codex-review/SNAPSHOT.md`, and `./codex-review/SCHEMA.json` before you start. You may read any file in the repo. You may write only to `./codex-review/REVIEW.md` and `./codex-review/review.json`. Do not run any commands beyond file reads and directory listing. Do not edit source. Do not commit.

Work in three phases and produce them in this order inside `REVIEW.md`.

## Phase 1: System map (required before any findings)

Before you list a single problem, write a section titled `## System map` that demonstrates you have actually read the code. Include:

1. The route surface: every route group and route under `src/app/`, what it renders, and which routes require auth.
2. The data layer: every collection in MongoDB, the repository module that owns it, and the indexes declared in `src/lib/db/ensureIndexes.ts`.
3. The API surface: every route under `src/app/api/`, its method, what it validates, what it writes, and which collections it touches.
4. The domain modules: `src/lib/{mastery,scholar,badges,boss,dailyChallenge,dailyQuest,skillTree,progress,gamification}`. For each, one sentence on what it owns and which other modules call it.
5. The content pipeline: how a skill node travels from `src/content/seed/**` through the seeder into Atlas and out to a learner page.
6. The reward loop: trace one correct answer from the question component all the way to a badge being stamped, naming every function on the path.

If you cannot complete any of those six bullets from the code, say so explicitly in that bullet. Do not fabricate.

## Phase 2: Findings

Write a section titled `## Findings`. Each finding is a heading of the form `### [ID] [SEVERITY] short title` followed by a body. Use these rules:

- **id**: stable string, format `LA-001`, `LA-002`, ascending. Reuse the same id in `review.json`.
- **area**: one of `auth`, `data`, `api`, `content`, `learning-loop`, `gamification`, `ui`, `build`, `tests`, `security`, `accessibility`, `performance`, `observability`, `docs`, `other`. Pick one.
- **severity**: `H`, `M`, or `L`. Calibrate to the product stage in `AGENTS.md`. A theoretical 100k-user concurrency bug is not High at one learner.
- **file** and **line**: the most representative location. If the finding spans many files, name the canonical one and list the others in the body.
- **problem**: what is wrong, in one short paragraph. State the observable consequence, not just "this is unusual".
- **recommendation**: the smallest change that resolves it. No rewrites. If two paths exist, pick one and say why. If you cannot recommend a fix without more context, say so and describe the question you would ask the author.
- **effort**: `S` (under an hour), `M` (half a day), `L` (multi-day). Estimate honestly for one engineer.
- **confidence**: `high`, `medium`, `low`. Use `low` when you are inferring from partial reading; do not pretend to high confidence on code you only skimmed.

Forbidden behaviours:

- No "rewrite this module" recommendations.
- No "consider adopting framework X" recommendations unless the dependency is already in `package.json`.
- No findings whose only basis is "I would have done it differently". A finding must point at a concrete failure mode, present or near-future.
- No restating of the conventions in `AGENTS.md` as findings.

If you have fewer than five things to say, say fewer than five things. A short, honest review beats a padded one.

## Phase 3: What I did NOT examine

Write a section titled `## Coverage and gaps`. Be specific:

- Files or directories you did not open, and why (time, irrelevance, opacity).
- Behaviours you could not assess from static reading alone (anything that needs a running DB, a real Anthropic key, or a browser).
- Assumptions you made that the author should sanity-check.

A reviewer who lies about coverage is worse than one who reads less. Be candid.

## review.json

Mirror the same content into `./codex-review/review.json`, validated by `./codex-review/SCHEMA.json`. Top-level shape:

```json
{
  "snapshot": { "commit": "<sha from SNAPSHOT.md>", "branch": "main", "reviewedAt": "<ISO 8601 UTC>" },
  "systemMap": { "summary": "<2-3 sentence prose summary>", "completeness": "full" | "partial" },
  "findings": [ { "id": "LA-001", "area": "...", "severity": "H", "file": "...", "line": 0, "problem": "...", "recommendation": "...", "effort": "S", "confidence": "high" } ],
  "notExamined": [ "<bullet>", "<bullet>" ]
}
```

Keep prose UK English. No em dashes. Do not paste large source excerpts into either file; cite by `file:line` and let the author open it.

When both files are written, stop. Do not summarise to me in chat; the artefacts are the deliverable.
