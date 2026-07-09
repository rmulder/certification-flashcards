import type { CertificationConfig } from '../types'
import { setupCards } from './cards/domain1-setup'
import { planImplementCards } from './cards/domain2-plan-implement'
import { operationsCards } from './cards/domain3-operations'
import { accessSecurityCards } from './cards/domain4-access-security'

import { gcpAceMeta } from './meta'

const cards = [
  ...setupCards,
  ...planImplementCards,
  ...operationsCards,
  ...accessSecurityCards,
]

export const gcpAceConfig: CertificationConfig = {
  ...gcpAceMeta,
  cards,
}
