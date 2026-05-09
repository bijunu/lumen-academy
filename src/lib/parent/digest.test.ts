import { describe, expect, it } from 'vitest'

import { emptyRealmProgress } from '@/lib/progress/homeSummary'

import type { ConversationPrompt } from './conversationPrompts'
import { composeDigest, renderDigestHtml } from './digest'
import type { StrugglingTopic } from './strugglingTopics'
import type { WeeklyTime } from './weeklyTime'

function weeklyTime(): WeeklyTime {
  return {
    totalMinutes: 87,
    dailyMinutes: [
      { day: '2026-05-03', minutes: 0 },
      { day: '2026-05-04', minutes: 30 },
      { day: '2026-05-05', minutes: 0 },
      { day: '2026-05-06', minutes: 15 },
      { day: '2026-05-07', minutes: 42 },
      { day: '2026-05-08', minutes: 0 },
      { day: '2026-05-09', minutes: 0 },
    ],
  }
}

function topic(
  nodeId: string,
  title: string,
  realm: StrugglingTopic['realm'],
  accuracy: number
): StrugglingTopic {
  return {
    nodeId,
    title,
    realm,
    accuracy,
    totalAttempts: 4,
    totalCorrect: Math.round(accuracy * 4),
    lastAttemptAt: null,
  }
}

function prompt(
  realm: ConversationPrompt['realm'],
  text = 'Talk to them about it.'
): ConversationPrompt {
  return { realm, nodeId: `${realm}-1`, text }
}

describe('composeDigest', () => {
  it('derives weekStart and weekEnd from the time window', () => {
    const out = composeDigest({
      weeklyTime: weeklyTime(),
      realmProgress: emptyRealmProgress(),
      struggling: [],
      prompts: [],
    })
    expect(out.weekStart).toBe('2026-05-03')
    expect(out.weekEnd).toBe('2026-05-09')
  })

  it('falls back to "your child" when no learnerLabel is supplied', () => {
    const out = composeDigest({
      weeklyTime: weeklyTime(),
      realmProgress: emptyRealmProgress(),
      struggling: [],
      prompts: [],
    })
    expect(out.learnerLabel).toBe('your child')
  })

  it('uses the supplied learner label', () => {
    const out = composeDigest({
      weeklyTime: weeklyTime(),
      realmProgress: emptyRealmProgress(),
      struggling: [],
      prompts: [],
      learnerLabel: 'Anya',
    })
    expect(out.learnerLabel).toBe('Anya')
  })
})

describe('renderDigestHtml', () => {
  it('produces HTML containing the dates, totals, topics, and prompts', () => {
    const digest = composeDigest({
      weeklyTime: weeklyTime(),
      realmProgress: emptyRealmProgress(),
      struggling: [
        topic('m1', 'Equivalent fractions', 'numerica', 0.25),
        topic('b1', 'Cell parts', 'vitalia', 0.5),
      ],
      prompts: [prompt('numerica', 'Ask them about equivalent fractions.')],
      learnerLabel: 'Anya',
    })

    const html = renderDigestHtml(digest)
    expect(html.startsWith('<!DOCTYPE html>')).toBe(true)
    expect(html).toContain('Anya')
    expect(html).toContain('2026-05-03')
    expect(html).toContain('2026-05-09')
    expect(html).toContain('1h 27m')
    expect(html).toContain('Equivalent fractions')
    expect(html).toContain('Cell parts')
    expect(html).toContain('Ask them about equivalent fractions.')
    expect(html).toContain('25% of 4')
    expect(html).not.toContain('—')
  })

  it('escapes HTML in dynamic strings', () => {
    const digest = composeDigest({
      weeklyTime: weeklyTime(),
      realmProgress: emptyRealmProgress(),
      struggling: [topic('x', '<script>alert(1)</script>', 'numerica', 0)],
      prompts: [],
      learnerLabel: 'A & B',
    })
    const html = renderDigestHtml(digest)
    expect(html).not.toContain('<script>alert')
    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;')
    expect(html).toContain('A &amp; B')
  })

  it('renders an empty-state message when there are no struggling topics', () => {
    const digest = composeDigest({
      weeklyTime: weeklyTime(),
      realmProgress: emptyRealmProgress(),
      struggling: [],
      prompts: [],
    })
    const html = renderDigestHtml(digest)
    expect(html).toContain('Nothing to flag this week')
  })
})
