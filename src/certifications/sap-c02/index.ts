import type { CertificationConfig } from '../types'
import { orgComplexityCards } from './cards/domain1-org-complexity'
import { newSolutionsCards } from './cards/domain2-new-solutions'
import { continuousImprovementCards } from './cards/domain3-continuous-improvement'
import { migrationModernizationCards } from './cards/domain4-migration-modernization'

import { sapC02Meta } from './meta'

const cards = [
  ...orgComplexityCards,
  ...newSolutionsCards,
  ...continuousImprovementCards,
  ...migrationModernizationCards,
]

export const sapC02Config: CertificationConfig = {
  ...sapC02Meta,
  cards,
}
