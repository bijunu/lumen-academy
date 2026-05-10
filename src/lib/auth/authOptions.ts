import NextAuth, { type NextAuthConfig } from 'next-auth'
import Nodemailer from 'next-auth/providers/nodemailer'
import { MongoDBAdapter } from '@auth/mongodb-adapter'

import { getMongoClient } from '@/lib/db/mongoClient'
import { logger } from '@/lib/logger'

const DEFAULT_DB_NAME = 'lumen-academy'
const DEFAULT_FROM = 'Lumen Academy <onboarding@resend.dev>'

function buildEmailHtml(url: string): string {
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sign in to Lumen Academy</title>
</head>
<body style="margin:0;padding:32px;background:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0F172A;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #E2E8F0;border-radius:16px;overflow:hidden;">
    <tr>
      <td style="padding:28px 32px 8px;">
        <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#FBBF24;">Lumen Academy</p>
        <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#0F172A;">Your sign-in link</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px 0;">
        <p style="margin:0;font-size:15px;line-height:1.6;color:#475569;">Click the button below to sign in. The link works once and expires shortly. If you did not ask for it, you can safely ignore this email.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 32px 8px;">
        <a href="${url}" style="display:inline-block;background:#0F172A;color:#ffffff;text-decoration:none;padding:13px 24px;border-radius:9999px;font-size:15px;font-weight:600;">Sign in to Lumen Academy →</a>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px 28px;">
        <p style="margin:0;font-size:12px;line-height:1.6;color:#94A3B8;">Trouble with the button? Paste this link into your browser:<br /><span style="color:#475569;word-break:break-all;">${url}</span></p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildEmailText(url: string): string {
  return [
    'Lumen Academy',
    '',
    'Your sign-in link:',
    url,
    '',
    'The link works once and expires shortly. If you did not ask for it, you can safely ignore this email.',
  ].join('\n')
}

async function sendViaResend({
  apiKey,
  from,
  to,
  url,
}: {
  apiKey: string
  from: string
  to: string
  url: string
}): Promise<void> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: 'Your sign-in link for Lumen Academy',
      html: buildEmailHtml(url),
      text: buildEmailText(url),
    }),
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Resend send failed (${res.status}): ${body}`)
  }
}

export const authConfig: NextAuthConfig = {
  adapter: MongoDBAdapter(getMongoClient(), {
    databaseName: process.env.MONGODB_DB_NAME ?? DEFAULT_DB_NAME,
  }),
  session: { strategy: 'database' },
  trustHost: true,
  providers: [
    Nodemailer({
      // Placeholder satisfies Auth.js init validation; sendVerificationRequest
      // below short-circuits before any SMTP call.
      server: process.env.EMAIL_SERVER ?? 'smtp://localhost:25',
      from: process.env.EMAIL_FROM ?? DEFAULT_FROM,
      sendVerificationRequest: async ({ identifier, url, expires }) => {
        const apiKey = process.env.RESEND_API_KEY
        if (apiKey) {
          try {
            await sendViaResend({
              apiKey,
              from: process.env.EMAIL_FROM ?? DEFAULT_FROM,
              to: identifier,
              url,
            })
            logger.info('auth.magic_link.sent', {
              email: identifier,
              expiresAt: expires.toISOString(),
            })
          } catch (err) {
            logger.error('auth.magic_link.send_failed', {
              email: identifier,
              error: err instanceof Error ? err.message : String(err),
            })
            throw err
          }
          return
        }
        logger.info('auth.magic_link', {
          email: identifier,
          url,
          expiresAt: expires.toISOString(),
        })
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: user.role ?? 'learner',
          parentVerifiedAt: user.parentVerifiedAt ?? null,
        },
      }
    },
  },
}

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig)
