import { useCallback, useEffect, useState } from 'react'
import type { CertProgress, View } from './core/types'
import type { CertificationConfig } from './certifications/types'
import {
  loadCertProgress,
  resetCertProgress,
  saveCertProgress,
} from './core/lib/storage'
import { getCertification, getLoadedCertification, loadCertification } from './certifications/registry'
import { CatalogHome } from './pages/CatalogHome'
import { CertHome } from './pages/CertHome'
import { StudySession } from './core/components/StudySession'
import { QuizSession } from './core/components/QuizSession'
import { MockExam } from './core/components/MockExam'
import { ProgressDashboard } from './core/components/ProgressDashboard'

function App() {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null)
  const [config, setConfig] = useState<CertificationConfig | undefined>()
  const [loadingCert, setLoadingCert] = useState(false)
  const [view, setView] = useState<View>('catalog')
  const [domain, setDomain] = useState<string | 'all'>('all')
  const [weakOnly, setWeakOnly] = useState(false)
  const [progress, setProgress] = useState<CertProgress>(() =>
    selectedCertId ? loadCertProgress(selectedCertId) : loadCertProgress('clf-c02'),
  )

  useEffect(() => {
    if (!selectedCertId || view === 'catalog') {
      setConfig(undefined)
      setLoadingCert(false)
      return
    }

    const cached = getLoadedCertification(selectedCertId)
    if (cached) {
      setConfig(cached)
      setLoadingCert(false)
      return
    }

    let cancelled = false
    setLoadingCert(true)

    loadCertification(selectedCertId).then((loaded) => {
      if (!cancelled) {
        setConfig(loaded)
        setLoadingCert(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [selectedCertId, view])

  const updateProgress = useCallback(
    (next: CertProgress | ((prev: CertProgress) => CertProgress)) => {
      if (!selectedCertId) return
      setProgress((prev) => {
        const resolved = typeof next === 'function' ? next(prev) : next
        saveCertProgress(selectedCertId, resolved)
        return resolved
      })
    },
    [selectedCertId],
  )

  const selectCert = useCallback((certId: string) => {
    const cert = getCertification(certId)
    if (!cert?.available) return
    setSelectedCertId(certId)
    setProgress(loadCertProgress(certId))
    setView('cert-home')
    setDomain('all')
    setWeakOnly(false)
  }, [])

  const navigate = useCallback(
    (nextView: View, nextDomain?: string | 'all', weak?: boolean) => {
      if (nextDomain) setDomain(nextDomain)
      if (weak !== undefined) setWeakOnly(weak)
      setView(nextView)
    },
    [],
  )

  const goCertHome = useCallback(() => {
    setView('cert-home')
    setWeakOnly(false)
  }, [])

  const goCatalog = useCallback(() => {
    setView('catalog')
    setSelectedCertId(null)
    setWeakOnly(false)
  }, [])

  const handleReset = useCallback(() => {
    if (!selectedCertId) return
    resetCertProgress(selectedCertId)
    setProgress(loadCertProgress(selectedCertId))
  }, [selectedCertId])

  if (view === 'catalog') {
    return (
      <div className="app">
        <CatalogHome onSelectCert={selectCert} />
      </div>
    )
  }

  if (!selectedCertId) {
    return (
      <div className="app">
        <CatalogHome onSelectCert={selectCert} />
      </div>
    )
  }

  if (loadingCert || !config) {
    const meta = getCertification(selectedCertId)
    return (
      <div className="app">
        <div className="header">
          <div>
            <h1>{meta?.code ?? 'Loading…'}</h1>
            <span className="header-sub">Loading flashcards…</span>
          </div>
          <button type="button" className="btn btn-secondary" onClick={goCatalog}>
            Back to catalog
          </button>
        </div>
      </div>
    )
  }

  const { cards, domains, mockExam } = config

  return (
    <div className="app">
      {view === 'cert-home' && (
        <CertHome
          config={config}
          progress={progress}
          onNavigate={navigate}
          onReset={handleReset}
          onBack={goCatalog}
        />
      )}

      {view === 'study' && (
        <StudySession
          cards={cards}
          domains={domains}
          domain={domain}
          progress={progress}
          onProgressChange={updateProgress}
          onBack={goCertHome}
        />
      )}

      {view === 'quiz' && (
        <QuizSession
          cards={cards}
          domains={domains}
          domain={domain}
          progress={progress}
          onProgressChange={updateProgress}
          onBack={goCertHome}
          weakOnly={weakOnly}
          mockExam={mockExam}
        />
      )}

      {view === 'mock-exam' && (
        <MockExam
          certCode={config.code}
          cards={cards}
          domains={domains}
          mockExam={mockExam}
          progress={progress}
          onProgressChange={updateProgress}
          onBack={goCertHome}
        />
      )}

      {view === 'progress' && (
        <ProgressDashboard
          certCode={config.code}
          certName={config.name}
          cards={cards}
          domains={domains}
          progress={progress}
          onBack={goCertHome}
        />
      )}
    </div>
  )
}

export default App
