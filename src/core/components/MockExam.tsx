import { useRef, useState } from 'react'
import type { Card, CertProgress, DomainInfo, MockExamSettings, QuizResult } from '../types'
import {
  buildMockExam,
  buildQuizResult,
  isAnswerCorrect,
  shuffleCardOptions,
} from '../lib/quiz'
import { recordMockExam, recordQuizAnswer } from '../lib/storage'
import { McqQuestion } from './McqQuestion'
import { Results } from './Results'

interface MockExamProps {
  cards: Card[]
  domains: DomainInfo[]
  mockExam: MockExamSettings
  progress: CertProgress
  onProgressChange: (p: CertProgress) => void
  onBack: () => void
}

export function MockExam({
  cards,
  domains,
  mockExam,
  progress,
  onProgressChange,
  onBack,
}: MockExamProps) {
  const [deck, setDeck] = useState<Card[]>([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Map<string, number[]>>(new Map())
  const [selected, setSelected] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)
  const [started, setStarted] = useState(false)
  const progressRef = useRef(progress)
  const answersRef = useRef(answers)
  progressRef.current = progress
  answersRef.current = answers

  function startExam() {
    const seed = Date.now()
    const built = buildMockExam(cards, domains, mockExam).map((c) =>
      shuffleCardOptions(c, seed),
    )
    setDeck(built)
    setIndex(0)
    const empty = new Map<string, number[]>()
    answersRef.current = empty
    setAnswers(empty)
    setSelected([])
    setShowResult(false)
    setFinished(false)
    setResult(null)
    setStarted(true)
  }

  const card = deck[index]
  const isMulti = card ? card.correctAnswers.length > 1 : false

  function checkAnswer() {
    if (!card || selected.length === 0 || showResult) return

    const chosen = [...selected]
    const next = new Map(answersRef.current)
    next.set(card.id, chosen)
    answersRef.current = next
    setAnswers(next)

    const correct = isAnswerCorrect(card, chosen)
    onProgressChange(
      recordQuizAnswer(progressRef.current, card.id, correct),
    )
    setShowResult(true)
  }

  function toggleSelect(optionIndex: number) {
    if (!card || finished || showResult) return

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
    const next = new Map(answersRef.current)
    next.set(card.id, chosen)
    answersRef.current = next
    setAnswers(next)

    const correct = isAnswerCorrect(card, chosen)
    onProgressChange(
      recordQuizAnswer(progressRef.current, card.id, correct),
    )
    setShowResult(true)
  }

  function advanceQuestion() {
    if (!card || !showResult) return

    if (index < deck.length - 1) {
      setIndex((i) => i + 1)
      setSelected([])
      setShowResult(false)
      return
    }

    const quizResult = buildQuizResult(deck, answersRef.current, domains)
    const pct = Math.round((quizResult.score / quizResult.total) * 100)
    onProgressChange(recordMockExam(progressRef.current, pct))
    setResult(quizResult)
    setFinished(true)
  }

  if (!started) {
    return (
      <div>
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>
        <div className="results-panel" style={{ marginTop: '2rem' }}>
          <h2>Mock Exam</h2>
          <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>
            {mockExam.questionCount} questions weighted by official domain
            percentages.
            <br />
            Pass threshold: {mockExam.passPercent}%
          </p>
          <ul
            style={{
              textAlign: 'left',
              color: 'var(--text-muted)',
              margin: '1rem auto',
              maxWidth: 400,
            }}
          >
            {domains.map((d) => (
              <li key={d.id}>
                {d.name} — {d.weight}%
              </li>
            ))}
          </ul>
          <button className="btn-primary" onClick={startExam}>
            Begin Exam
          </button>
        </div>
      </div>
    )
  }

  if (finished && result) {
    return (
      <Results
        result={result}
        cards={deck}
        domains={domains}
        passPercent={mockExam.passPercent}
        isMockExam
        onBack={onBack}
        onRetry={startExam}
      />
    )
  }

  if (!card) return null

  return (
    <div>
      <div className="header">
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>
        <div>
          <h1>Mock Exam</h1>
          <span className="header-sub">Practice exam</span>
        </div>
        <span className="quiz-progress">
          {index + 1} / {deck.length}
        </span>
      </div>

      <div className="progress-bar" style={{ marginBottom: '1.5rem' }}>
        <div
          className="progress-fill"
          style={{ width: `${(index / deck.length) * 100}%` }}
        />
      </div>

      <div className="study-card quiz-card" style={{ cursor: 'default' }}>
        <McqQuestion
          card={card}
          selected={selected}
          onSelect={toggleSelect}
          showResult={showResult}
        />
      </div>

      <div className="study-controls">
        {showResult ? (
          <button className="btn-primary" onClick={advanceQuestion}>
            {index < deck.length - 1 ? 'Next Question →' : 'View Results'}
          </button>
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
