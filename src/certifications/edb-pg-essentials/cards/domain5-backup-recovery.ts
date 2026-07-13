import type { Card } from '../../../core/types'

export const backupRecoveryCards: Card[] = [
  {
    id: 'pg-ess-041',
    domain: 'backup-recovery',
    task: '5.1',
    tags: ['pg_dump'],
    question: 'Which tool creates a logical backup of a single PostgreSQL database?',
    options: ['pg_basebackup', 'pg_dump', 'pg_ctl backup', 'initdb --backup'],
    correctAnswers: [1],
    explanation:
      'pg_dump exports a database to SQL or custom/archive format. pg_dumpall dumps all databases including globals (roles, tablespaces).',
  },
  {
    id: 'pg-ess-042',
    domain: 'backup-recovery',
    task: '5.1',
    tags: ['pg_restore'],
    question: 'Which utility restores a custom-format (-Fc) pg_dump archive?',
    options: ['psql only', 'pg_restore', 'pg_resetwal', 'vacuumdb'],
    correctAnswers: [1],
    explanation:
      'pg_restore handles custom, directory, and tar archive formats. Plain SQL dumps are restored with psql.',
  },
  {
    id: 'pg-ess-043',
    domain: 'backup-recovery',
    task: '5.2',
    tags: ['formats'],
    question: 'Which pg_dump format allows parallel restore and selective object restore?',
    options: ['Plain SQL (-Fp)', 'Custom (-Fc)', 'Text only', 'CSV'],
    correctAnswers: [1],
    explanation:
      'Custom format (-Fc) is compressed, supports parallel pg_restore (-j), and can restore specific tables or schemas.',
  },
  {
    id: 'pg-ess-044',
    domain: 'backup-recovery',
    task: '5.3',
    tags: ['wal', 'archiving'],
    question: 'What must be configured to support continuous archiving of WAL files?',
    options: [
      'Only increasing shared_buffers',
      'archive_mode = on and a working archive_command',
      'Disabling autovacuum',
      'Setting wal_level to minimal only',
    ],
    correctAnswers: [1],
    explanation:
      'archive_mode and archive_command copy completed WAL segments to durable storage, enabling PITR when combined with a base backup.',
  },
  {
    id: 'pg-ess-045',
    domain: 'backup-recovery',
    task: '5.4',
    tags: ['pitr'],
    question: 'Point-in-Time Recovery (PITR) requires which two components?',
    options: [
      'A logical dump and REINDEX',
      'A base backup and archived WAL',
      'Only pg_dumpall',
      'A standby server only',
    ],
    correctAnswers: [1],
    explanation:
      'PITR replays WAL from a base backup up to a target time or transaction ID, recovering to moments before an error.',
  },
  {
    id: 'pg-ess-046',
    domain: 'backup-recovery',
    task: '5.5',
    tags: ['pg_basebackup'],
    question: 'pg_basebackup creates which type of backup?',
    options: [
      'Logical SQL dump of one table',
      'Physical binary copy of the data directory',
      'Export to CSV only',
      'Snapshot of pg_hba.conf only',
    ],
    correctAnswers: [1],
    explanation:
      'pg_basebackup copies data files at the filesystem level, often while the server runs. It is the foundation for physical replication and PITR.',
  },
  {
    id: 'pg-ess-047',
    domain: 'backup-recovery',
    task: '5.6',
    tags: ['recovery-signal'],
    question: 'When restoring a standby or recovering a cluster, which file signals recovery mode in PostgreSQL 12+?',
    options: ['recovery.conf', 'recovery.signal or standby.signal', 'backup_label only', 'pg_hba.conf'],
    correctAnswers: [1],
    explanation:
      'recovery.signal triggers crash/pitr recovery. standby.signal keeps the instance in standby mode following a primary.',
  },
  {
    id: 'pg-ess-048',
    domain: 'backup-recovery',
    task: '5.7',
    tags: ['wal-level'],
    question: 'Which wal_level is required for streaming replication and WAL archiving?',
    options: ['minimal', 'replica or logical', 'none', 'debug'],
    correctAnswers: [1],
    explanation:
      'wal_level replica (default in modern versions) logs enough for replication. logical is needed for logical replication.',
  },
  {
    id: 'pg-ess-049',
    domain: 'backup-recovery',
    task: '5.8',
    tags: ['consistency'],
    question: 'Why might a plain pg_dump taken during heavy writes still be transactionally consistent?',
    options: [
      'pg_dump uses a single transaction snapshot for the whole dump (in default modes)',
      'pg_dump locks all tables exclusively for hours',
      'PostgreSQL pauses all writes during pg_dump',
      'Plain dumps are never consistent',
    ],
    correctAnswers: [0],
    explanation:
      'pg_dump acquires a consistent snapshot early (via MVCC), so the dump represents one point in time despite concurrent activity.',
  },
  {
    id: 'pg-ess-050',
    domain: 'backup-recovery',
    task: '5.9',
    tags: ['pg_dumpall'],
    question: 'When should you use pg_dumpall instead of pg_dump?',
    options: [
      'When backing up one large table only',
      'When you need globals (roles, tablespaces) and all databases in one script',
      'When you need physical replication',
      'When WAL archiving is disabled',
    ],
    correctAnswers: [1],
    explanation:
      'pg_dumpall outputs cluster-wide objects plus CREATE DATABASE + per-db dumps. Individual pg_dump does not include global roles.',
  },
]
