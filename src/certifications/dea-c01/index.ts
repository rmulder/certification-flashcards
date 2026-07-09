import type { CertificationConfig } from '../types'
import { ingestionCards } from './cards/domain1-ingestion'
import { storeCards } from './cards/domain2-store'
import { operationsCards } from './cards/domain3-operations'
import { securityCards } from './cards/domain4-security'

const cards = [
  ...ingestionCards,
  ...storeCards,
  ...operationsCards,
  ...securityCards,
]

export const deaC01Config: CertificationConfig = {
  id: 'dea-c01',
  code: 'DEA-C01',
  name: 'AWS Certified Data Engineer - Associate',
  vendor: 'AWS',
  level: 'associate',
  description:
    'Associate certification for data ingestion, transformation, storage, operations, and governance on AWS.',
  available: true,
  domains: [
    {
      id: 'ingestion',
      name: 'Data Ingestion and Transformation',
      weight: 34,
      description: 'Ingestion patterns, ETL, orchestration, and programming',
    },
    {
      id: 'store',
      name: 'Data Store Management',
      weight: 26,
      description: 'Data stores, catalogs, lifecycle, and modeling',
    },
    {
      id: 'operations',
      name: 'Data Operations and Support',
      weight: 22,
      description: 'Automation, analysis, monitoring, and data quality',
    },
    {
      id: 'security',
      name: 'Data Security and Governance',
      weight: 18,
      description: 'Authentication, authorization, encryption, and privacy',
    },
  ],
  mockExam: {
    questionCount: 65,
    passPercent: 72,
  },
  cards,
}
