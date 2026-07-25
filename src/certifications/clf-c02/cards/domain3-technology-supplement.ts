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
  {
    id: 'tech-148',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['s3', 'naming', 'study-guide'],
    question: 'Which statement about Amazon S3 bucket names is correct?',
    options: [
      'Bucket names must be globally unique across all of AWS',
      'Bucket names must be unique only within your AWS account',
      'Bucket names must match your AWS account ID',
      'Bucket names are assigned automatically and cannot be chosen',
    ],
    correctAnswers: [0],
    explanation:
      'S3 bucket names are globally unique DNS-compatible names across all AWS accounts and Regions. Two customers cannot use the same bucket name. Names are 3–63 characters; storage class is per object and does not affect naming.',
  },
  {
    id: 'tech-149',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['lambda', 'limits', 'study-guide'],
    question: 'What is the maximum execution time for a single AWS Lambda function invocation?',
    options: ['15 minutes', '5 minutes', '1 hour', '24 hours'],
    correctAnswers: [0],
    explanation:
      'Lambda functions can run up to 15 minutes per invocation (900 seconds). Longer or continuously running workloads typically use EC2, ECS, or other services. Timeout is configurable up to that maximum.',
  },
  {
    id: 'tech-150',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['dynamodb', 'query', 'study-guide'],
    question:
      'Which Amazon DynamoDB operation reads every partition in a table and is the most expensive read pattern for large tables?',
    options: ['Scan', 'Query on the primary key', 'GetItem', 'BatchWriteItem'],
    correctAnswers: [0],
    explanation:
      'A Scan examines every item (and partition) in a table or index. A Query targets the primary key (or index key) and reads only relevant partitions. GetItem retrieves one item by key; BatchWriteItem writes data.',
  },
  {
    id: 'tech-151',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['route53', 'routing', 'study-guide'],
    question:
      'Which Amazon Route 53 routing policy sends traffic to a primary resource and fails over to a secondary resource only when the primary is unhealthy?',
    options: [
      'Failover routing',
      'Simple routing',
      'Weighted routing',
      'Geolocation routing only',
    ],
    correctAnswers: [0],
    explanation:
      'Failover routing uses health checks to route to a primary endpoint while healthy, then to a secondary when the primary fails. Simple returns one record; Weighted splits traffic by weight; Geolocation routes by user location.',
  },
  {
    id: 'tech-152',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['route53', 'dns', 'study-guide'],
    question:
      'Which Route 53 resource lets Amazon EC2 instances in a VPC resolve private domain names not reachable from the public Internet?',
    options: [
      'Private hosted zone',
      'Public hosted zone',
      'Internet gateway',
      'NAT gateway',
    ],
    correctAnswers: [0],
    explanation:
      'A private hosted zone is associated with one or more VPCs and provides DNS for internal names (for example app.internal). Public hosted zones serve public DNS; internet and NAT gateways handle network routing, not DNS records.',
  },
  {
    id: 'tech-153',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['ec2', 'auto-scaling', 'study-guide'],
    question:
      'Which EC2 resource can launch instances both manually and through an Auto Scaling group, unlike a launch configuration?',
    options: [
      'Launch template',
      'Amazon Machine Image (AMI) only',
      'Elastic IP address',
      'Placement group',
    ],
    correctAnswers: [0],
    explanation:
      'Launch templates define instance configuration for manual launches and Auto Scaling; they supersede launch configurations. An AMI is the OS/application image; Elastic IPs are static public addresses; placement groups influence physical placement.',
  },
  {
    id: 'tech-154',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['elb', 'high-availability', 'study-guide'],
    question:
      'How does an Application Load Balancer improve availability when an EC2 instance fails a health check?',
    options: [
      'It stops sending traffic to the unhealthy instance',
      'It automatically patches the operating system on the instance',
      'It replaces the instance without Auto Scaling',
      'It caches all dynamic content at edge locations',
    ],
    correctAnswers: [0],
    explanation:
      'ALB health checks detect failed instances and remove them from rotation so users are not routed to them. Replacing instances is Auto Scaling\'s job; ALB does not patch OSes or cache content like CloudFront.',
  },
  {
    id: 'tech-155',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['s3', 'access', 'study-guide'],
    question: 'What is the default access setting for new objects uploaded to Amazon S3?',
    options: [
      'Private—not public by default',
      'Public read for all AWS accounts',
      'Public read for anyone on the Internet',
      'Encrypted and deleted after 24 hours',
    ],
    correctAnswers: [0],
    explanation:
      'S3 objects are private by default. You must explicitly grant public access through bucket policies, ACLs, or Block Public Access settings if public delivery is intended. Block Public Access can prevent accidental public exposure.',
  },
  {
    id: 'tech-156',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['cloudformation', 'iac', 'study-guide'],
    question: 'In which formats can AWS CloudFormation templates be written?',
    options: ['YAML or JSON', 'Python or Java only', 'SQL or CSV', 'HTML or XML only'],
    correctAnswers: [0],
    explanation:
      'CloudFormation templates use JSON or YAML to describe stacks of AWS resources. CDK generates CloudFormation from programming languages, but the deployed template format is JSON or YAML—not Python source alone.',
  },
  {
    id: 'tech-157',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['codepipeline', 'cicd', 'study-guide'],
    question:
      'What is the minimum number of stages required in an AWS CodePipeline pipeline?',
    options: [
      'A source stage and a deploy stage',
      'Three build stages only',
      'A single manual approval stage',
      'Five stages including test, scan, and audit',
    ],
    correctAnswers: [0],
    explanation:
      'At minimum, CodePipeline needs a source stage (for example CodeCommit or S3) and a deploy stage (for example CodeDeploy or CloudFormation). Additional build, test, and approval stages are optional but common.',
  },
  {
    id: 'tech-158',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['systems-manager', 'automation', 'study-guide'],
    question:
      'Which AWS Systems Manager document type runs commands on an EC2 instance, as opposed to performing AWS API tasks like starting an instance?',
    options: [
      'Command document',
      'Automation document',
      'CloudFormation template',
      'Service Quotas request',
    ],
    correctAnswers: [0],
    explanation:
      'Command documents (Run Command) execute shell commands or scripts on managed EC2 instances. Automation documents orchestrate AWS API actions such as starting or stopping resources. CloudFormation provisions stacks; Service Quotas manages limits.',
  },
  {
    id: 'tech-159',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['glacier', 'storage', 'study-guide'],
    question:
      'How do you upload or download archives in Amazon S3 Glacier (Glacier storage class)?',
    options: [
      'Using the AWS CLI, SDK, or API—not the S3 console for archive operations',
      'Only through the S3 console drag-and-drop interface',
      'By attaching Glacier volumes to EC2 instances',
      'Using NFS mounts from on-premises servers only',
    ],
    correctAnswers: [0],
    explanation:
      'Glacier archives are managed programmatically via CLI, SDK, or S3 API. You can create vaults in the console, but archive upload, download, and delete require programmatic access. Glacier does not use EC2-attached block volumes or NFS.',
  },
  {
    id: 'tech-160',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['databases', 'comparison', 'study-guide'],
    question:
      'Which comparison between relational and nonrelational databases is accurate?',
    options: [
      'Relational databases use structured rows and columns; nonrelational databases can store flexible or unstructured items',
      'Relational databases are always schemaless; nonrelational databases require fixed schemas',
      'Nonrelational databases cannot use primary keys',
      'Relational databases are ideal only for key-value access with no queries',
    ],
    correctAnswers: [0],
    explanation:
      'Relational databases (RDS) store data in tables with defined schemas, rows, and columns—suited to complex queries and reporting. Nonrelational stores (DynamoDB, DocumentDB) use flexible items and are often optimized for specific access patterns at scale.',
  },
  {
    id: 'tech-161',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['vpc', 'cidr', 'study-guide'],
    question:
      'Which CIDR block size is valid for an Amazon VPC or subnet?',
    options: ['10.0.0.0/28', '10.0.0.0/8', '10.0.0.0/32 only for VPC', '192.168.1.0/15'],
    correctAnswers: [0],
    explanation:
      'VPC and subnet CIDR blocks must be between /16 and /28 inclusive. /28 (16 addresses) is valid; /8 is too large for a single VPC; /32 is too small; /15 is outside the allowed range.',
  },
  {
    id: 'tech-162',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['device-farm', 'mobile', 'study-guide'],
    question:
      'Which AWS service lets developers test mobile and web applications on many virtual device types without owning physical hardware?',
    options: [
      'AWS Device Farm',
      'Amazon WorkDocs',
      'AWS Snowball Edge',
      'Amazon Connect',
    ],
    correctAnswers: [0],
    explanation:
      'Device Farm provides remote access to virtual phones, tablets, and browsers for automated and interactive testing with logs and video. WorkDocs is file collaboration; Snowball Edge is offline transfer; Connect is a cloud contact center.',
  },
  {
    id: 'tech-163',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['iot', 'greengrass', 'study-guide'],
    question:
      'Which AWS service extends cloud capabilities to edge devices so they can process data locally even when offline?',
    options: [
      'AWS IoT Greengrass',
      'Amazon Kinesis Data Streams',
      'AWS CloudShell',
      'Amazon Athena',
    ],
    correctAnswers: [0],
    explanation:
      'IoT Greengrass runs AWS Lambda, messaging, and ML inference on edge hardware (gateways, routers) with sync to AWS IoT Core when connected. Kinesis ingests streaming data in the cloud; CloudShell is a browser shell; Athena queries S3 with SQL.',
  },
  {
    id: 'tech-164',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['workdocs', 'collaboration', 'study-guide'],
    question:
      'Which Amazon service provides secure file storage, sharing, and document collaboration for teams?',
    options: [
      'Amazon WorkDocs',
      'Amazon S3 Glacier',
      'AWS Secrets Manager',
      'Amazon Inspector',
    ],
    correctAnswers: [0],
    explanation:
      'WorkDocs is a managed enterprise file sharing service with previews and comments on documents. Glacier is archival storage; Secrets Manager stores secrets; Inspector scans for vulnerabilities.',
  },
  {
    id: 'tech-165',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['auto-scaling', 'predictive', 'study-guide'],
    question:
      'Which Amazon EC2 Auto Scaling feature creates scheduled scaling actions based on past usage patterns?',
    options: [
      'Predictive scaling',
      'Spot Fleet only',
      'Dedicated Hosts',
      'Placement groups',
    ],
    correctAnswers: [0],
    explanation:
      'Predictive scaling uses machine learning on historical metrics to schedule capacity ahead of expected demand. Spot Fleet requests Spot capacity; Dedicated Hosts are physical servers; placement groups influence EC2 physical layout.',
  },
  {
    id: 'tech-166',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['route53', 'routing', 'study-guide'],
    question:
      'Which Amazon Route 53 routing policy directs users to the AWS Region that provides the lowest latency?',
    options: [
      'Latency routing',
      'Failover routing',
      'Simple routing',
      'Multivalue answer routing with random sort only',
    ],
    correctAnswers: [0],
    explanation:
      'Latency routing uses health checks and latency measurements to route each user to the lowest-latency healthy endpoint among Regions. Failover switches primary/secondary; Simple returns one record; Multivalue returns multiple healthy records.',
  },
  {
    id: 'tech-167',
    domain: 'cloud-technology',
    task: '3.7',
    tags: ['polly', 'ai', 'sample-exam'],
    question: 'Which AWS service converts text into lifelike spoken audio?',
    options: [
      'Amazon Polly',
      'Amazon Transcribe',
      'Amazon Lex',
      'Amazon Comprehend',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Polly is a text-to-speech (TTS) service. Transcribe converts speech to text; Lex builds conversational bots with NLU; Comprehend extracts insights from text but does not synthesize speech.',
  },
  {
    id: 'tech-168',
    domain: 'cloud-technology',
    task: '3.7',
    tags: ['transcribe', 'ai', 'sample-exam'],
    question: 'Which AWS service converts speech audio into text?',
    options: [
      'Amazon Transcribe',
      'Amazon Polly',
      'Amazon Lex',
      'Amazon SageMaker',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Transcribe provides automatic speech recognition (ASR) to turn audio into text—for example call recordings or media captions. Polly does the reverse (text to speech). Lex combines ASR and NLU for chatbots; SageMaker builds custom ML models.',
  },
  {
    id: 'tech-169',
    domain: 'cloud-technology',
    task: '3.5',
    tags: ['aurora', 'databases', 'sample-exam'],
    question:
      'Which AWS service is a fully managed relational database that automatically scales storage and compute, with MySQL and PostgreSQL compatibility?',
    options: [
      'Amazon Aurora',
      'Amazon RDS for Oracle only',
      'Amazon DynamoDB',
      'Amazon Redshift',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Aurora is AWS\'s cloud-native relational engine with auto-scaling storage, fast failover, and MySQL/PostgreSQL compatibility. Standard RDS engines scale with more manual sizing; DynamoDB is NoSQL; Redshift is a data warehouse.',
  },
  {
    id: 'tech-170',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['s3', 'glacier', 'archive', 'sample-exam'],
    question:
      'A company must preserve marketing images and videos indefinitely with rare access and the lowest storage cost. Which option is MOST appropriate?',
    options: [
      'Amazon S3 Glacier',
      'Amazon EBS volumes',
      'Amazon EFS Standard',
      'Amazon RDS with BLOB storage',
    ],
    correctAnswers: [0],
    explanation:
      'S3 Glacier storage classes are designed for archival data accessed infrequently, with high durability at low cost per GB. EBS and EFS are block/file storage for active workloads; RDS BLOBs are costly and not suited to large static media archives.',
  },
  {
    id: 'tech-171',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['s3', 'lifecycle', 'cost', 'sample-exam'],
    question:
      'Videos are streamed heavily for 30 days, accessed occasionally for 5 months, then kept for compliance with almost no access. Which lifecycle strategy offers the LOWEST total cost?',
    options: [
      'S3 Standard for 30 days, transition to S3 Standard-IA, then to S3 Glacier Deep Archive after 6 months',
      'Keep all objects in S3 One Zone-IA for the entire lifecycle',
      'Store everything in Amazon EFS Infrequent Access',
      'Use S3 Intelligent-Tiering with archive tiers enabled from day one for all objects',
    ],
    correctAnswers: [0],
    explanation:
      'Tiered S3 lifecycle rules match cost to access patterns: Standard for hot streaming, Standard-IA for occasional retrieval, then Glacier Deep Archive for long-term compliance at the lowest rate. One Zone-IA sacrifices performance and multi-AZ durability; EFS costs more than S3 for object archives; Intelligent-Tiering adds monitoring fees that may exceed planned transitions.',
  },
  {
    id: 'tech-172',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['detective', 'security', 'crucial-exams'],
    question:
      'Which AWS service helps analyze and visualize security data to investigate the root cause of potential security issues?',
    options: [
      'Amazon Detective',
      'Amazon Inspector',
      'AWS Shield',
      'Amazon Macie',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Detective collects log data from CloudTrail, VPC Flow Logs, and GuardDuty findings into a graph model for security investigations. Inspector scans for vulnerabilities; Shield mitigates DDoS; Macie finds sensitive data in S3.',
  },
  {
    id: 'tech-173',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['msk', 'streaming', 'crucial-exams'],
    question:
      'Which AWS service is a fully managed Apache Kafka platform for building and running real-time streaming applications?',
    options: [
      'Amazon MSK',
      'Amazon Kinesis Data Streams',
      'Amazon SQS',
      'Amazon EventBridge',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Managed Streaming for Apache Kafka (Amazon MSK) runs open-source Kafka clusters with AWS managing brokers, patching, and scaling. Kinesis is AWS-native streaming; SQS is message queuing; EventBridge is an event bus.',
  },
  {
    id: 'tech-174',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['opensearch', 'analytics', 'crucial-exams'],
    question:
      'Which AWS service helps you deploy, operate, and scale OpenSearch clusters for search and log analytics?',
    options: [
      'Amazon OpenSearch Service',
      'Amazon Athena',
      'Amazon Redshift',
      'Amazon Kendra',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon OpenSearch Service (successor to Amazon Elasticsearch Service) powers full-text search, log analytics, and observability dashboards. Athena queries S3 with SQL; Redshift is a data warehouse; Kendra is ML enterprise search.',
  },
  {
    id: 'tech-175',
    domain: 'cloud-technology',
    task: '3.7',
    tags: ['translate', 'ai', 'crucial-exams'],
    question:
      'Which AWS service provides neural machine translation between languages?',
    options: [
      'Amazon Translate',
      'Amazon Comprehend',
      'Amazon Polly',
      'Amazon Textract',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Translate converts text between languages in real time. Comprehend extracts meaning and sentiment from text; Polly converts text to speech; Textract extracts text from documents.',
  },
  {
    id: 'tech-176',
    domain: 'cloud-technology',
    task: '3.8',
    tags: ['connect', 'contact-center', 'crucial-exams'],
    question:
      'Which AWS service provides a cloud-based contact center for voice, chat, and customer service workflows?',
    options: [
      'Amazon Connect',
      'Amazon Lex',
      'Amazon SNS',
      'AWS Support',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Connect is a scalable contact center in the cloud with IVR, routing, and integration with Lex for conversational AI. Lex builds chatbots; SNS sends notifications; AWS Support is a technical support plan.',
  },
  {
    id: 'tech-177',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['appconfig', 'deployment', 'crucial-exams'],
    question:
      'Which AWS service lets you quickly and safely deploy application configuration changes across environments?',
    options: [
      'AWS AppConfig',
      'AWS Systems Manager Parameter Store only',
      'AWS CloudFormation',
      'Amazon CloudWatch',
    ],
    correctAnswers: [0],
    explanation:
      'AWS AppConfig validates and deploys configuration to applications with deployment strategies and automatic rollback. Parameter Store holds parameters; CloudFormation provisions infrastructure; CloudWatch monitors metrics.',
  },
  {
    id: 'tech-178',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['codeartifact', 'devops', 'crucial-exams'],
    question:
      'Which AWS service is a managed artifact repository for storing software packages used in development pipelines?',
    options: [
      'AWS CodeArtifact',
      'Amazon ECR',
      'Amazon S3',
      'AWS CodeCommit',
    ],
    correctAnswers: [0],
    explanation:
      'CodeArtifact stores npm, Maven, PyPI, and NuGet packages for CI/CD workflows. ECR stores container images; S3 is general object storage; CodeCommit hosts Git source code.',
  },
  {
    id: 'tech-179',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['data-exchange', 'marketplace', 'crucial-exams'],
    question:
      'Which AWS service lets you find, subscribe to, and use third-party datasets in the cloud?',
    options: [
      'AWS Data Exchange',
      'AWS Glue',
      'Amazon Athena',
      'AWS Marketplace',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Data Exchange is a catalog of third-party data products you can subscribe to and load into analytics workflows. Glue prepares data; Athena queries S3; Marketplace sells software products.',
  },
  {
    id: 'tech-180',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['disaster-recovery', 'migration', 'crucial-exams'],
    question:
      'Which AWS service provides disaster recovery for on-premises and cloud-based applications with minimal downtime and data loss?',
    options: [
      'AWS Elastic Disaster Recovery',
      'AWS Backup only',
      'Amazon S3 versioning',
      'AWS Snowball Edge',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Elastic Disaster Recovery (Elastic DR) continuously replicates servers to AWS for fast failover during outages. AWS Backup snapshots point-in-time data; S3 versioning protects objects; Snowball Edge moves bulk data offline.',
  },
  {
    id: 'tech-181',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['firewall-manager', 'security', 'crucial-exams'],
    question:
      'Which AWS service centrally configures and manages AWS WAF rules and VPC firewall policies across accounts and Regions?',
    options: [
      'AWS Firewall Manager',
      'Amazon GuardDuty',
      'AWS Network Firewall only without WAF',
      'AWS Shield Advanced console only',
    ],
    correctAnswers: [0],
    explanation:
      'Firewall Manager applies WAF, Shield Advanced, Network Firewall, and security group policies consistently across your organization. GuardDuty detects threats; Network Firewall protects VPC traffic; Shield mitigates DDoS.',
  },
  {
    id: 'tech-182',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['iq', 'support', 'crucial-exams'],
    question:
      'Which AWS offering connects customers with AWS Certified experts for paid project assistance?',
    options: [
      'AWS IQ',
      'AWS Professional Services only',
      'AWS re:Post',
      'AWS Marketplace',
    ],
    correctAnswers: [0],
    explanation:
      'AWS IQ is a marketplace to post project requests and hire vetted AWS experts for short-term technical work. Professional Services is AWS-led consulting; re:Post is community Q&A; Marketplace sells software.',
  },
  {
    id: 'tech-183',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['launch-wizard', 'compute', 'crucial-exams'],
    question:
      'Which AWS service helps you quickly deploy Microsoft SQL Server, Active Directory, and other Microsoft workloads on AWS?',
    options: [
      'AWS Launch Wizard',
      'AWS CloudFormation only',
      'Amazon Lightsail only',
      'AWS Migration Hub',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Launch Wizard guides sizing, licensing, and deployment of common Microsoft application stacks on EC2. CloudFormation is general IaC; Lightsail is simplified VPS hosting; Migration Hub tracks migration progress.',
  },
  {
    id: 'tech-184',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['ram', 'sharing', 'crucial-exams'],
    question:
      'Which AWS service lets you share AWS resources such as subnets and Transit Gateways with other AWS accounts?',
    options: [
      'AWS Resource Access Manager (AWS RAM)',
      'AWS Organizations SCPs only',
      'Amazon Route 53',
      'AWS IAM roles only',
    ],
    correctAnswers: [0],
    explanation:
      'AWS RAM enables resource sharing across accounts in your organization or with external accounts without duplicating infrastructure. Organizations SCPs limit permissions; Route 53 is DNS; IAM roles delegate access but do not share VPC subnets.',
  },
  {
    id: 'tech-185',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['service-catalog', 'governance', 'crucial-exams'],
    question:
      'Which AWS service lets administrators create and manage catalogs of approved IT services that users can deploy from a self-service portal?',
    options: [
      'AWS Service Catalog',
      'AWS Control Tower',
      'AWS Artifact',
      'AWS Trusted Advisor',
    ],
    correctAnswers: [0],
    explanation:
      'Service Catalog lets teams launch pre-approved CloudFormation templates (products) with guardrails. Control Tower sets up multi-account landing zones; Artifact hosts compliance reports; Trusted Advisor recommends optimizations.',
  },
  {
    id: 'tech-186',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['transfer-family', 'migration', 'crucial-exams'],
    question:
      'Which AWS service enables secure file transfers into and out of Amazon S3 using SFTP, FTPS, and FTP protocols?',
    options: [
      'AWS Transfer Family',
      'AWS Storage Gateway file gateway only',
      'Amazon EFS',
      'AWS Direct Connect',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Transfer Family provides managed SFTP/FTPS/FTP endpoints backed by S3 or EFS for B2B file exchange. Storage Gateway integrates on-premises apps; EFS is a Linux file system; Direct Connect is a dedicated network link.',
  },
  {
    id: 'tech-187',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['wavelength', 'edge', 'crucial-exams'],
    question:
      'Which AWS infrastructure embeds compute and storage at telecommunications providers\' 5G networks for ultra-low-latency mobile applications?',
    options: [
      'AWS Wavelength',
      'AWS Local Zones',
      'AWS Outposts',
      'Amazon CloudFront',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Wavelength zones run at the edge of 5G networks so mobile apps process data near users with single-digit millisecond latency. Local Zones extend Regions to metro areas; Outposts is on-premises AWS racks; CloudFront caches HTTP content.',
  },
  {
    id: 'tech-188',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['workspaces', 'end-user', 'crucial-exams'],
    question:
      'Which Amazon service provides secure browser-based access to internal websites and SaaS applications without a full virtual desktop?',
    options: [
      'Amazon WorkSpaces Web',
      'Amazon AppStream 2.0',
      'Amazon WorkLink only',
      'AWS Client VPN',
    ],
    correctAnswers: [0],
    explanation:
      'WorkSpaces Web delivers managed browser isolation for internal web apps and SaaS from any device. AppStream 2.0 streams full desktop applications; WorkLink was retired; Client VPN connects networks, not browser sessions to web apps.',
  },
  {
    id: 'tech-189',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['activate', 'startups', 'crucial-exams'],
    question:
      'Which AWS program provides credits, training, and support resources for early-stage startups building on AWS?',
    options: [
      'AWS Activate for Startups',
      'AWS IQ',
      'AWS Marketplace',
      'AWS Professional Services',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Activate offers startup credits, technical support, and training through accelerators and venture partners. IQ connects to freelance experts; Marketplace sells software; Professional Services is AWS consulting engagements.',
  },
  {
    id: 'tech-190',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['cloudwatch', 'monitoring', 'crucial-exams'],
    question:
      'Which AWS service provides monitoring and observability with metrics and dashboards for AWS resources and applications?',
    options: [
      'Amazon CloudWatch',
      'AWS CloudTrail',
      'AWS Config',
      'AWS Trusted Advisor',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon CloudWatch collects metrics, logs, and alarms for operational visibility. CloudTrail records API activity; Config tracks resource configuration; Trusted Advisor recommends best-practice improvements.',
  },
  {
    id: 'tech-191',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['cloudwatch', 'alarms', 'crucial-exams'],
    question: 'What do Amazon CloudWatch alarms do?',
    options: [
      'Monitor metrics against thresholds and trigger actions such as notifications or Auto Scaling',
      'Store encrypted passwords for EC2 instances',
      'Replace AWS CloudTrail for API auditing',
      'Automatically patch operating systems on all instances',
    ],
    correctAnswers: [0],
    explanation:
      'CloudWatch alarms watch a metric over time and act when it crosses a threshold—for example sending an SNS alert or scaling an Auto Scaling group. Parameter Store holds secrets; CloudTrail audits APIs; patching is Systems Manager Patch Manager.',
  },
  {
    id: 'tech-192',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['cloudwatch', 'logs', 'crucial-exams'],
    question:
      'Which AWS feature centralizes log data from applications, AWS services, and on-premises servers for monitoring and analysis?',
    options: [
      'Amazon CloudWatch Logs',
      'Amazon S3 Glacier',
      'AWS Artifact',
      'AWS Budgets',
    ],
    correctAnswers: [0],
    explanation:
      'CloudWatch Logs ingests and stores log streams you can search, metric-filter, and retain. Glacier is archival object storage; Artifact hosts compliance documents; Budgets tracks spend alerts.',
  },
  {
    id: 'tech-193',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['x-ray', 'observability', 'crucial-exams'],
    question:
      'Which AWS service helps developers analyze and debug distributed applications and microservices by tracing requests?',
    options: [
      'AWS X-Ray',
      'Amazon CloudWatch metrics only',
      'AWS CloudFormation',
      'Amazon Inspector',
    ],
    correctAnswers: [0],
    explanation:
      'AWS X-Ray traces requests across services, showing latency bottlenecks and errors in a service map. CloudWatch metrics and logs monitor resources but do not automatically map end-to-end request paths like X-Ray.',
  },
  {
    id: 'tech-194',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['systems-manager', 'maintenance', 'crucial-exams'],
    question:
      'In AWS Systems Manager, what is a maintenance window used for?',
    options: [
      'Scheduling patches, updates, and other maintenance tasks during a defined time period',
      'Setting AWS Budgets alerts for monthly spend',
      'Defining Reserved Instance purchase terms',
      'Creating CloudFormation stack update policies only',
    ],
    correctAnswers: [0],
    explanation:
      'Maintenance windows in Systems Manager control when Run Command or Automation tasks—such as OS patching—run to limit impact on production. Budgets monitor costs; RIs are billing commitments; CloudFormation manages infrastructure templates.',
  },
  {
    id: 'tech-195',
    domain: 'cloud-technology',
    task: '3.5',
    tags: ['privatelink', 'networking', 'examtopics'],
    question:
      'A company wants private connectivity from its VPC to supported AWS services without traversing the public internet. Which AWS networking feature meets this requirement?',
    options: [
      'AWS PrivateLink',
      'Internet gateway only',
      'AWS Snowball Edge',
      'Amazon CloudFront',
    ],
    correctAnswers: [0],
    explanation:
      'AWS PrivateLink provides private connectivity between VPCs and AWS services (or other VPC endpoints) over the AWS network, keeping traffic off the public internet. Internet gateways enable public access; Snowball Edge is offline transfer; CloudFront is a CDN.',
  },
  {
    id: 'tech-196',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['storage-gateway', 'file-gateway', 'hybrid', 'examtopics', 'sample-exam'],
    question:
      'A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?',
    options: [
      'Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.',
      'Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.',
      'Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.',
      'Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users.',
    ],
    correctAnswers: [1],
    explanation:
      'A Storage Gateway file gateway provides a local SMB/NFS share backed by Amazon S3 with caching for low-latency access—extending capacity without replacing every desktop workflow. Per-user S3 mounts are hard to operate at scale; WorkSpaces plus WorkDocs is a full VDI/collaboration shift, not the most efficient file-extension path; sharing one EBS volume from EC2 is not a managed hybrid NAS pattern.',
  },
  {
    id: 'tech-197',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['codeguru', 'developer-tools', 'examtopics'],
    question:
      'Which AWS service uses machine learning to review code and recommend improvements for code quality and application performance?',
    options: [
      'Amazon CodeGuru',
      'AWS CodeDeploy',
      'Amazon Inspector',
      'AWS Trusted Advisor',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon CodeGuru Reviewer and Profiler analyze source code and runtime behavior to surface defects and performance bottlenecks. CodeDeploy automates deployments; Inspector scans for vulnerabilities; Trusted Advisor gives account-level best-practice checks.',
  },
  {
    id: 'tech-198',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['elastic-transcoder', 'media', 'examtopics'],
    question:
      'Which AWS service converts video and audio files into formats suitable for playback on smartphones and other devices?',
    options: [
      'Amazon Elastic Transcoder',
      'Amazon Kinesis Video Streams',
      'AWS Elemental MediaLive only',
      'Amazon Polly',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Elastic Transcoder is a managed media transcoding service that converts source media into output formats and bitrates for different devices. Kinesis Video Streams ingests streaming video; MediaLive produces live streams; Polly converts text to speech.',
  },
  {
    id: 'tech-199',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['s3', 'inventory', 'examtopics'],
    question:
      'A company needs scheduled reports listing Amazon S3 objects, including metadata such as tags, across buckets and prefixes. Which S3 feature meets this requirement?',
    options: [
      'S3 Inventory',
      'S3 Object Lock only',
      'S3 Transfer Acceleration',
      'S3 Select',
    ],
    correctAnswers: [0],
    explanation:
      'S3 Inventory generates CSV, ORC, or Parquet reports of objects and metadata (size, storage class, tags, etc.) on a schedule. Object Lock enforces retention; Transfer Acceleration speeds uploads; S3 Select retrieves subsets of object data with SQL-like queries.',
  },
  {
    id: 'tech-200',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['snowball', 'migration', 'examtopics', 'sample-exam'],
    question: 'What does AWS Snowball provide? (Choose TWO.)',
    options: [
      'Built-in computing capabilities that allow customers to process data locally.',
      'A catalog of third-party software solutions that customers need to build solutions and run their businesses.',
      'A hybrid cloud storage between on-premises environments and the AWS Cloud.',
      'An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.',
      'Secure transfer of large amounts of data into and out of the AWS.',
    ],
    correctAnswers: [0, 4],
    explanation:
      'Snowball devices securely transfer large datasets offline when network transfer is impractical; Snowball Edge adds local compute for edge processing before upload. AWS Marketplace sells third-party software; Storage Gateway provides hybrid storage; AWS Snowmobile (not Snowball) handles exabyte-scale migration.',
  },
  {
    id: 'tech-201',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['ebs', 'snapshots', 'encryption', 'examtopics', 'sample-exam'],
    question: 'What should you do in order to keep the data on EBS volumes safe? (Choose TWO.)',
    options: [
      'Regularly update firmware on EBS devices.',
      'Create EBS snapshots.',
      'Ensure that EBS data is encrypted at rest.',
      'Store a backup daily in an external drive.',
      'Prevent any unauthorized access to AWS data centers.',
    ],
    correctAnswers: [1, 2],
    explanation:
      'EBS snapshots provide point-in-time backups you can use to restore volumes or copy data for disaster recovery. Encryption at rest protects data on the volume and in snapshots. Customers do not patch EBS firmware or control physical data center access—that is AWS responsibility under the shared responsibility model.',
  },
  {
    id: 'tech-202',
    domain: 'cloud-technology',
    task: '3.5',
    tags: ['cloudfront', 'edge-locations', 'cdn', 'examtopics', 'sample-exam'],
    question:
      'What does Amazon CloudFront use to distribute content to global users with low latency?',
    options: [
      'AWS Global Accelerator',
      'AWS Regions',
      'AWS Edge Locations',
      'AWS Availability Zones',
    ],
    correctAnswers: [2],
    explanation:
      'CloudFront is a content delivery network (CDN) that caches copies of content at AWS edge locations (points of presence) close to users. Global Accelerator optimizes TCP/UDP routing over the AWS network; Regions and Availability Zones host primary workloads, not CloudFront’s global cache layer.',
  },
  {
    id: 'tech-203',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['s3', 'glacier', 'deep-archive', 'storage', 'examtopics', 'sample-exam'],
    question:
      'The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?',
    options: [
      'S3 Intelligent-Tiering',
      'AWS Marketplace',
      'Amazon S3 Glacier Deep Archive',
      'Amazon EBS',
    ],
    correctAnswers: [2],
    explanation:
      'Glacier Deep Archive is designed for rarely accessed long-term retention at the lowest S3 storage cost—suited to compliance archives retrieved only during legal or audit events. Intelligent-Tiering suits unknown or changing access patterns with a monitoring fee; Marketplace sells third-party products; EBS is block storage for EC2, not economical for large infrequently accessed video archives.',
  },
  {
    id: 'tech-204',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['elasticache', 'caching', 'performance', 'examtopics', 'sample-exam'],
    question:
      'A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?',
    options: [
      'AWS OpsWorks',
      'AWS Storage Gateway',
      'Amazon EBS volume',
      'Amazon ElastiCache',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon ElastiCache provides in-memory caching (Redis or Memcached) for hot data, reducing latency and database load in web tiers. OpsWorks is a configuration management service; Storage Gateway connects on-premises storage to AWS; EBS is durable block storage attached to EC2, not an in-memory cache layer for frequent reads.',
  },
  {
    id: 'tech-205',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['vpc', 'networking', 'examtopics', 'sample-exam'],
    question:
      'What is the AWS service that provides a virtual network dedicated to your AWS account?',
    options: [
      'AWS VPN',
      'AWS Subnets',
      'AWS Dedicated Hosts',
      'Amazon VPC',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon Virtual Private Cloud (VPC) is a logically isolated virtual network you define in your AWS account, with your own IP ranges, subnets, and routing. AWS VPN connects on-premises networks to a VPC; subnets are components inside a VPC; Dedicated Hosts are physical servers for EC2 tenancy.',
  },
  {
    id: 'tech-206',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['vpc', 'networking', 'isolation', 'examtopics', 'sample-exam'],
    question:
      'You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?',
    options: [
      'Internet gateways',
      'Virtual Private Cloud',
      'Security Groups',
      'Amazon CloudFront',
    ],
    correctAnswers: [1],
    explanation:
      'Use separate Amazon VPCs (or isolated subnets within a VPC) to segment projects with different network topologies, routing, and access controls. Internet gateways enable public internet access for a VPC; security groups filter traffic at the instance level; CloudFront is a CDN for content delivery.',
  },
  {
    id: 'tech-207',
    domain: 'cloud-technology',
    task: '3.5',
    tags: ['cloudfront', 'edge-locations', 'examtopics', 'sample-exam'],
    question:
      'AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?',
    options: [
      'Edge locations are used by CloudFront to cache the most recent responses.',
      'Edge locations are used by CloudFront to improve your end users’ experience when uploading files.',
      'Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.',
      'Edge locations are used by CloudFront to distribute content to global users with low latency.',
    ],
    correctAnswers: [2],
    explanation:
      'CloudFront edge locations cache and serve content closer to viewers for low latency—they do not load-balance traffic across multiple origin instances the way an Elastic Load Balancer does. Caching responses, accelerating uploads (where configured), and global content delivery are CloudFront edge benefits.',
  },
  {
    id: 'tech-208',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['x-ray', 'microservices', 'observability', 'examtopics', 'sample-exam'],
    question:
      'A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?',
    options: [
      'AWS CodePipeline',
      'AWS X-Ray',
      'Amazon Inspector',
      'AWS CloudTrail',
    ],
    correctAnswers: [1],
    explanation:
      'AWS X-Ray traces requests across microservices, showing latency bottlenecks, errors, and dependencies in a service map. CodePipeline automates CI/CD releases; Inspector scans for vulnerabilities; CloudTrail logs API activity for audit, not application performance debugging.',
  },
  {
    id: 'tech-209',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['multi-az', 's3', 'dynamodb', 'fault-tolerance', 'examtopics', 'sample-exam'],
    question:
      'Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO.)',
    options: [
      'Amazon Redshift',
      'AWS Snowball',
      'Amazon Simple Storage Service',
      'Amazon EBS',
      'Amazon DynamoDB',
    ],
    correctAnswers: [2, 4],
    explanation:
      'Amazon S3 automatically stores objects redundantly across multiple Availability Zones in a Region. Amazon DynamoDB replicates data across AZs for high availability and durability by default. EBS volumes are tied to a single AZ; Snowball is an offline transfer appliance; Redshift availability patterns differ and are not the classic Multi-AZ managed-store answer on this item.',
  },
  {
    id: 'tech-210',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['s3', 'glacier', 'storage-classes', 'examtopics', 'sample-exam'],
    question:
      'Amazon Glacier is an Amazon S3 storage class that is suitable for storing […] & […]. (Choose TWO.)',
    options: [
      'Active archives',
      'Dynamic websites’ assets',
      'Long-term analytic data',
      'Active databases',
      'Cached data',
    ],
    correctAnswers: [0, 2],
    explanation:
      'S3 Glacier storage classes target infrequently accessed archival and long-term retention—such as active archives you retrieve occasionally and analytic datasets kept for years. Dynamic web assets, active databases, and hot cached data need low-latency storage like S3 Standard, EBS, or ElastiCache—not Glacier retrieval patterns.',
  },
  {
    id: 'tech-211',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['alb', 'elb', 'http', 'examtopics', 'sample-exam'],
    question:
      'A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?',
    options: [
      'AWS EC2 Auto Recovery',
      'AWS Auto Scaling',
      'AWS Network Load Balancer',
      'AWS Application Load Balancer',
    ],
    correctAnswers: [3],
    explanation:
      'An Application Load Balancer distributes HTTP and HTTPS requests across registered targets in multiple Availability Zones. Auto Scaling adjusts capacity but does not load-balance HTTP by itself; NLB operates at layer 4 (TCP/UDP); EC2 Auto Recovery restarts impaired instances on the same hardware—it does not spread web traffic.',
  },
  {
    id: 'tech-212',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['rds', 'managed-services', 'examtopics', 'sample-exam'],
    question:
      'What are the benefits of using the Amazon Relational Database Service? (Choose TWO.)',
    options: [
      'Lower administrative burden',
      'Complete control over the underlying host',
      'Resizable compute capacity',
      'Scales automatically to larger or smaller instance types',
      'Supports the document and key-value data structure',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Amazon RDS is a managed relational database: AWS handles routine administration such as backups and patching, reducing operational overhead. You can change the DB instance class to resize CPU and memory. Full host control is EC2 self-managed; automatic instance-type scaling without action is not an RDS hallmark on this item; document/key-value stores are nonrelational services like DynamoDB.',
  },
  {
    id: 'tech-213',
    domain: 'cloud-technology',
    task: '3.5',
    tags: ['vpn', 'ipsec', 'hybrid', 'networking', 'examtopics', 'sample-exam'],
    question:
      'What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?',
    options: [
      'Internet Gateway',
      'AWS IQ',
      'AWS Direct Connect',
      'AWS Site-to-Site VPN',
    ],
    correctAnswers: [3],
    explanation:
      'AWS Site-to-Site VPN creates IPsec-encrypted tunnels over the internet between your on-premises network and an AWS VPC (via virtual private gateway or transit gateway). An internet gateway enables public internet access for a VPC; IQ is a marketplace for AWS experts; Direct Connect is a dedicated private network link (encryption is optional/add-on, not defined by IPSec site-to-site VPN alone).',
  },
  {
    id: 'tech-214',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['cloudformation', 'beanstalk', 'deployment', 'examtopics', 'sample-exam'],
    question:
      'App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO.)',
    options: [
      'AWS CloudFormation',
      'AWS Migration Hub',
      'AWS IAM',
      'AWS Elastic Beanstalk',
      'Amazon Macie',
    ],
    correctAnswers: [0, 3],
    explanation:
      'AWS CloudFormation automates infrastructure as code for repeatable, fast environment provisioning. AWS Elastic Beanstalk deploys and scales web applications with minimal operational overhead. Migration Hub tracks migration progress; IAM manages access; Macie discovers sensitive data in S3—they are not primary application deployment automation tools.',
  },
  {
    id: 'tech-215',
    domain: 'cloud-technology',
    task: '3.5',
    tags: ['transit-gateway', 'vpc', 'networking', 'examtopics', 'sample-exam'],
    question:
      'A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?',
    options: [
      'VPC Peering',
      'AWS Transit Gateway',
      'Amazon Connect',
      'Security Groups',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Transit Gateway acts as a central hub to connect many VPCs and on-premises networks, simplifying routing at scale versus full mesh VPC peering. VPC peering is typically one-to-one; Amazon Connect is a cloud contact center; security groups filter instance traffic—they do not connect VPCs.',
  },
  {
    id: 'tech-216',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['s3', 'lambda', 'scaling', 'serverless', 'examtopics', 'sample-exam'],
    question:
      'Which of the following AWS services scale automatically without your intervention? (Choose TWO.)',
    options: [
      'Amazon EC2',
      'Amazon S3',
      'AWS Lambda',
      'Amazon EMR',
      'Amazon EBS',
    ],
    correctAnswers: [1, 2],
    explanation:
      'Amazon S3 scales storage and request handling automatically as usage grows. AWS Lambda scales execution concurrency in response to incoming events without you provisioning servers. EC2 capacity changes require Auto Scaling or manual action; EMR clusters are configured and managed; EBS volume size must be provisioned or expanded explicitly.',
  },
  {
    id: 'tech-217',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['elb', 'alb', 'health-checks', 'examtopics', 'sample-exam'],
    question:
      'How do ELBs improve the reliability of your application?',
    options: [
      'By distributing traffic across multiple S3 buckets',
      'By replicating data to multiple availability zones',
      'By creating database Read Replicas',
      'By ensuring that only healthy targets receive traffic',
    ],
    correctAnswers: [3],
    explanation:
      'Elastic Load Balancers perform health checks on registered targets and route requests only to instances that pass—improving availability when a backend fails. They distribute traffic across compute targets, not S3 buckets; Multi-AZ data replication is a storage/database design; read replicas are an RDS feature, not ELB behavior.',
  },
  {
    id: 'tech-218',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['ebs', 'database', 'storage', 'examtopics', 'sample-exam'],
    question:
      'A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?',
    options: [
      'AWS Storage Gateway',
      'Amazon S3',
      'Amazon EBS',
      'Amazon Glacier',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon EBS provides low-latency block storage attached to EC2 instances—suited to database workloads with heavy read/write I/O (or as the storage layer behind self-managed databases). S3 and Glacier are object storage for files and archives, not block I/O for active databases; Storage Gateway bridges on-premises storage to AWS rather than serving as primary high-IOPS database storage.',
  },
  {
    id: 'tech-219',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['service-catalog', 'governance', 'examtopics', 'sample-exam'],
    question: 'What does AWS Service Catalog provide?',
    options: [
      'It enables customers to quickly find descriptions and use cases for AWS services.',
      'It enables customers to explore the different catalogs of AWS services.',
      'It simplifies organizing and governing commonly deployed IT services.',
      'It allows developers to deploy infrastructure on AWS using familiar programming languages.',
    ],
    correctAnswers: [2],
    explanation:
      'AWS Service Catalog lets administrators create and manage approved IT service portfolios (products, often backed by CloudFormation) that users can deploy with guardrails. It is not a general AWS service directory—that is documentation and the console; programming-language infrastructure deployment describes AWS CDK.',
  },
  {
    id: 'tech-220',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['iac', 'cloudformation', 'automation', 'examtopics', 'sample-exam'],
    question:
      'Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?',
    options: [
      'Use Software test automation tools.',
      'Use AWS CodeDeploy to build and automate your AWS environment.',
      'Use code to provision and operate your AWS infrastructure.',
      'Migrate all of your applications to a dedicated host.',
    ],
    correctAnswers: [2],
    explanation:
      'Infrastructure as Code (IaC)—for example AWS CloudFormation or AWS CDK—uses templates or code to provision and update AWS resources consistently, reducing manual steps and human error. Test automation validates application behavior but does not define infrastructure; CodeDeploy automates application deployments, not full environment provisioning; dedicated hosts change tenancy model, not automation of environment creation.',
  },
  {
    id: 'tech-221',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloud-directory', 'directory', 'examtopics', 'sample-exam'],
    question: 'Which of the below options is true of Amazon Cloud Directory?',
    options: [
      'Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.',
      'Amazon Cloud Directory enables the analysis of video and data streams in real time.',
      'Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.',
      'Amazon Cloud Directory allows for registration and management of domain names.',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Cloud Directory is a highly scalable directory for organizing application data into flexible hierarchies with multiple dimensions (for example organizational charts or device registries). Real-time stream analytics describes Kinesis; Active Directory sign-in describes AWS Directory Service or IAM Identity Center federation; domain registration describes Route 53.',
  },
  {
    id: 'tech-222',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['serverless', 'lambda', 'dynamodb', 'examtopics', 'sample-exam'],
    question: 'Which of the following AWS offerings are serverless services? (Choose TWO)',
    options: [
      'Amazon EC2.',
      'AWS Lambda.',
      'Amazon DynamoDB.',
      'Amazon EMR.',
      'Amazon RDS.',
    ],
    correctAnswers: [1, 2],
    explanation:
      'AWS Lambda runs code without provisioning servers—you pay per invocation and duration. Amazon DynamoDB is a fully managed serverless NoSQL database that scales automatically. EC2 requires you to manage instances; EMR runs big data clusters on EC2; RDS is a managed relational database that typically runs on provisioned database instances rather than a serverless model on this exam.',
  },
  {
    id: 'tech-223',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['opsworks', 'chef', 'ec2', 'configuration', 'examtopics', 'sample-exam'],
    question:
      'Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?',
    options: ['AWS Config.', 'AWS OpsWorks.', 'AutoScaling.', 'AWS CloudFormation.'],
    correctAnswers: [1],
    explanation:
      'AWS OpsWorks is a configuration management service that supports Chef and Puppet to automate how applications are configured on EC2 and on-premises servers. AWS Config records resource configuration compliance over time; Auto Scaling adjusts capacity; CloudFormation provisions infrastructure from templates but does not run Chef recipes for instance configuration.',
  },
  {
    id: 'tech-224',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloudfront', 'cloudwatch', 'monitoring', 'examtopics', 'sample-exam'],
    question:
      'Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?',
    options: ['AWS WAF.', 'Amazon CloudWatch.', 'AWS Cloud9.', 'AWS CloudTrail.'],
    correctAnswers: [1],
    explanation:
      'Amazon CloudFront publishes metrics to Amazon CloudWatch—including request counts, bytes served, and error rates—for HTTP and HTTPS traffic through the distribution. AWS WAF filters web requests but is not the primary monitoring dashboard for CloudFront request metrics; Cloud9 is a cloud IDE; CloudTrail logs AWS API management calls, not end-user HTTP/HTTPS requests to CloudFront edge locations.',
  },
  {
    id: 'tech-225',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['lambda', 'serverless', 'examtopics', 'sample-exam'],
    question:
      'Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)',
    options: [
      'Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.',
      'Lambda natively supports a number of programming languages such as Node.js, Python, and Java.',
      "Lambda is AWS' proprietary programming language for microservices.",
      "Lambda doesn't support programming languages; it is a serverless compute service.",
      'Lambda can support any programming language using an API.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'AWS Lambda natively supports several runtimes (including Node.js, Python, Java, .NET, Go, and Ruby) and can run other languages through custom runtimes or container images that implement the Lambda Runtime API. Lambda is a serverless compute service, not a programming language itself, and it clearly executes code—you do not need third-party converters limited to Python and Node.js.',
  },
  {
    id: 'tech-226',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'ec2', 'sql-server', 'migration', 'examtopics', 'sample-exam'],
    question:
      'A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)',
    options: [
      'AWS Fargate.',
      'Amazon Elastic Compute Cloud.',
      'Amazon RDS.',
      'AWS Database Migration service (DMS).',
      'AWS Lambda.',
    ],
    correctAnswers: [1, 2],
    explanation:
      'You can run Microsoft SQL Server on Amazon EC2 (self-managed on Windows or Linux) or as a managed database with Amazon RDS for SQL Server. AWS DMS helps migrate data to AWS but does not host the ongoing database workload. Fargate runs containers; Lambda is serverless functions—not primary platforms for running SQL Server databases on this exam.',
  },
  {
    id: 'tech-227',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['route-53', 'ec2', 'health-checks', 'examtopics', 'sample-exam'],
    question: 'Which AWS Service can perform health checks on Amazon EC2 instances?',
    options: [
      'AWS CloudFormation.',
      'Amazon Route 53.',
      'Amazon Chime.',
      'Amazon Aurora.',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Route 53 health checks monitor the health of endpoints such as EC2 instances, load balancers, and websites (HTTP, HTTPS, or TCP) and can drive DNS routing and failover decisions. CloudFormation provisions infrastructure; Chime is a communications service; Aurora is a relational database engine—not an EC2 health-check service on this exam item.',
  },
  {
    id: 'tech-228',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['migration', 'sms', 'examtopics', 'sample-exam'],
    question:
      'You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?',
    options: [
      'AWS File Transfer Acceleration.',
      'AWS Server Migration Service.',
      'AWS Database Migration Service.',
      'AWS Application Discovery Service.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Server Migration Service (SMS) automates, schedules, and tracks incremental replication of live on-premises servers to AWS so you can migrate many workloads to EC2. AWS DMS focuses on database migration; Application Discovery Service inventories on-premises environments for planning but does not perform the server migrations; S3 Transfer Acceleration speeds uploads to S3, not bulk VM workload migration.',
  },
  {
    id: 'tech-229',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['cloudformation', 'iac', 'examtopics', 'sample-exam'],
    question: 'What are some key benefits of using AWS CloudFormation? (Choose TWO)',
    options: [
      'It helps AWS customers deploy their applications without worrying about the underlying infrastructure.',
      'It applies advanced IAM security features automatically.',
      'It automates the provisioning and updating of your infrastructure in a safe and controlled manner.',
      'It allows you to model your entire infrastructure in just a text file.',
      'It compiles and builds application code in a timely manner.',
    ],
    correctAnswers: [2, 3],
    explanation:
      'CloudFormation uses JSON or YAML templates to describe AWS resources (Infrastructure as Code) and automates create, update, and delete operations in a repeatable, controlled way—including change sets and stack rollback. It defines infrastructure rather than hiding it entirely (platform services like Elastic Beanstalk abstract more of the stack); IAM in templates must be authored deliberately; building application code is the role of services such as CodeBuild.',
  },
  {
    id: 'tech-230',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['serverless', 'rds', 'emr', 'examtopics', 'sample-exam'],
    question: 'Select the services that are server-based: (Choose TWO)',
    options: [
      'Amazon RDS.',
      'Amazon DynamoDB.',
      'AWS Lambda.',
      'AWS Fargate.',
      'Amazon EMR.',
    ],
    correctAnswers: [0, 4],
    explanation:
      'Amazon RDS runs on provisioned database instances (EC2-backed infrastructure you size and manage at the instance layer). Amazon EMR launches clusters of EC2 instances to run big data frameworks such as Spark and Hadoop. DynamoDB, Lambda, and Fargate are serverless—you do not provision or manage the underlying servers for those services on the exam.',
  },
  {
    id: 'tech-231',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['codebuild', 'cicd', 'practice-exam-7', 'sample-exam'],
    question: 'Which AWS service helps developers compile and test their code?',
    options: [
      'AWS CodeDeploy.',
      'AWS CodeCommit.',
      'CloudEndure.',
      'AWS CodeBuild.',
    ],
    correctAnswers: [3],
    explanation:
      'AWS CodeBuild is a fully managed build service that compiles source code, runs tests, and produces deployable artifacts. CodeDeploy releases software; CodeCommit hosts Git repositories; CloudEndure is a migration/disaster recovery tool, not a build service.',
  },
  {
    id: 'tech-232',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloudfront', 'cdn', 'practice-exam-7', 'sample-exam'],
    question: 'What does the Amazon CloudFront service provide? (Choose TWO)',
    options: [
      'Tracks user activity and APl usage.',
      'Increases application availability by caching at the edge.',
      'Enables faster disaster recovery.',
      'Stores archived data at very low costs.',
      'Delivers content to end users with low latency.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'Amazon CloudFront is a CDN that caches content at edge locations worldwide, improving availability and delivering low-latency responses to users. CloudTrail tracks API activity; disaster recovery and archival storage are not CloudFront’s primary functions—those involve backup, replication, and storage classes such as Glacier.',
  },
  {
    id: 'tech-233',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'database', 'practice-exam-7', 'sample-exam'],
    question:
      'An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?',
    options: ['RedShift.', 'RDS.', 'CloudHSM.', 'DMS.'],
    correctAnswers: [1],
    explanation:
      'Amazon RDS provides managed relational databases (MySQL, PostgreSQL, Oracle, SQL Server, etc.) with full ACID transaction support. Redshift is an analytics warehouse; CloudHSM manages hardware encryption keys; DMS migrates databases—it does not serve as the primary transactional database.',
  },
  {
    id: 'tech-234',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'database-engines', 'practice-exam-7', 'sample-exam'],
    question:
      'Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?',
    options: ['PostgreSQL.', 'Oracle.', 'Microsoft SQL Server.', 'Teradata.'],
    correctAnswers: [3],
    explanation:
      'Amazon RDS supports engines such as PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and Db2—not Teradata. Teradata workloads typically run on EC2, partner solutions, or Teradata Vantage on AWS rather than as a native RDS engine option.',
  },
  {
    id: 'tech-235',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['lightsail', 'wordpress', 'practice-exam-7', 'sample-exam'],
    question:
      'For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?',
    options: [
      'Run WordPress on an Amazon Lightsail instance.',
      'Install WordPress on an Amazon EC2 instance.',
      'Use the Amazon S3 Web hosting feature.',
      'Host the website directly on AWS Cloud Development Kit (AWS CDK).',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Lightsail offers simple virtual private servers with one-click WordPress blueprints, flat pricing, and minimal setup—ideal for beginners. EC2 requires more manual configuration; S3 static hosting does not run dynamic WordPress PHP; CDK is infrastructure-as-code, not the easiest starting path.',
  },
  {
    id: 'tech-236',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ec2', 'database', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following services allows you to install and run custom relational database software?',
    options: ['Amazon EC2.', 'Amazon Cognito.', 'Amazon RDS.', 'Amazon Inspector.'],
    correctAnswers: [0],
    explanation:
      'Amazon EC2 gives full control of the operating system so you can install any relational database engine or custom configuration. RDS runs AWS-managed database engines with limited customization; Cognito is for user identity; Inspector scans for vulnerabilities.',
  },
  {
    id: 'tech-237',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['lambda', 'serverless', 'practice-exam-7', 'sample-exam'],
    question: 'Which of the following is NOT a benefit of using AWS Lambda?',
    options: [
      'AWS Lambda runs code without provisioning or managing servers.',
      'AWS Lambda provides resizable compute capacity in the cloud.',
      'There is no charge when your AWS Lambda code is not running.',
      'AWS Lambda can be called directly from any mobile app.',
    ],
    correctAnswers: [3],
    explanation:
      'Per this practice exam item, calling Lambda directly from a mobile app is not listed as a core Lambda benefit—production mobile integrations typically use API Gateway or similar endpoints with authentication. Lambda runs without servers, charges only for execution time, and auto-scales; “resizable compute capacity” describes EC2-style capacity planning more than Lambda’s execution model.',
  },
  {
    id: 'tech-238',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloudfront', 's3', 'latency', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)',
    options: [
      'Store media assets in the region closest to your end users.',
      'Store media assets on an additional EBS volume and increase the capacity of your server.',
      'Replicate media assets to at least two availability zones.',
      'Reduce the size of media assets using the Amazon Elastic Transcoder.',
      'Store media assets in S3 and use CloudFront to distribute these assets.',
    ],
    correctAnswers: [0, 4],
    explanation:
      'Place data in a Region close to users and front S3 with CloudFront so content is cached at edge locations near viewers. Extra EBS capacity on a single server does not reduce global latency; Multi-AZ replication improves availability within a Region, not necessarily edge proximity; transcoding changes format/size but is not the primary latency pattern in this answer.',
  },
  {
    id: 'tech-239',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['serverless', 'fargate', 'lambda', 'practice-exam-7', 'sample-exam'],
    question: 'Which of the following compute resources are serverless? (Choose TWO)',
    options: [
      'Amazon EC2.',
      'AWS Fargate.',
      'AWS Lambda.',
      'Amazon ECS.',
      'Amazon EMR.',
    ],
    correctAnswers: [1, 2],
    explanation:
      'AWS Fargate runs containers without managing servers; AWS Lambda runs functions without provisioning infrastructure. EC2 requires instance management; ECS on EC2 launch type uses managed clusters on servers you operate; EMR runs big data jobs on EC2 clusters.',
  },
  {
    id: 'tech-240',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloudwatch', 'ec2', 'monitoring', 'practice-exam-7', 'sample-exam'],
    question: 'Which AWS service collects metrics from running EC2 instances?',
    options: [
      'Amazon Inspector.',
      'Amazon CloudWatch.',
      'AWS CloudFormation.',
      'AWS CloudTrail.',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon CloudWatch collects and monitors metrics (CPU, network, disk, custom metrics) from EC2 and other AWS services. Inspector assesses vulnerabilities; CloudFormation provisions infrastructure; CloudTrail logs API calls.',
  },
  {
    id: 'tech-241',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['dms', 'migration', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following AWS services would help you migrate on-premise databases to AWS?',
    options: [
      'AWS DMS.',
      'Amazon S3 Transfer Acceleration.',
      'AWS Directory Service.',
      'AWS Transit Gateway.',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Database Migration Service (DMS) replicates data from on-premises and other sources to AWS databases with minimal downtime. S3 Transfer Acceleration speeds object uploads; Directory Service hosts Active Directory; Transit Gateway connects networks—it does not migrate database contents.',
  },
  {
    id: 'tech-242',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['autoscaling', 'ec2', 'practice-exam-7', 'sample-exam'],
    question:
      'Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?',
    options: [
      'Auto Scaling.',
      'ELB.',
      'Amazon Route53.',
      'Amazon Elastic Container Service.',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon EC2 Auto Scaling adjusts the number of instances (and can use mixed instance policies) based on demand metrics, changing aggregate CPU and memory capacity. Elastic Load Balancing distributes traffic; Route 53 is DNS; ECS orchestrates containers but Auto Scaling is the direct answer for dynamic EC2 capacity.',
  },
  {
    id: 'tech-243',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['ecs', 'ec2', 'containers', 'practice-exam-8', 'sample-exam'],
    question:
      'A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?',
    options: [
      'EC2 launch type.',
      'Fargate launch type.',
      'Lightsail launch type.',
      'Lambda launch type.',
    ],
    correctAnswers: [0],
    explanation:
      'ECS with the EC2 launch type runs containers on EC2 instances you manage, giving full visibility and control of the host cluster. Fargate is serverless containers without managing servers; Lightsail and Lambda are not ECS launch types.',
  },
  {
    id: 'tech-244',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['elastic-beanstalk', 'deployment', 'practice-exam-8', 'sample-exam'],
    question:
      'You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?',
    options: [
      'Amazon Simple Storage Service.',
      'AWS Elastic Beanstalk.',
      'AWS CodeCommit.',
      'Amazon Elastic File System.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Elastic Beanstalk uploads code and automatically handles deployment, capacity provisioning, load balancing, and scaling. S3 stores objects; CodeCommit hosts Git repos; EFS provides shared file storage—they do not deploy and scale web applications end-to-end.',
  },
  {
    id: 'tech-245',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloudwatch', 'alarms', 'ec2', 'practice-exam-8', 'sample-exam'],
    question:
      'A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?',
    options: [
      'Use CloudFront to monitor the CPU usage.',
      'Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.',
      'Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.',
      'Use SNS to monitor the utilization of the server.',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon CloudWatch Alarms watch EC2 CPUUtilization metrics and can notify via SNS when the threshold is breached. CloudFront is a CDN; Config tracks configuration compliance, not real-time CPU alerting; SNS delivers messages but does not collect CPU metrics by itself.',
  },
  {
    id: 'tech-246',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ebs', 'ec2', 'database', 'practice-exam-8', 'sample-exam'],
    question:
      'What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?',
    options: [
      'Amazon EBS.',
      'Amazon RDS.',
      'You can’t run a database inside an Amazon EC2 instance.',
      'Amazon DynamoDB.',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon EBS provides persistent block storage attached to EC2—suited to self-managed databases with frequent read/write changes. RDS is a separate managed service, not storage attached to your EC2 instance; databases can run on EC2; DynamoDB is a managed NoSQL service, not block storage for EC2-hosted DBs.',
  },
  {
    id: 'tech-247',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['lambda', 'pricing', 'practice-exam-8', 'sample-exam'],
    question: 'What factors determine how you are charged when using AWS Lambda? (Choose TWO)',
    options: [
      'Storage consumed.',
      'Number of requests to your functions.',
      'Number of volumes.',
      'Placement groups.',
      'Compute time consumed.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'Lambda bills for the number of requests and the duration of execution (GB-seconds of compute time). Provisioned concurrency and ephemeral storage can add charges, but EBS volumes and placement groups are EC2 concepts, not Lambda pricing dimensions on this exam.',
  },
  {
    id: 'tech-248',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'database', 'practice-exam-8', 'sample-exam'],
    question:
      'Which database service should you use if your application and data schema require “joins” or complex transactions?',
    options: [
      'Amazon RDS.',
      'AWS Outposts.',
      'Amazon DocumentDB.',
      'Amazon DynamoDB.',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon RDS provides managed relational databases with SQL joins and ACID transactions. Outposts is on-premises AWS infrastructure; DocumentDB and DynamoDB are NoSQL stores with different query models—not primary choices for relational joins on this exam.',
  },
  {
    id: 'tech-249',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['glacier', 'storage', 'practice-exam-8', 'sample-exam'],
    question: 'What should you consider when storing data in Amazon Glacier?',
    options: [
      'Amazon Glacier only accepts data in a compressed format.',
      'Glacier can only be used to store frequently accessed data and data archives.',
      'Amazon Glacier does not provide immediate retrieval of data.',
      'Attach Glacier to an EC2 Instance to be able to store data.',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon S3 Glacier storage classes are for archival data with retrieval times from minutes to hours—not immediate access like S3 Standard. Data need not be pre-compressed; Glacier is for infrequent access; you do not attach Glacier as a block device to EC2.',
  },
  {
    id: 'tech-250',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['efs', 'storage', 'practice-exam-8', 'sample-exam'],
    question:
      'A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?',
    options: [
      'Amazon Elastic Block Store.',
      'AWS Storage Gateway.',
      'Amazon Elastic File System.',
      'S3.',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon EFS is a managed NFS file system that scales throughput and can be mounted concurrently by many EC2 instances. EBS volumes attach to one instance (or multi-attach in limited cases); Storage Gateway hybridizes on-premises storage; S3 is object storage, not shared POSIX file access for compute clusters.',
  },
  {
    id: 'tech-251',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ebs', 'durability', 'practice-exam-8', 'sample-exam'],
    question:
      'What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?',
    options: ['Elasticity.', 'Durability.', 'Traceability.', 'Accessibility.'],
    correctAnswers: [1],
    explanation:
      'EBS automatically replicates data within the AZ to protect against hardware failure, improving durability of block storage. Elasticity is scaling capacity; traceability is audit visibility; accessibility is reachability—not the primary benefit of intra-AZ replication.',
  },
  {
    id: 'tech-252',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['elasticache', 'practice-exam-8', 'sample-exam'],
    question: 'What is the Amazon ElastiCache service used for? (Choose TWO)',
    options: [
      'Provide an in-memory data storage service.',
      'Reduce delivery costs using Edge Locations.',
      'Improve web application performance.',
      'Provide a Chef-compatible cache to speed up application response.',
      'Distribute requests to multiple instances.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Amazon ElastiCache offers managed Redis or Memcached in-memory caches to reduce database load and latency, improving application performance. Edge delivery describes CloudFront; Chef compatibility describes OpsWorks; load distribution describes ELB.',
  },
  {
    id: 'tech-253',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['s3', 'storage', 'practice-exam-8', 'sample-exam'],
    question:
      'What is the maximum amount of data that can be stored in S3 in a single AWS account?',
    options: [
      '100 PetaBytes.',
      'Virtually unlimited storage.',
      '5TeraBytes.',
      '10 Exabytes.',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon S3 is designed for virtually unlimited storage capacity—you scale usage as needed without a fixed account maximum. Individual objects have size limits (5 TB per object), but total bucket/account storage is not capped at a fixed petabyte value on the exam.',
  },
  {
    id: 'tech-254',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['quick-start', 'deployment', 'practice-exam-9', 'sample-exam'],
    question:
      'An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?',
    options: [
      'AWS Well-Architected Framework documentation.',
      'Amazon CloudFront.',
      'AWS CodeCommit.',
      'AWS Quick Start reference deployments.',
    ],
    correctAnswers: [3],
    explanation:
      'AWS Quick Starts are automated reference deployments built by AWS solutions architects for popular workloads—you can launch them quickly from templates. Well-Architected is design guidance; CloudFront is a CDN; CodeCommit is source control.',
  },
  {
    id: 'tech-255',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'practice-exam-9', 'sample-exam'],
    question:
      'What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?',
    options: [
      'It simplifies relational database administration tasks.',
      'It provides 99.99999999999% reliability and durability.',
      'It automatically scales databases for loads.',
      'It enables users to dynamically adjust CPU and RAM resources.',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon RDS automates routine administration such as backups, patching, and failover for supported engines. Eleven-nines durability describes S3; automatic scaling is more characteristic of Aurora Serverless or DynamoDB; instance class changes require action and are not instant dynamic CPU/RAM sliders.',
  },
  {
    id: 'tech-256',
    domain: 'cloud-technology',
    task: '3.6',
    tags: ['systems-manager', 'patching', 'practice-exam-9', 'sample-exam'],
    question:
      'A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?',
    options: [
      'Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.',
      'Enable automate patching for the instances using the Amazon RDS console.',
      'In AWS Config. configure a rule for the instances and the required patch level.',
      'Use AWS Systems Manager to automate database patching according to a schedule.',
    ],
    correctAnswers: [3],
    explanation:
      'AWS Systems Manager Patch Manager can automate OS and application patching on EC2 on a schedule. RDS console patching applies to RDS instances, not self-managed databases on EC2; manual monthly login is inefficient; Config evaluates compliance but does not apply patches by itself.',
  },
  {
    id: 'tech-257',
    domain: 'cloud-technology',
    task: '3.1',
    tags: ['sdk', 'practice-exam-9', 'sample-exam'],
    question:
      'Which mechanism allows developers to access AWS services from application code?',
    options: [
      'AWS Software Development Kit.',
      'AWS Management Console.',
      'AWS CodePipeline.',
      'AWS Config.',
    ],
    correctAnswers: [0],
    explanation:
      'AWS SDKs provide language-specific libraries for calling AWS service APIs from application code. The console is a web UI; CodePipeline orchestrates CI/CD; Config tracks resource configuration compliance.',
  },
  {
    id: 'tech-258',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloudwatch', 'monitoring', 'practice-exam-9', 'sample-exam'],
    question: 'What is Amazon CloudWatch?',
    options: [
      'A code repository with customizable build and team commit features.',
      'A metrics repository with customizable notification thresholds and channels.',
      'A security configuration repository with threat analytics.',
      'A rule repository of a web application firewall with automated vulnerability prevention features.',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon CloudWatch collects metrics and logs, and alarms can notify through SNS when thresholds are breached. CodeCommit is source control; threat analytics describes GuardDuty; WAF rules describe AWS WAF.',
  },
  {
    id: 'tech-259',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['hybrid', 'storage-gateway', 'direct-connect', 'practice-exam-9', 'sample-exam'],
    question:
      'Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)',
    options: [
      'Amazon EBS.',
      'Amazon Connect.',
      'AWS Storage Gateway.',
      'Amazon CloudFront.',
      'AWS Direct Connect.',
    ],
    correctAnswers: [2, 4],
    explanation:
      'AWS Storage Gateway connects on-premises applications to AWS cloud storage; AWS Direct Connect provides dedicated network links to AWS. EBS is Regional block storage in AWS; Connect is a contact center; CloudFront is a global CDN.',
  },
  {
    id: 'tech-260',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['elb', 'scaling', 'practice-exam-9', 'sample-exam'],
    question:
      'Which of the following services will automatically scale with an expected increase in web traffic?',
    options: [
      'AWS CodePipeline.',
      'Elastic Load Balancing.',
      'Amazon EBS.',
      'AWS Direct Connect.',
    ],
    correctAnswers: [1],
    explanation:
      'Elastic Load Balancing automatically scales to handle incoming request volume and distributes traffic across targets. CodePipeline is CI/CD; EBS is block storage; Direct Connect is a network link—it does not scale with HTTP traffic.',
  },
  {
    id: 'tech-261',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'elasticache', 'managed-services', 'practice-exam-9', 'sample-exam'],
    question:
      'What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?',
    options: [
      'They require the customer to monitor and replace failing instances.',
      'They have better performance than customer-managed services.',
      'They simplify patching and updating underlying OSs.',
      'They do not require the customer to optimize instance type or size selections.',
    ],
    correctAnswers: [2],
    explanation:
      'Managed services such as RDS and ElastiCache offload routine operations including patching and maintenance of the underlying platform. Customers still right-size instances and monitor workloads; performance depends on configuration—not a blanket guarantee over self-managed stacks.',
  },
  {
    id: 'tech-262',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['hybrid', 'route-53', 'vpn', 'practice-exam-9', 'sample-exam'],
    question:
      'Which services can be used across hybrid AWS Cloud architectures? (Select TWO)',
    options: [
      'Amazon Route 53.',
      'Virtual Private Gateway.',
      'Classic Load Balancer.',
      'Auto Scaling.',
      'Amazon CloudWatch default metrics.',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Amazon Route 53 resolves DNS for hybrid endpoints (failover between on-premises and AWS). A virtual private gateway terminates Site-to-Site VPN connections into your VPC. Classic Load Balancers and Auto Scaling primarily serve AWS VPC workloads; CloudWatch can monitor hybrid nodes but is not a hybrid connectivity service.',
  },
  {
    id: 'tech-263',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['elb', 'practice-exam-9', 'sample-exam'],
    question: 'Which statement best describes Elastic Load Balancing?',
    options: [
      'It translates a domain name into an IP address using DNC.',
      'It distributes incoming application traffic across one or more Amazon EC2 instances.',
      'It collects metrics on connected Amazon EC2 instances.',
      'It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.',
    ],
    correctAnswers: [1],
    explanation:
      'Elastic Load Balancing spreads incoming traffic across healthy targets in one or more AZs. Route 53 performs DNS; CloudWatch collects metrics; Auto Scaling adjusts instance count—often used with ELB but not ELB itself.',
  },
  {
    id: 'tech-264',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'cloudformation', 'practice-exam-10', 'sample-exam'],
    question:
      'Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)',
    options: [
      'AWS Concierge.',
      'AWS CloudFormation.',
      'Amazon Simple Storage Service (Amazon S3).',
      'Amazon EC2 Auto Scaling.',
      'AWS Management Console.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'You can create RDS databases through the AWS Management Console or automate provisioning with AWS CloudFormation templates. Concierge is Enterprise billing support; S3 is object storage; Auto Scaling adjusts EC2 capacity—it does not launch RDS clusters.',
  },
  {
    id: 'tech-265',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloudwatch', 'logs', 'practice-exam-10', 'sample-exam'],
    question:
      'Which of the following are features of Amazon CloudWatch Logs? (Select TWO)',
    options: [
      'Summaries by Amazon Simple Notification Service (Amazon SNS).',
      'Free Amazon Elasticsearch Service analytics.',
      'Provided at no charge.',
      'Real-time monitoring.',
      'Adjustable retention.',
    ],
    correctAnswers: [3, 4],
    explanation:
      'CloudWatch Logs ingests log events in near real time and lets you set retention policies per log group. SNS can notify on alarms but is not a built-in Logs summary feature; OpenSearch integration and storage incur charges beyond limited free tiers.',
  },
  {
    id: 'tech-266',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['lambda', 'serverless', 'practice-exam-10', 'sample-exam'],
    question: 'Which of the following is an AWS-managed compute service?',
    options: [
      'Amazon SWF.',
      'Amazon EC2.',
      'AWS Lambda.',
      'Amazon Aurora.',
    ],
    correctAnswers: [2],
    explanation:
      'AWS Lambda is a fully managed serverless compute service—AWS runs and scales the execution environment. EC2 requires you to manage instances; SWF coordinates workflows; Aurora is a managed database, not general compute.',
  },
  {
    id: 'tech-267',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'efs', 'storage', 'practice-exam-10', 'sample-exam'],
    question:
      'Which AWS services should be used for read/write of constantly changing data? (Select TWO)',
    options: [
      'Amazon Glacier.',
      'Amazon RDS.',
      'AWS Snowball.',
      'Amazon Redshift.',
      'Amazon EFS.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'Amazon RDS supports transactional read/write workloads for relational data; Amazon EFS provides shared file storage with concurrent read/write access from many instances. Glacier and Snowball are for archive/offline transfer; Redshift is an analytics warehouse, not general OLTP read/write.',
  },
  {
    id: 'tech-268',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['elasticache', 'practice-exam-10', 'sample-exam'],
    question:
      'Which service is best for storing common database query results, which helps to alleviate database access load?',
    options: [
      'Amazon Machine Learning.',
      'Amazon SQS.',
      'Amazon ElastiCache.',
      'Amazon EC2 Instance Store.',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon ElastiCache (Redis or Memcached) caches frequent query results in memory to reduce database read load. SageMaker/ML is for models; SQS is a message queue; instance store is ephemeral local disk—not a shared query cache layer.',
  },
  {
    id: 'tech-269',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['athena', 's3', 'analytics', 'practice-exam-10', 'sample-exam'],
    question:
      'Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?',
    options: [
      'AWS Glue.',
      'AWS Data Pipeline.',
      'Amazon CloudSearch.',
      'Amazon Athena.',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon Athena runs serverless SQL queries directly against data in S3. Glue catalogs and prepares data; Data Pipeline moves data between services; CloudSearch is a managed search service, not SQL-on-S3 analytics.',
  },
  {
    id: 'tech-270',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloudtrail', 'cloudwatch', 'practice-exam-10', 'sample-exam'],
    question:
      'Which AWS services can be used to gather information about AWS account activity? (Select TWO)',
    options: [
      'Amazon CloudFront.',
      'AWS Cloud9.',
      'AWS CloudTrail.',
      'AWS CloudHSM.',
      'Amazon CloudWatch.',
    ],
    correctAnswers: [2, 4],
    explanation:
      'CloudTrail logs API and console activity for audit; CloudWatch collects metrics, logs, and alarms about resource behavior. CloudFront delivers content; Cloud9 is an IDE; CloudHSM manages hardware encryption keys.',
  },
  {
    id: 'tech-271',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['s3', 'storage', 'practice-exam-10', 'sample-exam'],
    question: 'Which of the following are characteristics of Amazon S3? (Select TWO)',
    options: [
      'A global file system.',
      'An object store.',
      'A local file store.',
      'A network file system.',
      'A durable storage system.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'Amazon S3 is a durable object storage service storing objects in buckets—not a POSIX file system. EFS and FSx provide shared file systems; local file store describes on-instance disk.',
  },
  {
    id: 'tech-272',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['ec2', 'parallel', 'media', 'practice-exam-10', 'sample-exam'],
    question:
      'What approach to transcoding a large number of individual video files adheres to AWS architecture principles?',
    options: [
      'Using many instances in parallel.',
      'Using a single large instance during off-peak hours.',
      'Using dedicated hardware.',
      'Using a large GPU instance type.',
    ],
    correctAnswers: [0],
    explanation:
      'Parallelizing work across many workers (for example EC2, Lambda, or Elastic Transcoder jobs) scales horizontally and finishes faster—aligned with cloud best practices. One big instance is a single point of failure; dedicated hardware opposes cloud elasticity.',
  },
  {
    id: 'tech-273',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['rekognition', 'ml', 'practice-exam-10', 'sample-exam'],
    question: 'What time-savings advantage is offered with the use of Amazon Rekognition?',
    options: [
      'Amazon Rekognition provides automatic watermarking of images.',
      'Amazon Rekognition provides automatic detection of objects appearing in pictures.',
      'Amazon Recognition provides the ability to resize millions of images automatically.',
      'Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Rekognition uses ML to detect objects, faces, text, and scenes in images and video without manual labeling. It does not watermark or resize images at scale; Mechanical Turk is a separate crowdsourcing service.',
  },
  {
    id: 'tech-274',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'managed-services', 'practice-exam-10', 'sample-exam'],
    question:
      'Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?',
    options: [
      'AWS manages the data stored in Amazon RDS tables.',
      'AWS manages the maintenance of the operating system.',
      'AWS automatically scales up instance types on demand.',
      'AWS manages the database type.',
    ],
    correctAnswers: [1],
    explanation:
      'RDS automates OS patching and maintenance for the database instance. Customers manage schema, queries, and data; you choose the engine and instance class—automatic instance-type scaling without action is not a core RDS feature on the exam.',
  },
  {
    id: 'tech-275',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['s3', 'versioning', 'practice-exam-10', 'sample-exam'],
    question:
      'Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?',
    options: [
      'Amazon Glacier.',
      'AWS Storage Gateway.',
      'Amazon S3.',
      'Amazon EBS.',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon S3 is object storage with immediate access, optional versioning, and lifecycle rules to transition or expire objects. Glacier is for archival retrieval delays; Storage Gateway hybridizes on-premises access; EBS is block storage for EC2.',
  },
  {
    id: 'tech-276',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['elb', 'load-balancing', 'practice-exam-11', 'sample-exam'],
    question: 'Why is it beneficial to use Elastic Load Balancers with applications?',
    options: [
      'They allow for the conversion from Application Load Balancers to Classic Load Balancers.',
      'They are capable of handling constant changes in network traffic patterns.',
      'They automatically adjust capacity.',
      'They are provided at no charge to users.',
    ],
    correctAnswers: [1],
    explanation:
      'Elastic Load Balancing distributes incoming traffic across targets and adapts as request rates change, improving availability and fault tolerance. ELB is not free; capacity scaling of EC2 fleets is typically handled by Auto Scaling, not the load balancer itself.',
  },
  {
    id: 'tech-277',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['ec2', 'instance-store', 'storage', 'practice-exam-11', 'sample-exam'],
    question:
      'Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?',
    options: [
      'Amazon EBS.',
      'Amazon EC2 instance store.',
      'Amazon EFS.',
      'Amazon S3.',
    ],
    correctAnswers: [1],
    explanation:
      'EC2 instance store volumes use local disk tied to the host and are lost when the instance stops or terminates (unless data was copied elsewhere). EBS, EFS, and S3 persist independently of a single instance lifecycle.',
  },
  {
    id: 'tech-278',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['serverless', 'practice-exam-11', 'sample-exam'],
    question: 'Which services are parts of the AWS serverless platform?',
    options: [
      'Amazon EC2, Amazon S3, Amazon Athena.',
      'Amazon Kinesis, Amazon SQS, Amazon EMR.',
      'AWS Step Functions, Amazon DynamoDB, Amazon SNS.',
      'Amazon Athena, Amazon Cognito, Amazon EC2.',
    ],
    correctAnswers: [2],
    explanation:
      'Step Functions orchestrates serverless workflows; DynamoDB is a serverless NoSQL database; SNS is a managed pub/sub messaging service without servers to patch. EC2, EMR, and always-on compute options are not serverless in the exam sense.',
  },
  {
    id: 'tech-279',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['aurora', 'rds', 'mysql', 'practice-exam-11', 'sample-exam'],
    question:
      'A customer needs to run a MySQL database that easily scales. Which AWS service should they use?',
    options: [
      'Amazon Aurora.',
      'Amazon Redshift.',
      'Amazon DynamoDB.',
      'Amazon ElastiCache.',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database that scales storage automatically and supports read replicas. Redshift is a data warehouse; DynamoDB is NoSQL; ElastiCache is in-memory caching.',
  },
  {
    id: 'tech-280',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['s3', 'cloudfront', 'video', 'practice-exam-11', 'sample-exam'],
    question:
      'Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)',
    options: [
      'API Gateway.',
      'Amazon S3.',
      'Amazon Elastic File System (EFS).',
      'Amazon Glacier.',
      'Amazon CloudFront.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'Store video objects in Amazon S3 and deliver them globally through Amazon CloudFront edge locations for low latency. Glacier is for archival; EFS is shared file storage; API Gateway is for APIs, not bulk media delivery.',
  },
  {
    id: 'tech-281',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['codecommit', 'devops', 'practice-exam-11', 'sample-exam'],
    question: 'Which service’s PRIMARY purpose is software version control?',
    options: [
      'Amazon CodeStar.',
      'AWS Command Line Interface (AWS CLI).',
      'Amazon Cognito.',
      'AWS CodeCommit.',
    ],
    correctAnswers: [3],
    explanation:
      'AWS CodeCommit is a managed Git repository for source code version control. CodeStar bundles CI/CD project setup; the CLI is a command-line tool; Cognito handles user authentication for apps.',
  },
  {
    id: 'tech-282',
    domain: 'cloud-technology',
    task: '3.4',
    tags: ['cloudformation', 'iac', 'practice-exam-11', 'sample-exam'],
    question: 'Which AWS service provides the ability to manage infrastructure as code?',
    options: [
      'AWS CodePipeline.',
      'AWS CodeDeploy.',
      'AWS Direct Connect.',
      'AWS CloudFormation.',
    ],
    correctAnswers: [3],
    explanation:
      'AWS CloudFormation (and CDK, which generates CloudFormation) provisions AWS resources from templates—true infrastructure as code. CodePipeline and CodeDeploy automate release pipelines and deployments; Direct Connect is a dedicated network link.',
  },
  {
    id: 'tech-283',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['rds', 'managed-services', 'practice-exam-11', 'sample-exam'],
    question: 'Which AWS managed service is used to host databases?',
    options: [
      'AWS Batch.',
      'AWS Artifact.',
      'AWS Data Pipeline.',
      'Amazon RDS.',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon RDS runs managed relational databases (MySQL, PostgreSQL, Oracle, SQL Server, MariaDB, Aurora). Batch runs batch jobs; Artifact hosts compliance documents; Data Pipeline moves and transforms data between AWS services.',
  },
  {
    id: 'tech-284',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['efs', 'storage', 'practice-exam-11', 'sample-exam'],
    question:
      'Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?',
    options: [
      'Amazon S3.',
      'Amazon Glacier.',
      'Amazon EBS.',
      'Amazon EFS.',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon EFS provides elastic NFS file storage mountable from multiple EC2 instances and on-premises via VPN or Direct Connect. S3 and Glacier are object storage; EBS is block storage for a single instance.',
  },
  {
    id: 'tech-285',
    domain: 'cloud-technology',
    task: '3.2',
    tags: ['glacier', 'backup', 'storage', 'practice-exam-11', 'sample-exam'],
    question:
      'Which AWS service should be used for long-term, low-cost storage of data backups?',
    options: [
      'Amazon RDS.',
      'Amazon Glacier.',
      'AWS Snowball.',
      'Amazon EBS.',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon S3 Glacier storage classes optimize infrequently accessed backup and archive data at low cost with retrieval times from minutes to hours. RDS hosts databases; Snowball is for large offline data transfer; EBS is higher-cost block storage for active workloads.',
  },
]
