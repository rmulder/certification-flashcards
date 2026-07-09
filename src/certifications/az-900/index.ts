import type { CertificationConfig } from '../types'
import { cloudConceptsCards } from './cards/domain1-cloud-concepts'
import { architectureServicesCards } from './cards/domain2-architecture-services'
import { managementGovernanceCards } from './cards/domain3-management-governance'

const cards = [
  ...cloudConceptsCards,
  ...architectureServicesCards,
  ...managementGovernanceCards,
]

export const az900Config: CertificationConfig = {
  id: 'az-900',
  code: 'AZ-900',
  name: 'Microsoft Certified: Azure Fundamentals',
  vendor: 'Microsoft',
  level: 'foundational',
  description:
    'Foundational certification for cloud concepts, core Azure services, and Azure management and governance.',
  available: true,
  domains: [
    {
      id: 'cloud-concepts',
      name: 'Describe Cloud Concepts',
      weight: 28,
      description: 'Cloud models, benefits, and shared responsibility',
    },
    {
      id: 'architecture-services',
      name: 'Describe Azure Architecture and Services',
      weight: 39,
      description: 'Compute, networking, storage, databases, and identity',
    },
    {
      id: 'management-governance',
      name: 'Describe Azure Management and Governance',
      weight: 33,
      description: 'Tools, cost management, monitoring, and compliance',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cards,
}
