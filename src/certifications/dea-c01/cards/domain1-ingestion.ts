import type { Card } from '../../../core/types'

export const ingestionCards: Card[] = [
  {
    id: 'dea-ing-001',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis'],
    question: 'Real-time clickstream events must be ingested at scale with replay capability. Which service is purpose-built for streaming ingestion?',
    options: [
      'Amazon Kinesis Data Streams',
      'Amazon S3 Glacier',
      'AWS Snowball Edge',
      'Amazon Lightsail',
    ],
    correctAnswers: [0],
    explanation: 'Kinesis Data Streams captures high-throughput streaming data with configurable retention for replay.',
  },
  {
    id: 'dea-ing-002',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'msk'],
    question: 'An existing Apache Kafka cluster on AWS is required for event ingestion with Kafka APIs. Which service applies?',
    options: [
      'Amazon MSK',
      'Amazon MQ for ActiveMQ only',
      'Amazon EFS',
      'AWS Batch',
    ],
    correctAnswers: [0],
    explanation: 'Amazon Managed Streaming for Apache Kafka (MSK) runs Kafka-compatible clusters managed by AWS.',
  },
  {
    id: 'dea-ing-003',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'firehose'],
    question: 'Streaming data must be automatically transformed and delivered to S3, Redshift, or OpenSearch without managing consumers. Which service fits?',
    options: [
      'Amazon Kinesis Data Firehose',
      'Amazon EC2 cron jobs',
      'Manual FTP uploads',
      'Amazon Glacier Deep Archive only',
    ],
    correctAnswers: [0],
    explanation: 'Firehose is a fully managed delivery stream that transforms and loads streaming data to destinations.',
  },
  {
    id: 'dea-ing-004',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dms'],
    question: 'On-premises Oracle database changes must replicate continuously to Amazon RDS with minimal downtime. Which service applies?',
    options: [
      'AWS Database Migration Service (DMS)',
      'Amazon S3 sync only',
      'AWS Snowmobile only',
      'Route 53 health checks',
    ],
    correctAnswers: [0],
    explanation: 'DMS supports ongoing replication (CDC) from source databases to AWS targets.',
  },
  {
    id: 'dea-ing-005',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'batch'],
    question: 'Daily CSV files land in S3 and trigger processing. Which S3 feature starts ingestion on object creation?',
    options: [
      'S3 Event Notifications to Lambda or SQS',
      'Manual polling every hour',
      'EBS volume attach events',
      'CloudFront cache invalidation',
    ],
    correctAnswers: [0],
    explanation: 'S3 event notifications trigger downstream processing when new objects arrive.',
  },
  {
    id: 'dea-ing-006',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'appflow'],
    question: 'SaaS data from Salesforce must flow into S3 without custom connectors. Which service integrates SaaS sources?',
    options: [
      'Amazon AppFlow',
      'Amazon Polly',
      'AWS Artifact',
      'Amazon Inspector',
    ],
    correctAnswers: [0],
    explanation: 'AppFlow securely transfers SaaS application data to AWS storage and analytics services.',
  },
  {
    id: 'dea-ing-007',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'eventbridge'],
    question: 'Glue crawlers should run on a schedule every night at 2 AM UTC. Which service schedules this?',
    options: [
      'Amazon EventBridge scheduled rules',
      'Random EC2 reboots',
      'DNS TTL changes',
      'Manual operator triggers only',
    ],
    correctAnswers: [0],
    explanation: 'EventBridge cron/rate expressions schedule crawlers, Lambda, and other pipeline steps.',
  },
  {
    id: 'dea-ing-008',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'lambda-kinesis'],
    question: 'Each Kinesis shard record should invoke lightweight processing logic. Which pattern applies?',
    options: [
      'Lambda event source mapping from Kinesis',
      'Direct JDBC from Kinesis to Oracle',
      'Email each record to admins',
      'Store shards in CloudFront',
    ],
    correctAnswers: [0],
    explanation: 'Lambda polls Kinesis shards and invokes functions per batch of records.',
  },
  {
    id: 'dea-ing-009',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'throttling'],
    question: 'DynamoDB ingestion writes hit provisioned capacity limits during spikes. What should the pipeline implement?',
    options: [
      'Exponential backoff, retries, and capacity tuning or on-demand mode',
      'Unlimited write loops without delay',
      'Deleting source data',
      'Disabling CloudWatch metrics',
    ],
    correctAnswers: [0],
    explanation: 'Throttling requires backoff, batching, and right-sized capacity or on-demand billing.',
  },
  {
    id: 'dea-ing-010',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'fan-out'],
    question: 'One stream of events must fan out to multiple independent consumers without coupling. Which pattern applies? (Select TWO.)',
    options: [
      'Kinesis Data Streams with multiple consumer applications',
      'SNS topic publishing to multiple SQS queues',
      'Single shared mutable file on one EC2 instance',
      'One consumer deleting messages for all others',
      'Blocking all parallel readers',
    ],
    correctAnswers: [0, 1],
    explanation: 'Fan-out lets multiple consumers process the same events independently via multiple Kinesis consumers or SNS-to-SQS patterns.',
  },
  {
    id: 'dea-ing-011',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'replay'],
    question: 'A bug corrupted downstream processing; you must reprocess last 48 hours of stream data. What enables this?',
    options: [
      'Kinesis retention window and replay from stream',
      'Deleting the stream permanently',
      'Only processing future records forever',
      'Copying logs to Glacier without replay',
    ],
    correctAnswers: [0],
    explanation: 'Extended Kinesis retention allows consumers to reset checkpoints and replay historical records.',
  },
  {
    id: 'dea-ing-012',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dynamodb-streams'],
    question: 'DynamoDB table changes should trigger Lambda for near-real-time ETL. Which feature captures changes?',
    options: [
      'DynamoDB Streams',
      'S3 versioning only',
      'RDS read replicas',
      'CloudTrail only',
    ],
    correctAnswers: [0],
    explanation: 'DynamoDB Streams emit item-level change records for Lambda or Kinesis consumers.',
  },
  {
    id: 'dea-ing-013',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'network'],
    question: 'Glue jobs connect to RDS in a private subnet. What network control restricts source IP access?',
    options: [
      'Security group allowlists for Glue connections',
      'Public 0.0.0.0/0 on database port',
      'Removing VPC configuration',
      'Using HTTP without TLS',
    ],
    correctAnswers: [0],
    explanation: 'Security groups and connection allowlists control which ingestion services reach data sources.',
  },
  {
    id: 'dea-ing-014',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'api'],
    question: 'External partners push JSON via REST API into your lake. Which AWS service exposes ingestion APIs securely?',
    options: [
      'Amazon API Gateway + Lambda ingestion handler',
      'Unauthenticated FTP',
      'Public S3 write ACL for everyone',
      'Telnet to Redshift',
    ],
    correctAnswers: [0],
    explanation: 'API Gateway fronts authenticated ingestion endpoints that land data in S3 or streams.',
  },
  {
    id: 'dea-ing-015',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'flink'],
    question: 'Complex windowed aggregations on streaming data need Apache Flink. Which AWS service provides managed Flink?',
    options: [
      'Amazon Managed Service for Apache Flink',
      'Amazon Macie',
      'AWS Artifact',
      'Amazon Connect',
    ],
    correctAnswers: [0],
    explanation: 'Managed Flink runs stream processing with auto-scaling and integrations to Kinesis and other sources.',
  },
  {
    id: 'dea-ing-016',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue'],
    question: 'Serverless ETL transforms JSON in S3 to Parquet with crawlers and job bookmarks. Which service is primary?',
    options: [
      'AWS Glue',
      'Amazon Polly',
      'AWS Snowcone only',
      'Route 53',
    ],
    correctAnswers: [0],
    explanation: 'Glue provides serverless Spark-based ETL, crawlers, and the Data Catalog for lake pipelines.',
  },
  {
    id: 'dea-ing-017',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'emr'],
    question: 'Large Spark jobs need custom libraries and fine-grained cluster control. Which service fits?',
    options: [
      'Amazon EMR',
      'Amazon S3 Glacier Instant Retrieval',
      'AWS CloudShell only',
      'Amazon Lightsail',
    ],
    correctAnswers: [0],
    explanation: 'EMR runs Apache Spark, Hive, and other frameworks on managed clusters at scale.',
  },
  {
    id: 'dea-ing-018',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'parquet'],
    question: 'Analytics queries on S3 are slow on raw CSV. Which format change improves performance and cost?',
    options: [
      'Convert to Apache Parquet with columnar compression',
      'Store as uncompressed plain text forever',
      'Use XML exclusively',
      'Duplicate every row in JSON lines',
    ],
    correctAnswers: [0],
    explanation: 'Parquet columnar storage reduces scan size and improves Athena and Spark performance.',
  },
  {
    id: 'dea-ing-019',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'lambda'],
    question: 'Lightweight row-level transforms on S3 upload fit which compute model?',
    options: [
      'AWS Lambda triggered by S3 events',
      'Always-on largest EMR cluster',
      'Manual spreadsheet edits',
      'Physical tape backup',
    ],
    correctAnswers: [0],
    explanation: 'Lambda handles small-scale transforms event-driven without cluster management.',
  },
  {
    id: 'dea-ing-020',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'redshift'],
    question: 'Transformed data loads into a data warehouse for SQL analytics. Which service is the warehouse target?',
    options: [
      'Amazon Redshift',
      'Amazon EBS volume',
      'CloudFront distribution',
      'Route 53 resolver',
    ],
    correctAnswers: [0],
    explanation: 'Redshift is the AWS petabyte-scale data warehouse for structured analytics workloads.',
  },
  {
    id: 'dea-ing-021',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'jdbc'],
    question: 'Glue jobs read from on-premises SQL Server via JDBC. What must be configured?',
    options: [
      'Glue connection with VPC, security groups, and JDBC URL',
      'Public internet without encryption',
      'Hard-coded passwords in job script committed to Git',
      'FTP to S3 only',
    ],
    correctAnswers: [0],
    explanation: 'Glue connections define network path and credentials for JDBC/ODBC source access.',
  },
  {
    id: 'dea-ing-022',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'integrate'],
    question: 'Pipeline merges CRM, web logs, and inventory feeds into unified tables. This requires:',
    options: [
      'Integrating multiple sources with consistent schema mapping',
      'Ignoring schema differences',
      'Single source only forever',
      'Deleting two of three sources',
    ],
    correctAnswers: [0],
    explanation: 'Multi-source integration aligns schemas, keys, and transformation rules into a cohesive dataset.',
  },
  {
    id: 'dea-ing-023',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'cost'],
    question: 'EMR cluster runs 24/7 but jobs need only 2 hours daily. Cost optimization approach?',
    options: [
      'Transient clusters with auto-termination after jobs complete',
      'Largest instance type always running idle',
      'Disabling Spot instances always',
      'Never terminating clusters',
    ],
    correctAnswers: [0],
    explanation: 'Transient EMR clusters spin up for jobs and terminate to avoid idle compute charges.',
  },
  {
    id: 'dea-ing-024',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'bookmark'],
    question: 'Glue job must not reprocess entire S3 history on every run. Which feature tracks progress?',
    options: [
      'Glue job bookmarks',
      'Manual file lists in email',
      'Deleting S3 after each run',
      'Random skip of files',
    ],
    correctAnswers: [0],
    explanation: 'Job bookmarks persist state so incremental runs process only new or changed files.',
  },
  {
    id: 'dea-ing-025',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'llm'],
    question: 'Unstructured support tickets need categorization before warehousing. New DEA skill integrates:',
    options: [
      'LLMs for data processing tasks like classification',
      'Only manual sorting',
      'Deleting unstructured data',
      'GPU training from scratch in exam scope',
    ],
    correctAnswers: [0],
    explanation: 'Exam v1.1 includes integrating LLMs for data processing such as text classification and enrichment.',
  },
  {
    id: 'dea-ing-026',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'data-api'],
    question: 'Downstream apps query curated dataset via REST without direct S3 access. Which pattern exposes data?',
    options: [
      'Data API via API Gateway, Lambda, or Athena Federated Query',
      'Public S3 bucket listing',
      'Email CSV attachments daily',
      'Shared database root password',
    ],
    correctAnswers: [0],
    explanation: 'Data APIs abstract storage and enforce auth while serving query or export endpoints.',
  },
  {
    id: 'dea-ing-027',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', '3v'],
    question: 'High-variety JSON, images, and logs describe which data characteristic challenge?',
    options: [
      'Variety in volume, velocity, and variety (3Vs)',
      'Only volume matters',
      'Only structured CSV exists',
      'Eliminating all unstructured data',
    ],
    correctAnswers: [0],
    explanation: 'Data engineering must handle volume, velocity, and variety when designing ingestion and storage.',
  },
  {
    id: 'dea-ing-028',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'debug'],
    question: 'Glue job fails with OutOfMemory on wide joins. First troubleshooting step?',
    options: [
      'Increase worker type/memory or optimize join logic and partitioning',
      'Disable all logging',
      'Delete source data',
      'Run on smallest worker always',
    ],
    correctAnswers: [0],
    explanation: 'OOM errors often require more memory, partition pruning, or broadcast join optimizations.',
  },
  {
    id: 'dea-ing-029',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'mwaa'],
    question: 'Complex DAG dependencies with Airflow operators orchestrate nightly ETL. Which AWS service hosts Airflow?',
    options: [
      'Amazon MWAA',
      'Amazon MQ only',
      'Amazon ECR',
      'AWS Snowball',
    ],
    correctAnswers: [0],
    explanation: 'Managed Workflows for Apache Airflow (MWAA) runs Airflow without managing infrastructure.',
  },
  {
    id: 'dea-ing-030',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'step-functions'],
    question: 'Sequential pipeline: ingest, validate, transform, notify on failure. Which service coordinates steps?',
    options: [
      'AWS Step Functions',
      'Single monolithic script with no error handling',
      'Manual runbooks only',
      'DNS round-robin',
    ],
    correctAnswers: [0],
    explanation: 'Step Functions orchestrate ETL stages with retries, catch blocks, and parallel branches.',
  },
  {
    id: 'dea-ing-031',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'glue-workflow'],
    question: 'Glue crawlers, jobs, and triggers run as one coordinated unit. Which Glue feature applies?',
    options: [
      'AWS Glue workflows',
      'S3 lifecycle only',
      'CloudFront behaviors',
      'IAM password policy',
    ],
    correctAnswers: [0],
    explanation: 'Glue workflows chain crawlers, jobs, and triggers with dependency management.',
  },
  {
    id: 'dea-ing-032',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'sns'],
    question: 'Pipeline failure must page on-call engineers immediately. Which notification service applies?',
    options: [
      'Amazon SNS',
      'Amazon Glacier vault lock',
      'AWS Artifact',
      'Route 53',
    ],
    correctAnswers: [0],
    explanation: 'SNS delivers alerts to email, SMS, or triggers Lambda for incident response.',
  },
  {
    id: 'dea-ing-033',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'sqs'],
    question: 'Decouple burst ingestion from slow transformation workers. Which service buffers messages?',
    options: [
      'Amazon SQS',
      'Direct synchronous HTTP only',
      'Shared local disk on one server',
      'Unbounded in-memory queue in Lambda',
    ],
    correctAnswers: [0],
    explanation: 'SQS queues absorb spikes and let workers process at sustainable rates.',
  },
  {
    id: 'dea-ing-034',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'resilience'],
    question: 'Resilient pipelines handle AZ failures and retry transient errors. Which practices apply? (Select TWO.)',
    options: [
      'Multi-AZ resources and idempotent processing',
      'Dead-letter queues for failed records',
      'Single point of failure design',
      'No retries ever',
      'Ignoring partial batch failures',
    ],
    correctAnswers: [0, 1],
    explanation: 'Resilience uses redundancy, retries, DLQs, and idempotent writes to recover from failures.',
  },
  {
    id: 'dea-ing-035',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'serverless'],
    question: 'Event-driven ETL with Lambda, EventBridge, and S3 requires no cluster management. This is:',
    options: [
      'Serverless pipeline architecture',
      'Always-on EMR mandatory',
      'Physical tape workflow',
      'Manual cron on laptop',
    ],
    correctAnswers: [0],
    explanation: 'Serverless pipelines scale automatically and charge per invocation rather than idle clusters.',
  },
  {
    id: 'dea-ing-036',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'lambda-concurrency'],
    question: 'Lambda ingestion hits account concurrency limits during peak. What tuning helps?',
    options: [
      'Reserved concurrency and batch size optimization',
      'Unlimited recursive self-invocation',
      'Disabling all parallelism',
      'Running one concurrent execution globally',
    ],
    correctAnswers: [0],
    explanation: 'Reserved concurrency guarantees capacity; optimal batch sizes balance throughput and timeouts.',
  },
  {
    id: 'dea-ing-037',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'performance'],
    question: 'Python transform script runs too slowly on large datasets. First code optimization?',
    options: [
      'Profile bottlenecks; use vectorized operations and reduce unnecessary I/O',
      'Add random sleeps',
      'Duplicate all data in memory twice',
      'Disable compression',
    ],
    correctAnswers: [0],
    explanation: 'Optimize hot paths, minimize data movement, and use efficient libraries for scale.',
  },
  {
    id: 'dea-ing-038',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'git'],
    question: 'Pipeline code changes must be tracked and reviewed. Which practice applies?',
    options: [
      'Version control with Git and pull request reviews',
      'Editing production scripts directly with no history',
      'Emailing code attachments',
      'Single shared password for all developers',
    ],
    correctAnswers: [0],
    explanation: 'Git enables traceability, collaboration, and rollback for data pipeline code.',
  },
  {
    id: 'dea-ing-039',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'iac'],
    question: 'Glue jobs, IAM roles, and S3 buckets deploy consistently across environments. Which approach applies?',
    options: [
      'Infrastructure as Code with CloudFormation or CDK',
      'Manual console clicks only in production',
      'Screenshots of configurations',
      'No documentation',
    ],
    correctAnswers: [0],
    explanation: 'IaC templates reproduce environments reliably and support CI/CD for data infrastructure.',
  },
  {
    id: 'dea-ing-040',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'sam'],
    question: 'Serverless data pipeline includes Lambda, Step Functions, and DynamoDB metadata table. Which tool packages deployment?',
    options: [
      'AWS SAM',
      'Manual zip uploads without templates',
      'FTP to EC2',
      'Glacier restore jobs',
    ],
    correctAnswers: [0],
    explanation: 'SAM templates define and deploy serverless data pipeline resources consistently.',
  },
  {
    id: 'dea-ing-041',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'cicd'],
    question: 'Automated tests run before promoting Glue job changes to production. This describes:',
    options: [
      'CI/CD for data pipelines',
      'Deploy Friday without tests',
      'Manual copy to prod only',
      'No staging environment ever',
    ],
    correctAnswers: [0],
    explanation: 'CI/CD automates build, test, and deploy of pipeline code and infrastructure changes.',
  },
  {
    id: 'dea-ing-042',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'distributed'],
    question: 'Spark on EMR splits work across many nodes. This exemplifies:',
    options: [
      'Distributed computing',
      'Single-threaded laptop processing only',
      'One CPU core for all data',
      'Manual sharding in spreadsheets',
    ],
    correctAnswers: [0],
    explanation: 'Distributed computing partitions data and processing across cluster nodes for scale.',
  },
  {
    id: 'dea-ing-043',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'sql'],
    question: 'Transformations express aggregations and joins declaratively. Which language is primary in Redshift and Athena?',
    options: [
      'SQL',
      'HTML',
      'CSS',
      'DNS zone files',
    ],
    correctAnswers: [0],
    explanation: 'SQL is the standard query language for warehouse and lake SQL engines on AWS.',
  },
  {
    id: 'dea-ing-044',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'ephemeral'],
    question: 'Lambda needs 10 GB temp space for large file transforms. Which feature provides scratch storage?',
    options: [
      'Lambda ephemeral storage / mounted EFS',
      'CloudFront cache',
      'Route 53',
      'S3 Glacier lock',
    ],
    correctAnswers: [0],
    explanation: 'Increased ephemeral storage or EFS mounts support larger local processing in Lambda.',
  },
  {
    id: 'dea-ing-045',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'state'],
    question: 'Kinesis consumer checkpoint tracks last processed sequence number. This is an example of:',
    options: [
      'Stateful stream processing consumer',
      'Stateless DNS lookup',
      'Stateless random sampling only',
      'Deleting offsets after every record',
    ],
    correctAnswers: [0],
    explanation: 'Stateful consumers persist offsets/checkpoints to resume processing after restarts.',
  },
  {
    id: 'dea-ing-046',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'redshift-load'],
    question: 'Bulk load from S3 into Redshift uses which high-throughput command?',
    options: [
      'COPY command',
      'SELECT into laptop CSV',
      'Manual row inserts only',
      'Email data to support',
    ],
    correctAnswers: [0],
    explanation: 'Redshift COPY parallel loads data from S3 efficiently into tables.',
  },
  {
    id: 'dea-ing-047',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'spark'],
    question: 'Large-scale distributed transforms on EMR commonly use which processing engine?',
    options: [
      'Apache Spark',
      'Amazon Polly',
      'AWS Artifact',
      'Amazon Connect IVR',
    ],
    correctAnswers: [0],
    explanation: 'Spark is the primary distributed processing framework on EMR for ETL at scale.',
  },
  {
    id: 'dea-ing-048',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'eventbridge'],
    question: 'S3 upload triggers EventBridge rule starting Step Functions pipeline. This is:',
    options: [
      'Event-driven orchestration',
      'Time-only batch with no events',
      'Manual pipeline start always',
      'Polling S3 every second from laptop',
    ],
    correctAnswers: [0],
    explanation: 'EventBridge reacts to AWS events to start workflows without polling.',
  },
  {
    id: 'dea-ing-049',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'batch-config'],
    question: 'Large S3 batch ingestion should use multipart uploads and appropriate object size. This optimizes:',
    options: [
      'Batch ingestion performance and reliability',
      'DNS resolution time',
      'Certificate expiry',
      'IAM policy name length',
    ],
    correctAnswers: [0],
    explanation: 'Multipart uploads and right-sized objects improve throughput and fault tolerance for bulk S3 ingestion.',
  },
  {
    id: 'dea-ing-050',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'containers'],
    question: 'Custom Spark dependencies packaged in Docker run on which orchestrators?',
    options: [
      'Amazon ECS or EKS',
      'Amazon S3 only',
      'Route 53',
      'AWS Artifact',
    ],
    correctAnswers: [0],
    explanation: 'ECS and EKS run containerized data processing when Glue or vanilla EMR images need customization.',
  },
  {
    id: 'dea-ing-051',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'availability'],
    question: 'Pipeline SLA requires processing to continue if one step fails transiently. Step Functions should use:',
    options: [
      'Retry policies with backoff and catch handlers',
      'Fail entire company workflow on first typo',
      'No error handling',
      'Infinite synchronous wait',
    ],
    correctAnswers: [0],
    explanation: 'Retries and catch routes isolate failures and enable recovery or alerting paths.',
  },
  {
    id: 'dea-ing-052',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'logging'],
    question: 'ETL jobs must emit structured logs for troubleshooting. Which service stores application logs?',
    options: [
      'Amazon CloudWatch Logs',
      'Unlogged stdout only',
      'Sticky notes',
      'Public Twitter posts',
    ],
    correctAnswers: [0],
    explanation: 'CloudWatch Logs centralizes pipeline application and job logs for search and alerting.',
  },
  {
    id: 'dea-ing-053',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'rate-limit'],
    question: 'API-based ingestion source enforces 100 requests per minute. Pipeline must:',
    options: [
      'Implement rate limiting, backoff, and request queuing',
      'Hammer API without delay',
      'Ignore 429 responses',
      'Delete source API',
    ],
    correctAnswers: [0],
    explanation: 'Respect source rate limits with throttling, queues, and exponential backoff.',
  },
  {
    id: 'dea-ing-054',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'semi-structured'],
    question: 'JSON logs with nested fields land in S3. Glue and Athena handle this as:',
    options: [
      'Semi-structured data requiring schema inference or defined SerDe',
      'Strict fixed-width mainframe only',
      'Binary executable data only',
      'Data that cannot be queried',
    ],
    correctAnswers: [0],
    explanation: 'Semi-structured formats like JSON need crawlers or explicit schemas for SQL access.',
  },
  {
    id: 'dea-ing-055',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'scaling'],
    question: 'Ingestion volume grows 10x during holiday season. Auto-scaling applies to:',
    options: [
      'Kinesis shards, Lambda concurrency, and EMR managed scaling',
      'Fixed single shard forever',
      'Manual shard adds after season ends only',
      'Rejecting all extra events',
    ],
    correctAnswers: [0],
    explanation: 'Elastic scaling on streams, Lambda, and EMR handles demand spikes.',
  },
  {
    id: 'dea-ing-056',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'testing'],
    question: 'Unit tests validate transform logic before deployment. This is part of:',
    options: [
      'Software engineering best practices for data engineering',
      'Optional only for application teams',
      'Prohibited in pipelines',
      'Replacing all monitoring',
    ],
    correctAnswers: [0],
    explanation: 'Testing pipeline logic reduces production defects and supports CI/CD quality gates.',
  },
  {
    id: 'dea-ing-057',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'scheduler'],
    question: 'Airflow DAG scheduled with cron expression replaces manual job starts. Benefit is:',
    options: [
      'Reliable time-based automation of ingestion',
      'Higher latency always',
      'Eliminating need for monitoring',
      'Removing audit trails',
    ],
    correctAnswers: [0],
    explanation: 'Schedulers ensure pipelines run on time without manual intervention.',
  },
  {
    id: 'dea-ing-058',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'odbc'],
    question: 'Windows-based ETL tool connects to Redshift using standard database connectivity. Protocol includes:',
    options: [
      'ODBC or JDBC database connectivity',
      'FTP only',
      'SMTP email protocol',
      'ICMP ping',
    ],
    correctAnswers: [0],
    explanation: 'ODBC and JDBC are standard interfaces Glue and third-party tools use for database access.',
  },
  {
    id: 'dea-ing-059',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'algorithm'],
    question: 'Graph relationships in social network data may use which data structure concept?',
    options: [
      'Graph data structures',
      'Only single-column arrays',
      'DNS trees exclusively',
      'No structural modeling',
    ],
    correctAnswers: [0],
    explanation: 'Graph structures model relationships; relevant for Neptune and some analytics use cases.',
  },
  {
    id: 'dea-ing-060',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'glue-batch'],
    question: 'Historical batch files in multiple S3 prefixes ingest daily via Glue job. Job should use:',
    options: [
      'Partitioned source paths and job bookmarks for incremental loads',
      'Full table scan of internet daily',
      'Single file only',
      'Ignore new partitions',
    ],
    correctAnswers: [0],
    explanation: 'Partition awareness and bookmarks optimize batch ingestion from growing lake prefixes.',
  },
  {
    id: 'dea-ing-061',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'transform-service'],
    question: 'Visual no-code transforms prepare data before Glue Spark job. Which tool assists?',
    options: [
      'AWS Glue DataBrew',
      'Amazon Polly',
      'AWS WAF',
      'Amazon Inspector',
    ],
    correctAnswers: [0],
    explanation: 'DataBrew provides visual data preparation recipes for cleansing and normalization.',
  },
  {
    id: 'dea-ing-062',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'fault-tolerance'],
    question: 'Dead-letter queue stores poison records that fail processing repeatedly. Purpose is:',
    options: [
      'Isolate bad records without blocking entire pipeline',
      'Delete all good records too',
      'Stop all ingestion permanently',
      'Hide errors from operators',
    ],
    correctAnswers: [0],
    explanation: 'DLQs capture failing messages for inspection while allowing healthy records to continue.',
  },
  {
    id: 'dea-ing-063',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis-analytics'],
    question: 'Real-time SQL analytics on Kinesis streams without managing Flink clusters historically used:',
    options: [
      'Managed stream analytics services (Flink/Kinesis Analytics patterns)',
      'Batch-only overnight jobs exclusively',
      'Manual spreadsheet updates',
      'Physical printouts',
    ],
    correctAnswers: [0],
    explanation: 'Managed Flink and stream SQL services analyze data in motion as part of streaming pipelines.',
  },
  {
    id: 'dea-ing-064',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'powershell'],
    question: 'Hybrid Windows servers trigger scripts that upload to S3. Supported scripting includes:',
    options: [
      'Bash, PowerShell, Python, and other languages in automation',
      'Only one proprietary language on exam',
      'Handwritten notes',
      'Binary only',
    ],
    correctAnswers: [0],
    explanation: 'Data engineers use multiple scripting languages; exam covers concepts not syntax trivia.',
  },
  {
    id: 'dea-ing-065',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'unstructured'],
    question: 'PDFs and images in the lake are examples of:',
    options: [
      'Unstructured or semi-structured data requiring specialized processing',
      'Strict third-normal-form relational rows only',
      'Data that cannot be stored in S3',
      'Invalid for any pipeline',
    ],
    correctAnswers: [0],
    explanation: 'Unstructured data needs OCR, parsing, or ML enrichment before structured analytics.',
  },
  {
    id: 'dea-ing-066',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'datasync'],
    question:
      'Large volumes of files must move continuously from on-premises NFS or other cloud file storage into a data lake on S3. Which service is designed for this pattern?',
    options: [
      'AWS DataSync',
      'AWS Database Migration Service (AWS DMS)',
      'AWS Snowball',
      'Amazon Data Firehose',
    ],
    correctAnswers: [0],
    explanation:
      'DataSync automates efficient, scheduled or recurring file and object transfers into S3. DMS targets databases, Snowball is bulk physical migration, and Firehose ingests streaming records—not bulk file sync.',
  },
  {
    id: 'dea-ing-067',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'emr'],
    question:
      'An ETL stage joins several large datasets and runs heavy aggregations before loading Redshift. Which compute option fits the transformation step?',
    options: [
      'Amazon EMR with Spark, Hive, or similar frameworks',
      'AWS Lambda only',
      'Amazon Aurora as the transform engine',
      'Amazon Redshift as the primary transform cluster',
    ],
    correctAnswers: [0],
    explanation:
      'EMR provides managed Hadoop/Spark scale for complex distributed transforms. Lambda is for short event-driven work; Aurora and Redshift are optimized for transactional or analytic queries, not large multi-source ETL compute.',
  },
  {
    id: 'dea-ing-068',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'step-functions'],
    question:
      'A multi-step serverless pipeline (extract, Glue transform, load to Redshift) needs durable workflow orchestration with retries. Best choice:',
    options: [
      'AWS Step Functions coordinating Lambda, Glue, and other steps',
      'Amazon ECS task definitions alone',
      'AWS Batch as the primary workflow engine',
      'A single Lambda function with no state machine',
    ],
    correctAnswers: [0],
    explanation:
      'Step Functions is the managed orchestration service for serverless ETL workflows. ECS orchestrates containers; Batch runs jobs but lacks integrated workflow state; one Lambda cannot reliably coordinate long multi-step pipelines.',
  },
  {
    id: 'dea-ing-069',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'open-table-format'],
    question:
      'Parquet files already live in S3; the team wants full open-table-format benefits (ACID-style commits, better pruning). Recommended approach:',
    options: [
      'Run an AWS Glue ETL job to rewrite data into the open table format in the lake',
      'Query raw Parquet in Athena only and skip table formats',
      'Assume Parquet alone is always faster than any table format',
      'Register an open-table-format table metadata-only on unchanged Parquet without rewriting',
    ],
    correctAnswers: [0],
    explanation:
      'Physical conversion via Glue (or similar) materializes format features in stored data. Metadata-only external tables do not deliver the same storage and transaction benefits as converting and writing new table-format datasets.',
  },
  {
    id: 'dea-ing-070',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue'],
    question: 'Which capabilities are core to AWS Glue? (Select THREE.)',
    options: [
      'Scheduling and running ETL jobs',
      'Batch and streaming ETL processing',
      'Central data cataloging',
      'IAM user lifecycle management',
      'Automatic Rekognition image labeling',
      'Dedicated cost-optimization billing product',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Glue is serverless ETL plus the Data Catalog. Identity is IAM; image analysis is Rekognition; Glue is not a standalone “cost optimization” service despite being pay-per-use.',
  },
  {
    id: 'dea-ing-071',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'flink'],
    question:
      'Streaming analytics with stateful windowing on Kinesis or MSK without operating Flink clusters. Managed option:',
    options: [
      'Amazon Managed Service for Apache Flink',
      'Amazon S3 Glacier',
      'AWS Snow Family only',
      'Amazon RDS',
    ],
    correctAnswers: [0],
    explanation:
      'Managed Flink runs stream processing with autoscaling infrastructure. Glacier and Snow are storage/migration; RDS is relational OLTP, not a stream processor.',
  },
  {
    id: 'dea-ing-072',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'step-functions', 'emr'],
    question:
      'Spark transformation jobs on EMR must run in sequence with error handling between stages. Common orchestration pattern from DEA labs:',
    options: [
      'AWS Step Functions state machine invoking EMR or Glue steps',
      'Manual SSH to the primary node for each run',
      'S3 event → single Lambda with 15-minute limit for entire pipeline',
      'Disable retries to simplify operations',
    ],
    correctAnswers: [0],
    explanation:
      'Step Functions coordinates long-running Spark/ETL stages with built-in retry and branching. Manual runs do not scale; one Lambda cannot replace a full Spark pipeline.',
  },
  {
    id: 'dea-ing-073',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'emr-serverless'],
    question:
      'Short-lived Spark batch jobs should start on submit, scale automatically, and stop when idle. Deployment option:',
    options: [
      'Amazon EMR Serverless',
      'Always-on EMR cluster with fixed core nodes',
      'Amazon EC2 Auto Scaling without EMR',
      'Amazon Redshift Spectrum only',
    ],
    correctAnswers: [0],
    explanation:
      'EMR Serverless provisions workers per job and bills for processing time—suited to transient batch Spark/Hudi workloads. Long-lived clusters add ops overhead; Spectrum queries S3 data from Redshift, it is not a Spark submit target.',
  },
  {
    id: 'dea-ing-074',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'streaming', 'glue-catalog'],
    question:
      'Real-time stream processing is required, but the team only updated the Glue Data Catalog. What is missing?',
    options: [
      'A compute engine such as Glue streaming, EMR Spark Structured Streaming, or Managed Flink',
      'Another metadata table in the catalog',
      'Replacing S3 with EFS for streaming',
      'Using CloudTrail as the stream processor',
    ],
    correctAnswers: [0],
    explanation:
      'The Data Catalog stores metadata only. Streaming analytics needs a processing service—Glue ETL streaming, Spark on EMR, or Managed Flink—not catalog changes alone.',
  },
  {
    id: 'dea-ing-075',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'emr', 'spark'],
    question:
      'Very large datasets in S3 must be transformed with Apache Spark or Hadoop before loading Redshift. Best fit when you need full cluster control:',
    options: [
      'Amazon EMR',
      'Amazon EventBridge',
      'AWS Lambda',
      'Amazon EventBridge Scheduler only',
    ],
    correctAnswers: [0],
    explanation:
      'EMR runs Spark and Hadoop at scale on S3 data. EventBridge routes events; Lambda is short-lived; Glue fits many ETL cases but exam scenarios citing Spark/Hadoop cluster control point to EMR.',
  },
  {
    id: 'dea-ing-076',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'incremental'],
    question:
      'A nightly pipeline should load only rows added or changed in the source database since the previous successful run. Ingestion pattern:',
    options: [
      'Incremental ingestion using change markers or high-water timestamps',
      'Full refresh that overwrites the entire target each run',
      'Generic scheduled batch with no change detection',
      'Event-driven ingestion when no change events are published',
    ],
    correctAnswers: [0],
    explanation:
      'Incremental loads limit work to new or updated records. Full refresh reprocesses everything; blind batch schedules ignore deltas; event-driven patterns need explicit change notifications.',
  },
  {
    id: 'dea-ing-077',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'glue', 'cost'],
    question:
      'Non-urgent Glue ETL workloads should spend less on idle Spark capacity while staying serverless. Feature to evaluate:',
    options: [
      'AWS Glue Flex jobs',
      'Provisioning On-Demand EC2 instances for each Glue job',
      'Disabling job logs and metrics to hide failures',
      'Raising max concurrent runs without workload tuning',
    ],
    correctAnswers: [0],
    explanation:
      'Flex jobs defer compute until data is processed, cutting idle cost for flexible SLAs. Glue jobs are already serverless—not user-picked EC2; turning off observability hurts ops; more concurrency alone can increase spend.',
  },
  {
    id: 'dea-ing-078',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'emr', 's3'],
    question:
      'Apache Spark on Amazon EMR must read and write large datasets in Amazon S3 as the primary data lake. File system layer:',
    options: [
      'EMRFS (EMR File System)',
      'HDFS as the default store for all S3 objects',
      'Amazon EFS mounted as the only S3 substitute',
      'Cluster local disks after downloading every object',
    ],
    correctAnswers: [0],
    explanation:
      'EMRFS presents S3 as a Hadoop-compatible filesystem with consistency and encryption options. HDFS targets cluster storage; EFS is shared file storage, not the standard S3 integration; local disks do not scale for lake-sized data.',
  },
  {
    id: 'dea-ing-079',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'emr', 'cost'],
    question:
      'Overnight EMR batch jobs are fault-tolerant and not deadline-critical. Cost and elasticity practices include:',
    options: [
      'Spot Instances with EMR managed scaling enabled',
      'On-Demand Instances only with a fixed cluster size',
      'Disabling auto scaling to simplify capacity',
      'Turning off partitioning and compression to save CPU',
    ],
    correctAnswers: [0],
    explanation:
      'EMR tolerates Spot interruption with task retries; managed scaling matches nodes to workload. All On-Demand fixed clusters waste money idle; disabling scale ignores demand spikes; partitioning and compression improve performance and cost at query time.',
  },
  {
    id: 'dea-ing-080',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'cost'],
    question:
      'A Kinesis Data Streams workload has few consumers and does not need sub-second read latency. Cost-friendly consumer model:',
    options: [
      'Shared throughput (standard consumers)',
      'Enhanced Fan-Out dedicated throughput per consumer',
      'Adding shards without evaluating consumer count',
      'Dedicated throughput for every Lambda poll',
    ],
    correctAnswers: [0],
    explanation:
      'Standard consumers share shard read capacity—enough when latency requirements are relaxed. Enhanced Fan-Out adds per-consumer cost for isolated low-latency pipes; extra shards raise spend without fixing consumer model choice.',
  },
  {
    id: 'dea-ing-081',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'latency'],
    question:
      'Many parallel Kinesis consumers need minimal read latency without competing for the same shard throughput. Feature:',
    options: [
      'Enhanced Fan-Out (dedicated throughput per consumer)',
      'Shared throughput only with one poll per second per shard',
      'Disabling all consumers except one',
      'Storing records only in CloudWatch Logs',
    ],
    correctAnswers: [0],
    explanation:
      'Enhanced Fan-Out pushes records over dedicated connections (HTTP/2) so consumers do not share the 2 MB/s per shard standard limit. Standard iterators poll and share capacity—fine for cost-sensitive, low fan-out designs.',
  },
  {
    id: 'dea-ing-082',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'msk', 'monitoring'],
    question:
      'Operations wants broker CPU, disk, and throughput metrics for an Amazon MSK cluster. Metrics are published to:',
    options: [
      'Amazon CloudWatch',
      'AWS Lambda execution environment only',
      'Amazon QuickSight datasets automatically',
      'Amazon OpenSearch Service as the MSK metrics store',
    ],
    correctAnswers: [0],
    explanation:
      'MSK integrates with CloudWatch for cluster health and tuning. Lambda may consume/produce Kafka records but does not collect MSK infrastructure metrics; QuickSight visualizes data you connect; OpenSearch is a sink for logs/search, not MSK’s native metrics channel.',
  },
  {
    id: 'dea-ing-083',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'encryption'],
    question:
      'Encryption at rest for records in Amazon Kinesis Data Streams is enabled how?',
    options: [
      'Automatically using AWS KMS as data enters and leaves the service',
      'Only when each shard is created with a manual toggle',
      'By clients encrypting payloads before PutRecord only',
      'Optional stream setting that defaults to off',
    ],
    correctAnswers: [0],
    explanation:
      'Kinesis encrypts at the stream level with KMS—always on for at-rest protection. Encryption is not per-shard configuration; producers are not required to pre-encrypt; it is not an optional off-by-default feature.',
  },
  {
    id: 'dea-ing-084',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'msk'],
    question:
      'Why use short-term streaming stores such as Kinesis Data Streams or Amazon MSK in a pipeline? (Select TWO.)',
    options: [
      'Buffer ingestion when downstream processing or networks fail temporarily',
      'Decouple producers from consumers for flexible scaling',
      'Replace S3 Glacier for multi-year regulatory archives',
      'Build BI dashboards directly inside the stream',
      'Perform zero-ETL warehouse modeling inside Kafka topics',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Streams retain data briefly so consumers can catch up after outages and teams can evolve processors independently. Long-term compliance archives belong in durable object storage; streams are not BI or ETL engines.',
  },
  {
    id: 'dea-ing-085',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'streaming', 'efficiency'],
    question:
      'A streaming pipeline processes too many bytes per minute. Techniques that reduce the amount of data processed: (Select TWO.)',
    options: [
      'Filter out events that downstream systems do not need',
      'Compress payloads where appropriate before further processing',
      'Add more Kinesis shards only',
      'Increase parallel consumer tasks without dropping fields',
      'Raise partition count with no schema change',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Filtering and compression shrink useful workload volume. Scaling shards, parallelism, or partitions improves throughput but does not reduce the data each stage must handle.',
  },
  {
    id: 'dea-ing-086',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'emr', 'spark-streaming'],
    question:
      'Spark Structured Streaming on EMR must survive driver failures and preserve exactly-once semantics. Enable:',
    options: [
      'Checkpointing to durable storage (for example S3 via the cluster)',
      'Client-side gzip on Kinesis only',
      'Per-record KMS encryption in application code instead of checkpoints',
      'Random repartition without state storage',
    ],
    correctAnswers: [0],
    explanation:
      'Checkpoints persist offsets and state so jobs restart from the last consistent point. Compression and encryption address size/security—not fault tolerance; repartitioning alone does not recover state after failure.',
  },
  {
    id: 'dea-ing-087',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'flink'],
    question:
      'Amazon Managed Service for Apache Flink guarantees consistent results when failures occur during stateful stream processing using:',
    options: [
      'Exactly-once processing semantics with checkpointed state',
      'Manual deletion of all state after each record',
      'CloudFront caching of stream batches',
      'Glue crawlers on the stream',
    ],
    correctAnswers: [0],
    explanation:
      'Managed Flink checkpoints state and supports exactly-once sinks for critical real-time apps (fraud, maintenance alerts). Clearing state per record breaks recovery; crawlers catalog files—they do not run Flink logic.',
  },
  {
    id: 'dea-ing-088',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'flink'],
    question:
      'In a Managed Flink application, which component executes the parallel data processing tasks assigned by the coordinator?',
    options: [
      'Task Managers',
      'Job Manager only (no workers)',
      'Apache ZooKeeper (primary compute engine)',
      'Amazon CloudWatch (runs operators)',
    ],
    correctAnswers: [0],
    explanation:
      'The Job Manager schedules work and manages lifecycle; Task Managers run operators on data. ZooKeeper coordinates cluster metadata; CloudWatch observes metrics—it does not execute Flink tasks.',
  },
  {
    id: 'dea-ing-089',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'lambda', 'kinesis'],
    question:
      'A Lambda function consumes Kinesis with the default event source mapping. How does it read records from each shard?',
    options: [
      'Polls the shard (shared throughput, about once per second baseline)',
      'Receives a dedicated push stream per shard without polling',
      'Pulls records directly from Amazon RDS',
      'Reads S3 object listings instead of stream records',
    ],
    correctAnswers: [0],
    explanation:
      'Standard mappings poll shards and share read throughput with other consumers. Enhanced Fan-Out (when enabled) pushes over dedicated connections; RDS and S3 are unrelated Kinesis consumer patterns.',
  },
  {
    id: 'dea-ing-090',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dms', 'cdc'],
    question:
      'AWS DMS is replicating Oracle into an S3 data lake with near-zero application downtime. After the initial copy starts, how does DMS finish catching up?',
    options: [
      'Full load, then apply cached changes that occurred during the load, then ongoing CDC from transaction logs',
      'CDC only with no initial copy of existing rows',
      'A single UNLOAD from the source followed by a one-time COPY',
      'Schema Conversion Tool replacing DMS for ongoing replication',
    ],
    correctAnswers: [0],
    explanation:
      'DMS migrates existing data (full load) while caching in-flight changes, applies those cached changes, then continues CDC from source logs. SCT converts schemas; it does not replace CDC. UNLOAD/COPY is a Redshift pattern, not DMS replication.',
  },
  {
    id: 'dea-ing-091',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue-studio'],
    question:
      'Analysts need a drag-and-drop Spark ETL job with live schema inference and job monitoring, without writing a full Spark script first. Tool:',
    options: [
      'AWS Glue Studio (visual ETL, notebooks, and script editor)',
      'Amazon MWAA DAG editor only',
      'Amazon Athena workgroups',
      'AWS Batch job queues',
    ],
    correctAnswers: [0],
    explanation:
      'Glue Studio provides visual ETL, Jupyter-style notebooks, a script editor, and job monitoring on the serverless Spark engine. MWAA orchestrates Airflow; Athena queries lakes; Batch runs compute jobs but is not Glue visual ETL.',
  },
  {
    id: 'dea-ing-092',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'python-shell', 'ray'],
    question:
      'A small Python cleanup script should run natively in Glue without a Spark cluster. Engine that matches, and its main limit:',
    options: [
      'Glue Python shell on a single EC2 instance, limited by that instance capacity',
      'Glue for Apache Spark, which always requires a multi-node cluster even for tiny jobs',
      'Glue for Ray, which is only for SQL DDL',
      'Amazon Redshift COPY as the Python runtime',
    ],
    correctAnswers: [0],
    explanation:
      'Python shell jobs run native Python on one instance—fine for light work, poor for big data. Spark jobs use managed Spark for batch/streaming; Ray scales Python across machines. COPY loads Redshift tables; it is not a Glue engine.',
  },
  {
    id: 'dea-ing-093',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'dynamicframe'],
    question:
      'Incoming S3 JSON has the same field as string in some records and integer in others. Glue Spark library type designed for this messy schema:',
    options: [
      'DynamicFrame (Glue ETL library)',
      'A rigid Spark DataFrame with a single enforced type and no resolveChoice',
      'Amazon RDS row types',
      'Kinesis record aggregation only',
    ],
    correctAnswers: [0],
    explanation:
      'Glue DynamicFrames handle inconsistent field types across a dataset (resolveChoice and related operations). Strict DataFrames fail on mixed types unless you add extra handling; RDS and KPL aggregation do not solve Glue schema messiness.',
  },
  {
    id: 'dea-ing-094',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'crawler', 'classifier'],
    question:
      'A Glue crawler should recognize a proprietary log layout that built-in classifiers miss. Configure:',
    options: [
      'A custom classifier (for example grok, JSON, or XML) used before built-in classifiers',
      'Amazon Macie as the schema inference engine',
      'Redshift DISTSTYLE KEY on the log files',
      'S3 Glacier Flexible Retrieval as a SerDe',
    ],
    correctAnswers: [0],
    explanation:
      'Crawlers use custom or built-in classifiers to infer format and schema. Macie finds sensitive data; distribution styles apply to Redshift tables; Glacier is a storage class, not a classifier.',
  },
  {
    id: 'dea-ing-095',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'crawler', 'partitions'],
    question:
      'A Glue crawler compares schemas under an S3 prefix. Compatible schemas become partitions of one table when they match above approximately:',
    options: [
      '70% similarity (partition threshold)',
      '10% similarity always merged',
      'Exactly 100% identical files only, with no threshold',
      'Zero matching columns required',
    ],
    correctAnswers: [0],
    explanation:
      'Glue crawlers combine compatible schemas into one table definition when the compared schemas exceed the partition threshold (about 70%). Below that, the crawler creates separate tables per path.',
  },
  {
    id: 'dea-ing-096',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue-streaming'],
    question:
      'Serverless Glue streaming ETL should continuously clean clickstream data in transit. Supported sources include: (Select TWO.)',
    options: [
      'Amazon Kinesis Data Streams',
      'Amazon MSK or self-managed Apache Kafka',
      'Amazon S3 Glacier Deep Archive as a live stream',
      'Amazon CloudFront cache invalidations only',
      'AWS Artifact reports',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Glue streaming consumes Kinesis, MSK, and Kafka, then writes to cataloged targets such as S3, Redshift, JDBC, Iceberg, Hudi, or Delta. Glacier and Artifact are not stream sources.',
  },
  {
    id: 'dea-ing-097',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'kpl'],
    question:
      'Many tiny click events under-use Kinesis shard write capacity. Producer-side technique that packs small records into larger PutRecords payloads (up to 1 MB):',
    options: [
      'Kinesis Producer Library (KPL) aggregation',
      'Enhanced Fan-Out on every producer',
      'Glue crawlers on each event',
      'Redshift VACUUM after every PutRecord',
    ],
    correctAnswers: [0],
    explanation:
      'KPL aggregates small user records into larger Kinesis records to use shard throughput efficiently, with retries. Enhanced Fan-Out is a consumer feature; crawlers and VACUUM are unrelated to producer packing.',
  },
  {
    id: 'dea-ing-098',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'kcl'],
    question:
      'A KCL consumer application finished permanently. After terminating the worker instances, which leftover resource should you delete so it does not keep costing money or confuse a later app?',
    options: [
      'The DynamoDB table KCL used to track lease and checkpoint state',
      'The Kinesis stream itself whenever any consumer stops',
      'Amazon S3 Glacier vaults created by KCL',
      'The Glue Data Catalog database for the stream',
    ],
    correctAnswers: [0],
    explanation:
      'KCL persists shard leases and checkpoints in DynamoDB. Delete that table when the application is retired. Stopping workers does not imply deleting the stream; KCL does not create Glacier vaults or Glue databases as its state store.',
  },
  {
    id: 'dea-ing-099',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'firehose', 'dynamic-partitioning'],
    question:
      'Firehose should land streaming JSON into S3 prefixes grouped by customer_id inside each record. Feature:',
    options: [
      'Dynamic partitioning on keys in the payload',
      'Kinesis shard splitting only',
      'Glue job bookmarks on the delivery stream',
      'Redshift DISTSTYLE ALL on the Firehose buffer',
    ],
    correctAnswers: [0],
    explanation:
      'Dynamic partitioning continuously partitions Firehose output using keys in the data and writes matching S3 prefixes. Shard splits change stream capacity; bookmarks and DISTSTYLE are not Firehose partitioners.',
  },
  {
    id: 'dea-ing-100',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'firehose', 'parquet'],
    question:
      'Firehose should convert incoming JSON to a columnar format in S3 before Athena queries. Built-in conversion targets:',
    options: [
      'Apache Parquet or Apache ORC',
      'Avro only, with no Parquet option',
      'Microsoft Excel workbooks',
      'Protocol Buffers exclusively',
    ],
    correctAnswers: [0],
    explanation:
      'Firehose can convert JSON to Parquet or ORC for cheaper, faster analytics. Other input formats can be turned into JSON first with Lambda. Excel and protobuf are not the built-in Firehose columnar targets.',
  },
  {
    id: 'dea-ing-101',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'firehose', 'redshift'],
    question:
      'Firehose delivers compressed files that Redshift COPY must load. Compression format Firehose supports for the Redshift path:',
    options: [
      'GZIP only (ZIP and SNAPPY are not valid for the Redshift destination path)',
      'SNAPPY only',
      'ZIP only',
      'BZIP2 as the sole Redshift option',
    ],
    correctAnswers: [0],
    explanation:
      'Firehose can compress with GZIP, ZIP, or SNAPPY for S3, but only GZIP is supported when data is further loaded to Redshift.',
  },
  {
    id: 'dea-ing-102',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'msk', 'serverless'],
    question:
      'Kafka ingestion must scale partitions automatically with no broker instance-type or broker-count choices, billed by throughput. Cluster type:',
    options: [
      'Amazon MSK Serverless',
      'MSK Provisioned with Standard brokers you size yourself',
      'Amazon Kinesis On-Demand as a Kafka API',
      'Amazon MQ for ActiveMQ',
    ],
    correctAnswers: [0],
    explanation:
      'MSK Serverless provisions and balances partitions for you and charges for data streamed and retained. Provisioned MSK requires instance, storage, and broker decisions. Kinesis is not Kafka-compatible; Amazon MQ is not MSK.',
  },
  {
    id: 'dea-ing-103',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'msk-connect'],
    question:
      'CDC from Aurora MySQL must land continuously in an MSK topic without a custom producer app. Managed feature:',
    options: [
      'Amazon MSK Connect (Kafka Connect source connector)',
      'AWS Glue Python shell as a Kafka broker',
      'Amazon Athena federated query as the Kafka producer',
      'S3 Lifecycle as the Kafka source',
    ],
    correctAnswers: [0],
    explanation:
      'MSK Connect runs managed Kafka Connect source and sink connectors that copy data between Kafka and external systems. Glue Python shell, Athena, and Lifecycle are not Kafka Connect runtimes.',
  },
  {
    id: 'dea-ing-104',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'eventbridge-pipes'],
    question:
      'Kinesis records should be filtered, optionally enriched, then sent to Step Functions with little custom glue code. Service designed for this point-to-point pattern:',
    options: [
      'Amazon EventBridge Pipes',
      'Amazon CloudFront behaviors',
      'AWS Artifact agreements',
      'Amazon Route 53 alias records',
    ],
    correctAnswers: [0],
    explanation:
      'Pipes connect supported sources (Kinesis, DynamoDB Streams, SQS, MSK, MQ) to targets with optional filter and enrichment (Lambda, Step Functions, API Gateway). CDN, compliance docs, and DNS do not implement this pipe.',
  },
  {
    id: 'dea-ing-105',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'flink', 'windowing'],
    question:
      'Managed Flink must aggregate events into non-overlapping 5-minute buckets versus overlapping last-15-minute windows. Window types:',
    options: [
      'Tumbling windows for fixed non-overlapping intervals; sliding windows for overlapping intervals',
      'Tumbling windows always overlap; sliding windows never overlap',
      'Session windows are the only Flink window type on AWS',
      'Glue crawlers implement Flink window operators',
    ],
    correctAnswers: [0],
    explanation:
      'Flink windowing supports tumbling (fixed, non-overlapping), sliding (overlapping time windows), and custom event-time windows. Crawlers catalog files; they do not run Flink operators.',
  },
  {
    id: 'dea-ing-106',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'redshift', 'auto-copy'],
    question:
      'New files in an S3 prefix should load into a Redshift table automatically without a separate Glue or Lambda pipeline. Feature:',
    options: [
      'Redshift AUTO COPY job (COPY JOB AUTO ON after an S3 event integration)',
      'Athena CTAS into Redshift local storage',
      'S3 Object Lock as a load trigger',
      'CloudFront invalidation as the COPY scheduler',
    ],
    correctAnswers: [0],
    explanation:
      'An auto-copy job watches the S3 path and runs COPY when new objects arrive, after you create an S3 event integration. Athena CTAS writes query results, not Redshift auto-ingest; Object Lock and CloudFront are unrelated.',
  },
  {
    id: 'dea-ing-107',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'redshift', 'streaming'],
    question:
      'Near-real-time analytics on Kinesis or MSK should avoid staging in S3. Redshift pattern:',
    options: [
      'Streaming ingestion into a materialized view that is refreshed as a stream consumer',
      'Firehose COPY every 24 hours only',
      'UNLOAD from Kinesis into Glacier then COPY',
      'Glue crawler on the Kinesis ARN',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift streaming ingestion lands Kinesis or MSK data in a materialized view, assigning shards to slices and skipping S3 staging. Nightly Firehose, Glacier hops, and crawlers do not provide this low-latency path.',
  },
  {
    id: 'dea-ing-108',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'zero-etl'],
    question:
      'Aurora PostgreSQL operational data must appear in Redshift for dashboards without a customer-managed ETL job. First option to evaluate:',
    options: [
      'Amazon Redshift zero-ETL integration from the supported source',
      'AWS DMS only, because zero-ETL never supports Aurora',
      'Physical Snowball shipment each hour',
      'Public unauthenticated JDBC from the internet',
    ],
    correctAnswers: [0],
    explanation:
      'Zero-ETL automates replication from sources such as Aurora MySQL/PostgreSQL, RDS for MySQL, DynamoDB, and some SaaS apps into Redshift. Use DMS when the source is unsupported (for example Oracle, Db2, or many non-AWS databases).',
  },
  {
    id: 'dea-ing-109',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'etl', 'elt'],
    question:
      'Large joins and aggregations should run inside Redshift after a bulk load into staging tables, not in an external Spark cluster. Pipeline style:',
    options: [
      'ELT: extract, load to staging, then transform with SQL in the warehouse',
      'ETL only: all transforms must finish before any Redshift load',
      'Schema-on-read lake queries with no warehouse tables',
      'MSK Connect as the warehouse SQL engine',
    ],
    correctAnswers: [0],
    explanation:
      'ELT loads into staging then transforms with Redshift SQL (joins, filters, aggregations). Classic ETL transforms before load. Schema-on-read describes lakes; MSK Connect moves streams, it does not replace warehouse SQL.',
  },
  {
    id: 'dea-ing-110',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'ecs', 'fargate'],
    question:
      'A daily containerized S3 batch job should be as simple as possible for a team new to containers, with almost no servers to manage. Combination:',
    options: [
      'Amazon ECS with the Fargate launch type, scheduled (EventBridge or ECS scheduled task)',
      'Amazon ECS with the EC2 launch type so you still patch container instances',
      'Amazon EKS with EC2 managed node groups and a Kubernetes Job',
      'Amazon EKS with Fargate and Kubernetes CronJobs as the simplest path',
    ],
    correctAnswers: [0],
    explanation:
      'ECS on Fargate runs the task without managing EC2 or a Kubernetes control plane. EKS adds cluster and Job/CronJob complexity even on Fargate. ECS on EC2 still requires instance management.',
  },
  {
    id: 'dea-ing-111',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'enhanced-fan-out'],
    question:
      'Several analytics apps must each get dedicated Kinesis read throughput (Enhanced Fan-Out). Required registration step:',
    options: [
      'Call RegisterStreamConsumer for each consumer application, then subscribe to shards',
      'Set shard count equal to the number of downstream apps',
      'Create a Firehose stream so it fans out to every HTTP endpoint',
      'Attach a resource policy that raises the default shared 2 MB/s per-shard cap for standard iterators',
    ],
    correctAnswers: [0],
    explanation:
      'Enhanced Fan-Out requires registering each consumer (RegisterStreamConsumer) to receive a consumer ARN and dedicated ~2 MB/s per shard via SubscribeToShard. Extra shards and Firehose do not grant EFO. A policy cannot lift standard shared-iterator limits the way EFO does.',
  },
  {
    id: 'dea-ing-112',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'bedrock', 'llm'],
    question:
      'An Amazon Bedrock InvokeModel (or Converse) call sets maxTokens / max_tokens. That parameter limits:',
    options: [
      'How many tokens the model may generate in the completion',
      'How many tokens may be stored in a prompt cache',
      'The sum of input plus output tokens for the whole account',
      'How many tokens are allowed in the input prompt only',
    ],
    correctAnswers: [0],
    explanation:
      'maxTokens caps generated output length for that inference request. Input size is a separate context-window limit; account-level token quotas are not this parameter; prompt cache size is unrelated.',
  },
  {
    id: 'dea-ing-113',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'amazon-q', 'glue', 'llm'],
    question:
      'Engineers want natural-language help that authors and troubleshoots AWS Glue ETL in the Glue console. v1.1 skill 1.2.10 service:',
    options: [
      'Amazon Q data integration in AWS Glue, which generates PySpark job scripts and answers Glue/Lake Formation questions',
      'Amazon Kendra as the Spark job compiler',
      'Amazon Q in QuickSight, which writes production Glue jobs from dashboard clicks',
      'Amazon Polly text-to-speech as the ETL runtime',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Q in Glue is the exam-added LLM path for data processing: chat about Glue/catalog/crawlers and generate Python Spark ETL. Kendra searches documents; Q in QuickSight answers BI questions; Polly is speech, not a job authoring engine.',
  },
  {
    id: 'dea-ing-114',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'bedrock', 'llm'],
    question:
      'PDFs and support tickets in S3 must be turned into structured JSON (entities, sentiment) before a Glue job lands Parquet in the lake. Integration that fits skill 1.2.10:',
    options: [
      'Invoke Amazon Bedrock (or a Knowledge Base / agent) to extract fields, write results to S3, then run Glue/Athena on the structured output',
      'Amazon Macie as the only JSON transformer—it already emits one Parquet file per finding',
      'Amazon Kendra as the warehouse COPY command',
      'Amazon Rekognition labels as a replacement for all text extraction',
    ],
    correctAnswers: [0],
    explanation:
      'LLMs on Bedrock are the in-scope way to process unstructured text into structured records for downstream ETL. Macie classifies sensitive data; Kendra is enterprise search; Rekognition is vision, not general ticket parsing.',
  },
  {
    id: 'dea-ing-115',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'sam', 'iac'],
    question:
      'A serverless pipeline is Lambda consumers, a Step Functions state machine, and a DynamoDB metadata table. Exam-guide packaging tool (skill 1.4.6):',
    options: [
      'AWS Serverless Application Model (SAM) to define, package, and deploy those resources together',
      'AWS Snowball Edge as the deployment unit for Lambda',
      'Amazon MWAA DAGs as the only supported IaC for DynamoDB tables',
      'Amazon ECR image scan reports as the SAM equivalent',
    ],
    correctAnswers: [0],
    explanation:
      'The exam guide calls out SAM specifically for packaging Lambda, Step Functions, and DynamoDB in serverless data pipelines. Snowball is migration hardware; MWAA orchestrates Airflow; ECR stores images, it does not replace SAM templates.',
  },
  {
    id: 'dea-ing-116',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'lambda', 'efs'],
    question:
      'A Lambda transform unzips multi-GB archives that exceed the 10 GB /tmp ephemeral cap and must share a POSIX filesystem across concurrent invocations. Skill 1.4.7 choice:',
    options: [
      'Mount Amazon EFS on the function and read/write the shared volume',
      'Raise Lambda /tmp above 10 GB—ephemeral storage has no documented ceiling',
      'Use CloudFront as a writable POSIX disk for Lambda',
      'Store unzip scratch files in Route 53 TXT records',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda ephemeral storage tops out at 10,240 MB. EFS mounts give larger, shareable POSIX storage from inside the function. CloudFront is a CDN; Route 53 is DNS.',
  },
  {
    id: 'dea-ing-117',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'cicd', 'codepipeline'],
    question:
      'Glue PySpark unit tests must run automatically on every merge, then a passing build deploys the job to prod. In-scope developer tools:',
    options: [
      'AWS CodePipeline with AWS CodeBuild (and CodeDeploy when you also ship compute artifacts)',
      'Amazon Kinesis Data Streams as the CI orchestrator',
      'Amazon Macie as the test runner',
      'S3 Glacier vault lock as a deployment pipeline',
    ],
    correctAnswers: [0],
    explanation:
      'Exam-guide in-scope CI/CD is CodePipeline, CodeBuild, and CodeDeploy. Streams move events; Macie finds PII; Glacier is archive storage. Glue itself is not a general CI product.',
  },
  {
    id: 'dea-ing-118',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'neptune', 'graph'],
    question:
      'Fraud rings are modeled as customers, devices, and accounts with many-to-many edges. Warehouse star schemas keep exploding into huge bridge tables. Store/query shape (skill 1.4.11):',
    options: [
      'A graph data structure on Amazon Neptune (or similar) for traversals; keep Redshift/Athena for tabular facts',
      'A B-tree on a single Redshift sort key as a graph engine',
      'Amazon MemoryDB as a graph database with Gremlin as Redis commands',
      'Amazon Keyspaces because Cassandra CQL is a graph query language',
    ],
    correctAnswers: [0],
    explanation:
      'Graphs (nodes/edges) fit relationship-heavy data; Neptune is the in-scope graph database. Redshift sort keys, MemoryDB (Redis), and Keyspaces (Cassandra) are not graph engines.',
  },
  {
    id: 'dea-ing-119',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'amazon-q', 'quicksight'],
    question:
      'Business analysts need natural-language questions that return charts on an existing QuickSight dataset. Data engineers still author Glue jobs in the Glue console. Split:',
    options: [
      'Amazon Q in QuickSight for NL analytics; Amazon Q data integration in Glue for PySpark ETL generation',
      'Amazon Q in QuickSight as the production Spark compiler for Glue',
      'Amazon Kendra as the only way to chart warehouse facts',
      'Amazon Q Business as a replacement for both Glue and QuickSight runtimes',
    ],
    correctAnswers: [0],
    explanation:
      'Q in QuickSight is conversational BI over configured datasets. Q in Glue authors/troubleshoots data-integration code. Kendra is document search. Q Business is enterprise assistant RAG, not a Glue or QuickSight replacement.',
  },
  {
    id: 'dea-ing-120',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'cdk', 'cloudformation'],
    question:
      'The same data platform must be reproduced in three accounts: Glue jobs, Lake Formation, Redshift, plus some Lambda. Repeatable deployment (skill 1.4.8):',
    options: [
      'AWS CloudFormation or AWS CDK (CDK synthesizes CloudFormation) as infrastructure as code',
      'Manual console clicks documented in a wiki as the IaC standard',
      'AWS SAM only, because CDK cannot provision Glue or Redshift',
      'Amazon Q chat history as the source of truth for production resources',
    ],
    correctAnswers: [0],
    explanation:
      'CloudFormation and CDK are the exam-guide IaC pair for repeatable data-platform deploys. SAM is excellent for serverless subsets but is not the only option for Glue/Redshift. Console clicks and chat logs are not IaC.',
  },
  {
    id: 'dea-ing-121',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'bookmark'],
    question:
      'Daily Glue Spark jobs read an S3 bucket with DynamicFrames and currently scan every object. Incremental new files only, with the least custom code:',
    options: [
      'Enable Glue job bookmarks so each run records processed S3 objects and skips them next time',
      'Write a second job that stores every object key in DynamoDB and join against it in Spark',
      'Turn on Glue job metrics in CloudWatch; metrics alone skip already-read files',
      'Delete every processed object from S3 after the job so the next run has an empty prefix',
    ],
    correctAnswers: [0],
    explanation:
      'Bookmarks persist processed-file state for supported S3 DynamicFrame sources. A custom DynamoDB inventory is extra code. CloudWatch metrics do not filter input. Deleting objects is destructive and is not required for incremental Glue.',
  },
  {
    id: 'dea-ing-122',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'step-functions', 'map'],
    question:
      'Step Functions must run the same transform on each object in a large S3 prefix, with high concurrency. State type:',
    options: [
      'Map (Distributed Map for large S3 inventories); Parallel is a fixed set of named branches, not one branch per object',
      'Choice, which fans out a copy of the workflow to every key automatically',
      'Wait, which polls S3 until every file is transformed',
      'Succeed, which iterates the prefix as a hidden loop',
    ],
    correctAnswers: [0],
    explanation:
      'Map iterates an array or S3 object list and can run those iterations concurrently. Parallel is for a known handful of sibling branches. Choice branches on a condition; Wait delays; Succeed ends the execution.',
  },
  {
    id: 'dea-ing-123',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'kcl', 'duplicates'],
    question:
      'A Kinesis Producer Library publisher and a KCL consumer see duplicate records in the consumer before go-live. Which two causes are consistent with Kinesis at-least-once delivery? (Select TWO.)',
    options: [
      'The producer retried a PutRecords call after a network timeout even though the original write succeeded',
      'A reshard or a change in KCL record-processor count restarted processing from the last checkpoint, replaying records after that checkpoint',
      'IteratorAgeMilliseconds being high, by itself, duplicates every record on the shard',
      'Setting AggregationEnabled to true always clones each user record for every consumer',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Kinesis is at-least-once: producer retries after a timeout can double-write, and KCL rebalancing/resharding rewinds to the checkpoint. High iterator age means lag, not duplication. KPL aggregation packs records; it does not clone them for every consumer. Consumers must be idempotent.',
  },
  {
    id: 'dea-ing-124',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'flink', 'streaming'],
    question:
      'IoT events on Kinesis need complex stateful windowing before S3, continuously, with the least cluster operations. Prefer:',
    options: [
      'Amazon Managed Service for Apache Flink reading the stream and writing S3',
      'A nightly Glue batch job that “catches up” the stream once a day',
      'A single Lambda with 15 seconds of timeout as the unbounded stateful engine',
      'A long-lived EMR Spark cluster you patch yourself, when a managed Flink app would do',
    ],
    correctAnswers: [0],
    explanation:
      'Managed Flink is the low-ops home for continuous stateful stream processing. Scheduled Glue is batch. Lambda is a poor fit for long-running state and windows. EMR Spark can stream but you own more cluster operations.',
  },
  {
    id: 'dea-ing-125',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'firehose', 'lambda', 'parquet'],
    question:
      'Firehose must land 2 MB CSV files in S3 as Parquet. Firehose format conversion accepts JSON, not CSV. Least custom code:',
    options: [
      'A Firehose Lambda transform that turns each CSV payload into JSON, then enable Firehose’s native JSON-to-Parquet conversion to S3',
      'Firehose native conversion of CSV directly to Parquet with no Lambda',
      'Lambda that both parses CSV and writes Parquet, with Firehose only as a pass-through',
      'Firehose to JSON in S3, then a second always-on EMR cluster only to make Parquet',
    ],
    correctAnswers: [0],
    explanation:
      'Built-in Firehose columnar conversion is JSON → Parquet/ORC. Non-JSON sources use a Lambda transform to JSON first, then let Firehose write Parquet. Doing Parquet yourself, or adding EMR, is extra work.',
  },
  {
    id: 'dea-ing-126',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'sam'],
    question:
      'A SAM template already defines a Lambda. CSV drops in S3 should invoke it. Package and deploy with SAM’s standard workflow:',
    options: [
      'Add the bucket and the S3 event source mapping to the template, run sam build, then sam deploy --guided',
      'sam deploy --s3-bucket only, then click the S3 trigger in the console so SAM never sees the event',
      'sam package then aws cloudformation deploy, skipping sam build so dependencies are never installed',
      'Leave the event out of the template and document a manual console trigger as the IaC path',
    ],
    correctAnswers: [0],
    explanation:
      'Declare the bucket and S3 event in the SAM template. sam build produces the deployment artifact; sam deploy --guided creates/updates the stack, including the event source. Console-only triggers and skipping sam build fight that workflow.',
  },
  {
    id: 'dea-ing-127',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'lambda', 'memory'],
    question:
      'A 128 MB Lambda hits ~100% CPU on every S3-triggered transform; timeout is still unused. First performance knob:',
    options: [
      'Raise memory (for example to 512 MB); allocated vCPU scales with memory, so CPU-bound functions finish sooner',
      'Increase Maximum Retry Attempts; retries add CPU on a saturated function',
      'Place the function in a VPC with no other change; VPC attachment is not extra CPU',
      'Double the timeout only; unused timeout does not add cores',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda CPU is proportional to the memory setting. Retries, VPC ENIs, and a longer timeout do not give a CPU-bound handler more compute if it already finishes inside the current timeout.',
  },
  {
    id: 'dea-ing-128',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'quicksight', 'jdbc'],
    question:
      'Hourly order-state from several JDBC-compliant operational databases must land in one analytics store that QuickSight can use natively, with little extra app code:',
    options: [
      'Glue JDBC jobs into Amazon Redshift, then QuickSight on Redshift',
      'Glue into DynamoDB, then QuickSight as if DynamoDB were a native relational source',
      'DMS into DynamoDB in another Region, then Amazon Managed Grafana as the ops BI tool',
      'DMS into DynamoDB plus QuickSight, skipping a warehouse even when SQL reporting is the goal',
    ],
    correctAnswers: [0],
    explanation:
      'Glue speaks JDBC and loads Redshift; QuickSight has a first-class Redshift connector. DynamoDB is not QuickSight’s native relational warehouse source. Grafana is operations dashboards, not this hourly fulfillment BI path.',
  },
  {
    id: 'dea-ing-129',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'appflow', 'step-functions'],
    question:
      'Nightly correlation of Salesforce opportunities (~100 GB) with MySQL sales (~2 GB/day). Least operational overhead:',
    options: [
      'Amazon AppFlow for Salesforce, Glue JDBC for MySQL, AWS Step Functions to run the Glue job—no MWAA cluster',
      'MWAA fetching both sources with custom Lambda operators as the default least-ops design',
      'Kinesis Data Streams plus Managed Flink for a once-per-night batch join',
      'AppFlow for Salesforce, Glue for MySQL, then MWAA only because Step Functions cannot start Glue jobs',
    ],
    correctAnswers: [0],
    explanation:
      'AppFlow is the managed SaaS path from Salesforce. Glue handles JDBC MySQL. Step Functions natively starts Glue jobs. MWAA adds an Airflow environment you must run; Flink is the wrong default for a nightly batch join.',
  },
  {
    id: 'dea-ing-130',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dms', 'glue', 'bookmark'],
    question:
      'On-premises Oracle (70 tables, PKs, occasional UPDATEs) must land in an S3 lake as Parquet every day. Glue JDBC bookmarks would skip already-seen PK values and miss updates. Least-effort ongoing path:',
    options: [
      'AWS DMS full load plus CDC to S3 with Apache Parquet as the target format',
      'A Glue bookmark job from Oracle JDBC, because bookmarks replay UPDATEs to existing keys',
      'Sqoop on EMR as the first choice when DMS can write Parquet to S3',
      'DMS to RDS Oracle, then per-table Lambda triggers to S3, as the low-effort design',
    ],
    correctAnswers: [0],
    explanation:
      'DMS CDC captures inserts and updates from Oracle and can emit Parquet on S3. Glue bookmarks for JDBC/S3 track processed rows/files; they are not a substitute for database CDC of UPDATEs. Sqoop/EMR and Lambda-per-table add operations.',
  },
  {
    id: 'dea-ing-131',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'redshift', 'federated'],
    question:
      'Today’s RDS for MySQL POS rows must appear in Redshift reports with historical warehouse facts, near real time, without a standing replication pipeline:',
    options: [
      'Redshift federated queries that join live RDS tables with local Redshift history in one SQL statement',
      'DMS continuous replicate of all MySQL into Redshift even though the requirement forbids extra data movement',
      'Hourly Glue ETL copies, which add lag and pipeline maintenance',
      'Nightly UNLOAD/COPY via S3 as the low-latency path',
    ],
    correctAnswers: [0],
    explanation:
      'Federated queries read RDS in place and join to Redshift, avoiding ongoing copy cost. DMS, Glue, and S3 COPY all move data and add ops or delay.',
  },
  {
    id: 'dea-ing-132',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'flex', 'redshift-serverless'],
    question:
      'Partners query a cleaned lake only during business hours. Nightly transforms are not urgent. Cost-effective pair:',
    options: [
      'AWS Glue Flex for after-hours batch ETL, then Amazon Redshift Serverless so warehouse compute scales with query load',
      'A provisioned EMR cluster 24/7 plus a provisioned Redshift cluster that sits idle overnight',
      'Lambda as the only engine for multi-hour Spark-scale cleanses into provisioned Redshift',
      'Glue Flex into a provisioned Redshift cluster that you keep large all night for no queries',
    ],
    correctAnswers: [0],
    explanation:
      'Flex trades start time for lower ETL cost on flexible SLAs. Redshift Serverless bills for RPUs when partners actually query. Always-on EMR/provisioned warehouses waste idle hours; Lambda is the wrong Spark replacement.',
  },
  {
    id: 'dea-ing-133',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'parquet', 'orc', 'glue-catalog'],
    question:
      'EMR Spark writes a stream to S3 for Athena. Shortest analytic scans need both a columnar layout and a metastore Athena already uses. Choose TWO:',
    options: [
      'Apache Parquet plus the AWS Glue Data Catalog for schema',
      'Apache ORC plus the AWS Glue Data Catalog for schema',
      'Avro as the primary Athena columnar format',
      'Parquet data files with schema tracked only in a DynamoDB table Athena does not read',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Parquet and ORC are the columnar formats Athena prunes well. Glue Catalog is how Athena finds schema and partitions. Avro is row-oriented. DynamoDB or loose S3 schema files are not Athena’s table catalog.',
  },
  {
    id: 'dea-ing-134',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'mwaa', 'python'],
    question:
      'Orchestration must be Python DAGs with retries: EMR Spark, a Salesforce REST call, then Redshift load. Step Functions ASL is not acceptable. Service:',
    options: [
      'Amazon MWAA (Airflow Python DAGs, EMR/Redshift operators, HTTP/Salesforce hooks, retries)',
      'AWS Step Functions, which is authored as Python DAGs rather than Amazon States Language',
      'A single Glue job as the orchestrator of EMR clusters and arbitrary Salesforce APIs',
      'Amazon EventBridge Scheduler as a full DAG engine with Salesforce operators',
    ],
    correctAnswers: [0],
    explanation:
      'When the exam requires Python workflow code, MWAA is the Airflow path. Step Functions is JSON/YAML ASL, not Airflow Python. Glue runs ETL; EventBridge schedules events—it is not a Python DAG runtime.',
  },
  {
    id: 'dea-ing-135',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'findmatches'],
    question:
      'A lake migration has fuzzy duplicates (same person, slightly different strings). Least operational overhead to identify and drop matches:',
    options: [
      'An AWS Glue job using the FindMatches machine-learning transform',
      'A Pandas drop_duplicates() script you operate on exact string equality only',
      'A custom Glue job that vendors the Python “dedupe” library as the first choice',
      'Hand-written Spark joins on every column with no ML matching',
    ],
    correctAnswers: [0],
    explanation:
      'FindMatches is Glue’s managed ML transform for match/no-match even when values are not identical. Exact drop_duplicates and third-party libraries need more code and miss fuzzy duplicates.',
  },
  {
    id: 'dea-ing-136',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dms', 'kinesis'],
    question:
      'RDS for Oracle: land every table cheaply for later analytics, and call a REST API in near real time only for customer_complaints. Cost-effective split:',
    options: [
      'One DMS task CDC of customer_complaints into Kinesis Data Streams (Lambda consumes and calls the API); a second DMS task full load + CDC of all tables to S3',
      'DMS the whole database to a new RDS PostgreSQL instance just so Lambda can poll one table',
      'DMS everything into Redshift and use the Data API plus UNLOAD as the cheap lake',
      'An Oracle read replica that Lambda polls, with no S3 landing zone for the other tables',
    ],
    correctAnswers: [0],
    explanation:
      'DMS can stream a table to Kinesis for low-latency consumers and, separately, land all tables on S3 for analytics without a second database engine. A PostgreSQL/Redshift copy or replica adds engines you then operate.',
  },
  {
    id: 'dea-ing-137',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'hot-shard'],
    question:
      'Kinesis WriteThroughputExceeded hits a few shards while others sit idle. The partition key is facility_id and a handful of plants produce most events. Fix:',
    options: [
      'Change the partition key to a high-cardinality random (or hashed) value so writes spread across shards',
      'Only add shards; a hot key still hashes to one shard and keeps throttling that shard',
      'Switch the partition key to capture date so an entire day’s traffic shares one shard',
      'Archive on the producer and keep facility_id as the only key',
    ],
    correctAnswers: [0],
    explanation:
      'Kinesis maps the partition key to a shard. A popular facility_id is a hot shard. More shards do not split that key. Date as the key often creates a new hotspot. Random/hashed keys spread puts; consumers that still need facility_id keep it in the payload.',
  },
  {
    id: 'dea-ing-138',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'redshift', 'streaming'],
    question:
      'GB/s from Kinesis must appear in existing Redshift BI with no S3/COPY pipeline. Wiring:',
    options: [
      'An external schema that maps the Kinesis stream, a materialized view over that object, and auto refresh of the MV',
      'SQL SELECT directly against the Kinesis API as if it were a native table, with no external schema',
      'Firehose to S3 then COPY as the lowest-ops GB/s path',
      'Stage in S3 from the producer and COPY on a one-minute cron',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift streaming ingestion uses an external schema for the stream and a materialized view that consumes shards (auto refresh). That skips S3 staging. Firehose/COPY adds a hop and delay.',
  },
  {
    id: 'dea-ing-139',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'crawler'],
    question:
      'A Glue crawler on one prefix created many tables instead of one. To get a single table, keep which two grouping inputs consistent? (Select TWO.)',
    options: [
      'Same file format, compression, and schema across objects',
      'A consistent S3 prefix/folder structure (Hive-style paths)',
      'Schema-only consistency while mixing CSV, Parquet, and gzip at random',
      'Similar object names (report1.csv, report2.csv) even when prefixes and formats differ',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Crawler grouping uses data compatibility (format, compression, schema) and S3 path structure. Schema alone, or similar file names with mixed layouts, still splits tables. The ~70% schema threshold is a related but separate merge rule.',
  },
  {
    id: 'dea-ing-140',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'pii'],
    question:
      'Profile a dataset, find PII, and obfuscate it on the way into an S3 lake with the least custom code. Glue Data Quality is already in the account. Prefer:',
    options: [
      'AWS Glue Studio Detect PII (redact, hash, or remove), then a Glue job (Step Functions if you need orchestration) into S3',
      'A Glue Data Quality ruleset as the PII obfuscation engine',
      'Firehose plus a from-scratch Lambda PII detector as the first choice',
      'Load DynamoDB first, mask in Lambda, then copy to S3',
    ],
    correctAnswers: [0],
    explanation:
      'Detect PII is the Glue transform that identifies and obfuscates sensitive fields. Glue Data Quality scores completeness/validity; it does not replace Detect PII. Custom Firehose/DynamoDB paths add code you do not need.',
  },
  {
    id: 'dea-ing-141',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'firehose', 'opensearch'],
    question:
      'Millions of Kinesis events per day must be transformed, then indexed in OpenSearch, with no KCL or Logstash fleet:',
    options: [
      'Amazon Data Firehose reading the stream, a Lambda data transform, OpenSearch as the Firehose destination',
      'A long-lived Logstash cluster with prebuilt filters as the low-ops default',
      'Lambda calling the Kinesis Agent as if Agent were a consumer library',
      'A custom KCL application you patch as the OpenSearch bulk loader',
    ],
    correctAnswers: [0],
    explanation:
      'Firehose can consume a Kinesis stream, invoke Lambda, and deliver to OpenSearch. Logstash, Kinesis Agent, and KCL are more operational work for the same path.',
  },
  {
    id: 'dea-ing-142',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'libraries'],
    question:
      'Daily complex PySpark on S3 must use internal Python wheels, then land in Redshift, serverless, least cluster ops:',
    options: [
      'AWS Glue (Studio) Spark jobs with extra Python libraries configured on the job, plus a Glue Redshift connection',
      'EC2 Auto Scaling plus a custom AMI that bakes the wheels',
      'EMR with bootstrap actions as the first choice when Glue can attach the libraries',
      'SageMaker Processing as the Redshift loader',
    ],
    correctAnswers: [0],
    explanation:
      'Glue Spark jobs accept additional Python libraries and write to Redshift without you running EMR or EC2. Bootstrap AMIs and SageMaker Processing are extra platforms for this ETL.',
  },
  {
    id: 'dea-ing-143',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'latency'],
    question:
      'IoT payloads (~100 KB / 10 s) must be in S3 so a reader can pick them up every 30 seconds. Firehose’s default S3 buffer is 300 seconds. Lowest-latency pattern:',
    options: [
      'Kinesis Data Streams plus a KCL (or similar) consumer with a ~5 second application buffer writing S3',
      'Firehose to S3 using the default buffer interval',
      'Firehose with a 5 second BufferingHints value treated as a hard SLA (hints are not a guarantee)',
      'Managed Flink plus Firehose as required extra hops for this simple S3 land',
    ],
    correctAnswers: [0],
    explanation:
      'A short-buffer stream consumer can meet a 30 second S3 SLA. Firehose default buffering is minutes; even a 5 second hint is still a hint. Flink+Firehose adds latency and ops you do not need.',
  },
  {
    id: 'dea-ing-144',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dms', 'sql-server'],
    question:
      'Monthly on-premises SQL Server to RDS for SQL Server is getting expensive and must cut over with little downtime. Service built for that:',
    options: [
      'AWS DMS full load plus ongoing CDC to RDS for SQL Server, then a short cutover',
      'AWS DataSync, which copies database transaction logs as files but is not SQL Server CDC',
      'AWS Direct Connect alone, which is a network path, not a database replicator',
      'Lambda polling every table as a CDC engine',
    ],
    correctAnswers: [0],
    explanation:
      'DMS is the managed SQL Server→RDS migrator with CDC for a short cutover. DataSync moves files; Direct Connect is connectivity; Lambda is not a SQL Server replication product.',
  },
  {
    id: 'dea-ing-145',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue-studio', 'recipe'],
    question:
      'An analyst must clean and standardize lake files with no new code; engineers will add Spark nodes later in the same visual job:',
    options: [
      'AWS Glue Studio data preparation recipes in the visual ETL canvas',
      'A Glue Studio notebook of Pandas as the no-code path',
      'SageMaker Canvas plus a second Glue project as the least-effort default',
      'A Word doc of rules for engineers to reimplement by hand',
    ],
    correctAnswers: [0],
    explanation:
      'Glue Studio recipes are visual, no-code prep steps that sit on the same DAG as later Glue transforms. Notebooks and Canvas/Wrangler are code or extra products; a document is not a pipeline.',
  },
  {
    id: 'dea-ing-146',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'athena', 'federated'],
    question:
      'A one-time SQL join across DynamoDB, RDS, Redshift, and S3 should not copy everything into a new lake first. Most cost-effective:',
    options: [
      'Amazon Athena Federated Query (connectors) joining those sources in place',
      'A provisioned EMR cluster for a single ad-hoc join',
      'COPY of DynamoDB, RDS, and Redshift into S3 before Athena can see them',
      'Redshift Spectrum querying DynamoDB and RDS as if they were S3 files',
    ],
    correctAnswers: [0],
    explanation:
      'Athena federated queries run serverless SQL across S3 and supported databases without a standing cluster or a full copy. Spectrum reads S3, not DynamoDB/RDS. EMR is expensive for one shot.',
  },
  {
    id: 'dea-ing-147',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'athena', 'partiql', 'federated'],
    question:
      'Scientists need SQL-like queries over S3 JSON/CSV, RDS SQL Server, provisioned DynamoDB, and Redshift with no extra ETL copies:',
    options: [
      'Glue crawlers into the Data Catalog, then Athena (SQL plus PartiQL for JSON) with federated connectors for the databases',
      'Redshift Spectrum as the engine that federates into DynamoDB and SQL Server',
      'Glue jobs that convert every JSON object to Parquet before anyone can query',
      'Lake Formation jobs that copy every source to Parquet as a required first step',
    ],
    correctAnswers: [0],
    explanation:
      'Athena queries Glue-cataloged S3 and federated sources in place; PartiQL covers nested JSON. Spectrum is S3-from-Redshift, not a DynamoDB/SQL Server federated engine. Full copies add cost for this query-everywhere need.',
  },
  {
    id: 'dea-ing-148',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'eventbridge', 'databrew', 'pii'],
    question:
      'Occasional S3 drops must be detected, PII masked, then published for analytics. Macie is available but cannot rewrite objects. Least ops:',
    options: [
      'Amazon EventBridge (or S3 events) start a Glue workflow; Glue DataBrew detects and redacts PII into a curated S3 prefix',
      'S3 events → Glue job → Macie as the masking transform (Macie classifies; it does not obfuscate files)',
      'MSK plus EMR as the default for a few files a week',
      'Kinesis Data Streams plus Comprehend into DynamoDB as the lake path',
    ],
    correctAnswers: [0],
    explanation:
      'EventBridge can start Glue when objects arrive. DataBrew has PII detect/redact transforms. Macie reports sensitive data; it is not a masking ETL engine.',
  },
  {
    id: 'dea-ing-149',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dms', 's3', 'parquet'],
    question:
      'Most sources are RDS; one is on-premises SQL Server Enterprise. Need full history plus ongoing changes as Parquet in the S3 lake, one product:',
    options: [
      'AWS DMS full load and CDC to S3 with Apache Parquet as the target format for every source',
      'One Glue job for history and a second Glue job you write for CDC',
      'DMS for the initial copy only, then Glue for all future changes',
      'Glue for history and Kinesis for database CDC as the cheap default',
    ],
    correctAnswers: [0],
    explanation:
      'DMS can full-load and CDC both RDS and self-managed SQL Server into S3 Parquet. Splitting Glue/Kinesis means extra pipelines you then operate.',
  },
  {
    id: 'dea-ing-150',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'zero-etl', 'aurora'],
    question:
      'Hourly full refresh of 100 Aurora MySQL tables into Redshift delays reports that only need 30 tables. Least-ops near-real-time pair: (Select TWO.)',
    options: [
      'An Aurora zero-ETL integration that includes only those required tables (data filters)',
      'A Redshift database created from that integration to query the replicated data',
      'Query Editor v2 as a live federated engine that replaces zero-ETL',
      'A Glue workflow every five minutes that copies each of the 30 tables',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Zero-ETL continuously replicates selected Aurora tables; you create a destination database in Redshift for those objects. Query Editor v2 is a SQL client, not the integration. Glue every five minutes is more ops and lag.',
  },
  {
    id: 'dea-ing-151',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'glue-workflow', 'step-functions'],
    question:
      'A serverless Glue-to-Redshift pipeline needs retries and a visual job graph. Which two orchestrators fit without EC2? (Select TWO.)',
    options: [
      'AWS Step Functions coordinating Glue jobs with Retry/Catch',
      'AWS Glue workflows (triggers and a DAG of Glue jobs/crawlers)',
      'An always-on EC2 cron that starts Glue jobs',
      'CodePipeline as the Glue ETL state machine',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Step Functions and Glue workflows are both serverless ways to chain Glue ETL. EC2 cron is not serverless. CodePipeline is CI/CD, not a Glue DAG engine. EventBridge can start jobs on S3 events but is weak for complex branching.',
  },
  {
    id: 'dea-ing-152',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'findmatches'],
    question:
      'Customer keys differ across RDS databases (place_id vs location_id). Link records with the least cluster ops:',
    options: [
      'Glue crawlers on the databases, then a Glue FindMatches ML transform you teach and tune',
      'A provisioned EMR cluster and Zeppelin plus a custom Spark ML model as the first choice',
      'SageMaker Spark ML pipelines as required once Glue can catalog the tables',
      'EMR FindMatches in Zeppelin instead of the Glue ML transform',
    ],
    correctAnswers: [0],
    explanation:
      'FindMatches is Glue’s managed matcher for records that do not share a clean key. Crawlers feed it schemas. EMR/SageMaker custom ML is more infrastructure for the same job.',
  },
  {
    id: 'dea-ing-153',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'eventbridge', 'lambda', 'redshift'],
    question:
      'Frontend already writes small CSV files to S3. An existing Lambda COPY-loads them into Redshift. Start that function on each new object without polling:',
    options: [
      'Turn on S3 notifications to EventBridge; a rule on object-created events targets the Lambda',
      'DMS streaming S3 objects into Kinesis, then Lambda, as if CSV files were a database CDC source',
      'An EventBridge rule that only fills an SQS queue you then poll, adding a hop you do not need',
      'A nightly Glue crawler as the COPY trigger',
    ],
    correctAnswers: [0],
    explanation:
      'S3 can publish object-created events to EventBridge, and a matching rule can invoke Lambda directly. DMS/Kinesis is the wrong product for a few megabytes of CSV. An extra SQS hop is optional buffering, not required. Crawlers catalog; they do not COPY.',
  },
  {
    id: 'dea-ing-154',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'kinesis', 'exactly-once'],
    question:
      'Kinesis PutRecord can time out after the service already accepted the data. Retries then create duplicates. How do you get exactly-once processing without leaving Kinesis?',
    options: [
      'Stamp a stable unique ID in every record at the producer and drop duplicates downstream',
      'Rely on Flink checkpoint config alone as if that removed producer-side double puts',
      'Promise the source never retries, which the SDK will still do on timeouts',
      'Replace the stream with EMR Spark Streaming as the default exactly-once bus',
    ],
    correctAnswers: [0],
    explanation:
      'Kinesis is at-least-once on the wire. A source-side unique ID lets consumers or sinks ignore the second copy. Checkpoints avoid reprocessing already-acked work; they do not undo a second PutRecord. Leaving Kinesis is extra ops for the same problem.',
  },
  {
    id: 'dea-ing-155',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'msk', 'replicator'],
    question:
      'Trading events on MSK must stay ordered, encrypted in transit, and replicated among three Regions with sub-second lag and little ops:',
    options: [
      'Amazon MSK Replicator between the regional clusters (TLS and IAM auth), which copies topics, metadata, and consumer offsets',
      'Self-managed Kafka Connect connectors you write in every Region',
      'MirrorMaker 2.0 clusters you patch in every Region',
      'Kinesis plus Firehose as a Kafka-to-Kafka replicator',
    ],
    correctAnswers: [0],
    explanation:
      'MSK Replicator is the managed cross-Region Kafka copy, including offsets, with in-transit encryption. Connect and MirrorMaker are operator-owned. Firehose delivers to S3/OpenSearch/Redshift; it is not an MSK mesh.',
  },
  {
    id: 'dea-ing-156',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'emr', 'hadoop'],
    question:
      'On-prem ETL uses Apache Pig, Oozie, Spark, HBase, and Flink on petabytes with second-scale jobs. Move to AWS and keep those engines without rewriting everything to Glue scripts:',
    options: [
      'Amazon EMR (including EMR Serverless where the framework is supported) so the Hadoop stack stays intact',
      'AWS Glue as the product that runs HBase and Oozie natively',
      'AWS Lambda as the petabyte Spark/HBase runtime',
      'Amazon Redshift as a Pig/Oozie/HBase cluster',
    ],
    correctAnswers: [0],
    explanation:
      'EMR is the managed home for that Apache mix at PB scale. Glue is Spark/Python ETL, not HBase+Oozie. Lambda is short-lived and size-capped. Redshift is a warehouse, not that Hadoop platform.',
  },
  {
    id: 'dea-ing-157',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'iceberg'],
    question:
      'Glue Spark jobs must read and write Apache Iceberg using Glue’s bundled Iceberg support. Required pair: (Select TWO.)',
    options: [
      'Set the --datalake-formats job parameter to iceberg',
      'Pass Spark Iceberg settings with a --conf job parameter (or SparkConf in the script)',
      'Set --datalake-formats to iceberg and also --extra-jars to a custom Iceberg JAR (those two modes conflict)',
      'Enable job bookmarks as if bookmarks turned on Iceberg',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Native Iceberg in Glue is --datalake-formats=iceberg plus Iceberg Spark conf. A custom JAR is only for a version Glue does not ship, and you then omit iceberg from datalake-formats. Bookmarks and autoscaling are unrelated switches.',
  },
  {
    id: 'dea-ing-158',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'firehose', 'kinesis-agent', 's3'],
    question:
      'On-prem servers must push daily hotel files into a fully managed ingest path that Athena can query, with recovery from accidental deletes:',
    options: [
      'Kinesis Agent on the servers to Amazon Data Firehose into versioned S3',
      'DataSync to EFS plus Backup as the Athena lake',
      'Glue jobs pulling from on-prem into RDS as the Athena source',
      'A self-managed Kafka agent into MSK when Firehose already meets the need',
    ],
    correctAnswers: [0],
    explanation:
      'Agent plus Firehose is fully managed delivery into S3. Versioning keeps prior object versions after a delete marker. EFS and RDS are the wrong Athena landing zone. MSK adds brokers you then operate.',
  },
  {
    id: 'dea-ing-159',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'storage-gateway', 'eventbridge', 'glue-workflow'],
    question:
      'S3 File Gateway finishes copying an on-premises file. Start a Glue workflow of several jobs automatically, least extra code:',
    options: [
      'An EventBridge rule on the Storage Gateway file-upload success event that starts the Glue workflow',
      'A guessed EventBridge cron at the time uploads “usually” finish',
      'An engineer clicking Run workflow after each transfer',
      'A Lambda on every S3 Object Created that you write only to start the same workflow',
    ],
    correctAnswers: [0],
    explanation:
      'File Gateway emits upload-complete events to EventBridge. A rule can start the Glue workflow directly. Cron and human clicks miss late files. An S3-created Lambda works but is an extra hop when the Gateway event already exists.',
  },
  {
    id: 'dea-ing-160',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'eventbridge', 'step-functions', 'lambda'],
    question:
      'Every hour, check RDS, DynamoDB, and OpenSearch for new rows (≤10 MB) and process them with retries. Cheapest automated pair:',
    options: [
      'EventBridge schedule → Step Functions that invoke Lambda, with Retry/Catch on each state',
      'The same Lambda plus SQS, without workflow-level Retry/Catch you already need',
      'An hourly EMR Spark cluster for 10 MB',
      'MWAA as the default for one Lambda-sized hourly check',
    ],
    correctAnswers: [0],
    explanation:
      'Ten megabytes fits Lambda. EventBridge supplies the hour; Step Functions supplies the DAG and error handling across RDS/DynamoDB/OpenSearch calls. EMR and MWAA are standing cost for this size. SQS can buffer but is not the orchestrator with per-state Retry.',
  },
  {
    id: 'dea-ing-161',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'glue-crawler', 's3', 'sqs'],
    question:
      'After the first full crawl, a Glue crawler should pick up only new/changed S3 objects without listing the whole prefix every run:',
    options: [
      'Put the crawler in S3 event mode and feed it an SQS queue of S3 event messages',
      'A Lambda that lists the bucket and starts a full crawl on a cron',
      'Step Functions that walks every key and calls CreateTable',
      'Disable the crawler and hope Athena partition projection infers new columns',
    ],
    correctAnswers: [0],
    explanation:
      'S3 event mode consumes object-created/deleted messages from SQS so later crawls are incremental. Custom listers and state machines recrawl. Projection does not replace schema discovery.',
  },
  {
    id: 'dea-ing-162',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'lambda', 'concurrency'],
    question:
      'A critical ingest Lambda is throttled because other functions in the Region steal burst concurrency. No extra charge, must not buy warm instances:',
    options: [
      'Reserved concurrency on that function so a slice of the account pool cannot be used by others',
      'Provisioned concurrency, which is for cold starts and is billed even when idle',
      'Raise the account concurrency limit only, which still lets noisy neighbors win',
      'Turn the function into an always-on Fargate service as the first Lambda knob',
    ],
    correctAnswers: [0],
    explanation:
      'Reserved concurrency carves capacity for one function. Provisioned concurrency pre-creates execution environments (cost). Account limits raise the ceiling but do not isolate a function. Fargate is a different runtime.',
  },
  {
    id: 'dea-ing-163',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'msk', 'storage'],
    question:
      'MSK broker EBS is filling because topics grew and retention lengthened. Scale disk without changing broker instance size:',
    options: [
      'Increase per-broker EBS and attach Application Auto Scaling so storage grows at a utilization target',
      'Scale ZooKeeper storage as if that held topic data',
      'Change broker instance types as the only disk fix',
      'Shorten retention to zero as the required first step',
    ],
    correctAnswers: [0],
    explanation:
      'Topic data lives on broker EBS. MSK can scale that volume, including automatically. ZooKeeper is metadata. Compute instance type is a different knob than disk.',
  },
  {
    id: 'dea-ing-164',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'git'],
    question:
      'Feature branch B must pick up commits that landed on master after B diverged, and you want conflicts before the PR:',
    options: [
      'git rebase master (replay B’s commits on top of current master)',
      'git diff master only, which does not move the branch',
      'Delete B and re-clone as a substitute for rebase',
      'git push --force to master from B as the merge strategy',
    ],
    correctAnswers: [0],
    explanation:
      'Rebase replays the topic commits onto the updated master tip so you resolve conflicts locally. Diff is read-only. Force-pushing B onto master is not how you catch up a feature branch.',
  },
  {
    id: 'dea-ing-165',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'emr', 'encryption'],
    question:
      'A new EMR cluster must encrypt S3 EMRFS with a CMK and in-transit with a PEM. When do you attach that?',
    options: [
      'One EMR security configuration selected at cluster launch (you cannot attach it afterward)',
      'Two security configurations, one for S3 and one for TLS, applied after the cluster is RUNNING',
      'A bucket policy as a substitute for in-transit TLS between nodes',
      'KMS on the AMI only, skipping the EMR security configuration',
    ],
    correctAnswers: [0],
    explanation:
      'At-rest and in-transit settings live in an EMR security configuration that you choose when you create the cluster. You do not bolt that config onto a running cluster.',
  },
  {
    id: 'dea-ing-166',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 's3-select', 'parquet'],
    question:
      'You need one column from a single Parquet object in S3, once, with no catalog, crawler, or cluster:',
    options: [
      'Amazon S3 Select (SQL against that object, return only the column)',
      'Athena plus a Glue crawler for a one-object query',
      'A Lambda that downloads the file into pandas as the managed path',
      'Glue DataBrew as required before S3 Select exists',
    ],
    correctAnswers: [0],
    explanation:
      'S3 Select runs SQL on one object and returns a subset. Athena needs a table. Lambda/DataBrew are extra compute for a single columnar read.',
  },
  {
    id: 'dea-ing-167',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dynamodb', 'opensearch', 'streams'],
    question:
      'OpenSearch documents must stay in near real time with DynamoDB item creates, updates, and deletes:',
    options: [
      'DynamoDB Streams invoke Lambda; the function indexes, updates, or deletes the matching OpenSearch document',
      'Nightly Glue Scan of the table into OpenSearch',
      'DMS the DynamoDB table to OpenSearch as if it were a relational CDC target',
      'Athena federated query as the OpenSearch indexer',
    ],
    correctAnswers: [0],
    explanation:
      'Streams plus Lambda is the managed change-driven sync, including deletes. Batch scans lag. DMS and Athena are not that indexer path.',
  },
  {
    id: 'dea-ing-168',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'iceberg', 'kinesis', 'compaction'],
    question:
      'EMR Spark Streaming from Kinesis must land Iceberg without slowing ingest as files pile up:',
    options: [
      'Iceberg merge-on-read for appends/deletes, plus Glue’s compaction optimizer on the catalog table',
      'Copy-on-write so every micro-batch rewrites large files during ingest',
      'Disable compaction so readers open millions of tiny files forever',
      'Firehose as the Iceberg writer that replaces Spark Streaming',
    ],
    correctAnswers: [0],
    explanation:
      'Merge-on-read appends delete/data files instead of rewriting data files on every write. Glue can compact those files later. Copy-on-write during the stream hurts ingest latency.',
  },
  {
    id: 'dea-ing-169',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'autoscaling'],
    question:
      'A Glue Spark job is DPU-bound only during spikes and idle the rest of the run. Avoid a permanently oversized worker count:',
    options: [
      'Glue Auto Scaling so workers are added and removed with parallelism',
      'Pin the maximum DPU for the whole job as the only scaling tool',
      'Restart the job by hand when CloudWatch looks busy',
      'Move the job to Lambda because Auto Scaling is EMR-only',
    ],
    correctAnswers: [0],
    explanation:
      'Glue Auto Scaling grows and shrinks workers with demand. A fixed max DPU wastes money off-peak. Lambda is not a Spark DPU pool.',
  },
  {
    id: 'dea-ing-170',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'bookmarks', 'jdbc'],
    question:
      'A scheduled Glue job must full-load a JDBC table once, then each night append only new rows to S3:',
    options: [
      'Job bookmarks with a strictly increasing bookmark key (for example an insert id or timestamp)',
      'S3 bookmarks on the JDBC source (bookmarks for JDBC use a key column, not object keys)',
      'Drop and reload the S3 prefix every night',
      'A crawler as the incremental JDBC reader',
    ],
    correctAnswers: [0],
    explanation:
      'JDBC bookmarks store the last key value and read rows greater than that on the next success. The key must be monotonic. S3 bookmark behavior does not apply to JDBC. Crawlers catalog; they do not incrementally extract.',
  },
  {
    id: 'dea-ing-171',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'firehose', 'lambda'],
    question:
      'Firehose must filter and aggregate records with custom logic before S3. Built-in data format conversion is not enough:',
    options: [
      'Attach a Lambda processor to the Firehose stream for that custom transform',
      'Rely on Firehose JSON→Parquet conversion as if it were arbitrary aggregation',
      'Stand up EMR Spark Streaming as required once Firehose exists',
      'Kinesis Data Streams without a consumer as the S3 writer',
    ],
    correctAnswers: [0],
    explanation:
      'Firehose built-ins cover compression, format conversion, and similar. Custom filter/aggregate logic is a Lambda transform on the delivery stream. EMR is extra ops for the same hook.',
  },
  {
    id: 'dea-ing-172',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'step-functions', 'distributed-map'],
    question:
      'Distributed Map processes a huge S3 CSV. The run must fail if more than 15% of items fail or time out:',
    options: [
      'Set ToleratedFailurePercentage to 15 on the Map Run',
      'Use Parallel instead of Map so percentage failure is automatic',
      'Ignore item failures; Map always succeeds if one child succeeds',
      'Move the CSV to EMR because Map cannot tolerate a failure percent',
    ],
    correctAnswers: [0],
    explanation:
      'ToleratedFailurePercentage fails the Map Run when failed/timed-out items exceed that share. Parallel is a fixed branch set. Map does not silently ignore a 15% SLA.',
  },
  {
    id: 'dea-ing-173',
    domain: 'ingestion',
    task: '1.3',
    tags: ['dea-c01', 'step-functions', 'callback'],
    question:
      'A pipeline must wait hours for an external validator callback, then continue, billed per transition not per wait-second:',
    options: [
      'Step Functions Standard with .waitForTaskToken (can run up to a year)',
      'Express Workflows, which max out at five minutes and do not support callback tasks',
      'A Lambda that sleeps 15 minutes in a loop as the orchestrator',
      'Glue workflows as the callback token bus',
    ],
    correctAnswers: [0],
    explanation:
      'Standard Wait-for-callback holds the token until the validator returns. Express is short-lived and has no callback integration. Lambda timeouts and Glue triggers are the wrong wait primitive.',
  },
  {
    id: 'dea-ing-174',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dms', 'redshift'],
    question:
      'DMS must load a source in us-east-1 into Redshift in Account_B eu-west-1. Where should the replication instance live?',
    options: [
      'In the target account and Region (eu-west-1), with network path back to the source',
      'Always in the source Region, even when AWS recommends colocating with the target',
      'On the Redshift leader node as a sidecar',
      'As a Glue crawler in us-east-1',
    ],
    correctAnswers: [0],
    explanation:
      'AWS recommends the replication instance next to the target. It can still reach a cross-account/Region source when routing and security groups allow it.',
  },
  {
    id: 'dea-ing-175',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'flex'],
    question:
      'Overnight Glue Spark has no startup or SLA; cost matters more than start time:',
    options: [
      'FLEX execution class on the job (cheaper, variable start/finish)',
      'STANDARD execution as if FLEX were only for streaming',
      'Spot on Glue as a documented worker-purchase type (that is EMR)',
      'Provisioned concurrency on the Glue job (that is Lambda)',
    ],
    correctAnswers: [0],
    explanation:
      'FLEX is for non-urgent Spark jobs and costs less than STANDARD. Glue does not take EC2 Spot the way EMR does. Provisioned concurrency is a Lambda setting.',
  },
  {
    id: 'dea-ing-176',
    domain: 'ingestion',
    task: '1.4',
    tags: ['dea-c01', 'glue', 'vpc'],
    question:
      'Many Glue jobs start at once in a small private subnet and fail at launch with no free private IPs:',
    options: [
      'Glue creates an ENI per connection in that subnet; enlarge the subnet (or split jobs) so addresses remain',
      'Raise DPU as if that allocated extra VPC IPs',
      'Open all outbound NACL rules, which does not add IPv4 space',
      'Disable the VPC connection so jobs skip ENIs and still reach RDS privately',
    ],
    correctAnswers: [0],
    explanation:
      'Each concurrent Glue job in a VPC takes private IPs for ENIs. Exhaustion is a subnet-size/concurrency problem, not a DPU or NACL problem. Leaving the VPC breaks private RDS access.',
  },
  {
    id: 'dea-ing-177',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'emr', 'instance-types'],
    question:
      'EMR Spark task nodes are CPU-saturated while RAM sits mostly free. Cheaper node class:',
    options: [
      'Compute-optimized task instances (higher vCPU per dollar, less unused memory)',
      'Memory-optimized nodes as the CPU-bound default',
      'Storage-optimized nodes because Spark always needs local HDFS for S3 data',
      'Keep oversized general-purpose nodes and ignore the CPU:memory mismatch',
    ],
    correctAnswers: [0],
    explanation:
      'Compute-optimized types match CPU-bound batch. Memory-optimized wastes spend when RAM is idle. S3-backed Spark does not require storage-optimized HDFS for this symptom.',
  },
  {
    id: 'dea-ing-178',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 's3', 'lambda'],
    question:
      'Lambda should run only when a .csv lands in a prefix, not for every object type, with no extra bus:',
    options: [
      'S3 ObjectCreated notification on the function with a suffix filter of .csv',
      'SNS in front of Lambda as required for a suffix filter',
      'A crawler schedule as the .csv trigger',
      'EventBridge with no event pattern, invoking Lambda for every bucket API',
    ],
    correctAnswers: [0],
    explanation:
      'S3 notifications support prefix/suffix filters and can invoke Lambda directly. SNS is optional fan-out, not required for a single function.',
  },
  {
    id: 'dea-ing-179',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'flink', 'timestream'],
    question:
      'Kinesis time-series must reach Grafana with the least delay. Firehose cannot target this store:',
    options: [
      'Managed Flink writing Amazon Timestream for LiveAnalytics; Grafana uses Timestream as a data source',
      'Firehose to Timestream (not a supported Firehose destination)',
      'Firehose to S3 then batch Glue into Timestream as the low-latency path',
      'Athena on S3 as a millisecond time-series database',
    ],
    correctAnswers: [0],
    explanation:
      'Flink can sink Kinesis into Timestream continuously. Firehose does not deliver to Timestream. S3/Athena adds object and query lag.',
  },
  {
    id: 'dea-ing-180',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue', 'schema-registry'],
    question:
      'IoT JSON schemas change as devices upgrade. Track versions and still land in Redshift Serverless:',
    options: [
      'Glue Data Catalog plus Glue Schema Registry for evolving JSON, Glue ETL into Redshift Serverless',
      'Athena workgroups as a schema registry',
      'Lambda writing ad-hoc JSON with no registry',
      'A provisioned Redshift cluster as the only place schemas can version',
    ],
    correctAnswers: [0],
    explanation:
      'Schema Registry versions producer/consumer JSON (and Avro/Protobuf) contracts; the catalog holds tables; Glue loads Serverless. Workgroups isolate queries, they do not version device payloads.',
  },
  {
    id: 'dea-ing-181',
    domain: 'ingestion',
    task: '1.1',
    tags: ['dea-c01', 'dms', 'sct', 'aurora'],
    question:
      'On-premises MySQL must move to Aurora PostgreSQL with the source staying live. Accurate pair:',
    options: [
      'DMS full load plus ongoing CDC so MySQL keeps serving traffic; SCT (not DMS) converts the schema to PostgreSQL',
      'DMS full load only, which requires taking MySQL down for the whole copy',
      'DMS as a schema converter that emits PostgreSQL DDL with no SCT and no review',
      'Lock the Aurora target against all queries until DMS reports 100% complete (the target is usable during CDC)',
    ],
    correctAnswers: [0],
    explanation:
      'DMS can full-load and then CDC while the source stays up. Heterogeneous engines need SCT (and usually some manual DDL cleanup). DMS does not silently rewrite MySQL into PostgreSQL.',
  },
  {
    id: 'dea-ing-scr-001',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'redshift', 'kinesis', 'streaming-ingestion', 'screenshots'],
    question:
      'A team needs near-real-time analytics in Amazon Redshift from Amazon Kinesis Data Streams with the least operational overhead. Which approach fits best?',
    options: [
      'Create an external schema in Redshift for the Kinesis stream, create a materialized view over the stream, and enable auto refresh',
      'Stage stream data to S3 first, then run frequent COPY commands into Redshift',
      'Use Firehose to stage to S3 and manage COPY jobs on a tight schedule',
      'Query Kinesis directly with standard SQL and manually refresh views from the stream',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift streaming ingestion can consume Kinesis Data Streams through an external schema and materialized views, reducing operational overhead versus S3 staging and recurring COPY orchestration.',
  },
  {
    id: 'dea-ing-scr-002',
    domain: 'ingestion',
    task: '1.2',
    tags: ['dea-c01', 'glue-crawler', 'catalog', 's3-prefix', 'screenshots'],
    question:
      'An AWS Glue crawler over S3 objects is creating multiple tables, but the team expects only one table. Which two actions most directly improve one-table grouping? (Select TWO.)',
    options: [
      'Keep object format, compression type, and schema consistent across objects intended for one table',
      'Keep S3 prefix/path structure consistent for the objects that should group together',
      'Use object names that look similar while allowing different formats and compression',
      'Keep only schema consistent and ignore format/compression consistency',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Glue crawler grouping uses data compatibility and path structure. Consistent format/compression/schema plus consistent prefix layout helps compatible files group into one table.',
  },
]
