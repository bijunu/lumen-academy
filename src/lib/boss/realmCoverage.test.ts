import { describe, expect, it } from 'vitest'

import { realmZoneCoverage } from './realmCoverage'

describe('realmZoneCoverage', () => {
  it('returns 0/0 for realms with no zones', () => {
    const cov = realmZoneCoverage([], {
      numerica: [],
      vitalia: [],
      elementia: [],
      mechanica: [],
    })
    for (const r of Object.values(cov)) {
      expect(r).toEqual({ defeated: 0, total: 0 })
    }
  })

  it('counts defeated zones within each realm', () => {
    const cov = realmZoneCoverage(['fractions', 'cells'], {
      numerica: ['fractions', 'algebra'],
      vitalia: ['cells', 'organs'],
      elementia: ['atoms'],
      mechanica: [],
    })
    expect(cov.numerica).toEqual({ defeated: 1, total: 2 })
    expect(cov.vitalia).toEqual({ defeated: 1, total: 2 })
    expect(cov.elementia).toEqual({ defeated: 0, total: 1 })
    expect(cov.mechanica).toEqual({ defeated: 0, total: 0 })
  })

  it('flags full realm coverage when all zones defeated', () => {
    const cov = realmZoneCoverage(['fractions', 'algebra'], {
      numerica: ['fractions', 'algebra'],
      vitalia: [],
      elementia: [],
      mechanica: [],
    })
    expect(cov.numerica).toEqual({ defeated: 2, total: 2 })
  })

  it('ignores defeated zones from other realms', () => {
    const cov = realmZoneCoverage(['stranger-zone'], {
      numerica: ['fractions'],
      vitalia: [],
      elementia: [],
      mechanica: [],
    })
    expect(cov.numerica.defeated).toBe(0)
  })
})
