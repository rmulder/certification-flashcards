import type { CertificationConfig } from '../types'
import { mlWithPythonCards } from './cards/domain1-ml-with-python'
import { deepLearningCards } from './cards/domain2-deep-learning'
import { genAiArchitectureCards } from './cards/domain3-gen-ai-architecture'
import { genAiFineTuningCards } from './cards/domain4-gen-ai-fine-tuning'
import { ragAgentsCards } from './cards/domain5-rag-agents'
import { ibmAiEngineerStudyMeta } from './meta'

const cards = [
  ...mlWithPythonCards,
  ...deepLearningCards,
  ...genAiArchitectureCards,
  ...genAiFineTuningCards,
  ...ragAgentsCards,
]

export const ibmAiEngineerStudyConfig: CertificationConfig = {
  ...ibmAiEngineerStudyMeta,
  cards,
}
