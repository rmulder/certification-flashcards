import type { CertificationConfig } from '../types'
import { planManageCards } from './cards/domain1-plan-manage'
import { generativeAiCards } from './cards/domain2-generative-ai'
import { agenticCards } from './cards/domain3-agentic'
import { computerVisionCards } from './cards/domain4-computer-vision'
import { nlpCards } from './cards/domain5-nlp'
import { knowledgeMiningCards } from './cards/domain6-knowledge-mining'

const cards = [
  ...planManageCards,
  ...generativeAiCards,
  ...agenticCards,
  ...computerVisionCards,
  ...nlpCards,
  ...knowledgeMiningCards,
]

export const ai102Config: CertificationConfig = {
  id: 'ai-102',
  code: 'AI-102',
  name: 'Microsoft Certified: Azure AI Engineer Associate',
  vendor: 'Microsoft',
  level: 'associate',
  description:
    'Associate certification for designing and implementing Azure AI solutions with Microsoft Foundry, vision, NLP, and knowledge mining.',
  available: true,
  domains: [
    {
      id: 'plan-manage',
      name: 'Plan and Manage an Azure AI Solution',
      weight: 23,
      description: 'Foundry deployment, monitoring, security, and responsible AI',
    },
    {
      id: 'generative-ai',
      name: 'Implement Generative AI Solutions',
      weight: 18,
      description: 'Azure OpenAI, RAG, and generative AI optimization',
    },
    {
      id: 'agentic',
      name: 'Implement an Agentic Solution',
      weight: 8,
      description: 'AI agents and orchestration with Foundry',
    },
    {
      id: 'computer-vision',
      name: 'Implement Computer Vision Solutions',
      weight: 13,
      description: 'Vision, Custom Vision, Face, and video analysis',
    },
    {
      id: 'nlp',
      name: 'Implement Natural Language Processing Solutions',
      weight: 18,
      description: 'Language, Speech, Translator, and custom language models',
    },
    {
      id: 'knowledge-mining',
      name: 'Implement Knowledge Mining and Information Extraction',
      weight: 20,
      description: 'AI Search, Document Intelligence, and Content Understanding',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cards,
}
