import type { Card } from '../../../core/types'

/** Additional CLF-C02 practice questions — sample exams & exam guide (Domain 3) */
export const technologySupplementCards: Card[] = [
  {
    id: 'tech-071',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['snowball', 'pricing'],
    question:
      'A company uses Snowball Edge to upload data to Amazon S3. Which data transfer activity is typically free of per-GB charges?',
    options: [
      'Importing data from the Snowball device into Amazon S3',
      'Exporting data from S3 to the Snowball device',
      'Daily rental after the included service period',
      'International shipping fees',
    ],
    correctAnswers: [0],
    explanation:
      'AWS does not charge per-GB data transfer fees for importing data from Snowball into S3. Device fees, shipping, and S3-to-device export may incur charges.',
  },
  {
    id: 'tech-072',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['global-accelerator', 'networking'],
    question:
      'Which service improves availability and performance of TCP/UDP applications by routing traffic over the AWS global network to optimal endpoints?',
    options: [
      'AWS Global Accelerator',
      'Amazon CloudFront',
      'Amazon S3 Transfer Acceleration',
      'AWS Storage Gateway',
    ],
    correctAnswers: [0],
    explanation:
      'Global Accelerator uses static anycast IPs and the AWS backbone for low-latency routing. CloudFront caches content at edge locations for HTTP/HTTPS delivery.',
  },
  {
    id: 'tech-073',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['fargate', 'containers'],
    question:
      'A team wants to run containers without managing EC2 instances or cluster capacity. Which option meets this requirement?',
    options: [
      'AWS Fargate with Amazon ECS or EKS',
      'Amazon EC2 On-Demand only',
      'Amazon Lightsail databases',
      'AWS Snowcone',
    ],
    correctAnswers: [0],
    explanation:
      'Fargate is serverless compute for containers — you define tasks or pods without provisioning servers.',
  },
  {
    id: 'tech-074',
    domain: 'cloud-technology',
    task: '3.7',
    tags: ['lex', 'ai'],
    question:
      'Which AWS service lets you build conversational chatbots with voice and text using automatic speech recognition and natural language understanding?',
    options: [
      'Amazon Lex',
      'Amazon Kendra',
      'Amazon Textract',
      'AWS Glue',
    ],
    correctAnswers: [0],
    explanation:
      'Lex powers chatbots and IVR systems. Kendra is enterprise search; Textract extracts text from documents.',
  },
  {
    id: 'tech-075',
    domain: 'cloud-technology',
    task: '3.7',
    tags: ['kendra', 'search'],
    question:
      'Which service provides intelligent enterprise search across documents, FAQs, and knowledge bases using machine learning?',
    options: [
      'Amazon Kendra',
      'Amazon Athena',
      'Amazon EMR',
      'AWS X-Ray',
    ],
    correctAnswers: [0],
    explanation:
      'Kendra uses ML to return relevant answers from unstructured and structured enterprise content.',
  },
  {
    id: 'tech-076',
    domain: 'cloud-technology',
    task: '3.7',
    tags: ['textract', 'documents'],
    question:
      'Which service automatically extracts text, forms, and tables from scanned documents and images?',
    options: [
      'Amazon Textract',
      'Amazon Translate',
      'Amazon Polly',
      'Amazon Connect',
    ],
    correctAnswers: [0],
    explanation:
      'Textract uses OCR and ML to pull structured data from documents without manual data entry.',
  },
  {
    id: 'tech-077',
    domain: 'cloud-technology',
    task: '3.5',
    tags: ['direct-connect', 'connectivity'],
    question:
      'Which connectivity option provides a dedicated private network connection from your data center to AWS?',
    options: [
      'AWS Direct Connect',
      'Internet gateway over public ISP only',
      'Amazon CloudFront',
      'Amazon S3 static website hosting',
    ],
    correctAnswers: [0],
    explanation:
      'Direct Connect establishes a private dedicated connection for consistent network performance and reduced internet dependency.',
  },
  {
    id: 'tech-078',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['memorydb', 'database'],
    question:
      'Which AWS database service offers a Redis-compatible, durable, in-memory database with Multi-AZ transactions?',
    options: [
      'Amazon MemoryDB for Redis',
      'Amazon Neptune',
      'Amazon Redshift',
      'Amazon Aurora PostgreSQL only',
    ],
    correctAnswers: [0],
    explanation:
      'MemoryDB stores data durably in memory with Redis compatibility. ElastiCache is primarily caching; MemoryDB targets primary database workloads.',
  },
  {
    id: 'tech-079',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['neptune', 'graph'],
    question:
      'Which database service is purpose-built for highly connected datasets such as social networks and fraud detection graphs?',
    options: [
      'Amazon Neptune',
      'Amazon DynamoDB',
      'Amazon RDS for MySQL',
      'Amazon ElastiCache',
    ],
    correctAnswers: [0],
    explanation:
      'Neptune is a managed graph database supporting property graph and RDF models for relationship-heavy data.',
  },
  {
    id: 'tech-080',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['storage-gateway', 'hybrid'],
    question:
      'Which service connects on-premises applications to AWS cloud storage using local caching?',
    options: [
      'AWS Storage Gateway',
      'AWS Snowmobile only',
      'Amazon CloudWatch',
      'AWS Control Tower',
    ],
    correctAnswers: [0],
    explanation:
      'Storage Gateway provides hybrid cloud storage integration with local caching for low-latency access to S3, EBS snapshots, and tape backups.',
  },
  {
    id: 'tech-081',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['backup', 'storage'],
    question:
      'Which service centrally automates backup policies across AWS services such as EBS, RDS, DynamoDB, and EFS?',
    options: [
      'AWS Backup',
      'Amazon Inspector',
      'AWS Artifact',
      'Amazon Macie',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Backup provides a unified console to configure, monitor, and restore backups across supported AWS services.',
  },
  {
    id: 'tech-082',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['local-zones', 'infrastructure'],
    question:
      'What is the primary purpose of AWS Local Zones?',
    options: [
      'Place compute, storage, and select services closer to end users in a metro area',
      'Replace all AWS Regions globally',
      'Archive data to Glacier automatically',
      'Provide free unlimited data transfer',
    ],
    correctAnswers: [0],
    explanation:
      'Local Zones extend an AWS Region with infrastructure in a geographic area for ultra-low-latency applications near population centers.',
  },
  {
    id: 'tech-083',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['cloudshell', 'access'],
    question:
      'Which browser-based tool provides a pre-authenticated AWS CLI and scripting environment without local installation?',
    options: [
      'AWS CloudShell',
      'AWS Cloud9 only on mobile',
      'Amazon WorkSpaces client',
      'AWS Snowball Edge',
    ],
    correctAnswers: [0],
    explanation:
      'CloudShell is a browser shell with AWS CLI and common tools, authenticated with your console credentials.',
  },
  {
    id: 'tech-084',
    domain: 'cloud-technology',
    task: '3.8',
    tags: ['ses', 'email'],
    question:
      'Which service helps send marketing, transactional, and notification emails at scale?',
    options: [
      'Amazon Simple Email Service (Amazon SES)',
      'Amazon SNS SMS only',
      'Amazon SQS',
      'AWS CodePipeline',
    ],
    correctAnswers: [0],
    explanation:
      'SES is a cloud email service for sending and receiving email. SNS can trigger email via subscriptions but SES is the dedicated email platform.',
  },
  {
    id: 'tech-085',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['auto-scaling', 'elasticity'],
    question:
      'Which service automatically adjusts EC2 capacity based on demand signals you define?',
    options: [
      'AWS Auto Scaling',
      'AWS Compute Optimizer recommendations only',
      'Amazon Route 53 health checks alone',
      'AWS License Manager',
    ],
    correctAnswers: [0],
    explanation:
      'Auto Scaling adds or removes EC2 instances (and other resources) to maintain performance and optimize costs.',
  },
  {
    id: 'tech-086',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['control-tower', 'governance'],
    question:
      'Which service helps set up and govern a secure multi-account AWS environment using best-practice blueprints?',
    options: [
      'AWS Control Tower',
      'Amazon Cognito',
      'AWS Snow Family',
      'Amazon Polly',
    ],
    correctAnswers: [0],
    explanation:
      'Control Tower automates setup of a landing zone with guardrails, account vending, and ongoing governance across Organizations.',
  },
  {
    id: 'tech-087',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['sct', 'migration'],
    question:
      'When migrating from Oracle to PostgreSQL on AWS, which tool helps convert database schema automatically?',
    options: [
      'AWS Schema Conversion Tool (AWS SCT)',
      'Amazon Athena',
      'AWS CodeDeploy',
      'Amazon CloudFront',
    ],
    correctAnswers: [0],
    explanation:
      'SCT converts source database schemas to target engines. DMS handles data migration; SCT handles schema conversion.',
  },
  {
    id: 'tech-088',
    domain: 'cloud-technology',
    task: '3.8',
    tags: ['amplify', 'mobile'],
    question:
      'Which service helps frontend and mobile developers build full-stack applications with authentication, APIs, and hosting?',
    options: [
      'AWS Amplify',
      'AWS Batch',
      'Amazon EMR',
      'AWS Transfer Family',
    ],
    correctAnswers: [0],
    explanation:
      'Amplify provides libraries, CLI, and hosting for building and deploying web and mobile apps integrated with AWS backends.',
  },
]
