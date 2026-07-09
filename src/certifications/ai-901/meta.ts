import type { CertificationMeta } from '../types'

export const ai901Meta: CertificationMeta = {

  id: 'ai-901',
  code: 'AI-901',
  name: 'Microsoft Certified: Azure AI Fundamentals',
  vendor: 'Microsoft',
  level: 'foundational',
  description:
    'Foundational certification for AI concepts, responsible AI, and implementing AI solutions with Microsoft Foundry on Azure.',
  available: true,
  domains: [
    {
      id: 'ai-concepts',
      name: 'Identify AI Concepts and Capabilities',
      weight: 43,
      description: 'Responsible AI, workloads, model components, and AI capabilities',
    },
    {
      id: 'foundry-implementation',
      name: 'Implement AI Solutions by Using Microsoft Foundry',
      weight: 57,
      description: 'Generative AI apps, agents, text, speech, vision, and extraction',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
