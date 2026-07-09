import type { CertificationConfig } from '../types'
import { designSecureCards } from './cards/domain1-design-secure'
import { designResilientCards } from './cards/domain2-design-resilient'
import { designPerformantCards } from './cards/domain3-design-performant'
import { designCostCards } from './cards/domain4-design-cost'

const cards = [
  ...designSecureCards,
  ...designResilientCards,
  ...designPerformantCards,
  ...designCostCards,
]

export const saaC03Config: CertificationConfig = {
  id: 'saa-c03',
  code: 'SAA-C03',
  name: 'AWS Certified Solutions Architect - Associate',
  vendor: 'AWS',
  level: 'associate',
  description:
    'Associate certification for designing secure, resilient, high-performing, and cost-optimized AWS architectures.',
  available: true,
  domains: [
    {
      id: 'design-secure',
      name: 'Design Secure Architectures',
      weight: 30,
      description: 'IAM, network security, encryption, and data protection',
    },
    {
      id: 'design-resilient',
      name: 'Design Resilient Architectures',
      weight: 26,
      description: 'Scaling, loose coupling, high availability, and DR',
    },
    {
      id: 'design-performant',
      name: 'Design High-Performing Architectures',
      weight: 24,
      description: 'Storage, compute, database, network, and data ingestion',
    },
    {
      id: 'design-cost',
      name: 'Design Cost-Optimized Architectures',
      weight: 20,
      description: 'Cost-effective storage, compute, database, and network',
    },
  ],
  mockExam: {
    questionCount: 65,
    passPercent: 72,
  },
  cards,
}
