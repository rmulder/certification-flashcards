import type { Card, DomainInfo, QuizResult } from '../types'
import { formatAnswer } from '../lib/quiz'

interface ResultsProps {
  result: QuizResult
  cards: Card[]
  domains: DomainInfo[]
  passPercent: number
  isMockExam?: boolean
  onBack: () => void
  onRetry?: () => void
}

export function Results({
  result,
  cards,
  domains,
  passPercent,
  isMockExam,
  onBack,
  onRetry,
}: ResultsProps) {
  const pct = Math.round((result.score / result.total) * 100)
  const passed = pct >= passPercent

  const cardMap = new Map(cards.map((c) => [c.id, c]))
  const wrongAnswers = result.answers.filter((a) => !a.correct)

  return (
    <div>
      <div className="header">
        <button className="btn-back" onClick={onBack}>
          ← Home
        </button>
        <h1>{isMockExam ? 'Mock Exam Results' : 'Quiz Results'}</h1>
        <span />
      </div>

      <div className="results-panel">
        <p>{isMockExam ? 'Your mock exam score' : 'Your quiz score'}</p>
        <div className={`score-circle ${passed ? 'score-pass' : 'score-fail'}`}>
          {pct}%
        </div>
        <p>
          {result.score} / {result.total} correct
        </p>
        {isMockExam ? (
          <p style={{ marginTop: '0.5rem', color: passed ? 'var(--success)' : 'var(--danger)' }}>
            {passed
              ? `PASS — You met the ${passPercent}% threshold!`
              : `FAIL — Need ${passPercent}% to pass`}
          </p>
        ) : (
          <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            {pct >= 90
              ? 'Excellent work!'
              : pct >= 70
                ? 'Good job — keep studying weak areas.'
                : 'Review the incorrect answers below and try again.'}
          </p>
        )}
      </div>

      <h2 className="section-title">Performance by Domain</h2>
      <div className="domain-results">
        {domains.map((domain) => {
          const stats = result.byDomain[domain.id]
          if (!stats || stats.total === 0) return null
          const domainPct = Math.round((stats.correct / stats.total) * 100)
          return (
            <div key={domain.id} className="domain-result-row">
              <span>
                {domain.name} ({domain.weight}%)
              </span>
              <span>
                {stats.correct}/{stats.total} — {domainPct}%
              </span>
            </div>
          )
        })}
      </div>

      {wrongAnswers.length > 0 && (
        <>
          <h2 className="section-title" style={{ marginTop: '2rem' }}>
            Review Incorrect ({wrongAnswers.length})
          </h2>
          <div className="review-list">
            {wrongAnswers.map((answer) => {
              const card = cardMap.get(answer.cardId)
              if (!card) return null
              return (
                <div key={answer.cardId} className="review-item incorrect">
                  <p className="card-question">{card.question}</p>
                  <p className="card-answer">Correct: {formatAnswer(card)}</p>
                  <p className="card-explanation">{card.explanation}</p>
                </div>
              )
            })}
          </div>
        </>
      )}

      <div className="action-row" style={{ marginTop: '2rem' }}>
        {onRetry && (
          <button className="btn-primary" onClick={onRetry}>
            Try Again
          </button>
        )}
        <button className="btn-secondary" onClick={onBack}>
          Back to Home
        </button>
      </div>
    </div>
  )
}
