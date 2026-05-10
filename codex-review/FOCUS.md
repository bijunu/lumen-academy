# Focus areas, where I want a second opinion

This is the author writing. Codex, these are the spots I am least sure about. Spend disproportionate attention here. Each item names file paths so you can find them fast.

## 1. Repository factory pattern (possibly premature)

I split content access into a `ContentRepository` interface with two implementations: `LocalContentRepository` (in-memory from seed files) and `MongoContentRepository`. A factory at `src/lib/content/index.ts` switches on `MONGODB_URI`. I did this when I had three nodes; I now have 17 and the local path is only used when env is missing.

- `src/lib/content/index.ts`
- `src/lib/content/LocalContentRepository.ts`
- `src/lib/content/MongoContentRepository.ts`
- `src/content/seed/**`

Question for you: is the dual-implementation buying anything beyond test convenience, or should one of them go? If you think it should stay, what is the one concrete reason?

## 2. ProgressRepository is Mongo-only by design, is the asymmetry coherent?

`ContentRepository` has a local fallback. `ProgressRepository` does not. Anonymous learners skip persistence entirely (the route returns 401, the client helper swallows). I justified this as "no point persisting for an anonymous user", but the asymmetry with content feels off.

- `src/lib/progress/progressRepository.ts`
- `src/lib/progress/client.ts`
- `src/app/api/progress/attempt/route.ts`

Is the silent-swallow on 401 going to bite me? Should `postAttempt` at least log? Is the asymmetry actually fine?

## 3. Auth.js v5 with database sessions and no middleware

I deliberately do not have `middleware.ts`. Auth.js v5 with database sessions plus `MongoDBAdapter` does not run on the Edge runtime, and middleware does. So every protected page calls `auth()` server-side. Parent verification is similarly gated server-side, not at the edge.

- `src/lib/auth/**`
- `src/app/(parent)/parent/page.tsx` and equivalents
- `src/app/api/parent/**`
- `next-auth.d.ts`, `src/types/next-auth.d.ts`

Is this still the right call, or has the Auth.js v5 story improved? Are there protected paths I have missed (i.e. routes that *should* require auth but currently do not check)?

## 4. The reward loop is a chain of pure functions glued together at the API route

A correct answer fans out to: SM-2 schedule update, mastery upgrade detection, XP accrual with tier multipliers, Insight increment, Spark on mastery boundary, counter deltas, badge evaluation, badge stamping, celebration toast on the client. Each pure function is tested. I am not confident the *composition* is right.

- `src/app/api/progress/attempt/route.ts` (the orchestrator)
- `src/lib/mastery/{sm2,qualityFromAttempt,upgradeMastery}.ts`
- `src/lib/scholar/applyScholarUpdate.ts`
- `src/lib/badges/badgeRules.ts`
- `src/lib/gamification/xpForAttempt.ts`
- `src/components/learn/NodeLearningFlow.tsx` (consumer)

Specifically: can you find a sequence of attempts that produces the wrong number of Sparks, double-credits a badge, or misses a mastery upgrade boundary? The pure helpers all pass; the integration may not.

## 5. SM-2 thresholds and tier multipliers are author judgment

Mastery tiers: bronze on `totalCorrect >= 1`, silver on `repetition >= 2`, gold on `repetition >= 4 && ef >= 2.5`, platinum on `repetition >= 6 && interval >= 30`. Tier XP multipliers: core 1.0, confident 1.25, challenge 1.5. These are vibes, not data.

- `src/lib/mastery/upgradeMastery.ts`
- `src/lib/gamification/xpForAttempt.ts`

Are these defensible from a learning-science angle, or do they create a perverse incentive (e.g. always do challenge, skip core)? You do not need to be a learning scientist; spot the obvious mis-calibration.

## 6. Boss arena eligibility threshold is very weak

A zone is boss-eligible when every node in it has `totalCorrect >= 1`. That includes a guess. A learner could pass a boss with shaky mastery.

