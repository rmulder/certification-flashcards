import type { Card } from '../../../core/types'

/** CLF-C02 compute services — scenarios, comparisons, and architecture integration */
export const computeSupplementCards: Card[] = [
  {
    id: 'tech-126',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['lambda', 'event-driven', 'compute-focus'],
    question:
      'A company wants code to run automatically whenever a file is uploaded to Amazon S3, with no servers to manage. Which AWS compute service is the best fit?',
    options: [
      'AWS Lambda',
      'Amazon EC2 On-Demand',
      'Amazon ECS on EC2',
      'AWS Elastic Beanstalk',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda is event-driven serverless compute—ideal for automation, microservices, and triggers from S3, API Gateway, and other event sources without provisioning servers.',
  },
  {
    id: 'tech-127',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['lambda', 'pricing', 'compute-focus'],
    question:
      'Which statement best describes AWS Lambda pricing for intermittent workloads?',
    options: [
      'You pay for the number of requests and the duration your code runs (GB-seconds)',
      'You pay a fixed monthly fee per VPC regardless of usage',
      'You must purchase Reserved Instances for Lambda',
      'Lambda is always more expensive than EC2 for 24/7 workloads',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda charges per invocation and compute time, which is cost-effective for sporadic or short tasks. Steady always-on workloads are often cheaper on appropriately sized EC2 with Savings Plans or Reserved Instances.',
  },
  {
    id: 'tech-128',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ec2', 'comparison', 'compute-focus'],
    question:
      'A team needs full control of the operating system, custom drivers, and a web application running continuously 24/7. Which compute option is MOST appropriate?',
    options: [
      'Amazon EC2 instances',
      'AWS Lambda',
      'AWS Fargate for a single function',
      'Amazon S3 static website hosting only',
    ],
    correctAnswers: [0],
    explanation:
      'EC2 provides virtual servers with full OS control for long-running applications. Lambda is for short, event-driven code; Fargate runs containers; S3 static hosting does not replace dynamic server workloads.',
  },
  {
    id: 'tech-129',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ecs', 'eks', 'comparison', 'compute-focus'],
    question:
      'A company deploys many Docker microservices that must scale independently. Which AWS services are designed for container orchestration? (Select TWO)',
    options: [
      'Amazon ECS',
      'Amazon EKS',
      'Amazon EBS',
      'Amazon Route 53',
      'AWS Snowball',
    ],
    correctAnswers: [0, 1],
    explanation:
      'ECS is AWS-native container orchestration; EKS is managed Kubernetes. Both deploy and scale containerized applications. EBS is block storage; Route 53 is DNS; Snowball is offline data transfer.',
  },
  {
    id: 'tech-130',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['eks', 'kubernetes', 'compute-focus'],
    question:
      'An organization standardizes on Kubernetes APIs and tooling across clouds. Which AWS service should they use to run containers?',
    options: [
      'Amazon EKS',
      'Amazon ECS only',
      'AWS Lambda',
      'Amazon Lightsail',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon EKS provides a managed Kubernetes control plane compatible with standard Kubernetes workflows. ECS uses AWS-specific orchestration APIs.',
  },
  {
    id: 'tech-131',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['elastic-beanstalk', 'compute-focus'],
    question:
      'A developer wants to upload application code and have AWS handle capacity provisioning, load balancing, scaling, and health monitoring. Which service meets this need?',
    options: [
      'AWS Elastic Beanstalk',
      'Amazon EC2 without Auto Scaling',
      'AWS CloudFormation only',
      'Amazon S3',
    ],
    correctAnswers: [0],
    explanation:
      'Elastic Beanstalk is a PaaS-style service that deploys web apps in Java, .NET, Node.js, Python, and other platforms while managing the underlying infrastructure.',
  },
  {
    id: 'tech-132',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['fargate', 'ecs', 'compute-focus'],
    question:
      'A team runs containers on Amazon ECS but does not want to manage EC2 instances or cluster capacity. Which launch type should they use?',
    options: [
      'AWS Fargate',
      'EC2 launch type with manual capacity planning only',
      'Amazon EBS Cold HDD volumes',
      'AWS Direct Connect',
    ],
    correctAnswers: [0],
    explanation:
      'Fargate is the serverless compute engine for ECS and EKS—you specify task CPU and memory; AWS runs containers without you managing the underlying EC2 fleet.',
  },
  {
    id: 'tech-133',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ec2', 'auto-scaling', 'elb', 'compute-focus'],
    question:
      'A web application on Amazon EC2 experiences traffic spikes. Which combination helps maintain performance and cost efficiency? (Select TWO)',
    options: [
      'EC2 Auto Scaling',
      'Elastic Load Balancing',
      'Amazon Glacier',
      'AWS Artifact',
      'Disabling health checks',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Auto Scaling adjusts instance count based on demand; ELB distributes traffic across healthy instances. Together they support elastic, fault-tolerant web tiers.',
  },
  {
    id: 'tech-134',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ec2', 'vpc', 'compute-focus'],
    question:
      'Where do Amazon EC2 instances typically run for network isolation and custom subnets?',
    options: [
      'Inside an Amazon VPC',
      'Only in AWS edge locations',
      'Inside Amazon S3 buckets',
      'On the public internet without security groups',
    ],
    correctAnswers: [0],
    explanation:
      'EC2 instances launch into VPC subnets where you control IP ranges, route tables, security groups, and network ACLs.',
  },
  {
    id: 'tech-135',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['ec2', 'ebs', 'storage', 'compute-focus'],
    question:
      'An EC2 instance needs a persistent boot volume that survives instance stop and start. Which storage service should be attached?',
    options: [
      'Amazon EBS',
      'Amazon S3 Standard only',
      'Amazon CloudFront',
      'AWS Secrets Manager',
    ],
    correctAnswers: [0],
    explanation:
      'EBS provides block storage volumes for EC2 root and data disks. Instance store is ephemeral; S3 is object storage for files and static assets, not a boot disk.',
  },
  {
    id: 'tech-136',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['cloudwatch', 'monitoring', 'compute-focus'],
    question:
      'Which AWS service collects metrics and logs for Amazon EC2 instances and AWS Lambda functions to support monitoring and troubleshooting?',
    options: [
      'Amazon CloudWatch',
      'AWS CloudTrail only',
      'Amazon Inspector only',
      'AWS Pricing Calculator',
    ],
    correctAnswers: [0],
    explanation:
      'CloudWatch monitors operational health (CPU, memory, errors, custom metrics, logs). CloudTrail records API activity; Inspector scans for vulnerabilities; Pricing Calculator estimates costs.',
  },
  {
    id: 'tech-137',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['batch', 'spot', 'compute-focus'],
    question:
      'A company runs large fault-tolerant batch jobs and wants the lowest compute cost with acceptable interruption risk. Which options are MOST suitable? (Select TWO)',
    options: [
      'EC2 Spot Instances',
      'AWS Batch',
      'EC2 Dedicated Hosts for every job',
      'On-Demand Instances for all batch work',
      'Amazon RDS Multi-AZ',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Spot Instances offer steep discounts for interruptible work. AWS Batch runs batch jobs at scale and can use Spot capacity. Dedicated Hosts and always-on On-Demand are costlier for batch; RDS is a database service.',
  },
  {
    id: 'tech-138',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['comparison', 'compute-focus'],
    question:
      'Which workload is BEST suited for AWS Lambda rather than Amazon EC2?',
    options: [
      'Short-running image processing triggered by uploads a few thousand times per day',
      'A legacy application requiring a specific kernel module 24/7',
      'A game server with persistent TCP connections and low latency for hours',
      'A database server with large local SSD requirements',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda fits event-driven, short-duration tasks with variable traffic. Long-running, stateful, or OS-custom workloads typically need EC2, containers, or specialized services.',
  },
  {
    id: 'tech-139',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['compute', 'pricing-models', 'compute-focus'],
    question:
      'A startup has unpredictable traffic for a new web app and cannot forecast usage for a year. Which EC2 pricing model is the MOST flexible starting point?',
    options: [
      'On-Demand Instances',
      'All Upfront Reserved Instances for three years',
      'Spot Instances for the primary database',
      'Dedicated Hosts for every web server',
    ],
    correctAnswers: [0],
    explanation:
      'On-Demand has no commitment and pays per second—ideal until usage patterns stabilize. Reserved and Savings Plans need commitment; Spot is wrong for stateful primary databases; Dedicated Hosts target licensing/isolation needs.',
  },
  {
    id: 'tech-143',
    domain: 'cloud-technology',
    task: '3.3',
    tags: ['compute-optimizer', 'ec2', 'compute-focus', 'sample-exam'],
    question:
      'Which AWS service analyzes the configuration and utilization metrics of Amazon EC2 instances and provides recommendations for optimal instance types?',
    options: [
      'AWS Compute Optimizer',
      'AWS Cost Explorer',
      'Amazon Inspector',
      'AWS Config',
    ],
    correctAnswers: [0],
    explanation:
      'Compute Optimizer uses ML on utilization metrics (CPU, memory, network) to recommend right-sized EC2 instance types. Inspector finds vulnerabilities; Config tracks configuration compliance; Cost Explorer focuses on cost views and has limited right-sizing hints but is not the dedicated optimization service for EC2 metrics.',
  },
]
