import type { Card } from '../../../core/types'

export const highAvailabilityCards: Card[] = [
  {
    id: 'pg-ess-051',
    domain: 'high-availability',
    task: '6.1',
    tags: ['streaming-replication'],
    question: 'What does streaming replication stream from primary to standby?',
    options: [
      'Only logical SQL statements',
      'WAL records as they are generated',
      'Client connection passwords',
      'Index definitions only',
    ],
    correctAnswers: [1],
    explanation:
      'Physical streaming replication ships WAL to standbys, which replay changes to stay nearly synchronized with the primary.',
  },
  {
    id: 'pg-ess-052',
    domain: 'high-availability',
    task: '6.2',
    tags: ['synchronous'],
    question: 'What does synchronous_commit = on guarantee?',
    options: [
      'Queries run faster',
      'Committed transactions are confirmed only after WAL is flushed to durable storage (and optionally replicated)',
      'Standbys never lag',
      'No WAL is written',
    ],
    correctAnswers: [1],
    explanation:
      'synchronous_commit controls when commit returns to the client relative to WAL flush. With synchronous replication, commit may wait for standby acknowledgment.',
  },
  {
    id: 'pg-ess-053',
    domain: 'high-availability',
    task: '6.3',
    tags: ['replication-slots'],
    question: 'What problem do replication slots solve?',
    options: [
      'They speed up SELECT queries',
      'They prevent the primary from removing WAL still needed by a standby',
      'They replace pg_hba.conf',
      'They encrypt replication traffic',
    ],
    correctAnswers: [1],
    explanation:
      'Without slots, a lagging standby can force WAL retention or break replication if required segments are recycled.',
  },
  {
    id: 'pg-ess-054',
    domain: 'high-availability',
    task: '6.4',
    tags: ['logical-replication'],
    question: 'Logical replication differs from physical streaming replication because it:',
    options: [
      'Copies only WAL bytes with no decoding',
      'Replicates data changes at a logical level (often table-level publications)',
      'Works only on the same major version',
      'Cannot replicate INSERT operations',
    ],
    correctAnswers: [1],
    explanation:
      'Logical replication uses publications/subscriptions, can replicate selective tables, and supports cross-version upgrades in some scenarios.',
  },
  {
    id: 'pg-ess-055',
    domain: 'high-availability',
    task: '6.5',
    tags: ['hot-standby'],
    question: 'A hot standby server can:',
    options: [
      'Accept read-only queries while applying WAL from the primary',
      'Accept writes from any user',
      'Run without any connection to a primary',
      'Only serve pg_dump requests',
    ],
    correctAnswers: [0],
    explanation:
      'hot_standby = on lets standbys serve read queries during recovery. Writes are not allowed on a standby.',
  },
  {
    id: 'pg-ess-056',
    domain: 'high-availability',
    task: '6.6',
    tags: ['failover'],
    question: 'Which command promotes a standby to become the new primary?',
    options: ['pg_ctl promote', 'pg_ctl demote', 'initdb --promote', 'VACUUM FULL'],
    correctAnswers: [0],
    explanation:
      'pg_ctl promote ends recovery and accepts writes. Orchestration tools (Patroni, repmgr) automate failover in production.',
  },
  {
    id: 'pg-ess-057',
    domain: 'high-availability',
    task: '6.7',
    tags: ['monitoring-replication'],
    question: 'Which view shows replication status on the primary, including connected standbys?',
    options: ['pg_stat_activity only', 'pg_stat_replication', 'pg_stat_database', 'information_schema.tables'],
    correctAnswers: [1],
    explanation:
      'pg_stat_replication lists WAL senders, standby addresses, sync state, and replication lag metrics on the primary.',
  },
  {
    id: 'pg-ess-058',
    domain: 'high-availability',
    task: '6.8',
    tags: ['max-wal-senders'],
    question: 'Which parameter limits how many simultaneous replication connections the primary accepts?',
    options: ['max_connections', 'max_wal_senders', 'wal_keep_size', 'shared_buffers'],
    correctAnswers: [1],
    explanation:
      'max_wal_senders caps WAL sender processes for streaming replication. Plan capacity for standbys plus backup tools using replication protocol.',
  },
  {
    id: 'pg-ess-059',
    domain: 'high-availability',
    task: '6.9',
    tags: ['publication'],
    question: 'In logical replication, which object on the publisher defines what to replicate?',
    options: ['SUBSCRIPTION', 'PUBLICATION', 'REPLICATION SLOT only', 'FOREIGN TABLE'],
    correctAnswers: [1],
    explanation:
      'CREATE PUBLICATION specifies tables/changes. On the subscriber, CREATE SUBSCRIPTION connects to the publication.',
  },
  {
    id: 'pg-ess-060',
    domain: 'high-availability',
    task: '6.10',
    tags: ['async-sync'],
    question: 'Asynchronous replication means:',
    options: [
      'The primary waits for every standby before COMMIT returns',
      'The primary can commit without waiting for standby confirmation',
      'No WAL is sent to standbys',
      'Standbys cannot read data',
    ],
    correctAnswers: [1],
    explanation:
      'Async replication offers lower commit latency but risk of data loss if the primary fails before standbys receive recent WAL.',
  },
]
