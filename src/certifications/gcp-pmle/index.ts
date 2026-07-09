import type { CertificationConfig } from '../types'
import { lowCodeAiCards } from './cards/domain1-low-code-ai'
import { dataCollaborationCards } from './cards/domain2-data-collaboration'
import { scaleModelsCards } from './cards/domain3-scale-models'
import { servingCards } from './cards/domain4-serving'
import { mlPipelinesCards } from './cards/domain5-ml-pipelines'
import { mlMonitoringCards } from './cards/domain6-ml-monitoring'

import { gcpPmleMeta } from './meta'

const cards = [
  ...lowCodeAiCards,
  ...dataCollaborationCards,
  ...scaleModelsCards,
  ...servingCards,
  ...mlPipelinesCards,
  ...mlMonitoringCards,
]

export const gcpPmleConfig: CertificationConfig = {
  ...gcpPmleMeta,
  cards,
}
