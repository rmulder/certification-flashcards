import type { CertificationConfig } from '../types'
import { introAiImpactCards } from './cards/domain1-intro-ai-impact'
import { promptEngineeringCards } from './cards/domain2-prompt-engineering'
import { aiBusinessIndustryCards } from './cards/domain3-ai-business-industry'
import { aiEthicsBiasCards } from './cards/domain4-ai-ethics-bias'
import { futureAiCareersCards } from './cards/domain5-future-ai-careers'
import { aiPlusFoundationMeta } from './meta'

const cards = [
  ...introAiImpactCards,
  ...promptEngineeringCards,
  ...aiBusinessIndustryCards,
  ...aiEthicsBiasCards,
  ...futureAiCareersCards,
]

export const aiPlusFoundationConfig: CertificationConfig = {
  ...aiPlusFoundationMeta,
  cards,
}
