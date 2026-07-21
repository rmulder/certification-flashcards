import type { CertificationConfig } from '../certifications/types'
import type { CertProgress, View } from '../core/types'
import { RatingCountStats } from '../core/components/RatingCountStats'
import { countRatings } from '../core/lib/progress-stats'

interface CertHomeProps {
  config: CertificationConfig
  progress: CertProgress
  onNavigate: (view: View, domain?: string | 'all', weakOnly?: boolean) => void
  onReset: () => void
  onBack: () => void
}

const LEVEL_LABEL: Record<string, string> = {
  foundational: 'Foundational',
  associate: 'Associate',
  professional: 'Professional',
  specialty: 'Specialty',
}

export function CertHome({
  config,
  progress,
  onNavigate,
  onReset,
  onBack,
}: CertHomeProps) {
  const { cards, domains, mockExam } = config

  const ratingCounts = countRatings(cards, progress)

  return (
    <div>
      <div className="header">
        <button className="btn-back" onClick={onBack}>
          ← All certifications
        </button>
        <div>
          <h1>{config.code}</h1>
          <span className="header-sub">{config.name}</span>
        </div>
        <span className="tag tag-domain">{LEVEL_LABEL[config.level]}</span>
      </div>

      {config.retired && (
        <div className="retired-notice" role="status">
          {config.retiredNotice ??
            'This exam was retired. All study modes remain available for review.'}
        </div>
      )}

      <div className="stats-grid">
        <RatingCountStats
          counts={ratingCounts}
          showTotal
          mockExamsTaken={progress.mockExamsTaken}
        />
      </div>
      <p className="readiness-summary" role="status">
        {ratingCounts.toReview === 0 ? (
          <>
            All {config.code} cards are <strong>Known</strong> — use mock exams for final exam
            readiness checks.
          </>
        ) : (
          <>
            <strong>{ratingCounts.toReview}</strong> of {ratingCounts.total} {config.code} cards
            left before everything is Known ({ratingCounts.unknown} not reviewed,{' '}
            {ratingCounts.learning} learning).
          </>
        )}
      </p>

      <div className="action-row">
        <button className="btn-primary" onClick={() => onNavigate('mock-exam', 'all', false)}>
          Start Mock Exam ({mockExam.questionCount} questions)
        </button>
        <button
          className="btn-secondary"
          onClick={() => onNavigate('quiz', 'all', false)}
        >
          Quick Quiz
        </button>
        <button className="btn-secondary" onClick={() => onNavigate('study', 'all', false)}>
          Study All Cards
        </button>
        <button className="btn-secondary" onClick={() => onNavigate('progress')}>
          View Progress
        </button>
      </div>

      <h2 className="section-title">Study by Domain</h2>
      <div className="card-grid">
        {domains.map((domain) => {
          const domainCards = cards.filter((c) => c.domain === domain.id)
          const domainCounts = countRatings(domainCards, progress)
          const pct = domainCards.length
            ? Math.round((domainCounts.known / domainCards.length) * 100)
            : 0

          return (
            <div
              key={domain.id}
              className="domain-card"
              onClick={() => onNavigate('study', domain.id, false)}
            >
              <h3>{domain.name}</h3>
              <p>{domain.description}</p>
              <p className="progress-label">
                {domain.weight}% of exam · {domainCards.length} cards
              </p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <p className="progress-label">
                {pct}% known · {domainCounts.unknown} not reviewed · {domainCounts.learning}{' '}
                learning
              </p>
            </div>
          )
        })}
      </div>

      <div className="action-row">
        <button
          className="btn-secondary"
          onClick={() => onNavigate('quiz', 'all', true)}
        >
          Quiz weak cards only ({ratingCounts.toReview})
        </button>
        <button
          className="btn-back"
          onClick={() => {
            if (confirm('Reset progress for this certification? This cannot be undone.')) {
              onReset()
            }
          }}
        >
          Reset progress
        </button>
      </div>
    </div>
  )
}
