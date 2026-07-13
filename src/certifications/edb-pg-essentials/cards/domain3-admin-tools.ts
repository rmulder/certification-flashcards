import type { Card } from '../../../core/types'

export const adminToolsCards: Card[] = [
  {
    id: 'pg-ess-021',
    domain: 'admin-tools',
    task: '3.1',
    tags: ['psql', 'meta-commands'],
    question: 'In psql, which meta-command lists all databases?',
    options: ['\\dt', '\\l', '\\du', '\\dn'],
    correctAnswers: [1],
    explanation:
      '\\l lists databases. \\dt lists tables in the current schema, \\du lists roles, \\dn lists schemas.',
  },
  {
    id: 'pg-ess-022',
    domain: 'admin-tools',
    task: '3.1',
    tags: ['psql', 'meta-commands'],
    question: 'Which psql meta-command describes the structure of a table?',
    options: ['\\d table_name', '\\c table_name', '\\x table_name', '\\i table_name'],
    correctAnswers: [0],
    explanation:
      '\\d object_name shows columns, indexes, constraints, and triggers for a table, view, or other relation.',
  },
  {
    id: 'pg-ess-023',
    domain: 'admin-tools',
    task: '3.2',
    tags: ['pg_ctl'],
    question: 'Which pg_ctl command reloads configuration without restarting the server?',
    options: ['pg_ctl restart', 'pg_ctl reload', 'pg_ctl promote', 'pg_ctl kill'],
    correctAnswers: [1],
    explanation:
      'pg_ctl reload sends SIGHUP to re-read postgresql.conf and pg_hba.conf. Some parameters still require a full restart.',
  },
  {
    id: 'pg-ess-024',
    domain: 'admin-tools',
    task: '3.2',
    tags: ['pg_ctl', 'status'],
    question: 'How do you check whether the PostgreSQL server is running using pg_ctl?',
    options: ['pg_ctl status', 'pg_ctl check', 'pg_isready only — pg_ctl has no status', 'pg_ctl ping'],
    correctAnswers: [0],
    explanation:
      'pg_ctl status reports if the server is running and shows the PID. pg_isready is a lighter check for connection readiness.',
  },
  {
    id: 'pg-ess-025',
    domain: 'admin-tools',
    task: '3.3',
    tags: ['createdb', 'dropdb'],
    question: 'Which command-line utility creates a new database from the shell?',
    options: ['initdb', 'createdb', 'pg_dump', 'psql --create'],
    correctAnswers: [1],
    explanation:
      'createdb is a wrapper around CREATE DATABASE. dropdb removes a database. Both connect to an existing server.',
  },
  {
    id: 'pg-ess-026',
    domain: 'admin-tools',
    task: '3.3',
    tags: ['psql', 'scripts'],
    question: 'Which psql option executes commands from a file and exits?',
    options: ['-c', '-f', '-F', '-R'],
    correctAnswers: [1],
    explanation:
      'psql -f file.sql runs a script. -c runs a single command string. Both are common in automation.',
  },
  {
    id: 'pg-ess-027',
    domain: 'admin-tools',
    task: '3.4',
    tags: ['copy', 'data-loading'],
    question: 'What is the difference between COPY (SQL) and \\copy (psql)?',
    options: [
      'They are identical',
      'COPY runs on the server filesystem; \\copy streams through the client',
      '\\copy requires superuser; COPY does not',
      'COPY only works with CSV; \\copy only with text',
    ],
    correctAnswers: [1],
    explanation:
      'Server-side COPY needs server filesystem access and appropriate permissions. psql \\copy reads/writes files on the client machine.',
  },
  {
    id: 'pg-ess-028',
    domain: 'admin-tools',
    task: '3.5',
    tags: ['pgadmin'],
    question: 'pgAdmin is primarily used for which purpose?',
    options: [
      'Replacing the PostgreSQL server process',
      'GUI administration and SQL development for PostgreSQL',
      'Compiling PostgreSQL from source',
      'WAL archiving only',
    ],
    correctAnswers: [1],
    explanation:
      'pgAdmin is the popular open-source GUI for managing servers, running queries, viewing plans, and monitoring activity.',
  },
  {
    id: 'pg-ess-029',
    domain: 'admin-tools',
    task: '3.6',
    tags: ['pg_isready'],
    question: 'What does pg_isready check?',
    options: [
      'Whether all tables have indexes',
      'Whether the server accepts connections',
      'Whether backups are current',
      'Whether replication lag is zero',
    ],
    correctAnswers: [1],
    explanation:
      'pg_isready attempts a connection handshake without authenticating. It is useful in load balancers and monitoring scripts.',
  },
  {
    id: 'pg-ess-030',
    domain: 'admin-tools',
    task: '3.7',
    tags: ['psql', 'variables'],
    question: 'In psql, how do you toggle expanded (vertical) display of query results?',
    options: ['\\x', '\\e', '\\pset null', '\\a'],
    correctAnswers: [0],
    explanation:
      '\\x toggles expanded output — helpful for wide rows. \\a toggles aligned vs unaligned column mode.',
  },
]
