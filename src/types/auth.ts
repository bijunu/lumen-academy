export type LumenRole = 'learner' | 'parent'

export type LumenUser = {
  id: string
  email: string
  name?: string | null
  image?: string | null
  role: LumenRole
  parentVerifiedAt: Date | null
}
