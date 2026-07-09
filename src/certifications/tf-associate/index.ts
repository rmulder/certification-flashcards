import type { CertificationConfig } from '../types'
import { iacTerraformCards } from './cards/domain1-iac-terraform'
import { fundamentalsCards } from './cards/domain2-fundamentals'
import { coreWorkflowCards } from './cards/domain3-core-workflow'
import { configurationCards } from './cards/domain4-configuration'
import { modulesCards } from './cards/domain5-modules'
import { stateManagementCards } from './cards/domain6-state-management'
import { maintainInfraCards } from './cards/domain7-maintain-infra'
import { hcpTerraformCards } from './cards/domain8-hcp-terraform'

import { tfAssociateMeta } from './meta'

const cards = [
  ...iacTerraformCards,
  ...fundamentalsCards,
  ...coreWorkflowCards,
  ...configurationCards,
  ...modulesCards,
  ...stateManagementCards,
  ...maintainInfraCards,
  ...hcpTerraformCards,
]

export const tfAssociateConfig: CertificationConfig = {
  ...tfAssociateMeta,
  cards,
}
