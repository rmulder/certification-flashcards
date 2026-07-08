import type { CertificationConfig } from '../certifications/types'
import type { CertProgress, View } from '../core/types'
import { getCardProgress } from '../core/lib/storage'

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

  const knownCount = cards.filter(
    (c) => getCardProgress(progress, c.id).rating === 'known',
  ).length
  const weakCount = cards.filter((c) => {
    const r = getCardProgress(progress, c.id).rating
    return r === 'unknown' || r === 'learning'
  }).length

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

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{cards.length}</div>
          <div className="stat-label">Total cards</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{knownCount}</div>
          <div className="stat-label">Known</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{weakCount}</div>
          <div className="stat-label">To review</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{progress.mockExamsTaken}</div>
          <div className="stat-label">Mock exams</div>
        </div>
      </div>

      <div className="action-row">
        <button className="btn-primary" onClick={() => onNavigate('mock-exam')}>
          Start Mock Exam ({mockExam.questionCount} questions)
        </button>
        <button
          className="btn-secondary"
          onClick={() => onNavigate('quiz', 'all', false)}
        >
          Quick Quiz
        </button>
        <button className="btn-secondary" onClick={() => onNavigate('study', 'all')}>
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
          const known = domainCards.filter(
            (c) => getCardProgress(progress, c.id).rating === 'known',
          ).length
          const pct = domainCards.length
            ? Math.round((known / domainCards.length) * 100)
            : 0

          return (
            <div
              key={domain.id}
              className="domain-card"
              onClick={() => onNavigate('study', domain.id)}
            >
              <h3>{domain.name}</h3>
              <p>{domain.description}</p>
              <p className="progress-label">
                {domain.weight}% of exam · {domainCards.length} cards
              </p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <p className="progress-label">{pct}% known</p>
            </div>
          )
        })}
      </div>

      <div className="action-row">
        <button
          className="btn-secondary"
          onClick={() => onNavigate('quiz', 'all', true)}
        >
          Quiz weak cards only
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
