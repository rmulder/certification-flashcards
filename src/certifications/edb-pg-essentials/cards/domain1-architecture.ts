import type { Card } from '../../../core/types'

export const architectureCards: Card[] = [
  {
    id: 'pg-ess-001',
    domain: 'architecture-installation',
    task: '1.1',
    tags: ['processes', 'postmaster'],
    question: 'Which PostgreSQL process listens for client connections and forks backend processes?',
    options: ['autovacuum launcher', 'postmaster', 'checkpointer', 'walwriter'],
    correctAnswers: [1],
    explanation:
      'The postmaster is the main PostgreSQL server process. It listens on the configured port (default 5432) and spawns a separate backend process for each client connection.',
  },
  {
    id: 'pg-ess-002',
    domain: 'architecture-installation',
    task: '1.1',
    tags: ['processes', 'background'],
    question: 'Which background process is responsible for writing dirty buffers to disk?',
    options: ['WAL writer', 'Background writer', 'Stats collector', 'Logical replication launcher'],
    correctAnswers: [1],
    explanation:
      'The background writer periodically writes dirty shared buffers to disk so checkpoint work stays manageable. The checkpointer writes all buffers during a checkpoint.',
  },
  {
    id: 'pg-ess-003',
    domain: 'architecture-installation',
    task: '1.2',
    tags: ['memory', 'shared-buffers'],
    question: 'Which parameter controls how much memory PostgreSQL uses for caching data pages?',
    options: ['work_mem', 'shared_buffers', 'maintenance_work_mem', 'temp_buffers'],
    correctAnswers: [1],
    explanation:
      'shared_buffers defines the amount of memory dedicated to PostgreSQL\'s shared buffer cache. work_mem is per-operation sort/hash memory.',
  },
  {
    id: 'pg-ess-004',
    domain: 'architecture-installation',
    task: '1.3',
    tags: ['installation', 'initdb'],
    question: 'Which command initializes a new PostgreSQL database cluster?',
    options: ['createdb', 'pg_ctl init', 'initdb', 'postgres --init'],
    correctAnswers: [2],
    explanation:
      'initdb creates a new database cluster, including the PGDATA directory, system catalogs, and template databases (template0 and template1).',
  },
  {
    id: 'pg-ess-005',
    domain: 'architecture-installation',
    task: '1.3',
    tags: ['installation', 'pgdata'],
    question: 'What does the PGDATA environment variable typically refer to?',
    options: [
      'The location of postgresql.conf only',
      'The data directory containing the database cluster',
      'The PostgreSQL installation binaries',
      'The client connection string',
    ],
    correctAnswers: [1],
    explanation:
      'PGDATA points to the root data directory of a PostgreSQL cluster — it contains configuration files, WAL, and database files.',
  },
  {
    id: 'pg-ess-006',
    domain: 'architecture-installation',
    task: '1.4',
    tags: ['wal', 'durability'],
    question: 'What is the primary purpose of Write-Ahead Logging (WAL) in PostgreSQL?',
    options: [
      'Compress data files on disk',
      'Ensure durability and enable crash recovery',
      'Speed up SELECT queries',
      'Replace the need for indexes',
    ],
    correctAnswers: [1],
    explanation:
      'WAL records changes before they are written to data files, ensuring committed transactions survive crashes and enabling point-in-time recovery.',
  },
  {
    id: 'pg-ess-007',
    domain: 'architecture-installation',
    task: '1.4',
    tags: ['templates', 'databases'],
    question: 'Which template database is used by default when you run CREATE DATABASE?',
    options: ['template0', 'template1', 'postgres', 'pg_default'],
    correctAnswers: [1],
    explanation:
      'CREATE DATABASE copies template1 by default. template0 is a pristine template used for recovery and encoding changes; it should not be modified.',
  },
  {
    id: 'pg-ess-008',
    domain: 'architecture-installation',
    task: '1.5',
    tags: ['port', 'defaults'],
    question: 'What is the default TCP port for PostgreSQL?',
    options: ['3306', '5432', '1521', '27017'],
    correctAnswers: [1],
    explanation:
      'PostgreSQL listens on port 5432 by default. This is configured in postgresql.conf via the port parameter.',
  },
  {
    id: 'pg-ess-009',
    domain: 'architecture-installation',
    task: '1.5',
    tags: ['schemas', 'namespaces'],
    question: 'In PostgreSQL, what is a schema?',
    options: [
      'A physical file on disk',
      'A namespace within a database for organizing objects',
      'A replication standby server',
      'A type of index',
    ],
    correctAnswers: [1],
    explanation:
      'A schema is a logical namespace within a database. Tables, views, and functions live in schemas; public is the default schema.',
  },
  {
    id: 'pg-ess-010',
    domain: 'architecture-installation',
    task: '1.6',
    tags: ['mvcc', 'transactions'],
    question: 'PostgreSQL uses MVCC primarily to achieve which benefit?',
    options: [
      'Readers block writers and writers block readers',
      'Readers do not block writers and writers do not block readers',
      'Eliminate the need for VACUUM',
      'Store all data in memory only',
    ],
    correctAnswers: [1],
    explanation:
      'Multi-Version Concurrency Control lets reads see a consistent snapshot without locking rows, reducing contention between concurrent readers and writers.',
  },
]
