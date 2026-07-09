import type { CertificationConfig } from '../types'
import { digitalTransformCards } from './cards/domain1-digital-transform'
import { dataTransformCards } from './cards/domain2-data-transform'
import { aiInnovationCards } from './cards/domain3-ai-innovation'
import { modernizeCards } from './cards/domain4-modernize'
import { trustSecurityCards } from './cards/domain5-trust-security'
import { scalingOpsCards } from './cards/domain6-scaling-ops'

import { gcpCdlMeta } from './meta'

const cards = [
  ...digitalTransformCards,
  ...dataTransformCards,
  ...aiInnovationCards,
  ...modernizeCards,
  ...trustSecurityCards,
  ...scalingOpsCards,
]

export const gcpCdlConfig: CertificationConfig = {
  ...gcpCdlMeta,
  cards,
}
