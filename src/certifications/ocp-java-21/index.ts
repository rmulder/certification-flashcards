import type { CertificationConfig } from '../types'
import { javaBasicsCards } from './cards/domain1-java-basics'
import { oopCards } from './cards/domain2-oop'
import { collectionsGenericsCards } from './cards/domain3-collections-generics'
import { streamsLambdasCards } from './cards/domain4-streams-lambdas'
import { exceptionsIoCards } from './cards/domain5-exceptions-io'
import { concurrencyCards } from './cards/domain6-concurrency'
import { modulesJava21Cards } from './cards/domain7-modules-java21'
import { ocpJava21Meta } from './meta'

const cards = [
  ...javaBasicsCards,
  ...oopCards,
  ...collectionsGenericsCards,
  ...streamsLambdasCards,
  ...exceptionsIoCards,
  ...concurrencyCards,
  ...modulesJava21Cards,
]

export const ocpJava21Config: CertificationConfig = {
  ...ocpJava21Meta,
  cardCount: cards.length,
  cards,
}
