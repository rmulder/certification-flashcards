import type { CertificationConfig } from '../certifications/types'
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
  cert: CertificationConfig
  onSelect: () => void
}) {
  const progress = loadCertProgress(cert.id)
  const cardCount = cert.cards.length

  return (
    <div
      className={`domain-card ${cert.available ? '' : 'cert-unavailable'}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (cert.available && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onSelect()
        }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
        <h3>{cert.code}</h3>
        <span className="tag">{LEVEL_LABEL[cert.level]}</span>
      </div>
      <p>{cert.name}</p>
      <p className="progress-label" style={{ marginTop: '0.5rem' }}>
        {cert.available
          ? `${cardCount} cards · ${progress.mockExamsTaken} mock exams taken`
          : 'Coming soon'}
      </p>
      {!cert.available && (
        <p className="hint-text" style={{ marginTop: '0.5rem', textAlign: 'left' }}>
          Content is being added
        </p>
      )}
    </div>
  )
}
