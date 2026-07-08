import type { Card, CertProgress, DomainInfo } from '../types'
import { getCardProgress } from '../lib/storage'

interface ProgressDashboardProps {
  cards: Card[]
  domains: DomainInfo[]
  progress: CertProgress
  onBack: () => void
}

export function ProgressDashboard({
  cards,
  domains,
  progress,
  onBack,
}: ProgressDashboardProps) {
  const ratings = { unknown: 0, learning: 0, known: 0 }
  for (const card of cards) {
    const r = getCardProgress(progress, card.id).rating
    ratings[r]++
  }

  return (
    <div>
      <div className="header">
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>
        <h1>Progress</h1>
        <span />
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--danger)' }}>
            {ratings.unknown}
          </div>
          <div className="stat-label">Not reviewed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--warning)' }}>
            {ratings.learning}
          </div>
          <div className="stat-label">Learning</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--success)' }}>
            {ratings.known}
          </div>
          <div className="stat-label">Known</div>
        </div>
        {progress.lastMockScore !== null && (
          <div className="stat-card">
            <div className="stat-value">{progress.lastMockScore}%</div>
            <div className="stat-label">Last mock score</div>
          </div>
        )}
      </div>

      <h2 className="section-title">By Domain</h2>
      <div className="domain-results">
        {domains.map((domain) => {
          const domainCards = cards.filter((c) => c.domain === domain.id)
          const known = domainCards.filter(
            (c) => getCardProgress(progress, c.id).rating === 'known',
          ).length
          const learning = domainCards.filter(
            (c) => getCardProgress(progress, c.id).rating === 'learning',
          ).length
          const pct = domainCards.length
            ? Math.round((known / domainCards.length) * 100)
            : 0

          return (
            <div key={domain.id} className="domain-result-row">
              <div>
                <strong>{domain.name}</strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {known} known · {learning} learning · {domainCards.length} total
                </p>
              </div>
              <span>{pct}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
