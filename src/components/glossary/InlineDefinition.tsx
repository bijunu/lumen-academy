'use client'

import { useState, useCallback } from 'react'

interface Definition {
  term: string
  definition: string
  example: string
  relatedTerms: string[]
}

interface InlineDefinitionProps {
  term: string
  children: React.ReactNode
}

export function InlineDefinition({ term, children }: InlineDefinitionProps) {
  const [definition, setDefinition] = useState<Definition | null>(null)
  const [showPopover, setShowPopover] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchDefinition = useCallback(async () => {
    if (definition) {
      setShowPopover(true)
      return
    }

    setLoading(true)
    setShowPopover(true)

    try {
      const res = await fetch('/api/glossary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ term }),
      })
      const data: Definition = await res.json()
      setDefinition(data)
    } catch {
      setDefinition({
        term,
        definition: 'Definition unavailable.',
        example: '',
        relatedTerms: [],
      })
    } finally {
      setLoading(false)
    }
  }, [term, definition])

  return (
    <span className="relative inline-block">
      <button
        className="border-b border-dashed border-primary/50 text-inherit hover:border-primary"
        onMouseEnter={fetchDefinition}
        onClick={fetchDefinition}
        onMouseLeave={() => setShowPopover(false)}
        aria-label={`Define ${term}`}
      >
        {children}
      </button>

      {showPopover && (
        <div
          className="absolute bottom-full left-0 z-30 mb-2 w-64 rounded-lg border bg-popover p-3 shadow-lg"
          role="tooltip"
          onMouseEnter={() => setShowPopover(true)}
          onMouseLeave={() => setShowPopover(false)}
        >
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading...</p>
          ) : definition ? (
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase text-primary">{definition.term}</p>
              <p className="text-sm">{definition.definition}</p>
              {definition.example && (
                <p className="text-xs italic text-muted-foreground">{definition.example}</p>
              )}
              {definition.relatedTerms.length > 0 && (
                <p className="text-xs text-muted-foreground">
                  Related: {definition.relatedTerms.join(', ')}
                </p>
              )}
            </div>
          ) : null}
        </div>
      )}
    </span>
  )
}
