import type { Card } from '../../../core/types'

export const monitoringTuningCards: Card[] = [
  {
    id: 'pg-ess-061',
    domain: 'monitoring-tuning',
    task: '7.1',
    tags: ['explain'],
    question: 'What does EXPLAIN (without ANALYZE) show?',
    options: [
      'Actual row counts and timings from execution',
      'The planner\'s estimated execution plan without running the query',
      'A list of all indexes on the table',
      'Current lock holders only',
    ],
    correctAnswers: [1],
    explanation:
      'EXPLAIN shows the planned node tree and cost estimates. EXPLAIN ANALYZE executes the query and adds actual rows and timing.',
  },
  {
    id: 'pg-ess-062',
    domain: 'monitoring-tuning',
    task: '7.2',
    tags: ['seq-scan'],
    question: 'When might a Seq Scan be acceptable in an execution plan?',
    options: [
      'Never — it always indicates a problem',
      'When the table is small or most rows need to be read anyway',
      'Only during replication',
      'Only on standby servers',
    ],
    correctAnswers: [1],
    explanation:
      'Sequential scans read the whole table. For tiny tables or queries returning most rows, they can be cheaper than random index lookups.',
  },
  {
    id: 'pg-ess-063',
    domain: 'monitoring-tuning',
    task: '7.3',
    tags: ['indexes', 'btree'],
    question: 'Which index type is the default and works well for equality and range queries on scalar data?',
    options: ['GIN', 'GiST', 'B-tree', 'Hash only'],
    correctAnswers: [2],
    explanation:
      'CREATE INDEX creates a B-tree by default. GIN suits arrays/JSONB/full-text; GiST suits geometric and full-text cases.',
  },
  {
    id: 'pg-ess-064',
    domain: 'monitoring-tuning',
    task: '7.4',
    tags: ['pg_stat_activity'],
    question: 'Which view shows currently running queries, their state, and wait events?',
    options: ['pg_stat_user_tables', 'pg_stat_activity', 'pg_class', 'pg_locks only'],
    correctAnswers: [1],
    explanation:
      'pg_stat_activity lists sessions — state (active, idle in transaction), query text, client addr, and wait_event_type when waiting.',
  },
  {
    id: 'pg-ess-065',
    domain: 'monitoring-tuning',
    task: '7.5',
    tags: ['autovacuum'],
    question: 'What triggers autovacuum for a table under default settings?',
    options: [
      'Only manual VACUUM commands',
      'Dead tuple count exceeding a threshold based on scale factors',
      'Every INSERT statement',
      'Only when the database is shut down',
    ],
    correctAnswers: [1],
    explanation:
      'Autovacuum uses autovacuum_vacuum_threshold + scale_factor * reltuples. Tuning these prevents bloat and transaction id wraparound issues.',
  },
  {
    id: 'pg-ess-066',
    domain: 'monitoring-tuning',
    task: '7.6',
    tags: ['work-mem'],
    question: 'Which parameter limits memory for sorts and hash tables per operation per query?',
    options: ['shared_buffers', 'work_mem', 'maintenance_work_mem', 'wal_buffers'],
    correctAnswers: [1],
    explanation:
      'work_mem caps sort/hash memory per node. Complex queries with many sorts can use multiples of work_mem — size carefully on multi-connection systems.',
  },
  {
    id: 'pg-ess-067',
    domain: 'monitoring-tuning',
    task: '7.7',
    tags: ['pg_stat_statements'],
    question: 'The pg_stat_statements extension is primarily used to:',
    options: [
      'Store user passwords',
      'Track normalized SQL execution statistics (calls, total time, rows)',
      'Replace pg_hba.conf',
      'Archive WAL files',
    ],
    correctAnswers: [1],
    explanation:
      'pg_stat_statements aggregates query performance — essential for finding slow or frequent queries. Requires shared_preload_libraries.',
  },
  {
    id: 'pg-ess-068',
    domain: 'monitoring-tuning',
    task: '7.8',
    tags: ['index-scan'],
    question: 'An Index Scan in EXPLAIN output indicates:',
    options: [
      'The planner reads the table sequentially only',
      'The planner uses an index to locate matching rows',
      'The query cannot use any index',
      'The table has no statistics',
    ],
    correctAnswers: [1],
    explanation:
      'Index Scan traverses a B-tree (or other index) to find heap tuples. Bitmap Index Scan builds a TID bitmap first for many matching rows.',
  },
  {
    id: 'pg-ess-069',
    domain: 'monitoring-tuning',
    task: '7.9',
    tags: ['statistics'],
    question: 'Stale statistics in pg_statistic can cause:',
    options: [
      'Faster queries always',
      'Suboptimal plans (wrong join order, seq scans instead of index scans)',
      'Automatic database deletion',
      'WAL corruption',
    ],
    correctAnswers: [1],
    explanation:
      'Out-of-date stats mislead cost estimates. Run ANALYZE after large data changes or rely on autovacuum\'s auto-analyze.',
  },
  {
    id: 'pg-ess-070',
    domain: 'monitoring-tuning',
    task: '7.10',
    tags: ['logging'],
    question: 'Which parameter logs the duration of every statement when set to a value in milliseconds?',
    options: ['log_connections', 'log_min_duration_statement', 'log_checkpoints', 'log_replication_commands'],
    correctAnswers: [1],
    explanation:
      'log_min_duration_statement = N logs statements running longer than N ms. Setting to 0 logs all statement durations (verbose).',
  },
]
