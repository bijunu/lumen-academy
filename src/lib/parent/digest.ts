import { REALMS, REALM_LIST, type RealmId } from '@/lib/constants/realms'

import type { ConversationPrompt } from './conversationPrompts'
import type { StrugglingTopic } from './strugglingTopics'
import { formatMinutes, type WeeklyTime } from './weeklyTime'
import type { RealmProgressMap } from '@/lib/progress/homeSummary'

export interface WeeklyDigest {
  weekStart: string
  weekEnd: string
  learnerLabel: string
  weeklyTime: WeeklyTime
  realmProgress: RealmProgressMap
  struggling: readonly StrugglingTopic[]
  prompts: readonly ConversationPrompt[]
}

export interface ComposeDigestInput {
  weeklyTime: WeeklyTime
  realmProgress: RealmProgressMap
  struggling: readonly StrugglingTopic[]
  prompts: readonly ConversationPrompt[]
  learnerLabel?: string
}

export function composeDigest(input: ComposeDigestInput): WeeklyDigest {
  const { weeklyTime } = input
  const days = weeklyTime.dailyMinutes
  return {
    weekStart: days[0]?.day ?? '',
    weekEnd: days[days.length - 1]?.day ?? '',
    learnerLabel: input.learnerLabel?.trim() || 'your child',
    weeklyTime,
    realmProgress: input.realmProgress,
    struggling: input.struggling,
    prompts: input.prompts,
  }
}

