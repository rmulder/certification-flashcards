import type { CertificationMeta } from '../types'

export const pmiCpmaiMeta: CertificationMeta = {
  id: 'pmi-cpmai',
  code: 'PMI-CPMAI',
  name: 'PMI Certified Professional in Managing AI (PMI-CPMAI)',
  vendor: 'AI / ML',
  level: 'professional',
  description:
    'PMI-CPMAI certification — CPMAI methodology for managing AI projects from business alignment through operationalization. Proctored exam: 100 scored questions (120 total), 160 minutes, pass/fail.',
  available: true,
  domains: [
    {
      id: 'responsible-trustworthy-ai',
      name: 'Support Responsible and Trustworthy AI Efforts',
      weight: 15,
      description: 'Privacy, security, transparency, bias, compliance, and accountability',
    },
    {
      id: 'business-needs-solutions',
      name: 'Identify Business Needs and Solutions',
      weight: 26,
      description: 'Problem framing, feasibility, ROI, scope, and business alignment',
    },
    {
      id: 'identify-data-needs',
      name: 'Identify Data Needs',
      weight: 26,
      description: 'Data requirements, SMEs, sources, governance, and readiness',
    },
    {
      id: 'model-development-evaluation',
      name: 'Manage AI Model Development and Evaluation',
      weight: 16,
      description: 'Model development, testing, evaluation, and go/no-go decisions',
    },
    {
      id: 'operationalize-ai',
      name: 'Operationalize AI Solution',
      weight: 17,
      description: 'Deployment, monitoring, governance, and continuous improvement',
    },
  ],
  mockExam: {
    questionCount: 100,
    passPercent: 70,
  },
  cardCount: 190,
}
