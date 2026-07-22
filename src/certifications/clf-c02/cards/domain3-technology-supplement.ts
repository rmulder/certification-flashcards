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
  {
    id: 'tech-089',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['s3', 'storage', 'logs', 'sample-exam'],
    question:
      'A company wants to query their server logs for insights on their customers\' experiences. Which AWS service will store this data MOST cost-effectively?',
    options: [
      'Amazon Aurora',
      'Amazon Elastic File System (Amazon EFS)',
      'Amazon Elastic Block Store (Amazon EBS)',
      'Amazon S3',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon S3 provides scalable, durable, cost-effective object storage for server logs and similar data, with storage classes tuned for access patterns and price. Aurora, EFS, and EBS fit databases or block/file workloads—not bulk log archives at lowest cost.',
  },
  {
    id: 'tech-090',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['vpc', 'flow-logs', 'networking', 'sample-exam'],
    question:
      'Which AWS service or feature captures information about inbound and outbound network traffic from an Amazon EC2 instance?',
    options: [
      'VPC Reachability Analyzer',
      'Amazon Athena',
      'VPC Flow Logs',
      'AWS X-Ray',
    ],
    correctAnswers: [2],
    explanation:
      'VPC Flow Logs capture IP traffic to and from network interfaces in a VPC, including EC2 instances—useful when traffic fails to reach an instance or is rejected by a security group. VPC Reachability Analyzer tests connectivity paths; Amazon Athena queries data in S3 with SQL; AWS X-Ray traces and debugs distributed applications.',
  },
  {
    id: 'tech-091',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['vpc', 'peering', 'transit-gateway', 'sample-exam'],
    question:
      'Which AWS services or features allow users to create a network connection between two VPCs? (Select TWO.)',
    options: [
      'VPC endpoints',
      'Amazon Route 53',
      'VPC peering',
      'AWS Direct Connect',
      'AWS Transit Gateway',
    ],
    correctAnswers: [2, 4],
    explanation:
      'VPC peering connects two VPCs with private routing, and AWS Transit Gateway can connect multiple VPCs through a central hub. VPC endpoints access AWS services privately; Route 53 is DNS; Direct Connect links on-premises networks to AWS.',
  },
  {
    id: 'tech-092',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['cloudwatch', 'ec2', 'monitoring', 'sample-exam'],
    question:
      'A cloud engineer wants to know the percentage of allocated compute units that are in use for a specific Amazon EC2 instance. Which AWS service can provide this information?',
    options: ['AWS CloudTrail', 'AWS Config', 'Amazon CloudWatch', 'AWS Artifact'],
    correctAnswers: [2],
    explanation:
      'Amazon CloudWatch provides EC2 utilization metrics, including CPU and allocated compute usage, so teams can monitor performance and right-size instances. CloudTrail logs API activity; Config tracks resource configuration; Artifact hosts compliance reports.',
  },
  {
    id: 'tech-093',
    domain: 'cloud-technology',
    task: '3.8',
    tags: ['personalize', 'ml', 'recommendations', 'sample-exam'],
    question:
      'A company needs a managed machine learning (ML) service that can recommend products based on a customer\'s previous behaviors. Which AWS service meets this requirement?',
    options: [
      'Amazon Personalize',
      'Amazon SageMaker',
      'Amazon Pinpoint',
      'Amazon Comprehend',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Personalize is a fully managed recommendation service that processes your data, selects algorithms, and trains models for personalized product or content suggestions. SageMaker is a broader ML platform; Pinpoint is customer engagement; Comprehend analyzes text.',
  },
  {
    id: 'tech-094',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['elastic-beanstalk', 'deploy', 'sample-exam'],
    question:
      'A developer wants to quickly deploy an application on AWS without manually creating the necessary resources. Which AWS service will meet these requirements?',
    options: [
      'Amazon EC2',
      'AWS Elastic Beanstalk',
      'AWS CodeBuild',
      'Amazon Personalize',
    ],
    correctAnswers: [1],
    explanation:
      'Elastic Beanstalk provisions and manages EC2, load balancers, security groups, databases, scaling, health monitoring, and updates while you deploy application code—you can still access underlying resources when needed. EC2 requires manual setup; CodeBuild compiles code; Personalize provides ML recommendations.',
  },
  {
    id: 'tech-095',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['ec2', 'availability-zone', 'reliability', 'sample-exam'],
    question:
      'A company wants to design a reliable web application hosted on Amazon EC2. Which approach will achieve this goal?',
    options: [
      'Launch large EC2 instances in the same Availability Zone.',
      'Spread EC2 instances across more than one security group.',
      'Spread EC2 instances across more than one Availability Zone.',
      'Use an Amazon Machine Image (AMI) from the AWS Marketplace.',
    ],
    correctAnswers: [2],
    explanation:
      'Deploying across multiple Availability Zones improves fault tolerance when an AZ has an outage. Larger instances in one AZ, extra security groups, or a Marketplace AMI alone do not provide multi-AZ resilience.',
  },
  {
    id: 'tech-096',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['outposts', 'hybrid', 'migration', 'sample-exam'],
    question:
      'A manufacturing company has a mission-critical application that runs in a remote location with a slow internet connection. The company wants to migrate the workload to AWS. The application is latency-sensitive and prone to connectivity disruptions. Which AWS service or feature should the company use to meet these requirements?',
    options: [
      'Availability Zones',
      'AWS Local Zones',
      'AWS Wavelength',
      'AWS Outposts',
    ],
    correctAnswers: [3],
    explanation:
      'AWS Outposts delivers AWS-managed compute and storage racks on premises, so latency-sensitive workloads run locally while integrating with the cloud when connectivity allows. Local Zones and Wavelength extend Regions for edge/low-latency use cases but still depend on reliable links to AWS; AZs are within a Region, not at a remote plant.',
  },
  {
    id: 'tech-097',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['dynamodb', 'database', 'sample-exam'],
    question:
      'Which AWS service is a key-value database that delivers single-digit millisecond latency at any scale?',
    options: [
      'Amazon DynamoDB',
      'Amazon Aurora',
      'Amazon DocumentDB (with MongoDB compatibility)',
      'Amazon Neptune',
    ],
    correctAnswers: [0],
    explanation:
      'DynamoDB is a fully managed, serverless NoSQL database with key-value and document models and consistent single-digit millisecond performance at scale. Aurora is relational (MySQL/PostgreSQL compatible); DocumentDB is MongoDB-compatible documents; Neptune is a graph database.',
  },
  {
    id: 'tech-098',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['efs', 'fsx', 'storage', 'sample-exam'],
    question:
      'Amazon Elastic File System (Amazon EFS) and Amazon FSx offer which type of storage?',
    options: ['File storage', 'Object storage', 'Block storage', 'Instance storage'],
    correctAnswers: [0],
    explanation:
      'EFS and FSx provide shared file storage accessed over the network (NFS/SMB and specialized file systems). S3 is object storage; EBS is block storage; instance store is ephemeral disk on EC2 hosts.',
  },
  {
    id: 'tech-099',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['outposts', 'hybrid', 'latency', 'sample-exam'],
    question:
      'To deploy monitoring applications closest to factory machines with the least latency, which AWS solution should be used?',
    options: ['AWS Outposts', 'Amazon EC2', 'AWS App Runner', 'AWS Batch'],
    correctAnswers: [0],
    explanation:
      'AWS Outposts runs AWS infrastructure on premises at facilities such as factories, minimizing latency to local equipment. Standard EC2 in a Region is farther away; App Runner hosts web apps in AWS Regions; Batch runs batch jobs in the cloud.',
  },
  {
    id: 'tech-100',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['auto-scaling', 'ec2', 'sample-exam'],
    question:
      'A company deploys its application on Amazon EC2 instances. The application occasionally experiences sudden increases in demand. The company wants to ensure that its application can respond to changes in demand with the least possible cost. Which AWS service or tool will meet these requirements?',
    options: [
      'AWS Auto Scaling',
      'AWS Compute Optimizer',
      'AWS Cost Explorer',
      'AWS Well-Architected Framework',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Auto Scaling adds or removes EC2 capacity based on demand so you pay for what you need during spikes without over-provisioning idle instances. Compute Optimizer recommends sizes after analyzing usage; Cost Explorer reports spend; the Well-Architected Framework provides design guidance, not automatic scaling.',
  },
  {
    id: 'tech-101',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['dynamodb', 'database', 'sample-exam'],
    question:
      'A company is building an application that will receive millions of database queries per second. Which AWS service will meet this need?',
    options: [
      'Amazon DynamoDB',
      'AWS Cloud9',
      'Amazon ElastiCache for Memcached',
      'Amazon Neptune',
    ],
    correctAnswers: [0],
    explanation:
      'DynamoDB is a fully managed NoSQL database built for high throughput at scale with consistent low latency. Cloud9 is a cloud IDE; ElastiCache is an in-memory cache layer, not the primary database for this scenario; Neptune is a graph database.',
  },
  {
    id: 'tech-102',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['athena', 's3', 'analytics', 'sample-exam'],
    question:
      'A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective way?',
    options: [
      'Amazon Redshift',
      'Amazon Athena',
      'Amazon Kinesis',
      'Amazon RDS',
    ],
    correctAnswers: [1],
    explanation:
      'Athena is serverless SQL on S3—you pay per query based on data scanned, with no servers to provision, which suits occasional ad hoc analysis on large datasets such as 5 TB. Redshift is a warehouse for sustained analytics; Kinesis streams data; RDS is a relational database service.',
  },
  {
    id: 'tech-103',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['appstream', 'streaming', 'sample-exam'],
    question:
      'A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops. Which AWS service should the company use so students can use the application without relying on local hardware?',
    options: [
      'Amazon AppStream 2.0',
      'AWS AppSync',
      'Amazon WorkLink',
      'AWS Elastic Beanstalk',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon AppStream 2.0 streams desktop applications from AWS to browsers on client devices, so heavy workloads run in the cloud while students use inexpensive laptops. AppSync is a GraphQL API service; WorkLink provides secure mobile access to internal websites; Beanstalk deploys web apps but does not stream desktops to thin clients.',
  },
  {
    id: 'tech-104',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['ec2', 'dedicated-hosts', 'byol', 'sample-exam'],
    question:
      'When a user wants to use their own per-socket, per-core, or per-VM software licenses for a Microsoft Windows Server running on AWS, which Amazon EC2 instance type is required?',
    options: [
      'Spot Instances',
      'Dedicated Instances',
      'Dedicated Hosts',
      'Reserved Instances',
    ],
    correctAnswers: [2],
    explanation:
      'Dedicated Hosts are physical servers allocated to a single customer, supporting license models tied to sockets, cores, or VMs for BYOL scenarios such as Windows Server. Dedicated Instances are single-tenant but not full hosts; Spot and Reserved Instances are pricing models, not BYOL host placement.',
  },
  {
    id: 'tech-105',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['eventbridge', 'serverless', 'sample-exam'],
    question:
      'A company is building a serverless architecture that connects application data from multiple data sources. The company needs a solution that does not require additional code. Which AWS service meets these requirements?',
    options: [
      'AWS Lambda',
      'Amazon Simple Queue Service (Amazon SQS)',
      'Amazon CloudWatch',
      'Amazon EventBridge',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon EventBridge is a serverless event bus that routes events from AWS services, SaaS partners, and custom applications using rules—often with little or no custom integration code. Lambda runs code; SQS queues messages; CloudWatch monitors metrics and logs.',
  },
  {
    id: 'tech-106',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['ami', 'ec2', 'sample-exam'],
    question:
      'Which AWS feature or resource is a deployable Amazon EC2 instance template that is pre-packaged with software and security requirements?',
    options: [
      'Amazon Elastic Block Store (Amazon EBS) volume',
      'AWS CloudFormation template',
      'Amazon Elastic Block Store (Amazon EBS) snapshot',
      'Amazon Machine Image (AMI)',
    ],
    correctAnswers: [3],
    explanation:
      'An AMI is a template for launching EC2 instances, including an root volume snapshot, launch permissions, and block device mapping—you can launch many instances from one AMI or build custom AMIs. EBS volumes and snapshots store data; CloudFormation templates describe infrastructure as code, not a single instance image.',
  },
  {
    id: 'tech-107',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['eventbridge', 'lambda', 'schedule', 'sample-exam'],
    question:
      'A company\'s application stores data in an Amazon S3 bucket. The company has an AWS Lambda function that processes data in the S3 bucket. The company needs to invoke the function once per day at a specific time. Which AWS service should the company use to schedule the invocation?',
    options: [
      'AWS Managed Services (AMS)',
      'AWS CodeStar',
      'Amazon EventBridge',
      'AWS Step Functions',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon EventBridge supports scheduled rules (cron/rate expressions) to invoke Lambda and other targets at fixed times, such as once daily. AMS provides ongoing operations management; CodeStar coordinates development projects; Step Functions orchestrates multi-step workflows rather than simple schedules.',
  },
  {
    id: 'tech-108',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['cloud9', 'ide', 'sample-exam'],
    question:
      'A company needs to migrate all its development teams to a cloud-based integrated development environment (IDE). Which AWS service should the company use?',
    options: [
      'AWS CodeBuild',
      'AWS Cloud9',
      'AWS OpsWorks',
      'AWS Cloud Development Kit (AWS CDK)',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Cloud9 is a browser-based IDE for writing, running, and debugging code with a built-in terminal for AWS resources. CodeBuild compiles and tests code in CI pipelines; OpsWorks manages stacks with Chef/Puppet; CDK defines infrastructure as code in programming languages.',
  },
  {
    id: 'tech-109',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['vpc', 'subnet', 'networking', 'sample-exam'],
    question:
      'A company has set up a VPC in its AWS account and created a subnet in the VPC. The company wants to make the subnet public. Which AWS resources should the company use to meet this requirement? (Select TWO.)',
    options: [
      'Amazon VPC internet gateway',
      'Amazon VPC NAT gateway',
      'Amazon VPC route tables',
      'Amazon VPC network ACLs',
      'Amazon EC2 security groups',
    ],
    correctAnswers: [0, 2],
    explanation:
      'A public subnet needs an internet gateway attached to the VPC and a route table with a default route (0.0.0.0/0) to that IGW for the subnet. NAT gateways enable outbound internet from private subnets; NACLs and security groups filter traffic but do not make a subnet public by themselves.',
  },
  {
    id: 'tech-110',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['athena', 's3', 'csv', 'sample-exam'],
    question:
      'A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data to comma-separated value (.csv) files. A developer wants to write a simple query that can read all those files and generate a summary report. Which AWS service should the developer use?',
    options: [
      'Amazon S3 Select',
      'Amazon Athena',
      'Amazon Redshift',
      'Amazon EC2',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Athena runs standard SQL directly against CSV and other formats in S3 without managing servers—you pay per query scanned. S3 Select retrieves subsets of a single object; Redshift is a data warehouse cluster; EC2 would require you to build and operate your own query stack.',
  },
  {
    id: 'tech-111',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['elasticache', 'database', 'sample-exam'],
    question: 'Which AWS database service provides in-memory data store?',
    options: [
      'Amazon DynamoDB',
      'Amazon ElastiCache',
      'Amazon RDS',
      'Amazon Timestream',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon ElastiCache offers managed in-memory caching with Redis or Memcached engines. DynamoDB is durable NoSQL storage; RDS is relational disk-backed databases; Timestream is a time-series database for metrics and events.',
  },
  {
    id: 'tech-112',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['directory-service', 'active-directory', 'sample-exam'],
    question:
      'A retail company is building a new mobile application. The company is evaluating whether to build the application in an on-premises data center or in the AWS Cloud. Which AWS service should the company consider?',
    options: [
      'Amazon FSx for Windows File Server',
      'Amazon WorkSpaces virtual Windows desktop',
      'AWS Directory Service for Microsoft Active Directory',
      'Amazon RDS for Microsoft SQL Server',
    ],
    correctAnswers: [2],
    explanation:
      'AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) runs managed Active Directory in AWS for integrating users, groups, and authentication with cloud workloads. FSx provides file shares; WorkSpaces is virtual desktops; RDS SQL Server is a database engine, not directory services.',
  },
  {
    id: 'tech-113',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['ec2', 'hpc', 'availability-zone', 'sample-exam'],
    question:
      'A company wants to migrate its high-performance computing (HPC) application to Amazon EC2 instances. The application has multiple components and must have fault tolerance and automatic failover capabilities. Which AWS infrastructure solution will meet these requirements with the LEAST latency between components?',
    options: [
      'Multiple AWS Regions',
      'Multiple edge locations',
      'Multiple Availability Zones',
      'Regional edge caches',
    ],
    correctAnswers: [2],
    explanation:
      'Deploying across multiple Availability Zones in the same Region provides low-latency connectivity between components while supporting failover if an AZ fails. Multiple Regions add distance and latency; edge locations and regional edge caches serve content delivery, not tightly coupled HPC clusters.',
  },
  {
    id: 'tech-114',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['codecommit', 'codedeploy', 'cicd', 'sample-exam'],
    question:
      'A company needs a repository that stores source code. The company needs a way to update running software when the code changes. Which combination of AWS services meets these requirements? (Select TWO.)',
    options: [
      'AWS CodeCommit',
      'AWS CodeDeploy',
      'Amazon DynamoDB',
      'Amazon S3',
      'Amazon Elastic Container Service (Amazon ECS)',
    ],
    correctAnswers: [0, 1],
    explanation:
      'CodeCommit hosts private Git repositories for source control; CodeDeploy automates deployments to EC2, on-premises servers, Lambda, and ECS. DynamoDB and S3 are data stores; ECS runs containers but does not replace a Git repo or deployment automation by itself.',
  },
  {
    id: 'tech-115',
    domain: 'cloud-technology',
    task: '3.8',
    tags: ['textract', 'ml', 'documents', 'sample-exam'],
    question:
      'A company has an Amazon S3 bucket containing images of scanned financial invoices. The company is building an AI-based application on AWS to identify and read the total balance values on the invoices. Which AWS service will meet these requirements?',
    options: [
      'Amazon Forecast',
      'Amazon Textract',
      'Amazon Rekognition',
      'Amazon Lex',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Textract extracts printed text, forms, and tables from scanned documents such as invoices. Forecast predicts time-series metrics; Rekognition analyzes images and video; Lex builds conversational chatbots.',
  },
  {
    id: 'tech-116',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['neptune', 'graph', 'database', 'sample-exam'],
    question:
      'A company is building a mobile application to provide purchase recommendations to its customers. The company wants to use a graph database as part of the purchase recommendation engine. Which AWS database service should the company choose?',
    options: [
      'Amazon DynamoDB',
      'Amazon Aurora',
      'Amazon Neptune',
      'Amazon DocumentDB (with MongoDB compatibility)',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon Neptune is a fully managed graph database for highly connected data such as recommendations, fraud detection, and knowledge graphs. DynamoDB is key-value/document; Aurora is relational; DocumentDB is MongoDB-compatible documents.',
  },
  {
    id: 'tech-117',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['s3', 'encryption', 'sample-exam'],
    question:
      'Which AWS service or feature allows users to encrypt data at rest in Amazon S3?',
    options: [
      'IAM policies',
      'Server-side encryption',
      'Amazon GuardDuty',
      'Client-side encryption',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon S3 server-side encryption (SSE-S3, SSE-KMS, or SSE-C) encrypts objects at rest in S3; S3 decrypts on download. IAM policies control access; GuardDuty detects threats; client-side encryption happens before upload, but this exam item names SSE as the S3 encryption option.',
  },
  {
    id: 'tech-118',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecr', 'containers', 'lifecycle', 'sample-exam'],
    question:
      'A team stores many container image versions in Amazon ECR and wants to automatically expire old, unused images to reduce storage costs. Which ECR feature should they use?',
    options: [
      'Image lifecycle policies',
      'Pull-through cache rules',
      'Cross-Region replication',
      'Enhanced networking for ECS',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon ECR lifecycle policies define rules to expire or archive images based on age or count, cleaning up unused images and optimizing storage cost.',
  },
  {
    id: 'tech-119',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecr', 'containers', 'scanning', 'security', 'sample-exam'],
    question:
      'Before deploying container images to production, a company wants to detect operating system and package vulnerabilities in images stored in Amazon ECR. Which capability addresses this?',
    options: [
      'Amazon ECR image scanning',
      'Amazon GuardDuty',
      'AWS Shield Standard',
      'VPC Flow Logs',
    ],
    correctAnswers: [0],
    explanation:
      'ECR supports basic and enhanced scanning to identify software vulnerabilities in container images, helping teams fix issues before deployment and support security and compliance goals.',
  },
  {
    id: 'tech-120',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecr', 'containers', 'replication', 'sample-exam'],
    question:
      'A company needs the same container images available in multiple AWS Regions and accounts for disaster recovery and low-latency deployments. Which Amazon ECR feature supports this?',
    options: [
      'Cross-Region and cross-account replication',
      'Pull-through cache rules only',
      'S3 Cross-Region Replication for EBS snapshots',
      'AWS Global Accelerator for ECR API calls only',
    ],
    correctAnswers: [0],
    explanation:
      'ECR replication configuration copies images across Regions or AWS accounts so workloads can deploy closer to users, improve recovery options, and support multi-Region strategies.',
  },
  {
    id: 'tech-121',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecr', 'containers', 'pull-through-cache', 'sample-exam'],
    question:
      'Developers frequently pull container images from a public upstream registry. The company wants those images cached in its private Amazon ECR registry for faster, consistent access. Which feature should they configure?',
    options: [
      'Amazon ECR pull-through cache rules',
      'Amazon ECR lifecycle policies',
      'AWS Storage Gateway tape gateway',
      'Amazon CloudFront origin access control',
    ],
    correctAnswers: [0],
    explanation:
      'Pull-through cache rules let ECR retrieve and cache images from an upstream registry into your private registry, reducing repeated pulls from external sources and speeding local access.',
  },
  {
    id: 'tech-122',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecr', 'containers', 'encryption', 'sample-exam'],
    question:
      'Which Amazon ECR capability helps ensure container images are stored securely with encryption at rest?',
    options: [
      'Built-in encryption for images in repositories',
      'Automatic public read access for all repositories',
      'Replacement of IAM with root-user-only access',
      'Disabling TLS for faster Docker pulls',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon ECR encrypts images at rest by default (AES-256) and supports customer-managed KMS keys for repositories, protecting stored container images.',
  },
  {
    id: 'tech-123',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecr', 'containers', 'iam', 'sample-exam'],
    question:
      'A security team needs to restrict which IAM principals can push or pull images in specific Amazon ECR repositories. Which ECR capability supports this?',
    options: [
      'Fine-grained access control with IAM and repository policies',
      'Amazon S3 bucket policies only',
      'Security groups attached to container images',
      'Network ACLs on the Docker daemon',
    ],
    correctAnswers: [0],
    explanation:
      'ECR integrates with IAM and supports repository policies so you grant least-privilege push, pull, and admin actions to authorized users and roles only.',
  },
  {
    id: 'tech-124',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecr', 'containers', 'docker', 'sample-exam'],
    question:
      'Developers want to push and pull container images to Amazon ECR using their existing toolchain without a custom portal. Which options can they use? (Select TWO)',
    options: [
      'Docker CLI',
      'AWS CLI',
      'Amazon Route 53 resolver',
      'AWS Snowball Edge only',
      'Amazon Connect contact flows',
    ],
    correctAnswers: [0, 1],
    explanation:
      'ECR is compatible with standard Docker workflows and AWS APIs—you authenticate with `aws ecr get-login` or similar, then push and pull with the Docker CLI, AWS CLI, or SDKs in CI/CD pipelines.',
  },
  {
    id: 'tech-125',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecr', 'containers', 'registry', 'sample-exam'],
    question:
      'Which AWS service is a fully managed private registry used to store and deploy container images for Amazon ECS and Amazon EKS workloads?',
    options: [
      'Amazon Elastic Container Registry (Amazon ECR)',
      'AWS Fargate',
      'Amazon Elastic File System (Amazon EFS)',
      'AWS Elastic Beanstalk',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon ECR hosts private (and public) container images and integrates with ECS, EKS, and Lambda, helping teams streamline secure container deployments in the cloud.',
  },
  {
    id: 'tech-140',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['cloudfront', 'cdn', 'sample-exam'],
    question:
      'A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which AWS service will help achieve high transfer speeds?',
    options: [
      'Amazon SNS',
      'Amazon CloudFront',
      'Amazon Kinesis Video Streams',
      'AWS CloudFormation',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon CloudFront is a CDN that caches video content at edge locations around the world, delivering from the nearest location for high transfer speeds globally. Amazon SNS is pub/sub messaging, not video delivery. Kinesis Video Streams ingests live video for analysis and storage, not CDN distribution of on-demand courses. AWS CloudFormation provisions infrastructure with templates and does not accelerate content delivery.',
  },
  {
    id: 'tech-141',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['edge-locations', 'cloudfront', 'shield', 'sample-exam'],
    question: 'Which services use AWS edge locations? (Select TWO)',
    options: [
      'Amazon EC2',
      'AWS Shield',
      'Amazon RDS',
      'Amazon CloudFront',
      'Amazon ElastiCache',
    ],
    correctAnswers: [1, 3],
    explanation:
      'Amazon CloudFront caches and delivers content from edge locations (points of presence) near users. AWS Shield mitigates DDoS at the edge before traffic hits origin resources. Amazon EC2 runs in Regional Availability Zones, not edge POPs. Amazon RDS is a regional managed database. Amazon ElastiCache caches in Regions to reduce database load—it is not a global edge service.',
  },
  {
    id: 'tech-142',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['vpn', 'site-to-site', 'networking', 'sample-exam'],
    question:
      'Which components are required to build a successful site-to-site VPN connection on AWS? (Select TWO)',
    options: [
      'Internet gateway',
      'Virtual private gateway',
      'Transit gateway',
      'Customer gateway',
      'NAT gateway',
    ],
    correctAnswers: [1, 3],
    explanation:
      'Site-to-Site VPN needs a customer gateway (your on-premises VPN device) and a virtual private gateway attached to the VPC on the AWS side—the two tunnel endpoints. An internet gateway provides general public internet access to a VPC; a NAT gateway enables outbound internet from private subnets; a transit gateway can hub multiple networks but is not required for a basic site-to-site VPN.',
  },
  {
    id: 'tech-144',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['ec2', 'ebs', 'instance-store', 'sample-exam'],
    question:
      'A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?',
    options: [
      'Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store',
      'Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)',
      'Amazon Redshift',
      'Amazon DynamoDB',
    ],
    correctAnswers: [1],
    explanation:
      'Self-hosted database on EC2 that you stop nightly needs persistent storage: EBS volumes retain data while the instance is stopped. Instance store data is lost when the instance stops. Redshift and DynamoDB are fully managed, continuously operated services—not a stop/start EC2 database pattern.',
  },
  {
    id: 'tech-145',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['cli', 'sdk', 'access', 'sample-exam'],
    question:
      'Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)',
    options: [
      'Command line interface',
      'Software-as-a-service',
      'Software Development Kits',
      'Hybrid',
      'On-premises',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Customers interact with AWS through the AWS CLI (terminal commands) and SDKs (programmatic access from application code), along with the console and APIs. SaaS is a software delivery model, not an AWS interaction channel. Hybrid and on-premises describe deployment architectures, not how you call AWS services.',
  },
  {
    id: 'tech-146',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecr', 'containers', 'registry', 'sample-exam'],
    question:
      'Which AWS service eliminates the need for organizations to operate their own container repositories, offering high availability, scalability, and security for containerized applications?',
    options: [
      'Amazon Elastic Container Registry (Amazon ECR)',
      'Amazon Elastic Kubernetes Service (Amazon EKS)',
      'Amazon Elastic Container Service (Amazon ECS)',
      'Amazon Elastic Compute Cloud (Amazon EC2)',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon ECR is a fully managed container image registry—you store and pull images without running your own repository infrastructure. EKS and ECS orchestrate and run containers; EC2 provides virtual servers. Images for ECS/EKS are typically stored in ECR.',
  },
  {
    id: 'tech-147',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['eks', 'containers', 'orchestration', 'sample-exam'],
    question:
      'Which fully managed container orchestration service simplifies the deployment, scaling, and operation of clusters on AWS?',
    options: [
      'Amazon Elastic Container Service (Amazon ECS)',
      'Amazon Elastic Container Registry (Amazon ECR)',
      'Amazon Elastic Kubernetes Service (Amazon EKS)',
      'Amazon Relational Database Service (Amazon RDS)',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon EKS is a fully managed Kubernetes service that runs and scales container clusters without you managing the control plane. ECR stores container images; ECS is AWS-native orchestration (also managed—some exams emphasize EKS when the question mentions “clusters” in a Kubernetes sense); RDS is a relational database service.',
  },
]
