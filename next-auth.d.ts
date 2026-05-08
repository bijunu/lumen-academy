import type { DefaultSession } from 'next-auth'

import type { LumenRole } from '@/types/auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: LumenRole
      parentVerifiedAt: Date | null
    } & DefaultSession['user']
  }
}

declare module '@auth/core/adapters' {
  interface AdapterUser {
    role?: LumenRole
    parentVerifiedAt?: Date | null
  }
}
