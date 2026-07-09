import type { CertificationMeta } from '../types'

export const dataquestGenAiStudyMeta: CertificationMeta = {
  id: 'dataquest-gen-ai-study',
  code: 'Dataquest Gen AI',
  name: 'Generative AI Fundamentals in Python',
  vendor: 'AI / ML',
  level: 'foundational',
  description:
    'Study deck for the Dataquest Generative AI Fundamentals in Python skill track — Python basics, LLM APIs, prompt engineering, web scraping, and Streamlit AI apps. Skill track certificate only; no proctored exam.',
  available: true,
  studyTrack: true,
  domains: [
    {
      id: 'ai-chatbots-fundamentals',
      name: 'AI Chatbots and Python Fundamentals',
      weight: 20,
      description: 'Gen AI chatbot basics and core Python syntax',
    },
    {
      id: 'python-apis-functions',
      name: 'Python Dictionaries, APIs, and Functions',
      weight: 20,
      description: 'Dictionaries, API requests, functions, and Jupyter projects',
    },
    {
      id: 'intermediate-python-tooling',
      name: 'Intermediate Python and Tooling',
      weight: 20,
      description: 'OOP, Git, virtual environments, and developer tooling',
    },
    {
      id: 'apis-web-scraping',
      name: 'APIs and Web Scraping for AI',
      weight: 20,
      description: 'API auth, pagination, JSON, and ethical web scraping',
    },
    {
      id: 'llm-prompting-streamlit',
      name: 'LLM Prompting and Streamlit Apps',
      weight: 20,
      description: 'OpenAI API, prompt engineering, tokens, and Streamlit chatbots',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
