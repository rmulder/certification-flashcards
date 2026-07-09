import type { CertificationMeta } from '../types'

export const mlsC01Meta: CertificationMeta = {

  id: 'mls-c01',
  code: 'MLS-C01',
  name: 'AWS Certified Machine Learning - Specialty',
  vendor: 'AWS',
  level: 'specialty',
  description:
    'Specialty certification for designing, building, deploying, and maintaining ML solutions on AWS. Exam retired March 2026 — use MLA-C01 for current AWS ML certification.',
  available: true,
  retired: true,
  retiredNotice:
    'This exam was retired by AWS in March 2026. All study modes remain available for review. For current certification prep, use MLA-C01.',
  domains: [
    {
      id: 'data-engineering',
      name: 'Data Engineering',
      weight: 20,
      description: 'Data repositories, ingestion, transformation, and integrity for ML',
    },
    {
      id: 'exploratory-analysis',
      name: 'Exploratory Data Analysis',
      weight: 24,
      description: 'Sanitization, visualization, and feature engineering',
    },
    {
      id: 'modeling',
      name: 'Modeling',
      weight: 36,
      description: 'Algorithm selection, training, tuning, and evaluation',
    },
    {
      id: 'ml-ops',
      name: 'Machine Learning Implementation and Operations',
      weight: 20,
      description: 'Deployment, monitoring, pipelines, and cost optimization',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 75,
  },
  cardCount: 190,
}
