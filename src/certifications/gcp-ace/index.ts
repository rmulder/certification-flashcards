import type { CertificationConfig } from '../types'
import { setupCards } from './cards/domain1-setup'
import { planImplementCards } from './cards/domain2-plan-implement'
import { operationsCards } from './cards/domain3-operations'
import { accessSecurityCards } from './cards/domain4-access-security'

const cards = [
  ...setupCards,
  ...planImplementCards,
  ...operationsCards,
  ...accessSecurityCards,
]

export const gcpAceConfig: CertificationConfig = {
  id: 'gcp-ace',
  code: 'GCP ACE',
  name: 'Google Cloud Associate Cloud Engineer',
  vendor: 'Google Cloud',
  level: 'associate',
  description:
    'Associate certification for deploying, monitoring, and securing applications and infrastructure on Google Cloud.',
  available: true,
  domains: [
    {
      id: 'setup',
      name: 'Setting Up a Cloud Solution Environment',
      weight: 20,
      description: 'Projects, billing, APIs, and resource hierarchy',
    },
    {
      id: 'plan-implement',
      name: 'Planning and Implementing a Cloud Solution',
      weight: 30,
      description: 'Compute, storage, databases, and networking',
    },
    {
      id: 'operations',
      name: 'Ensuring Successful Operation of a Cloud Solution',
      weight: 30,
      description: 'Monitoring, logging, troubleshooting, and optimization',
    },
    {
      id: 'access-security',
      name: 'Configuring Access and Security',
      weight: 20,
      description: 'IAM, service accounts, encryption, and audit',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cards,
}
