import type { CertificationConfig } from '../types'
import { lowCodeAiCards } from './cards/domain1-low-code-ai'
import { dataCollaborationCards } from './cards/domain2-data-collaboration'
import { scaleModelsCards } from './cards/domain3-scale-models'
import { servingCards } from './cards/domain4-serving'
import { mlPipelinesCards } from './cards/domain5-ml-pipelines'
import { mlMonitoringCards } from './cards/domain6-ml-monitoring'

const cards = [
  ...lowCodeAiCards,
  ...dataCollaborationCards,
  ...scaleModelsCards,
  ...servingCards,
  ...mlPipelinesCards,
  ...mlMonitoringCards,
]

export const gcpPmleConfig: CertificationConfig = {
  id: 'gcp-pmle',
  code: 'GCP PMLE',
  name: 'Google Cloud Professional Machine Learning Engineer',
  vendor: 'Google Cloud',
  level: 'professional',
  description:
    'Professional certification for designing, building, deploying, and monitoring ML solutions on Google Cloud with Vertex AI and BigQuery ML.',
  available: true,
  domains: [
    {
      id: 'low-code-ai',
      name: 'Architecting Low-Code AI Solutions',
      weight: 13,
      description: 'BigQuery ML, AutoML, pre-trained APIs, and Model Garden',
    },
    {
      id: 'data-collaboration',
      name: 'Collaborating to Manage Data and Models',
      weight: 16,
      description: 'Data governance, notebooks, and experiment tracking',
    },
    {
      id: 'scale-models',
      name: 'Scaling Prototypes into ML Models',
      weight: 21,
      description: 'Training, hardware selection, and distributed learning',
    },
    {
      id: 'serving',
      name: 'Serving and Scaling Models',
      weight: 20,
      description: 'Online and batch prediction, scaling, and optimization',
    },
    {
      id: 'ml-pipelines',
      name: 'Automating and Orchestrating ML Pipelines',
      weight: 18,
      description: 'Vertex AI Pipelines, TFX, Composer, and retraining',
    },
    {
      id: 'ml-monitoring',
      name: 'Monitoring AI Solutions',
      weight: 13,
      description: 'Drift, skew, explainability, and responsible AI',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cards,
}
