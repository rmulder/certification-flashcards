import type { CertificationMeta } from '../types'

export const gh300Meta: CertificationMeta = {

  id: 'gh-300',
  code: 'GH-300',
  name: 'GitHub Copilot',
  vendor: 'GitHub',
  level: 'associate',
  description:
    'Validates expertise using GitHub Copilot for productivity, prompt engineering, responsible AI, and privacy safeguards.',
  available: true,
  domains: [
    {
      id: 'responsible-ai',
      name: 'Use GitHub Copilot Responsibly',
      weight: 18,
      description: 'Responsible AI principles and validating AI output',
    },
    {
      id: 'copilot-features',
      name: 'Use GitHub Copilot Features',
      weight: 27,
      description: 'IDE, CLI, Agent Mode, code review, and org policies',
    },
    {
      id: 'data-architecture',
      name: 'Copilot Data and Architecture',
      weight: 13,
      description: 'Data handling, flow, lifecycle, and LLM limitations',
    },
    {
      id: 'prompt-engineering',
      name: 'Prompt Engineering and Context',
      weight: 13,
      description: 'Prompt structure, context, and few-shot techniques',
    },
    {
      id: 'productivity',
      name: 'Developer Productivity',
      weight: 13,
      description: 'Code generation, testing, refactoring, and security',
    },
    {
      id: 'privacy-safeguards',
      name: 'Privacy and Safeguards',
      weight: 16,
      description: 'Content exclusions, duplication detection, troubleshooting',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
