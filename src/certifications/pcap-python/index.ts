import type { CertificationConfig } from '../types'
import { modulesPackagesCards } from './cards/domain1-modules'
import { exceptionsCards } from './cards/domain2-exceptions'
import { stringsCards } from './cards/domain3-strings'
import { oopCards } from './cards/domain4-oop'
import { miscCards } from './cards/domain5-misc'

import { pcapPythonMeta } from './meta'

const cards = [
  ...modulesPackagesCards,
  ...exceptionsCards,
  ...stringsCards,
  ...oopCards,
  ...miscCards,
]

export const pcapPythonConfig: CertificationConfig = {
  ...pcapPythonMeta,
  cardCount: cards.length,
  cards,
}

export { pcapPythonMeta } from './meta'
