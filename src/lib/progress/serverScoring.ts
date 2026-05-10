import type {
  FreeTextQuestion,
  Question,
  SketchQuestion,
} from '@/types/content'

type RendererScoredQuestion = FreeTextQuestion | SketchQuestion
type RendererScoredType = RendererScoredQuestion['type']

const RENDERER_SCORED: ReadonlySet<RendererScoredType> = new Set<RendererScoredType>([
  'free-text',
  'sketch',
])

function isRendererScoredQuestion(q: Question): q is RendererScoredQuestion {
  return RENDERER_SCORED.has(q.type as RendererScoredType)
}

export class InvalidAnswerError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidAnswerError'
  }
}

export interface ScoreInput {
  answer?: unknown
  clientCorrect?: boolean
}

export function isRendererScored(type: Question['type']): boolean {
  return RENDERER_SCORED.has(type as RendererScoredType)
}

export function scoreAnswer(question: Question, input: ScoreInput): boolean {
  if (isRendererScoredQuestion(question)) {
    return input.clientCorrect === true
  }

  if (input.answer === undefined || input.answer === null) {
    throw new InvalidAnswerError(
      `answer is required for question type "${question.type}"`
    )
  }

  switch (question.type) {
    case 'multiple-choice':
      return scoreMultipleChoice(question.correctIndex, input.answer)
    case 'numeric-entry':
      return scoreNumericEntry(
        question.correctAnswer,
        question.tolerance,
        input.answer
      )
    case 'drag-order':
      return scoreNumberArray(question.correctOrder, input.answer)
    case 'spot-misconception':
      return scoreSpotMisconception(question.statements, input.answer)
    case 'slider-explore':
      return scoreSliderExplore(question.correctRange, input.answer)
    case 'drag-drop-builder':
      return scoreStringArray(question.correctArrangement, input.answer)
    case 'missing-step':
      return scoreMissingStep(question.correctStep, input.answer)
    case 'data-extraction':
      return scoreDataExtraction(question.correctAnswer, input.answer)
    case 'labelled-image':
      return scoreLabelledImage(question.hotspots, input.answer)
    default: {
      const exhaustive: never = question
      void exhaustive
      throw new InvalidAnswerError(
        `no scorer for question type "${(question as Question).type}"`
      )
    }
  }
}

function scoreMultipleChoice(correctIndex: number, answer: unknown): boolean {
  if (typeof answer !== 'number' || !Number.isInteger(answer)) {
    throw new InvalidAnswerError('multiple-choice answer must be an integer index')
  }
  return answer === correctIndex
}

function scoreNumericEntry(
  correctAnswer: number,
  tolerance: number | undefined,
  answer: unknown
): boolean {
  const value =
    typeof answer === 'number'
      ? answer
      : typeof answer === 'string'
        ? Number(answer)
        : NaN
  if (!Number.isFinite(value)) {
    throw new InvalidAnswerError('numeric-entry answer must be a finite number')
  }
  return tolerance && tolerance > 0
    ? Math.abs(value - correctAnswer) <= tolerance
    : value === correctAnswer
}

function scoreNumberArray(expected: number[], answer: unknown): boolean {
  if (
    !Array.isArray(answer) ||
    answer.length !== expected.length ||
    !answer.every(v => typeof v === 'number')
  ) {
    throw new InvalidAnswerError('drag-order answer must be a number array')
  }
  return answer.every((v, i) => v === expected[i])
}

function scoreStringArray(expected: string[], answer: unknown): boolean {
  if (
    !Array.isArray(answer) ||
    answer.length !== expected.length ||
    !answer.every(v => typeof v === 'string')
  ) {
    throw new InvalidAnswerError('drag-drop-builder answer must be a string array')
  }
  return answer.every((v, i) => v === expected[i])
}

function scoreSpotMisconception(
  statements: { isMisconception: boolean }[],
  answer: unknown
): boolean {
  if (typeof answer !== 'number' || !Number.isInteger(answer)) {
    throw new InvalidAnswerError(
      'spot-misconception answer must be an integer index'
    )
  }
  const stmt = statements[answer]
  if (!stmt) {
    throw new InvalidAnswerError(
      'spot-misconception answer index out of range'
    )
  }
  return stmt.isMisconception
}

function scoreSliderExplore(
  range: readonly [number, number],
  answer: unknown
): boolean {
  if (typeof answer !== 'number' || !Number.isFinite(answer)) {
    throw new InvalidAnswerError('slider-explore answer must be a finite number')
  }
  return answer >= range[0] && answer <= range[1]
}

function scoreMissingStep(correctStep: string, answer: unknown): boolean {
  if (typeof answer !== 'string') {
    throw new InvalidAnswerError('missing-step answer must be a string')
  }
  return normaliseText(answer) === normaliseText(correctStep)
}

function scoreDataExtraction(
  correctAnswer: string,
  answer: unknown
): boolean {
  if (typeof answer !== 'string') {
    throw new InvalidAnswerError('data-extraction answer must be a string')
  }
  return normaliseText(answer) === normaliseText(correctAnswer)
}

function scoreLabelledImage(
  hotspots: { id: string; correctLabel: string }[],
  answer: unknown
): boolean {
  if (!isRecord(answer)) {
    throw new InvalidAnswerError(
      'labelled-image answer must be an object keyed by hotspot id'
    )
  }
  return hotspots.every(h => {
    const submitted = answer[h.id]
    return typeof submitted === 'string' && submitted === h.correctLabel
  })
}

function normaliseText(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
