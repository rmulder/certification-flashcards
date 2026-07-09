import type { CertificationConfig } from '../types'
import { responsibleAiCards } from './cards/domain1-responsible-ai'
import { copilotFeaturesCards } from './cards/domain2-copilot-features'
import { dataArchitectureCards } from './cards/domain3-data-architecture'
import { promptEngineeringCards } from './cards/domain4-prompt-engineering'
import { productivityCards } from './cards/domain5-productivity'
import { privacySafeguardsCards } from './cards/domain6-privacy-safeguards'

import { gh300Meta } from './meta'

const cards = [
  ...responsibleAiCards,
  ...copilotFeaturesCards,
  ...dataArchitectureCards,
  ...promptEngineeringCards,
  ...productivityCards,
  ...privacySafeguardsCards,
]

export const gh300Config: CertificationConfig = {
  ...gh300Meta,
  cards,
}
