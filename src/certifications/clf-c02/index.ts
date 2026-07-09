import type { CertificationConfig } from '../types'
import { cloudConceptsCards } from './cards/domain1-cloud-concepts'
import { securityCards } from './cards/domain2-security'
import { technologyCards } from './cards/domain3-technology'
import { billingCards } from './cards/domain4-billing'

const cards = [
  ...cloudConceptsCards,
  ...securityCards,
  ...technologyCards,
  ...billingCards,
]

export const clfC02Config: CertificationConfig = {
  id: 'clf-c02',
  code: 'CLF-C02',
  name: 'AWS Certified Cloud Practitioner',
  vendor: 'AWS',
  level: 'foundational',
  description:
    'Foundational certification covering AWS Cloud concepts, security, core services, and billing.',
  available: true,
  domains: [
    {
      id: 'cloud-concepts',
      name: 'Cloud Concepts',
      weight: 24,
      description: 'Benefits, Well-Architected, migration, cloud economics',
    },
    {
      id: 'security-compliance',
      name: 'Security & Compliance',
      weight: 30,
      description: 'Shared responsibility, IAM, security services',
    },
    {
      id: 'cloud-technology',
      name: 'Cloud Technology & Services',
      weight: 34,
      description: 'Compute, storage, databases, networking, AI/ML',
    },
    {
      id: 'billing-pricing',
      name: 'Billing, Pricing & Support',
      weight: 12,
      description: 'Pricing models, cost tools, AWS Support',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: cards.length,
  cards,
}
