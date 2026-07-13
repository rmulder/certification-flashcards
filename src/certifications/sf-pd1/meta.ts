import type { CertificationMeta } from '../types'

export const sfPd1Meta: CertificationMeta = {
  id: 'sf-pd1',
  code: 'PD1',
  name: 'Salesforce Certified Platform Developer I',
  vendor: 'Programming Languages and Databases',
  level: 'associate',
  description:
    'Validates foundational Apex, SOQL/DML, triggers, Lightning Web Components, testing, and deployment skills on the Salesforce Platform.',
  available: true,
  domains: [
    {
      id: 'developer-fundamentals',
      name: 'Developer Fundamentals',
      weight: 25,
      description: 'Apex syntax, SOQL/DML, sObjects, schema, and governor limits',
    },
    {
      id: 'process-automation-logic',
      name: 'Process Automation and Logic',
      weight: 28,
      description: 'Triggers, flows, async Apex, platform events, and automation design',
    },
    {
      id: 'user-interface',
      name: 'User Interface',
      weight: 25,
      description: 'Lightning Web Components, controllers, Lightning Experience, and UI patterns',
    },
    {
      id: 'testing-debugging-deployment',
      name: 'Testing, Debugging, and Deployment',
      weight: 22,
      description: 'Apex tests, debug logs, change sets, CLI deployment, and release practices',
    },
  ],
  mockExam: {
    questionCount: 60,
    passPercent: 68,
  },
  cardCount: 190,
}
