import type { CertificationConfig } from '../types'
import { supervisedMlCards } from './cards/domain1-supervised-ml'
import { advancedAlgorithmsCards } from './cards/domain2-advanced-algorithms'
import { unsupervisedRlCards } from './cards/domain3-unsupervised-rl'
import { machineLearningStudyMeta } from './meta'

const cards = [
  ...supervisedMlCards,
  ...advancedAlgorithmsCards,
  ...unsupervisedRlCards,
]

export const machineLearningStudyConfig: CertificationConfig = {
  ...machineLearningStudyMeta,
  cards,
}
