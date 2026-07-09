import type { CertificationConfig } from '../types'
import { dataPrepCards } from './cards/domain1-data-prep'
import { modelDevCards } from './cards/domain2-model-dev'
import { deploymentCards } from './cards/domain3-deployment'
import { mlMonitoringCards } from './cards/domain4-ml-monitoring'

import { mlaC01Meta } from './meta'

const cards = [
  ...dataPrepCards,
  ...modelDevCards,
  ...deploymentCards,
  ...mlMonitoringCards,
]

export const mlaC01Config: CertificationConfig = {
  ...mlaC01Meta,
  cards,
}
