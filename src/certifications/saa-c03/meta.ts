import type { CertificationMeta } from '../types'

export const saaC03Meta: CertificationMeta = {

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
  cardCount: 190,
}
