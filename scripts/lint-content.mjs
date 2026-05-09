#!/usr/bin/env node
// Content linter for src/content/seed/**/*.ts.
// Enforces the rules in docs/07-slice-protocol.md "Pre-commit linter".
// Usage:
//   node scripts/lint-content.mjs                       # lint all seed files
//   node scripts/lint-content.mjs --staged              # lint only files in git diff --cached --name-only
//   node scripts/lint-content.mjs --file <path>         # lint a single file (relative or absolute)
// Exit code: 0 if zero blockers, 1 otherwise. Warnings never fail the run.

import { execSync } from 'node:child_process'
import { readFileSync, statSync } from 'node:fs'
import { resolve, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

// --------- file selection ---------

function listAllSeedFiles() {
  const out = execSync('git ls-files src/content/seed', { cwd: REPO_ROOT, encoding: 'utf8' })
  return out
    .split('\n')
    .filter((p) => p.endsWith('.ts') && !p.endsWith('.test.ts') && !p.endsWith('index.ts'))
    .map((p) => resolve(REPO_ROOT, p))
}

function listStagedSeedFiles() {
  const out = execSync('git diff --cached --name-only --diff-filter=ACMR', {
    cwd: REPO_ROOT,
    encoding: 'utf8',
  })
  return out
    .split('\n')
    .filter((p) => p.startsWith('src/content/seed/') && p.endsWith('.ts'))
    .filter((p) => !p.endsWith('.test.ts') && !p.endsWith('index.ts'))
    .map((p) => resolve(REPO_ROOT, p))
    .filter((p) => {
      try {
        statSync(p)
        return true
      } catch {
        return false
      }
    })
}

function parseArgs() {
  const argv = process.argv.slice(2)
  const args = { staged: false, files: [] }
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i]
    if (a === '--staged') args.staged = true
    else if (a === '--file') {
      const p = argv[i + 1]
      if (!p) throw new Error('--file requires a path')
      args.files.push(resolve(p))
      i += 1
    } else {
      throw new Error(`unknown arg: ${a}`)
    }
  }
  return args
}

// --------- finding type ---------

const findings = []

function record(severity, rule, file, line, message, suggestedFix) {
  findings.push({ severity, rule, file, line, message, suggestedFix })
}

const USER_FACING_FIELDS = new Set([
  'title',
  'description',
  'stem',
  'hint',
  'reExplanation',
  'instructions',
  'label',
  'correction',
  'explanation',
])

const RENDERER_INTERACTIVE_SCENE_TYPES = new Set(['fraction-wall', 'labelled-diagram'])

const ACTION_VERB_REGEX = /\b(click|drag|tap|move|drop)\b/i

// UK English check on user-facing fields. "meter" is intentionally OMITTED because
// UK English uses "meter" for instruments (ammeter, voltmeter, gas meter, parking meter)
// and "metre" only for the length unit. The two are easy to conflate. We flag
// length-unit misspellings via LENGTH_UNIT_US_REGEX below instead.
const US_SPELLING_REGEX = /\b(color|colors|colored|coloring|learned|favorite|favorites|favorited|center|centers|centered|centering|fiber|fibers|behavior|behaviors|behavioral)\b/i

// Length-context "meter(s)" misspelling: a number directly preceding "meter(s)" almost
// always means the length unit, where UK English requires "metre(s)".
const LENGTH_UNIT_US_REGEX = /\b\d+(?:\.\d+)?\s+meters?\b/i

const VERIFY_PLACEHOLDER_REGEX = /\(verify [^)]+\)/i

// --------- per-file scan ---------

function relPath(absPath) {
  return relative(REPO_ROOT, absPath)
}

