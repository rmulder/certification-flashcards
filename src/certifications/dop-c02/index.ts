import type { CertificationConfig } from '../types'
import { sdlcAutomationCards } from './cards/domain1-sdlc-automation'
import { configIacCards } from './cards/domain2-config-iac'
import { resilientCards } from './cards/domain3-resilient'
import { monitoringCards } from './cards/domain4-monitoring'
import { incidentResponseCards } from './cards/domain5-incident-response'
import { securityComplianceCards } from './cards/domain6-security-compliance'

import { dopC02Meta } from './meta'

const cards = [
  ...sdlcAutomationCards,
  ...configIacCards,
  ...resilientCards,
  ...monitoringCards,
  ...incidentResponseCards,
  ...securityComplianceCards,
]

export const dopC02Config: CertificationConfig = {
  ...dopC02Meta,
  cards,
}
