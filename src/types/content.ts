import type { RealmId, SubjectId } from '@/lib/constants/realms'

export type Tier = 'core' | 'confident' | 'challenge'

export interface CurriculumTag {
  ks3Objective: string
  awardingBodies: {
    aqa?: string
    edexcel?: string
    ocr?: string
  }
}

export interface MasteryRule {
  streak: number
  spacedReviewDays: number[]
}

export interface InteractiveScene {
  id: string
  title: string
  type: 'fraction-wall' | 'number-line' | 'diagram' | 'simulation'
  instructions: string
  data: Record<string, unknown>
}

export interface WorkedExample {
  id: string
  title: string
  steps: WorkedExampleStep[]
}

export interface WorkedExampleStep {
  explanation: string
  maths?: string
  visual?: string
}

export interface Misconception {
  id: string
  description: string
  triggerAnswer: string
  correction: string
  reExplanation: string
}

// Question types (discriminated union)

interface QuestionBase {
  id: string
  stem: string
  tier: Tier
  hint?: string
  misconceptionId?: string
  xpValue: number
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: 'multiple-choice'
  options: string[]
  correctIndex: number
}

export interface NumericEntryQuestion extends QuestionBase {
  type: 'numeric-entry'
  correctAnswer: number
  tolerance?: number
  unit?: string
}

export interface DragOrderQuestion extends QuestionBase {
  type: 'drag-order'
  items: string[]
  correctOrder: number[]
}

export interface SpotMisconceptionQuestion extends QuestionBase {
  type: 'spot-misconception'
  statements: { text: string; isMisconception: boolean }[]
}

export interface SliderExploreQuestion extends QuestionBase {
  type: 'slider-explore'
  min: number
  max: number
  step: number
  correctRange: [number, number]
  label: string
}

export interface FreeTextQuestion extends QuestionBase {
  type: 'free-text'
  sampleAnswer: string
  keywords: string[]
}

export interface DragDropBuilderQuestion extends QuestionBase {
  type: 'drag-drop-builder'
  parts: string[]
  correctArrangement: string[]
}

export interface MissingStepQuestion extends QuestionBase {
  type: 'missing-step'
  steps: (string | null)[]
  missingStepIndex: number
  correctStep: string
}

export interface DataExtractionQuestion extends QuestionBase {
  type: 'data-extraction'
  dataSource: string
  correctAnswer: string
}

export interface SketchQuestion extends QuestionBase {
  type: 'sketch'
  gridConfig: { xMin: number; xMax: number; yMin: number; yMax: number }
  correctPoints: [number, number][]
}

export type Question =
  | MultipleChoiceQuestion
  | NumericEntryQuestion
  | DragOrderQuestion
  | SpotMisconceptionQuestion
  | SliderExploreQuestion
  | FreeTextQuestion
  | DragDropBuilderQuestion
  | MissingStepQuestion
  | DataExtractionQuestion
  | SketchQuestion

export interface SkillNode {
  id: string
  title: string
  description: string
  subject: SubjectId
  realm: RealmId
  zoneId: string
  zoneName: string
  tier: Tier
  prerequisites: string[]
  curriculum: CurriculumTag
  scenes: InteractiveScene[]
  workedExamples: WorkedExample[]
  questions: Question[]
  misconceptions: Misconception[]
  masteryRule: MasteryRule
}

export interface Zone {
  id: string
  name: string
  realm: RealmId
  nodeIds: string[]
  bossNodeId?: string
}

export interface Realm {
  id: RealmId
  subject: SubjectId
  label: string
  zones: Zone[]
}

// Type guards

export function isMultipleChoice(q: Question): q is MultipleChoiceQuestion {
  return q.type === 'multiple-choice'
}

export function isNumericEntry(q: Question): q is NumericEntryQuestion {
  return q.type === 'numeric-entry'
}

export function isDragOrder(q: Question): q is DragOrderQuestion {
  return q.type === 'drag-order'
}

export function isSpotMisconception(q: Question): q is SpotMisconceptionQuestion {
  return q.type === 'spot-misconception'
}
