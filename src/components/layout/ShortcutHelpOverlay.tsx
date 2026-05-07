'use client'

import { SHORTCUTS } from '@/hooks/useKeyboardShortcuts'

interface ShortcutHelpOverlayProps {
  open: boolean
  onClose: () => void
}

export function ShortcutHelpOverlay({ open, onClose }: ShortcutHelpOverlayProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-label="Keyboard shortcuts"
    >
      <div
        className="w-full max-w-md rounded-lg bg-card p-6 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="mb-4 text-lg font-semibold">Keyboard Shortcuts</h2>
        <dl className="space-y-2">
          {SHORTCUTS.map(s => (
            <div key={s.key} className="flex items-center justify-between">
              <dt>
                <kbd className="rounded border bg-muted px-2 py-0.5 text-xs font-mono">
                  {s.label}
                </kbd>
              </dt>
              <dd className="text-sm text-muted-foreground">{s.description}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-muted-foreground">Press Esc or ? to close</p>
      </div>
    </div>
  )
}
