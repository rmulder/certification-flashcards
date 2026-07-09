import type { CertificationMeta } from '../types'

export const sapC02Meta: CertificationMeta = {

  id: 'sap-c02',
  code: 'SAP-C02',
  name: 'AWS Certified Solutions Architect - Professional',
  vendor: 'AWS',
  level: 'professional',
  description:
    'Professional certification for designing complex, multi-account, hybrid, and migration-ready AWS architectures at scale.',
  available: true,
  domains: [
    {
      id: 'org-complexity',
      name: 'Design Solutions for Organizational Complexity',
      weight: 26,
      description: 'Multi-account, hybrid connectivity, governance, and shared services',
    },
    {
      id: 'new-solutions',
      name: 'Design for New Solutions',
      weight: 29,
      description: 'Greenfield architecture across Well-Architected pillars',
    },
    {
      id: 'continuous-improvement',
      name: 'Continuous Improvement for Existing Solutions',
      weight: 25,
      description: 'Optimize security, performance, reliability, and cost in place',
    },
    {
      id: 'migration-modernization',
      name: 'Accelerate Workload Migration and Modernization',
      weight: 20,
      description: 'Migration assessment, 6Rs, cutover, and target architecture',
    },
  ],
  mockExam: {
    questionCount: 75,
    passPercent: 75,
  },
  cardCount: 190,
}
