import type {
  Misconception,
  Question,
  SkillNode,
  Tier,
} from '@/types/content'

export type Severity = 'fail' | 'warn'

export interface RubricFinding {
  rule: string
  severity: Severity
  message: string
}

export interface NodeReport {
  nodeId: string
  title: string
  findings: RubricFinding[]
}

export interface ReportSummary {
  totalNodes: number
  passingNodes: number
  failingNodes: number
}

export interface EvaluationResult {
  reports: NodeReport[]
  summary: ReportSummary
}

const TIER_RANGE: Record<Tier, { min: number; max: number }> = {
  core: { min: 6, max: 8 },
  confident: { min: 6, max: 8 },
  challenge: { min: 4, max: 6 },
}

interface TypeQuota {
  min: number
  max?: number
}

const TYPE_QUOTA: Record<string, TypeQuota> = {
  'multiple-choice': { min: 6, max: 10 },
  'numeric-entry': { min: 4, max: 7 },
  'spot-misconception': { min: 1, max: 2 },
  'missing-step': { min: 1 },
}

interface BannedPattern {
  name: string
  regex: RegExp
}

const BANNED_PATTERNS: BannedPattern[] = [
  { name: 'all-or-none-of-above', regex: /\b(all|none)\s+of\s+the\s+above\b/i },
  { name: 'em-dash', regex: /[—–]/ },
  {
    name: 'us-units',
    regex: /\b(feet|foot|miles?|gallons?|inches|inch|fahrenheit)\b/i,
  },
  { name: 'us-temperature', regex: /°\s*F\b/ },
  { name: 'us-currency', regex: /\$\s*\d/ },
  {
    name: 'time-pressure',
    regex: /\b(hurry|quickly|in\s+\d+\s+seconds|you\s+have\s+\d+\s+seconds)\b/i,
  },
  { name: 'reward-bait', regex: /\b(bonus|double|triple)\s+xp\b/i },
]

export function evaluateNode(node: SkillNode): NodeReport {
  const findings: RubricFinding[] = []
  checkStructuralMinimums(node, findings)
  checkTierMix(node, findings)
  checkTypeQuotas(node, findings)
  checkCurriculumTagging(node, findings)
  checkMisconceptions(node, findings)
  checkUniqueIds(node, findings)
  checkBannedPatterns(node, findings)
  return { nodeId: node.id, title: node.title, findings }
}

export function evaluateNodes(nodes: SkillNode[]): EvaluationResult {
  const reports = nodes.map(evaluateNode)
  const failingNodes = reports.filter(r =>
    r.findings.some(f => f.severity === 'fail')
  ).length
  return {
    reports,
    summary: {
      totalNodes: reports.length,
      passingNodes: reports.length - failingNodes,
      failingNodes,
    },
  }
}

function checkStructuralMinimums(node: SkillNode, findings: RubricFinding[]) {
  if (node.scenes.length < 3) {
    findings.push({
      rule: 'scenes-min',
      severity: 'fail',
      message: `scenes count ${node.scenes.length}, expected at least 3`,
    })
  }
  if (node.workedExamples.length < 2) {
    findings.push({
      rule: 'worked-examples-min',
      severity: 'fail',
      message: `workedExamples count ${node.workedExamples.length}, expected at least 2`,
    })
  }
  if (node.questions.length < 20) {
    findings.push({
      rule: 'questions-min',
      severity: 'fail',
      message: `questions count ${node.questions.length}, expected at least 20`,
    })
  }
  if (node.misconceptions.length < 6) {
    findings.push({
      rule: 'misconceptions-min',
      severity: 'fail',
      message: `misconceptions count ${node.misconceptions.length}, expected at least 6`,
    })
  }
}

function checkTierMix(node: SkillNode, findings: RubricFinding[]) {
  const counts: Record<Tier, number> = { core: 0, confident: 0, challenge: 0 }
  for (const q of node.questions) counts[q.tier]++
  for (const tier of ['core', 'confident', 'challenge'] as Tier[]) {
    const { min, max } = TIER_RANGE[tier]
    const count = counts[tier]
    if (count < min || count > max) {
      findings.push({
        rule: `tier-mix-${tier}`,
        severity: 'fail',
        message: `${tier} tier count ${count}, expected ${min} to ${max}`,
      })
    }
  }
}

