import type { Card } from '../types'
import { formatOptionLabel } from '../lib/option-label'

interface CardFlipProps {
  card: Card
  flipped: boolean
  onFlip: () => void
  domainName?: string
}

export function CardFlip({ card, flipped, onFlip, domainName }: CardFlipProps) {
  return (
    <div
      className={`study-card ${flipped ? 'flipped' : ''}`}
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault()
          onFlip()
        }
      }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-meta">
            {domainName && <span className="tag tag-domain">{domainName}</span>}
            <span className="tag">Task {card.task}</span>
            {card.tags.slice(0, 2).map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <p className="card-question">{card.question}</p>
          <div className="study-options">
            {card.options.map((option, i) => (
              <div key={i} className="study-option">
                <span className="option-letter">{formatOptionLabel(i)}</span>
                <span>{option}</span>
              </div>
            ))}
          </div>
          <p className="hint-text">Pick your answer, then click or press Space to reveal</p>
        </div>
        <div className="card-back">
          <div className="study-options">
            {card.options.map((option, i) => {
              const isCorrect = card.correctAnswers.includes(i)
              return (
                <div
                  key={i}
                  className={`study-option ${isCorrect ? 'study-option-correct' : ''}`}
                >
                  <span className="option-letter">{formatOptionLabel(i)}</span>
                  <span>{option}</span>
                </div>
              )
            })}
          </div>
          <p className="card-explanation">{card.explanation}</p>
        </div>
      </div>
    </div>
  )
}
