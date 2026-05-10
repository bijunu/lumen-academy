import { describe, expect, it } from 'vitest'

import type {
  DataExtractionQuestion,
  DragDropBuilderQuestion,
  DragOrderQuestion,
  FreeTextQuestion,
  LabelledImageQuestion,
  MissingStepQuestion,
  MultipleChoiceQuestion,
  NumericEntryQuestion,
  SketchQuestion,
  SliderExploreQuestion,
  SpotMisconceptionQuestion,
} from '@/types/content'

import { InvalidAnswerError, isRendererScored, scoreAnswer } from './serverScoring'

const base = { id: 'q', stem: 's', tier: 'core' as const, xpValue: 10 }

describe('isRendererScored', () => {
  it('flags free-text and sketch as renderer-scored', () => {
    expect(isRendererScored('free-text')).toBe(true)
    expect(isRendererScored('sketch')).toBe(true)
  })

  it('treats deterministic types as server-scored', () => {
    expect(isRendererScored('multiple-choice')).toBe(false)
    expect(isRendererScored('numeric-entry')).toBe(false)
    expect(isRendererScored('drag-order')).toBe(false)
  })
})

describe('scoreAnswer — multiple-choice', () => {
  const q: MultipleChoiceQuestion = {
    ...base,
    type: 'multiple-choice',
    options: ['a', 'b', 'c'],
    correctIndex: 1,
  }

  it('grades correct selection', () => {
    expect(scoreAnswer(q, { answer: 1 })).toBe(true)
  })

  it('grades wrong selection', () => {
    expect(scoreAnswer(q, { answer: 0 })).toBe(false)
  })

  it('rejects non-integer answer', () => {
    expect(() => scoreAnswer(q, { answer: '1' })).toThrow(InvalidAnswerError)
  })

  it('ignores clientCorrect override', () => {
    expect(scoreAnswer(q, { answer: 0, clientCorrect: true })).toBe(false)
  })
})

describe('scoreAnswer — numeric-entry', () => {
  const q: NumericEntryQuestion = {
    ...base,
    type: 'numeric-entry',
    correctAnswer: 12,
  }

  it('grades exact match without tolerance', () => {
    expect(scoreAnswer(q, { answer: 12 })).toBe(true)
    expect(scoreAnswer(q, { answer: 11 })).toBe(false)
  })

  it('honours tolerance', () => {
    const withTol: NumericEntryQuestion = { ...q, tolerance: 0.5 }
    expect(scoreAnswer(withTol, { answer: 12.4 })).toBe(true)
    expect(scoreAnswer(withTol, { answer: 12.6 })).toBe(false)
  })

  it('coerces numeric strings', () => {
    expect(scoreAnswer(q, { answer: '12' })).toBe(true)
  })

  it('rejects NaN', () => {
    expect(() => scoreAnswer(q, { answer: 'twelve' })).toThrow(InvalidAnswerError)
  })
})

describe('scoreAnswer — drag-order', () => {
  const q: DragOrderQuestion = {
    ...base,
    type: 'drag-order',
    items: ['a', 'b', 'c'],
    correctOrder: [2, 0, 1],
  }

  it('grades exact order', () => {
    expect(scoreAnswer(q, { answer: [2, 0, 1] })).toBe(true)
    expect(scoreAnswer(q, { answer: [0, 1, 2] })).toBe(false)
  })

  it('rejects wrong shape', () => {
    expect(() => scoreAnswer(q, { answer: [2, 0] })).toThrow(InvalidAnswerError)
    expect(() => scoreAnswer(q, { answer: ['a', 'b', 'c'] })).toThrow(
      InvalidAnswerError
    )
  })
})

describe('scoreAnswer — spot-misconception', () => {
  const q: SpotMisconceptionQuestion = {
    ...base,
    type: 'spot-misconception',
    statements: [
      { text: 'good', isMisconception: false },
      { text: 'bad', isMisconception: true },
    ],
  }

  it('returns true when learner picks the misconception', () => {
    expect(scoreAnswer(q, { answer: 1 })).toBe(true)
    expect(scoreAnswer(q, { answer: 0 })).toBe(false)
  })

  it('rejects out-of-range index', () => {
    expect(() => scoreAnswer(q, { answer: 5 })).toThrow(InvalidAnswerError)
  })
})