function checkTypeQuotas(node: SkillNode, findings: RubricFinding[]) {
  const counts = new Map<string, number>()
  for (const q of node.questions) {
    counts.set(q.type, (counts.get(q.type) ?? 0) + 1)
  }

  for (const [type, quota] of Object.entries(TYPE_QUOTA)) {
    const count = counts.get(type) ?? 0
    if (count < quota.min) {
      findings.push({
        rule: `type-quota-${type}-min`,
        severity: 'fail',
        message: `${type} count ${count}, expected at least ${quota.min}`,
      })
    }
    if (quota.max !== undefined && count > quota.max) {
      findings.push({
        rule: `type-quota-${type}-max`,
        severity: 'fail',
        message: `${type} count ${count}, expected at most ${quota.max}`,
      })
    }
  }

  const dragCount =
    (counts.get('drag-order') ?? 0) + (counts.get('drag-drop-builder') ?? 0)
  if (dragCount < 1) {
    findings.push({
      rule: 'drag-min',
      severity: 'fail',
      message: `drag-order plus drag-drop-builder count ${dragCount}, expected at least 1`,
    })
  }
}

function checkCurriculumTagging(node: SkillNode, findings: RubricFinding[]) {
  if (!node.curriculum.ks3Objective?.trim()) {
    findings.push({
      rule: 'ks3-objective-empty',
      severity: 'fail',
      message: 'curriculum.ks3Objective is empty',
    })
  }
  const ab = node.curriculum.awardingBodies
  const populated = [ab.aqa, ab.edexcel, ab.ocr].filter(
    v => typeof v === 'string' && v.trim().length > 0
  ).length
  if (populated < 2) {
    findings.push({
      rule: 'awarding-bodies-min',
      severity: 'fail',
      message: `awarding bodies populated ${populated}, expected at least 2 of aqa, edexcel, ocr`,
    })
  }
}

function checkMisconceptions(node: SkillNode, findings: RubricFinding[]) {
  for (const m of node.misconceptions) {
    if (!m.description?.trim()) {
      findings.push({
        rule: 'misconception-description-empty',
        severity: 'fail',
        message: `misconception ${m.id}: description is empty`,
      })
    }
    if (!m.triggerAnswer?.trim()) {
      findings.push({
        rule: 'misconception-trigger-empty',
        severity: 'fail',
        message: `misconception ${m.id}: triggerAnswer is empty`,
      })
    }
    const correctionWords = wordCount(m.correction)
    if (correctionWords > 40) {
      findings.push({
        rule: 'misconception-correction-length',
        severity: 'fail',
        message: `misconception ${m.id}: correction is ${correctionWords} words, expected at most 40`,
      })
    }
    const reExpWords = wordCount(m.reExplanation)
    if (reExpWords > 80) {
      findings.push({
        rule: 'misconception-reexplanation-length',
        severity: 'fail',
        message: `misconception ${m.id}: reExplanation is ${reExpWords} words, expected at most 80`,
      })
    }
  }

  const referenced = new Set(
    node.questions
      .map(q => q.misconceptionId)
      .filter((id): id is string => Boolean(id))
  )
  for (const m of node.misconceptions) {
    if (!referenced.has(m.id)) {
      findings.push({
        rule: 'misconception-unreferenced',
        severity: 'warn',
        message: `misconception ${m.id} is not referenced by any question's misconceptionId`,
      })
    }
  }

  const known = new Set(node.misconceptions.map(m => m.id))
  for (const q of node.questions) {
    if (q.misconceptionId && !known.has(q.misconceptionId)) {
      findings.push({
        rule: 'misconception-id-dangling',
        severity: 'fail',
        message: `question ${q.id} references unknown misconceptionId ${q.misconceptionId}`,
      })
    }
  }
}

function checkUniqueIds(node: SkillNode, findings: RubricFinding[]) {
  const qIds = node.questions.map(q => q.id)
  if (new Set(qIds).size !== qIds.length) {
    findings.push({
      rule: 'question-ids-unique',
      severity: 'fail',
      message: 'duplicate question id detected',
    })
  }
  const mIds = node.misconceptions.map(m => m.id)
  if (new Set(mIds).size !== mIds.length) {
    findings.push({
      rule: 'misconception-ids-unique',
      severity: 'fail',
      message: 'duplicate misconception id detected',
    })
  }
}

