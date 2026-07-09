import type { CertificationConfig } from '../types'
import { reactFundamentalsCards } from './cards/domain1-react-fundamentals'
import { hooksEffectsCards } from './cards/domain2-hooks-effects'
import { dataFormsCards } from './cards/domain3-data-forms'
import { architecturePatternsCards } from './cards/domain4-architecture-patterns'
import { performanceTestingCards } from './cards/domain5-performance-testing'
import { typescriptProductionCards } from './cards/domain6-typescript-production'

const cards = [
  ...reactFundamentalsCards,
  ...hooksEffectsCards,
  ...dataFormsCards,
  ...architecturePatternsCards,
  ...performanceTestingCards,
  ...typescriptProductionCards,
]

export const reactStudyConfig: CertificationConfig = {
  id: 'react-study',
  code: 'React',
  name: 'React Professional Study Track',
  vendor: 'JavaScript',
  level: 'associate',
  description:
    'Comprehensive React 18+ study deck — components, hooks, data fetching, architecture, testing, TypeScript, and production patterns. No official proctored exam.',
  available: true,
  studyTrack: true,
  domains: [
    {
      id: 'react-fundamentals',
      name: 'React Fundamentals',
      weight: 20,
      description: 'JSX, components, props, state, and rendering',
    },
    {
      id: 'hooks-effects',
      name: 'Hooks and Effects',
      weight: 20,
      description: 'useState, useEffect, context, reducer, and custom hooks',
    },
    {
      id: 'data-forms',
      name: 'Data Fetching and Forms',
      weight: 17,
      description: 'API integration, forms, and server state patterns',
    },
    {
      id: 'architecture-patterns',
      name: 'Architecture and Patterns',
      weight: 17,
      description: 'Composition, routing, and scalable state design',
    },
    {
      id: 'performance-testing',
      name: 'Performance and Testing',
      weight: 15,
      description: 'Memoization, lazy loading, Suspense, and Testing Library',
    },
    {
      id: 'typescript-production',
      name: 'TypeScript and Production',
      weight: 12,
      description: 'Typed components, a11y, error boundaries, and best practices',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: cards.length,
  cards,
}
