import NextAuth, { type NextAuthConfig } from 'next-auth'
import Nodemailer from 'next-auth/providers/nodemailer'
import { MongoDBAdapter } from '@auth/mongodb-adapter'

import { getMongoClient } from '@/lib/db/mongoClient'
import { logger } from '@/lib/logger'

const DEFAULT_DB_NAME = 'lumen-academy'
const DEFAULT_FROM = 'no-reply@lumen.local'

export const authConfig: NextAuthConfig = {
  adapter: MongoDBAdapter(getMongoClient(), {
    databaseName: process.env.MONGODB_DB_NAME ?? DEFAULT_DB_NAME,
  }),
  session: { strategy: 'database' },
  trustHost: true,
  providers: [
    Nodemailer({
      from: process.env.EMAIL_FROM ?? DEFAULT_FROM,
      sendVerificationRequest: async ({ identifier, url, expires }) => {
        // SMTP transport is intentionally unwired in Phase 4b. The override
        // prints the magic link to the server console so the dev can copy it
        // from the logs. Real email send is deferred to a later phase.
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
