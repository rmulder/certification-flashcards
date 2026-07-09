import type { CertificationConfig } from '../types'
import { detectionCards } from './cards/domain1-detection'
import { incidentResponseCards } from './cards/domain2-incident-response'
import { infrastructureSecurityCards } from './cards/domain3-infrastructure-security'
import { iamCards } from './cards/domain4-iam'
import { dataProtectionCards } from './cards/domain5-data-protection'
import { securityGovernanceCards } from './cards/domain6-security-governance'

import { scsC03Meta } from './meta'

const cards = [
  ...detectionCards,
  ...incidentResponseCards,
  ...infrastructureSecurityCards,
  ...iamCards,
  ...dataProtectionCards,
  ...securityGovernanceCards,
]

export const scsC03Config: CertificationConfig = {
  ...scsC03Meta,
  cards,
}
