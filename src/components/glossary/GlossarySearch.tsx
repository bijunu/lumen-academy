'use client'

import { useState, useCallback } from 'react'

interface GlossaryResult {
  term: string
  definition: string
  example: string
  relatedTerms: string[]
}

interface GlossarySearchProps {
  open: boolean
  onClose: () => void
}

export function GlossarySearch({ open, onClose }: GlossarySearchProps) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<GlossaryResult | null>(null)
  const [loading, setLoading] = useState(false)

  const search = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!query.trim()) return

      setLoading(true)
      try {
        const res = await fetch('/api/glossary', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ term: query.trim() }),
        })
        const data: GlossaryResult = await res.json()
        setResult(data)
      } catch {
        setResult(null)
      } finally {
        setLoading(false)
      }
    },
    [query]
  )

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-label="Glossary search"
    >
      <div
        className="w-full max-w-lg rounded-lg bg-card p-6 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="mb-4 text-lg font-semibold">Glossary</h2>

        <form onSubmit={search} className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for a term..."
            className="flex-1 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            autoFocus
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? 'Looking up...' : 'Search'}
          </button>
        </form>

        {result && (
          <div className="mt-4 space-y-2 rounded-md bg-muted p-4">
            <p className="font-semibold">{result.term}</p>
            <p className="text-sm">{result.definition}</p>
            {result.example && (
              <p className="text-sm italic text-muted-foreground">{result.example}</p>
            )}
            {result.relatedTerms.length > 0 && (
              <p className="text-xs text-muted-foreground">
                Related: {result.relatedTerms.join(', ')}
              </p>
            )}
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground">Press Esc or G to close</p>
      </div>
    </div>
  )
}
