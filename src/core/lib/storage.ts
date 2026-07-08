import type { AllProgress, CardProgress, CardRating, CertProgress } from '../types'

const STORAGE_KEY = 'certification-flashcards-progress'
const LEGACY_STORAGE_KEY = 'clf-c02-flashcards-progress'

const defaultCertProgress = (): CertProgress => ({
  cards: {},
  mockExamsTaken: 0,
  lastMockScore: null,
})

function migrateLegacyProgress(all: AllProgress): AllProgress {
  if (Object.keys(all).length > 0) return all
  try {
    const raw = localStorage.getItem(LEGACY_STORAGE_KEY)
    if (!raw) return all
    const legacy = JSON.parse(raw) as CertProgress
    return { 'clf-c02': { ...defaultCertProgress(), ...legacy } }
  } catch {
    return all
  }
}

export function loadAllProgress(): AllProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return migrateLegacyProgress({})
    const parsed = JSON.parse(raw) as AllProgress
    return migrateLegacyProgress(parsed)
  } catch {
    return {}
  }
}

export function loadCertProgress(certId: string): CertProgress {
  const all = loadAllProgress()
  return all[certId] ?? defaultCertProgress()
}

export function saveCertProgress(certId: string, progress: CertProgress): void {
  const all = loadAllProgress()
  all[certId] = progress
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
}

export function getCardProgress(
  progress: CertProgress,
  cardId: string,
): CardProgress {
  return (
    progress.cards[cardId] ?? {
      rating: 'unknown',
      lastReviewed: '',
      timesSeen: 0,
      timesCorrect: 0,
    }
  )
}

export function updateCardRating(
  progress: CertProgress,
  cardId: string,
  rating: CardRating,
): CertProgress {
  const existing = getCardProgress(progress, cardId)
  return {
    ...progress,
    cards: {
      ...progress.cards,
      [cardId]: {
        ...existing,
        rating,
        lastReviewed: new Date().toISOString(),
        timesSeen: existing.timesSeen + 1,
      },
    },
  }
}

export function recordQuizAnswer(
  progress: CertProgress,
  cardId: string,
  correct: boolean,
): CertProgress {
  const existing = getCardProgress(progress, cardId)
  const timesCorrect = existing.timesCorrect + (correct ? 1 : 0)
  const timesSeen = existing.timesSeen + 1
  let rating: CardRating = existing.rating
  if (correct && timesCorrect >= 2) rating = 'known'
  else if (!correct) rating = 'learning'

  return {
    ...progress,
    cards: {
      ...progress.cards,
      [cardId]: {
        rating,
        lastReviewed: new Date().toISOString(),
        timesSeen,
        timesCorrect,
      },
    },
  }
}

export function recordMockExam(
  progress: CertProgress,
  scorePercent: number,
): CertProgress {
  return {
    ...progress,
    mockExamsTaken: progress.mockExamsTaken + 1,
    lastMockScore: scorePercent,
  }
}

export function resetCertProgress(certId: string): void {
  const all = loadAllProgress()
  delete all[certId]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
}
