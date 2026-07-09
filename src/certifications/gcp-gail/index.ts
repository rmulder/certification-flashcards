import type { CertificationConfig } from '../types'
import { genAiFundamentalsCards } from './cards/domain1-gen-ai-fundamentals'
import { gcpGenAiOfferingsCards } from './cards/domain2-gcp-gen-ai-offerings'
import { improveOutputCards } from './cards/domain3-improve-output'
import { businessStrategyCards } from './cards/domain4-business-strategy'

import { gcpGailMeta } from './meta'

const cards = [
  ...genAiFundamentalsCards,
  ...gcpGenAiOfferingsCards,
  ...improveOutputCards,
  ...businessStrategyCards,
]

export const gcpGailConfig: CertificationConfig = {
  ...gcpGailMeta,
  cards,
}
