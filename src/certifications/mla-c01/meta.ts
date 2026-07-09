import type { CertificationMeta } from '../types'

export const mlaC01Meta: CertificationMeta = {

  id: 'mla-c01',
  code: 'MLA-C01',
  name: 'AWS Certified Machine Learning Engineer - Associate',
  vendor: 'AWS',
  level: 'associate',
  description:
    'Associate certification for preparing data, developing models, deploying ML workflows, and operating secure ML solutions on AWS.',
  available: true,
  domains: [
    {
      id: 'data-prep',
      name: 'Data Preparation for Machine Learning',
      weight: 28,
      description: 'Ingestion, feature engineering, labeling, and data readiness',
    },
    {
      id: 'model-dev',
      name: 'ML Model Development',
      weight: 26,
      description: 'Model selection, training, tuning, and evaluation',
    },
    {
      id: 'deployment',
      name: 'Deployment and Orchestration of ML Workflows',
      weight: 22,
      description: 'Endpoints, pipelines, CI/CD, and infrastructure as code',
    },
    {
      id: 'ml-monitoring',
      name: 'ML Solution Monitoring, Maintenance, and Security',
      weight: 24,
      description: 'Drift detection, observability, cost, IAM, and compliance',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 72,
  },
  cardCount: 190,
}
