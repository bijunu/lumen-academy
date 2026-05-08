import { z } from 'zod'
import type { HintLevel } from '@/types/tutor'
import type { MasteryLevel } from '@/types/progress'

const HINT_LEVELS = ['nudge', 'partial', 'worked'] as const satisfies readonly HintLevel[]
const MASTERY_LEVELS = [
  'none',
  'bronze',
  'silver',
  'gold',
  'platinum',
] as const satisfies readonly MasteryLevel[]

export const attemptWriteSchema = z.object({
  nodeId: z.string().min(1),
  questionId: z.string().min(1),
  correct: z.boolean(),
  attemptCount: z.number().int().positive(),
  hintLevel: z.enum(HINT_LEVELS).optional(),
})

export type AttemptWriteInput = z.infer<typeof attemptWriteSchema>

const masteryChangeSchema = z.object({
  nodeId: z.string().min(1),
  from: z.enum(MASTERY_LEVELS),
  to: z.enum(MASTERY_LEVELS),
})

export const sessionRecordWriteSchema = z
  .object({
    startedAt: z.coerce.date(),
    endedAt: z.coerce.date().nullable(),
    nodeIds: z.array(z.string().min(1)).min(1),
    questionsAttempted: z.number().int().nonnegative(),
    questionsCorrect: z.number().int().nonnegative(),
    xpEarned: z.number().int().nonnegative(),
    masteryChanges: z.array(masteryChangeSchema),
  })
  .refine(data => data.questionsCorrect <= data.questionsAttempted, {
    message: 'questionsCorrect cannot exceed questionsAttempted',
    path: ['questionsCorrect'],
  })

export type SessionRecordWriteInput = z.infer<typeof sessionRecordWriteSchema>
