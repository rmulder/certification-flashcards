import type { CertificationConfig } from '../types'
import { fundamentalsCards } from './cards/domain1-fundamentals'
import { generativeAiCards } from './cards/domain2-generative-ai'
import { applicationsCards } from './cards/domain3-applications'
import { guidelinesCards } from './cards/domain4-guidelines'
import { securityCards } from './cards/domain5-security'

const cards = [
  ...fundamentalsCards,
  ...generativeAiCards,
  ...applicationsCards,
  ...guidelinesCards,
  ...securityCards,
]

export const aifC01Config: CertificationConfig = {
  id: 'aif-c01',
  code: 'AIF-C01',
  name: 'AWS Certified AI Practitioner',
  vendor: 'AWS',
  level: 'foundational',
  description:
    'Foundational certification for AI, ML, and generative AI concepts and AWS AI services.',
  available: true,
  domains: [
    {
      id: 'fundamentals',
      name: 'Fundamentals of AI and ML',
      weight: 20,
      description: 'AI/ML concepts, use cases, and the development lifecycle',
    },
    {
      id: 'generative-ai',
      name: 'Fundamentals of Generative AI',
      weight: 24,
      description: 'GenAI concepts, capabilities, limitations, and AWS infrastructure',
    },
    {
      id: 'applications',
      name: 'Applications of Foundation Models',
      weight: 28,
      description: 'FM design, prompt engineering, fine-tuning, and evaluation',
    },
    {
      id: 'guidelines',
      name: 'Guidelines for Responsible AI',
      weight: 14,
      description: 'Responsible AI development and model transparency',
    },
    {
      id: 'security',
      name: 'Security, Compliance, and Governance',
      weight: 14,
      description: 'Securing AI systems and governance regulations',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: cards.length,
  cards,
}
