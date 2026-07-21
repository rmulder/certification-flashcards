import type { Card, CertProgress, DomainInfo } from '../types'
import { countRatings } from '../lib/progress-stats'
import { RatingCountStats } from './RatingCountStats'

interface ProgressDashboardProps {
  certCode: string
  certName: string
  cards: Card[]
  domains: DomainInfo[]
  progress: CertProgress
  onBack: () => void
}

export function ProgressDashboard({
  certCode,
  certName,
  cards,
  domains,
  progress,
  onBack,
}: ProgressDashboardProps) {
  const ratingCounts = countRatings(cards, progress)

  return (
    <div>
      <div className="header">
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>
        <div>
          <h1>Progress</h1>
          <span className="header-sub">
            {certCode} · {certName}
          </span>
        </div>
        <span />
      </div>

      <div className="stats-grid">
        <RatingCountStats
          counts={ratingCounts}
          lastMockScore={progress.lastMockScore ?? undefined}
        />
      </div>
      <p className="readiness-summary" role="status">
        {ratingCounts.toReview === 0 ? (
          <>All cards marked Known.</>
        ) : (
          <>
            {ratingCounts.toReview} cards still to master ({ratingCounts.unknown} not reviewed,{' '}
            {ratingCounts.learning} learning).
          </>
        )}
      </p>

      <h2 className="section-title">By Domain</h2>
      <div className="domain-results">
        {domains.map((domain) => {
          const domainCards = cards.filter((c) => c.domain === domain.id)
          const domainCounts = countRatings(domainCards, progress)
          const pct = domainCards.length
            ? Math.round((domainCounts.known / domainCards.length) * 100)
            : 0

          return (
            <div key={domain.id} className="domain-result-row">
              <div>
                <strong>{domain.name}</strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {domainCounts.unknown} not reviewed · {domainCounts.learning} learning ·{' '}
                  {domainCounts.known} known · {domainCounts.total} total
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
