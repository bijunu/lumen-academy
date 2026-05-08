import type { RealmZoneCoverage } from '@/lib/boss/realmCoverage'
import {
  countQuestCompletionsInWindow,
  deriveRanks,
} from '@/lib/scholar/applyScholarUpdate'
import type {
  BadgeId,
  BadgeMeta,
  ScholarProfile,
} from '@/types/gamification'

const QUEST_KEEPER_WINDOW_DAYS = 14
const QUEST_KEEPER_THRESHOLD = 10

export interface BadgeEvalContext {
  realmZoneCoverage?: RealmZoneCoverage
}

export const BADGES: readonly BadgeMeta[] = [
  {
    id: 'first-light',
    name: 'First Light',
    description: 'Complete your first interactive scene.',
    earnable: false,
  },
  {
    id: 'curious-mind',
    name: 'Curious Mind',
    description: 'Define ten words using the inline glossary.',
    earnable: false,
  },
  {
    id: 'bounce-back',
    name: 'Bounce Back',
    description: 'Master a node you previously got wrong.',
    earnable: true,
  },
  {
    id: 'polymath',
    name: 'Polymath',
    description: 'Earn at least bronze in every realm.',
    earnable: true,
  },
  {
    id: 'deep-diver',
    name: 'Deep Diver',
    description: 'Reach platinum mastery on five nodes.',
    earnable: true,
  },
  {
    id: 'boss-tamer',
    name: 'Boss Tamer',
    description: 'Defeat your first boss.',
    earnable: true,
  },
  {
    id: 'realm-walker',
    name: 'Realm Walker',
    description: 'Defeat the boss in every zone of any realm.',
    earnable: true,
  },
  {
    id: 'stretch-scholar',
    name: 'Stretch Scholar',
    description: 'Answer ten Challenge tier questions correctly.',
    earnable: true,
  },
  {
    id: 'steady-hand',
    name: 'Steady Hand',
    description: 'Improve a topic trend for three sessions in a row.',
    earnable: false,
  },
  {
    id: 'quest-keeper',
    name: 'Quest Keeper',
    description: 'Complete the Daily Quest on ten days in a fourteen day window.',
    earnable: true,
  },
  {
    id: 'misconception-hunter',
    name: 'Misconception Hunter',
    description: 'Answer five spot the misconception questions correctly.',
    earnable: true,
  },
  {
    id: 'lumen-scholar',
    name: 'Lumen Scholar',
    description: 'Reach Scholar Rank ten in every realm.',
    earnable: true,
  },
] as const

export const BADGE_BY_ID: Readonly<Record<BadgeId, BadgeMeta>> =
  Object.freeze(
    BADGES.reduce(
      (acc, b) => {
        acc[b.id] = b
        return acc
      },
      {} as Record<BadgeId, BadgeMeta>
    )
  )

type BadgeRule = (
  profile: ScholarProfile,
  now: Date,
  ctx: BadgeEvalContext
) => boolean

const RULES: Record<BadgeId, BadgeRule> = {
  'first-light': () => false,
  'curious-mind': () => false,
  'bounce-back': p => p.counters.bouncedBackCount >= 1,
  polymath: p =>
    p.xpByRealm.numerica > 0 &&
    p.xpByRealm.vitalia > 0 &&
    p.xpByRealm.elementia > 0 &&
    p.xpByRealm.mechanica > 0,
  'deep-diver': p => p.counters.platinumCount >= 5,
  'boss-tamer': p => (p.counters.bossDefeats ?? 0) >= 1,
  'realm-walker': (_p, _now, ctx) => {
    const cov = ctx.realmZoneCoverage
    if (!cov) return false
    for (const r of Object.values(cov)) {
      if (r.total > 0 && r.defeated >= r.total) return true
    }
    return false
  },
  'stretch-scholar': p => p.counters.challengeCorrect >= 10,
  'steady-hand': () => false,
  'quest-keeper': (p, now) =>
    countQuestCompletionsInWindow(
      p.questCompletionDates ?? [],
      now,
      QUEST_KEEPER_WINDOW_DAYS
    ) >= QUEST_KEEPER_THRESHOLD,
  'misconception-hunter': p => p.counters.misconceptionCorrect >= 5,
  'lumen-scholar': p => {
    const ranks = deriveRanks(p)
    return (
      ranks.byRealm.numerica >= 10 &&
      ranks.byRealm.vitalia >= 10 &&
      ranks.byRealm.elementia >= 10 &&
      ranks.byRealm.mechanica >= 10
    )
  },
}

export function evaluateBadges(
  profile: ScholarProfile,
  now: Date = new Date(),
  ctx: BadgeEvalContext = {}
): BadgeId[] {
  const newly: BadgeId[] = []
  for (const meta of BADGES) {
    if (!meta.earnable) continue
    if (profile.badges[meta.id]) continue
    if (RULES[meta.id](profile, now, ctx)) newly.push(meta.id)
  }
  return newly
}
