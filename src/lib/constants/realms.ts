import {
  Calculator,
  Leaf,
  FlaskConical,
  Cog,
  type LucideIcon,
} from 'lucide-react'

export type RealmId = 'numerica' | 'vitalia' | 'elementia' | 'mechanica'

export type SubjectId = 'maths' | 'biology' | 'chemistry' | 'physics'

export interface RealmMeta {
  id: RealmId
  subject: SubjectId
  label: string
  colour: string
  colourVariable: string
  icon: LucideIcon
}

export const REALMS: Record<RealmId, RealmMeta> = {
  numerica: {
    id: 'numerica',
    subject: 'maths',
    label: 'Numerica',
    colour: '#3B82F6',
    colourVariable: '--realm-numerica',
    icon: Calculator,
  },
  vitalia: {
    id: 'vitalia',
    subject: 'biology',
    label: 'Vitalia',
    colour: '#22C55E',
    colourVariable: '--realm-vitalia',
    icon: Leaf,
  },
  elementia: {
    id: 'elementia',
    subject: 'chemistry',
    label: 'Elementia',
    colour: '#A855F7',
    colourVariable: '--realm-elementia',
    icon: FlaskConical,
  },
  mechanica: {
    id: 'mechanica',
    subject: 'physics',
    label: 'Mechanica',
    colour: '#F59E0B',
    colourVariable: '--realm-mechanica',
    icon: Cog,
  },
}

export const REALM_LIST = Object.values(REALMS)