- `src/lib/boss/bossEligibility.ts`
- `src/lib/boss/pickBossQuestions.ts`
- `src/app/api/boss/[zoneId]/route.ts`
- `src/components/boss/BossArena.tsx`

Should eligibility require a higher bar (e.g. `repetition >= 1` so SM-2 has at least graded the answer once)? What is the smallest change to make this less gameable without blocking the only learner who exists?

## 7. Skill tree zoom and pan with a native non-passive wheel listener

`SkillTreeMap` attaches a non-passive `wheel` listener to handle ctrl/cmd+wheel zoom and ignores pan when the target is `[data-skill-node]`. This was rewritten last week into a zone-aware swim-lane layout.

- `src/components/skillTree/SkillTreeMap.tsx`
- `src/lib/skillTree/layout.ts`
- `src/lib/skillTree/lockState.ts`
- `src/app/(learner)/realm/[realmId]/RealmMapClient.tsx`

Look for: trapped scroll on the page, accessibility issues with keyboard navigation through nodes, perf problems with 100+ nodes, layout breakdown when a zone has cycles or orphans (cycles throw, is that the right call?).

## 8. N+1 NodeProgress load on the realm page

`/realm/[realmId]/page.tsx` loads `NodeProgress` per node in a loop. I left a comment that this is fine until realms grow.

- `src/app/(learner)/realm/[realmId]/page.tsx`

Is "fine until realms grow" actually fine at the current scale, or am I one zone away from a problem?

## 9. Determinism keys for daily challenge / daily quest / boss picks

All three use FNV-1a hashed seed keys: daily challenge `${userId}:${utcDay}`, daily quest similar, boss `${userId}:${zoneId}:${utcDay}`. Anti-refresh is enforced by Mongo unique indexes plus pending-only update predicates.

- `src/lib/dailyChallenge/pickQuestion.ts` and `dailyChallengeRepository.ts`
- `src/lib/dailyQuest/pickTasks.ts` and `dailyQuestRepository.ts`
- `src/lib/boss/pickBossQuestions.ts` and `bossRepository.ts`

Can a learner game the system by signing out, signing in as a freshly verified parent-child pair, or by exploiting the UTC day boundary?

## 10. 12 badges defined, 9 earnable, 3 stubs

`first-light`, `curious-mind`, `steady-hand` are typed stubs marked `earnable: false`. Everything else evaluates.

- `src/lib/badges/badgeRules.ts`
- `src/app/(learner)/badges/page.tsx`

Is the `earnable: boolean` discriminator a clean way to ship typed stubs, or is it a code smell that will rot? What would you replace it with at this stage (one-line answer; remember, no rewrites)?

## 11. Companion creature, celebration overlay, and the right rail tutor share the (learner) layout

`RewardCelebrationProvider`, `RightRailProvider`, the companion, and the tutor panel all coexist under `src/app/(learner)/layout.tsx`. The companion uses CSS keyframes gated on `prefers-reduced-motion: reduce`. Confetti is lazy-imported and similarly gated.

- `src/app/(learner)/layout.tsx`
- `src/components/celebration/RewardCelebration.tsx`
- `src/components/companion/CompanionCreature.tsx`
- `src/components/learn/NodeLearningFlow.tsx`

Look for: race conditions between celebration toast queue and navigation, focus management when the boss overlay (`fixed inset-0 z-50`) opens over this stack, screen-reader behaviour during a celebration.

## 12. Magic links log to console; no SMTP

By design at this stage. Sole user is the author's family.

- `src/lib/auth/**`

Only flag this if you spot a way it can leak to a public surface unintentionally.

## 13. Atlas IP allowlist `0.0.0.0/0`

Known. Already on the Phase 12 list. Mention if you like; do not make it your headline finding.

## 14. Things I have NOT asked you about (but you may still find)

I have not directed your eye at: the seeder script `scripts/seed-content.ts`, the eval harness `scripts/eval-content.ts`, the test setup at `src/test/setup.ts`, the Tailwind config, or the docs under `docs/`. If something there leaps out, include it; otherwise skip.
