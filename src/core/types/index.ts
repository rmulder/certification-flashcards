export interface Card {
  id: string
  domain: string
  task: string
  tags: string[]
  question: string
  options: string[]
  correctAnswers: number[]
  explanation: string
}

export type CardRating = 'unknown' | 'learning' | 'known'

export interface CardProgress {
  rating: CardRating
  lastReviewed: string
  timesSeen: number
  timesCorrect: number
}

export interface CertProgress {
  cards: Record<string, CardProgress>
  mockExamsTaken: number
  lastMockScore: number | null
}

export type AllProgress = Record<string, CertProgress>

export type View =
  | 'catalog'
  | 'cert-home'
  | 'study'
  | 'quiz'
  | 'mock-exam'
  | 'progress'

export interface DomainInfo {
  id: string
  name: string
  weight: number
  description: string
}

export interface MockExamSettings {
  questionCount: number
  passPercent: number
}

export interface QuizAnswer {
  cardId: string
  selected: number[]
  correct: boolean
}

export interface QuizResult {
  answers: QuizAnswer[]
  score: number
  total: number
  byDomain: Record<string, { correct: number; total: number }>
  completedAt: string
}
