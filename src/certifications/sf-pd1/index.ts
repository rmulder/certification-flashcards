import type { CertificationConfig } from '../types'
import { developerFundamentalsCards } from './cards/domain1-developer-fundamentals'
import { processAutomationLogicCards } from './cards/domain2-process-automation-logic'
import { userInterfaceCards } from './cards/domain3-user-interface'
import { testingDebuggingDeploymentCards } from './cards/domain4-testing-debugging-deployment'
import { sfPd1Meta } from './meta'

const cards = [
  ...developerFundamentalsCards,
  ...processAutomationLogicCards,
  ...userInterfaceCards,
  ...testingDebuggingDeploymentCards,
]

export const sfPd1Config: CertificationConfig = {
  ...sfPd1Meta,
  cardCount: cards.length,
  cards,
}
