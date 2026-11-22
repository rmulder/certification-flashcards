import type { Card } from '../../../core/types'

export const operationsCards: Card[] = [
  {
    id: 'dea-ops-001',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'mwaa'],
    question: 'Orchestrate complex DAG with task dependencies and retries using managed Airflow:',
    options: [
      'Amazon MWAA',
      'Manual cron on EC2',
      'Email reminders',
      'Route 53',
    ],
    correctAnswers: [0],
    explanation: 'MWAA runs Airflow for pipeline orchestration with AWS integrations.',
  },
  {
    id: 'dea-ops-002',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'step-functions'],
    question: 'Visual workflow coordinates Lambda, Glue, and SNS notification on failure:',
    options: [
      'AWS Step Functions',
      'Unlinked scripts',
      'Spreadsheet macros only',
      'CloudFront',
    ],
    correctAnswers: [0],
    explanation: 'Step Functions orchestrate multi-service data pipelines with error handling.',
  },
  {
    id: 'dea-ops-003',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'sdk'],
    question: 'Python pipeline invokes StartJobRun on Glue programmatically via:',
    options: [
      'AWS SDK (boto3) with IAM role credentials',
      'Hard-coded root keys in code',
      'Unauthenticated HTTP',
      'FTP commands',
    ],
    correctAnswers: [0],
    explanation: 'SDKs call AWS APIs securely using IAM roles or credentials from the provider chain.',
  },
  {
    id: 'dea-ops-004',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'glue-process'],
    question: 'Serverless Spark ETL without managing clusters uses:',
    options: [
      'AWS Glue jobs',
      'Manual Spark on laptop for all PB data',
      'Amazon Polly',
      'AWS Artifact',
    ],
    correctAnswers: [0],
    explanation: 'Glue executes managed Spark ETL against cataloged data sources.',
  },
  {
    id: 'dea-ops-005',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'data-api'],
    question: 'Expose Athena query results to app via REST without giving S3 direct access:',
    options: [
      'Data API pattern with Lambda and API Gateway',
      'Public bucket ACL',
      'Shared root password',
      'Email CSV only',
    ],
    correctAnswers: [0],
    explanation: 'Data APIs enforce authorization while serving query or export functionality.',
  },
  {
    id: 'dea-ops-006',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'databrew-prep'],
    question: 'Visual profiling and cleaning before Glue ETL uses:',
    options: [
      'AWS Glue DataBrew',
      'Manual Excel on entire PB dataset',
      'Amazon Macie only',
      'Route 53',
    ],
    correctAnswers: [0],
    explanation: 'DataBrew prepares data visually before downstream transformation jobs.',
  },
  {
    id: 'dea-ops-007',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'athena-query'],
    question: 'Analyst runs ad hoc SQL on curated S3 tables with pay-per-query pricing:',
    options: [
      'Amazon Athena',
      'Provisioned Redshift for every ad hoc question',
      'grep on laptop',
      'Amazon Connect',
    ],
    correctAnswers: [0],
    explanation: 'Athena charges per data scanned for interactive lake SQL queries.',
  },
  {
    id: 'dea-ops-008',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'lambda-auto'],
    question: 'S3 landing triggers Lambda to normalize and move files to curated prefix:',
    options: [
      'Event-driven Lambda automation',
      'Manual drag-and-drop daily',
      'Never automate',
      'Physical mail',
    ],
    correctAnswers: [0],
    explanation: 'Lambda automates lightweight processing steps in ingestion pipelines.',
  },
  {
    id: 'dea-ops-009',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'eventbridge-schedule'],
    question: 'Daily pipeline kickoff at fixed schedule without Airflow uses:',
    options: [
      'EventBridge scheduled rules targeting Glue or Step Functions',
      'Random reboots',
      'DNS TTL',
      'Developer alarm clock',
    ],
    correctAnswers: [0],
    explanation: 'EventBridge schedules trigger pipeline starts reliably in serverless architectures.',
  },
  {
    id: 'dea-ops-010',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'quicksight'],
    question: 'Business dashboards and BI on warehouse and lake data use:',
    options: [
      'Amazon QuickSight',
      'Amazon Polly',
      'AWS Snowmobile',
      'Amazon Inspector',
    ],
    correctAnswers: [0],
    explanation: 'QuickSight provides managed BI visualization for AWS data sources.',
  },
  {
    id: 'dea-ops-011',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'clean'],
    question: 'Null rates and invalid formats detected during exploration in DataBrew or Wrangler indicate:',
    options: [
      'Data cleaning and profiling step before production ETL',
      'Ignore data quality',
      'Deploy without checks',
      'Delete all rows with any null',
    ],
    correctAnswers: [0],
    explanation: 'Profiling identifies issues requiring cleansing rules in transformation pipelines.',
  },
  {
    id: 'dea-ops-012',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'sql-views'],
    question: 'Reusable logical layer for analysts in Redshift creates:',
    options: [
      'SQL views on base tables',
      'Duplicate physical copies always',
      'Unqueryable blobs',
      'Remove all joins',
    ],
    correctAnswers: [0],
    explanation: 'Views simplify access patterns and encapsulate business logic for consumers.',
  },
  {
    id: 'dea-ops-013',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'spark-notebook'],
    question: 'Interactive Spark exploration on lake data in Athena uses:',
    options: [
      'Athena Spark notebooks (exam skill)',
      'Only static CSV download',
      'Manual calculator',
      'Amazon Polly',
    ],
    correctAnswers: [0],
    explanation: 'Athena notebooks support Spark-based exploration integrated with lake tables.',
  },
  {
    id: 'dea-ops-014',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'serverless-tradeoff'],
    question: 'Serverless Athena vs provisioned Redshift tradeoff primarily involves:',
    options: [
      'Cost vs predictable performance and concurrency for heavy workloads',
      'Color of dashboard charts',
      'Office furniture',
      'DNS propagation',
    ],
    correctAnswers: [0],
    explanation: 'Serverless suits intermittent scans; provisioned warehouses suit steady heavy SQL concurrency.',
  },
  {
    id: 'dea-ops-015',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'aggregation'],
    question: 'Rolling 7-day average revenue by region requires SQL:',
    options: [
      'Aggregation with GROUP BY and window functions',
      'SELECT * only',
      'DROP TABLE',
      'No SQL allowed',
    ],
    correctAnswers: [0],
    explanation: 'Aggregations, grouping, and window functions are core analytical SQL patterns.',
  },
  {
    id: 'dea-ops-016',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'cloudtrail'],
    question: 'Track who deleted Glue database or changed IAM policy using:',
    options: [
      'AWS CloudTrail',
      'Unlogged actions',
      'Sticky notes',
      'Public blog posts',
    ],
    correctAnswers: [0],
    explanation: 'CloudTrail records API activity for audit and security investigations.',
  },
  {
    id: 'dea-ops-017',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'monitoring'],
    question: 'Glue job failure rate and duration metrics appear in:',
    options: [
      'Amazon CloudWatch',
      'Only local laptop logs',
      'DNS cache',
      'S3 object tags only',
    ],
    correctAnswers: [0],
    explanation: 'CloudWatch metrics and alarms monitor pipeline health and performance.',
  },
  {
    id: 'dea-ops-018',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'alerts'],
    question: 'CloudWatch alarm on Glue job failures triggers SNS to on-call. This enables:',
    options: [
      'Proactive pipeline monitoring and alerting',
      'Silent failures forever',
      'Deleting logs on error',
      'Ignoring SLA',
    ],
    correctAnswers: [0],
    explanation: 'Alerts shorten mean time to detect pipeline failures.',
  },
  {
    id: 'dea-ops-019',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'performance'],
    question: 'EMR cluster CPU pegged and jobs queue. Troubleshoot by:',
    options: [
      'Analyzing Spark UI, CloudWatch metrics, and right-sizing or autoscaling',
      'Adding random sleep',
      'Never scaling',
      'Deleting input data',
    ],
    correctAnswers: [0],
    explanation: 'Performance tuning uses cluster metrics, Spark stages, and scaling policies.',
  },
  {
    id: 'dea-ops-020',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'glue-debug'],
    question: 'Glue job fails with connection timeout to RDS. Check:',
    options: [
      'Glue connection VPC/subnet/security group and RDS accessibility',
      'Change model temperature',
      'Disable encryption always',
      'Delete RDS',
    ],
    correctAnswers: [0],
    explanation: 'Network path and security groups are common causes of Glue connection failures.',
  },
  {
    id: 'dea-ops-021',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'logs-insights'],
    question: 'Search application logs for ERROR across Lambda ETL functions using:',
    options: [
      'CloudWatch Logs Insights',
      'Manual scroll through millions of lines',
      'Amazon Polly',
      'Route 53',
    ],
    correctAnswers: [0],
    explanation: 'Logs Insights queries structured logs efficiently for troubleshooting.',
  },
  {
    id: 'dea-ops-022',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'opensearch-logs'],
    question: 'High-volume EMR logs analyzed with full-text search use:',
    options: [
      'Amazon OpenSearch Service',
      'Plain text grep on single laptop for PB logs',
      'Email logs daily',
      'Delete logs immediately',
    ],
    correctAnswers: [0],
    explanation: 'OpenSearch indexes large log volumes for search and dashboards.',
  },
  {
    id: 'dea-ops-023',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'audit-logs'],
    question: 'Extract pipeline audit logs for compliance review from:',
    options: [
      'CloudTrail, CloudWatch Logs, and S3 access logs as applicable',
      'Developer personal inboxes only',
      'Unlogged systems',
      'Public forums',
    ],
    correctAnswers: [0],
    explanation: 'Audit preparation aggregates authoritative logs from AWS logging services.',
  },
  {
    id: 'dea-ops-024',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'quality-checks'],
    question: 'ETL rejects records with empty required key fields. This is:',
    options: [
      'Data quality check during processing',
      'Optional nice-to-have only',
      'Anti-pattern always',
      'Replacing all validation',
    ],
    correctAnswers: [0],
    explanation: 'Quality checks enforce business rules at ingest/transform time.',
  },
  {
    id: 'dea-ops-025',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'databrew-rules'],
    question: 'Define visual data quality rules for column ranges and completeness in:',
    options: [
      'AWS Glue DataBrew',
      'Amazon Macie only',
      'Route 53',
      'AWS Artifact',
    ],
    correctAnswers: [0],
    explanation: 'DataBrew supports configurable quality rules and profiling outputs.',
  },
  {
    id: 'dea-ops-026',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'consistency'],
    question: 'Same customer_id shows different names in two curated tables. Investigate with:',
    options: [
      'DataBrew profiling or SQL joins to find inconsistencies',
      'Ignore mismatch',
      'Delete one table randomly',
      'Disable catalog',
    ],
    correctAnswers: [0],
    explanation: 'Consistency investigations compare datasets against expected relationships and rules.',
  },
  {
    id: 'dea-ops-027',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'sampling'],
    question: 'Estimate null percentage without scanning entire PB table uses:',
    options: [
      'Data sampling techniques',
      'Full table scan always required',
      'Guess randomly',
      'Delete sample',
    ],
    correctAnswers: [0],
    explanation: 'Sampling reduces cost when estimating statistics on massive datasets.',
  },
  {
    id: 'dea-ops-028',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'skew'],
    question: 'Spark job one task takes 99% of time due to key skew. Mitigate by:',
    options: [
      'Salting keys, custom partitioning, or adaptive execution settings',
      'Ignore skew',
      'Disable Spark',
      'Single executor only',
    ],
    correctAnswers: [0],
    explanation: 'Data skew causes stragglers; salting and repartitioning balance work across executors.',
  },
  {
    id: 'dea-ops-029',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq'],
    question: 'Automated rules in Glue Data Quality evaluate dataset against expectations:',
    options: [
      'AWS Glue Data Quality rulesets',
      'Manual eyeball only',
      'No validation in production',
      'Random deletion',
    ],
    correctAnswers: [0],
    explanation: 'Glue Data Quality runs declarative checks and publishes results to monitor dataset health.',
  },
  {
    id: 'dea-ops-030',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'troubleshoot-mwaa'],
    question: 'MWAA task fails repeatedly. First step:',
    options: [
      'Review Airflow task logs in CloudWatch and dependency upstream tasks',
      'Delete MWAA environment immediately',
      'Disable all DAGs forever',
      'Ignore failures',
    ],
    correctAnswers: [0],
    explanation: 'Airflow logs and task dependency graph pinpoint failure root cause in orchestrated pipelines.',
  },
  {
    id: 'dea-ops-031',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'jupyter'],
    question: 'Exploratory analysis with notebooks on SageMaker or EMR supports:',
    options: [
      'Interactive data analysis before productionizing ETL',
      'Production scheduling only without exploration',
      'Eliminating SQL',
      'No visualization ever',
    ],
    correctAnswers: [0],
    explanation: 'Notebooks enable iterative analysis that informs pipeline design and data quality rules.',
  },
  {
    id: 'dea-ops-032',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'traceability'],
    question: 'End-to-end trace from raw S3 landing to curated table requires:',
    options: [
      'Logging, job run IDs, and lineage metadata across pipeline stages',
      'No metadata anywhere',
      'Single unlabeled file',
      'Anonymous processing',
    ],
    correctAnswers: [0],
    explanation: 'Traceability links pipeline steps for debugging and compliance audits.',
  },
  {
    id: 'dea-ops-033',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'emr-process'],
    question: 'Heavy PySpark transforms on TB-scale data typically run on:',
    options: [
      'Amazon EMR',
      'Lambda with 15-minute limit for all TB jobs',
      'CloudFront',
      'Route 53',
    ],
    correctAnswers: [0],
    explanation: 'EMR handles large distributed Spark workloads beyond Lambda limits.',
  },
  {
    id: 'dea-ops-034',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'pivot'],
    question: 'Transform long-format sales rows to wide columns by month uses SQL:',
    options: [
      'Conditional aggregation with CASE expressions and GROUP BY',
      'SELECT 1',
      'DROP SCHEMA',
      'Only INSERT without SELECT',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift reporting pivots use SUM(CASE WHEN ...) (or similar) grouped by the remaining dimensions. Window PARTITION BY does not create new columns; PostgreSQL tablefunc CROSSTAB is not Redshift SQL.',
  },
  {
    id: 'dea-ops-035',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'automation-logs'],
    question: 'Configure CloudWatch Logs retention and subscription filters automatically via:',
    options: [
      'IaC templates and operational runbooks',
      'Manual console only forever',
      'Delete logs daily by hand',
      'No retention policy',
    ],
    correctAnswers: [0],
    explanation: 'Automated log configuration ensures consistent retention and forwarding for audits.',
  },
  {
    id: 'dea-ops-036',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'empty-fields'],
    question: 'Pipeline quarantines records failing NOT NULL constraints. Output goes to:',
    options: [
      'Dead-letter or quarantine S3 prefix for investigation',
      'Production curated table anyway',
      'Public internet',
      'Delete silently',
    ],
    correctAnswers: [0],
    explanation: 'Quarantine zones isolate bad records while keeping good data flowing.',
  },
  {
    id: 'dea-ops-037',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'maintain-api'],
    question: 'Versioned REST data API requires updating schemas and deprecating old endpoints. This is:',
    options: [
      'Consuming and maintaining data APIs over time',
      'One-time deploy never changed',
      'Remove auth entirely',
      'FTP only forever',
    ],
    correctAnswers: [0],
    explanation: 'Data APIs need lifecycle management like any production service interface.',
  },
  {
    id: 'dea-ops-038',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'athena-logs'],
    question: 'Analyze S3 access or ALB logs at scale with SQL using:',
    options: [
      'Amazon Athena on log files in S3',
      'Manual notepad search',
      'Amazon Polly',
      'Snowball',
    ],
    correctAnswers: [0],
    explanation: 'Athena queries large log datasets in S3 without loading into a database cluster.',
  },
  {
    id: 'dea-ops-039',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'wrangler'],
    question: 'Prepare features and clean tabular data visually before ML or warehouse load:',
    options: [
      'Amazon SageMaker Data Wrangler',
      'AWS Artifact',
      'Amazon Connect',
      'Route 53 health checks',
    ],
    correctAnswers: [0],
    explanation: 'Data Wrangler provides UI-driven preparation flows integrated with SageMaker pipeline.',
  },
  {
    id: 'dea-ops-040',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'pipeline-maint'],
    question: 'Regular Glue job bookmark corruption causes duplicate records. Fix by:',
    options: [
      'Resetting bookmark after backfill and adding idempotent merge logic',
      'Ignore duplicates forever',
      'Disable bookmarks and full reload always without plan',
      'Delete warehouse',
    ],
    correctAnswers: [0],
    explanation: 'Bookmark issues require controlled resets and idempotent writes to avoid duplicates.',
  },
  {
    id: 'dea-ops-041',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'quality-gates'],
    question: 'Deploy blocked if Data Quality ruleset score below threshold. This implements:',
    options: [
      'Quality gate in deployment pipeline',
      'Ship bad data faster',
      'No metrics',
      'Manual only yearly check',
    ],
    correctAnswers: [0],
    explanation: 'Quality gates prevent promoting datasets that fail defined validation rules.',
  },
  {
    id: 'dea-ops-042',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'dashboard'],
    question: 'Operations dashboard shows pipeline SLA, error count, and data freshness from:',
    options: [
      'CloudWatch dashboards combining metrics and alarms',
      'Verbal status only',
      'Unmonitored scripts',
      'Random guesses',
    ],
    correctAnswers: [0],
    explanation: 'Dashboards consolidate operational KPIs for data platform health.',
  },
  {
    id: 'dea-ops-043',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'performance'],
    question:
      'Specific Redshift analytical queries are slow; team needs root-cause analysis on plans and physical design. Most effective first step:',
    options: [
      'Run EXPLAIN, review sort keys, distribution keys, and encodings, then tune',
      'Watch average QueryDuration only without inspecting individual SQL',
      'Scale CPU based on cluster CPUUtilization alone',
      'Vacuum based on ReadIOPS without examining query plans',
    ],
    correctAnswers: [0],
    explanation:
      'EXPLAIN exposes operators and data movement; sort/dist/encoding align storage with query patterns. Aggregate duration or CPU/IOPS metrics alone do not show why a particular query is inefficient.',
  },
  {
    id: 'dea-ops-044',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'roles'],
    question: 'Typical responsibilities of a data engineer include: (Select THREE.)',
    options: [
      'Build and operate data ingestion and processing platforms',
      'Catalog and document datasets for discoverability',
      'Implement security and compliance controls on data pipelines',
      'Own all ML model training and hyperparameter tuning',
      'Primary owner of executive dashboard design in BI tools',
      'Replace database administrators for every OLTP system',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Engineers focus on platforms, metadata, and secure pipelines. Model development aligns with data science; dashboard storytelling with analysts/BI roles; OLTP DBA duties may overlap but are not the core DE mandate.',
  },
  {
    id: 'dea-ops-045',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'cloudformation'],
    question: 'In an AWS CloudFormation template, which section is required?',
    options: [
      'Resources',
      'Parameters',
      'Mappings',
      'Outputs',
    ],
    correctAnswers: [0],
    explanation:
      'Resources declares AWS infrastructure to create. Parameters, Mappings, Conditions, Transform, and Outputs are optional template sections that customize or expose the stack.',
  },
  {
    id: 'dea-ops-046',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'msk'],
    question:
      'Streaming platform team must enforce Kafka ACLs and encryption in a managed Kafka service on AWS. Service aligned with DEA streaming security labs:',
    options: [
      'Amazon MSK with appropriate auth and ACL configuration',
      'Amazon S3 Intelligent-Tiering',
      'AWS DataSync',
      'Amazon Athena workgroups only',
    ],
    correctAnswers: [0],
    explanation:
      'MSK is managed Kafka where access control and TLS align with streaming governance. The other services do not provide Kafka broker ACL management.',
  },
  {
    id: 'dea-ops-047',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'pipeline-tuning'],
    question:
      'Glue jobs already saturate workers on large joins; Redshift cluster has spare capacity. Bottleneck is in Glue, so ineffective fix:',
    options: [
      'Only add Redshift nodes expecting faster Glue transforms',
      'Profile Glue job bookmarks, DPUs, and partition strategy',
      'Push aggregations into Redshift materialized views after load',
      'Split stages with Step Functions for clearer retries',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift scaling helps query-side performance, not Glue compute. Tune Glue resources and design; combine with warehouse-side preaggregation and orchestration as needed.',
  },
  {
    id: 'dea-ops-048',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'emr-serverless'],
    question:
      'EMR Serverless applications are managed and debugged from:',
    options: [
      'EMR Studio (submit jobs, monitor Spark UI)',
      'Amazon CloudFront distributions',
      'AWS Artifact compliance PDFs only',
      'Amazon Route 53 hosted zones',
    ],
    correctAnswers: [0],
    explanation:
      'EMR Studio is the console for serverless applications, job submission, and Spark UI debugging. The other services are unrelated to EMR job operations.',
  },
  {
    id: 'dea-ops-049',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'discovery'],
    question: 'Early data discovery for a new analytics program includes: (Select THREE.)',
    options: [
      'Identify stakeholders and candidate data sources',
      'Inventory existing data types and formats',
      'Ingest sample datasets to explore structure and quality',
      'Finalize disaster recovery runbooks before any exploration',
      'Use application logs alone to replace stakeholder interviews',
      'Deploy the full production pipeline before requirements',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Discovery clarifies what data exists and whether it fits use cases. DR hardening and full production builds come after understanding sources; logs supplement but do not replace stakeholder and catalog discovery.',
  },
  {
    id: 'dea-ops-050',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'workflow'],
    question: 'Which sequence best matches a typical AWS data analytics workflow?',
    options: [
      'Ingest, store, catalog, process, and deliver',
      'Ingest, store, curate, and deliver only',
      'Filter, ingest, store, process, and deliver without cataloging',
      'Ingest, process, deliver, and visualize with no catalog step',
    ],
    correctAnswers: [0],
    explanation:
      'AWS emphasizes cataloging between storage and processing so engines discover schema, location, and governance. Curation may overlap ingest but does not replace catalog and process stages.',
  },
  {
    id: 'dea-ops-051',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'roles'],
    question:
      'How do data engineer and data analyst roles differ in the AWS training model?',
    options: [
      'Engineers build pipelines that deliver curated data; analysts analyze it for business insights',
      'Engineers decide all business KPIs; analysts operate Spark clusters',
      'Analysts build ingestion code; engineers only create dashboards',
      'Both roles jointly code the core ingestion platform equally',
    ],
    correctAnswers: [0],
    explanation:
      'Engineers implement platforms and gather analyst requirements during discovery. Analysts focus on insights and visualizations; architects own broader system design.',
  },
  {
    id: 'dea-ops-052',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'roles'],
    question: 'Enterprise data architecture design is primarily owned by the:',
    options: [
      'Data architect',
      'Data analyst',
      'QuickSight reader session',
      'CloudTrail event rule',
    ],
    correctAnswers: [0],
    explanation:
      'Architects define target designs; engineers implement pipelines under those designs. Analysts consume curated outputs; QuickSight and CloudTrail are tools, not roles.',
  },
  {
    id: 'dea-ops-053',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'redshift', 'monitoring'],
    question:
      'Amazon Redshift cluster metrics differ from WLM queue metrics because cluster metrics show:',
    options: [
      'Overall cluster health and performance, while WLM metrics focus on query queuing and processing',
      'Per-node-only stats while WLM shows nothing about queries',
      'Serverless-only signals unavailable on provisioned clusters',
      'Node-level WLM data while cluster metrics ignore the whole cluster',
    ],
    correctAnswers: [0],
    explanation:
      'Cluster metrics summarize warehouse health; WLM queue metrics expose concurrency and queue wait for SQL workloads. Both exist for provisioned clusters; WLM reflects cluster-wide query behavior, not a single slice.',
  },
  {
    id: 'dea-ops-054',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'explain'],
    question: 'In Amazon Redshift, the EXPLAIN command is used to:',
    options: [
      'View the query plan and analyze operators such as scans and joins',
      'Run SELECT to return result rows to the client',
      'Update optimizer statistics on table columns',
      'Create B-tree indexes on fact tables',
    ],
    correctAnswers: [0],
    explanation:
      'EXPLAIN shows planned operators for tuning. SELECT retrieves data; ANALYZE updates statistics; Redshift does not use traditional index CREATE INDEX patterns like OLTP databases.',
  },
  {
    id: 'dea-ops-055',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'glue', 'monitoring'],
    question:
      'Operators need Glue ETL job logs, run metrics, and workflow health in one place for troubleshooting. Primary service:',
    options: [
      'Amazon CloudWatch',
      'AWS CloudTrail only',
      'AWS Config compliance timelines',
      'AWS CloudFormation stack events',
    ],
    correctAnswers: [0],
    explanation:
      'Glue publishes job and workflow telemetry to CloudWatch for live monitoring. CloudTrail audits API calls but is not the primary execution dashboard; Config tracks resource configuration drift; CloudFormation provisions infrastructure—it does not stream Spark executor logs.',
  },
  {
    id: 'dea-ops-056',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'cost'],
    question:
      'Which AWS offerings help optimize and govern spend on data platform resources? (Select THREE.)',
    options: [
      'AWS Cost Explorer',
      'AWS Budgets',
      'AWS Auto Scaling (where applicable to compute)',
      'AWS CloudTrail as the primary cost analytics tool',
      'Amazon Aurora as a billing dashboard',
      'Amazon ECS as a dedicated cost optimizer service',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Cost Explorer visualizes usage trends; Budgets alert on thresholds; Auto Scaling right-sizes capacity. CloudTrail audits API activity; Aurora and ECS are compute/data services—not AWS cost management products.',
  },
  {
    id: 'dea-ops-057',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'roles', 'personas'],
    question:
      'Match personas: fosters a data-driven culture and AI strategy; designs pipeline stages and schemas; extracts statistical/ML insight. Order:',
    options: [
      'Chief data officer, data architect, data scientist',
      'Data analyst, Glue crawler, CloudTrail',
      'QuickSight reader, S3 bucket, Lambda',
      'Data engineer, NAT gateway, Cost Explorer',
    ],
    correctAnswers: [0],
    explanation:
      'The CDO owns culture, quality, governance, and strategy. Architects design pipelines, integration, and catalog schemas. Scientists apply statistics and ML. Engineers implement and operate pipelines; analysts consume curated data for business questions.',
  },
  {
    id: 'dea-ops-058',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'orchestration'],
    question:
      'The course groups AWS Glue, CodePipeline, SageMaker Pipelines, and AWS Batch as:',
    options: [
      'Purpose-built orchestrators for specific use cases',
      'General-purpose orchestrators like Step Functions and MWAA',
      'S3 storage classes',
      'Redshift distribution styles',
    ],
    correctAnswers: [0],
    explanation:
      'Purpose-built orchestrators target one domain (Glue for data integration, CodePipeline for CI/CD, SageMaker Pipelines for ML, Batch for batch compute). Step Functions and MWAA are general-purpose workflow engines.',
  },
  {
    id: 'dea-ops-059',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq', 'dqdl'],
    question:
      'Glue Data Quality can evaluate catalog tables at rest and filter bad rows inside ETL jobs in transit. Language used to declare those rules:',
    options: [
      'Data Quality Definition Language (DQDL), with recommended or custom rules',
      'Amazon States Language only',
      'WLM JSON on the Glue job',
      'VPC flow log syntax',
    ],
    correctAnswers: [0],
    explanation:
      'DQDL expresses Glue Data Quality rules. You can accept recommendations or write custom rules, then evaluate at rest in the catalog or in transit in ETL. ASL is Step Functions; WLM is Redshift; VPC flow logs are network telemetry.',
  },
  {
    id: 'dea-ops-060',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue', 'pii'],
    question:
      'A Glue job must detect and mask PII across many countries during ETL. Transform called out in the course:',
    options: [
      'Detect PII transform (hundreds of entity types plus custom regex)',
      'Redshift VACUUM as a PII scanner',
      'S3 Inventory as the only PII detector',
      'CloudFront signed cookies for column masking',
    ],
    correctAnswers: [0],
    explanation:
      'Glue Detect PII can detect, mask, or remove sensitive entities (on the order of 250 types from 50+ countries) and custom regex identities while data is processed.',
  },
  {
    id: 'dea-ops-061',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'ato'],
    question:
      'A new Redshift table should get sort and distribution keys without a DBA picking them. Capability:',
    options: [
      'Automatic table optimization (ATO) observing queries and altering keys',
      'Manual DISTSTYLE EVEN forever with no Advisor',
      'Deleting sort keys to force full scans',
      'Glue crawlers writing Redshift sort keys',
    ],
    correctAnswers: [0],
    explanation:
      'ATO continuously watches how queries use tables and applies sort and distribution keys automatically, typically within hours, with minimal query impact. Glue crawlers catalog data; they do not set Redshift keys.',
  },
  {
    id: 'dea-ops-062',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'wlm'],
    question:
      'Redshift automatic WLM (recommended) differs from manual WLM because automatic WLM:',
    options: [
      'Dynamically allocates memory and concurrency, and can prioritize shorter queries with query priority settings',
      'Always uses eight fixed slots you must size by hand',
      'Disables concurrency scaling permanently',
      'Replaces SQL with MapReduce',
    ],
    correctAnswers: [0],
    explanation:
      'Automatic WLM sets concurrency to Auto, allocates memory dynamically, can send work to concurrency scaling, and supports priorities (Lowest through Highest). Manual WLM uses static queues and is discouraged for changing workloads.',
  },
  {
    id: 'dea-ops-063',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'automv'],
    question:
      'Redshift should create and drop hidden materialized views based on whether they help latency versus refresh cost. Feature:',
    options: [
      'Automated materialized views (AutoMV)',
      'STL_QUERY only',
      'S3 Intelligent-Tiering on RMS',
      'MSK Connect AutoMQ',
    ],
    correctAnswers: [0],
    explanation:
      'AutoMV uses ML to create materialized views when they should improve latency, keep them fresh, and drop them when they no longer pay off. STL views are diagnostics; Intelligent-Tiering and MSK are unrelated.',
  },
  {
    id: 'dea-ops-064',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'materialized-views'],
    question:
      'Users keep writing SQL against base tables, but Redshift should automatically run equivalent logic against an existing materialized view. Optimizer feature:',
    options: [
      'Automatic query rewrite to the materialized view',
      'Mandatory rewrite of every dashboard to UNLOAD',
      'DISTSTYLE KEY on the leader node only',
      'Glue job bookmarks inside Redshift',
    ],
    correctAnswers: [0],
    explanation:
      'The optimizer can rewrite queries that hit the same base tables as a materialized view so they read the precomputed result, improving performance and reducing cost without changing user SQL.',
  },
  {
    id: 'dea-ops-065',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift-advisor'],
    question:
      'Operations wants ranked, cluster-specific advice on COPY file layout, WLM memory, missing VACUUM, and idle clusters to pause. Tool:',
    options: [
      'Amazon Redshift Advisor',
      'AWS Artifact as a query tuner',
      'Amazon Macie sort-key recommendations',
      'Route 53 health checks on SQL',
    ],
    correctAnswers: [0],
    explanation:
      'Advisor analyzes cluster metrics and recommends ingestion, query/WLM, table (sort/dist, vacuum/analyze), and cost actions such as pausing clusters idle for 7 days. Artifact, Macie, and Route 53 do not tune Redshift tables.',
  },
  {
    id: 'dea-ops-066',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'redshift', 'data-api'],
    question:
      'A Lambda function should run Redshift SQL without keeping a JDBC connection open. Interface:',
    options: [
      'Amazon Redshift Data API (asynchronous HTTP, Secrets Manager or temporary credentials)',
      'Permanent superuser password in the Lambda zip',
      'Direct SSH to a compute node',
      'S3 Select against RMS as SQL',
    ],
    correctAnswers: [0],
    explanation:
      'The Data API exposes a secure HTTP endpoint for SQL (SELECT, DML, DDL, COPY, UNLOAD) without persistent connections; calls are asynchronous. Embedding passwords, SSH to nodes, and S3 Select are not the Data API.',
  },
  {
    id: 'dea-ops-067',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'udf'],
    question:
      'A Redshift SQL query must call out to a Python Lambda that masks emails using a third-party library. Function type:',
    options: [
      'Lambda UDF (external scalar function)',
      'SQL UDF only, which cannot leave the cluster',
      'Glue Python shell registered as a DISTKEY',
      'Firehose dynamic partitioning inside SELECT',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda UDFs run custom code (Java, Python, and other Lambda languages) as part of SQL and can reach other AWS services. SQL UDFs stay inside Redshift SELECT logic and cannot use those network/library capabilities.',
  },
  {
    id: 'dea-ops-068',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'stored-procedures'],
    question:
      'Wrap a multi-statement load, transform, and truncate in one transactional Redshift routine without granting table INSERT to analysts. Object and dialect:',
    options: [
      'Stored procedure in PL/pgSQL, granted EXECUTE instead of table writes',
      'A materialized view that truncates facts',
      'An S3 lifecycle rule in SQL',
      'A Kinesis iterator in PL/SQL on Oracle only',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift stored procedures use PL/pgSQL (variables, loops, transactions, SECURITY DEFINER patterns) so callers can run privileged work without direct table grants. MVs do not encapsulate truncate/load scripts.',
  },
  {
    id: 'dea-ops-069',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift-ml'],
    question:
      'Analysts should train and run a classification model with SQL against warehouse tables without exporting data to a separate ML cluster. Feature:',
    options: [
      'Amazon Redshift ML (CREATE MODEL and prediction in SQL)',
      'Amazon Rekognition as the warehouse model trainer',
      'Amazon Polly text-to-speech on fact tables',
      'AWS Snowball as an in-database ML engine',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift ML creates, trains, evaluates, and deploys models from SQL so scoring stays in the warehouse. Rekognition, Polly, and Snowball are not in-database ML for Redshift tables.',
  },
  {
    id: 'dea-ops-070',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'redshift', 'sys-views'],
    question:
      'A data engineer needs SQL-accessible history of user queries, including COPY and CTAS text, inside Redshift. Views:',
    options: [
      'SYS_QUERY_HISTORY and SYS_QUERY_TEXT (plus SYS_CONNECTION_LOG / SYS_USERLOG for sessions and users)',
      'AWS Artifact PDF attachments queried with SQL',
      'Route 53 query logs as warehouse STL',
      'S3 Inventory as SYS_QUERY_TEXT',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift system views such as SYS_QUERY_HISTORY and SYS_QUERY_TEXT expose query status, type, and SQL (including COPY, UNLOAD, VACUUM, ANALYZE, CTAS). Connection and user logs have matching SYS views. Artifact and DNS logs are not these views.',
  },
  {
    id: 'dea-ops-071',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'cost', 'savings-plans'],
    question:
      'Beyond Cost Explorer and Budgets, which commitment discount the course lists for steady compute on data platforms?',
    options: [
      'Savings Plans (and related reserved capacity where applicable)',
      'Making all S3 buckets public to lower request prices',
      'Disabling encryption to reduce KMS cost only',
      'Turning off CloudWatch to hide spend',
    ],
    correctAnswers: [0],
    explanation:
      'Savings Plans (and reserved instances where they still apply) reduce cost for predictable compute. Public buckets, dropping encryption, and disabling monitoring are not cost-optimization practices taught in the course.',
  },
  {
    id: 'dea-ops-072',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'encode'],
    question:
      'Default and recommended settings for new Redshift tables for sort keys, column encoding, and distribution:',
    options: [
      'SORTKEY AUTO, ENCODE AUTO, DISTSTYLE AUTO',
      'No sort key, RAW encoding, DISTSTYLE ALL on every fact table',
      'Interleaved sort keys on all tables with no AUTO option',
      'Manual BYTEDICT on every column including uncompressed keys',
    ],
    correctAnswers: [0],
    explanation:
      'The course treats AUTO sort keys, ENCODE AUTO, and DISTSTYLE AUTO as the default best practice so Redshift can adjust as data and queries change. ALL on large facts and raw encoding everywhere are anti-patterns.',
  },
  {
    id: 'dea-ops-073',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'pivot'],
    question:
      'A Redshift fact table stores one revenue row per product category and quarter. Analysts need one row per category with Q1–Q4 as columns. Exam-tested SQL pattern:',
    options: [
      'GROUP BY category with SUM(CASE WHEN quarter = \'Q1\' THEN revenue END) (and the same for Q2–Q4)',
      'SUM(revenue) OVER (PARTITION BY quarter) then GROUP BY category to manufacture quarter columns',
      'PostgreSQL tablefunc CROSSTAB as native Redshift syntax',
      'Rely on a window function alone, which always emits new physical columns',
    ],
    correctAnswers: [0],
    explanation:
      'Conditional aggregation with CASE (or FILTER) and GROUP BY is the standard Redshift way to reshape long facts into wide reports. PARTITION BY computes windowed values but does not pivot into Q1–Q4 columns. CROSSTAB is a PostgreSQL extension, not Redshift.',
  },
  {
    id: 'dea-ops-074',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'dynamodb', 'idempotent'],
    question:
      'A Glue Spark job writes curated rows to DynamoDB and can be retried after a scheduler double-fire. How do you keep retries from creating duplicate items?',
    options: [
      'Use the natural business key as the partition key so a retry PutItem overwrites the same item with the same values',
      'Generate a new UUID partition key on every run so each execution inserts a unique row',
      'Append a run timestamp to the key so each retry is a new item',
      'Increment a version attribute as a new item for every retry to keep full history as the primary copy',
    ],
    correctAnswers: [0],
    explanation:
      'Idempotent loads reuse a stable business key so a second write replaces the same item. Random UUIDs, timestamps, and versioned new items create duplicates instead of making retries safe.',
  },
  {
    id: 'dea-ops-075',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'athena', 'spark-notebook'],
    question:
      'Analysts must explore a Glue-cataloged lake with PySpark, Matplotlib, and Spark SQL in a serverless notebook. Athena SQL workgroups keep failing because the editor is SQL-only. Exam skill 3.2.4:',
    options: [
      'Create an Athena workgroup that uses the Apache Spark engine and open an Athena Spark notebook (engine type cannot be changed later)',
      'Reuse the existing Athena SQL workgroup—the query editor runs PySpark if you prefix cells with %%spark',
      'Athena SQL views are always queryable from Spark notebooks, so stay on the SQL workgroup',
      'Amazon QuickSight SPICE is the Spark notebook runtime',
    ],
    correctAnswers: [0],
    explanation:
      'Spark exploration needs a Spark-enabled Athena workgroup and notebook session. SQL workgroups cannot run the notebook editor; Spark workgroups cannot use the SQL query editor; SQL views are not cross-engine compatible with Spark.',
  },
  {
    id: 'dea-ops-076',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'athena', 'sql-views'],
    question:
      'A curated Athena SQL view is used by QuickSight. A data scientist wants the same view inside an Athena Spark notebook. Result:',
    options: [
      'It will not work: Athena SQL views are not queryable from Athena for Spark (and the reverse is also unsupported)',
      'It always works because both engines share one view catalog',
      'Spark automatically rewrites the SQL view into a DataFrame with no extra work',
      'Enable Cross-engine views in the Athena workgroup checkbox',
    ],
    correctAnswers: [0],
    explanation:
      'AWS documents that cross-engine view queries are not supported. Recreate the logic in Spark (temp view / DataFrame) or query the underlying tables, and keep SQL views for SQL workgroups and QuickSight.',
  },
  {
    id: 'dea-ops-077',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'sampling'],
    question:
      'A 40 TB fact table is 95% US rows. You need a cheap null-rate estimate that still represents EU and APAC. Sampling technique (skill 3.4.4):',
    options: [
      'Stratified sampling by region (or TABLESAMPLE / reservoir sampling per stratum) so rare regions are not missed',
      'A single LIMIT 1000 with no ORDER, which is guaranteed representative of every region',
      'Full table COUNT(*) on every column, because sampling is out of scope for DEA-C01',
      'Delete 99% of EU rows first so the remaining sample is smaller',
    ],
    correctAnswers: [0],
    explanation:
      'Simple random or LIMIT samples are biased when strata are imbalanced. Stratified (or per-partition) sampling estimates quality without a petabyte scan. The exam lists sampling as a data-quality skill.',
  },
  {
    id: 'dea-ops-078',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'amazon-q', 'quicksight'],
    question:
      'Executives ask “show returns by region last quarter” in plain English and expect a chart, not a Glue script. Visualization path:',
    options: [
      'Amazon Q in QuickSight against a prepared dataset (or topic) that already maps to Athena/Redshift/RDS',
      'Amazon Q data integration in Glue, which renders executive dashboards',
      'Amazon Kendra as the BI visualization engine',
      'Amazon Managed Grafana as the only in-scope way to chart warehouse facts for executives',
    ],
    correctAnswers: [0],
    explanation:
      'Q in QuickSight is conversational analytics/visualization. Q in Glue generates ETL. Kendra searches documents. Grafana is operations dashboards over metrics/logs, not the primary executive BI tool on the exam.',
  },
  {
    id: 'dea-ops-079',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'grafana', 'cloudwatch'],
    question:
      'The platform team already lives in Grafana and needs one dashboard of Glue, EMR, and Redshift CloudWatch metrics across accounts. In-scope service:',
    options: [
      'Amazon Managed Grafana with CloudWatch as a data source (IAM to read metrics/logs; Organizations/cross-account when required)',
      'Amazon QuickSight SPICE as a drop-in Grafana replacement for SRE metrics',
      'AWS Glue DataBrew as a metrics time-series store',
      'Amazon Kendra as the operations dashboard',
    ],
    correctAnswers: [0],
    explanation:
      'Managed Grafana is on the DEA-C01 in-scope list for visualizing operational metrics, including CloudWatch. QuickSight is BI; DataBrew prepares datasets; Kendra is search.',
  },
  {
    id: 'dea-ops-080',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'databrew', 'glue-dq'],
    question:
      'Analysts who do not write Spark need visual profiling and point-and-click quality rules. Engineers need the same checks inside Glue ETL with a rules language. Split (skills 3.1.6 / 3.4.2):',
    options: [
      'AWS Glue DataBrew (and SageMaker Data Wrangler / Unified Studio) for visual prep; Glue Data Quality DQDL in jobs or on catalog tables for engineers',
      'DataBrew DQDL inside Spark executors as the only option',
      'Amazon Macie rulesets as Glue Data Quality',
      'Amazon Managed Grafana as a data-quality rules engine',
    ],
    correctAnswers: [0],
    explanation:
      'v1.1 calls out DataBrew and SageMaker Unified Studio for preparing data, and DataBrew/Glue quality rules for checks. DQDL is Glue Data Quality, not DataBrew. Macie finds PII; Grafana graphs metrics.',
  },
  {
    id: 'dea-ops-081',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'amazon-q', 'bedrock'],
    question:
      'A custom app must turn “top 10 customers by spend in 2024” into SQL against Redshift or Glue Catalog tables, without building a QuickSight topic. Pattern:',
    options: [
      'Amazon Bedrock Knowledge Bases structured-data retrieval (text-to-SQL on Redshift or the Glue Data Catalog)',
      'Amazon Q in QuickSight embedded as the only text-to-SQL API for custom apps',
      'Amazon Kendra generating Redshift COPY statements',
      'Amazon Athena Spark notebooks as a required always-on SQL service',
    ],
    correctAnswers: [0],
    explanation:
      'Bedrock Knowledge Bases can convert natural language to SQL over supported structured stores without embedding the data. Q in QuickSight is the BI UI path. Kendra does not author warehouse SQL. Spark notebooks are interactive compute, not a text-to-SQL API.',
  },
  {
    id: 'dea-ops-082',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'cicd', 'codebuild'],
    question:
      'A failing Glue job must not reach prod: lint, unit tests, and a Data Quality score gate run on every commit. Pipeline shape:',
    options: [
      'CodeBuild in a CodePipeline stage (tests + DQ check), then deploy the Glue job/script only if the stage succeeds',
      'Push directly to the production Glue job from a laptop because CodeBuild cannot invoke tests',
      'Amazon EventBridge Scheduler as a test runner with no artifacts',
      'Amazon SNS as the build system that compiles PySpark',
    ],
    correctAnswers: [0],
    explanation:
      'CodeBuild is the in-scope build/test compute; CodePipeline orchestrates promote-on-green. EventBridge schedules; SNS notifies. Skipping CI is the anti-pattern the programming-concepts task tests.',
  },
  {
    id: 'dea-ops-083',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq'],
    question:
      'A Glue ETL job must keep rows only when ship_date > order_date and delivery_date > ship_date, and write failures to a second S3 prefix. Most cost-effective in-job check:',
    options: [
      'AWS Glue Data Quality (custom DQDL comparing the three columns) inside the job, then route failed rows to the reject prefix',
      'AWS Glue DataBrew DATEDIFF as a required extra preparation product for this Spark job',
      'A separate Athena query after the job as the only way to compare columns',
      'A Glue crawler filter, which does not evaluate row-level date inequalities',
    ],
    correctAnswers: [0],
    explanation:
      'Evaluate Data Quality in the Glue job applies custom rules and can split passing vs failing rows without standing up DataBrew or a second Athena workflow. Crawlers catalog files; they do not enforce those predicates.',
  },
  {
    id: 'dea-ops-084',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq', 'datazone'],
    question:
      'Table-level Glue Data Quality scores must appear in Amazon DataZone for Glue-cataloged S3 assets. Configuration that DataZone can ingest:',
    options: [
      'A scheduled DQDL ruleset on the Glue table, a DataZone project with a Glue data source, and data-quality enabled on that source',
      'Only Evaluate Data Quality inside ETL, with the DataZone source pointed at Redshift',
      'A Redshift data source in DataZone as the place Glue table scores are published',
      'ETL-only rules with no scheduled catalog ruleset and no Glue source in the project',
    ],
    correctAnswers: [0],
    explanation:
      'DataZone pulls Glue Data Quality results for Glue data sources when DQ is enabled. A scheduled catalog ruleset produces the table-level scores the portal shows. In-ETL Evaluate is a different path; a Redshift source does not publish those Glue table scores.',
  },
  {
    id: 'dea-ops-085',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'glue', 'small-files'],
    question:
      'Glue Spark is slow on millions of 1 KB JSON objects before Parquet-to-Redshift. In-job grouping that avoids a separate compaction fleet:',
    options: [
      'DynamicFrame groupFiles / groupSize so many tiny objects become larger in-memory partitions',
      'COPY the 1 KB JSON files straight into Redshift and transform there as the first optimization',
      'Stand up EMR only to concatenate files when Glue grouping is available',
      'A Lambda that rewrites every object into another 1 KB file',
    ],
    correctAnswers: [0],
    explanation:
      'Glue can group small S3 inputs into larger splits for Spark, which is the intended cheap fix for this pattern. COPY of millions of tiny JSON files and a second EMR cluster add cost; rewriting 1 KB to 1 KB does nothing.',
  },
  {
    id: 'dea-ops-086',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'sql'],
    question:
      'A 100-column Redshift table must be selected in full except company_id and unique_system_id. Syntax Redshift supports:',
    options: [
      'SELECT * EXCLUDE company_id, unique_system_id FROM schema.table',
      'SELECT * NOT IN (company_id, unique_system_id) FROM schema.table',
      'SELECT * EXCEPT company_id, unique_system_id FROM schema.table as native Redshift',
      'SELECT * TRUNCATE company_id, unique_system_id FROM schema.table',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift implements SELECT * EXCLUDE column_list for wide tables. NOT IN, EXCEPT, and TRUNCATE are not column-exclusion clauses in this context (EXCEPT is set-difference; TRUNCATE removes rows).',
  },
  {
    id: 'dea-ops-087',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'emr', 'spark', 'yarn'],
    question:
      'An EMR Spark app in YARN cluster mode fails. The driver stderr is needed. Where the driver actually ran:',
    options: [
      'The ApplicationMaster (first YARN container); open that container log from the persistent application UI / Spark UI',
      'YARN ResourceManager logs only, which always include full driver stdout',
      'EMR step logs in S3 exclusively, which replace YARN container logs for cluster-mode Spark',
      'SSH to the primary node Spark history server as the only place cluster-mode driver logs exist',
    ],
    correctAnswers: [0],
    explanation:
      'In cluster mode the driver lives in the ApplicationMaster container, so the first YARN container log is the driver log. Persistent application UIs expose those containers. Client-mode mental models (driver on the primary) do not apply.',
  },
  {
    id: 'dea-ops-088',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq', 'eventbridge', 'sns'],
    question:
      'A daily report sometimes runs before the S3 load finishes. Incomplete catalog datasets must SNS-alert with the least new infrastructure:',
    options: [
      'Glue Data Quality completeness rules on the catalog tables, Glue workflows (or EventBridge) on failed evaluations, EventBridge to the existing SNS topic',
      'A new MWAA environment whose only job is to email SNS',
      'A dedicated EMR cluster running Spark SQL quality checks plus custom Step Functions email',
      'Custom Lambda SQL plus a Step Functions state machine you operate solely for this alert',
    ],
    correctAnswers: [0],
    explanation:
      'Glue Data Quality can evaluate catalog tables and emit EventBridge events on failure; a rule forwards those to SNS. Standing up MWAA, EMR, or a custom Lambda/SFN stack is more operational overhead for the same signal.',
  },
  {
    id: 'dea-ops-089',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'redshift', 'upsert'],
    question:
      'A Glue job that COPY/inserts into Redshift creates duplicates on rerun. Requirement is update-in-place, no extra Spark dropDuplicates:',
    options: [
      'Land into a staging table, then SQL MERGE (or UPDATE matching keys plus INSERT of new keys) into the target',
      'Spark dropDuplicates() before write, which still inserts a second copy if the target already has the business key',
      'Glue ResolveChoice, which is a type-choice transform, not a warehouse upsert',
      'Load into MySQL, upsert there, then copy back to Redshift as the default pattern',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift upserts are staging plus MERGE/update-insert on business keys. dropDuplicates only helps inside one Spark DataFrame. ResolveChoice maps types. A MySQL detour is unnecessary.',
  },
  {
    id: 'dea-ops-090',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift-ml', 'sagemaker'],
    question:
      'Inventory SQL in Redshift must both train local models and call an existing SageMaker real-time endpoint. Pair: (Select TWO.)',
    options: [
      'Amazon Redshift ML (CREATE MODEL) for in-warehouse training and prediction',
      'SQL that invokes the remote SageMaker endpoint for live scores',
      'SageMaker Autopilot as a Redshift dashboard builder',
      'UNLOAD the warehouse to S3 as a file system instead of scoring in SQL',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Redshift ML trains and predicts from SQL and can also invoke a SageMaker endpoint. Autopilot does not replace QuickSight/Redshift BI. Treating Redshift as a file archive is not the scoring path.',
  },
  {
    id: 'dea-ops-091',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'step-functions', 'lambda', 'cloudwatch'],
    question:
      'Step Functions logging is FATAL only. A Lambda state named preprocessing throws. Where the stack trace is:',
    options: [
      'The Lambda log group /aws/lambda/preprocessing (or whatever the function name is)',
      'Only Step Functions TaskFailed in /aws/vendedlogs/states, which at FATAL includes the full Lambda traceback',
      'CloudTrail SendTaskFailure in CloudTrail/logs/preprocessing',
      'TaskSucceeded in the states log group, because failures are stored as successes at FATAL',
    ],
    correctAnswers: [0],
    explanation:
      'FATAL Step Functions logs keep high-level state status, not the Lambda exception body. Lambda always writes invocation logs to /aws/lambda/<function-name>. CloudTrail API history is not the function stderr.',
  },
  {
    id: 'dea-ops-092',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'eventbridge', 'step-functions', 'sns'],
    question:
      'Dozens of Step Functions pipelines must SMS/email on every success or failure in real time, without custom notification Lambdas:',
    options: [
      'EventBridge rules on Step Functions status-change events, target Amazon SNS',
      'Have each state machine write a marker object to S3 and use S3 notifications as the only status bus',
      'CloudTrail → SNS as the primary “state machine succeeded” channel',
      'Lambda writing notify.txt to S3 at the end of every branch',
    ],
    correctAnswers: [0],
    explanation:
      'Step Functions emits execution-status events to EventBridge. A rule can match SUCCEEDED/FAILED and publish SNS. S3 markers and CloudTrail add lag or miss the native event.',
  },
  {
    id: 'dea-ops-093',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'lambda', 's3-events', 'sns'],
    question:
      'A transform runs under one minute whenever a user uploads one S3 object per hour, then emails the engineer. Most operationally efficient:',
    options: [
      'S3 event notification → Lambda (transform) → publish Amazon SNS; subscribe email to the topic',
      'A small EC2 instance polling the bucket on a cron',
      'An ECS task polling S3 every minute',
      'A standing EMR cluster plus EMRFS for a one-file-per-hour job',
    ],
    correctAnswers: [0],
    explanation:
      'Event-driven Lambda matches sparse, short work and can publish SNS for email. Polling EC2/ECS/EMR leaves compute running between hourly files.',
  },
  {
    id: 'dea-ops-094',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq', 'eventbridge'],
    question:
      'Glue Data Quality failed a completeness rule on a catalog table. Native next hop to paging without a custom poller:',
    options: [
      'The evaluation result event on Amazon EventBridge, which a rule can send to SNS, Chatbot, or a Lambda',
      'Only CloudTrail management events, which include row-level completeness scores',
      'Amazon Macie findings, which are Glue DQ completeness results',
      'S3 Inventory as the Data Quality event bus',
    ],
    correctAnswers: [0],
    explanation:
      'Glue Data Quality publishes evaluation outcomes to EventBridge. CloudTrail records API calls, not dataset completeness. Macie is PII discovery. S3 Inventory lists objects.',
  },
  {
    id: 'dea-ops-095',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'firehose', 'cloudwatch', 'splunk'],
    question:
      'VPC flow logs already land in CloudWatch Logs and must reach Splunk in near real time with the least new compute:',
    options: [
      'A CloudWatch Logs subscription filter to a Kinesis Data Firehose delivery stream whose destination is the Splunk HTTP Event Collector',
      'A Kinesis Data Streams application you operate as the Splunk sink, plus a Lambda that tails log groups',
      'Firehose to Splunk but with a Lambda that polls CloudWatch Logs instead of a subscription filter',
      'Kinesis Data Streams as a Splunk destination natively, the way Firehose HTTP endpoints work',
    ],
    correctAnswers: [0],
    explanation:
      'Subscription filters can push log events to Firehose; Firehose has a native Splunk destination. That avoids Lambda pollers and Kinesis shard management. Data Streams is not a drop-in Splunk HEC destination.',
  },
  {
    id: 'dea-ops-096',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'redshift', 'query-editor'],
    question:
      'A tested Redshift stored procedure on a non-critical table must run once a day. Cheapest scheduler:',
    options: [
      'Amazon Redshift Query Editor v2 scheduled query that CALL the procedure',
      'Lambda cron that opens JDBC only to sleep until the next day',
      'An EC2 Spot instance running the Data API in a loop',
      'A Glue Python shell job whose only work is CALL',
    ],
    correctAnswers: [0],
    explanation:
      'Query Editor v2 can schedule SQL (including CALL) inside Redshift with no extra compute fleet. Lambda, EC2, and Glue all add billed runtimes you do not need for a daily procedure.',
  },
  {
    id: 'dea-ops-097',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq', 'dqdl'],
    question:
      'Glue Data Quality must fail when fewer than 90% of Email values look like addresses (nulls count as invalid). DQDL shape:',
    options: [
      'ColumnValues "Email" matches "[%@%.%]" with threshold > 0.9',
      'Uniqueness "Email" matches "[%@%.%]" with threshold > 0.9 (Uniqueness is distinctness, not format)',
      'ColumnValues "Email" matches "[%@%.%]" with threshold > 0.1 (that passes when only 11% are valid)',
      'UniqueValueRatio "Email" matches "[%@%.%]" with threshold > 0.1',
    ],
    correctAnswers: [0],
    explanation:
      'ColumnValues tests a column against a regex. Threshold > 0.9 means more than 90% must match; nulls fail a positive match. Uniqueness/UniqueValueRatio measure distinct values, not email syntax.',
  },
  {
    id: 'dea-ops-098',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'glue', 'bookmark'],
    question:
      'A Glue Spark job has bookmarks on, max concurrency 1, and writes Redshift fine, but every run re-reads old S3 objects. Most likely miss:',
    options: [
      'The script never calls job.commit(), so bookmark state is not saved after a successful run',
      'Max concurrency of 1, which is documented as the reason bookmarks always replay',
      'Missing s3:GetObjectAcl, which AWS lists as required for bookmark checkpoints',
      'An older Glue version number in the job, which disables bookmarks even when enabled',
    ],
    correctAnswers: [0],
    explanation:
      'Bookmarks persist only when the job commits bookmark state (job.commit() in the script). Concurrency 1 is the safe setting, not the bug. ACL and “old version” are distractors for this symptom.',
  },
  {
    id: 'dea-ops-099',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'cloudwatch', 'subscription-filter'],
    question:
      'Near-real-time shipping of an existing CloudWatch log group to another service should start with:',
    options: [
      'A CloudWatch Logs subscription filter (Firehose, Lambda, or OpenSearch as the supported destination type)',
      'A Lambda that GetLogEvents in a tight poll loop as the default',
      'Downloading the log group nightly with the console export and emailing it',
      'Enabling VPC Flow Logs a second time instead of a filter on the group that already exists',
    ],
    correctAnswers: [0],
    explanation:
      'Subscription filters stream ingested log events to Firehose, Lambda, or OpenSearch. Polling GetLogEvents and console exports add lag and ops. Flow Logs are a source, not a generic shipper for an arbitrary log group.',
  },
  {
    id: 'dea-ops-100',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq', 'api'],
    question:
      'One thousand Glue Data Quality rulesets must change after a policy update. Least ops:',
    options: [
      'Call UpdateDataQualityRuleset (for example from Lambda) for each named ruleset',
      'A Glue ETL job per table that rewrites rules in Spark',
      'An EMR cluster whose only job is to edit DQDL',
      'One thousand manual console edits in the Data Catalog',
    ],
    correctAnswers: [0],
    explanation:
      'Glue Data Quality exposes APIs such as UpdateDataQualityRuleset. Automating that call scales; per-table ETL, EMR, and console clicks do not.',
  },
  {
    id: 'dea-ops-101',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'redshift', 'stl'],
    question:
      'Redshift’s optimizer flagged nested loops, missing stats, or bad distribution. System view that logs those alerts:',
    options: [
      'STL_ALERT_EVENT_LOG',
      'STL_USAGE_CONTROL',
      'STL_QUERY_METRICS as the alert board',
      'STL_PLAN_INFO as the anomaly ticker',
    ],
    correctAnswers: [0],
    explanation:
      'STL_ALERT_EVENT_LOG records optimizer warnings that often predict slow queries. The other STL views cover usage limits, metrics, or plan fragments, not that alert stream.',
  },
  {
    id: 'dea-ops-102',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'eventbridge', 'dlq'],
    question:
      'EventBridge Scheduler shows a high FailedInvocations count for one Glue workflow. First place to read ERROR_CODE / ERROR_MESSAGE:',
    options: [
      'The schedule’s dead-letter queue (failed deliveries after retries)',
      'EventBridge archive/replay as the Scheduler DLQ',
      'Lowering maximum retries so failures disappear from metrics',
      'Raising maximum event age instead of inspecting the failed payload',
    ],
    correctAnswers: [0],
    explanation:
      'Scheduler DLQs keep undeliverable events plus target error fields. Archive/replay is a different EventBridge feature. Changing retry policy hides or delays the failure; it does not explain it.',
  },
  {
    id: 'dea-ops-103',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'redshift', 'stored-procedure'],
    question:
      'A Redshift orders table must drop stale keys and insert the latest staging rows in one controlled refresh consumers can see:',
    options: [
      'A Redshift stored procedure that DELETE matching stale rows and INSERT from staging (or MERGE) in a transaction',
      'Redshift Spectrum DELETE/INSERT as the in-cluster DML engine',
      'UNLOAD both tables to S3, edit with Athena, COPY back as the default upsert',
      'Athena federated queries that delete warehouse rows',
    ],
    correctAnswers: [0],
    explanation:
      'In-cluster DML belongs in a stored procedure (or MERGE) so the orders table stays consistent. Spectrum/Athena/S3 round-trips are not the warehouse upsert path.',
  },
  {
    id: 'dea-ops-104',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'glue', 'vpc', 's3-endpoint'],
    question:
      'A Glue job in a VPC fails with an S3 gateway endpoint error. Connection and IAM look fine. Routing fix:',
    options: [
      'Put the S3 gateway endpoint prefix-list route in the route table of the subnets Glue uses',
      'Open inbound security-group rules to the gateway endpoint (gateway endpoints are not ENIs you ingress)',
      'A bucket policy as the replacement for a missing route',
      'An FQDN in the Glue connection string as a substitute for the route table',
    ],
    correctAnswers: [0],
    explanation:
      'S3 gateway endpoints work by adding routes. Glue ENIs in subnets without that route cannot reach S3 privately. Security groups, extra bucket policies, and FQDNs do not install the route.',
  },
  {
    id: 'dea-ops-105',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'athena', 'workgroups'],
    question:
      'Several Athena use cases in one account need isolated query history and IAM that can target each workload. Control:',
    options: [
      'An Athena workgroup per use case, tags on the workgroup, IAM policies that allow workgroup access by tag',
      'A separate S3 bucket per user as the only isolation for query history',
      'One IAM role “for Athena” shared by every team with no workgroups',
      'A Glue Catalog resource policy as a substitute for Athena workgroup IAM',
    ],
    correctAnswers: [0],
    explanation:
      'Workgroups split saved queries, history, and engine settings. Tag-based IAM on workgroups scopes teams in the same account. Buckets and catalog policies do not isolate Athena’s query history.',
  },
  {
    id: 'dea-ops-106',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'firehose', 'cloudwatch'],
    question:
      'Only matching CloudWatch Logs should reach S3 via Firehose, converted to the analysts’ format, without S3-side rewrites:',
    options: [
      'A log-group subscription filter (filter pattern) whose destination is Firehose, plus a Firehose Lambda transform before S3',
      'S3 bucket policies that drop logs by timestamp after Firehose already wrote them',
      'A subscription filter that “monitors” Firehose instead of sending to it',
      'Tags on log groups as Firehose’s native include filter',
    ],
    correctAnswers: [0],
    explanation:
      'Subscription filter patterns select events; Firehose Lambda transforms them in flight. Bucket policies, inverted filters, and tags do not provide that managed select-and-convert path.',
  },
  {
    id: 'dea-ops-107',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'glue', 'spark', 'shuffle'],
    question:
      'A Glue Spark job fails with “No space left on device.” You suspect shuffle skew. Cost-effective pair: (Select TWO.)',
    options: [
      'Spark UI and Glue metrics to confirm executor disk spill and skew',
      'Enable --write-shuffle-files-to-s3 and salt hot keys so shuffle blocks leave local disk',
      'Only add larger workers (vertical scale) as the documented shuffle-disk fix',
      'CloudWatch error logs as a map of per-partition skew equivalent to the Spark UI',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Shuffle files fill executor disks. Glue can spill shuffle to S3; salting spreads skewed keys. The Spark UI shows the skew. Vertical scale and CloudWatch lines alone do not move shuffle off disk.',
  },
  {
    id: 'dea-ops-108',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'step-functions', 'emr'],
    question:
      'An EMR ETL DAG must be orchestrated with the lowest standing cost (no Airflow environment):',
    options: [
      'AWS Step Functions calling EMR steps, billed per state transition',
      'Amazon MWAA as the cheaper serverless default',
      'EventBridge as a full DAG engine with EMR retries and branching',
      'Glue workflows running EMR clusters as native Glue jobs',
    ],
    correctAnswers: [0],
    explanation:
      'Step Functions is serverless orchestration for EMR. MWAA is an Airflow environment you pay for even when idle. EventBridge schedules; it is not a rich DAG. Glue workflows orchestrate Glue, not general EMR graphs.',
  },
  {
    id: 'dea-ops-109',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'efs', 'lambda', 'replication'],
    question:
      'Lambda in one Region must process files that live on EFS in several Regions, and data science data must not leave that one Region. Least effort:',
    options: [
      'EFS replication of each source file system into the data-science Region; Lambda there mounts the replicas',
      'VPC peering plus Lambda in the science Region mounting every remote EFS (cross-Region mounts are the hard path)',
      'Deploy Lambda in every source Region and write to S3, then pull results back',
      'DataSync jobs you operate instead of managed EFS replication',
    ],
    correctAnswers: [0],
    explanation:
      'EFS replication keeps a destination file system in the chosen Region. Local Lambda mounts stay in-Region. Peering remote EFS, multi-Region functions, and DataSync are more moving parts.',
  },
  {
    id: 'dea-ops-110',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'athena', 'msck'],
    question:
      'Athena on year-partitioned CloudTrail in S3 returns no rows. First two checks: (Select TWO.)',
    options: [
      'Confirm the table’s S3 LOCATION is the prefix that actually holds the files',
      'Run MSCK REPAIR TABLE (or add partitions) so Glue knows the year prefixes',
      'Increase Athena query timeout as if empty results were a timeout',
      'Restart the Athena service',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Athena reads whatever the table location plus catalog partitions describe. A wrong prefix or missing partition metadata yields zero rows. Timeouts and “restart Athena” are not that fix.',
  },
  {
    id: 'dea-ops-111',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'emr', 'glue-catalog'],
    question:
      'Hadoop is moving to EMR and the on-cluster Hive metastore must become a serverless persistent catalog:',
    options: [
      'Point EMR Hive at the AWS Glue Data Catalog as the external metastore',
      'DMS the Hive metastore into S3 and crawl it as if it were table data',
      'Amazon Aurora MySQL as the required serverless Glue replacement',
      'Keep a new Hive metastore only on the EMR primary node with no Glue',
    ],
    correctAnswers: [0],
    explanation:
      'Glue Data Catalog is the managed Hive-compatible metastore for EMR. Dumping Hive into S3, running Aurora yourself, or a node-local metastore is not the serverless catalog the exam wants.',
  },
  {
    id: 'dea-ops-112',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-studio', 'databrew', 'rds'],
    question:
      'Visual extract from S3, DataBrew quality + transforms, load queryable rows to RDS MySQL. Quality reports will not be queried in SQL. Cost-aware landing:',
    options: [
      'Processed rows into RDS; DataBrew quality outputs into S3',
      'Both processed rows and quality reports into RDS',
      'Both into S3 only, skipping the required relational store',
      'Glue ETL plus Glue Data Quality with everything forced into RDS including unused quality JSON',
    ],
    correctAnswers: [0],
    explanation:
      'RDS holds the relational data consumers will query. Quality-check artifacts that nobody joins belong in cheap S3, not extra RDS storage.',
  },
  {
    id: 'dea-ops-113',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'glue-crawler', 'athena'],
    question:
      'Unpartitioned Athena on ALB access logs in S3 is getting slower. Least-effort partition metadata:',
    options: [
      'A Glue crawler with an ALB/log classifier (incremental crawls add new partitions to the catalog)',
      'A custom Glue Spark job whose only job is writing partition rows',
      'Lambda rewriting every ALB log to Parquet before Athena can run',
      'Hive bucketed tables plus Lambda as the default ALB pattern',
    ],
    correctAnswers: [0],
    explanation:
      'Crawlers infer ALB log layout and register Hive-style partitions Athena can prune. Custom Spark/Lambda transforms are extra code when catalog partitions fix scan size.',
  },
  {
    id: 'dea-ops-114',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'posix', 'sql'],
    question:
      'Redshift SQL must return Sales rows whose city_name starts with San or El. POSIX operator that matches the start of the string with alternation:',
    options: [
      "city_name ~ '^(San|El)'",
      "city_name ~ '$(San|El)*' ($ anchors the end, not the start)",
      "city_name ~ '^(San&El)*' (& is not POSIX alternation)",
      "city_name LIKE 'San|El%' (LIKE does not treat | as OR)",
    ],
    correctAnswers: [0],
    explanation:
      'Redshift POSIX ~ uses ^ for start-of-value and | for alternatives. $ is end-anchor. & is not OR. LIKE treats | as a literal character.',
  },
  {
    id: 'dea-ops-115',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'databrew', 'profiling'],
    question:
      'Daily CSV/JSON drops have shifting schemas. Need scheduled, reusable, no-code profiling for nulls, formats, and outliers across many S3 datasets:',
    options: [
      'Glue DataBrew profiling jobs plus reusable recipes, scheduled per dataset',
      'A Glue Studio Spark job you write to merge files and hand-code validators',
      'DynamicFrame ResolveChoice as a quality profiler (it picks types, it does not score nulls/outliers)',
      'DataBrew dashboards that someone must click through each morning with no schedule',
    ],
    correctAnswers: [0],
    explanation:
      'DataBrew profiling jobs compute those stats with recipes you reuse, and you can schedule them. Custom PySpark and ResolveChoice are code or type-resolution, not scheduled profiling. Unscheduled dashboard review is not the repeatable process.',
  },
  {
    id: 'dea-ops-116',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'kinesis', 'firehose', 'cloudwatch'],
    question:
      'Kinesis Data Streams plus Firehose into S3 must alarm on ingest and delivery health with the least custom code:',
    options: [
      'CloudWatch alarms on stream IncomingBytes/OutgoingBytes and Firehose DeliveryToS3.Success',
      'Someone reading CloudWatch Logs by hand each shift',
      'A daily Lambda that polls DescribeStream and emails SNS',
      'Managed Flink whose only job is to graph those service metrics',
    ],
    correctAnswers: [0],
    explanation:
      'Both services publish those operational metrics. Alarms evaluate them continuously. Log-tailing, polling Lambdas, and a Flink app are extra work for the same health signal.',
  },
  {
    id: 'dea-ops-117',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'athena', 'result-reuse'],
    question:
      'Athena workgroup users rerun the same parameterized SQL many times. Cut scan cost and latency when the result is still valid:',
    options: [
      'Enable query result reuse on the Athena workgroup so a matching prior result is returned',
      'Convert the lake to JSON so repeated queries scan more bytes',
      'Stand up EMR solely to cache identical Athena SQL',
      'Switch those identical lake queries to Redshift Spectrum as a cache',
    ],
    correctAnswers: [0],
    explanation:
      'Workgroup result reuse serves a previous matching result instead of scanning S3 again. JSON and extra engines do not implement that Athena feature.',
  },
  {
    id: 'dea-ops-118',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'glue', 'merge'],
    question:
      'Glue SQL runs MERGE INTO accounts t USING monthly_accounts_update s ON t.customer = s.customer WHEN MATCHED THEN DELETE. Effect:',
    options: [
      'Rows in accounts whose customer also exists in monthly_accounts_update are deleted from accounts',
      'Only the intersection is kept in accounts (the opposite of DELETE)',
      'monthly_accounts_update is dropped as a table',
      'Glue rejects MERGE INTO as invalid DML',
    ],
    correctAnswers: [0],
    explanation:
      'WHEN MATCHED THEN DELETE removes matching target rows. Glue supports MERGE for Iceberg/Hudi-style tables with full table access. It does not drop the source table or invert to a keep-only-matches.',
  },
  {
    id: 'dea-ops-119',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'step-functions', 'emr', 'vpc'],
    question:
      'A hand-built Step Functions state machine cannot run EMR jobs that sit in a VPC and read S3 plus on-prem sources. First two checks: (Select TWO.)',
    options: [
      'The state machine role can call EMR APIs (and pass cluster roles) and the jobs can access the S3 prefixes they use',
      'VPC Flow Logs plus EMR security-group rules: can the cluster reach the data-source IPs and ports?',
      'Rewrite the pipeline to EMR on EKS as the required first debug step',
      'Lengthen every retry interval and add an SNS topic without checking IAM or the network',
    ],
    correctAnswers: [0, 1],
    explanation:
      'SFN→EMR fails first on missing EMR/S3/iam:PassRole permissions, then on VPC path/security-group blocks to sources. Flow Logs show accepted vs rejected traffic. EKS, longer retries, and email pauses do not diagnose those two.',
  },
  {
    id: 'dea-ops-120',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'sqs'],
    question:
      'Consumers go down for hours and SQS messages vanish before they recover. Two changes that keep the backlog: (Select TWO.)',
    options: [
      'Lengthen the queue message retention period (SQS deletes after that age)',
      'Speed up processing so the drain finishes before expiry when the app returns',
      'Raise visibility timeout only, which hides in-flight messages but does not keep unconsumed ones past retention',
      'Switch to SNS as a durable queue',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Retention is how long SQS keeps unconsumed messages. Faster processing clears the pile after an outage. Visibility timeout is for in-flight hide time. SNS is pub/sub, not a queue.',
  },
  {
    id: 'dea-ops-121',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq', 'dqdl'],
    question:
      'Glue Data Quality must fail unless every city,state pair in the dataset exists in a reference table (exact set match):',
    options: [
      'DQDL ReferentialIntegrity mapping city,state to the reference columns with a threshold of 1.0',
      'ColumnValues regex on city only',
      'IsComplete on city, which tests nulls, not the reference set',
      'A DataBrew COUNT_DISTINCT as ReferentialIntegrity',
    ],
    correctAnswers: [0],
    explanation:
      'ReferentialIntegrity checks that primary-dataset values are a subset of a reference dataset, including composite keys. Completeness and regex do not join a dimension table.',
  },
  {
    id: 'dea-ops-122',
    domain: 'operations',
    task: '3.4',
    tags: ['dea-c01', 'glue-dq', 'anomaly'],
    question:
      'Known DQDL rules catch expected defects; you also want Glue to flag unexpected metric shifts inside the same Spark job:',
    options: [
      'Glue Data Quality ML anomaly detection alongside the DQDL ruleset',
      'Only custom Spark SQL you maintain as the ML detector',
      'Great Expectations on EMR as required once Glue DQ exists',
      'Macie anomaly scores as Glue Data Quality',
    ],
    correctAnswers: [0],
    explanation:
      'Glue DQ pairs declarative DQDL with optional ML anomaly detection in the job. Third-party stacks and Macie are different products.',
  },
  {
    id: 'dea-ops-123',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'vacuum'],
    question:
      'An interleaved-sort Redshift table is bloated with deleted rows and the interleaved keys are stale. Command:',
    options: [
      'VACUUM REINDEX (reclaims space and reanalyzes interleaved sort keys)',
      'VACUUM FULL, which does not reindex interleaved keys',
      'VACUUM DELETE ONLY, which skips the interleaved analysis',
      'VACUUM SORT ONLY, which does not reclaim deleted-row space',
    ],
    correctAnswers: [0],
    explanation:
      'REINDEX is the interleaved maintenance path: reclaim plus a fresh key analysis. FULL/DELETE ONLY/SORT ONLY each miss one of those two jobs.',
  },
  {
    id: 'dea-ops-124',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'truncate'],
    question:
      'Empty a Redshift materialized view (or table) immediately without leaving rows that need VACUUM:',
    options: [
      'TRUNCATE, which does not scan and reclaims space right away',
      'DELETE FROM … WHERE 1=1, which marks rows until VACUUM',
      'VACUUM as the empty command',
      'DROP DATABASE as the daily reset',
    ],
    correctAnswers: [0],
    explanation:
      'TRUNCATE is the fast empty. DELETE leaves ghost rows until VACUUM. VACUUM reclaims; it does not replace TRUNCATE for this.',
  },
  {
    id: 'dea-ops-125',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'athena', 'explain'],
    question:
      'You need Athena’s distributed plan plus per-operator runtime cost for SELECT * FROM sales:',
    options: [
      'EXPLAIN ANALYZE SELECT * FROM sales',
      'EXPLAIN only, which is the plan without runtime stats',
      'MSCK REPAIR TABLE as a query profiler',
      'CloudWatch Logs as EXPLAIN ANALYZE',
    ],
    correctAnswers: [0],
    explanation:
      'EXPLAIN ANALYZE runs the statement and returns the plan with computational cost. EXPLAIN is compile-time only.',
  },
  {
    id: 'dea-ops-126',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'athena', 'ctas'],
    question:
      'Create an Athena table with the same columns as old_table but zero rows:',
    options: [
      'CREATE TABLE new_table AS SELECT * FROM old_table WITH NO DATA',
      'CREATE TABLE AS SELECT * (copies rows)',
      'INSERT INTO new_table SELECT * FROM old_table',
      'DROP TABLE old_table as a clone',
    ],
    correctAnswers: [0],
    explanation:
      'CTAS WITH NO DATA copies the result schema and leaves the table empty. Plain CTAS inserts the SELECT output.',
  },
  {
    id: 'dea-ops-127',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'dms', 'cdc'],
    question:
      'DMS CDC is lagging. CDCLatencySource is high while CDCLatencyTarget is not. Bottleneck:',
    options: [
      'Capturing changes from the source endpoint (source-side delay)',
      'Applying changes on the target (that is CDCLatencyTarget)',
      'CDCIncomingChanges being zero as a latency metric',
      'The replication instance CPU as the only CDCLatencySource meaning',
    ],
    correctAnswers: [0],
    explanation:
      'CDCLatencySource is time since the last source capture. CDCLatencyTarget is apply lag on the target. IncomingChanges is a backlog count, not that timer.',
  },
  {
    id: 'dea-ops-128',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'mwaa', 'logs'],
    question:
      'An MWAA DAG task failed. First log group to open for the task-instance error:',
    options: [
      'CloudWatch Logs …-Task (Airflow task logs)',
      'The environment’s webserver log only',
      'S3 access logs as Airflow stdout',
      'Glue job logs, even when the task never started Glue',
    ],
    correctAnswers: [0],
    explanation:
      'MWAA ships task-instance output to a log group suffixed -Task. Webserver/scheduler logs are other components.',
  },
  {
    id: 'dea-ops-129',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'athena', 'step-functions', 'lambda'],
    question:
      'Lambda has a 15-minute cap but Athena SQL can run longer. Submit and wait without blocking the function: (Select TWO.)',
    options: [
      'Lambda calls StartQueryExecution and returns the query id',
      'Step Functions Wait (then GetQueryExecution) until SUCCEEDED or FAILED',
      'Lambda synchronously loops GetQueryExecution for an hour',
      'Athena workgroups as a Wait state',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Athena is asynchronous. Lambda should start the query; Step Functions can Wait between polls. A 15-minute Lambda cannot babysit a long query.',
  },
  {
    id: 'dea-ops-130',
    domain: 'operations',
    task: '3.3',
    tags: ['dea-c01', 'glue', 'eventbridge', 'sns'],
    question:
      'Email the on-call when a Glue job hits FAILED, no Lambda. Trap:',
    options: [
      'EventBridge rule on Glue Job State Change FAILED → SNS standard topic (email works on standard, not FIFO)',
      'SNS FIFO email, which FIFO topics do not support',
      'SQS as an email subscription protocol',
      'CloudTrail as the Glue FAILED event bus',
    ],
    correctAnswers: [0],
    explanation:
      'Glue emits state-change events to EventBridge. SNS standard can email. FIFO cannot subscribe email. SQS is a queue, not an inbox.',
  },
  {
    id: 'dea-ops-131',
    domain: 'operations',
    task: '3.1',
    tags: ['dea-c01', 'lambda', 'layers'],
    question:
      'Eight Lambda functions share the same Python helpers. Update that code once, not in eight zips:',
    options: [
      'A Lambda layer with the shared package; point each function at a new layer version',
      'Copy the helpers into every deployment package forever',
      'A Glue Python shell job as a Lambda layer',
      'EFS as required before layers exist',
    ],
    correctAnswers: [0],
    explanation:
      'Layers centralize dependencies. New layer versions are immutable; you attach the new version to each function. Duplicated zips drift.',
  },
  {
    id: 'dea-ops-132',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'redshift', 'compression'],
    question:
      'Pick better column encodings for an already-loaded Redshift table from actual data:',
    options: [
      'ANALYZE COMPRESSION, then ALTER encodings from its recommendations',
      'ANALYZE, which gathers planner stats, not encoding advice',
      'VACUUM REINDEX as a compression advisor',
      'VACUUM RECLUSTER as a compression advisor',
    ],
    correctAnswers: [0],
    explanation:
      'ANALYZE COMPRESSION samples the table and suggests encodings. ANALYZE and VACUUM are stats and row-cleanup/reorder, not encoding design.',
  },
  {
    id: 'dea-ops-133',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'glue', 'partition-index'],
    question:
      'Athena spends planning time loading every Glue partition of a huge table even with projection off. Catalog-side speedup:',
    options: [
      'Glue partition indexes plus partition filtering so Athena retrieves a subset of partition metadata',
      'Disable all partitions so planning lists every object',
      'MSCK REPAIR TABLE as an index builder',
      'Redshift DISTSTYLE on the Glue table',
    ],
    correctAnswers: [0],
    explanation:
      'Partition indexes let GetPartitions filter in the catalog. Projection avoids catalog lookups entirely when the layout is generated; indexes help when you still store partitions in Glue.',
  },
  {
    id: 'dea-ops-134',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'athena', 'joins'],
    question:
      'Athena equality join OOMs. Build vs probe side:',
    options: [
      'Put the larger table on the left (probe) and the smaller table on the right (build/hash)',
      'Always put the larger table on the right so Athena hashes the big side',
      'Broadcast the 2 TB fact as the build side',
      'Disable joins; Athena cannot hash-join',
    ],
    correctAnswers: [0],
    explanation:
      'Athena hashes the right (build) side into memory. A small right table fits; a huge right table spills or fails. Left is the probe stream.',
  },
  {
    id: 'dea-ops-135',
    domain: 'operations',
    task: '3.2',
    tags: ['dea-c01', 'sql', 'pivot'],
    question:
      'A long fact table has one row per (region, month, metric). A report needs months as columns. SQL reshape:',
    options: [
      'Pivot: many rows become many columns (in Redshift, typically SUM(CASE WHEN month = …) plus GROUP BY region)',
      'Unpivot / UNION of columns into rows, which is the opposite reshape',
      'One column copied into one row as “pivot”',
      'A window PARTITION BY as a pivot that creates new columns',
    ],
    correctAnswers: [0],
    explanation:
      'Pivot (wide reports) turns repeating row values into columns. Unpivot goes the other way. PARTITION BY does not create month columns. Redshift usually implements this with conditional aggregation, not a PostgreSQL CROSSTAB extension.',
  },
]
