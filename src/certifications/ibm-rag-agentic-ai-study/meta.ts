import type { CertificationMeta } from '../types'

export const ibmRagAgenticAiStudyMeta: CertificationMeta = {
  id: 'ibm-rag-agentic-ai-study',
  code: 'IBM RAG & Agentic AI',
  name: 'IBM RAG and Agentic AI Professional Certificate',
  vendor: 'AI / ML',
  level: 'professional',
  description:
    'Study deck for the Coursera IBM RAG and Agentic AI Professional Certificate — LangChain, vector databases, multimodal gen AI, LangGraph, CrewAI, MCP, and agentic workflows. Completion certificate only; no proctored exam.',
  available: true,
  studyTrack: true,
  domains: [
    {
      id: 'genai-langchain-basics',
      name: 'Generative AI and LangChain Foundations',
      weight: 20,
      description: 'LangChain, prompt templates, RAG basics, and Gradio interfaces',
    },
    {
      id: 'vector-databases-rag',
      name: 'Vector Databases and Advanced RAG',
      weight: 20,
      description: 'ChromaDB, FAISS, retrievers, and advanced RAG pipelines',
    },
    {
      id: 'multimodal-genai',
      name: 'Multimodal Generative AI',
      weight: 20,
      description: 'Text, speech, image, and video integration with gen AI models',
    },
    {
      id: 'agent-fundamentals-langgraph',
      name: 'AI Agents and LangGraph',
      weight: 20,
      description: 'Tool calling, ReAct, agentic RAG, and LangGraph orchestration',
    },
    {
      id: 'multi-agent-mcp-capstone',
      name: 'Multi-Agent Systems and MCP',
      weight: 20,
      description: 'CrewAI, AutoGen, BeeAI, Model Context Protocol, and capstone',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
