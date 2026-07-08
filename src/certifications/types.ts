import type { Card, DomainInfo, MockExamSettings } from '../core/types'

export type CertLevel =
  | 'foundational'
  | 'associate'
  | 'professional'
  | 'specialty'

export interface CertificationConfig {
  id: string
  code: string
  name: string
  vendor: string
  level: CertLevel
  description: string
  /** When false, cert appears in catalog but study modes are disabled */
  available: boolean
  domains: DomainInfo[]
  mockExam: MockExamSettings
  cards: Card[]
}
