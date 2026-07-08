import type { CertificationConfig } from './types'

const stub = (
  id: string,
  code: string,
  name: string,
  level: CertificationConfig['level'],
  description: string,
  domains: CertificationConfig['domains'],
  mockExam: CertificationConfig['mockExam'],
): CertificationConfig => ({
  id,
  code,
  name,
  vendor: 'AWS',
  level,
  description,
  available: false,
  domains,
  mockExam,
  cards: [],
})

export const dvaC02Config = stub(
  'dva-c02',
  'DVA-C02',
  'AWS Certified Developer - Associate',
  'associate',
  'Associate certification for developing and deploying AWS applications.',
  [
    { id: 'development', name: 'Development with AWS Services', weight: 32, description: 'SDKs, APIs, CI/CD' },
    { id: 'security', name: 'Security', weight: 26, description: 'Auth, encryption, secrets' },
    { id: 'deployment', name: 'Deployment', weight: 24, description: 'Containers, serverless, IaC' },
    { id: 'troubleshooting', name: 'Troubleshooting and Optimization', weight: 18, description: 'Debugging and performance' },
  ],
  { questionCount: 65, passPercent: 72 },
)

export const deaC01Config = stub(
  'dea-c01',
  'DEA-C01',
  'AWS Certified Data Engineer - Associate',
  'associate',
  'Associate certification for data ingestion, transformation, and orchestration on AWS.',
  [
    { id: 'ingestion', name: 'Data Ingestion and Transformation', weight: 34, description: 'ETL, streaming, migration' },
    { id: 'store', name: 'Data Store Management', weight: 26, description: 'Data lakes, warehouses, catalogs' },
    { id: 'operations', name: 'Data Operations and Support', weight: 22, description: 'Monitoring, automation' },
    { id: 'security', name: 'Data Security and Governance', weight: 18, description: 'Access, encryption, compliance' },
  ],
  { questionCount: 65, passPercent: 72 },
)

export const saaC03Config = stub(
  'saa-c03',
  'SAA-C03',
  'AWS Certified Solutions Architect - Associate',
  'associate',
  'Associate certification for designing resilient, high-performing AWS architectures.',
  [
    { id: 'design-secure', name: 'Design Secure Architectures', weight: 30, description: 'Security controls and IAM' },
    { id: 'design-resilient', name: 'Design Resilient Architectures', weight: 26, description: 'HA, fault tolerance' },
    { id: 'design-performant', name: 'Design High-Performing Architectures', weight: 24, description: 'Scalable solutions' },
    { id: 'design-cost', name: 'Design Cost-Optimized Architectures', weight: 20, description: 'Cost-efficient design' },
  ],
  { questionCount: 65, passPercent: 72 },
)

export const aipC01Config = stub(
  'aip-c01',
  'AIP-C01',
  'AWS Certified Generative AI Developer - Professional',
  'professional',
  'Professional certification for building generative AI applications on AWS.',
  [
    { id: 'foundation-models', name: 'Foundation Model Integration', weight: 28, description: 'Model selection and integration' },
    { id: 'rag', name: 'RAG and Knowledge Bases', weight: 24, description: 'Retrieval-augmented generation' },
    { id: 'agents', name: 'Agents and Orchestration', weight: 24, description: 'Agent workflows and tools' },
    { id: 'responsible', name: 'Responsible AI and Security', weight: 24, description: 'Guardrails, compliance, ops' },
  ],
  { questionCount: 75, passPercent: 75 },
)
