import { describe, it, expect } from 'vitest'
import { equivalentFractions, fractionsZoneNodes } from './fractions'

describe('Equivalent fractions seed data', () => {
  it('has required fields', () => {
    expect(equivalentFractions.id).toBe('maths-fractions-equivalent')
    expect(equivalentFractions.subject).toBe('maths')
    expect(equivalentFractions.realm).toBe('numerica')
    expect(equivalentFractions.tier).toBe('core')
  })

  it('has at least 10 questions', () => {
    expect(equivalentFractions.questions.length).toBeGreaterThanOrEqual(10)
  })

  it('has scenes', () => {
    expect(equivalentFractions.scenes.length).toBeGreaterThan(0)
  })

  it('has worked examples', () => {
    expect(equivalentFractions.workedExamples.length).toBeGreaterThan(0)
  })

  it('has misconceptions', () => {
    expect(equivalentFractions.misconceptions.length).toBeGreaterThanOrEqual(3)
  })

  it('has curriculum tags', () => {
    expect(equivalentFractions.curriculum.ks3Objective.length).toBeGreaterThan(0)
    expect(equivalentFractions.curriculum.awardingBodies.aqa).toBeTruthy()
  })

  it('has all three zone nodes', () => {
    expect(fractionsZoneNodes).toHaveLength(3)
  })

  it('has unique IDs across all nodes', () => {
    const ids = fractionsZoneNodes.map(n => n.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
