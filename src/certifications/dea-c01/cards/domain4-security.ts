import type { Card } from '../../../core/types'

export const securityCards: Card[] = [
  {
    id: 'dea-sec-001',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'iam-roles'],
    question: 'Glue job accesses S3 and catalog using credentials from:',
    options: [
      'IAM role attached to Glue job (least privilege)',
      'Hard-coded access keys in script',
      'Public bucket policy for *',
      'Root account keys',
    ],
    correctAnswers: [0],
    explanation: 'Glue jobs assume IAM roles; avoid long-lived embedded credentials.',
  },
  {
    id: 'dea-sec-002',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'secrets'],
    question: 'Rotate RDS password used by Lambda ETL automatically with:',
    options: [
      'AWS Secrets Manager rotation',
      'Plaintext in environment variable forever',
      'Commit password to Git',
      'Email password weekly',
    ],
    correctAnswers: [0],
    explanation: 'Secrets Manager automates credential rotation and secure retrieval.',
  },
  {
    id: 'dea-sec-003',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'vpc-sg'],
    question: 'Restrict Glue connection to RDS by updating:',
    options: [
      'VPC security groups allowing only Glue security group on DB port',
      '0.0.0.0/0 on database port',
      'Disable all encryption',
      'Public RDS without auth',
    ],
    correctAnswers: [0],
    explanation: 'Security groups enforce network-level least privilege between pipeline and database.',
  },
  {
    id: 'dea-sec-004',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'privatelink'],
    question: 'On-premises app accesses AWS data services without public internet using:',
    options: [
      'AWS PrivateLink or VPN/Direct Connect',
      'Public S3 ACL for world',
      'HTTP without TLS',
      'Shared root password',
    ],
    correctAnswers: [0],
    explanation: 'Private connectivity keeps traffic off the public internet for hybrid access.',
  },
  {
    id: 'dea-sec-005',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'unified-studio'],
    question: 'SageMaker Unified Studio organizes work using domains, domain units, and projects for:',
    options: [
      'Collaborative governed data and ML development (v1.1)',
      'DNS hosting',
      'Certificate renewal only',
      'Game streaming',
    ],
    correctAnswers: [0],
    explanation: 'Unified Studio domains/projects structure team access and resources in governed environments.',
  },
  {
    id: 'dea-sec-006',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lake-formation'],
    question: 'Fine-grained table and column permissions on S3 lake data managed by:',
    options: [
      'AWS Lake Formation',
      'Public bucket ACL',
      'Ignore authorization',
      'Single shared DB password',
    ],
    correctAnswers: [0],
    explanation: 'Lake Formation centralizes grants for databases, tables, and columns in the lake.',
  },
  {
    id: 'dea-sec-007',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'custom-policy'],
    question: 'Managed IAM policy too permissive for Glue job needing one bucket. Create:',
    options: [
      'Custom IAM policy with least privilege for specific bucket prefix',
      'AdministratorAccess',
      'Allow * on all resources',
      'Disable IAM',
    ],
    correctAnswers: [0],
    explanation: 'Custom policies scope permissions tighter than broad managed policies when needed.',
  },
  {
    id: 'dea-sec-008',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'redshift-grants'],
    question: 'Analyst role should SELECT specific schema only in Redshift. Configure:',
    options: [
      'Database GRANT to role/group for schema/table access',
      'Superuser for all analysts',
      'Public access without password',
      'Disable audit logging',
    ],
    correctAnswers: [0],
    explanation: 'Redshift internal permissions complement IAM for warehouse object access.',
  },
  {
    id: 'dea-sec-009',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'tag-based'],
    question: 'S3 objects tagged Confidential deny access unless principal has matching tag. This is:',
    options: [
      'Tag-based access control (ABAC) with IAM',
      'No authorization model',
      'Public read always',
      'Random blocking',
    ],
    correctAnswers: [0],
    explanation: 'Tag-based and attribute-based policies enforce access from resource or principal tags.',
  },
  {
    id: 'dea-sec-010',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'parameter-store'],
    question: 'Store non-rotating database connection string securely in:',
    options: [
      'Systems Manager Parameter Store SecureString or Secrets Manager',
      'Plaintext Lambda env visible in console to all',
      'GitHub public repo',
      'CloudWatch log message',
    ],
    correctAnswers: [0],
    explanation: 'SecureString parameters and Secrets Manager protect credentials at rest.',
  },
  {
    id: 'dea-sec-011',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'kms'],
    question: 'Encrypt S3 objects and Redshift clusters using keys managed in:',
    options: [
      'AWS KMS',
      'Custom XOR in application only',
      'No encryption',
      'Password in filename',
    ],
    correctAnswers: [0],
    explanation: 'KMS provides centralized key management for encryption at rest across AWS services.',
  },
  {
    id: 'dea-sec-012',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'masking'],
    question: 'Display analytics dataset with masked credit card numbers complies with:',
    options: [
      'Data masking/anonymization policies',
      'Publishing full PAN',
      'Removing all encryption',
      'Public dataset dump',
    ],
    correctAnswers: [0],
    explanation: 'Masking protects sensitive fields while preserving analytical utility where allowed.',
  },
  {
    id: 'dea-sec-013',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'cross-account'],
    question: 'Share encrypted S3 data with partner AWS account using:',
    options: [
      'KMS cross-account key policy and bucket policy',
      'Make bucket public',
      'Email raw files unencrypted',
      'Share root credentials',
    ],
    correctAnswers: [0],
    explanation: 'Cross-account KMS and resource policies enable secure encrypted data sharing.',
  },
  {
    id: 'dea-sec-014',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'transit'],
    question: 'Glue JDBC connection to RDS must encrypt data in transit with:',
    options: [
      'TLS/SSL enabled on connection',
      'Plaintext JDBC always',
      'FTP',
      'Telnet',
    ],
    correctAnswers: [0],
    explanation: 'Encryption in transit protects data between pipeline services and databases.',
  },
  {
    id: 'dea-sec-015',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'cloudtrail-lake'],
    question: 'Centralized SQL-like queries across organization CloudTrail events use:',
    options: [
      'AWS CloudTrail Lake',
      'Manual grep on one laptop',
      'Delete all trails',
      'Unlogged APIs',
    ],
    correctAnswers: [0],
    explanation: 'CloudTrail Lake aggregates and queries management events for audit analytics.',
  },
  {
    id: 'dea-sec-016',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'log-storage'],
    question: 'Application pipeline logs retained 7 years for compliance stored in:',
    options: [
      'CloudWatch Logs with retention + S3 export if needed',
      'Ephemeral Lambda disk only',
      'Developer laptop',
      'Public wiki',
    ],
    correctAnswers: [0],
    explanation: 'Long-term retention may combine CloudWatch retention policies and S3 archival.',
  },
  {
    id: 'dea-sec-017',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'athena-audit'],
    question: 'Analyze CloudTrail logs in S3 with SQL via:',
    options: [
      'Amazon Athena',
      'Amazon Polly',
      'Route 53',
      'Snowmobile',
    ],
    correctAnswers: [0],
    explanation: 'Athena queries CloudTrail log files for security and compliance investigations.',
  },
  {
    id: 'dea-sec-018',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'emr-logs'],
    question: 'Massive EMR step logs centralized for search using:',
    options: [
      'S3 log storage + OpenSearch or Athena analysis',
      'Delete logs after each job always',
      'Print to stdout only',
      'No aggregation',
    ],
    correctAnswers: [0],
    explanation: 'Large log volumes from EMR often land in S3 and feed search/analytics tools.',
  },
  {
    id: 'dea-sec-019',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'macie'],
    question: 'Discover S3 buckets containing credit card numbers automatically with:',
    options: [
      'Amazon Macie',
      'Manual spot checks only',
      'Disable scanning',
      'Public access',
    ],
    correctAnswers: [0],
    explanation: 'Macie uses ML to detect sensitive data like PII in S3.',
  },
  {
    id: 'dea-sec-020',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'config'],
    question: 'Track whether S3 bucket encryption setting changed over time using:',
    options: [
      'AWS Config',
      'Developer memory',
      'Unlogged changes',
      'Random audits yearly only',
    ],
    correctAnswers: [0],
    explanation: 'Config records configuration history and evaluates compliance rules.',
  },
  {
    id: 'dea-sec-021',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'sovereignty'],
    question: 'EU customer data must remain in eu-west-1 and not replicate to us-east-1. This is:',
    options: [
      'Data sovereignty/residency requirement',
      'Optional cosmetic preference only',
      'Impossible on AWS',
      'Ignore region constraints',
    ],
    correctAnswers: [0],
    explanation: 'Sovereignty controls restrict storage and processing to approved regions.',
  },
  {
    id: 'dea-sec-022',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'redshift-share'],
    question: 'Share live Redshift data to another cluster without copying uses:',
    options: [
      'Amazon Redshift data sharing',
      'Email CSV exports only',
      'Public JDBC without auth',
      'Post credentials on internet',
    ],
    correctAnswers: [0],
    explanation: 'Redshift data sharing provides governed cross-cluster access to datasets.',
  },
  {
    id: 'dea-sec-023',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'sagemaker-catalog-access'],
    question: 'Project-based access to governed datasets in SageMaker Catalog managed through:',
    options: [
      'SageMaker Catalog projects and permissions (v1.1)',
      'Public S3 listing',
      'Root account for all users',
      'No access control',
    ],
    correctAnswers: [0],
    explanation: 'Catalog projects enforce who can discover and consume governed data products.',
  },
  {
    id: 'dea-sec-024',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'least-privilege'],
    question: 'IAM policy grants s3:GetObject only on arn:aws:s3:::curated-bucket/analytics/*. This follows:',
    options: [
      'Principle of least privilege',
      'AdministratorAccess',
      'Allow * on *',
      'No resource constraints',
    ],
    correctAnswers: [0],
    explanation: 'Least privilege limits actions and resources to minimum required for the task.',
  },
  {
    id: 'dea-sec-025',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'managed-vs-unmanaged'],
    question: 'Redshift is AWS-managed; self-installed PostgreSQL on EC2 is:',
    options: [
      'Managed vs unmanaged service distinction affecting ops burden',
      'Identical responsibility model',
      'Always unmanaged by customer',
      'Not relevant to data engineers',
    ],
    correctAnswers: [0],
    explanation: 'Managed services reduce infrastructure patching; unmanaged EC2 databases require more customer ops.',
  },
  {
    id: 'dea-sec-026',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'encryption-default'],
    question: 'S3 bucket policy denies uploads without SSE-KMS header. Ensures:',
    options: [
      'Encryption in transit/at rest policy enforcement before storage',
      'Public objects always',
      'No keys needed',
      'Disable TLS',
    ],
    correctAnswers: [0],
    explanation: 'Bucket policies can require encryption headers so unencrypted objects are rejected.',
  },
  {
    id: 'dea-sec-027',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'governance-framework'],
    question: 'Describe data mesh sharing patterns and governance framework aligns with:',
    options: [
      'Organizational data governance and sharing patterns (v1.1 skill)',
      'No governance ever',
      'Single silo without catalog',
      'Delete all metadata',
    ],
    correctAnswers: [0],
    explanation: 'Governance frameworks define how domains share data products responsibly across the organization.',
  },
  {
    id: 'dea-sec-028',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lf-tag'],
    question: 'Lake Formation tag-based permissions restrict columns by classification tags. Combines:',
    options: [
      'Lake Formation LF-Tags with IAM/LF policies',
      'Public lake access',
      'Ignore tags',
      'Single password for lake',
    ],
    correctAnswers: [0],
    explanation: 'LF-Tags classify data; policies grant access based on tag matches.',
  },
  {
    id: 'dea-sec-029',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'integrate-logging'],
    question: 'Pipeline sends CloudWatch Logs to OpenSearch for SIEM-style analysis. This integrates:',
    options: [
      'Multiple AWS logging services for centralized analysis',
      'Logs only on laptop',
      'No correlation possible',
      'Delete after 1 hour always',
    ],
    correctAnswers: [0],
    explanation: 'Integrated logging pipelines support security monitoring and audit investigations.',
  },
  {
    id: 'dea-sec-030',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'api-gateway-auth'],
    question: 'Data API authenticated via IAM or Cognito before Lambda queries Athena. Implements:',
    options: [
      'Authentication mechanism for data consumption APIs',
      'Anonymous open API',
      'Shared password in URL',
      'Disable auth for speed',
    ],
    correctAnswers: [0],
    explanation: 'API authentication verifies caller identity before serving sensitive datasets.',
  },
  {
    id: 'dea-sec-031',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'pii'],
    question: 'Pipeline must identify PII in S3 before sharing dataset externally. Use Macie with:',
    options: [
      'Lake Formation for access control after classification',
      'Ignore PII',
      'Publish raw PII publicly',
      'Disable encryption',
    ],
    correctAnswers: [0],
    explanation: 'Macie finds sensitive data; Lake Formation restricts access based on classification outcomes.',
  },
  {
    id: 'dea-sec-032',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'replication-block'],
    question: 'Prevent S3 cross-Region replication to non-approved regions using:',
    options: [
      'Bucket policies, Organization SCPs, and replication rules aligned to residency',
      'Enable replication everywhere',
      'No controls',
      'Public buckets',
    ],
    correctAnswers: [0],
    explanation: 'Governance combines technical controls to enforce approved replication and residency boundaries.',
  },
  {
    id: 'dea-sec-033',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'role-assumption'],
    question: 'Lambda in Account A assumes cross-account role in Account B to read shared bucket. Uses:',
    options: [
      'STS AssumeRole with trust policy and scoped permissions',
      'Embed Account B root keys in Lambda',
      'Public bucket',
      'Disable CloudTrail',
    ],
    correctAnswers: [0],
    explanation: 'Cross-account roles provide temporary credentials for authorized cross-account data access.',
  },
  {
    id: 'dea-sec-034',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'audit-prep'],
    question: 'Prepare audit evidence of who accessed curated table in Athena. Collect:',
    options: [
      'CloudTrail (Athena API), Lake Formation grant history, and query logs',
      'Verbal assurance only',
      'Delete all logs before audit',
      'Anonymous queries only',
    ],
    correctAnswers: [0],
    explanation: 'Audit readiness combines API trails, governance logs, and optional workgroup query logging.',
  },
  {
    id: 'dea-sec-035',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'redshift', 'column-level'],
    question:
      'Only some database roles may read columns with PII in Amazon Redshift while others query the same table. Approach:',
    options: [
      'Grant column-level privileges aligned to roles',
      'Grant SELECT on the whole table to all analysts',
      'Rely on KMS encryption so unauthorized users see ciphertext in SQL results',
      'Use CloudTrail alone to hide columns at query time',
    ],
    correctAnswers: [0],
    explanation:
      'Column-level grants restrict which attributes each DB user sees. Table-level access exposes all columns; KMS protects at rest/in transit but authorized sessions still decrypt; CloudTrail audits API calls—it does not filter query results.',
  },
  {
    id: 'dea-sec-036',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'redshift', 'audit'],
    question:
      'Security team needs comprehensive audit of Amazon Redshift cluster activity and management changes. Select TWO practices.',
    options: [
      'Enable Amazon Redshift database audit logging',
      'Configure AWS CloudTrail for Redshift control-plane API activity with durable log storage',
      'Use federated queries as the primary audit mechanism',
      'Implement dynamic data masking instead of any logging',
      'Disable logs to reduce storage cost',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Database audit logs capture SQL/user activity inside the cluster; CloudTrail records management API events. Federated queries and DDM address access patterns, not centralized audit evidence; turning off logs removes visibility.',
  },
  {
    id: 'dea-sec-037',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'redshift', 'ddm'],
    question:
      'Analysts may query customer tables but must see masked credit card values based on role. Amazon Redshift feature:',
    options: [
      'Dynamic data masking policies on sensitive columns',
      'Row-level security without any column transformation',
      'Column-level GRANT that fully blocks the column for all users',
      'Customer-managed KMS key only',
    ],
    correctAnswers: [0],
    explanation:
      'DDM obfuscates values at query time per policy. RLS filters rows; column deny hides data entirely rather than showing masked values; KMS does not mask plaintext for authorized queries.',
  },
  {
    id: 'dea-sec-038',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lake-formation'],
    question:
      'Lake Formation fine-grained permissions on a Glue table complement—but do not replace—which AWS identity layer?',
    options: [
      'IAM identities and policies for AWS principals accessing Lake Formation APIs',
      'Amazon Rekognition collections',
      'Amazon CloudFront signed URLs for all table rows',
      'AWS Snowball Edge compute',
    ],
    correctAnswers: [0],
    explanation:
      'Lake Formation governs data lake access on top of IAM-authenticated principals. Rekognition, CloudFront, and Snowball are unrelated to LF permission grants.',
  },
  {
    id: 'dea-sec-039',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'redshift'],
    question:
      'Dynamic data masking differs from column-level REVOKE because DDM:',
    options: [
      'Returns transformed values at query time for allowed access',
      'Prevents all connection to the cluster',
      'Encrypts S3 buckets automatically',
      'Replaces the need for database users',
    ],
    correctAnswers: [0],
    explanation:
      'DDM lets authorized users query with masked output. Revoke blocks the column entirely. Cluster connectivity, S3 encryption, and IAM/database users remain separate concerns.',
  },
  {
    id: 'dea-sec-040',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'compliance'],
    question:
      'Course modules on compliance and cost optimization for data platforms emphasize:',
    options: [
      'Governance controls alongside monitoring usage and right-sizing spend',
      'Removing encryption to lower CPU',
      'Disabling all catalog metadata to save pennies',
      'Sharing root account keys for simpler audits',
    ],
    correctAnswers: [0],
    explanation:
      'DEA operations include compliant architectures and cost-aware design (storage tiers, serverless vs always-on, monitoring). Weakening security or sharing root keys violates governance goals.',
  },
  {
    id: 'dea-sec-041',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'redshift', 'kms'],
    question:
      'Redshift encryption at rest with maximum control over the root KMS key (create, rotate, disable, audit) uses:',
    options: [
      'AWS KMS customer managed keys (CMKs)',
      'AWS managed KMS keys only with no customer policy control',
      'S3 server-side encryption keys for Redshift clusters',
      'Amazon EBS encryption settings on Redshift nodes',
    ],
    correctAnswers: [0],
    explanation:
      'CMKs give customer control over key lifecycle and access policies. AWS managed keys offer less control; Redshift does not use S3 or EBS encryption models for cluster at-rest encryption.',
  },
  {
    id: 'dea-sec-042',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'redshift', 'rls'],
    question:
      'Sales reps should query a shared fact table but see only rows for their territory. Implement:',
    options: [
      'Row-level security policies in Amazon Redshift',
      'Dynamic data masking on numeric measures only',
      'Public SELECT grants on the table',
      'Disable authentication for faster queries',
    ],
    correctAnswers: [0],
    explanation:
      'RLS filters which rows each session returns. DDM transforms column values at query time; it does not replace row filters. Open access and no auth violate least privilege.',
  },
  {
    id: 'dea-sec-043',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'glue', 'iam'],
    question:
      'Only approved engineers and applications may start Glue crawlers and ETL jobs. Control mechanism:',
    options: [
      'IAM policies and roles granting least-privilege Glue actions',
      'Encrypting the Glue Data Catalog metadata only',
      'Amazon S3 default encryption without IAM changes',
      'AWS KMS keys without identity policies',
    ],
    correctAnswers: [0],
    explanation:
      'IAM decides which principals can invoke Glue APIs and resources. Catalog encryption and S3 SSE protect data at rest; KMS manages keys—it does not replace identity-based authorization for who may run jobs.',
  },
  {
    id: 'dea-sec-044',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'glue'],
    question:
      'Hardening AWS Glue includes storing JDBC connection passwords securely and restricting cross-account access to specific catalog databases. Select TWO.',
    options: [
      'AWS Secrets Manager (or connection secrets) for JDBC credentials',
      'Glue resource policies on Data Catalog resources with conditional principals',
      'Disabling IAM in favor of public Glue endpoints',
      'Using CloudFront to encrypt Glue job shuffle data',
      'Publishing connection strings in a public S3 README',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Secrets Manager keeps rotating credentials out of job scripts; resource policies complement IAM for fine-grained catalog sharing. IAM remains required; CloudFront is unrelated to Glue compute; public credential storage violates least privilege.',
  },
  {
    id: 'dea-sec-045',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'gdpr', 'privacy'],
    question:
      'Customer personal data on AWS must support GDPR-style control. Capabilities customers typically use: (Select THREE.)',
    options: [
      'Choose AWS Regions where data is stored and processed',
      'Manage KMS keys to encrypt data at rest and in transit',
      'Use IAM to control who accesses data and AWS APIs',
      'Rely on AWS Budgets as the primary privacy control',
      'Move all processing back on-premises as an AWS feature',
      'Deploy serverless pipelines as a substitute for access control',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Region choice, encryption key governance, and IAM access policies address residency, confidentiality, and authorization. Budgets manage cost; on-premises is outside AWS; pipelines do not replace identity and encryption controls.',
  },
  {
    id: 'dea-sec-046',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'hipaa', 'config'],
    question:
      'Patient telemetry pipelines must stay HIPAA-aligned on deployed AWS resources and auto-remediate drift. Best approach:',
    options: [
      'Enable AWS Config recording and deploy a HIPAA conformance pack with remediation',
      'Download AWS Artifact reports only and never evaluate live resources',
      'Apply least-privilege IAM once with no ongoing configuration checks',
      'Use Lake Formation column grants as the sole HIPAA control',
    ],
    correctAnswers: [0],
    explanation:
      'Config conformance packs bundle rules and optional remediation for frameworks like HIPAA. Artifact documents AWS compliance posture—it does not monitor your buckets and databases. IAM and Lake Formation help but do not continuously enforce full resource configuration.',
  },
  {
    id: 'dea-sec-047',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'vpc-endpoint'],
    question:
      'Private subnet Glue jobs must reach S3 and DynamoDB without NAT or the public internet, and also reach Glue and CloudWatch APIs privately. Endpoint types:',
    options: [
      'Gateway endpoints for S3 and DynamoDB; interface endpoints (PrivateLink) for Glue, CloudWatch, and most other APIs',
      'Gateway endpoints for Glue and CloudWatch only',
      'Interface endpoints as the only way to reach S3',
      'Internet gateways required for all AWS APIs from private subnets',
    ],
    correctAnswers: [0],
    explanation:
      'Gateway endpoints add prefix-list routes for S3 and DynamoDB over the AWS private network and do not use PrivateLink. Interface endpoints are ENIs with private IPs for a wide range of services including Glue and CloudWatch.',
  },
  {
    id: 'dea-sec-048',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'shared-responsibility'],
    question:
      'Under the AWS shared responsibility model, which items remain the customer\'s job for a data platform?',
    options: [
      'Guest OS and application patching on unmanaged compute, security groups, data classification, encryption choices, and IAM permissions',
      'Physical data center hardware and global infrastructure only',
      'AWS-operated hypervisor and Regions exclusively',
      'Nothing; AWS encrypts and classifies all customer data automatically without configuration',
    ],
    correctAnswers: [0],
    explanation:
      'AWS secures the cloud (hardware, software, networking, facilities). Customers secure data in the cloud: OS/app config on IaaS, firewall/security groups, classifying data, encryption, and IAM. Managed services shift more OS work to AWS but not data classification or access policy.',
  },
  {
    id: 'dea-sec-049',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lake-formation', 'named-resource'],
    question:
      'Lake Formation grants can target a specific database/table/view and include or exclude columns, or match LF-Tags instead. These two models are:',
    options: [
      'Named resource method versus tag-based access control',
      'Gateway endpoints versus interface endpoints',
      'DISTSTYLE KEY versus ALL',
      'Firehose buffering versus KPL aggregation',
    ],
    correctAnswers: [0],
    explanation:
      'Named-resource grants apply to listed Data Catalog objects (with optional column include/exclude and data filters). Tag-based access uses LF-Tags on tables or columns. The other pairs are networking, warehouse, or streaming concepts.',
  },
  {
    id: 'dea-sec-050',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lake-formation', 'data-filter'],
    question:
      'Analysts may query a Glue table but must see only rows where country = \'Italy\' and must not see the address column. Lake Formation controls: (Select TWO.)',
    options: [
      'Data filters with a row expression such as country=\'Italy\'',
      'Column include/exclude or column tags on address',
      'Redshift VACUUM as the lake row filter',
      'CloudFront signed URLs for each Parquet row',
      'Disabling the Glue catalog',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Lake Formation data filters implement row- and cell-level access; named-resource grants or LF-Tags control columns. VACUUM, CloudFront, and deleting the catalog are not LF row/column enforcement.',
  },
  {
    id: 'dea-sec-051',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lake-formation', 'hybrid-access'],
    question:
      'Some IAM principals should start using Lake Formation permissions on a registered S3 location while existing Glue/S3 IAM users keep working unchanged. Registration mode:',
    options: [
      'Hybrid access mode (opt-in principals use Lake Formation; others keep IAM on S3 and Glue)',
      'Lake Formation only, which immediately breaks all IAM-based lake access',
      'Public ACLs on the bucket',
      'Replacing IAM with database passwords for S3',
    ],
    correctAnswers: [0],
    explanation:
      'Hybrid access mode supports two pathways: selected principals opted into Lake Formation grants, and everyone else still authorized by IAM on S3 and Glue. Lake Formation-only mode enforces LF for that location more strictly.',
  },
  {
    id: 'dea-sec-052',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lake-formation', 'credential-vending'],
    question:
      'Athena queries a Lake Formation table but the analyst has no direct s3:GetObject on the bucket. How does access work?',
    options: [
      'Trusted engine checks Lake Formation, receives temporary S3 credentials, reads objects, then applies column/row/cell filters before returning results',
      'The user must attach AdministratorAccess to query any lake table',
      'Athena downloads the entire bucket via a public ACL',
      'Glue crawlers vend long-lived access keys into the query',
    ],
    correctAnswers: [0],
    explanation:
      'Credential vending: the integrated service (Athena, EMR, Spectrum, Glue) authorizes with Lake Formation, gets temporary credentials, reads S3, and enforces LF policies on the result. Direct S3 IAM on the data location is not required for that principal.',
  },
  {
    id: 'dea-sec-053',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'redshift', 'iam-auth'],
    question:
      'Redshift users should log in with temporary database credentials from IAM users, roles, or a corporate IdP instead of stored cluster passwords. Pattern:',
    options: [
      'IAM authentication (and federation) for database logins',
      'A shared superuser password in Secrets Manager used by every analyst',
      'Disabling SSL so passwords are optional',
      'Publicly accessible clusters without identity',
    ],
    correctAnswers: [0],
    explanation:
      'IAM authentication issues temporary database credentials so you need not store static Redshift passwords. Federation maps corporate IdP users. Shared superuser passwords and open clusters violate least privilege.',
  },
  {
    id: 'dea-sec-054',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'redshift', 'audit'],
    question:
      'Redshift Serverless audit logs (connections, users, queries) can be delivered where, unlike provisioned clusters?',
    options: [
      'Amazon CloudWatch Logs only (not as S3 log files)',
      'Only local disk on a leader node you SSH into',
      'AWS Artifact as query logs',
      'Route 53 resolver query logs',
    ],
    correctAnswers: [0],
    explanation:
      'When you collect audit logging for Redshift Serverless, it cannot be sent to S3 log files—only to CloudWatch. Provisioned clusters can export audit logs to CloudWatch or S3. System table logging still happens automatically.',
  },
  {
    id: 'dea-sec-055',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'guardduty'],
    question:
      'The security team wants ML-based threat detection on AWS account activity, networks, and data-related resources—not just PII classification in S3. Service:',
    options: [
      'Amazon GuardDuty',
      'Amazon Macie only',
      'Amazon QuickSight SPICE',
      'AWS Glue DataBrew',
    ],
    correctAnswers: [0],
    explanation:
      'GuardDuty is the threat detection service for suspicious use of AWS resources. Macie classifies sensitive data in S3; QuickSight visualizes BI; DataBrew prepares datasets.',
  },
  {
    id: 'dea-sec-056',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'audit-manager', 'artifact'],
    question:
      'How do AWS Artifact and AWS Audit Manager differ for compliance evidence?',
    options: [
      'Artifact provides AWS (and ISV) compliance reports and agreements; Audit Manager continuously audits your AWS usage against frameworks',
      'Artifact scans live S3 objects for PII; Audit Manager is only a PDF store',
      'Both replace IAM authentication',
      'Audit Manager issues KMS keys; Artifact runs Glue jobs',
    ],
    correctAnswers: [0],
    explanation:
      'Artifact is on-demand access to AWS security/compliance reports and agreements. Audit Manager automates evidence collection from your account usage. Neither replaces IAM, KMS, or Glue.',
  },
  {
    id: 'dea-sec-057',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'pci', 'fedramp'],
    question:
      'A Redshift workload handling cardholder data for a US federal agency may need which additional frameworks beyond HIPAA and GDPR? (Select TWO.)',
    options: [
      'PCI DSS',
      'FedRAMP',
      'Amazon Polly SSML',
      'S3 Transfer Acceleration as a compliance standard',
      'Kinesis enhanced fan-out as an audit framework',
    ],
    correctAnswers: [0, 1],
    explanation:
      'The course lists HIPAA, PCI, and FedRAMP among standards that drive architectural and evidence requirements, with Artifact, Audit Manager, Config, and Security Hub as supporting services. Polly, Transfer Acceleration, and enhanced fan-out are not compliance frameworks.',
  },
  {
    id: 'dea-sec-058',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'msk', 'iam'],
    question:
      'An MSK cluster should authenticate and authorize clients with a single AWS-native mechanism instead of mixing TLS identity with separate Kafka ACLs. Method used in the streaming lab:',
    options: [
      'Amazon MSK IAM access control',
      'Anonymous PLAINTEXT listeners',
      'Hard-coded ZooKeeper digest ACLs only',
      'Public 0.0.0.0/0 on broker ports without auth',
    ],
    correctAnswers: [0],
    explanation:
      'MSK IAM access control handles both authentication and authorization so you do not need one mechanism for identity and another for Kafka ACLs. Open listeners and public brokers are insecure.',
  },
  {
    id: 'dea-sec-059',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'glue-catalog', 'kms'],
    question:
      'Glue Data Catalog metadata (not just S3 objects) must be encrypted with a customer-managed key. Integration:',
    options: [
      'Enable Data Catalog encryption with AWS KMS (customer managed or AWS managed key)',
      'S3 SSE-S3 automatically encrypts Glue table metadata',
      'Redshift ENCODE AUTO encrypts the catalog',
      'CloudFront signed URLs encrypt catalog JSON',
    ],
    correctAnswers: [0],
    explanation:
      'Glue can encrypt catalog metadata with KMS. S3 encryption protects objects in buckets, not the catalog store. Column encoding and CloudFront are unrelated to catalog encryption.',
  },
  {
    id: 'dea-sec-060',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'redshift', 'datashare', 'lake-formation'],
    question:
      'A Redshift datashare includes an employee table; HR may see SSN columns but other consumers must not. Central control plane:',
    options: [
      'Lake Formation managed datashares with column- and row-level permissions on share objects',
      'Making the datashare publicly readable',
      'UNLOAD of the full table to a public bucket',
      'Disabling IAM on the consumer cluster',
    ],
    correctAnswers: [0],
    explanation:
      'Lake Formation can enforce database, table, column, and row permissions on Redshift datashare objects so PII columns stay hidden from non-HR roles. Public shares and UNLOAD dump data without that governance.',
  },
  {
    id: 'dea-sec-061',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'iam', 'policy-simulator'],
    question:
      'A new IAM policy for a Glue job role must be proven to allow only the intended S3 actions on specific prefixes before it is attached in production. Safest first test:',
    options: [
      'IAM Policy Simulator against the draft policy, actions, and resource ARNs',
      'Attach the policy in production and read CloudTrail data events afterward',
      'SSH to a test EC2 instance with the policy and guess from CLI errors',
      'Skip simulation and grant s3:* on * so the job cannot fail',
    ],
    correctAnswers: [0],
    explanation:
      'Policy Simulator evaluates Allow/Deny for chosen actions and resources without changing production access. CloudTrail after a prod attach is too late; EC2 bash tests are clumsy and still need a principal; wildcard admin is not least privilege.',
  },
  {
    id: 'dea-sec-062',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'cloudtrail-lake'],
    question: 'In AWS CloudTrail Lake, an event data store is primarily:',
    options: [
      'An immutable collection of management and optional data events that you query with SQL',
      'A writable relational table with full CRUD for editing past API calls',
      'A Kinesis delivery stream that forwards every event in real time',
      'A short-lived S3 staging prefix that expires before you can query it',
    ],
    correctAnswers: [0],
    explanation:
      'Event data stores retain CloudTrail events immutably for SQL analysis in CloudTrail Lake. They are not OLTP CRUD tables, not a Kinesis pipeline, and not a disposable staging bucket.',
  },
  {
    id: 'dea-sec-063',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'tokenization', 'pii'],
    question:
      'PII in a Glue-to-Redshift pipeline must mask to the same token on every run (so joins still work) but must stay irreversible if any lookup table is deleted. Technique:',
    options: [
      'Deterministic tokenization with a one-way hash (or HMAC) so the same input always yields the same irreversible token',
      'Format-preserving encryption with a stored key so analysts can decrypt when needed',
      'Random tokens regenerated every job, even if that breaks referential integrity',
      'k-anonymity generalization that collapses many people into one bucket and cannot join on a stable id',
    ],
    correctAnswers: [0],
    explanation:
      'A keyed hash or HMAC is consistent across runs and not reversible from the token alone. FPE is reversible with the key. Regenerated random maps break joins. k-anonymity hides individuals in groups; it does not produce a stable unique token per original value.',
  },
  {
    id: 'dea-sec-064',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lake-formation', 'lf-tags'],
    question:
      'An LF-Tag grant requires department=engineering AND sensitivity=public. A new table is tagged department=engineering, sensitivity=confidential. Access for that principal:',
    options: [
      'Denied: every key in the grant must match (AND); confidential is not public',
      'Allowed: LF-Tags OR together, so matching department alone is enough',
      'Allowed as soon as an administrator refreshes a tag cache',
      'Allowed because any overlapping tag key grants the table',
    ],
    correctAnswers: [0],
    explanation:
      'Lake Formation LF-TBAC evaluates grant expressions conjunctively: all listed tag key/value pairs must match the resource. Engineering plus confidential fails a grant that also requires sensitivity=public. There is no "one key is enough" OR behavior for those expressions.',
  },
  {
    id: 'dea-sec-065',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 's3-access-points'],
    question:
      'One lake bucket is shared by ingest, analytics, and a partner. Each team needs its own hostname, IAM policy, and optional VPC-only restriction without rewriting the bucket policy for every app. Skill 4.1.5:',
    options: [
      'Amazon S3 Access Points: named endpoints attached to the bucket, each with its own policy (used together with the bucket policy)',
      'A unique CloudFront distribution as the only way to attach IAM to a prefix',
      'S3 Transfer Acceleration endpoints as authorization boundaries',
      'Amazon API Gateway as a required hop for every GetObject inside the account',
    ],
    correctAnswers: [0],
    explanation:
      'Access Points are the exam-guide example alongside PrivateLink: distinct network/IAM controls per consumer on a shared dataset. They work with, not instead of, the bucket policy for object APIs.',
  },
  {
    id: 'dea-sec-066',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 's3-access-points', 'vpc'],
    question:
      'Analytics jobs in a private VPC must read the lake with no path to the public internet, including S3 public endpoints. Access Point setting:',
    options: [
      'Create a VPC-restricted access point so only requests from that VPC are accepted',
      'Disable the bucket policy and rely on a public access point alias',
      'Use a website endpoint on the access point with Block Public Access off',
      'Attach the access point to Amazon CloudFront as a public origin with no VPC',
    ],
    correctAnswers: [0],
    explanation:
      'Each access point can require VPC origin, keeping object access on the private network (often with a gateway endpoint). Public website/CloudFront setups fight that requirement.',
  },
  {
    id: 'dea-sec-067',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 's3-access-points'],
    question:
      'An operator uses an S3 Access Point ARN to delete the underlying lake bucket and update its Replication configuration. Outcome:',
    options: [
      'Those bucket-level APIs are not available through access points; use the bucket directly (access points cover object APIs such as GetObject/PutObject)',
      'Access points fully replace the bucket for every S3 API including DeleteBucket',
      'Replication rules can only be created on access points, never on buckets',
      'DeleteBucket through an access point also deletes every access point in the Region',
    ],
    correctAnswers: [0],
    explanation:
      'Access points are for object operations. Bucket management (delete bucket, replication, some config) stays on the bucket resource.',
  },
  {
    id: 'dea-sec-068',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'unified-studio'],
    question:
      'A company implements SageMaker Unified Studio. Finance must own authorization for its AWS accounts; a fraud squad needs a collaboration space with shared tools and data. Hierarchy (skill 4.1.7):',
    options: [
      'Domain (org boundary) → domain unit (delegated business-unit auth, e.g. Finance) → project (permission/collaboration boundary for the fraud use case)',
      'Project at the top, then domain units, then a domain per user',
      'One IAM user equals one domain; domain units are optional DNS names',
      'Amazon Kendra indexes replace domains, domain units, and projects',
    ],
    correctAnswers: [0],
    explanation:
      'The domain is the top-level Unified Studio/DataZone-style boundary. Domain units delegate authorization (business units/account owners). Projects are the working permission and collaboration boundary.',
  },
  {
    id: 'dea-sec-069',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'sagemaker-catalog-access'],
    question:
      'A consumer project finds a published dataset in SageMaker Catalog. Members still cannot read the underlying S3/Glue data. Next governance step (skill 4.5.6):',
    options: [
      'Submit a subscription request; the producer (owner) project approves and grants the consumer project access',
      'Catalog discovery automatically copies the data into the consumer account with no approval',
      'Anyone in the domain can SELECT after search because publish implies anonymous read',
      'Disable Lake Formation because Catalog subscriptions replace all lake permissions',
    ],
    correctAnswers: [0],
    explanation:
      'Publish makes assets discoverable. Access is still request/approve: the owner project fulfills permissions to the subscriber project. Discovery is not the same as authorization.',
  },
  {
    id: 'dea-sec-070',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'kendra'],
    question:
      'Employees must search PDFs, wikis, and tickets with ACL-aware enterprise search (not warehouse SQL). In-scope ML service added in exam guide v1.1:',
    options: [
      'Amazon Kendra (managed enterprise search; often paired with a generator for RAG)',
      'Amazon Athena as a full-text document search engine over PDFs',
      'Amazon Redshift Spectrum as a wiki crawler',
      'AWS Glue crawlers as an employee search UI',
    ],
    correctAnswers: [0],
    explanation:
      'Kendra is on the v1.1 in-scope list for enterprise document search. Athena/Spectrum/Glue target tabular/lake analytics, not ACL-filtered document search UIs.',
  },
  {
    id: 'dea-sec-071',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'sovereignty', 'backup'],
    question:
      'A residency rule forbids copies of production lake data outside eu-central-1, including disaster-recovery replicas. Controls that match skill 4.5.3 / 4.5.5: (Select TWO.)',
    options: [
      'Do not enable S3 Cross-Region Replication or AWS Backup copy jobs to other Regions',
      'Use AWS Backup (and snapshots) only inside the approved Region, with IAM/SCP denying out-of-Region copies',
      'Turn on CRR to us-east-1 because AWS-managed replication is exempt from sovereignty law',
      'Store a second plaintext copy in a public bucket “for DR” in another Region',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Sovereignty means storage, backups, and replication stay in allowed Regions. CRR and cross-Region Backup copies are the usual accidental leaks. Public extra copies make it worse.',
  },
  {
    id: 'dea-sec-072',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'waf', 'api-gateway'],
    question:
      'A public data API on API Gateway + Lambda is being scraped and flooded. Edge controls on the in-scope list:',
    options: [
      'AWS WAF on the API (rate limits, IP/geo rules) and AWS Shield for DDoS; still authenticate with IAM/Cognito or a custom authorizer',
      'Amazon Macie as a DDoS mitigator in front of API Gateway',
      'Amazon Kendra as an API firewall',
      'S3 Object Lock as the Layer 7 WAF for HTTP APIs',
    ],
    correctAnswers: [0],
    explanation:
      'WAF and Shield are in-scope Security services for protecting internet-facing data APIs. Macie classifies S3 PII; Kendra searches documents; Object Lock is WORM storage, not an HTTP firewall.',
  },
  {
    id: 'dea-sec-073',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'governance', 'data-sharing'],
    question:
      'Skill 4.5.7 asks you to pick a data-sharing pattern. Live Redshift tables to another cluster, governed lake tables to another AWS account, and licensed third-party subscribers. Match:',
    options: [
      'Redshift datashares for live warehouse objects; Lake Formation (or S3 Access Points) for lake grants; AWS Data Exchange when you sell/license the dataset',
      'Public S3 ACLs for all three patterns because they are simplest',
      'Amazon Kendra subscriptions as the warehouse sharing protocol',
      'CloudFront signed cookies as Lake Formation table grants',
    ],
    correctAnswers: [0],
    explanation:
      'Those three are the common governed sharing patterns on this exam: datashares, LF/IAM lake permissions (Access Points for prefix/VPC isolation), and Data Exchange products for external licensed consumers.',
  },
  {
    id: 'dea-sec-074',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'iam', 's3', 'time'],
    question:
      'Glue jobs may read only selected S3 prefixes, and only 09:00–17:00. Custom IAM pieces that actually work:',
    options: [
      'Resource ARNs such as arn:aws:s3:::bucket/classified-prefix/* plus a Condition on aws:CurrentTime with DateGreaterThan and DateLessThan',
      'A $util.time variable with TimeGreaterThan—$util.time is not an IAM policy variable',
      's3:prefix as the only control for GetObject on those folders (s3:prefix is a list/request condition, not an object Resource ARN)',
      's3:ResourceAccount plus a Deny with no time operator as a business-hours lock',
    ],
    correctAnswers: [0],
    explanation:
      'Prefix isolation belongs in the Resource (object ARN with a trailing wildcard). Hours of day use aws:CurrentTime with DateGreaterThan/DateLessThan. $util.time is AppSync/VTL, not IAM. s3:prefix does not replace object ARNs for GetObject.',
  },
  {
    id: 'dea-sec-075',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'redshift', 'kms', 'snapshot'],
    question:
      'A KMS-encrypted Redshift cluster needs a cross-Region snapshot copy via CLI. Which two steps are required? (Select TWO.)',
    options: [
      'In the destination Region, create a KMS key and a snapshot copy grant for that key',
      'In the source Region, enable snapshot copying and pass the destination grant’s name',
      'Create the snapshot copy grant only in the source Region and omit a destination-Region key',
      'Convert the cluster to Multi-AZ; Multi-AZ is a substitute for cross-Region snapshot copy',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Cross-Region copies of encrypted snapshots need a KMS key and snapshot copy grant in the destination Region. You enable copying on the source cluster and name that destination grant. Multi-AZ is HA in one Region, not a DR copy.',
  },
  {
    id: 'dea-sec-076',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'macie'],
    question:
      'Before sharing an S3 dataset, detect PII with the least custom code. CloudTrail already logs PutObject. Still choose:',
    options: [
      'Amazon Macie automated sensitive-data discovery on the bucket (it inspects object content, not just API calls)',
      'Reading CloudTrail PutObject events, which include the object bytes and therefore PII',
      'A home-grown Lambda regex farm as the first choice when Macie is in scope',
      'Athena SQL over a Glue table as the only managed PII classifier',
    ],
    correctAnswers: [0],
    explanation:
      'Macie classifies object contents. CloudTrail records who called which S3 API; it does not scan file bytes for PII. Custom Lambda or Athena queries are more manual than Macie discovery.',
  },
  {
    id: 'dea-sec-077',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'cloudtrail', 'macie'],
    question:
      'Security asks whether CloudTrail can replace Macie for “does this object contain a PAN?” Answer:',
    options: [
      'No: CloudTrail is API activity; Macie (or a content-aware scanner) is what inspects object payloads',
      'Yes: every S3 data event includes the full object body',
      'Yes: LookupEvents searches object bytes for regexes',
      'No, because CloudTrail cannot log S3 at all',
    ],
    correctAnswers: [0],
    explanation:
      'S3 data events in CloudTrail capture request metadata, not file contents. Macie is the managed content classifier. CloudTrail can log S3 data events; it still is not a PII scanner.',
  },
  {
    id: 'dea-sec-078',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'redshift', 'ddm'],
    question:
      'One Redshift cluster holds customer PII. Marketing needs masked claims but full contact fields; claims needs full row data it processes; analytics needs only masked PII. Least admin overhead:',
    options: [
      'A database role per team with Redshift dynamic data masking policies attached to each role',
      'A separate cluster and copy of the dataset per team',
      'One view per team as the only control, with no masking policies, so every change needs a new view rewrite',
      'UNLOAD to S3 and rebuild Lake Formation grants, abandoning the warehouse',
    ],
    correctAnswers: [0],
    explanation:
      'DDM policies apply at query time per role (including conditional masking) on the same tables. Extra clusters, view sprawl, or a lake migration are heavier than role-scoped masking on one cluster.',
  },
  {
    id: 'dea-sec-079',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'quicksight', 'kms', 'cross-account'],
    question:
      'QuickSight in BI-Account reads a KMS-encrypted bucket in Hub-Account. The bucket policy already allows the QuickSight service role. Still required: (Select TWO.)',
    options: [
      'Register that Hub bucket as a resource the QuickSight service role may access (Manage QuickSight → Security & permissions)',
      'An IAM policy on the QuickSight role allowing kms:Decrypt (and DescribeKey) on the Hub CMK',
      'AWS RAM share of the S3 bucket as the documented QuickSight path',
      'Using the CMK only to “encrypt the QuickSight connection,” with no S3/KMS grants on the role',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Cross-account QuickSight-to-S3 needs the bucket listed for the QuickSight role and KMS decrypt on the object key. A bucket policy alone is not enough for SSE-KMS. RAM is not how QuickSight attaches S3. Connection encryption is TLS, not object KMS.',
  },
  {
    id: 'dea-sec-080',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'transfer-family', 'tls'],
    question:
      'AWS Transfer Family must allow only TLS 1.2+ for in-transit encryption from on-premises. Control that sets the protocol floor:',
    options: [
      'The Transfer Family server security policy (minimum TLS/cipher suite)',
      'Rotating SSH host keys while leaving the security policy on TLS 1.0',
      'Security-group rules that “allow only TLS 1.2” (security groups filter ports/IPs, not TLS versions)',
      'An ACM certificate on the server as a substitute for the security policy',
    ],
    correctAnswers: [0],
    explanation:
      'Transfer Family security policies define allowed TLS versions and ciphers. SSH keys, security groups, and certificates do not by themselves forbid TLS 1.0/1.1.',
  },
  {
    id: 'dea-sec-081',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'redshift', 'datashare', 'lake-formation'],
    question:
      'A data-mesh governance account uses Lake Formation. Redshift Serverless tables must be shared so marketing and compliance each see a different column subset. Combination: (Select TWO.)',
    options: [
      'Create a Redshift datashare that includes those tables',
      'Share and register the datashare with the Lake Formation catalog in the governance account, then grant each team its columns',
      'Share the datashare only to the marketing Serverless workgroup and skip Lake Formation',
      'A Redshift managed VPC endpoint plus views as the column-security plane',
    ],
    correctAnswers: [0, 1],
    explanation:
      'LF-managed Redshift datashares land in the central catalog so column (and row) grants can differ per consumer. Sharing only to one workgroup, or using VPC endpoints and views, does not give that central column ACL.',
  },
  {
    id: 'dea-sec-082',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'lambda', 'eventbridge'],
    question:
      'EventBridge cannot invoke a Lambda: AccessDeniedException. The function’s execution-role trust policy is not the missing piece. Fix both of:',
    options: [
      'The IAM role EventBridge uses (lambda:InvokeFunction, trust events.amazonaws.com) and a Lambda resource-based policy allowing that principal to invoke',
      'Only the Lambda execution role’s trust policy, which controls who can assume the role, not who can invoke the function',
      'Moving the function to a private subnet, which does not grant invoke rights',
      'An EventBridge schema registry entry as a substitute for invoke permission',
    ],
    correctAnswers: [0],
    explanation:
      'Invoke needs identity-based permission on the EventBridge role and a resource-based policy on the function. Execution-role trust, subnets, and schemas are different controls.',
  },
  {
    id: 'dea-sec-083',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'redshift', 'schema'],
    question:
      'Two departments share one Redshift database and must not see each other’s tables, but some analysts JOIN both sides in one query. Least-ops isolation:',
    options: [
      'A schema per department and GRANT at schema level (same database so cross-schema SQL still works)',
      'A separate database per department, which blocks simple same-session joins',
      'Rename objects with a department prefix and treat names as the ACL',
      'IAM identity policies as the way to GRANT SELECT on Redshift relations',
    ],
    correctAnswers: [0],
    explanation:
      'Redshift object privileges are SQL GRANTs, typically by schema. Separate databases add friction for mixed queries. Names are not permissions. IAM does not replace database GRANTs on tables/views.',
  },
  {
    id: 'dea-sec-084',
    domain: 'security',
    task: '4.5',
    tags: ['dea-c01', 'backup', 'vault-lock'],
    question:
      'S3 and RDS backups must follow a retention period and must not be deletable (even by admins) during that window. Least ops:',
    options: [
      'An AWS Backup plan for both resources plus Backup Vault Lock in compliance mode after the grace period',
      'S3 versioning + MFA Delete and RDS automated backups only, with no vault immutability',
      'Same-Region Replication as WORM',
      'Cross-Region Replication as the compliance lock',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Backup centralizes S3 and RDS schedules. Vault Lock compliance mode makes recovery points immutable until retention ends. Versioning, MFA Delete, and replication are not the same as a locked backup vault.',
  },
  {
    id: 'dea-sec-085',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lake-formation', 'data-filter'],
    question:
      'Lake Formation users must not see lake rows where country is Canada, with the least extra copies:',
    options: [
      'A Lake Formation data filter with a row expression that excludes country = \'Canada\'',
      'An IAM policy that matches address strings, which is not row-level lake security',
      'A column filter on country, which hides the column but can still return the row',
      'LF-Tags on individual Parquet rows as the documented row ACL',
    ],
    correctAnswers: [0],
    explanation:
      'Data filters apply a SQL-like row predicate (and optional cell filters) at query time. IAM and column grants do not drop Canada rows. LF-Tags attach to catalog objects, not each file row.',
  },
  {
    id: 'dea-sec-086',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 's3', 'checksum'],
    question:
      'On-premises log files uploaded to S3 must be proven identical to the stored object at PUT time:',
    options: [
      'Have the AWS SDK send an additional checksum (CRC32, SHA-256, or similar); S3 rejects the object if it disagrees and stores the checksum as metadata',
      'A post-upload Lambda that SHA-256s a sample of keys in a side table',
      'S3 Object Lock compliance mode, which is WORM retention, not upload integrity',
      'Downloading every object afterward to checksum it on the laptop',
    ],
    correctAnswers: [0],
    explanation:
      'S3 additional checksums are verified on ingest. Object Lock prevents overwrite/delete. After-the-fact downloads and sample Lambdas are slower and not the upload-time guarantee.',
  },
  {
    id: 'dea-sec-087',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'redshift', 'audit'],
    question:
      'A provisioned Redshift cluster must retain connection, user, and user-activity logs durably for auditors:',
    options: [
      'Enable database audit logging and set the destination to an S3 bucket (CloudWatch Logs is also supported)',
      'Write those logs to Amazon EFS as the documented Redshift audit target',
      'Insert audit rows into Aurora MySQL as the native destination',
      'An EBS volume attached to the leader node as the compliance archive',
    ],
    correctAnswers: [0],
    explanation:
      'Provisioned Redshift audit logging delivers connection/user/user-activity files to S3 (or CloudWatch). EFS, Aurora, and EBS are not those destinations. Serverless audit logging is CloudWatch-only, which is a different mode.',
  },
  {
    id: 'dea-sec-088',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 's3', 'checksum'],
    question:
      'Confidential daily S3 uploads must fail closed if bytes change on the wire. Client step:',
    options: [
      'Compute SHA-256 (or CRC32/CRC32C/SHA-1) before PUT and pass that checksum in the SDK request',
      'Switch the bucket to SSE-C and S3 Bucket Keys, which encrypt but do not compare payload hashes',
      'Download a random 1% of objects and eyeball them',
      'Re-GET the whole prefix every night to “validate”',
    ],
    correctAnswers: [0],
    explanation:
      'Precomputed checksums let S3 independently hash the received body and reject mismatches. SSE-C is encryption, not integrity comparison. Sampling or full re-download is not in-band verification.',
  },
  {
    id: 'dea-sec-089',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 's3-object-lambda', 'comprehend', 'pii'],
    question:
      'Several teams must analyze customer objects in S3 but must never see PII. Original objects stay put. Least-ops redact-on-read:',
    options: [
      'S3 Object Lambda (Comprehend PII detect/redact) on an access point so GET returns a sanitized object',
      'Macie as the service that rewrites and removes PII from the source objects',
      'Firehose plus Comprehend as a required extra copy pipeline before anyone can GET',
      'DataBrew writing PII into a second bucket while analysts keep reading the original prefix',
    ],
    correctAnswers: [0],
    explanation:
      'Object Lambda transforms bytes at GET time through an access point. Macie classifies; it does not redact in place. Firehose copies. DataBrew can mask into another prefix, but then teams must be pointed off the original—more moving parts than redact-on-read.',
  },
  {
    id: 'dea-sec-090',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 's3', 'vpc'],
    question:
      'A bucket must accept S3 API calls only from one VPC (via the gateway endpoint), even with valid IAM:',
    options: [
      'Bucket policy with aws:SourceVpc (and the needed s3 actions) denying other networks',
      'A security group on the bucket (buckets are not ENIs)',
      'NACL on the bucket resource',
      'Public ACL plus SourceVpc as if ACLs evaluated VPC origin',
    ],
    correctAnswers: [0],
    explanation:
      'aws:SourceVpc on the bucket policy is the documented “only this VPC” control with a gateway endpoint. Security groups and NACLs do not attach to buckets.',
  },
  {
    id: 'dea-sec-091',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'iam', 'session-policy'],
    question:
      'One IAM role is assumed by many engineers; each session must be limited to that engineer’s Region without a role per person:',
    options: [
      'Pass a session policy on AssumeRole so the session is the intersection of the role policy and that session policy',
      'A new IAM role per Region per user as the only pattern',
      'Resource tags as a substitute for session policies with no AssumeRole change',
      'Disable STS and share long-lived keys per Region',
    ],
    correctAnswers: [0],
    explanation:
      'Session policies shrink a role session further. Identity brokers pass a Region-scoped policy at assume time so you reuse one role.',
  },
  {
    id: 'dea-sec-092',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'lake-formation', 'crawler'],
    question:
      'A Glue crawler using Lake Formation credentials fails on s3://datalake/raw. Typical missing step:',
    options: [
      'Register that S3 location with Lake Formation so LF can vend credentials for the crawler',
      'Create a new Glue database only, which does not register the location',
      'Turn off IAM and hope LF still reads unregistered prefixes',
      'Grant s3:* to the account root as the LF registration substitute',
    ],
    correctAnswers: [0],
    explanation:
      'LF-credential crawlers require the target prefix to be an LF-registered location. A Glue database name is not that registration.',
  },
  {
    id: 'dea-sec-093',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'cloudwatch', 'pii'],
    question:
      'PII in one CloudWatch Logs group must be masked when people view events, with managed identifiers:',
    options: [
      'A CloudWatch Logs data protection policy on that group (audit + de-identify)',
      'Macie as a CloudWatch Logs masker',
      'S3 Object Lambda on the log group',
      'Glue Detect PII as the CloudWatch console filter',
    ],
    correctAnswers: [0],
    explanation:
      'Logs data protection policies detect and de-identify sensitive data in log events. Macie and Object Lambda operate on S3 objects, not that log-group viewer path.',
  },
  {
    id: 'dea-sec-094',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 's3', 'object-lock'],
    question:
      'Object versions must be immutable for seven years, including against the account root:',
    options: [
      'S3 Object Lock compliance mode with a 7-year default retention on the bucket (needs versioning)',
      'Governance mode, which privileged users can still bypass',
      'Lifecycle expiration on day one as WORM',
      'MFA Delete without Object Lock as 7-year legal hold',
    ],
    correctAnswers: [0],
    explanation:
      'Compliance mode cannot be overridden, even by root, until retention ends. Governance can be bypassed with a special permission. MFA Delete is extra protection, not the 7-year WORM control.',
  },
  {
    id: 'dea-sec-095',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 's3', 'dsse-kms'],
    question:
      'Compliance demands two independent AES-256 layers on S3 objects at PUT, using KMS:',
    options: [
      'DSSE-KMS (dual-layer SSE-KMS)',
      'SSE-S3 plus a client library as the named dual-layer feature',
      'SSE-KMS once, which is a single server-side layer',
      'CloudHSM in the client as DSSE-KMS',
    ],
    correctAnswers: [0],
    explanation:
      'DSSE-KMS applies two server-side AES-256 layers with KMS. SSE-KMS is one layer. Client-side encryption is a different model.',
  },
  {
    id: 'dea-sec-096',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'rds', 'audit'],
    question:
      'Need who changed RDS instance settings and who changed rows inside MySQL: (Select TWO.)',
    options: [
      'CloudTrail for RDS control-plane APIs (modify instance, etc.)',
      'RDS database audit logs published to CloudWatch Logs for in-database activity',
      'VPC Flow Logs as SQL audit',
      'S3 access logs as MySQL binlog',
    ],
    correctAnswers: [0, 1],
    explanation:
      'CloudTrail records RDS APIs. Engine audit plugins/logs capture data-plane SQL. Flow Logs and S3 logs are not database-user activity.',
  },
  {
    id: 'dea-sec-097',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'eks', 'irsa'],
    question:
      'EKS Pods must call DynamoDB with temporary credentials and no access keys in the image:',
    options: [
      'IAM roles for service accounts (IRSA) on the Kubernetes service account',
      'Bake AKIA keys into the container',
      'Instance-profile keys copied into every Pod spec as long-lived secrets',
      'Anonymous DynamoDB as the EKS pattern',
    ],
    correctAnswers: [0],
    explanation:
      'IRSA binds an IAM role to a service account so Pods get STS credentials. Long-lived keys in images are the anti-pattern.',
  },
  {
    id: 'dea-sec-098',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'glue', 'secrets-manager'],
    question:
      'A Glue job must read a JDBC password from Secrets Manager. AWSGlueServiceRole is already attached. Still AccessDenied:',
    options: [
      'Add secretsmanager:GetSecretValue (and kms:Decrypt if the secret uses a CMK) on the job role',
      'Trust that AWSGlueServiceRole already includes Secrets Manager (it does not)',
      'Put the password in the job script now that the managed policy exists',
      'Grant GetSecretValue on the Redshift cluster role instead of the Glue job role',
    ],
    correctAnswers: [0],
    explanation:
      'The Glue service-role managed policy does not include Secrets Manager. The job role that actually retrieves the secret needs GetSecretValue.',
  },
  {
    id: 'dea-sec-099',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'redshift', 'datashare'],
    question:
      'Share a Redshift datashare with two consumer AWS accounts. GRANT shape:',
    options: [
      'One GRANT USAGE ON DATASHARE … TO ACCOUNT per consumer (one account per statement)',
      'GRANT … TO ACCOUNTS \'111\' AND \'222\' in a single statement (invalid)',
      'GRANT to IAM user names as datashare consumers',
      'UNLOAD to each account’s bucket as GRANT USAGE',
    ],
    correctAnswers: [0],
    explanation:
      'USAGE is granted to one consumer at a time. There is no AND list of account ids in one GRANT.',
  },
  {
    id: 'dea-sec-100',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'emr', 'runtime-role'],
    question:
      'Several teams share one EMR on EC2 cluster. Only team A’s Spark steps may read a confidential DynamoDB table:',
    options: [
      'EMR runtime roles per step; grant DynamoDB only on team A’s role',
      'One instance profile with dynamodb:* for every step',
      'Lake Formation as the DynamoDB table ACL',
      'Disable IAM on EMR and use table passwords',
    ],
    correctAnswers: [0],
    explanation:
      'Runtime roles scope each step’s AWS credentials. The cluster instance profile would otherwise be shared by every team.',
  },
  {
    id: 'dea-sec-101',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'cloudtrail', 'sns'],
    question:
      'Auditors must SQL-query who called SNS Publish / PublishBatch. Management-event trails do not see those:',
    options: [
      'Log CloudTrail data events for SNS, then query them in CloudTrail Lake',
      'Assume management events include Publish',
      'Glue crawlers on SNS as an audit log',
      'VPC Flow Logs as SNS payload audit',
    ],
    correctAnswers: [0],
    explanation:
      'Publish is a data-plane API. You must enable data events. CloudTrail Lake can SQL those events without a separate Athena pipeline.',
  },
  {
    id: 'dea-sec-102',
    domain: 'security',
    task: '4.4',
    tags: ['dea-c01', 'cloudwatch', 'kinesis'],
    question:
      'Production account log groups must stream to a Kinesis data stream in a central logging account:',
    options: [
      'A CloudWatch Logs destination in the logging account wrapping the stream; production subscription filters point at that destination',
      'A subscription filter in production that writes Kinesis in another account with no destination',
      'S3 replication of log groups as CloudWatch subscription',
      'X-Ray as a log shipper',
    ],
    correctAnswers: [0],
    explanation:
      'Cross-account subscriptions use a destination (role + target stream) in the receiving account. The sender attaches a filter to that destination ARN.',
  },
  {
    id: 'dea-sec-103',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'redshift', 'privatelink'],
    question:
      'Lambda in a VPC must call the Redshift Data API with no public IPs:',
    options: [
      'Interface VPC endpoint for com.amazonaws.region.redshift-data (PrivateLink)',
      'An S3 gateway endpoint as the Data API endpoint',
      'A Redshift cluster subnet group as a PrivateLink service',
      'NAT Gateway as the documented PrivateLink substitute',
    ],
    correctAnswers: [0],
    explanation:
      'The Data API is a separate AWS service. You create an interface endpoint for redshift-data, not a gateway endpoint and not the cluster’s JDBC endpoint alone.',
  },
  {
    id: 'dea-sec-104',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'redshift', 'idp'],
    question:
      'Analysts should sign in to Redshift with an existing third-party IdP (native IdP federation), not a separate warehouse password farm:',
    options: [
      'Register that IdP in the Redshift (or Serverless) identity provider configuration so Redshift can authenticate those identities',
      'Store IdP passwords in Secrets Manager as the native federation',
      'IAM Identity Center only, with no Redshift IdP registration, as sufficient for native IdP',
      'Disable database users and use the cluster master key in every BI tool',
    ],
    correctAnswers: [0],
    explanation:
      'Native IdP federation starts by registering the provider with Redshift so tokens can be validated. Secrets Manager holds secrets; it is not that registration.',
  },
  {
    id: 'dea-sec-105',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 'backup', 'aurora'],
    question:
      'Nightly Aurora snapshots must copy to another Region; after 180 days the copies should be Glacier-cheap. AWS Backup cold storage does not support Aurora:',
    options: [
      'AWS Backup scheduled snapshots + cross-Region copy; export the snapshot to S3 and Lifecycle that prefix to Glacier',
      'AWS Backup lifecycle to cold storage on the Aurora recovery point (unsupported)',
      'Stop the cluster and wait, which is not a snapshot copy',
      'RDS automated backups as Glacier objects',
    ],
    correctAnswers: [0],
    explanation:
      'Backup can copy Aurora snapshots across Regions but cannot cold-tier those recovery points. Snapshot export to S3 lets Lifecycle go to Glacier without touching the live cluster.',
  },
  {
    id: 'dea-sec-106',
    domain: 'security',
    task: '4.1',
    tags: ['dea-c01', 'glue', 'security-groups'],
    question:
      'A Glue job and an RDS instance share one security group but the job cannot open the database port:',
    options: [
      'Add an inbound self-referencing rule on that group for the engine port (members do not talk unless you allow the group as source)',
      'Assume same-group membership implies all TCP is open',
      'Open 0.0.0.0/0 as the least-privilege fix',
      'NACL allow-all as a substitute for the missing self-ref rule',
    ],
    correctAnswers: [0],
    explanation:
      'Security groups are stateful but default-deny inbound. ENIs in the same group still need an explicit inbound rule with that group as the source.',
  },
  {
    id: 'dea-sec-107',
    domain: 'security',
    task: '4.2',
    tags: ['dea-c01', 'redshift', 'rls'],
    question:
      'Researchers may see only their department’s Redshift rows and must not see PII columns, without copying the table:',
    options: [
      'Redshift row-level security policies with predicates (and masking or column grants) attached to roles',
      'One extra schema copy per department',
      'Athena workgroups as Redshift RLS',
      'VPC security groups as row predicates',
    ],
    correctAnswers: [0],
    explanation:
      'RLS attaches SQL predicates to tables for roles. Combine with DDM or column privileges for PII. Copies and network controls are not row filters.',
  },
  {
    id: 'dea-sec-108',
    domain: 'security',
    task: '4.3',
    tags: ['dea-c01', 's3', 'kms', 'sse'],
    question:
      'Every S3 object must be encrypted at rest with AWS-managed key infrastructure, and you must be able to rotate or replace those keys:',
    options: [
      'SSE-KMS (CMKs in KMS: AWS runs the HSM, you can rotate, disable, and policy the key)',
      'SSE-S3, whose S3-owned keys you cannot rotate as customer-managed CMKs',
      'SSE-C, where you supply the key on every request (you manage the secret, not AWS)',
      'Client-side encryption with a laptop master key as the AWS-managed option',
    ],
    correctAnswers: [0],
    explanation:
      'SSE-KMS is AWS-hosted key management with customer (or AWS-managed) KMS keys you can rotate and authorize. SSE-S3 hides the key entirely. SSE-C and client-side put key custody on you.',
  },
]
