import type { CertificationConfig } from '../types'
import { introAiCards } from './cards/domain1-intro-ai'
import { aiProductivityCards } from './cards/domain2-ai-productivity'
import { promptingCards } from './cards/domain3-prompting'
import { aiResponsibleCards } from './cards/domain4-ai-responsible'
import { aiFutureCards } from './cards/domain5-ai-future'
import { googleAiEssentialsStudyMeta } from './meta'

const cards = [
  ...introAiCards,
  ...aiProductivityCards,
  ...promptingCards,
  ...aiResponsibleCards,
  ...aiFutureCards,
]

export const googleAiEssentialsStudyConfig: CertificationConfig = {
  ...googleAiEssentialsStudyMeta,
  cards,
}
