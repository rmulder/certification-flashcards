import type { CertificationConfig } from './types'
import { clfC02Config } from './clf-c02'
import { aifC01Config } from './aif-c01'
import { dvaC02Config } from './dva-c02'
import {
  aipC01Config,
  deaC01Config,
  saaC03Config,
} from './stubs'

export const CERTIFICATIONS: CertificationConfig[] = [
  clfC02Config,
  aifC01Config,
  dvaC02Config,
  deaC01Config,
  saaC03Config,
  aipC01Config,
]

export function getCertification(id: string): CertificationConfig | undefined {
  return CERTIFICATIONS.find((c) => c.id === id)
}

export function getCertificationsByVendor(vendor: string): CertificationConfig[] {
  return CERTIFICATIONS.filter((c) => c.vendor === vendor)
}

export const VENDORS = [...new Set(CERTIFICATIONS.map((c) => c.vendor))]
