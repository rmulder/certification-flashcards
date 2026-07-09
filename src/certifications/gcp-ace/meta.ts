import type { CertificationMeta } from '../types'

export const gcpAceMeta: CertificationMeta = {

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
  cardCount: 190,
}
