import type { CertificationConfig } from '../types'
import { nodeFundamentalsCards } from './cards/domain1-node-fundamentals'
import { asyncStreamsCards } from './cards/domain2-async-streams'
import { httpServicesCards } from './cards/domain3-http-services'
import { securityErrorsCards } from './cards/domain4-security-errors'
import { dataPersistenceCards } from './cards/domain5-data-persistence'
import { testingDebugCards } from './cards/domain6-testing-debug'

const cards = [
  ...nodeFundamentalsCards,
  ...asyncStreamsCards,
  ...httpServicesCards,
  ...securityErrorsCards,
  ...dataPersistenceCards,
  ...testingDebugCards,
]

export const openjsNodeConfig: CertificationConfig = {
  id: 'openjs-node',
  code: 'OpenJS Node',
  name: 'OpenJS Node.js Developer Study Track',
  vendor: 'JavaScript',
  level: 'associate',
  description:
    'Study deck covering JSNAD and JSNSD exam topics. Official OpenJS Node exams retired September 2025 — content retained for Node.js and Lambda backend prep.',
  available: true,
  retired: true,
  retiredNotice:
    'Official OpenJS Node.js exams (JSNAD and JSNSD) were retired in September 2025. All study modes remain available for Node.js and Lambda backend prep.',
  domains: [
    {
      id: 'node-fundamentals',
      name: 'Node.js Fundamentals',
      weight: 20,
      description: 'Event loop, modules, npm, process, and CLI',
    },
    {
      id: 'async-streams',
      name: 'Async I/O and Streams',
      weight: 17,
      description: 'Promises, async/await, streams, and buffers',
    },
    {
      id: 'http-services',
      name: 'HTTP and Services',
      weight: 20,
      description: 'HTTP, Express, REST, middleware, and serverless patterns',
    },
    {
      id: 'security-errors',
      name: 'Security and Error Handling',
      weight: 16,
      description: 'Errors, validation, auth, and secure coding',
    },
    {
      id: 'data-persistence',
      name: 'Data and Persistence',
      weight: 17,
      description: 'Database drivers, pools, Redis, and DynamoDB patterns',
    },
    {
      id: 'testing-debug',
      name: 'Testing and Debugging',
      weight: 11,
      description: 'Diagnostics, logging, and automated testing',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: cards.length,
  cards,
}
