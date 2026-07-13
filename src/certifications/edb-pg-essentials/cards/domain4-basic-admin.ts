import type { Card } from '../../../core/types'

export const basicAdminCards: Card[] = [
  {
    id: 'pg-ess-031',
    domain: 'basic-administration',
    task: '4.1',
    tags: ['roles', 'users'],
    question: 'In PostgreSQL, what is the difference between a ROLE and a USER?',
    options: [
      'They are completely unrelated concepts',
      'USER is a role with LOGIN privilege',
      'ROLE can only read; USER can write',
      'USER exists only in pg_hba.conf',
    ],
    correctAnswers: [1],
    explanation:
      'PostgreSQL unified users and groups into roles. CREATE USER is equivalent to CREATE ROLE … LOGIN.',
  },
  {
    id: 'pg-ess-032',
    domain: 'basic-administration',
    task: '4.2',
    tags: ['privileges', 'grant'],
    question: 'Which command grants SELECT on a table to a role?',
    options: [
      'ALLOW SELECT ON table TO role',
      'GRANT SELECT ON table TO role',
      'PERMIT SELECT FOR role ON table',
      'GIVE SELECT TO role',
    ],
    correctAnswers: [1],
    explanation:
      'GRANT assigns privileges. REVOKE removes them. Table-level privileges include SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER.',
  },
  {
    id: 'pg-ess-033',
    domain: 'basic-administration',
    task: '4.3',
    tags: ['pg_hba', 'authentication'],
    question: 'Which file controls client authentication rules (host, database, user, method)?',
    options: ['postgresql.conf', 'pg_hba.conf', 'pg_ident.conf', 'recovery.conf'],
    correctAnswers: [1],
    explanation:
      'pg_hba.conf defines who can connect, from where, to which database, and which auth method (scram-sha-256, cert, peer, etc.).',
  },
  {
    id: 'pg-ess-034',
    domain: 'basic-administration',
    task: '4.3',
    tags: ['postgresql.conf'],
    question: 'Changes to which file typically require only a reload (SIGHUP), not a full restart?',
    options: [
      'pg_hba.conf only — never postgresql.conf',
      'Many postgresql.conf and pg_hba.conf settings',
      'Only recovery.signal',
      'Only the data directory path',
    ],
    correctAnswers: [1],
    explanation:
      'Reload re-reads configuration. Some parameters (shared_buffers, max_connections) need restart; others (work_mem, logging) take effect on reload or new sessions.',
  },
  {
    id: 'pg-ess-035',
    domain: 'basic-administration',
    task: '4.4',
    tags: ['vacuum'],
    question: 'Why is VACUUM necessary in PostgreSQL?',
    options: [
      'To compress WAL files automatically',
      'To reclaim space from dead tuples left by MVCC updates/deletes',
      'To create new indexes automatically',
      'To change the database encoding',
    ],
    correctAnswers: [1],
    explanation:
      'UPDATE/DELETE leave dead row versions. VACUUM marks space reusable and updates visibility maps. Autovacuum runs this automatically.',
  },
  {
    id: 'pg-ess-036',
    domain: 'basic-administration',
    task: '4.4',
    tags: ['analyze'],
    question: 'What does ANALYZE do?',
    options: [
      'Defragments disk files physically',
      'Collects statistics for the query planner',
      'Encrypts table data at rest',
      'Stops all running queries',
    ],
    correctAnswers: [1],
    explanation:
      'ANALYZE samples table data and updates pg_statistic so the planner can estimate row counts and choose efficient plans.',
  },
  {
    id: 'pg-ess-037',
    domain: 'basic-administration',
    task: '4.5',
    tags: ['schemas', 'search_path'],
    question: 'Which parameter defines the order of schemas searched for unqualified object names?',
    options: ['default_schema', 'search_path', 'schema_order', 'public_path'],
    correctAnswers: [1],
    explanation:
      'search_path is typically "$user", public. Setting it per role or session controls which schema resolves first.',
  },
  {
    id: 'pg-ess-038',
    domain: 'basic-administration',
    task: '4.6',
    tags: ['tablespaces'],
    question: 'What is a PostgreSQL tablespace?',
    options: [
      'A temporary RAM table',
      'A location on disk where data files can be stored',
      'A cloud storage bucket only',
      'A synonym for schema',
    ],
    correctAnswers: [1],
    explanation:
      'Tablespaces map to directories. CREATE TABLESPACE lets you place objects on specific storage volumes.',
  },
  {
    id: 'pg-ess-039',
    domain: 'basic-administration',
    task: '4.7',
    tags: ['rls', 'security'],
    question: 'What does Row Level Security (RLS) enable?',
    options: [
      'Encrypting all columns automatically',
      'Per-row access policies based on the current user or expressions',
      'Disabling all DELETE operations',
      'Replication to standby servers',
    ],
    correctAnswers: [1],
    explanation:
      'RLS policies filter which rows users see or modify. Common in multi-tenant apps — e.g., tenant_id = current_user_tenant().',
  },
  {
    id: 'pg-ess-040',
    domain: 'basic-administration',
    task: '4.8',
    tags: ['extensions'],
    question: 'How do you enable an extension such as pg_stat_statements in a database?',
    options: [
      'Add it to pg_hba.conf',
      'CREATE EXTENSION pg_stat_statements',
      'ALTER SYSTEM ENABLE pg_stat_statements',
      'REINDEX EXTENSION pg_stat_statements',
    ],
    correctAnswers: [1],
    explanation:
      'CREATE EXTENSION loads bundled modules. Some require shared_preload_libraries in postgresql.conf and a restart.',
  },
]