export function renderDigestHtml(digest: WeeklyDigest): string {
  const head = renderHead(digest)
  const body = [
    renderHeader(digest),
    renderTimeSection(digest),
    renderRealmSection(digest),
    renderStrugglingSection(digest),
    renderPromptsSection(digest),
    renderFooter(),
  ].join('\n')
  return `<!DOCTYPE html>
<html lang="en-GB">
${head}
<body style="${BODY_STYLE}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f5f7;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:12px;padding:24px;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1a1a1a;">
${body}
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

const BODY_STYLE =
  'margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1a1a1a;'

function renderHead(digest: WeeklyDigest): string {
  const title = `Lumen Academy weekly digest, ${digest.weekStart} to ${digest.weekEnd}`
  return `<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${escape(title)}</title>
</head>`
}

function renderHeader(digest: WeeklyDigest): string {
  return `<tr><td>
  <p style="font-size:14px;color:#666;margin:0 0 4px 0;">Lumen Academy</p>
  <h1 style="font-size:22px;margin:0 0 4px 0;">Weekly digest for ${escape(digest.learnerLabel)}</h1>
  <p style="font-size:14px;color:#666;margin:0 0 24px 0;">${escape(digest.weekStart)} to ${escape(digest.weekEnd)}</p>
</td></tr>`
}

function renderTimeSection(digest: WeeklyDigest): string {
  const total = formatMinutes(digest.weeklyTime.totalMinutes)
  const activeDays = digest.weeklyTime.dailyMinutes.filter(d => d.minutes > 0)
    .length
  const peak = Math.max(...digest.weeklyTime.dailyMinutes.map(d => d.minutes), 1)
  const cells = digest.weeklyTime.dailyMinutes
    .map(d => {
      const heightPx = d.minutes > 0 ? Math.max(4, Math.round((d.minutes / peak) * 60)) : 0
      return `<td align="center" valign="bottom" style="padding:0 4px;">
        <div style="width:30px;height:60px;display:inline-block;vertical-align:bottom;">
          <div style="width:30px;height:${heightPx}px;background:#3B82F6;border-radius:4px 4px 0 0;"></div>
        </div>
        <div style="font-size:11px;color:#666;margin-top:6px;">${escape(d.day.slice(8))}</div>
        <div style="font-size:11px;color:#999;">${escape(formatMinutes(d.minutes))}</div>
      </td>`
    })
    .join('')
  return `<tr><td style="padding:16px 0;">
  <h2 style="font-size:16px;margin:0 0 8px 0;">Time on app</h2>
  <p style="font-size:14px;color:#444;margin:0 0 12px 0;">${escape(total)} across ${activeDays} day(s).</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>${cells}</tr>
  </table>
</td></tr>`
}

function renderRealmSection(digest: WeeklyDigest): string {
  const rows = REALM_LIST.map(realm => {
    const stats = digest.realmProgress[realm.id as RealmId]
    const pct = stats.total > 0 ? Math.round((stats.mastered / stats.total) * 100) : 0
    return `<tr>
  <td style="padding:6px 0;font-size:14px;width:140px;color:#333;">${escape(realm.label)}</td>
  <td style="padding:6px 0;">
    <div style="background:#eee;border-radius:4px;height:8px;width:100%;">
      <div style="width:${pct}%;height:8px;background:${escape(realm.colour)};border-radius:4px;"></div>
    </div>
  </td>
  <td style="padding:6px 0 6px 12px;font-size:13px;color:#666;width:80px;text-align:right;">${stats.mastered} of ${stats.total}</td>
</tr>`
  }).join('')
  return `<tr><td style="padding:16px 0;border-top:1px solid #eee;">
  <h2 style="font-size:16px;margin:0 0 12px 0;">Mastery by realm</h2>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    ${rows}
  </table>
</td></tr>`
}

function renderStrugglingSection(digest: WeeklyDigest): string {
  if (digest.struggling.length === 0) {
    return `<tr><td style="padding:16px 0;border-top:1px solid #eee;">
  <h2 style="font-size:16px;margin:0 0 8px 0;">Struggling topics</h2>
  <p style="font-size:14px;color:#666;margin:0;">Nothing to flag this week. Once a few questions are attempted, the weakest will appear here.</p>
</td></tr>`
  }
  const rows = digest.struggling
    .map(t => {
      const realm = REALMS[t.realm]
      const pct = Math.round(t.accuracy * 100)
      return `<tr>
  <td style="padding:6px 0;font-size:14px;color:#333;">
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${escape(realm.colour)};margin-right:8px;vertical-align:middle;"></span>
    ${escape(t.title)}
  </td>
  <td style="padding:6px 0;font-size:13px;color:#666;text-align:right;">${pct}% of ${t.totalAttempts}</td>
</tr>`
    })
    .join('')
  return `<tr><td style="padding:16px 0;border-top:1px solid #eee;">
  <h2 style="font-size:16px;margin:0 0 8px 0;">Struggling topics</h2>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    ${rows}
  </table>
</td></tr>`
}

function renderPromptsSection(digest: WeeklyDigest): string {
  if (digest.prompts.length === 0) {
    return `<tr><td style="padding:16px 0;border-top:1px solid #eee;">
  <h2 style="font-size:16px;margin:0 0 8px 0;">Conversation starters</h2>
  <p style="font-size:14px;color:#666;margin:0;">A few will appear once your child has practised a topic or two.</p>
</td></tr>`
  }
  const items = digest.prompts
    .map(p => {
      const realm = REALMS[p.realm]
      return `<li style="margin:0 0 8px 0;padding:8px 12px;border-left:4px solid ${escape(realm.colour)};background:#fafafa;border-radius:0 6px 6px 0;font-size:14px;color:#333;">${escape(p.text)}</li>`
    })
    .join('')
  return `<tr><td style="padding:16px 0;border-top:1px solid #eee;">
  <h2 style="font-size:16px;margin:0 0 8px 0;">Conversation starters</h2>
  <ul style="list-style:none;margin:0;padding:0;">${items}</ul>
</td></tr>`
}

function renderFooter(): string {
  return `<tr><td style="padding:24px 0 0 0;border-top:1px solid #eee;">
  <p style="font-size:12px;color:#999;margin:0;">
    Lumen Academy. UK KS3 mastery learning. No ads, no third party trackers.
  </p>
</td></tr>`
}

const ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escape(value: string): string {
  return value.replace(/[&<>"']/g, c => ESCAPE_MAP[c])
}
