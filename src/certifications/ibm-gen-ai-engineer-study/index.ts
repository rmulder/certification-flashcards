import type { CertificationConfig } from '../types'
import { genAiFoundationsCards } from './cards/domain1-gen-ai-foundations'
import { pythonAiAppsCards } from './cards/domain2-python-ai-apps'
import { dataMlDlCards } from './cards/domain3-data-ml-dl'
import { llmArchitectureCards } from './cards/domain4-llm-architecture'
import { genAiEngineeringCards } from './cards/domain5-gen-ai-engineering'
import { ibmGenAiEngineerStudyMeta } from './meta'

const cards = [
  ...genAiFoundationsCards,
  ...pythonAiAppsCards,
  ...dataMlDlCards,
  ...llmArchitectureCards,
  ...genAiEngineeringCards,
]

export const ibmGenAiEngineerStudyConfig: CertificationConfig = {
  ...ibmGenAiEngineerStudyMeta,
  cards,
}