describe('scoreAnswer — slider-explore', () => {
  const q: SliderExploreQuestion = {
    ...base,
    type: 'slider-explore',
    min: 0,
    max: 100,
    step: 1,
    correctRange: [40, 60],
    label: 'x',
  }

  it('accepts values in range, inclusive', () => {
    expect(scoreAnswer(q, { answer: 40 })).toBe(true)
    expect(scoreAnswer(q, { answer: 60 })).toBe(true)
    expect(scoreAnswer(q, { answer: 50 })).toBe(true)
  })

  it('rejects values outside range', () => {
    expect(scoreAnswer(q, { answer: 39 })).toBe(false)
    expect(scoreAnswer(q, { answer: 61 })).toBe(false)
  })
})

describe('scoreAnswer — drag-drop-builder', () => {
  const q: DragDropBuilderQuestion = {
    ...base,
    type: 'drag-drop-builder',
    parts: ['root', 'stem', 'leaf'],
    correctArrangement: ['root', 'stem', 'leaf'],
  }

  it('grades exact string-array match', () => {
    expect(scoreAnswer(q, { answer: ['root', 'stem', 'leaf'] })).toBe(true)
    expect(scoreAnswer(q, { answer: ['stem', 'root', 'leaf'] })).toBe(false)
  })
})

describe('scoreAnswer — missing-step', () => {
  const q: MissingStepQuestion = {
    ...base,
    type: 'missing-step',
    steps: ['multiply both sides by 2', null, 'simplify'],
    missingStepIndex: 1,
    correctStep: 'Add 3 to both sides',
  }

  it('normalises whitespace and case', () => {
    expect(scoreAnswer(q, { answer: 'add 3 to both sides' })).toBe(true)
    expect(scoreAnswer(q, { answer: '  ADD 3   to BOTH sides ' })).toBe(true)
    expect(scoreAnswer(q, { answer: 'add 4 to both sides' })).toBe(false)
  })
})

describe('scoreAnswer — data-extraction', () => {
  const q: DataExtractionQuestion = {
    ...base,
    type: 'data-extraction',
    dataSource: 'table',
    correctAnswer: '42',
  }

  it('compares normalised strings', () => {
    expect(scoreAnswer(q, { answer: '42' })).toBe(true)
    expect(scoreAnswer(q, { answer: '  42 ' })).toBe(true)
    expect(scoreAnswer(q, { answer: '43' })).toBe(false)
  })
})

describe('scoreAnswer — labelled-image', () => {
  const q: LabelledImageQuestion = {
    ...base,
    type: 'labelled-image',
    hotspots: [
      { id: 'h1', x: 0, y: 0, correctLabel: 'nucleus' },
      { id: 'h2', x: 1, y: 1, correctLabel: 'cytoplasm' },
    ],
    labels: ['nucleus', 'cytoplasm'],
  }

  it('requires every hotspot to have its correct label', () => {
    expect(
      scoreAnswer(q, { answer: { h1: 'nucleus', h2: 'cytoplasm' } })
    ).toBe(true)
    expect(
      scoreAnswer(q, { answer: { h1: 'nucleus', h2: 'nucleus' } })
    ).toBe(false)
  })

  it('rejects missing hotspot', () => {
    expect(scoreAnswer(q, { answer: { h1: 'nucleus' } })).toBe(false)
  })

  it('rejects non-object answer', () => {
    expect(() => scoreAnswer(q, { answer: ['nucleus'] })).toThrow(
      InvalidAnswerError
    )
  })
})

describe('scoreAnswer — renderer-scored types', () => {
  const ft: FreeTextQuestion = {
    ...base,
    type: 'free-text',
    sampleAnswer: 'because',
    keywords: ['because'],
  }
  const sk: SketchQuestion = {
    ...base,
    type: 'sketch',
    gridConfig: { xMin: 0, xMax: 10, yMin: 0, yMax: 10 },
    correctPoints: [[1, 1]],
  }

  it('returns clientCorrect for free-text', () => {
    expect(scoreAnswer(ft, { clientCorrect: true })).toBe(true)
    expect(scoreAnswer(ft, { clientCorrect: false })).toBe(false)
    expect(scoreAnswer(ft, {})).toBe(false)
  })

  it('returns clientCorrect for sketch', () => {
    expect(scoreAnswer(sk, { clientCorrect: true })).toBe(true)
    expect(scoreAnswer(sk, { clientCorrect: false })).toBe(false)
  })

  it('ignores answer payload for renderer-scored types', () => {
    expect(scoreAnswer(ft, { answer: 'literal text', clientCorrect: false })).toBe(
      false
    )
  })
})

describe('scoreAnswer — missing answer', () => {
  const q: MultipleChoiceQuestion = {
    ...base,
    type: 'multiple-choice',
    options: ['a'],
    correctIndex: 0,
  }
  it('throws when answer is undefined for a deterministic type', () => {
    expect(() => scoreAnswer(q, {})).toThrow(InvalidAnswerError)
  })
})
