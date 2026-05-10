import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'

import { RealmZoneStack } from './RealmZoneStack'
import { layoutSkillTree } from '@/lib/skillTree/layout'
import { computeLockState } from '@/lib/skillTree/lockState'
import { fractionsZoneNodes } from '@/content/seed'
import type { MasteryLevel } from '@/types/progress'

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string
    children: React.ReactNode
  } & Record<string, unknown>) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

describe('RealmZoneStack', () => {
  it('renders the empty state when no nodes are provided', () => {
    const { getByTestId, getByText } = render(
      <RealmZoneStack
        nodes={[]}
        layout={{ positions: new Map(), edges: [], bands: [] }}
        lockStates={new Map()}
        realmLabel="Numerica"
      />
    )
    expect(getByTestId('skill-tree-empty')).toBeTruthy()
    expect(getByText(/Numerica content is on the way/)).toBeTruthy()
  })

  it('renders every node title with its lock state attribute', () => {
    const layout = layoutSkillTree(fractionsZoneNodes)
    const lockStates = computeLockState(fractionsZoneNodes, new Map())
    const { getByText, container } = render(
      <RealmZoneStack
        nodes={fractionsZoneNodes}
        layout={layout}
        lockStates={lockStates}
        realmLabel="Numerica"
      />
    )
    for (const node of fractionsZoneNodes) {
      expect(getByText(node.title)).toBeTruthy()
      const el = container.querySelector(`[data-skill-node="${node.id}"]`)
      expect(el).toBeTruthy()
      expect(el?.getAttribute('data-skill-state')).toBe(
        lockStates.get(node.id)
      )
    }
  })

  it('locks the dependent fractions nodes when there is no progress', () => {
    const layout = layoutSkillTree(fractionsZoneNodes)
    const lockStates = computeLockState(fractionsZoneNodes, new Map())
    const { container } = render(
      <RealmZoneStack
        nodes={fractionsZoneNodes}
        layout={layout}
        lockStates={lockStates}
        realmLabel="Numerica"
      />
    )
    const unlocked = container.querySelectorAll('[data-skill-state="unlocked"]')
    const locked = container.querySelectorAll('[data-skill-state="locked"]')
    expect(unlocked.length).toBe(1)
    expect(locked.length).toBe(2)
  })

  it('renders mastery stars for nodes with a mastery level', () => {
    const layout = layoutSkillTree(fractionsZoneNodes)
    const lockStates = computeLockState(fractionsZoneNodes, new Map())
    const target = fractionsZoneNodes[0]
    const masteryByNodeId = new Map<string, MasteryLevel>([[target.id, 'gold']])
    const { container } = render(
      <RealmZoneStack
        nodes={fractionsZoneNodes}
        layout={layout}
        lockStates={lockStates}
        masteryByNodeId={masteryByNodeId}
        realmLabel="Numerica"
      />
    )
    const el = container.querySelector(`[data-skill-node="${target.id}"]`)
    expect(el?.getAttribute('data-mastery-level')).toBe('gold')
    expect(el?.getAttribute('data-mastery-stars')).toBe('3')
    expect(el?.textContent).toContain('★★★☆')
  })

  it('omits the star row when a node has no mastery progress', () => {
    const layout = layoutSkillTree(fractionsZoneNodes)
    const lockStates = computeLockState(fractionsZoneNodes, new Map())
    const { container } = render(
      <RealmZoneStack
        nodes={fractionsZoneNodes}
        layout={layout}
        lockStates={lockStates}
        realmLabel="Numerica"
      />
    )
    for (const node of fractionsZoneNodes) {
      const el = container.querySelector(`[data-skill-node="${node.id}"]`)
      expect(el?.getAttribute('data-mastery-stars')).toBe('0')
      expect(el?.textContent).not.toContain('★')
    }
  })
})
