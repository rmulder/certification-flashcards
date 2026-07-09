import type { CertificationConfig } from '../types'
import { responsibleTrustworthyAiCards } from './cards/domain1-responsible-trustworthy-ai'
import { businessNeedsSolutionsCards } from './cards/domain2-business-needs-solutions'
import { identifyDataNeedsCards } from './cards/domain3-identify-data-needs'
import { modelDevelopmentEvaluationCards } from './cards/domain4-model-development-evaluation'
import { operationalizeAiCards } from './cards/domain5-operationalize-ai'
import { pmiCpmaiMeta } from './meta'

const cards = [
  ...responsibleTrustworthyAiCards,
  ...businessNeedsSolutionsCards,
  ...identifyDataNeedsCards,
  ...modelDevelopmentEvaluationCards,
  ...operationalizeAiCards,
]

export const pmiCpmaiConfig: CertificationConfig = {
  ...pmiCpmaiMeta,
  cards,
}
