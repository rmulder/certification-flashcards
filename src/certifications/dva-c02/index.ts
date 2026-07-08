import type { CertificationConfig } from '../types'
import { developmentCards } from './cards/domain1-development'
import { securityCards } from './cards/domain2-security'
import { deploymentCards } from './cards/domain3-deployment'
import { troubleshootingCards } from './cards/domain4-troubleshooting'

const cards = [
  ...developmentCards,
  ...securityCards,
  ...deploymentCards,
  ...troubleshootingCards,
]

export const dvaC02Config: CertificationConfig = {
  id: 'dva-c02',
  code: 'DVA-C02',
  name: 'AWS Certified Developer - Associate',
  vendor: 'AWS',
  level: 'associate',
  description:
    'Associate certification for developing, testing, deploying, and debugging AWS cloud applications.',
  available: true,
  domains: [
    {
      id: 'development',
      name: 'Development with AWS Services',
      weight: 32,
      description: 'SDKs, Lambda, messaging, and data store integration',
    },
    {
      id: 'security',
      name: 'Security',
      weight: 26,
      description: 'Authentication, encryption, and sensitive data management',
    },
    {
      id: 'deployment',
      name: 'Deployment',
      weight: 24,
      description: 'CI/CD, testing, and deployment strategies',
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting and Optimization',
      weight: 18,
      description: 'Observability, debugging, and performance tuning',
    },
  ],
  mockExam: {
    questionCount: 65,
    passPercent: 72,
  },
  cards,
}
