import type { CertificationConfig, CertificationMeta } from './types'
import { clfC02Config } from './clf-c02'
import { aifC01Config } from './aif-c01'
import { reactStudyConfig } from './react-study'
import { openjsNodeConfig } from './openjs-node'
import { dvaC02Meta } from './dva-c02/meta'
import { saaC03Meta } from './saa-c03/meta'
import { mlaC01Meta } from './mla-c01/meta'
import { aipC01Meta } from './aip-c01/meta'
import { dopC02Meta } from './dop-c02/meta'
import { sapC02Meta } from './sap-c02/meta'
import { scsC03Meta } from './scs-c03/meta'
import { deaC01Meta } from './dea-c01/meta'
import { mlsC01Meta } from './mls-c01/meta'
import { ansC01Meta } from './ans-c01/meta'
import { gcpCdlMeta } from './gcp-cdl/meta'
import { gcpGailMeta } from './gcp-gail/meta'
import { gcpAceMeta } from './gcp-ace/meta'
import { gcpPmleMeta } from './gcp-pmle/meta'
import { ai901Meta } from './ai-901/meta'
import { az900Meta } from './az-900/meta'
import { ai102Meta } from './ai-102/meta'
import { gh300Meta } from './gh-300/meta'
import { tfAssociateMeta } from './tf-associate/meta'
import { deepLearningStudyMeta } from './deep-learning-study/meta'
import { machineLearningStudyMeta } from './machine-learning-study/meta'
import { googleAiEssentialsStudyMeta } from './google-ai-essentials-study/meta'
import { ibmAiEngineerStudyMeta } from './ibm-ai-engineer-study/meta'
import { ibmGenAiEngineerStudyMeta } from './ibm-gen-ai-engineer-study/meta'
import { aiForEveryoneStudyMeta } from './ai-for-everyone-study/meta'
import { dataquestGenAiStudyMeta } from './dataquest-gen-ai-study/meta'
import { aiPlusFoundationMeta } from './ai-plus-foundation/meta'
import { ibmRagAgenticAiStudyMeta } from './ibm-rag-agentic-ai-study/meta'
import { pmiCpmaiMeta } from './pmi-cpmai/meta'

const EAGER_CONFIGS: CertificationConfig[] = [
  clfC02Config,
  aifC01Config,
  reactStudyConfig,
  openjsNodeConfig,
]

function toMeta({ cards: _cards, ...meta }: CertificationConfig): CertificationMeta {
  return meta
}

export const CERTIFICATIONS: CertificationMeta[] = [
  // AWS — career-path order (foundational → core stack → professional → specialty)
  toMeta(clfC02Config),
  toMeta(aifC01Config),
  dvaC02Meta,
  saaC03Meta,
  mlaC01Meta,
  aipC01Meta,
  dopC02Meta,
  sapC02Meta,
  scsC03Meta,
  deaC01Meta,
  mlsC01Meta,
  ansC01Meta,
  // AI / ML — Coursera study tracks
  aiForEveryoneStudyMeta,
  machineLearningStudyMeta,
  deepLearningStudyMeta,
  ibmAiEngineerStudyMeta,
  ibmGenAiEngineerStudyMeta,
  dataquestGenAiStudyMeta,
  aiPlusFoundationMeta,
  ibmRagAgenticAiStudyMeta,
  pmiCpmaiMeta,
  // JavaScript — study tracks
  toMeta(reactStudyConfig),
  toMeta(openjsNodeConfig),
  // Google Cloud
  gcpCdlMeta,
  gcpGailMeta,
  googleAiEssentialsStudyMeta,
  gcpAceMeta,
  gcpPmleMeta,
  // Microsoft
  ai901Meta,
  az900Meta,
  ai102Meta,
  // GitHub
  gh300Meta,
  // HashiCorp
  tfAssociateMeta,
]

const configCache = new Map<string, CertificationConfig>(
  EAGER_CONFIGS.map((config) => [config.id, config]),
)

