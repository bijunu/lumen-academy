# Codex review action plan

Source: `/Users/bijunupadincharayil/lumen-academy-review/codex-review/REVIEW.md` + `review.json`. Reviewed at commit `0fbef97e`; all six findings reproduce on `main` as of `fae78f0` (verified 2026-05-09).

**Why:** Codex flagged one H + four M + one L issue. Two of the M findings (LA-001, LA-002) let renderer bugs or hand-crafted requests poison the single learner's mastery map. LA-004 is the only one with external blast radius (Anthropic spend on a public Railway URL).

**How to apply:** Work through sessions A→B→C in order, one per session per CLAUDE.md "one concern per session" rule. Don't bundle.

## Findings (verified)

| ID | Sev | File | Summary |
|---|---|---|---|
| LA-001 | H | `src/app/api/progress/attempt/route.ts:45` | Trusts client `correct: boolean`; persists before content lookup |
| LA-002 | M | `src/app/api/boss/[zoneId]/route.ts:156` | Boss POST never compares answers to `attempt.questions` |
| LA-003 | M | `src/lib/content/index.ts:15` | Silent fallback to `LocalContentRepository` (fractions only) if `MONGODB_URI` absent |
| LA-004 | M | `src/app/api/tutor/route.ts:5` + `src/app/api/glossary/route.ts` | No auth, no zod; paid LLM calls on public URL |
| LA-005 | L | `src/components/skillTree/SkillTreeMap.tsx:68` | `preventDefault()` on every wheel; no keyboard zoom |
| LA-006 | M | `src/lib/progress/client.ts:31` | `postAttempt`/`postSession` collapse all failures to `null` silently |

## Codex gaps to fold in

- **Daily-challenge POST has the same bug as LA-001.** `dailyChallengeAttemptSchema = z.object({ correct: z.boolean() })` in `src/lib/progress/schemas.ts:47`. Submitting `{correct: true}` mints 25 XP + 1 Insight, gated only by once-per-day uniqueness. Fold into Session A.
- **`/api/progress/session` likely lets the client fabricate daily-quest completions** via arbitrary `nodeIds`. Verify in Session A; same fix shape if confirmed.

## Severity calibration (single-learner context)

LA-001/002 blast radius is high (mastery map is central state) but adversary likelihood is mostly accidental — renderer bugs or stale client state, not deliberate cheating by the one learner. Argues for the cheap fix (validate node/question existence + lift deterministic types to server scoring), not an over-engineered scoring framework. LA-004 is the only externally exposed risk and gets priority despite M severity.

## Session A — trust boundary (start here)

Effort: M. Touches schemas + 3 routes + tests.

- LA-001 (`src/app/api/progress/attempt/route.ts`): resolve node+question before `upsertAttempt`; 400 on missing content. Lift `multiple-choice` and `numeric-entry` to server scoring (they have `correctIndex`/`answer` on the question). Keep client-`correct` path for renderer-scored types only, gated by an explicit `questionType` allowlist.
- LA-002 (`src/app/api/boss/[zoneId]/route.ts:156`): fetch the pending attempt for `(userId, zoneId, utcDay)` first; require submitted `(nodeId, questionId)` set to equal `attempt.questions`, exact length `BOSS_QUESTION_COUNT`, no duplicates. Re-grade by looking up each stored question, not by trusting `correct`.
- Daily-challenge POST (`src/app/api/daily-challenge/route.ts:70`): re-grade against the locked record's stored question instead of trusting `parsed.data.correct`.
- Verify session route (`src/app/api/progress/session/route.ts`); fix if it shares the pattern.
- Update `attemptWriteSchema`, `bossAttemptSchema`, `dailyChallengeAttemptSchema` in `src/lib/progress/schemas.ts` to take raw answers where deterministic.
- Tests live alongside each route + schema.

## Session B — operational hardening

Effort: S each.

- LA-003 (`src/lib/content/index.ts`): require `MONGODB_URI` in production; gate `LocalContentRepository` on explicit `CONTENT_SOURCE=local`. Throw at startup with a clear message. Audit tests — they likely use the local repo; switch them to the explicit flag or instantiate `LocalContentRepository` directly.
- LA-004 (`src/app/api/tutor/route.ts`, `src/app/api/glossary/route.ts`): add `auth()`. Add zod `tutorInputSchema` matching the `TutorInput` type. **Decision needed before starting:** do unauthenticated learners still get the local fallback hint via /api/tutor, or close the path entirely? Codex recommends fallback-for-anon; ask the user.

## Session C — UX

Effort: S each. Independent — split if desired.

- LA-005 (`src/components/skillTree/SkillTreeMap.tsx:68`): gate `preventDefault()` on `e.ctrlKey || e.metaKey` (the trackpad-pinch path). Add zoom in/out/reset buttons. Update help text. **Decision needed:** confirm wheel-zoom isn't actually wanted on the realm map.
- LA-006 (`src/lib/progress/client.ts:31`): discriminated return from `postAttempt`/`postSession` (`'ok' | 'unauthorised' | 'failed'`). Surface "progress not saved" toast in the summary; distinguish anonymous (no toast) from authenticated-but-failed (toast).

## Pre-session checklist

- Run `npm run typecheck && npm run lint && npm run test` before closing each session per RiskLoom discipline.
- All three sessions touch tests; budget time for that.

## Resume prompt

Line numbers in this plan may drift as other slices ship. The resume prompt below tells the next session to re-locate by symbol (stable), not by line. Symbols to grep: `attemptWriteSchema`, `bossAttemptSchema`, `dailyChallengeAttemptSchema`, the `score` calculation in the boss POST handler.

Copy-pasteable prompt (swap `Session A` for `B` or `C` as needed):

```
Resume codex review work. Plan: codex-review/PLAN.md.
Source review: /Users/bijunupadincharayil/lumen-academy-review/codex-review/REVIEW.md
+ review.json (commit 0fbef97e).

Start Session A (trust boundary: LA-001, LA-002, daily-challenge variant,
audit session route).

Before writing code:
1. Re-verify each finding against current main. Line numbers in the plan
   may have drifted; locate by symbol instead:
   - LA-001: attemptWriteSchema in src/lib/progress/schemas.ts and the
     POST handler in src/app/api/progress/attempt/route.ts
   - LA-002: bossAttemptSchema and the POST handler in
     src/app/api/boss/[zoneId]/route.ts (look for the `score` calculation)
   - Daily-challenge variant: dailyChallengeAttemptSchema and the POST
     handler in src/app/api/daily-challenge/route.ts
   - Session route: src/app/api/progress/session/route.ts — confirm
     whether client-supplied nodeIds can fake quest completion
2. Confirm each issue is still live (not already fixed in intervening
   commits since 0fbef97e). If any are fixed, note it and skip.
3. Restate the goal in your own words and propose a file-by-file plan
   per CLAUDE.md. Wait for approval before generating code.
4. Run `npm run typecheck && npm run lint && npm run test` before closing.
```
