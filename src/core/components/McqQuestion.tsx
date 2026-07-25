import type { Card } from '../types'
import { isAnswerCorrect } from '../lib/quiz'
import { formatOptionLabel } from '../lib/option-label'

interface McqQuestionProps {
  card: Card
  selected: number[]
  onSelect: (index: number) => void
  showResult?: boolean
  disabled?: boolean
}

export function McqQuestion({
  card,
  selected,
  onSelect,
  showResult = false,
  disabled = false,
}: McqQuestionProps) {
  const isMulti = card.correctAnswers.length > 1
  const isCorrect = showResult && isAnswerCorrect(card, selected)

  function optionClass(index: number): string {
    const classes = ['mcq-option']

    if (!showResult) {
      if (selected.includes(index)) classes.push('selected')
      return classes.join(' ')
    }

    if (card.correctAnswers.includes(index)) classes.push('correct')
    if (selected.includes(index) && !card.correctAnswers.includes(index)) {
      classes.push('incorrect')
    }

    return classes.join(' ')
  }

  return (
    <div>
      {showResult && (
        <div className={`feedback-banner ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
          {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
        </div>
      )}

      <p className="card-question">{card.question}</p>
      {isMulti && !showResult && (
        <p className="multi-hint">Select TWO correct answers, then click Check Answer</p>
      )}
      <div className="mcq-options">
        {card.options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={optionClass(index)}
            onClick={() => onSelect(index)}
            disabled={disabled || showResult}
          >
            <span className="option-letter">{formatOptionLabel(index)}</span>
            <span>{option}</span>
          </button>
        ))}
      </div>
      {showResult && (
        <div className="feedback-explanation">
          <p className="card-answer">
            Correct answer:{' '}
            {card.correctAnswers.map((i) => card.options[i]).join(', ')}
          </p>
          <p className="card-explanation">{card.explanation}</p>
        </div>
      )}
    </div>
  )
}
