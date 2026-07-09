import type { CertificationConfig } from '../types'
import { genaiLangchainBasicsCards } from './cards/domain1-genai-langchain-basics'
import { vectorDatabasesRagCards } from './cards/domain2-vector-databases-rag'
import { multimodalGenaiCards } from './cards/domain3-multimodal-genai'
import { agentFundamentalsLanggraphCards } from './cards/domain4-agent-fundamentals-langgraph'
import { multiAgentMcpCapstoneCards } from './cards/domain5-multi-agent-mcp-capstone'
import { ibmRagAgenticAiStudyMeta } from './meta'

const cards = [
  ...genaiLangchainBasicsCards,
  ...vectorDatabasesRagCards,
  ...multimodalGenaiCards,
  ...agentFundamentalsLanggraphCards,
  ...multiAgentMcpCapstoneCards,
]

export const ibmRagAgenticAiStudyConfig: CertificationConfig = {
  ...ibmRagAgenticAiStudyMeta,
  cards,
}
