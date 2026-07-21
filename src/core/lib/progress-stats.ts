import type { Card, CertProgress } from '../types'
import { getCardProgress } from './storage'

export interface RatingCounts {
  unknown: number
  learning: number
  known: number
  total: number
  /** Cards not yet marked Known — same pool as “Quiz weak cards only”. */
  toReview: number
}

export function countRatings(cards: Card[], progress: CertProgress): RatingCounts {
  const counts = { unknown: 0, learning: 0, known: 0 }
  for (const card of cards) {
    const r = getCardProgress(progress, card.id).rating
    counts[r]++
  }
  return {
    ...counts,
    total: cards.length,
    toReview: counts.unknown + counts.learning,
  }
}

/**
 * Rating counts for one certification when only `cardCount` and saved progress are
 * available (catalog). Totals always match that cert’s deck size; anything not
 * Known or Learning counts as not reviewed.
 */
export function countRatingsFromProgress(
  totalCards: number,
  progress: CertProgress,
): RatingCounts {
  let learning = 0
  let known = 0
  for (const entry of Object.values(progress.cards)) {
    if (entry.rating === 'known') known++
    else if (entry.rating === 'learning') learning++
  }
  known = Math.min(known, totalCards)
  learning = Math.min(learning, totalCards - known)
  const unknown = Math.max(0, totalCards - known - learning)
  return {
    unknown,
    learning,
    known,
    total: totalCards,
    toReview: unknown + learning,
  }
}

/** Cards in scope (e.g. one domain) for study/quiz headers. */
export function cardsInScope(cards: Card[], domain: string | 'all'): Card[] {
  if (domain === 'all') return cards
  return cards.filter((c) => c.domain === domain)
}

export function formatRatingBreakdown(counts: RatingCounts): string {
  return `${counts.unknown} not reviewed · ${counts.learning} learning · ${counts.known} known`
}
