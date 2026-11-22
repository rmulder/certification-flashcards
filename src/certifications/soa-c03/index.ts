import type { CertificationConfig } from '../types'
import { monitoringRemediationCards } from './cards/domain1-monitoring-remediation'
import { reliabilityContinuityCards } from './cards/domain2-reliability-continuity'
import { deploymentAutomationCards } from './cards/domain3-deployment-automation'
import { securityComplianceCards } from './cards/domain4-security-compliance'
import { soaC03Meta } from './meta'

const cards = [
  ...monitoringRemediationCards,
  ...reliabilityContinuityCards,
  ...deploymentAutomationCards,
  ...securityComplianceCards,
]

export const soaC03Config: CertificationConfig = {
  ...soaC03Meta,
  cards,
}
