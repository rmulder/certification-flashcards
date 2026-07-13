import type { CertificationMeta } from '../types'

export const edbPgEssentialsMeta: CertificationMeta = {
  id: 'edb-pg-essentials',
  code: 'PG-ESS',
  name: 'EDB Essentials for PostgreSQL',
  vendor: 'PostgreSQL',
  level: 'associate',
  description:
    'Foundational PostgreSQL certification with deep SQL syntax coverage — queries, joins, aggregates, DML/DDL, CTEs, and window functions.',
  available: true,
  domains: [
    {
      id: 'architecture-installation',
      name: 'Architecture & Installation',
      weight: 8,
      description: 'Process model, memory, clusters, initdb, PGDATA',
    },
    {
      id: 'sql-knowledge',
      name: 'SQL Knowledge',
      weight: 42,
      description:
        'SELECT, JOINs, aggregates, subqueries, CTEs, window functions, DML, DDL, and PostgreSQL syntax',
    },
    {
      id: 'admin-tools',
      name: 'Administrative Tools',
      weight: 6,
      description: 'psql, pg_ctl, pgAdmin, meta-commands',
    },
    {
      id: 'basic-administration',
      name: 'Basic Administration',
      weight: 12,
      description: 'Roles, privileges, config files, VACUUM',
    },
    {
      id: 'backup-recovery',
      name: 'Backup & Recovery',
      weight: 12,
      description: 'pg_dump, pg_restore, WAL, PITR',
    },
    {
      id: 'high-availability',
      name: 'High Availability',
      weight: 8,
      description: 'Streaming replication, synchronous vs async',
    },
    {
      id: 'monitoring-tuning',
      name: 'Monitoring & Tuning',
      weight: 12,
      description: 'EXPLAIN, pg_stat views, indexes, autovacuum',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 164,
}
