import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, act, screen } from '@testing-library/react'

import {
  RewardCelebrationProvider,
  useRewardCelebration,
  type CelebrationEvent,
} from './RewardCelebration'

vi.mock('@/lib/celebration/confetti', () => ({
  fireConfetti: vi.fn().mockResolvedValue(undefined),
}))

function Trigger({ event }: { event: CelebrationEvent }) {
  const { celebrate } = useRewardCelebration()
  return (
    <button onClick={() => celebrate(event)} type="button">
      go
    </button>
  )
}

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('RewardCelebrationProvider', () => {
  it('renders a badge unlock toast on celebrate', async () => {
    render(
      <RewardCelebrationProvider>
        <Trigger event={{ type: 'badge-unlock', badgeId: 'polymath' }} />
      </RewardCelebrationProvider>
    )

    act(() => {
      screen.getByText('go').click()
    })

    expect(screen.getByText(/Badge unlocked: Polymath/)).toBeTruthy()
    expect(
      screen.getByTestId('celebration-toast').getAttribute('data-celebration-type')
    ).toBe('badge-unlock')
  })

  it('renders a mastery upgrade toast on celebrate', async () => {
    render(
      <RewardCelebrationProvider>
        <Trigger
          event={{
            type: 'mastery-upgrade',
            level: 'silver',
            nodeTitle: 'Equivalent Fractions',
          }}
        />
      </RewardCelebrationProvider>
    )

    act(() => {
      screen.getByText('go').click()
    })

    expect(
      screen.getByText(/Silver mastery on Equivalent Fractions/)
    ).toBeTruthy()
  })

  it('removes a toast after the TTL elapses', () => {
    render(
      <RewardCelebrationProvider>
        <Trigger event={{ type: 'badge-unlock', badgeId: 'polymath' }} />
      </RewardCelebrationProvider>
    )

    act(() => {
      screen.getByText('go').click()
    })
    expect(screen.queryByTestId('celebration-toast')).toBeTruthy()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.queryByTestId('celebration-toast')).toBeNull()
  })

  it('throws when useRewardCelebration is used outside the provider', () => {
    function Naked() {
      useRewardCelebration()
      return null
    }
    expect(() => render(<Naked />)).toThrow(
      /must be used inside RewardCelebrationProvider/
    )
  })
})
