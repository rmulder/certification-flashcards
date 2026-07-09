import type { CertificationConfig } from '../types'
import { designSecureCards } from './cards/domain1-design-secure'
import { designResilientCards } from './cards/domain2-design-resilient'
import { designPerformantCards } from './cards/domain3-design-performant'
import { designCostCards } from './cards/domain4-design-cost'

import { saaC03Meta } from './meta'

const cards = [
  ...designSecureCards,
  ...designResilientCards,
  ...designPerformantCards,
  ...designCostCards,
]

export const saaC03Config: CertificationConfig = {
  ...saaC03Meta,
  cards,
}
