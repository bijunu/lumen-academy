/**
 * Rubric validator for the Lumen Academy content seed.
 *
 * Reads every SkillNode exported from src/content/seed and grades it against
 * docs/06-authoring-playbook.md. Prints a per-node report.
 *
 * Exits 0 by default. Pass --strict to exit non-zero when any finding has
 * severity 'fail'. Use --strict in CI once content is at bar.
 *
 * Usage:
 *   npm run eval-content
 *   npm run eval-content -- --strict
 */
import { allSeededNodes } from '../src/content/seed'
import { evaluateNodes } from '../src/lib/contentEval/rubric'

function main(): void {
  const strict = process.argv.includes('--strict')
  const { reports, summary } = evaluateNodes(allSeededNodes)

  console.info('=== Lumen Academy Content Eval ===')
  console.info('')

  for (const report of reports) {
    const fails = report.findings.filter(f => f.severity === 'fail')
    const warns = report.findings.filter(f => f.severity === 'warn')

    console.info(`Node: ${report.nodeId} (${report.title})`)
    if (fails.length === 0 && warns.length === 0) {
      console.info('  Pass')
    } else {
      for (const f of fails) {
        console.info(`  FAIL ${f.rule}: ${f.message}`)
      }
      for (const w of warns) {
        console.info(`  WARN ${w.rule}: ${w.message}`)
      }
    }
    console.info('')
  }

  console.info(
    `Summary: ${summary.passingNodes} of ${summary.totalNodes} nodes meet the rubric (${summary.failingNodes} failing).`
  )

  if (strict && summary.failingNodes > 0) {
    process.exit(1)
  }
}

main()
