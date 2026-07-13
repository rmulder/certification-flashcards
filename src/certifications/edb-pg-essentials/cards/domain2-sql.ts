import type { Card } from '../../../core/types'
import { sqlSelectCards } from './domain2-sql-select'
import { sqlJoinCards } from './domain2-sql-joins'
import { sqlAggregateCards } from './domain2-sql-aggregates'
import { sqlDmlCards } from './domain2-sql-dml'
import { sqlDdlCards } from './domain2-sql-ddl'
import { sqlSubqueryCards } from './domain2-sql-subqueries'
import { sqlSetOpsCards } from './domain2-sql-set-ops'

/** Core types & constraints cards */
const sqlCoreCards: Card[] = [
  {
    id: 'pg-ess-011',
    domain: 'sql-knowledge',
    task: '2.2',
    tags: ['types', 'jsonb'],
    question: 'Which PostgreSQL data type is recommended for storing JSON with indexing support?',
    options: ['TEXT', 'JSON', 'JSONB', 'BYTEA'],
    correctAnswers: [2],
    explanation:
      'JSONB stores JSON in a decomposed binary format, supports indexing (GIN), and is generally preferred over JSON for querying.',
  },
  {
    id: 'pg-ess-014',
    domain: 'sql-knowledge',
    task: '2.2',
    tags: ['constraints', 'primary-key'],
    question: 'Which constraint ensures a column (or set of columns) uniquely identifies each row?',
    options: ['CHECK', 'FOREIGN KEY', 'PRIMARY KEY', 'UNIQUE only on nullable columns'],
    correctAnswers: [2],
    explanation:
      'PRIMARY KEY enforces uniqueness and NOT NULL. A table can have one primary key, which automatically creates a unique index.',
  },
  {
    id: 'pg-ess-019',
    domain: 'sql-knowledge',
    task: '2.5',
    tags: ['indexes', 'unique'],
    question: 'How does a UNIQUE index differ from a PRIMARY KEY?',
    options: [
      'UNIQUE allows multiple NULLs (in standard SQL behavior); PRIMARY KEY implies NOT NULL',
      'UNIQUE is faster than PRIMARY KEY',
      'PRIMARY KEY cannot be indexed',
      'They are identical in every way',
    ],
    correctAnswers: [0],
    explanation:
      'Both enforce uniqueness via indexes. PRIMARY KEY columns are NOT NULL. UNIQUE allows one NULL in PostgreSQL (NULLs are considered distinct).',
  },
]

export const sqlCards: Card[] = [
  ...sqlCoreCards,
  ...sqlSelectCards,
  ...sqlJoinCards,
  ...sqlAggregateCards,
  ...sqlDmlCards,
  ...sqlDdlCards,
  ...sqlSubqueryCards,
  ...sqlSetOpsCards,
]
