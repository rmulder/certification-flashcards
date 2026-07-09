import type { CertificationMeta } from '../types'

export const dvaC02Meta: CertificationMeta = {

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
  cardCount: 190,
}
