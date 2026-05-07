export type HintLevel = 'nudge' | 'partial' | 'worked'

export interface TutorInput {
  nodeId: string
  nodeTitle: string
  questionStem: string
  questionType: string
  learnerAnswer?: string
  correctAnswer?: string
  misconceptionId?: string
  hintLevel: HintLevel
  previousHints: string[]
  attemptCount: number
  frustrationSignal: boolean
}

export interface TutorOutput {
  message: string
  hintLevel: HintLevel
  shouldOfferBreak: boolean
  suggestedEasierNode?: string
  flagForParent: boolean
}