function checkBannedPatterns(node: SkillNode, findings: RubricFinding[]) {
  for (const { source, text } of collectText(node)) {
    for (const pattern of BANNED_PATTERNS) {
      if (pattern.regex.test(text)) {
        findings.push({
          rule: `banned-${pattern.name}`,
          severity: 'fail',
          message: `${source}: matches "${pattern.name}" (text: "${truncate(text, 80)}")`,
        })
      }
    }
  }
}

interface TextField {
  source: string
  text: string
}

function collectText(node: SkillNode): TextField[] {
  const out: TextField[] = []
  out.push({ source: 'node.title', text: node.title })
  out.push({ source: 'node.description', text: node.description })

  for (const s of node.scenes) {
    out.push({ source: `scene[${s.id}].title`, text: s.title })
    out.push({ source: `scene[${s.id}].instructions`, text: s.instructions })
  }

  for (const w of node.workedExamples) {
    out.push({ source: `workedExample[${w.id}].title`, text: w.title })
    w.steps.forEach((step, i) => {
      out.push({
        source: `workedExample[${w.id}].steps[${i}].explanation`,
        text: step.explanation,
      })
      if (step.maths) {
        out.push({
          source: `workedExample[${w.id}].steps[${i}].maths`,
          text: step.maths,
        })
      }
    })
  }

  for (const q of node.questions) {
    pushQuestionText(q, out)
  }

  for (const m of node.misconceptions) {
    out.push({
      source: `misconception[${m.id}].description`,
      text: m.description,
    })
    out.push({ source: `misconception[${m.id}].correction`, text: m.correction })
    out.push({
      source: `misconception[${m.id}].reExplanation`,
      text: m.reExplanation,
    })
  }

  return out.filter(({ text }) => typeof text === 'string' && text.length > 0)
}

function pushQuestionText(q: Question, out: TextField[]) {
  out.push({ source: `question[${q.id}].stem`, text: q.stem })
  if (q.hint) out.push({ source: `question[${q.id}].hint`, text: q.hint })

  switch (q.type) {
    case 'multiple-choice':
      q.options.forEach((opt, i) =>
        out.push({ source: `question[${q.id}].options[${i}]`, text: opt })
      )
      break
    case 'spot-misconception':
      q.statements.forEach((st, i) =>
        out.push({
          source: `question[${q.id}].statements[${i}].text`,
          text: st.text,
        })
      )
      break
    case 'drag-order':
      q.items.forEach((item, i) =>
        out.push({ source: `question[${q.id}].items[${i}]`, text: item })
      )
      break
    case 'slider-explore':
      out.push({ source: `question[${q.id}].label`, text: q.label })
      break
    case 'free-text':
      out.push({
        source: `question[${q.id}].sampleAnswer`,
        text: q.sampleAnswer,
      })
      break
    case 'drag-drop-builder':
      q.parts.forEach((p, i) =>
        out.push({ source: `question[${q.id}].parts[${i}]`, text: p })
      )
      break
    case 'missing-step':
      q.steps.forEach((st, i) => {
        if (st !== null) {
          out.push({ source: `question[${q.id}].steps[${i}]`, text: st })
        }
      })
      out.push({
        source: `question[${q.id}].correctStep`,
        text: q.correctStep,
      })
      break
    case 'data-extraction':
      out.push({
        source: `question[${q.id}].dataSource`,
        text: q.dataSource,
      })
      break
    case 'labelled-image':
      q.labels.forEach((label, i) =>
        out.push({ source: `question[${q.id}].labels[${i}]`, text: label })
      )
      q.hotspots.forEach((h, i) =>
        out.push({
          source: `question[${q.id}].hotspots[${i}].correctLabel`,
          text: h.correctLabel,
        })
      )
      break
    default:
      break
  }
}

function wordCount(s: string | undefined): number {
  if (!s) return 0
  return s.trim().split(/\s+/).filter(Boolean).length
}

function truncate(s: string, n: number): string {
  return s.length > n ? `${s.slice(0, n)}...` : s
}

export type { Misconception }
