import type { CertificationMeta } from '../types'

export const ibmAiEngineerStudyMeta: CertificationMeta = {
  id: 'ibm-ai-engineer-study',
  code: 'IBM AI Engineering',
  name: 'IBM AI Engineering Professional Certificate',
  vendor: 'AI / ML',
  level: 'professional',
  description:
    'Study deck for the Coursera IBM AI Engineering Professional Certificate (ai-engineer) — classical ML, deep learning with Keras/PyTorch, generative AI, fine-tuning, and RAG agents. Completion certificate only; no proctored exam.',
  available: true,
  studyTrack: true,
  domains: [
    {
      id: 'ml-with-python',
      name: 'Machine Learning with Python',
      weight: 20,
      description: 'Supervised/unsupervised learning, scikit-learn, and model evaluation',
    },
    {
      id: 'deep-learning',
      name: 'Deep Learning Frameworks',
      weight: 20,
      description: 'Keras, TensorFlow, PyTorch, CNNs, and neural network training',
    },
    {
      id: 'gen-ai-architecture',
      name: 'Generative AI and LLM Architecture',
      weight: 20,
      description: 'Transformers, tokenization, embeddings, and Hugging Face foundations',
    },
    {
      id: 'gen-ai-fine-tuning',
      name: 'Fine-Tuning Transformers',
      weight: 20,
      description: 'PEFT, LoRA, RLHF, DPO, and production LLM engineering',
    },
    {
      id: 'rag-agents',
      name: 'RAG, LangChain, and AI Agents',
      weight: 20,
      description: 'Retrieval-augmented generation, vector stores, and agent applications',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
