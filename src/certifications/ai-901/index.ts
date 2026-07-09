import type { CertificationConfig } from '../types'
import { aiConceptsCards } from './cards/domain1-ai-concepts'
import { foundryImplementationCards } from './cards/domain2-foundry-implementation'

import { ai901Meta } from './meta'

const cards = [...aiConceptsCards, ...foundryImplementationCards]

export const ai901Config: CertificationConfig = {
  ...ai901Meta,
  cards,
}
