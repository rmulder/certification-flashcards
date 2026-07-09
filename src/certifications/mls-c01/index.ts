import type { CertificationConfig } from '../types'
import { dataEngineeringCards } from './cards/domain1-data-engineering'
import { exploratoryAnalysisCards } from './cards/domain2-exploratory-analysis'
import { modelingCards } from './cards/domain3-modeling'
import { mlOpsCards } from './cards/domain4-ml-ops'

import { mlsC01Meta } from './meta'

const cards = [
  ...dataEngineeringCards,
  ...exploratoryAnalysisCards,
  ...modelingCards,
  ...mlOpsCards,
]

export const mlsC01Config: CertificationConfig = {
  ...mlsC01Meta,
  cards,
}
