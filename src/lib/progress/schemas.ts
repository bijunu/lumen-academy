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
  attemptCount: z.number().int().positive(),
  hintLevel: z.enum(HINT_LEVELS).optional(),
  answer: z.unknown().optional(),
  clientCorrect: z.boolean().optional(),
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

export const dailyChallengeAttemptSchema = z.object({
  answer: z.unknown().optional(),
  clientCorrect: z.boolean().optional(),
})

export type DailyChallengeAttemptInput = z.infer<
  typeof dailyChallengeAttemptSchema
>

export const bossAttemptSchema = z.object({
  answers: z
    .array(
      z.object({
        nodeId: z.string().min(1),
        questionId: z.string().min(1),
        answer: z.unknown().optional(),
        clientCorrect: z.boolean().optional(),
      })
    )
    .min(1),
})

export type BossAttemptInput = z.infer<typeof bossAttemptSchema>
