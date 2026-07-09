import type { CertificationMeta } from '../types'

export const aiPlusFoundationMeta: CertificationMeta = {
  id: 'ai-plus-foundation',
  code: 'AI+ Foundation',
  name: 'TrainAI AI+ Foundation',
  vendor: 'AI / ML',
  level: 'foundational',
  description:
    'TrainAI AI+ Foundation certification — AI fundamentals, prompt engineering, business applications, ethics, and career impact. Proctored exam: 50 questions, 90 minutes, 70% to pass.',
  available: true,
  domains: [
    {
      id: 'intro-ai-impact',
      name: 'Introduction to AI & Its Impact',
      weight: 20,
      description: 'Understanding AI, everyday applications, and machine learning basics',
    },
    {
      id: 'prompt-engineering',
      name: 'Prompt Engineering: Interacting with AI',
      weight: 20,
      description: 'Prompt design, GPT-4, and effective AI interaction',
    },
    {
      id: 'ai-business-industry',
      name: 'AI in Business & Industry Applications',
      weight: 20,
      description: 'AI strategy, business tools, and generative AI in industry',
    },
    {
      id: 'ai-ethics-bias',
      name: 'AI Ethics & Bias',
      weight: 20,
      description: 'Ethical AI, data bias, and responsible decision-making',
    },
    {
      id: 'future-ai-careers',
      name: 'The Future of AI & Career Opportunities',
      weight: 20,
      description: 'Global impact, workforce change, and future AI skills',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
