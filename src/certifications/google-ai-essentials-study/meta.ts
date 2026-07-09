import type { CertificationMeta } from '../types'

export const googleAiEssentialsStudyMeta: CertificationMeta = {
  id: 'google-ai-essentials-study',
  code: 'Google AI Essentials',
  name: 'Google AI Essentials Study Track',
  vendor: 'Google Cloud',
  level: 'foundational',
  description:
    'Study deck aligned with the Coursera Google AI Essentials Specialization — AI fundamentals, productivity tools, prompting, responsible AI, and staying current. No official proctored exam; complements Google completion certificates.',
  available: true,
  studyTrack: true,
  domains: [
    {
      id: 'intro-ai',
      name: 'Introduction to AI',
      weight: 20,
      description: 'AI basics, how models learn, capabilities, limitations, and human oversight',
    },
    {
      id: 'ai-productivity',
      name: 'Maximize Productivity With AI Tools',
      weight: 20,
      description: 'Workplace gen AI use cases, Gemini, and workflow optimization',
    },
    {
      id: 'prompting',
      name: 'Discover the Art of Prompting',
      weight: 20,
      description: 'Effective prompts, few-shot techniques, and iterative refinement',
    },
    {
      id: 'ai-responsible',
      name: 'Use AI Responsibly',
      weight: 20,
      description: 'Bias, privacy, security, hallucinations, and responsible use',
    },
    {
      id: 'ai-future',
      name: 'Stay Ahead of the AI Curve',
      weight: 20,
      description: 'Evaluating tools, workplace integration, and emerging AI trends',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
