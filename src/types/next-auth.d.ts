import type { DefaultSession } from 'next-auth'

import type { LumenRole } from './auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: LumenRole
      parentVerifiedAt: Date | null
    } & DefaultSession['user']
  }

  interface User {
    role?: LumenRole
    parentVerifiedAt?: Date | null
  }
}
