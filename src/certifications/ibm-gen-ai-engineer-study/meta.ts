import type { CertificationMeta } from '../types'

export const ibmGenAiEngineerStudyMeta: CertificationMeta = {
  id: 'ibm-gen-ai-engineer-study',
  code: 'IBM Generative AI Engineering',
  name: 'IBM Generative AI Engineering Professional Certificate',
  vendor: 'AI / ML',
  level: 'professional',
  description:
    'Study deck for the Coursera IBM Generative AI Engineering Professional Certificate — gen AI foundations, Python/Flask apps, ML/DL, LLM architecture, fine-tuning, and RAG agents. Completion certificate only; no proctored exam.',
  available: true,
  studyTrack: true,
  domains: [
    {
      id: 'gen-ai-foundations',
      name: 'Generative AI Foundations',
      weight: 20,
      description: 'AI fundamentals, gen AI applications, and prompt engineering basics',
    },
    {
      id: 'python-ai-apps',
      name: 'Python and AI Application Development',
      weight: 20,
      description: 'Python, Flask, Gradio, and deploying gen AI-powered applications',
    },
    {
      id: 'data-ml-dl',
      name: 'Data Analysis, ML, and Deep Learning',
      weight: 20,
      description: 'EDA, scikit-learn, Keras, and neural network architectures',
    },
    {
      id: 'llm-architecture',
      name: 'LLM Architecture and Transformers',
      weight: 20,
      description: 'Tokenization, embeddings, attention, and Hugging Face foundations',
    },
    {
      id: 'gen-ai-engineering',
      name: 'Generative AI Engineering and Deployment',
      weight: 20,
      description: 'Fine-tuning, RLHF, RAG, LangChain agents, and capstone projects',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
