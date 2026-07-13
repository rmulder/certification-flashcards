import type { CertificationConfig } from '../types'
import { architectureCards } from './cards/domain1-architecture'
import { sqlCards } from './cards/domain2-sql'
import { adminToolsCards } from './cards/domain3-admin-tools'
import { basicAdminCards } from './cards/domain4-basic-admin'
import { backupRecoveryCards } from './cards/domain5-backup-recovery'
import { highAvailabilityCards } from './cards/domain6-high-availability'
import { monitoringTuningCards } from './cards/domain7-monitoring-tuning'
import { edbPgEssentialsMeta } from './meta'

const cards = [
  ...architectureCards,
  ...sqlCards,
  ...adminToolsCards,
  ...basicAdminCards,
  ...backupRecoveryCards,
  ...highAvailabilityCards,
  ...monitoringTuningCards,
]

export const edbPgEssentialsConfig: CertificationConfig = {
  ...edbPgEssentialsMeta,
  cardCount: cards.length,
  cards,
}