const LAZY_LOADERS: Record<string, () => Promise<CertificationConfig>> = {
  'dva-c02': () => import('./dva-c02').then((m) => m.dvaC02Config),
  'saa-c03': () => import('./saa-c03').then((m) => m.saaC03Config),
  'mla-c01': () => import('./mla-c01').then((m) => m.mlaC01Config),
  'aip-c01': () => import('./aip-c01').then((m) => m.aipC01Config),
  'dop-c02': () => import('./dop-c02').then((m) => m.dopC02Config),
  'sap-c02': () => import('./sap-c02').then((m) => m.sapC02Config),
  'scs-c03': () => import('./scs-c03').then((m) => m.scsC03Config),
  'dea-c01': () => import('./dea-c01').then((m) => m.deaC01Config),
  'mls-c01': () => import('./mls-c01').then((m) => m.mlsC01Config),
  'ans-c01': () => import('./ans-c01').then((m) => m.ansC01Config),
  'gcp-cdl': () => import('./gcp-cdl').then((m) => m.gcpCdlConfig),
  'gcp-gail': () => import('./gcp-gail').then((m) => m.gcpGailConfig),
  'gcp-ace': () => import('./gcp-ace').then((m) => m.gcpAceConfig),
  'gcp-pmle': () => import('./gcp-pmle').then((m) => m.gcpPmleConfig),
  'ai-901': () => import('./ai-901').then((m) => m.ai901Config),
  'az-900': () => import('./az-900').then((m) => m.az900Config),
  'ai-102': () => import('./ai-102').then((m) => m.ai102Config),
  'gh-300': () => import('./gh-300').then((m) => m.gh300Config),
  'tf-associate': () => import('./tf-associate').then((m) => m.tfAssociateConfig),
  'deep-learning-study': () =>
    import('./deep-learning-study').then((m) => m.deepLearningStudyConfig),
  'machine-learning-study': () =>
    import('./machine-learning-study').then((m) => m.machineLearningStudyConfig),
  'google-ai-essentials-study': () =>
    import('./google-ai-essentials-study').then((m) => m.googleAiEssentialsStudyConfig),
  'ibm-ai-engineer-study': () =>
    import('./ibm-ai-engineer-study').then((m) => m.ibmAiEngineerStudyConfig),
  'ibm-gen-ai-engineer-study': () =>
    import('./ibm-gen-ai-engineer-study').then((m) => m.ibmGenAiEngineerStudyConfig),
  'ai-for-everyone-study': () =>
    import('./ai-for-everyone-study').then((m) => m.aiForEveryoneStudyConfig),
  'dataquest-gen-ai-study': () =>
    import('./dataquest-gen-ai-study').then((m) => m.dataquestGenAiStudyConfig),
  'ai-plus-foundation': () =>
    import('./ai-plus-foundation').then((m) => m.aiPlusFoundationConfig),
  'ibm-rag-agentic-ai-study': () =>
    import('./ibm-rag-agentic-ai-study').then((m) => m.ibmRagAgenticAiStudyConfig),
  'pmi-cpmai': () => import('./pmi-cpmai').then((m) => m.pmiCpmaiConfig),
}

export function getCertification(id: string): CertificationMeta | undefined {
  return CERTIFICATIONS.find((c) => c.id === id)
}

export function getLoadedCertification(id: string): CertificationConfig | undefined {
  return configCache.get(id)
}

export async function loadCertification(
  id: string,
): Promise<CertificationConfig | undefined> {
  const cached = configCache.get(id)
  if (cached) return cached

  const loader = LAZY_LOADERS[id]
  if (!loader) return undefined

  const config = await loader()
  configCache.set(id, config)
  return config
}

export function getCertificationsByVendor(vendor: string): CertificationMeta[] {
  return CERTIFICATIONS.filter((c) => c.vendor === vendor)
}

export const VENDORS = [...new Set(CERTIFICATIONS.map((c) => c.vendor))]
