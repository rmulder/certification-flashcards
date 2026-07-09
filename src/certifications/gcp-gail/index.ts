import type { CertificationConfig } from '../types'
import { genAiFundamentalsCards } from './cards/domain1-gen-ai-fundamentals'
import { gcpGenAiOfferingsCards } from './cards/domain2-gcp-gen-ai-offerings'
import { improveOutputCards } from './cards/domain3-improve-output'
import { businessStrategyCards } from './cards/domain4-business-strategy'

const cards = [
  ...genAiFundamentalsCards,
  ...gcpGenAiOfferingsCards,
  ...improveOutputCards,
  ...businessStrategyCards,
]

export const gcpGailConfig: CertificationConfig = {
  id: 'gcp-gail',
  code: 'GCP GAIL',
  name: 'Google Cloud Generative AI Leader',
  vendor: 'Google Cloud',
  level: 'foundational',
  description:
    'Foundational certification for gen AI strategy, Google Cloud AI offerings, and responsible enterprise adoption.',
  available: true,
  domains: [
    {
      id: 'gen-ai-fundamentals',
      name: 'Fundamentals of Generative AI',
      weight: 30,
      description: 'Core gen AI concepts, use cases, and model capabilities',
    },
    {
      id: 'gcp-gen-ai-offerings',
      name: "Google Cloud's Generative AI Offerings",
      weight: 35,
      description: 'Gemini, Vertex AI, Workspace AI, and enterprise products',
    },
    {
      id: 'improve-output',
      name: 'Techniques to Improve Gen AI Model Output',
      weight: 20,
      description: 'Prompt engineering, RAG, grounding, and evaluation',
    },
    {
      id: 'business-strategy',
      name: 'Business Strategies for Successful Gen AI',
      weight: 15,
      description: 'Adoption planning, ROI, governance, and responsible AI',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cards,
}
