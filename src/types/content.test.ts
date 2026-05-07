import { describe, it, expect } from 'vitest'
import {
  isMultipleChoice,
  isNumericEntry,
  isDragOrder,
  isSpotMisconception,
  type Question,
} from './content'

describe('Question type guards', () => {
  const mcq: Question = {
    id: 'test-mc',
    type: 'multiple-choice',
    stem: 'Test?',
    tier: 'core',
    options: ['A', 'B'],
    correctIndex: 0,
    xpValue: 10,
  }

  const numeric: Question = {
    id: 'test-num',
    type: 'numeric-entry',
    stem: 'Test?',
    tier: 'core',
    correctAnswer: 42,
    xpValue: 10,
  }

  it('identifies multiple choice questions', () => {
    expect(isMultipleChoice(mcq)).toBe(true)
    expect(isMultipleChoice(numeric)).toBe(false)
  })

  it('identifies numeric entry questions', () => {
    expect(isNumericEntry(numeric)).toBe(true)
    expect(isNumericEntry(mcq)).toBe(false)
  })

  it('identifies drag order questions', () => {
    expect(isDragOrder(mcq)).toBe(false)
  })

  it('identifies spot misconception questions', () => {
    expect(isSpotMisconception(mcq)).toBe(false)
  })
})
