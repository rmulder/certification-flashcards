import type { CertificationConfig } from '../types'
import { whatIsAiCards } from './cards/domain1-what-is-ai'
import { buildingAiProjectsCards } from './cards/domain2-building-ai-projects'
import { buildingAiCompanyCards } from './cards/domain3-building-ai-company'
import { aiSocietyCards } from './cards/domain4-ai-society'
import { aiForEveryoneStudyMeta } from './meta'

const cards = [
  ...whatIsAiCards,
  ...buildingAiProjectsCards,
  ...buildingAiCompanyCards,
  ...aiSocietyCards,
]

export const aiForEveryoneStudyConfig: CertificationConfig = {
  ...aiForEveryoneStudyMeta,
  cards,
}
