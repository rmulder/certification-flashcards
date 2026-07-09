import type { CertificationConfig } from '../types'
import { developmentCards } from './cards/domain1-development'
import { securityCards } from './cards/domain2-security'
import { deploymentCards } from './cards/domain3-deployment'
import { troubleshootingCards } from './cards/domain4-troubleshooting'

import { dvaC02Meta } from './meta'

const cards = [
  ...developmentCards,
  ...securityCards,
  ...deploymentCards,
  ...troubleshootingCards,
]

export const dvaC02Config: CertificationConfig = {
  ...dvaC02Meta,
  cards,
}
