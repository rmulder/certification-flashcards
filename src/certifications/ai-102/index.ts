import type { CertificationConfig } from '../types'
import { planManageCards } from './cards/domain1-plan-manage'
import { generativeAiCards } from './cards/domain2-generative-ai'
import { agenticCards } from './cards/domain3-agentic'
import { computerVisionCards } from './cards/domain4-computer-vision'
import { nlpCards } from './cards/domain5-nlp'
import { knowledgeMiningCards } from './cards/domain6-knowledge-mining'

import { ai102Meta } from './meta'

const cards = [
  ...planManageCards,
  ...generativeAiCards,
  ...agenticCards,
  ...computerVisionCards,
  ...nlpCards,
  ...knowledgeMiningCards,
]

export const ai102Config: CertificationConfig = {
  ...ai102Meta,
  cards,
}
