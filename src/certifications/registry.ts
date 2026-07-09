import type { CertificationConfig } from './types'
import { clfC02Config } from './clf-c02'
import { aifC01Config } from './aif-c01'
import { dvaC02Config } from './dva-c02'
import { aipC01Config } from './aip-c01'
import { deaC01Config } from './dea-c01'
import { saaC03Config } from './saa-c03'
import { sapC02Config } from './sap-c02'
import { mlsC01Config } from './mls-c01'
import { ansC01Config } from './ans-c01'
import { mlaC01Config } from './mla-c01'
import { dopC02Config } from './dop-c02'
import { gcpPmleConfig } from './gcp-pmle'
import { gcpAceConfig } from './gcp-ace'
import { gcpCdlConfig } from './gcp-cdl'
import { gcpGailConfig } from './gcp-gail'
import { ai901Config } from './ai-901'
import { az900Config } from './az-900'
import { ai102Config } from './ai-102'

export const CERTIFICATIONS: CertificationConfig[] = [
  clfC02Config,
  aifC01Config,
  dvaC02Config,
  deaC01Config,
  saaC03Config,
  sapC02Config,
  aipC01Config,
  mlaC01Config,
  mlsC01Config,
  ansC01Config,
  dopC02Config,
  gcpCdlConfig,
  gcpGailConfig,
  gcpAceConfig,
  gcpPmleConfig,
  ai901Config,
  az900Config,
  ai102Config,
]

export function getCertification(id: string): CertificationConfig | undefined {
  return CERTIFICATIONS.find((c) => c.id === id)
}

export function getCertificationsByVendor(vendor: string): CertificationConfig[] {
  return CERTIFICATIONS.filter((c) => c.vendor === vendor)
}

export const VENDORS = [...new Set(CERTIFICATIONS.map((c) => c.vendor))]
