import type { CertificationMeta } from '../certifications/types'
import { CERTIFICATIONS, VENDORS } from '../certifications/registry'
import { loadCertProgress } from '../core/lib/storage'

interface CatalogHomeProps {
  onSelectCert: (certId: string) => void
}

const LEVEL_LABEL: Record<string, string> = {
  foundational: 'Foundational',
  associate: 'Associate',
  professional: 'Professional',
  specialty: 'Specialty',
}

export function CatalogHome({ onSelectCert }: CatalogHomeProps) {
  return (
    <div>
      <div className="header" style={{ borderBottom: 'none', marginBottom: '1.5rem' }}>
        <div>
          <h1>Certification Flashcards</h1>
          <span className="header-sub">
            Local exam prep — study, quiz, and mock exams
          </span>
        </div>
      </div>

      {VENDORS.map((vendor) => {
        const certs = CERTIFICATIONS.filter((c) => c.vendor === vendor)
        return (
          <section key={vendor} style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">{vendor}</h2>
            <div className="card-grid">
              {certs.map((cert) => (
                <CertCard
                  key={cert.id}
                  cert={cert}
                  onSelect={() => cert.available && onSelectCert(cert.id)}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

function CertCard({
  cert,
  onSelect,
}: {
  cert: CertificationMeta
  onSelect: () => void
}) {
  const progress = loadCertProgress(cert.id)
  const cardCount = cert.cardCount
  const isClickable = cert.available

  return (
    <div
      className={`domain-card ${isClickable ? '' : 'cert-unavailable'}${cert.retired ? ' cert-retired' : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onSelect()
        }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
        <h3>{cert.code}</h3>
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {cert.retired && <span className="tag tag-retired">Retired</span>}
          <span className="tag">{LEVEL_LABEL[cert.level]}</span>
        </div>
      </div>
      <p>{cert.name}</p>
      <p className="progress-label" style={{ marginTop: '0.5rem' }}>
        {cert.available
          ? `${cardCount} cards · ${progress.mockExamsTaken} mock exams taken`
          : 'Coming soon'}
      </p>
      {cert.studyTrack && (
        <p className="hint-text" style={{ marginTop: '0.5rem', textAlign: 'left' }}>
          Self-paced study track — no official proctored exam
        </p>
      )}
      {cert.retired && (
        <p className="hint-text" style={{ marginTop: '0.5rem', textAlign: 'left' }}>
          Retired exam — content available for review
        </p>
      )}
      {!cert.available && !cert.retired && (
        <p className="hint-text" style={{ marginTop: '0.5rem', textAlign: 'left' }}>
          Content is being added
        </p>
      )}
    </div>
  )
}
