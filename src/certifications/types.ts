import type { Card, DomainInfo, MockExamSettings } from '../core/types'

export type CertLevel =
  | 'foundational'
  | 'associate'
  | 'professional'
  | 'specialty'

export interface CertificationMeta {
  id: string
  code: string
  name: string
  vendor: string
  level: CertLevel
  description: string
  /** When false, cert appears in catalog but study modes are disabled */
  available: boolean
  /** Exam retired by vendor; content remains studyable when available is true */
  retired?: boolean
  /** Banner text shown on cert home when retired is true */
  retiredNotice?: string
  /** Self-paced deck with no official proctored exam */
  studyTrack?: boolean
  domains: DomainInfo[]
  mockExam: MockExamSettings
  cardCount: number
}

export interface CertificationConfig extends CertificationMeta {
  cards: Card[]
}
