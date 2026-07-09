import type { CertificationConfig } from '../types'
import { neuralNetworksCards } from './cards/domain1-neural-networks'
import { improvingDnnCards } from './cards/domain2-improving-dnn'
import { mlProjectsCards } from './cards/domain3-ml-projects'
import { cnnsCards } from './cards/domain4-cnns'
import { sequenceModelsCards } from './cards/domain5-sequence-models'
import { deepLearningStudyMeta } from './meta'

const cards = [
  ...neuralNetworksCards,
  ...improvingDnnCards,
  ...mlProjectsCards,
  ...cnnsCards,
  ...sequenceModelsCards,
]

export const deepLearningStudyConfig: CertificationConfig = {
  ...deepLearningStudyMeta,
  cards,
}
