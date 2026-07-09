import type { CertificationConfig } from '../types'
import { cloudConceptsCards } from './cards/domain1-cloud-concepts'
import { architectureServicesCards } from './cards/domain2-architecture-services'
import { managementGovernanceCards } from './cards/domain3-management-governance'

import { az900Meta } from './meta'

const cards = [
  ...cloudConceptsCards,
  ...architectureServicesCards,
  ...managementGovernanceCards,
]

export const az900Config: CertificationConfig = {
  ...az900Meta,
  cards,
}
