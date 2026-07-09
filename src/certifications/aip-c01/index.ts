import type { CertificationConfig } from '../types'
import { fmIntegrationCards } from './cards/domain1-fm-integration'
import { implementationCards } from './cards/domain2-implementation'
import { safetySecurityCards } from './cards/domain3-safety-security'
import { operationsCards } from './cards/domain4-operations'
import { testingCards } from './cards/domain5-testing'

import { aipC01Meta } from './meta'

const cards = [
  ...fmIntegrationCards,
  ...implementationCards,
  ...safetySecurityCards,
  ...operationsCards,
  ...testingCards,
]

export const aipC01Config: CertificationConfig = {
  ...aipC01Meta,
  cards,
}
