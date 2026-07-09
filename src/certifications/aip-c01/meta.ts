import type { CertificationMeta } from '../types'

export const aipC01Meta: CertificationMeta = {

  id: 'aip-c01',
  code: 'AIP-C01',
  name: 'AWS Certified Generative AI Developer - Professional',
  vendor: 'AWS',
  level: 'professional',
  description:
    'Professional certification for integrating foundation models, RAG, agents, and responsible GenAI on AWS.',
  available: true,
  domains: [
    {
      id: 'fm-integration',
      name: 'Foundation Model Integration, Data Management, and Compliance',
      weight: 31,
      description: 'FM selection, data pipelines, vector stores, RAG, and prompt governance',
    },
    {
      id: 'implementation',
      name: 'Implementation and Integration',
      weight: 26,
      description: 'Agents, deployment, enterprise integration, and FM APIs',
    },
    {
      id: 'safety-security',
      name: 'AI Safety, Security, and Governance',
      weight: 20,
      description: 'Safety controls, privacy, compliance, and responsible AI',
    },
    {
      id: 'operations',
      name: 'Operational Efficiency and Optimization',
      weight: 12,
      description: 'Cost, performance, caching, and monitoring',
    },
    {
      id: 'testing',
      name: 'Testing, Validation, and Troubleshooting',
      weight: 11,
      description: 'Evaluation systems and GenAI troubleshooting',
    },
  ],
  mockExam: {
    questionCount: 65,
    passPercent: 75,
  },
  cardCount: 190,
}
