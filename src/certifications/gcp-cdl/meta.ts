import type { CertificationMeta } from '../types'

export const gcpCdlMeta: CertificationMeta = {

  id: 'gcp-cdl',
  code: 'GCP CDL',
  name: 'Google Cloud Digital Leader',
  vendor: 'Google Cloud',
  level: 'foundational',
  description:
    'Foundational certification for articulating Google Cloud capabilities, business use cases, and digital transformation value.',
  available: true,
  domains: [
    {
      id: 'digital-transform',
      name: 'Digital Transformation with Google Cloud',
      weight: 17,
      description: 'Cloud benefits, models, TCO, and transformation strategy',
    },
    {
      id: 'data-transform',
      name: 'Exploring Data Transformation with Google Cloud',
      weight: 16,
      description: 'Data value, analytics, and Google Cloud data services',
    },
    {
      id: 'ai-innovation',
      name: 'Innovating with Google Cloud Artificial Intelligence',
      weight: 16,
      description: 'AI/ML business value, Vertex AI, and responsible AI',
    },
    {
      id: 'modernize',
      name: 'Modernizing Infrastructure and Applications',
      weight: 17,
      description: 'Compute options, modernization, and hybrid strategies',
    },
    {
      id: 'trust-security',
      name: 'Trust and Security with Google Cloud',
      weight: 17,
      description: 'Security fundamentals, compliance, and zero trust',
    },
    {
      id: 'scaling-ops',
      name: 'Scaling with Google Cloud Operations',
      weight: 17,
      description: 'FinOps, reliability, DevOps/SRE, and sustainability',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