function scanFile(absPath) {
  const file = relPath(absPath)
  const src = readFileSync(absPath, 'utf8')
  const lines = src.split('\n')

  // State for grouping MCQs by node
  // A node starts at lines matching /^export const \w+: SkillNode = \{/
  // For each node, collect correctIndex values.
  const nodes = [] // { startLine, endLine?, mcqIndices: number[] }
  let currentNode = null

  // State for scenes (to bind instructions to scene type)
  // A scene starts at a line matching /id: '[\w-]+',/ AND we're inside a `scenes:` array.
  // Simpler: track when we see `type: '<x>',` inside a scene; remember it; when we see
  // an `instructions:` line within the same scene block, check action verbs against type.
  // Light state machine: scenes-array depth, scene-block depth.
  let inScenesArray = false
  let braceDepth = 0
  let scenesArrayDepth = -1
  let currentSceneType = null
  let currentSceneStartLine = null

  for (let i = 0; i < lines.length; i += 1) {
    const lineNo = i + 1
    const line = lines[i]
    const stripped = stripCommentsForRegex(line)

    // Node tracking
    const nodeMatch = line.match(/^export const \w+: SkillNode = \{/)
    if (nodeMatch) {
      currentNode = { startLine: lineNo, mcqIndices: [], filePath: file }
      nodes.push(currentNode)
    }
    if (currentNode && /^\}/.test(line) && braceDepth <= 1) {
      currentNode.endLine = lineNo
      currentNode = null
    }

    // Brace depth tracking (rough)
    for (const ch of line) {
      if (ch === '{') braceDepth += 1
      else if (ch === '}') braceDepth -= 1
    }

    // scenes: [ detection
    if (/\bscenes:\s*\[/.test(line)) {
      inScenesArray = true
      scenesArrayDepth = braceDepth
    }
    if (inScenesArray && braceDepth < scenesArrayDepth) {
      inScenesArray = false
      scenesArrayDepth = -1
      currentSceneType = null
    }

    if (inScenesArray) {
      const sceneTypeMatch = line.match(/^\s*type:\s*'([\w-]+)'/)
      if (sceneTypeMatch) {
        currentSceneType = sceneTypeMatch[1]
        currentSceneStartLine = lineNo
      }
    }

    // R1 em-dash
    if (line.includes('—')) {
      record(
        'blocker',
        'R1',
        file,
        lineNo,
        'em dash (—) found in seed file',
        'Replace with a comma, colon, or restructured sentence. UK style.',
      )
    }

    // R2 verify-placeholder
    if (VERIFY_PLACEHOLDER_REGEX.test(stripped) || VERIFY_PLACEHOLDER_REGEX.test(line)) {
      record(
        'blocker',
        'R2',
        file,
        lineNo,
        '"(verify ...)" source placeholder found',
        'Pin the source via WebSearch / WebFetch before committing.',
      )
    }

    // R3 us-spelling on user-facing fields
    const fieldMatch = line.match(/^\s*(\w+):\s*['"`]/)
    if (fieldMatch && USER_FACING_FIELDS.has(fieldMatch[1])) {
      const valueText = extractStringValue(line)
      if (valueText) {
        const usMatch = valueText.match(US_SPELLING_REGEX)
        if (usMatch) {
          record(
            'blocker',
            'R3',
            file,
            lineNo,
            `US spelling "${usMatch[0]}" in user-facing field "${fieldMatch[1]}"`,
            'Use UK spelling: colour, learnt, favourite, centre, fibre, behaviour.',
          )
        }
        const lenMatch = valueText.match(LENGTH_UNIT_US_REGEX)
        if (lenMatch) {
          record(
            'blocker',
            'R3',
            file,
            lineNo,
            `length unit "${lenMatch[0]}" uses US "meter" in user-facing field "${fieldMatch[1]}"`,
            'Use UK "metre(s)" for the length unit. "meter" is reserved for instruments (ammeter, voltmeter).',
          )
        }
      }
    }

    // R4 scene-instruction-mismatch
    if (inScenesArray && /^\s*instructions:/.test(line)) {
      // Pull the value, including possibly continued onto next line
      const valueText = extractStringValueMultiline(lines, i)
      if (valueText && ACTION_VERB_REGEX.test(valueText)) {
        if (currentSceneType && !RENDERER_INTERACTIVE_SCENE_TYPES.has(currentSceneType)) {
          const verb = valueText.match(ACTION_VERB_REGEX)[0]
          record(
            'blocker',
            'R4',
            file,
            lineNo,
            `scene instructions promise interaction ("${verb}") but scene type "${currentSceneType}" is not interactive`,
            'Either switch the scene to type "labelled-diagram" with hotspots, or rewrite the instructions as readable narrative (no click/drag/tap/move/drop). See docs/02-content-schema.md "Renderer support matrix".',
          )
        }
      }
    }

    // MCQ correctIndex collection
    // Match `correctIndex: <0-9>` only when we know we're inside an MCQ.
    // Simpler approach: collect every `correctIndex:` we see. MCQ is the only question type using it.
    if (currentNode) {
      const ciMatch = line.match(/^\s*correctIndex:\s*(\d)/)
      if (ciMatch) {
        currentNode.mcqIndices.push(Number(ciMatch[1]))
      }
    }
  }

  // R5 + W1 per-node MCQ rules
  for (const n of nodes) {
    const indices = n.mcqIndices
    if (indices.length === 0) continue

    // R5: dominant position when N >= 6
    if (indices.length >= 6) {
      const counts = [0, 0, 0, 0]
      for (const v of indices) counts[v] += 1
      const max = Math.max(...counts)
      if (max / indices.length > 0.5) {
        const dominantPos = counts.indexOf(max)
        record(
          'blocker',
          'R5',
          n.filePath,
          n.startLine,
          `MCQ correctIndex distribution: position ${dominantPos} holds ${max} of ${indices.length} (>50%) in this node`,
          'Rebalance correctIndex across A/B/C/D so no single position dominates.',
        )
      }
    }

    // W1: any of {0,1,2,3} missing when N >= 4
    if (indices.length >= 4) {
      const seen = new Set(indices)
      const missing = []
      for (const v of [0, 1, 2, 3]) if (!seen.has(v)) missing.push(v)
      if (missing.length > 0) {
        record(
          'warning',
          'W1',
          n.filePath,
          n.startLine,
          `MCQ correctIndex distribution missing position${missing.length > 1 ? 's' : ''} ${missing.join(', ')} across ${indices.length} MCQs`,
          'Consider rotating one distractor to fill the missing position.',
        )
      }
    }
  }

  // W2 author-without-source: count "// Authored, no external source" per node
  // Track per node: count of such comments.
  // Simpler approach: find all such comments, then bucket by which node range they fall in.
  const authoredRegex = /\/\/\s*Authored,\s*no external source/i
  for (let i = 0; i < lines.length; i += 1) {
    if (authoredRegex.test(lines[i])) {
      // find which node this line is in
      const lineNo = i + 1
      const owning = nodes.find(
        (n) => lineNo >= n.startLine && (n.endLine ? lineNo <= n.endLine : true),
      )
      if (owning) {
        owning._authored = (owning._authored || 0) + 1
      }
    }
  }
  for (const n of nodes) {
    if ((n._authored || 0) > 1) {
      record(
        'warning',
        'W2',
        n.filePath,
        n.startLine,
        `${n._authored} "Authored, no external source" misconceptions in this node (max 1 per playbook)`,
        'Pin sources for the additional misconceptions via reference shelf citations.',
      )
    }
  }
}

// --------- helpers ---------

function stripCommentsForRegex(line) {
  // Strip the trailing inline comment if any. Keep the line text as a string so US-spellings
  // inside `// Source: ...` comments don't trigger R3.
  const idx = line.indexOf('//')
  if (idx === -1) return line
  return line.slice(0, idx)
}

function extractStringValue(line) {
  // Pulls the string literal that immediately follows `field: ` on the same line.
  const m = line.match(/^\s*\w+:\s*(['"`])((?:\\.|(?!\1).)*)\1/)
  if (m) return m[2]
  return null
}

function extractStringValueMultiline(lines, startIndex) {
  // Handle the common pattern:
  //   instructions:
  //     'Click each cell ...'
  // Concatenate up to 3 following lines until a closing comma at depth 0.
  let buf = ''
  for (let j = startIndex; j < Math.min(startIndex + 4, lines.length); j += 1) {
    buf += ' ' + lines[j]
    if (lines[j].includes("',") || lines[j].includes('",')) break
  }
  // Pull all single-quoted runs out
  const m = buf.match(/'([^']+)'/)
  if (m) return m[1]
  const m2 = buf.match(/"([^"]+)"/)
  if (m2) return m2[1]
  return null
}

// (no longer used; kept for reference if R3 grows additional ambiguous cases)

// --------- main ---------

function main() {
  const args = parseArgs()
  let files
  if (args.files.length > 0) {
    files = args.files
  } else if (args.staged) {
    files = listStagedSeedFiles()
  } else {
    files = listAllSeedFiles()
  }

  if (files.length === 0) {
    if (args.staged) {
      console.log('lint-content: no staged seed files; nothing to check.')
    } else {
      console.log('lint-content: no seed files found.')
    }
    return 0
  }

  for (const f of files) {
    scanFile(f)
  }

  // Output: GCC-style for editor jump-to.
  const blockers = findings.filter((x) => x.severity === 'blocker')
  const warnings = findings.filter((x) => x.severity === 'warning')

  for (const f of [...blockers, ...warnings]) {
    const sev = f.severity === 'blocker' ? 'error' : 'warning'
    console.log(`${f.file}:${f.line}: ${sev}: [${f.rule}] ${f.message}`)
    if (f.suggestedFix) {
      console.log(`  fix: ${f.suggestedFix}`)
    }
  }

  console.log('')
  console.log(
    `lint-content: scanned ${files.length} file${files.length === 1 ? '' : 's'}, ${blockers.length} blocker${blockers.length === 1 ? '' : 's'}, ${warnings.length} warning${warnings.length === 1 ? '' : 's'}.`,
  )

  return blockers.length > 0 ? 1 : 0
}

process.exit(main())
