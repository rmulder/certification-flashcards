import type { Card } from '../../../core/types'

export const storeCards: Card[] = [
  {
    id: 'dea-store-001',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift'],
    question: 'Petabyte-scale SQL analytics with columnar storage and concurrency scaling fits which service?',
    options: [
      'Amazon Redshift',
      'Amazon DynamoDB only',
      'Amazon EBS',
      'Route 53',
    ],
    correctAnswers: [0],
    explanation: 'Redshift is the primary cloud data warehouse for large-scale SQL analytics on AWS.',
  },
  {
    id: 'dea-store-002',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'dynamodb'],
    question: 'Single-digit millisecond key-value access at massive scale with flexible schema fits:',
    options: [
      'Amazon DynamoDB',
      'Amazon Redshift primary OLTP',
      'S3 Glacier only',
      'Amazon EFS',
    ],
    correctAnswers: [0],
    explanation: 'DynamoDB provides low-latency NoSQL key-value and document access at any scale.',
  },
  {
    id: 'dea-store-003',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 's3'],
    question: 'Cost-effective durable storage for data lake raw and curated zones uses:',
    options: [
      'Amazon S3 with appropriate storage classes',
      'EC2 instance store only',
      'Lambda /tmp',
      'CloudFront cache',
    ],
    correctAnswers: [0],
    explanation: 'S3 is the foundation of lakehouse storage with tiering via storage classes and lifecycle policies.',
  },
  {
    id: 'dea-store-004',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'lake-formation'],
    question: 'Central governance layer registers S3 locations and applies fine-grained permissions on the lake:',
    options: [
      'AWS Lake Formation',
      'Amazon Polly',
      'AWS Artifact',
      'Amazon Connect',
    ],
    correctAnswers: [0],
    explanation: 'Lake Formation simplifies building, securing, and managing data lakes on S3.',
  },
  {
    id: 'dea-store-005',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'spectrum'],
    question: 'Query exabytes in S3 without loading all data into Redshift clusters uses:',
    options: [
      'Amazon Redshift Spectrum',
      'Copy everything to local laptop',
      'Delete S3 data after query',
      'Email CSV exports only',
    ],
    correctAnswers: [0],
    explanation: 'Spectrum runs Redshift SQL directly against data in external S3 tables via Glue catalog.',
  },
  {
    id: 'dea-store-006',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'iceberg'],
    question: 'Open table format supporting ACID transactions and time travel on S3 includes:',
    options: [
      'Apache Iceberg',
      'Plain CSV only',
      'Unversioned random files',
      'DNS zone files',
    ],
    correctAnswers: [0],
    explanation: 'Iceberg (exam v1.1) provides reliable table semantics on object storage for lakehouse patterns.',
  },
  {
    id: 'dea-store-007',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'hnsw'],
    question: 'Vector similarity search on Aurora PostgreSQL may use which index type?',
    options: [
      'HNSW (Hierarchical Navigable Small World)',
      'B-tree only for all vectors',
      'No indexing possible',
      'Route 53 health checks',
    ],
    correctAnswers: [0],
    explanation: 'HNSW and IVF are vector index types referenced in DEA v1.1 for similarity search.',
  },
  {
    id: 'dea-store-008',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'memorydb'],
    question: 'Ultra-low latency in-memory key-value for caching hot dataset access:',
    options: [
      'Amazon MemoryDB or ElastiCache',
      'S3 Glacier Deep Archive',
      'AWS Snowball',
      'Amazon Lightsail',
    ],
    correctAnswers: [0],
    explanation: 'MemoryDB/ElastiCache serve microsecond-scale key access for hot data patterns.',
  },
  {
    id: 'dea-store-009',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'federated'],
    question: 'Redshift queries operational data in RDS without full replication via:',
    options: [
      'Redshift federated queries',
      'Manual CSV export daily only',
      'Public RDS internet access',
      'Deleting RDS after query',
    ],
    correctAnswers: [0],
    explanation: 'Federated queries join warehouse data with live relational sources when appropriate.',
  },
  {
    id: 'dea-store-010',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'materialized-views'],
    question: 'Precomputed aggregations in Redshift refreshed on schedule use:',
    options: [
      'Materialized views',
      'Unindexed raw JSON only',
      'Duplicate tables manually',
      'CloudFront behaviors',
    ],
    correctAnswers: [0],
    explanation: 'Materialized views cache expensive query results for faster repeated analytics.',
  },
  {
    id: 'dea-store-011',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'access-pattern'],
    question: 'Choosing DynamoDB vs Redshift primarily depends on:',
    options: [
      'Access patterns: OLTP key lookups vs analytical SQL scans',
      'Brand logo colors',
      'Office location count',
      'DNS TTL',
    ],
    correctAnswers: [0],
    explanation: 'Store selection matches workload: operational key-value vs analytical columnar SQL.',
  },
  {
    id: 'dea-store-012',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'transfer'],
    question: 'Managed SFTP into S3 for partner file drops uses:',
    options: [
      'AWS Transfer Family',
      'Amazon Polly',
      'AWS Artifact',
      'Amazon Macie only',
    ],
    correctAnswers: [0],
    explanation: 'Transfer Family provides SFTP/FTPS/FTP endpoints into S3 and EFS.',
  },
  {
    id: 'dea-store-013',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'locks'],
    question: 'Concurrent ETL jobs must not corrupt Redshift tables during load. Use:',
    options: [
      'Table locks or staging load patterns (COPY to staging then merge)',
      'Simultaneous conflicting DELETE ALL',
      'Disabling transactions',
      'Public write access',
    ],
    correctAnswers: [0],
    explanation: 'Staging loads and lock management prevent concurrent write conflicts in warehouses.',
  },
  {
    id: 'dea-store-014',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'glue-catalog'],
    question: 'Athena and Redshift Spectrum need table metadata in:',
    options: [
      'AWS Glue Data Catalog',
      'Local laptop spreadsheets',
      'Unstructured logs only',
      'DNS TXT records',
    ],
    correctAnswers: [0],
    explanation: 'Glue Data Catalog is the central metastore for lake and federated query engines.',
  },
  {
    id: 'dea-store-015',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'crawler'],
    question: 'New JSON files in S3 partition should auto-register schema. Run:',
    options: [
      'AWS Glue crawler',
      'Manual schema guess once per year',
      'Delete files without catalog',
      'Disable partitions',
    ],
    correctAnswers: [0],
    explanation: 'Crawlers infer schemas and register tables/partitions in the Data Catalog.',
  },
  {
    id: 'dea-store-016',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'partitions'],
    question: 'Hive-style s3://bucket/year=2025/month=06/ partitions must stay synced with catalog via:',
    options: [
      'Partition projection or crawler partition updates',
      'Ignoring partition keys',
      'Single folder only',
      'Random file names',
    ],
    correctAnswers: [0],
    explanation: 'Partition synchronization ensures queries prune data efficiently using catalog metadata.',
  },
  {
    id: 'dea-store-017',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'hive'],
    question: 'Legacy Hive metastore on EMR can integrate with:',
    options: [
      'AWS Glue Data Catalog as technical catalog',
      'Only paper records',
      'CloudFront',
      'Route 53',
    ],
    correctAnswers: [0],
    explanation: 'Glue catalog can replace or federate Hive metastore for EMR and Athena.',
  },
  {
    id: 'dea-store-018',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'sagemaker-catalog'],
    question: 'Business users discover governed datasets with business glossary context using:',
    options: [
      'Amazon SageMaker Catalog (business catalog)',
      'Unlabeled S3 prefixes only',
      'Public internet search',
      'Sticky notes on servers',
    ],
    correctAnswers: [0],
    explanation: 'SageMaker Catalog (v1.1) adds business metadata and governance beyond technical Glue catalog.',
  },
  {
    id: 'dea-store-019',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'connections'],
    question: 'Glue crawler needs JDBC credentials for RDS source. Configure:',
    options: [
      'Glue connection with Secrets Manager or secure parameters',
      'Plaintext password in public Git repo',
      'Hard-coded keys in crawler name',
      'No authentication',
    ],
    correctAnswers: [0],
    explanation: 'Glue connections securely store network and credential info for cataloging remote sources.',
  },
  {
    id: 'dea-store-020',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'copy'],
    question: 'Bulk data movement between Redshift and S3 for archive uses:',
    options: [
      'UNLOAD to S3 and COPY from S3 commands',
      'Email attachments',
      'Manual USB drives only',
      'CloudFront invalidation',
    ],
    correctAnswers: [0],
    explanation: 'UNLOAD exports warehouse data to S3; COPY loads S3 data into Redshift efficiently.',
  },
  {
    id: 'dea-store-021',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'lifecycle'],
    question: 'Infrequently accessed lake data should transition to cheaper storage automatically via:',
    options: [
      'S3 Lifecycle policies',
      'Keeping STANDARD class forever',
      'Deleting after one day always',
      'Manual tier changes weekly',
    ],
    correctAnswers: [0],
    explanation: 'Lifecycle rules transition objects to IA, Glacier, or expire per retention policy.',
  },
  {
    id: 'dea-store-022',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'expire'],
    question: 'Regulations require deletion of raw logs after 90 days. Implement with:',
    options: [
      'S3 Lifecycle expiration rule',
      'Infinite retention always',
      'Manual delete once per decade',
      'Copy to more buckets forever',
    ],
    correctAnswers: [0],
    explanation: 'Expiration actions automatically delete objects when retention period ends.',
  },
  {
    id: 'dea-store-023',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'ttl'],
    question: 'DynamoDB items auto-delete after session expiry using:',
    options: [
      'DynamoDB TTL attribute',
      'Manual cron on laptop',
      'S3 lifecycle on DynamoDB',
      'CloudTrail only',
    ],
    correctAnswers: [0],
    explanation: 'TTL removes expired items without consume write capacity for deletes.',
  },
  {
    id: 'dea-store-024',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'versioning'],
    question: 'Accidental S3 object overwrites must be recoverable. Enable:',
    options: [
      'S3 versioning with appropriate lifecycle for old versions',
      'Public delete for all users',
      'Disable all backups',
      'Single non-versioned bucket only',
    ],
    correctAnswers: [0],
    explanation: 'Versioning retains prior object versions for recovery and audit.',
  },
  {
    id: 'dea-store-025',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'resiliency'],
    question: 'Critical lake data requires durability across AZs. S3 provides:',
    options: [
      '11 nines durability with cross-AZ redundancy',
      'Single disk on one laptop',
      'No redundancy option',
      'Manual tape only',
    ],
    correctAnswers: [0],
    explanation: 'S3 Standard replicates across multiple AZs for high durability and availability.',
  },
  {
    id: 'dea-store-026',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'sortkey'],
    question: 'Redshift queries filter on date column repeatedly. Optimize with:',
    options: [
      'Sort keys and distribution keys aligned to query patterns',
      'Random diststyle always',
      'No indexes or keys ever',
      'One row tables only',
    ],
    correctAnswers: [0],
    explanation: 'Sort and distribution keys dramatically affect Redshift scan efficiency.',
  },
  {
    id: 'dea-store-027',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'dynamodb-keys'],
    question: 'DynamoDB access pattern: lookup by user_id and sort by timestamp. Key design uses:',
    options: [
      'Partition key user_id and sort key timestamp',
      'Only scan entire table always',
      'Random GUID with no sort key ever',
      'Single global secondary index only without planning',
    ],
    correctAnswers: [0],
    explanation: 'Composite keys match query patterns; poor key design forces expensive scans.',
  },
  {
    id: 'dea-store-028',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'schema-evolution'],
    question: 'New optional column added to JSON events without breaking old queries requires:',
    options: [
      'Schema evolution strategy (Glue/ Iceberg / tolerant readers)',
      'Dropping all historical data',
      'Fixed schema never changing',
      'Rejecting all new fields',
    ],
    correctAnswers: [0],
    explanation: 'Schema evolution handles additive changes while maintaining pipeline compatibility.',
  },
  {
    id: 'dea-store-029',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'sct'],
    question: 'Migrate Oracle schema to PostgreSQL on RDS using AWS tooling:',
    options: [
      'AWS Schema Conversion Tool (SCT) with DMS',
      'Manual retype all DDL in notepad',
      'FTP schema files only',
      'Ignore type differences',
    ],
    correctAnswers: [0],
    explanation: 'SCT converts schemas; DMS migrates data with ongoing replication if needed.',
  },
  {
    id: 'dea-store-030',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'lineage'],
    question: 'Track which training dataset version produced a model artifact using:',
    options: [
      'Amazon SageMaker ML Lineage Tracking or SageMaker Catalog',
      'Unlogged manual notes',
      'Deleting metadata',
      'Public wiki only',
    ],
    correctAnswers: [0],
    explanation: 'Lineage tracking connects datasets, jobs, and models for governance and reproducibility.',
  },
  {
    id: 'dea-store-031',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'compression'],
    question: 'Parquet with Snappy or GZIP compression in S3 reduces:',
    options: [
      'Storage cost and query I/O for columnar scans',
      'Security of data',
      'Need for any catalog',
      'IAM requirements',
    ],
    correctAnswers: [0],
    explanation: 'Columnar compression lowers storage and speeds analytics by reading less data.',
  },
  {
    id: 'dea-store-032',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'vectorization'],
    question: 'Converting text documents to embeddings for semantic search describes:',
    options: [
      'Vectorization concepts (e.g., Bedrock Knowledge Bases pipelines)',
      'Only CSV parsing',
      'DNS configuration',
      'EBS formatting',
    ],
    correctAnswers: [0],
    explanation: 'Vectorization embeds content into numerical vectors for similarity search (v1.1 exam topic).',
  },
  {
    id: 'dea-store-033',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'athena'],
    question: 'Ad hoc SQL on S3 lake without provisioning servers uses:',
    options: [
      'Amazon Athena',
      'Always-on largest Redshift cluster',
      'Manual grep on laptop',
      'Amazon Polly',
    ],
    correctAnswers: [0],
    explanation: 'Athena is serverless SQL over S3 data registered in Glue catalog.',
  },
  {
    id: 'dea-store-034',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'emr-storage'],
    question: 'Spark processes multi-TB datasets stored primarily in:',
    options: [
      'Amazon S3 as EMR primary data lake storage',
      'Lambda ephemeral disk only',
      'CloudFront',
      'Route 53',
    ],
    correctAnswers: [0],
    explanation: 'EMR reads and writes large datasets in S3 using distributed processing.',
  },
  {
    id: 'dea-store-035',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'consume'],
    question: 'Analyst discovers table location and schema through catalog before querying. This is:',
    options: [
      'Consuming data via technical data catalog',
      'Guessing S3 paths randomly',
      'Disabling metadata',
      'SQL without any tables',
    ],
    correctAnswers: [0],
    explanation: 'Catalogs enable discoverability of datasets, schemas, and storage locations.',
  },
  {
    id: 'dea-store-036',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'legal-delete'],
    question: 'GDPR erasure requests require removing customer records from lake and indexes. Process includes:',
    options: [
      'Coordinated delete across S3 objects, indexes, and derived tables',
      'Ignoring legal requests',
      'Only deleting one copy while leaving backups',
      'Public announcement without deletion',
    ],
    correctAnswers: [0],
    explanation: 'Lifecycle and deletion workflows must cover all copies to meet legal requirements.',
  },
  {
    id: 'dea-store-037',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'partitioning'],
    question: 'Athena queries always filter on year and month columns. Best practice:',
    options: [
      'Partition tables by year/month in S3 path layout',
      'Single directory with billions of files flat',
      'No partition keys',
      'Random shuffle of files daily',
    ],
    correctAnswers: [0],
    explanation: 'Partition pruning skips irrelevant S3 prefixes, reducing scan cost and time.',
  },
  {
    id: 'dea-store-038',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'rds'],
    question: 'Transactional OLTP with complex joins and ACID in managed SQL uses:',
    options: [
      'Amazon RDS or Aurora',
      'S3 alone without SQL engine',
      'CloudFront',
      'Amazon Macie',
    ],
    correctAnswers: [0],
    explanation: 'RDS/Aurora serve relational OLTP/ moderate analytics unlike Redshift OLAP focus.',
  },
  {
    id: 'dea-store-039',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'msk-storage'],
    question: 'Kafka retains streaming messages for replay; long-term analytics archive lands in:',
    options: [
      'S3 via Firehose or custom consumers',
      'Kafka only forever without archive',
      'CloudWatch logs exclusively',
      'Email',
    ],
    correctAnswers: [0],
    explanation: 'Streams often archive to S3 for batch analytics while Kafka holds recent retention.',
  },
  {
    id: 'dea-store-040',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'denormalize'],
    question: 'Star schema fact and dimension tables in Redshift optimize:',
    options: [
      'Analytical query performance with denormalized dimensional models',
      'OLTP row locking only',
      'Eliminating all joins forever',
      'JSON-only storage without tables',
    ],
    correctAnswers: [0],
    explanation: 'Dimensional modeling supports efficient aggregations in warehouse workloads.',
  },
  {
    id: 'dea-store-041',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'metadata'],
    question: 'Business glossary terms linked to technical tables live in:',
    options: [
      'Business data catalog (SageMaker Catalog) layered on technical catalog',
      'Unstructured README only',
      'Developer memory',
      'Public DNS',
    ],
    correctAnswers: [0],
    explanation: 'Business catalogs add definitions, owners, and classification to technical metadata.',
  },
  {
    id: 'dea-store-042',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'cost-performance'],
    question: 'Compare services for cost and performance when choosing between Athena and Redshift for heavy recurring queries:',
    options: [
      'Evaluate scan volume, concurrency, and reserved vs serverless pricing',
      'Always pick most expensive option',
      'Ignore query patterns',
      'Use only free tier forever',
    ],
    correctAnswers: [0],
    explanation: 'Data engineers compare price-performance tradeoffs based on workload characteristics.',
  },
  {
    id: 'dea-store-043',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'tiering'],
    question: 'Curated zone data accessed monthly moves to S3 Intelligent-Tiering or Glacier via:',
    options: [
      'Lifecycle transitions based on access patterns',
      'Keeping STANDARD forever',
      'Deleting curated data',
      'Manual USB archive only',
    ],
    correctAnswers: [0],
    explanation: 'Tiering aligns storage cost with access frequency while meeting retrieval needs.',
  },
  {
    id: 'dea-store-044',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'gsi'],
    question: 'DynamoDB query needs alternate access pattern by email when partition key is user_id. Add:',
    options: [
      'Global Secondary Index (GSI) on email',
      'Full table scan always',
      'Second table with duplicate all data unplanned',
      'Remove partition key',
    ],
    correctAnswers: [0],
    explanation: 'GSIs support additional query patterns without duplicating entire table inefficiently.',
  },
  {
    id: 'dea-store-045',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'opensearch'],
    question: 'Log and text search analytics with aggregations may use:',
    options: [
      'Amazon OpenSearch Service',
      'Amazon Polly',
      'AWS Artifact',
      'Snowball only',
    ],
    correctAnswers: [0],
    explanation: 'OpenSearch supports full-text search and analytics on log and text datasets.',
  },
  {
    id: 'dea-store-046',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'skew'],
    question: 'One hot partition key in DynamoDB causes throttling. Mitigation includes:',
    options: [
      'Salting partition keys or write sharding patterns',
      'Ignore throttling',
      'Delete hot keys',
      'Single partition forever',
    ],
    correctAnswers: [0],
    explanation: 'Key design and sharding spread load evenly across DynamoDB partitions.',
  },
  {
    id: 'dea-store-047',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'catalog-sync'],
    question: 'EMR job adds new S3 partition daily. Keep Athena aware by:',
    options: [
      'Registering partition in Glue catalog or using partition projection',
      'Hope Athena guesses path',
      'Disable catalog',
      'Rename bucket daily',
    ],
    correctAnswers: [0],
    explanation: 'Catalog must reflect new partitions for query engines to prune correctly.',
  },
  {
    id: 'dea-store-048',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'kinesis-storage'],
    question: 'Kinesis Data Streams temporarily holds records; durable long-term store is typically:',
    options: [
      'Amazon S3 after Firehose or custom consumer archive',
      'Kinesis only with no archive ever',
      'CloudFront cache',
      'EBS root volume',
    ],
    correctAnswers: [0],
    explanation: 'Streams buffer real-time data; S3 holds durable historical layers of the lake.',
  },
  {
    id: 'dea-store-049',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'optimization'],
    question: 'Column encoding and VACUUM in Redshift maintain:',
    options: [
      'Storage efficiency and query performance over time',
      'DNS records',
      'SSL certificates',
      'IAM user passwords',
    ],
    correctAnswers: [0],
    explanation: 'Maintenance operations reclaim space and optimize sort order in Redshift tables.',
  },
  {
    id: 'dea-store-050',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 's3', 'data-lake'],
    question:
      'Structured and semi-structured datasets for a scalable analytics data lake should primarily land in:',
    options: [
      'Amazon S3',
      'Amazon EFS as the lake foundation',
      'Amazon RDS as the lake store',
      'Amazon S3 Glacier for active query workloads',
    ],
    correctAnswers: [0],
    explanation:
      'S3 is the standard durable object store for lake zones. EFS is shared POSIX file storage; RDS is OLTP relational; Glacier tiers trade latency for archive cost and are poor for interactive lake processing.',
  },
  {
    id: 'dea-store-051',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'glue-catalog'],
    question: 'Primary purpose of the AWS Glue Data Catalog:',
    options: [
      'Store and manage dataset metadata such as location, schema, and partitions',
      'Host a managed Hadoop cluster for batch jobs',
      'Provide serverless data warehousing and SQL analytics',
      'Perform real-time stream processing',
    ],
    correctAnswers: [0],
    explanation:
      'The Data Catalog is the metadata layer for discovery and governance. Compute is EMR/Glue jobs; warehousing is Redshift/Athena; streaming uses Kinesis, Flink, or Glue streaming—not the catalog itself.',
  },
  {
    id: 'dea-store-052',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'lake-formation'],
    question: 'Lake Formation helps secure a data lake by: (Select THREE.)',
    options: [
      'Fine-grained table, column, and row access controls',
      'Auditing data access and catalog changes',
      'Tagging resources for governance and access policies',
      'Replacing IAM as the only identity store for all AWS APIs',
      'Auto-scaling EMR core nodes for cost',
      'Detecting payment fraud in transactions',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Lake Formation adds lake-centric permissions, audit trails, and LF-Tags. IAM still defines principals; EMR scaling and fraud analytics are out of scope for Lake Formation.',
  },
  {
    id: 'dea-store-053',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'federated'],
    question:
      'Amazon Redshift must join curated warehouse tables with live rows in Aurora PostgreSQL using credentials stored securely. Setup includes:',
    options: [
      'External schema federated query with secrets in AWS Secrets Manager',
      'Copy entire Aurora database into HDFS on EMR only',
      'Disable encryption on Aurora for faster joins',
      'Use S3 Glacier as the federated source',
    ],
    correctAnswers: [0],
    explanation:
      'Federated queries push predicates to RDS/Aurora with credentials from Secrets Manager. Bulk HDFS copy is not the federated pattern; Glacier is not a live operational database.',
  },
  {
    id: 'dea-store-054',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'materialized-views'],
    question:
      'Glue already loads Redshift, but repeated dashboards hit expensive joins and aggregations. To improve read performance without rerunning Glue each time:',
    options: [
      'Create Amazon Redshift materialized views that precompute the heavy logic',
      'Add Redshift nodes only while transforms still run in Glue',
      'Move the same joins into many Lambda functions',
      'Replace Glue with AWS Batch lacking catalog integration',
    ],
    correctAnswers: [0],
    explanation:
      'Materialized views store precomputed results inside Redshift for faster queries. Scaling the warehouse does not speed Glue transforms; Lambda is ill-suited to large joins; Batch is not a drop-in Glue+Redshift ETL substitute.',
  },
  {
    id: 'dea-store-055',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'emr'],
    question: 'In an Amazon EMR cluster, core nodes differ from task nodes because core nodes:',
    options: [
      'Run HDFS data nodes and hold cluster data; task nodes are compute-only',
      'Only schedule YARN jobs and never store data',
      'Are optional while primary nodes are not required',
      'Replace the need for Amazon S3 entirely',
    ],
    correctAnswers: [0],
    explanation:
      'Core nodes combine storage (HDFS) and compute. Task nodes add elastic compute without HDFS responsibility. Primary nodes manage the cluster; S3 remains the durable lake store in modern architectures.',
  },
  {
    id: 'dea-store-056',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'quicksight'],
    question:
      'Dashboards need sub-second interactions on aggregated sales metrics refreshed hourly, not second-by-second warehouse data. QuickSight dataset mode:',
    options: [
      'Import into SPICE for in-memory accelerated queries',
      'Direct query only with no caching ever',
      'Store SPICE in S3 Glacier',
      'Disable datasets and query CloudTrail instead',
    ],
    correctAnswers: [0],
    explanation:
      'SPICE accelerates interactive BI via an in-memory engine. Direct query suits up-to-the-minute source data but is slower for heavy exploration; Glacier and CloudTrail are unrelated to QuickSight datasets.',
  },
  {
    id: 'dea-store-057',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'quicksight'],
    question:
      'Executive dashboards must reflect Redshift changes within minutes with no stale SPICE copy. QuickSight connection preference:',
    options: [
      'Direct query to Redshift',
      'SPICE import with weekly full refresh only',
      'Static CSV upload replaced manually each quarter',
      'Query IAM policy documents',
    ],
    correctAnswers: [0],
    explanation:
      'Direct query runs SQL against the live warehouse when freshness beats cache speed. SPICE trades freshness for performance; CSV and IAM are not analytics data sources here.',
  },
  {
    id: 'dea-store-058',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'emr'],
    question: 'Amazon EMR is best described as:',
    options: [
      'A managed cluster platform for Hadoop, Spark, Hive, Pig, and related big data workloads',
      'A relational OLTP database compatible with MySQL',
      'A metadata-only catalog with no compute',
      'A CDN for static website assets',
    ],
    correctAnswers: [0],
    explanation:
      'EMR runs open-source big data frameworks at scale and integrates with S3, DynamoDB, and other stores for ETL and analytics. It is not RDS, the Glue catalog alone, or CloudFront.',
  },
  {
    id: 'dea-store-059',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'lake-formation', 'blueprint'],
    question:
      'Automate initial data lake setup (S3 locations, crawlers, and permissions templates) in Lake Formation using:',
    options: [
      'Lake Formation blueprints',
      'Amazon CloudFront behaviors',
      'Route 53 health checks',
      'AWS Artifact PDFs',
    ],
    correctAnswers: [0],
    explanation:
      'Blueprints accelerate repeatable lake provisioning aligned with DEA Lab 2 patterns. CDN, DNS, and compliance document services do not build lakes.',
  },
  {
    id: 'dea-store-060',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'emr'],
    question: 'Amazon EMR primary (master) nodes run which control-plane services?',
    options: [
      'YARN ResourceManager and HDFS NameNode',
      'Only Spark executors with no scheduling',
      'S3 bucket replication engines',
      'Redshift leader node processes',
    ],
    correctAnswers: [0],
    explanation:
      'Primary nodes manage the cluster, schedule work, and coordinate HDFS metadata. Executors run on core/task nodes; S3 and Redshift are separate services.',
  },
  {
    id: 'dea-store-061',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'open-table-format', 'iceberg'],
    question: 'Open table formats such as Iceberg on S3 commonly provide: (Select TWO.)',
    options: [
      'Transactional commits on object storage',
      'Efficient record-level updates and deletes',
      'Automatic federated queries to any RDBMS',
      'Proprietary lock-in that blocks non-AWS tools',
      'Guaranteed elimination of all data transfer charges',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Iceberg-style tables add ACID semantics and targeted file rewrites for row operations. They build on open Parquet/ORC files, do not auto-query RDS, and do not inherently cut cross-service transfer costs.',
  },
  {
    id: 'dea-store-062',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'iceberg'],
    question:
      'After Iceberg tables are written to S3, discovery and governed access typically flow through:',
    options: [
      'AWS Glue Data Catalog with optional Lake Formation permissions',
      'Amazon EBS snapshots only',
      'AWS Secrets Manager as the table store',
      'CloudFront cache keys',
    ],
    correctAnswers: [0],
    explanation:
      'Iceberg metadata and data files live in S3; the Glue catalog registers tables for Athena, Spectrum, EMR, and other engines with Lake Formation enforcing access.',
  },
  {
    id: 'dea-store-063',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'federated'],
    question:
      'Redshift federated queries improve performance by pushing filters to Aurora/RDS using:',
    options: [
      'Predicate pushdown executed on the remote database',
      'Copying the entire remote database into HDFS first',
      'Disabling parallel compute in Redshift',
      'Storing federated credentials in plain S3 objects',
    ],
    correctAnswers: [0],
    explanation:
      'Compute nodes issue subqueries with predicates applied at the source to reduce rows moved over the network. Bulk copy and plaintext secrets are anti-patterns.',
  },
  {
    id: 'dea-store-064',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'open-table-format'],
    question:
      'Compared with raw Parquet folders, open table formats often reduce query overhead by:',
    options: [
      'Avoiding expensive full bucket listings and enabling smarter file pruning',
      'Eliminating the need for any columnar storage',
      'Replacing the Glue Data Catalog entirely',
      'Forcing all queries through Amazon RDS',
    ],
    correctAnswers: [0],
    explanation:
      'Table metadata tracks snapshots and file-level stats for pruning. Formats still use columnar files like Parquet and integrate with—not replace—the catalog.',
  },
  {
    id: 'dea-store-065',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'datashare'],
    question:
      'A Redshift cluster that publishes datasets to other clusters via CREATE DATASHARE acts as a:',
    options: [
      'Datashare producer',
      'Datashare consumer',
      'WLM queue slice owner',
      'Glue crawler only',
    ],
    correctAnswers: [0],
    explanation:
      'Producer clusters share objects; consumer clusters mount shared datashares. WLM slices are intra-cluster resources, not cross-cluster sharing roles.',
  },
  {
    id: 'dea-store-066',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'glue', 'jdbc'],
    question:
      'Before a Glue crawler can catalog tables in an on-premises Oracle database, what must exist in the Data Catalog first?',
    options: [
      'A Glue JDBC connection defining network path and credentials',
      'Athena CREATE VIEW statements over the database',
      'Manually typed column lists for every table',
      'Amazon S3 event notifications on the database',
    ],
    correctAnswers: [0],
    explanation:
      'Crawlers need a connection object to reach JDBC sources. Athena queries S3 through the catalog—it does not register remote OLTP schemas. Manual schema entry is error-prone at scale; S3 events do not apply to relational engines.',
  },
  {
    id: 'dea-store-067',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'crawler', 'rds'],
    question:
      'Stock prices live in a relational database and must appear as catalog tables for downstream batch ingestion. Service that auto-discovers schema into the Glue Data Catalog:',
    options: [
      'AWS Glue crawler (with a JDBC connection)',
      'Apache Spark on EMR as a catalog-only tool',
      'Amazon S3 event notifications',
      'Amazon Athena without any crawler or connection',
    ],
    correctAnswers: [0],
    explanation:
      'Glue crawlers infer schemas and register databases/tables once a JDBC connection exists. EMR Spark processes data—it is not the catalog discovery service. S3 events trigger on object changes, not RDS catalogs; Athena consumes catalog metadata rather than inventing it from RDS alone.',
  },
  {
    id: 'dea-store-068',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'athena', 'parquet'],
    question:
      'Financial CSV files in S3 will be queried heavily with Amazon Athena. Best storage format for scan efficiency:',
    options: [
      'Apache Parquet (columnar)',
      'JSON documents per transaction',
      'Apache Avro as the primary analytics format',
      'Uncompressed CSV forever',
    ],
    correctAnswers: [0],
    explanation:
      'Parquet columnar layout minimizes bytes scanned in Athena. JSON and row-oriented Avro are weaker for wide analytic filters; raw CSV lacks compression and column pruning benefits.',
  },
  {
    id: 'dea-store-069',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 's3', 'zones'],
    question:
      'A lake should keep original ingested files for audit, store cleaned rows separately, and publish joined analytics-ready datasets. Zone layout:',
    options: [
      'Raw zone (original format), cleaned zone (standardized), curated zone (joined for use cases)',
      'A single public bucket with no prefixes',
      'Only Glacier Deep Archive for all active analytics',
      'RDS as the only lake zone',
    ],
    correctAnswers: [0],
    explanation:
      'Student-guide lake design segments S3 by processing stage: raw preserves source format; cleaned holds filtered/standardized data; curated holds merged datasets for analytics and ML. Landing, logs, archive, and sandbox buckets are additional optional zones.',
  },
  {
    id: 'dea-store-070',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 's3', 'pii', 'zones'],
    question:
      'PII files arrive from partners and must be masked before they enter the durable raw lake. Extra bucket the course recommends:',
    options: [
      'A landing zone where data is masked before promotion into the raw zone',
      'The curated zone as the first landing place for unmasked PII',
      'CloudFront as the PII store',
      'Amazon SQS as long-term PII storage',
    ],
    correctAnswers: [0],
    explanation:
      'For sensitive data, use a landing zone, mask or tokenize there, then move into the raw zone so the lake never stores unmasked PII in the durable ingest bucket.',
  },
  {
    id: 'dea-store-071',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 's3', 'storage-class'],
    question:
      'Match S3 archival classes to retrieval needs: millisecond restore vs hours at lowest cost vs flexible archive retrieval. Pairing:',
    options: [
      'Glacier Instant Retrieval; Glacier Deep Archive; Glacier Flexible Retrieval',
      'S3 Standard for all three; Glacier does not exist',
      'Express One Zone for 12-hour compliance archive',
      'S3 One Zone-IA for multi-AZ 11-nines archive',
    ],
    correctAnswers: [0],
    explanation:
      'Instant Retrieval is millisecond archive; Flexible Retrieval is lower-cost archive with flexible restore times; Deep Archive is cheapest long-term archive with longer restores. Express One Zone is high-performance single-AZ hot storage, not deep archive.',
  },
  {
    id: 'dea-store-072',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 's3', 'express'],
    question:
      'A latency-sensitive lake path needs the lowest-latency S3 class and hundreds of thousands of requests per second. Storage class and bucket type:',
    options: [
      'S3 Express One Zone in an S3 directory bucket',
      'S3 Glacier Deep Archive in a general purpose bucket',
      'S3 One Zone-IA for multi-AZ hot data',
      'Amazon EFS as an S3 storage class',
    ],
    correctAnswers: [0],
    explanation:
      'S3 Express One Zone is purpose-built for frequently accessed, lowest-latency object storage using directory buckets. Deep Archive is slow archive; One Zone-IA is infrequent access, not Express performance; EFS is a file system, not an S3 class.',
  },
  {
    id: 'dea-store-073',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'schema-on-read'],
    question:
      'How do data lakes and warehouses typically apply schema?',
    options: [
      'Lakes use schema on read (raw data first); warehouses use schema on write (model before load)',
      'Lakes require schema on write; warehouses never have a schema',
      'Both always enforce schema on write only',
      'Neither stores structured data',
    ],
    correctAnswers: [0],
    explanation:
      'Warehouses store curated structured data designed before insert (schema on write) for fast local SQL. Lakes store raw structured, semi-structured, and unstructured data cheaply and apply schema when queried (schema on read).',
  },
  {
    id: 'dea-store-074',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift-serverless', 'rpu'],
    question:
      'Amazon Redshift Serverless bills compute how, and what is one RPU?',
    options: [
      'RPU-hours per second with a 60-second minimum; 1 RPU = 16 GB of memory',
      'Always-on DC2 nodes billed monthly whether queries run or not',
      'Per S3 LIST request only',
      'Per Glue DPU with no warehouse capacity setting',
    ],
    correctAnswers: [0],
    explanation:
      'Serverless charges for RPU-hours on a per-second basis (60-second minimum), including queries over open file formats in S3. One RPU provides 16 GB of memory. Provisioned DC2 billing is a different model.',
  },
  {
    id: 'dea-store-075',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift-serverless'],
    question:
      'In Redshift Serverless, which construct holds compute (base capacity, usage limits) versus database objects (schemas, tables, users)?',
    options: [
      'Workgroup = compute; namespace = data and users',
      'Namespace = compute; workgroup = only CloudWatch alarms',
      'Leader node = serverless compute unit',
      'Query group = the Serverless namespace',
    ],
    correctAnswers: [0],
    explanation:
      'A workgroup is a collection of compute resources (base RPUs 8–512, default 128, usage and query limits). A namespace is a collection of database objects and users. Leader nodes exist on provisioned clusters, not as the Serverless workgroup abstraction.',
  },
  {
    id: 'dea-store-076',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift', 'ra3'],
    question:
      'RA3 nodes with Redshift Managed Storage (RMS) let you scale compute independently of storage because:',
    options: [
      'Hot data caches on local SSD; cold data tiers to S3-backed managed storage',
      'All table data lives only on the leader node EBS volume',
      'RA3 stores every block exclusively in Glacier Deep Archive',
      'RMS replaces the need for any sort or distribution keys',
    ],
    correctAnswers: [0],
    explanation:
      'RMS decouples compute from storage: high-performance SSD holds hot blocks and S3 holds cold data, scaling automatically. Leader-node-only storage, Glacier-only RMS, and “no keys needed” are incorrect.',
  },
  {
    id: 'dea-store-077',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift', 'multi-az'],
    question:
      'A provisioned RA3 warehouse must keep data current (RPO of zero) and recover faster from an AZ failure. Deployment option and SLA contrast:',
    options: [
      'Multi-AZ RA3: compute in two AZs, 99.99% SLA vs 99.9% single-AZ',
      'Single-AZ DC2 with no snapshots',
      'Pause and resume as the HA strategy',
      'Spectrum external tables as Multi-AZ failover',
    ],
    correctAnswers: [0],
    explanation:
      'Multi-AZ deploys compute in two AZs behind one endpoint, keeps data current (zero RPO), and improves RTO and SLA to 99.99% versus 99.9% single-AZ. Pause/resume saves idle cost; it is not AZ failover. Spectrum queries S3; it is not cluster HA.',
  },
  {
    id: 'dea-store-078',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'redshift', 'pause'],
    question:
      'A provisioned Redshift cluster is unused nights and weekends. Cost action that keeps the warehouse but stops compute charges while idle:',
    options: [
      'Pause the cluster and resume it when queries return',
      'Delete automated snapshots to pause billing',
      'Set DISTSTYLE ALL to zero cost',
      'Disable WLM queues instead of pausing',
    ],
    correctAnswers: [0],
    explanation:
      'Pause and resume stops compute when the cluster is idle and brings it back later. Snapshots, distribution style, and WLM do not implement idle-cost pause.',
  },
  {
    id: 'dea-store-079',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift', 'elastic-resize'],
    question:
      'A provisioned cluster needs more nodes for a peak with minimal downtime. Resize type:',
    options: [
      'Elastic resize to add or remove nodes with minimal downtime',
      'Classic resize as the only option with no session impact ever',
      'Deleting the leader node',
      'UNLOAD then drop the cluster without restore',
    ],
    correctAnswers: [0],
    explanation:
      'Elastic resize scales node count up or down with minimal downtime to match workload. Classic resize takes longer. Removing the leader or dropping the cluster is not a scale operation.',
  },
  {
    id: 'dea-store-080',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'diststyle'],
    question:
      'Choose the Redshift distribution style: small dimension copied to every node; large fact joined on customer_id; staging table that is never joined.',
    options: [
      'ALL, KEY on customer_id, EVEN',
      'EVEN, ALL, KEY',
      'KEY, EVEN, ALL',
      'AUTO is invalid and cannot be used',
    ],
    correctAnswers: [0],
    explanation:
      'ALL places a full copy of a small table on every node for collocated joins. KEY collocates join keys. EVEN round-robins rows when the table is not joined. AUTO is the default and lets Redshift pick a style from table size.',
  },
  {
    id: 'dea-store-081',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'open-table-format', 'hudi', 'delta'],
    question:
      'AWS Glue supports which open table formats for transactional lakes on S3? (Select THREE.)',
    options: [
      'Apache Iceberg',
      'Apache Hudi',
      'Delta Lake',
      'Amazon EBS snapshots as a table format',
      'CloudFront cache behaviors',
      'Route 53 private hosted zones',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Glue supports Iceberg, Hudi, and Delta Lake, adding ACID, record-level updates, compaction, time travel, and schema evolution on S3. EBS, CloudFront, and Route 53 are not lake table formats.',
  },
  {
    id: 'dea-store-082',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'compaction', 'small-files'],
    question:
      'Athena and Spark jobs crawl millions of tiny JSON objects and run slowly. Storage optimization called out in the course:',
    options: [
      'Compact small files and convert to columnar formats such as Parquet',
      'Increase the number of tiny files to improve parallelism always',
      'Store each row as its own Glacier archive',
      'Disable partitioning so every query lists the whole bucket',
    ],
    correctAnswers: [0],
    explanation:
      'The small-files problem increases LIST and open overhead. Compaction plus columnar formats (and partitioning) cuts scan time. More tiny files, per-row Glacier objects, and no partitions make it worse.',
  },
  {
    id: 'dea-store-083',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift', 'datashare'],
    question:
      'A producer Redshift cluster shares views that should pick up underlying table DDL changes without being rebound. View type to include in the datashare:',
    options: [
      'Late-binding views (along with regular and materialized views as needed)',
      'Only temporary tables, which cannot be shared',
      'STL system tables as the datashare unit',
      'S3 inventory reports as Redshift views',
    ],
    correctAnswers: [0],
    explanation:
      'Datashares can include schemas, tables, regular views, late-binding views, materialized views, and SQL UDFs. Late-binding views do not bind to underlying objects at creation time, so they survive some schema changes.',
  },
  {
    id: 'dea-store-084',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift', 'data-exchange'],
    question:
      'A company wants to license live Redshift datasets to external subscribers with AWS handling billing. Datashare type:',
    options: [
      'AWS Data Exchange datashares added to a Data Exchange product',
      'Standard datashare to a random public IP',
      'UNLOAD to a public S3 bucket with no agreement',
      'Lake Formation blueprint as a marketplace SKU',
    ],
    correctAnswers: [0],
    explanation:
      'Data Exchange datashares are the licensing unit for sharing Redshift data through AWS Data Exchange; AWS manages subscription billing. Standard datashares share within accounts/orgs you control; public UNLOAD is not licensed sharing.',
  },
  {
    id: 'dea-store-085',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'glue-catalog'],
    question:
      'After a Glue crawler finishes, what is stored in the Data Catalog versus what remains in S3?',
    options: [
      'Catalog: metadata (location, schema, partitions, SerDe); S3: the actual data files',
      'Catalog: a full copy of every source row',
      'Catalog: only IAM policies; no table metadata',
      'S3 stores schemas only; the catalog stores file bytes',
    ],
    correctAnswers: [0],
    explanation:
      'The catalog holds table name, database, storage descriptor (format, location, SerDe), schema, partition keys, and parameters—not the source data itself. ETL engines use that metadata to read the files in S3.',
  },
  {
    id: 'dea-store-086',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 's3-tables', 'iceberg'],
    question:
      'A lakehouse needs Iceberg tables with S3-managed storage that is optimized for analytics TPS, not a self-managed Iceberg layout in a general purpose bucket. v1.1 in-scope feature:',
    options: [
      'Amazon S3 Tables in a table bucket, which stores Apache Iceberg tables as subresources',
      'S3 Glacier Deep Archive as an interactive Iceberg catalog',
      'Amazon EFS with CSV folders advertised as Iceberg',
      'Amazon S3 Standard-IA objects named .iceberg with no table metadata',
    ],
    correctAnswers: [0],
    explanation:
      'S3 Tables use a distinct table-bucket type built for Iceberg tabular data (higher TPS, SQL via Athena/Redshift/Spark). Glacier, EFS, and renamed objects are not S3 Tables.',
  },
  {
    id: 'dea-store-087',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 's3-tables', 'compaction'],
    question:
      'Iceberg on S3 Tables should compact small files, expire old snapshots, and drop unreferenced objects without a nightly Glue Spark maintenance job. Default behavior:',
    options: [
      'S3 Tables automatic maintenance: compaction, snapshot management, and unreferenced file removal',
      'Athena OPTIMIZE/VACUUM as the only supported maintenance path on S3 Tables',
      'Manual EMR cluster required because table buckets never compact',
      'S3 Lifecycle transitions Iceberg metadata to Glacier, which is equivalent to compaction',
    ],
    correctAnswers: [0],
    explanation:
      'Table buckets run compaction (default target ~512 MB), snapshot management, and unused-file cleanup. Athena cannot run OPTIMIZE/VACUUM on S3 Tables—you configure maintenance on S3. Lifecycle to Glacier is not Iceberg compaction.',
  },
  {
    id: 'dea-store-088',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 's3-tables', 'glue-catalog'],
    question:
      'After S3 Tables are created, Athena and Redshift should discover them through the account Data Catalog. Integration step:',
    options: [
      'Integrate table buckets with AWS Glue Data Catalog (creates the s3tablescatalog catalog in that Region)',
      'Point Athena at the table-bucket HTTP website endpoint with no catalog',
      'Register each Parquet file as its own Glue crawler source with no Iceberg metadata',
      'Export table definitions to Amazon Kendra as the metastore',
    ],
    correctAnswers: [0],
    explanation:
      'One Region-level analytics integration adds s3tablescatalog so current and future table buckets, namespaces, and tables show up for Athena, Redshift, EMR, and related engines. Kendra is search, not a table catalog.',
  },
  {
    id: 'dea-store-089',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 's3-tables', 'security'],
    question:
      'A team wants a public S3 Tables table bucket so partners can list Iceberg files on the internet. Constraint:',
    options: [
      'Impossible: Block Public Access is always on for table buckets and cannot be disabled',
      'Enable a bucket website and ACL PublicRead on the table bucket',
      'Set the s3tables namespace policy to Principal: * with no condition',
      'Turn off Block Public Access the same way as a general purpose bucket',
    ],
    correctAnswers: [0],
    explanation:
      'S3 Tables uses the s3tables API namespace and always-on Block Public Access. Share through IAM, Lake Formation, and analytics integrations—not public ACLs.',
  },
  {
    id: 'dea-store-090',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'hnsw', 'ivf'],
    question:
      'Aurora PostgreSQL (pgvector) will take frequent inserts of new embeddings and serve low-latency k-NN. Index type to prefer (skill 2.1.8):',
    options: [
      'HNSW: graph index that supports incremental inserts and typically better query latency/recall than IVFFlat',
      'IVFFlat only: centroids never go stale, so it is always better for changing data',
      'B-tree on the embedding column, which is the pgvector ANN default',
      'No index: sequential scan is required for any dataset larger than 1,000 vectors',
    ],
    correctAnswers: [0],
    explanation:
      'HNSW is the usual production choice on Aurora/pgvector for mutating vector data. IVFFlat is cheaper to build and uses less memory but freezes centroids, so recall drops until you rebuild. B-tree is not an ANN vector index.',
  },
  {
    id: 'dea-store-091',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'memorydb', 'aurora'],
    question:
      'A session cache needs microsecond GET/SET of hot keys. A separate RAG path needs SQL plus vector similarity on the same operational database. Pair (skill 2.1.3):',
    options: [
      'Amazon MemoryDB (or ElastiCache) for the key-value cache; Aurora PostgreSQL with pgvector (HNSW/IVF) for SQL + embeddings',
      'S3 Glacier for the session cache because it is cheapest per GET',
      'Amazon Keyspaces as the only supported pgvector engine',
      'Amazon Redshift RA3 as a microsecond key-value store',
    ],
    correctAnswers: [0],
    explanation:
      'The exam guide cites HNSW on Aurora PostgreSQL and MemoryDB for fast key/value. Glacier is archive; Keyspaces is Cassandra-compatible CQL; Redshift is a warehouse, not a cache.',
  },
  {
    id: 'dea-store-092',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'bedrock', 'vectorization'],
    question:
      'Policy PDFs in S3 must support semantic Q&A via a foundation model. Vectorization pipeline the exam names (skill 2.4.6):',
    options: [
      'Amazon Bedrock Knowledge Bases: ingest, chunk, embed, and store vectors in a supported vector store, then retrieve at query time',
      'Amazon Athena CTAS to VARCHAR as a vector index',
      'Amazon Kinesis Data Firehose gzip as embeddings',
      'AWS Glue crawler classifiers as an embedding model',
    ],
    correctAnswers: [0],
    explanation:
      'Bedrock Knowledge Bases is the managed RAG/vectorization path (unstructured S3/docs into embeddings). CTAS, Firehose compression, and crawlers do not create vector indexes.',
  },
  {
    id: 'dea-store-093',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'sagemaker-catalog'],
    question:
      'A producer project curates a Glue table with business glossary terms. Other domain projects must discover it and request access. SageMaker Catalog pattern (skill 2.2.6):',
    options: [
      'Publish the asset to the domain-scoped SageMaker Catalog; consumer projects subscribe and the owner project grants after approval',
      'Leave the table unpublished in the project; discovery still spans the whole organization automatically',
      'Email a JDBC password; Catalog publish is only for SageMaker training jobs',
      'Register the table in Amazon Kendra as the business data catalog',
    ],
    correctAnswers: [0],
    explanation:
      'SageMaker Catalog is the v1.1 business catalog: domain-wide discovery, producer-owned assets, subscribe/approve fulfillment. Unpublished project artifacts stay inside the project. Kendra is not that catalog.',
  },
  {
    id: 'dea-store-094',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'keyspaces', 'dynamodb'],
    question:
      'An existing Apache Cassandra application must move to AWS with CQL retained. A different app needs a serverless key-value store with single-digit millisecond GetItem and DynamoDB Streams. Stores:',
    options: [
      'Amazon Keyspaces (for Cassandra) for the CQL app; Amazon DynamoDB for the key-value app',
      'Amazon Neptune for both because Gremlin replaces CQL and DynamoDB APIs',
      'Amazon DocumentDB as a DynamoDB drop-in with Streams',
      'Amazon MemoryDB as a Cassandra-compatible CQL endpoint',
    ],
    correctAnswers: [0],
    explanation:
      'Keyspaces is the in-scope Cassandra-compatible managed service. DynamoDB is the serverless key-value/document store with Streams. Neptune is graph; DocumentDB is MongoDB-compatible; MemoryDB is Redis.',
  },
  {
    id: 'dea-store-095',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift-spectrum', 'parquet'],
    question:
      'Redshift Spectrum on an S3 lake must scan as little as possible. Which two storage choices actually help? (Select TWO.)',
    options: [
      'A columnar format such as Parquet or ORC so Spectrum reads only needed columns',
      'Hive-style partitions on the predicates used in WHERE clauses so Spectrum can prune prefixes',
      'Gzip of each file into a single 1–5 GB unsplittable blob',
      'Millions of <10 KB objects and non-splittable encodings so every reader opens more files',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Columnar layouts plus predicate partitioning cut bytes and LIST work. Huge unsplittable gzip, tiny files, and non-splittable formats slow Spectrum; they do not make it faster.',
  },
  {
    id: 'dea-store-096',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'athena', 'orc'],
    question:
      'Athena queries a growing set of daily CSV logs and needs shorter scans plus reader parallelism. Layout:',
    options: [
      'Convert to multiple ORC (or Parquet) files per day, partition by date, rely on columnar projection/predicate pushdown',
      'Convert to JSON and keep one giant object per day',
      'Convert to Avro only, because Avro is columnar like ORC',
      'One single Parquet file per day so Athena can use only one reader',
    ],
    correctAnswers: [0],
    explanation:
      'ORC/Parquet are columnar and splittable; several files per partition let Athena parallelize. JSON/Avro are weaker for column pruning. A single file per day limits concurrency.',
  },
  {
    id: 'dea-store-097',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'athena', 'crawler'],
    question:
      'A Glue crawler excludes *.json while cataloging an S3 prefix that also has CSV. Athena still reads the JSON. Fastest fix that does not change CSV IAM access:',
    options: [
      'Move the JSON objects to a different prefix (or bucket) that is not the table location Athena scans',
      'Trust the crawler exclude as an Athena read filter—Athena honors crawler exclude patterns at query time',
      'A console checkbox in Athena that permanently ignores JSON anywhere in the account',
      'An S3 bucket policy that denies json while you still point the table at the mixed prefix, expecting shorter scans',
    ],
    correctAnswers: [0],
    explanation:
      'Athena reads whatever is under the table’s S3 location; crawler exclude only affects what the crawler catalogs. Relocating unwanted files is the documented fix. Deny policies do not make mixed prefixes scan faster.',
  },
  {
    id: 'dea-store-098',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'dynamodb', 'gsi', 'lsi'],
    question:
      'A DynamoDB table is partitioned on RideID with TripStartTime as the base sort key. Drivers need completed rides only, without a table scan. Access pattern:',
    options: [
      'A global secondary index with DriverID as the partition key and RideStatus as the sort key, then Query that GSI',
      'A local secondary index on DriverID; an LSI must keep the base table’s partition key (RideID)',
      'A GSI partitioned on RiderID when the query is by driver',
      'A FilterExpression on the base table as a replacement for a Query-able key',
    ],
    correctAnswers: [0],
    explanation:
      'A GSI can use a different partition key than the base table. An LSI cannot—it always shares the base PK. FilterExpression still reads matching PK items and then drops rows, which is not a skip-scan index.',
  },
  {
    id: 'dea-store-099',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'glue-crawler', 'redshift'],
    question:
      'Redshift table DDL changes must show up in the Glue Data Catalog every day for lake engines. Lightweight sync:',
    options: [
      'Schedule a Glue crawler with a JDBC connection to Redshift and write updates to the Glue Data Catalog',
      'AWS DataSync as a Redshift metastore replicator into Glue',
      'AWS SCT writing Hive metastore DDL on a cron, skipping Glue',
      'A daily crawler that updates only an Apache Hive metastore and never Glue',
    ],
    correctAnswers: [0],
    explanation:
      'Glue crawlers support JDBC sources including Redshift and refresh Glue catalog schemas. DataSync copies files, not table DDL. SCT converts schemas for migrations; it is not the daily Glue catalog sync. Hive-only misses the Glue catalog the lake uses.',
  },
  {
    id: 'dea-store-100',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'diststyle'],
    question:
      'A Redshift cluster cannot grow. Small, rarely updated dimensions sit next to huge EVEN facts. Distribution that helps joins without copying facts to every node:',
    options: [
      'DISTSTYLE ALL on those small, slowly changing tables; declare primary and foreign keys so the optimizer can use them',
      'DISTSTYLE ALL on every hundred-gigabyte fact table',
      'Keep EVEN on tiny dimensions that are joined on every query, with no keys declared',
      'Invent partition keys on RA3 local disks as a substitute for ALL/KEY/EVEN',
    ],
    correctAnswers: [0],
    explanation:
      'ALL copies a small table to every node so joins avoid redistributing it. ALL on large facts wastes storage and slows loads. Declared PK/FK are informational but help the planner. EVEN is fine for unjoined staging, not for hot tiny dimensions.',
  },
  {
    id: 'dea-store-101',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'rds', 'performance-insights'],
    question:
      'RDS for MySQL is write-heavy, instance CPU is pegged, and the app is slowing. Which two actions actually cut CPU? (Select TWO.)',
    options: [
      'Use Performance Insights to find expensive SQL, then tune those statements',
      'Move to a larger instance class if vCPU is still saturated after query work',
      'Add more secondary indexes first on a write-heavy workload (indexes add write CPU)',
      'Put ElastiCache in front when almost all load is writes, not reads',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Performance Insights shows which SQL burns CPU. A larger class adds vCPU if the instance is the limit. Extra indexes and read caches do not help a write-dominated CPU problem and can make writes worse. Weekly reboots are not a tuning strategy.',
  },
  {
    id: 'dea-store-102',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'dynamodb', 'autoscaling'],
    question:
      'A provisioned DynamoDB table spikes every Monday morning and is quiet on weekends. Most cost-effective consistent peak performance:',
    options: [
      'Application Auto Scaling scheduled actions: raise provisioned RCU/WCU before Monday, lower them for the weekend',
      'Leave provisioned capacity at the Monday peak 24×7',
      'Split into two tables each at half the capacity and hope queries fan out',
      'Switch to on-demand when the traffic shape is already a known weekly calendar',
    ],
    correctAnswers: [0],
    explanation:
      'Scheduled auto scaling pre-warms provisioned capacity for known peaks and drops it off-peak. Always-on peak waste money. Table-splitting is not a capacity feature. On-demand fits unpredictable spikes, not a cheap predictable weekly pattern.',
  },
  {
    id: 'dea-store-103',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'glue-crawler', 'partitions'],
    question:
      'Athena tables need year/month/day partitions created daily and must pick up schema changes. Partition projection alone is not enough. Job:',
    options: [
      'A scheduled AWS Glue crawler on the S3 prefix (discovers new partitions and evolving schema)',
      'Glue DataBrew as the partition registrar',
      'A Lambda that only MSCK REPAIR TABLE and never updates schema',
      'Partition projection properties with no crawler, when new columns also appear each week',
    ],
    correctAnswers: [0],
    explanation:
      'A crawler both adds Hive-style partitions and refreshes schema in the Glue Catalog. Projection is great for stable date layouts but does not infer new columns. DataBrew prepares data; it is not the catalog partition job.',
  },
  {
    id: 'dea-store-104',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 's3', 'lifecycle'],
    question:
      '10 million new objects/day, 2 KB–5 MB: hot 60 days, infrequent 61–180 (ms reads), 181–365 retrieve within an hour, then delete. Native rule:',
    options: [
      'S3 Lifecycle: Standard → Standard-IA after 60 days → Glacier Flexible Retrieval after 180 days → expire after 365 days',
      'Intelligent-Tiering with Archive Access as the only control, plus a bucket policy that “expires” objects',
      'S3 Inventory plus Batch Operations each day to copy classes by hand',
      'A daily Lambda that rewrites every object into a new storage class',
    ],
    correctAnswers: [0],
    explanation:
      'Lifecycle transitions and expiration match those ages without inventory jobs. Standard-IA is millisecond infrequent access; Glacier Flexible Retrieval is minutes-to-hours. Intelligent-Tiering Archive Access and DIY Batch/Lambda are extra machinery. Tiny objects can have IA/Glacier minimum-size billing, but the exam still wants Lifecycle over custom movers.',
  },
  {
    id: 'dea-store-105',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'dynamodb', 'global-tables'],
    question:
      'A NoSQL OLTP store must stay fully managed, single-digit millisecond, and writable in multiple Regions. Least ops:',
    options: [
      'Amazon DynamoDB global tables (multi-active replication)',
      'Amazon Keyspaces as the only global OLTP option',
      'Amazon DocumentDB with a customer-managed multi-Region mesh as the serverless default',
      'Amazon Timestream, which is a time-series store rather than a general document/key-value OLTP engine',
    ],
    correctAnswers: [0],
    explanation:
      'DynamoDB global tables are the managed multi-Region, multi-active OLTP path. Keyspaces and DocumentDB can be NoSQL but are not the exam’s global single-digit-ms default. Timestream is for time series.',
  },
  {
    id: 'dea-store-106',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'iceberg', 'glue', 'compaction'],
    question:
      'Glue-managed Iceberg (Parquet) tables are slow to query. Which two Glue Data Catalog optimizations help? (Select TWO.)',
    options: [
      'Generate column-level statistics on a schedule so engines can prune and plan',
      'Enable Glue managed compaction so small Iceberg files are rewritten into larger ones',
      '“Automatically optimize indexes” on Iceberg in Glue as a documented catalog feature',
      'Switch Iceberg to copy-on-write in the Glue Catalog console as the compaction substitute',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Glue can compute Iceberg column stats and run managed compaction on Parquet Iceberg tables. There is no Glue “auto-index Iceberg” or COW toggle that replaces those two.',
  },
  {
    id: 'dea-store-107',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'kinesis', 'resource-policy'],
    question:
      'A Lambda in Account B must read an enhanced-fan-out Kinesis stream in Account A. The B-side execution role already allows Kinesis reads. Still missing:',
    options: [
      'A resource-based policy on the stream in Account A that allows that cross-account role to read',
      'An SCP attached to Account A that “grants” stream access (SCPs cannot grant)',
      'An SCP on Account B as the stream-owner policy',
      'A resource-based policy on the Lambda function granting the stream to itself',
    ],
    correctAnswers: [0],
    explanation:
      'Cross-account Kinesis reads need identity-based permission on the role and a resource-based policy on the stream. SCPs only set a permission ceiling. The Lambda function policy authorizes who may invoke Lambda, not who may read Kinesis.',
  },
  {
    id: 'dea-store-108',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'athena', 'iceberg'],
    question:
      'Serverless SQL on S3 must JOIN partitioned objects, keep ACID, and avoid a cluster. Cost-effective engine:',
    options: [
      'Amazon Athena on Apache Iceberg tables (partitioned, transactional)',
      'Amazon S3 Select as a multi-bucket JOIN and ACID store',
      'Redshift Spectrum, which requires a warehouse you keep warm for this ad-hoc lake job',
      'Amazon EMR as the serverless SQL default',
    ],
    correctAnswers: [0],
    explanation:
      'Athena queries Iceberg in S3 with partitions and ACID, pay-per-query, no cluster. S3 Select is per-object. Spectrum needs Redshift. EMR is a cluster.',
  },
  {
    id: 'dea-store-109',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'hudi', 'incremental'],
    question:
      'A 1 TB S3 dimension (~10 million rows) gets up to 10,000 record changes a day. Lowest runtime updates:',
    options: [
      'Apache Hudi (or similar open table format) on EMR/Glue Spark so only the change set is upserted',
      'Load the full 1 TB plus deltas into Pandas on Glue Python shell and DataFrame.update',
      'Two Spark DataFrames and a generic Spark “update” of the whole base table every day',
      'Rewrite the entire 1 TB Parquet tree in EMR with no incremental commit log',
    ],
    correctAnswers: [0],
    explanation:
      'Hudi (and Iceberg/Delta) apply record-level upserts using a commit log so you do not rewrite 1 TB for 10k rows. Full DataFrame updates scan the history every day.',
  },
  {
    id: 'dea-store-110',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'athena', 'partitioning'],
    question:
      'Hourly sensor files are queried daily by sensor category (millions of rows). Fastest layout:',
    options: [
      'Parquet, partition by sensor category, sort by event date inside the partition',
      'ORC partitioned only by date and sorted by category (category queries still list every date prefix)',
      'CSV partitioned by date, sorted by operational status',
      'CSV partitioned by date, sorted by category',
    ],
    correctAnswers: [0],
    explanation:
      'Partition keys should match the filter you always use—here, category—so Athena prunes other categories. Columnar Parquet plus a date sort helps time filters inside a category. Date-only partitions and CSV do extra I/O.',
  },
  {
    id: 'dea-store-111',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'athena', 'partition-projection'],
    question:
      'An Athena table is daily-partitioned for five years and Glue partition metadata lookups are slow. Automate new days without a Lambda that ADD PARTITIONs:',
    options: [
      'Athena partition projection with a date type and a range from five years ago through now (and an S3 template)',
      'A daily Lambda that registers tomorrow’s partition in Glue',
      'Collapse five years of days into monthly partitions as the only metadata fix',
      'Allocate more Athena DPU as if that replaced Glue partition APIs',
    ],
    correctAnswers: [0],
    explanation:
      'Projection computes Hive-style date partitions at query time from table properties, so Glue is not called per partition and new dates appear as data lands. Lambdas and coarser partitions are extra ops or change the grain. Athena SQL capacity does not shrink catalog metadata.',
  },
  {
    id: 'dea-store-112',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 'dynamodb', 'ttl'],
    question:
      'A busy DynamoDB table must shrink automatically after 30 days without pausing traffic or paying delete WCU. Feature:',
    options: [
      'DynamoDB TTL: write a Unix-epoch expiry on each item; expired items are deleted in the background at no extra write cost',
      'EventBridge plus Lambda Scan/Delete of old items (consumes RCU/WCU and needs a schedule)',
      'A DynamoDB stream Lambda that deletes “old” items on every write',
      'An S3-style lifecycle configuration on the DynamoDB table (that API does not exist)',
    ],
    correctAnswers: [0],
    explanation:
      'TTL is the managed age-out path and does not consume provisioned write capacity for those deletes. Scans, streams, and fictional lifecycle rules are more ops and can affect throughput. Deletion is asynchronous (often within a couple of days after expiry).',
  },
  {
    id: 'dea-store-113',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift', 'datashare'],
    question:
      'A sales BI Redshift cluster must JOIN weekly summaries from a busy ETL cluster without copying data or burning ETL compute:',
    options: [
      'Make the BI cluster a datashare consumer; queries run on the consumer, the ETL cluster keeps producing',
      'Grant analysts direct login to the ETL cluster and run their JOINs there',
      'Materialized views on the ETL cluster that sales queries against the producer',
      'Weekly UNLOAD to S3 and Spectrum as the live-share substitute',
    ],
    correctAnswers: [0],
    explanation:
      'Datashares expose live producer objects to a consumer. Consumer WLM runs the BI SQL, isolating the ETL workload. Direct producer access, producer MVs, and weekly copies either steal ETL CPU or add lag.',
  },
  {
    id: 'dea-store-114',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'opensearch'],
    question:
      'Near-real-time search, ~1,000 QPS, low latency, and each team must tune its own instance size and cost:',
    options: [
      'A separate Amazon OpenSearch Service domain (cluster) per team, with indexing for queries',
      'Athena on S3 prefixes as a 1,000 QPS search engine',
      'Kinesis + Managed Flink as the document search store',
      'Aurora I/O-Optimized as OpenSearch for full-text search',
    ],
    correctAnswers: [0],
    explanation:
      'OpenSearch is the managed search/analytics engine; separate domains give independent capacity and cost knobs. Athena, Flink, and Aurora are not that search product.',
  },
  {
    id: 'dea-store-115',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 's3', 'lifecycle'],
    question:
      'New S3 objects must stay immediately readable for 30 days, then are rarely read but still need millisecond GET. Known pattern, cheapest:',
    options: [
      'Lifecycle transition from S3 Standard to S3 Standard-IA after 30 days',
      'S3 Intelligent-Tiering as required when the 30-day hot window is already known',
      'Glacier Deep Archive after 30 days while still needing millisecond reads',
      'Standard-IA from day zero, paying the IA minimum duration on hot objects',
    ],
    correctAnswers: [0],
    explanation:
      'Standard for the hot month, then Standard-IA for infrequent millisecond access. Intelligent-Tiering fits unknown patterns. Deep Archive is restore-based. IA from day one bills IA on data you still touch daily.',
  },
  {
    id: 'dea-store-116',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift-serverless', 'quicksight'],
    question:
      'QuickSight direct query, a few hours per day with unpredictable spikes, needs warehouse-class latency without cluster babysitting:',
    options: [
      'Amazon Redshift Serverless loading into Redshift managed storage',
      'Athena on Parquet as the only warehouse with RMS-style performance SLAs',
      'A provisioned Redshift cluster sized for the spike and idle the rest of the day',
      'Aurora PostgreSQL as the enterprise analytics warehouse for this BI pattern',
    ],
    correctAnswers: [0],
    explanation:
      'Serverless Redshift scales RPUs for bursty BI and stores data in RMS. Athena is lake SQL, not a loaded warehouse. Provisioned clusters waste idle hours. Aurora is OLTP-oriented compared with this warehouse use.',
  },
  {
    id: 'dea-store-117',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'diststyle'],
    question:
      'A Redshift join of a 10-billion-row sales table to a 900-million-row sales table is slow after the merge. Improve the join without replicating the 900 M table: (Select TWO.)',
    options: [
      'DISTSTYLE KEY on both tables using a high-cardinality join column so matching rows land on the same slices',
      'Amazon Redshift Advisor, then apply its dist-key / ALTER TABLE recommendations',
      'KEY both tables on a low-cardinality column (skews slices)',
      'DISTSTYLE ALL on the 900-million-row table (copies it to every node)',
    ],
    correctAnswers: [0, 1],
    explanation:
      'KEY on a high-cardinality join key collocates rows and avoids a large redistribute. Advisor suggests beneficial dist styles from workload. Low-cardinality KEY skews. ALL on hundreds of millions of rows blows storage and load time. EVEN on the large table still shuffles the join.',
  },
  {
    id: 'dea-store-118',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'athena', 'partitions'],
    question:
      'You moved every S3 object out of Hive partition status=01 into status=02. Glue still lists the empty status=01 partition. Command that actually removes it:',
    options: [
      'ALTER TABLE … DROP PARTITION for status=01',
      'MSCK REPAIR TABLE, which only adds partitions it newly sees under the prefix',
      'ALTER TABLE SET TBLPROPERTIES as a partition delete',
      'ALTER TABLE CHANGE COLUMN as a partition delete',
    ],
    correctAnswers: [0],
    explanation:
      'MSCK REPAIR TABLE registers new prefixes; it does not drop catalog rows for empty ones. DROP PARTITION removes the stale Glue/Athena partition so queries stop reading a dead location.',
  },
  {
    id: 'dea-store-119',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'diststyle'],
    question:
      'A growing denormalized Redshift table has no good distribution-key column. Least ongoing dist-style babysitting:',
    options: [
      'DISTSTYLE AUTO so Redshift picks and can later change the style as the table grows',
      'DISTSTYLE ALL on the large, growing table',
      'DISTSTYLE KEY on a column you already know is a poor key',
      'EVEN forever with no review, even after AUTO exists',
    ],
    correctAnswers: [0],
    explanation:
      'AUTO is the low-maintenance default: Redshift chooses EVEN/ALL/KEY from table data and can adjust as size changes. ALL on a large table wastes disk. KEY without a suitable column causes skew. EVEN is fine until a better key appears, but AUTO is the “do not keep retuning” answer.',
  },
  {
    id: 'dea-store-120',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'athena', 'partitions'],
    question:
      'You already know two S3 prefixes to register as Athena partitions and must not list the table location:',
    options: [
      'ALTER TABLE ADD PARTITION for those two locations',
      'MSCK REPAIR TABLE, which scans the prefix to discover Hive-style folders',
      'A Glue crawler as the only command that can add two known partitions',
      'CREATE TABLE as a partition add',
    ],
    correctAnswers: [0],
    explanation:
      'ADD PARTITION writes catalog rows for locations you specify. MSCK REPAIR TABLE walks S3. A crawler also lists objects. Use ADD PARTITION when the paths are already known.',
  },
  {
    id: 'dea-store-121',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift', 'super'],
    question:
      'Warehouse users must query nested JSON together with dimensional tables without flattening it in Glue first:',
    options: [
      'Load JSON into a SUPER column and query it with PartiQL in Redshift',
      'Force Glue to explode every key into columns before COPY',
      'Lambda flatten into CSV as the required SUPER substitute',
      'Store the JSON as TEXT and hope joins parse it',
    ],
    correctAnswers: [0],
    explanation:
      'SUPER holds semi-structured JSON in-place so you skip a flatten ETL. TEXT/CSV explosion is extra work the type was built to avoid.',
  },
  {
    id: 'dea-store-122',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'dynamodb', 'dax'],
    question:
      'A DynamoDB document table is read-heavy and needs microsecond eventually consistent reads without rewriting the app’s DynamoDB API:',
    options: [
      'DynamoDB Accelerator (DAX) in front of the table',
      'ElastiCache with a custom protocol as the required DAX replacement',
      'S3 Standard as a microsecond document store',
      'Athena on DynamoDB exports for single-digit-ms item gets',
    ],
    correctAnswers: [0],
    explanation:
      'DAX is a DynamoDB-compatible write-through cache. Other caches need a different client. S3 and Athena are not that item cache.',
  },
  {
    id: 'dea-store-123',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 's3', 'storage-lens'],
    question:
      'Find incomplete multipart uploads and buckets piling up noncurrent versions across the org, least CLI:',
    options: [
      'Amazon S3 Storage Lens dashboards for those cost metrics',
      'Hand-built aws s3api inventory on every account as the first choice',
      'S3 Inventory only, with no org-wide dashboard',
      'CloudTrail as a storage-class optimizer',
    ],
    correctAnswers: [0],
    explanation:
      'Storage Lens rolls up incomplete MPU bytes and version waste. Inventory and CLI can list objects but are more ops for the same org view.',
  },
  {
    id: 'dea-store-124',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'athena', 'capacity'],
    question:
      'Athena SQL queues at peak because on-demand processing is saturated. Queries must start without waiting:',
    options: [
      'Provisioned capacity (DPUs) on the workgroup sized for that concurrent peak',
      'Raise the result-row limit, which does not add compute',
      'A larger S3 bucket as Athena capacity',
      'Redshift Spectrum as the only way to add Athena DPUs',
    ],
    correctAnswers: [0],
    explanation:
      'Provisioned capacity reserves Athena DPUs so queued queries can start. Result limits and bucket size are not capacity. Spectrum is a different engine.',
  },
  {
    id: 'dea-store-125',
    domain: 'store',
    task: '2.2',
    tags: ['dea-c01', 'glue', 'catalog-views'],
    question:
      'Athena and Redshift must see the same governed view that masks PII, without each engine keeping its own view DDL:',
    options: [
      'Glue Data Catalog views (multi-dialect, definer semantics) plus Lake Formation grants on the view',
      'A Redshift-only view that Athena cannot use',
      'Copy the table per engine and mask in each copy',
      'QuickSight row-level security as the lake view engine',
    ],
    correctAnswers: [0],
    explanation:
      'Catalog views are stored once and queried by supported engines as the view owner, so consumers need view grants rather than table grants. Per-engine copies drift.',
  },
  {
    id: 'dea-store-126',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'neptune'],
    question:
      'Amazon Neptune must answer both property-graph and RDF queries. Languages: (Select TWO.)',
    options: [
      'Gremlin',
      'SPARQL',
      'Spark SQL as a Neptune graph language',
      'ANSI SQL as the Neptune RDF language',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Neptune speaks Gremlin (and openCypher) for property graphs and SPARQL for RDF. Spark SQL and warehouse SQL are not Neptune query languages.',
  },
  {
    id: 'dea-store-127',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'sortkey'],
    question:
      'Queries always filter Region ID and Department ID, sometimes Role ID. Compound SORTKEY order:',
    options: [
      'Region ID, then Department ID, then Role ID so predicates hit a leading prefix',
      'Role ID first because it has the highest cardinality',
      'Department ID only; compound keys ignore leading columns',
      'No sort key; WHERE column order in SQL is what Redshift uses as the sort key',
    ],
    correctAnswers: [0],
    explanation:
      'Compound sort keys help when filters constrain a left-hand prefix. Predicate order in the SQL text is not the sort key. Putting a rarely filtered high-cardinality column first wastes the prefix.',
  },
  {
    id: 'dea-store-128',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'copy'],
    question:
      'Redshift must COPY files that live under several unrelated S3 prefixes, in parallel, as one load:',
    options: [
      'One COPY that points at a manifest listing every object key',
      'One COPY per prefix, run concurrently on the same table (they serialize)',
      'INSERT SELECT from S3 as the bulk path',
      'Glue as required whenever prefixes differ',
    ],
    correctAnswers: [0],
    explanation:
      'A manifest lists keys across folders for a single parallel COPY. Multiple COPY onto one table queue. INSERT is slower than COPY for bulk files.',
  },
  {
    id: 'dea-store-129',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 's3', 'glacier-select'],
    question:
      'Audit SQL needs a subset of objects already in S3 Glacier Flexible Retrieval without restoring every byte:',
    options: [
      'S3 Glacier Select against the archive, returning only matching rows',
      'Restore the entire prefix to Standard for every audit',
      'Athena directly on Glacier objects with no restore or Select',
      'S3 Select on Standard as if the objects were not in Glacier',
    ],
    correctAnswers: [0],
    explanation:
      'Glacier Select runs limited SQL on archived objects and returns a subset. Full restores and Athena-on-Glacier without retrieval are the expensive or invalid paths.',
  },
  {
    id: 'dea-store-130',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'redshift', 'concurrency-scaling'],
    question:
      'An RA3 cluster’s WLM queue spikes above concurrency. Eligible reads and writes should burst without resizing the main cluster:',
    options: [
      'Set the queue’s concurrency scaling mode to auto',
      'Classic resize at every spike',
      'Enable concurrency scaling on DC2 as if RA3 were not the requirement',
      'Add more WLM queues with no scaling, hoping queries stop waiting',
    ],
    correctAnswers: [0],
    explanation:
      'Concurrency scaling is a WLM-queue setting (auto). RA3 supports it for eligible read and write. Extra queues without burst clusters still wait.',
  },
  {
    id: 'dea-store-131',
    domain: 'store',
    task: '2.1',
    tags: ['dea-c01', 'redshift', 'spectrum', 'federated'],
    question:
      'Keep last 15 months hot in Redshift, older facts in S3, and still JOIN live Aurora PostgreSQL:',
    options: [
      'Redshift Federated Query to Aurora; UNLOAD aged rows to S3 and query them with Spectrum',
      'Keep 15 years in local RMS and federate S3 with DMS',
      'Athena as the only join engine for Aurora plus Redshift',
      'Copy Aurora into S3 nightly as the live operational join',
    ],
    correctAnswers: [0],
    explanation:
      'Federated Query hits live Aurora. UNLOAD plus Spectrum keeps the warehouse slim. Nightly copies and “Athena-only” drop warehouse-local performance for current months.',
  },
  {
    id: 'dea-store-132',
    domain: 'store',
    task: '2.3',
    tags: ['dea-c01', 's3', 'intelligent-tiering'],
    question:
      'Access patterns are unknown. Every GET must stay millisecond, including after objects go cold. Intelligent-Tiering catch:',
    options: [
      'Use Intelligent-Tiering; leave optional Deep Archive Access off (that tier needs a restore)',
      'Turn on Deep Archive Access because it is still millisecond',
      'Glacier Deep Archive as Intelligent-Tiering’s default hot tier',
      'Standard-IA from day zero when the pattern is unknown',
    ],
    correctAnswers: [0],
    explanation:
      'Archive Instant Access is millisecond. Optional Archive/Deep Archive Access tiers require restore. Known 30-day heat is a Lifecycle to IA problem, not this one.',
  },
  {
    id: 'dea-store-133',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'data-modeling', 'erd'],
    question:
      'Before physical tables exist, you need a picture of customers, orders, and how those objects relate. Artifact:',
    options: [
      'An entity-relationship diagram (entities, attributes, and relationships)',
      'An ETL job that is the diagram',
      'An S3 prefix, which is physical storage, not a logical model',
      'A DataBrew recipe as the ERD',
    ],
    correctAnswers: [0],
    explanation:
      'ERDs document logical entities and their relationships. They do not store bytes, cleanse data, or replace ETL.',
  },
  {
    id: 'dea-store-134',
    domain: 'store',
    task: '2.4',
    tags: ['dea-c01', 'avro', 'schema-evolution'],
    question:
      'Producers will add optional fields over time and many languages must read the same files. Row format that carries a self-describing schema:',
    options: [
      'Apache Avro (schema in the file/registry, designed for evolution and cross-language readers)',
      'CSV, which has no embedded schema',
      'JSON documents with no contract, hoping every producer stays compatible',
      'Parquet as the first choice when the need is schema evolution rather than columnar scans (Parquet is the analytics layout; Avro is the evolution-friendly row format)',
    ],
    correctAnswers: [0],
    explanation:
      'Avro is a row format with a first-class schema and evolution rules, which is why streaming and Schema Registry default to it. Parquet/ORC win Athena/Redshift scans. CSV/JSON lack Avro’s compatibility contract.',
  },
]
