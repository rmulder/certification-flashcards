import { useCallback, useEffect, useRef, useState } from 'react'
import type { Card, CertProgress, QuizResult } from '../types'
import { cardsInScope, countRatings, formatRatingBreakdown } from '../lib/progress-stats'
import {
  buildQuizDeck,
  buildQuizResult,
  dedupeCards,
  filterCards,
  isAnswerCorrect,
  shuffleCardOptions,
} from '../lib/quiz'
import { recordQuizAnswer } from '../lib/storage'
import { McqQuestion } from './McqQuestion'
import { Results } from './Results'
import type { DomainInfo, MockExamSettings } from '../types'

interface QuizSessionProps {
  cards: Card[]
  domains: DomainInfo[]
  domain: string | 'all'
  progress: CertProgress
  onProgressChange: (p: CertProgress | ((prev: CertProgress) => CertProgress)) => void
  onBack: () => void
  questionCount?: number
  weakOnly?: boolean
  mockExam: MockExamSettings
}

export function QuizSession({
  cards: allCards,
  domains,
  domain,
  progress,
  onProgressChange,
  onBack,
  questionCount = 20,
  weakOnly = false,
  mockExam,
}: QuizSessionProps) {
  const [deck, setDeck] = useState<Card[]>([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Map<string, number[]>>(new Map())
  const [selected, setSelected] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)
  const progressRef = useRef(progress)
  const answersRef = useRef(answers)
  progressRef.current = progress
  answersRef.current = answers

  function initQuiz() {
    const seed = Date.now()
    const filtered = filterCards(
      allCards,
      domain,
      weakOnly,
      progressRef.current.cards,
    )
    const pool = filtered.length ? filtered : dedupeCards(allCards)
    const chosen = buildQuizDeck(pool, questionCount).map((c) =>
      shuffleCardOptions(c, seed),
    )
    setDeck(chosen)
    setIndex(0)
    const empty = new Map<string, number[]>()
    answersRef.current = empty
    setAnswers(empty)
    setSelected([])
    setShowResult(false)
    setFinished(false)
    setResult(null)
  }

  useEffect(() => {
    if (allCards.length === 0) return
    initQuiz()
    // Re-build deck when filters or deck size change — not on every `allCards` reference change
  }, [domain, weakOnly, questionCount, allCards.length])

  useEffect(() => {
    progressRef.current = progress
  }, [progress])

  const card = deck[index]
  const isMulti = card ? card.correctAnswers.length > 1 : false
  const scopeCounts = countRatings(cardsInScope(allCards, domain), progress)
  const weakCounts = countRatings(
    filterCards(allCards, domain, true, progress.cards),
    progress,
  )

  function recordAnswer(chosen: number[]) {
    if (!card) return

    const next = new Map(answersRef.current)
    next.set(card.id, chosen)
    answersRef.current = next
    setAnswers(next)

    const correct = isAnswerCorrect(card, chosen)
    onProgressChange((prev) => recordQuizAnswer(prev, card.id, correct))
    setShowResult(true)
  }

  function checkAnswer() {
    if (!card || selected.length === 0 || showResult) return
    recordAnswer([...selected])
  }

  function toggleSelect(optionIndex: number) {
    if (!card || showResult) return

    if (isMulti) {
      setSelected((prev) =>
        prev.includes(optionIndex)
          ? prev.filter((i) => i !== optionIndex)
          : [...prev, optionIndex],
      )
      return
    }

    const chosen = [optionIndex]
    setSelected(chosen)
    recordAnswer(chosen)
  }

  const advanceQuestion = useCallback(() => {
    if (!showResult) return
    const current = deck[index]
    if (!current) return

    if (index < deck.length - 1) {
      setIndex((i) => i + 1)
      setSelected([])
      setShowResult(false)
      return
    }

    const quizResult = buildQuizResult(deck, answersRef.current, domains)
    setResult(quizResult)
    setFinished(true)
  }, [deck, domains, index, showResult])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== 'Enter' || !showResult || finished) return
      e.preventDefault()
      advanceQuestion()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [advanceQuestion, showResult, finished])

  if (finished && result) {
    return (
      <Results
        result={result}
        cards={deck}
        domains={domains}
        passPercent={mockExam.passPercent}
        onBack={onBack}
        onRetry={initQuiz}
      />
    )
  }

  if (!card) {
    return (
      <div>
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>
        <p style={{ marginTop: '2rem', textAlign: 'center' }}>No cards available.</p>
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
          <h1>Quiz Mode</h1>
          <span className="header-sub">
            {weakOnly
              ? `Weak cards · ${weakCounts.unknown} not reviewed · ${weakCounts.learning} learning`
              : formatRatingBreakdown(scopeCounts)}
          </span>
          <span className="header-sub rating-breakdown">{answers.size} answered</span>
        </div>
        <span className="quiz-progress">
          {index + 1} / {deck.length}
        </span>
      </div>

      <div className="study-card quiz-card" style={{ cursor: 'default' }} key={card.id}>
        <McqQuestion
          card={card}
          selected={selected}
          onSelect={toggleSelect}
          showResult={showResult}
        />
      </div>

      <div className="study-controls">
        {showResult ? (
          <>
            <button type="button" className="btn-primary" onClick={advanceQuestion}>
              {index < deck.length - 1 ? 'Next Question →' : 'View Results'}
            </button>
            <p className="hint-text keyboard-hint">
              <kbd>Enter</kbd> to continue
            </p>
          </>
        ) : isMulti ? (
          <button
            className="btn-primary"
            onClick={checkAnswer}
            disabled={selected.length === 0}
          >
            Check Answer
          </button>
        ) : (
          <p className="hint-text">Select an answer to see feedback</p>
        )}
      </div>
    </div>
  )
}
