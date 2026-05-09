import { describe, expect, it } from 'vitest'

import type {
  Misconception,
  MultipleChoiceQuestion,
  Question,
  SkillNode,
} from '@/types/content'

import { evaluateNode, evaluateNodes } from './rubric'

function makeMcq(id: string, tier: SkillNode['tier'] = 'core'): Question {
  const q: MultipleChoiceQuestion = {
    id,
    type: 'multiple-choice',
    stem: `Stem ${id}`,
    tier,
    options: ['a', 'b', 'c', 'd'],
    correctIndex: 0,
    xpValue: 10,
  }
  return q
}

function makeMisconception(id: string): Misconception {
  return {
    id,
    description: `Description for ${id}`,
    triggerAnswer: id,
    correction: 'Short correction.',
    reExplanation: 'Short re-explanation.',
  }
}

function makeMinNode(): SkillNode {
  return {
    id: 'min-node',
    title: 'Min Node',
    description: 'Min description.',
    subject: 'maths',
    realm: 'numerica',
    zoneId: 'maths-test',
    zoneName: 'Test',
    tier: 'core',
    prerequisites: [],
    curriculum: {
      ks3Objective: 'Test KS3 objective.',
      awardingBodies: { aqa: 'A1', edexcel: 'E1' },
    },
    scenes: [
      { id: 's1', title: 'S1', type: 'diagram', instructions: 'Look', data: {} },
      { id: 's2', title: 'S2', type: 'diagram', instructions: 'Look', data: {} },
      { id: 's3', title: 'S3', type: 'diagram', instructions: 'Look', data: {} },
    ],
    workedExamples: [
      { id: 'w1', title: 'W1', steps: [{ explanation: 'Step.' }] },
      { id: 'w2', title: 'W2', steps: [{ explanation: 'Step.' }] },
    ],
    questions: [makeMcq('q1', 'core')],
    misconceptions: [makeMisconception('m1')],
    masteryRule: { streak: 3, spacedReviewDays: [1, 3, 7] },
  }
}

describe('evaluateNode structural rules', () => {
  it('flags scenes below minimum', () => {
    const node = makeMinNode()
    node.scenes = node.scenes.slice(0, 2)
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'scenes-min')).toBe(true)
  })

  it('flags worked examples below minimum', () => {
    const node = makeMinNode()
    node.workedExamples = node.workedExamples.slice(0, 1)
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'worked-examples-min')).toBe(true)
  })

  it('flags questions count below 20', () => {
    const node = makeMinNode()
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'questions-min')).toBe(true)
  })

  it('flags misconceptions count below 6', () => {
    const node = makeMinNode()
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'misconceptions-min')).toBe(true)
  })

  it('flags fewer than 2 awarding bodies', () => {
    const node = makeMinNode()
    node.curriculum.awardingBodies = { aqa: 'A1' }
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'awarding-bodies-min')).toBe(true)
  })

  it('flags empty ks3Objective', () => {
    const node = makeMinNode()
    node.curriculum.ks3Objective = ''
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'ks3-objective-empty')).toBe(true)
  })
})

describe('evaluateNode tier and type rules', () => {
  it('flags challenge tier outside the 4 to 6 range', () => {
    const node = makeMinNode()
    node.questions = []
    for (let i = 0; i < 7; i++) node.questions.push(makeMcq(`c${i}`, 'core'))
    for (let i = 0; i < 7; i++) node.questions.push(makeMcq(`f${i}`, 'confident'))
    for (let i = 0; i < 2; i++) node.questions.push(makeMcq(`x${i}`, 'challenge'))
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'tier-mix-challenge')).toBe(true)
  })

  it('flags missing missing-step questions', () => {
    const node = makeMinNode()
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'type-quota-missing-step-min')).toBe(true)
  })
})

describe('evaluateNode misconception cross-links', () => {
  it('flags dangling misconceptionId in question', () => {
    const node = makeMinNode()
    const q = node.questions[0] as MultipleChoiceQuestion
    q.misconceptionId = 'nonexistent'
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'misconception-id-dangling')).toBe(true)
  })

  it('warns on misconception not referenced by any question', () => {
    const node = makeMinNode()
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'misconception-unreferenced')).toBe(true)
  })

  it('flags correction over 40 words', () => {
    const node = makeMinNode()
    node.misconceptions[0].correction = Array(50).fill('word').join(' ')
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'misconception-correction-length')).toBe(true)
  })

  it('flags reExplanation over 80 words', () => {
    const node = makeMinNode()
    node.misconceptions[0].reExplanation = Array(90).fill('word').join(' ')
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'misconception-reexplanation-length')).toBe(true)
  })
})

describe('evaluateNode banned patterns', () => {
  it('flags em dash in question stem', () => {
    const node = makeMinNode()
    node.questions[0].stem = 'A long stem — with em dash'
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'banned-em-dash')).toBe(true)
  })

  it('flags US units in description', () => {
    const node = makeMinNode()
    node.description = 'The car travels 5 miles north.'
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'banned-us-units')).toBe(true)
  })

  it('flags US currency in MCQ option', () => {
    const node = makeMinNode()
    const q = node.questions[0] as MultipleChoiceQuestion
    q.options = ['$5', '£5', '5p', '50p']
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'banned-us-currency')).toBe(true)
  })

  it('flags "all of the above" option', () => {
    const node = makeMinNode()
    const q = node.questions[0] as MultipleChoiceQuestion
    q.options = ['a', 'b', 'c', 'all of the above']
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'banned-all-or-none-of-above')).toBe(true)
  })

  it('flags time-pressure phrasing in stem', () => {
    const node = makeMinNode()
    node.questions[0].stem = 'Hurry, you have 30 seconds to answer.'
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'banned-time-pressure')).toBe(true)
  })

  it('flags reward-bait phrasing in stem', () => {
    const node = makeMinNode()
    node.questions[0].stem = 'Get this right for bonus XP.'
    const { findings } = evaluateNode(node)
    expect(findings.some(f => f.rule === 'banned-reward-bait')).toBe(true)
  })
})

describe('evaluateNodes summary', () => {
  it('counts a node with any fail finding as failing', () => {
    const node = makeMinNode()
    const { summary } = evaluateNodes([node])
    expect(summary.totalNodes).toBe(1)
    expect(summary.failingNodes).toBe(1)
    expect(summary.passingNodes).toBe(0)
  })
})
