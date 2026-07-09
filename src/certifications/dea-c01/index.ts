import type { CertificationConfig } from '../types'
import { ingestionCards } from './cards/domain1-ingestion'
import { storeCards } from './cards/domain2-store'
import { operationsCards } from './cards/domain3-operations'
import { securityCards } from './cards/domain4-security'

import { deaC01Meta } from './meta'

const cards = [
  ...ingestionCards,
  ...storeCards,
  ...operationsCards,
  ...securityCards,
]

export const deaC01Config: CertificationConfig = {
  ...deaC01Meta,
  cards,
}
