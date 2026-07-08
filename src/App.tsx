import { useCallback, useState } from 'react'
import type { CertProgress, View } from './core/types'
import {
  loadCertProgress,
  resetCertProgress,
  saveCertProgress,
} from './core/lib/storage'
import { getCertification } from './certifications/registry'
import { CatalogHome } from './pages/CatalogHome'
import { CertHome } from './pages/CertHome'
import { StudySession } from './core/components/StudySession'
import { QuizSession } from './core/components/QuizSession'
import { MockExam } from './core/components/MockExam'
import { ProgressDashboard } from './core/components/ProgressDashboard'

function App() {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null)
  const [view, setView] = useState<View>('catalog')
  const [domain, setDomain] = useState<string | 'all'>('all')
  const [weakOnly, setWeakOnly] = useState(false)
  const [progress, setProgress] = useState<CertProgress>(() =>
    selectedCertId ? loadCertProgress(selectedCertId) : loadCertProgress('clf-c02'),
  )

  const config = selectedCertId ? getCertification(selectedCertId) : undefined

  const updateProgress = useCallback(
    (next: CertProgress) => {
      if (!selectedCertId) return
      setProgress(next)
      saveCertProgress(selectedCertId, next)
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

  if (!config || !selectedCertId) {
    return (
      <div className="app">
        <CatalogHome onSelectCert={selectCert} />
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
          weakOnly={weakOnly}
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
