import type { CertificationConfig } from '../types'
import { aiChatbotsFundamentalsCards } from './cards/domain1-ai-chatbots-fundamentals'
import { pythonApisFunctionsCards } from './cards/domain2-python-apis-functions'
import { intermediatePythonToolingCards } from './cards/domain3-intermediate-python-tooling'
import { apisWebScrapingCards } from './cards/domain4-apis-web-scraping'
import { llmPromptingStreamlitCards } from './cards/domain5-llm-prompting-streamlit'
import { dataquestGenAiStudyMeta } from './meta'

const cards = [
  ...aiChatbotsFundamentalsCards,
  ...pythonApisFunctionsCards,
  ...intermediatePythonToolingCards,
  ...apisWebScrapingCards,
  ...llmPromptingStreamlitCards,
]

export const dataquestGenAiStudyConfig: CertificationConfig = {
  ...dataquestGenAiStudyMeta,
  cards,
}
