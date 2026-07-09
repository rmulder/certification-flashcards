import type { CertificationMeta } from '../types'

export const aiForEveryoneStudyMeta: CertificationMeta = {
  id: 'ai-for-everyone-study',
  code: 'AI for Everyone',
  name: 'AI For Everyone',
  vendor: 'AI / ML',
  level: 'foundational',
  description:
    'Study deck for the Coursera AI For Everyone course by Andrew Ng — AI fundamentals, project workflow, company strategy, and societal impact for non-technical leaders. Completion certificate only; no proctored exam.',
  available: true,
  studyTrack: true,
  domains: [
    {
      id: 'what-is-ai',
      name: 'What is AI?',
      weight: 25,
      description: 'AI definitions, capabilities, limitations, and ML concepts for leaders',
    },
    {
      id: 'building-ai-projects',
      name: 'Building AI Projects',
      weight: 25,
      description: 'Project workflow, data, metrics, and common pitfalls',
    },
    {
      id: 'building-ai-company',
      name: 'Building AI In Your Company',
      weight: 25,
      description: 'AI strategy, teams, pilot projects, and business transformation',
    },
    {
      id: 'ai-society',
      name: 'AI and Society',
      weight: 25,
      description: 'Ethics, bias, jobs, regulation, and societal impact',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
