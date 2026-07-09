import type { CertificationConfig } from '../types'
import { networkDesignCards } from './cards/domain1-network-design'
import { networkImplementationCards } from './cards/domain2-network-implementation'
import { networkOperationsCards } from './cards/domain3-network-operations'
import { networkSecurityCards } from './cards/domain4-network-security'

import { ansC01Meta } from './meta'

const cards = [
  ...networkDesignCards,
  ...networkImplementationCards,
  ...networkOperationsCards,
  ...networkSecurityCards,
]

export const ansC01Config: CertificationConfig = {
  ...ansC01Meta,
  cards,
}
