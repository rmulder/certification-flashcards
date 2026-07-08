import type { Card, DomainInfo, MockExamSettings, QuizResult } from '../types'

function hashStringToUint32(input: string): number {
  let hash = 2166136261
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function mulberry32(seed: number): () => number {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

function shuffleWithRng<T>(items: T[], rng: () => number): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function filterCards(
  cards: Card[],
  domain?: string | 'all',
  weakOnly?: boolean,
  progress?: Record<string, { rating: string }>,
): Card[] {
  let filtered = cards
  if (domain && domain !== 'all') {
    filtered = filtered.filter((c) => c.domain === domain)
  }
  if (weakOnly && progress) {
    filtered = filtered.filter((c) => {
      const rating = progress[c.id]?.rating
      return !rating || rating === 'unknown' || rating === 'learning'
    })
  }
  return filtered
}

export function shuffleCardOptions(card: Card, sessionSeed: number): Card {
  const seed = hashStringToUint32(`${sessionSeed}:${card.id}`)
  const rng = mulberry32(seed)

  const order = shuffleWithRng(
    card.options.map((_, i) => i),
    rng,
  )

  const options = order.map((i) => card.options[i])

  const inverse = new Map<number, number>()
  order.forEach((oldIndex, newIndex) => {
    inverse.set(oldIndex, newIndex)
  })

  const correctAnswers = card.correctAnswers
    .map((old) => inverse.get(old))
    .filter((v): v is number => typeof v === 'number')

  return { ...card, options, correctAnswers }
}

export function buildMockExam(
  cards: Card[],
  domains: DomainInfo[],
  settings: MockExamSettings,
): Card[] {
  const selected: Card[] = []
  const used = new Set<string>()
  const { questionCount } = settings

  for (const domain of domains) {
    const count = Math.round((domain.weight / 100) * questionCount)
    const pool = shuffle(cards.filter((c) => c.domain === domain.id))
    for (const card of pool) {
      if (selected.length >= questionCount) break
      if (used.has(card.id)) continue
      if (selected.filter((s) => s.domain === domain.id).length >= count) {
        continue
      }
      selected.push(card)
      used.add(card.id)
    }
  }

  while (selected.length < questionCount) {
    const remaining = cards.filter((c) => !used.has(c.id))
    if (remaining.length === 0) break
    const card = remaining[Math.floor(Math.random() * remaining.length)]
    selected.push(card)
    used.add(card.id)
  }

  return shuffle(selected)
}

export function isAnswerCorrect(card: Card, selected: number[]): boolean {
  const sortedSelected = [...selected].sort((a, b) => a - b)
  const sortedCorrect = [...card.correctAnswers].sort((a, b) => a - b)
  if (sortedSelected.length !== sortedCorrect.length) return false
  return sortedSelected.every((v, i) => v === sortedCorrect[i])
}

export function buildQuizResult(
  cards: Card[],
  answers: Map<string, number[]>,
  domains: DomainInfo[],
): QuizResult {
  const byDomain = Object.fromEntries(
    domains.map((d) => [d.id, { correct: 0, total: 0 }]),
  )

  let correct = 0
  const quizAnswers = cards.map((card) => {
    const selected = answers.get(card.id) ?? []
    const isCorrect = isAnswerCorrect(card, selected)
    if (isCorrect) correct++
    if (byDomain[card.domain]) {
      byDomain[card.domain].total++
      if (isCorrect) byDomain[card.domain].correct++
    }
    return { cardId: card.id, selected, correct: isCorrect }
  })

  return {
    answers: quizAnswers,
    score: correct,
    total: cards.length,
    byDomain,
    completedAt: new Date().toISOString(),
  }
}

export function formatAnswer(card: Card): string {
  return card.correctAnswers.map((i) => card.options[i]).join(', ')
}
