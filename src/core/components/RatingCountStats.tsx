import type { RatingCounts } from '../lib/progress-stats'

interface RatingCountStatsProps {
  counts: RatingCounts
  /** Include total card count as first stat (cert home). */
  showTotal?: boolean
  mockExamsTaken?: number
  lastMockScore?: number | null
}

export function RatingCountStats({
  counts,
  showTotal = false,
  mockExamsTaken,
  lastMockScore,
}: RatingCountStatsProps) {
  return (
    <>
      {showTotal && (
        <div className="stat-card">
          <div className="stat-value">{counts.total}</div>
          <div className="stat-label">Total cards</div>
        </div>
      )}
      <div className="stat-card">
        <div className="stat-value" style={{ color: 'var(--danger)' }}>
          {counts.unknown}
        </div>
        <div className="stat-label">Not reviewed</div>
      </div>
      <div className="stat-card">
        <div className="stat-value" style={{ color: 'var(--warning)' }}>
          {counts.learning}
        </div>
        <div className="stat-label">Learning</div>
      </div>
      <div className="stat-card">
        <div className="stat-value" style={{ color: 'var(--success)' }}>
          {counts.known}
        </div>
        <div className="stat-label">Known</div>
      </div>
      {mockExamsTaken !== undefined && (
        <div className="stat-card">
          <div className="stat-value">{mockExamsTaken}</div>
          <div className="stat-label">Mock exams</div>
        </div>
      )}
      {lastMockScore != null && (
        <div className="stat-card">
          <div className="stat-value">{lastMockScore}%</div>
          <div className="stat-label">Last mock score</div>
        </div>
      )}
    </>
  )
}
