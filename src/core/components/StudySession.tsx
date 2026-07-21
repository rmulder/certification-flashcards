import { useCallback, useEffect, useRef, useState } from 'react'
import type { Card, CardRating, CertProgress, DomainInfo } from '../types'
import { cardsInScope, countRatings, formatRatingBreakdown } from '../lib/progress-stats'
import { filterCards, shuffle, shuffleCardOptions, dedupeCards } from '../lib/quiz'
import { updateCardRating } from '../lib/storage'
import { CardFlip } from './CardFlip'

interface StudySessionProps {
  cards: Card[]
  domains: DomainInfo[]
  domain: string | 'all'
  progress: CertProgress
  onProgressChange: (p: CertProgress | ((prev: CertProgress) => CertProgress)) => void
  onBack: () => void
  weakOnly?: boolean
}

export function StudySession({
  cards: allCards,
  domains,
  domain,
  progress,
  onProgressChange,
  onBack,
  weakOnly = false,
}: StudySessionProps) {
  const [deck, setDeck] = useState<Card[]>([])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const progressRef = useRef(progress)
  progressRef.current = progress

  useEffect(() => {
    const seed = Date.now()
    const filtered = filterCards(
      allCards,
      domain,
      weakOnly,
      progressRef.current.cards,
    )
    const pool = dedupeCards(filtered.length ? filtered : allCards)
    setDeck(shuffle(pool).map((c) => shuffleCardOptions(c, seed)))
    setIndex(0)
    setFlipped(false)
  }, [allCards, domain, weakOnly])

  const card = deck[index]
  const domainLabel =
    domain === 'all'
      ? 'All domains'
      : domains.find((d) => d.id === domain)?.name ?? domain
  const scopeCounts = countRatings(cardsInScope(allCards, domain), progress)

  const rate = useCallback(
    (rating: CardRating) => {
      if (!card) return
      onProgressChange((prev) => updateCardRating(prev, card.id, rating))
      setFlipped(false)
      if (index < deck.length - 1) setIndex((i) => i + 1)
    },
    [card, progress, onProgressChange, index, deck.length],
  )

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        setFlipped(false)
        setIndex((i) => Math.max(0, i - 1))
      }
      if (e.key === 'ArrowRight') {
        setFlipped(false)
        setIndex((i) => Math.min(deck.length - 1, i + 1))
      }
      if (e.key === '1') rate('unknown')
      if (e.key === '2') rate('learning')
      if (e.key === '3') rate('known')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [deck.length, rate])

  if (!card) {
    return (
      <div>
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>
        <p style={{ marginTop: '2rem', textAlign: 'center' }}>
          No cards match your filters.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="header">
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>
        <div>
          <h1>Study Mode</h1>
          <span className="header-sub">{domainLabel}</span>
          <span className="header-sub rating-breakdown">{formatRatingBreakdown(scopeCounts)}</span>
        </div>
        <span className="counter">
          {index + 1} / {deck.length}
        </span>
      </div>

      <CardFlip
        card={card}
        flipped={flipped}
        onFlip={() => setFlipped((f) => !f)}
      />

      <div className="study-controls">
        <button
          className="btn-secondary"
          onClick={() => {
            setFlipped(false)
            setIndex((i) => Math.max(0, i - 1))
          }}
          disabled={index === 0}
        >
          ← Prev
        </button>
        <div className="rating-buttons">
          <button className="btn-danger" onClick={() => rate('unknown')}>
            Don't know
          </button>
          <button className="btn-warning" onClick={() => rate('learning')}>
            Learning
          </button>
          <button className="btn-success" onClick={() => rate('known')}>
            Know it
          </button>
        </div>
        <button
          className="btn-secondary"
          onClick={() => {
            setFlipped(false)
            setIndex((i) => Math.min(deck.length - 1, i + 1))
          }}
          disabled={index === deck.length - 1}
        >
          Next →
        </button>
      </div>

      <p className="hint-text keyboard-hint">
        <kbd>Space</kbd> flip · <kbd>←</kbd><kbd>→</kbd> navigate ·{' '}
        <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd> rate
      </p>
    </div>
  )
}
