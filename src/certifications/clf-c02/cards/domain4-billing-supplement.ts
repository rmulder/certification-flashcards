import type { Card } from '../../../core/types'

/** Additional CLF-C02 practice questions — sample exams & exam guide (Domain 4) */
export const billingSupplementCards: Card[] = [
  {
    id: 'bill-036',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['budgets', 'sns', 'alerts'],
    question:
      'A finance team wants email alerts when actual AWS spend exceeds 80% of a monthly budget. Which combination of services should they use?',
    options: [
      'AWS Budgets with Amazon SNS notifications',
      'AWS Cost Explorer only without alerts',
      'Amazon CloudWatch CPU alarms',
      'AWS CloudTrail with S3 lifecycle rules',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Budgets tracks spend against thresholds and can publish alerts to SNS, which delivers email, SMS, or Lambda notifications.',
  },
  {
    id: 'bill-037',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['savings-plans', 'pricing'],
    question:
      'Which pricing option provides flexible compute savings across EC2, Lambda, and Fargate with a committed hourly spend?',
    options: [
      'Savings Plans',
      'Dedicated Hosts only',
      'On-Demand with no commitment',
      'AWS Marketplace free tier',
    ],
    correctAnswers: [0],
    explanation:
      'Savings Plans offer lower prices in exchange for a one- or three-year hourly spend commitment, with flexibility across instance families and regions.',
  },
  {
    id: 'bill-038',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'tam'],
    question:
      'Which AWS Support plan includes a designated Technical Account Manager (TAM)?',
    options: [
      'Enterprise Support',
      'Developer Support',
      'Basic Support',
      'Business Support without add-ons',
    ],
    correctAnswers: [0],
    explanation:
      'Enterprise and Enterprise On-Ramp Support include TAM access. Business provides 24/7 support but not a dedicated TAM.',
  },
  {
    id: 'bill-039',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['spot', 'pricing'],
    question:
      'Which EC2 pricing model offers the largest discount compared to On-Demand but can be interrupted with two minutes notice?',
    options: [
      'Spot Instances',
      'Reserved Instances',
      'Dedicated Hosts',
      'On-Demand Instances',
    ],
    correctAnswers: [0],
    explanation:
      'Spot Instances use spare capacity at steep discounts but AWS can reclaim capacity with a 2-minute interruption notice.',
  },
  {
    id: 'bill-040',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['pricing-calculator', 'estimation'],
    question:
      'Before deploying a new architecture, which tool helps estimate monthly AWS costs?',
    options: [
      'AWS Pricing Calculator',
      'AWS Cost Explorer historical view only',
      'AWS Trusted Advisor security checks',
      'Amazon GuardDuty',
    ],
    correctAnswers: [0],
    explanation:
      'Pricing Calculator models future workloads and estimates costs. Cost Explorer analyzes past and forecasted spend after resources are in use.',
  },
  {
    id: 'bill-041',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'billing'],
    question:
      'What is a benefit of consolidated billing in AWS Organizations?',
    options: [
      'Combined usage for volume pricing discounts across member accounts',
      'Free unlimited data transfer between all cloud providers',
      'Automatic Reserved Instance sharing is never possible',
      'Elimination of all service quotas',
    ],
    correctAnswers: [0],
    explanation:
      'Consolidated billing aggregates usage across accounts for volume tiers and allows sharing some Reserved Instance and Savings Plan benefits.',
  },
  {
    id: 'bill-042',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['exam-format', 'support'],
    question:
      'What is the minimum passing score on the CLF-C02 exam?',
    options: ['700 out of 1000', '80%', '65 correct answers', '500 out of 1000'],
    correctAnswers: [0],
    explanation:
      'AWS uses scaled scoring from 100–1000 on CLF-C02; 700 is the minimum passing score. The exact number of correct answers varies by exam form.',
  },
  {
    id: 'bill-043',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['cost-optimization', 'rightsizing', 'sample-exam'],
    question: 'What is a cost efficiency principle related to the AWS cloud?',
    options: [
      'Properly size services based on capacity needs',
      'Use the Billing Dashboard to access monthly account information',
      'Use AWS Organizations to combine the expenses of multiple accounts into a single invoice',
      'Tag all AWS resources',
    ],
    correctAnswers: [0],
    explanation:
      'Right-sizing matches resource type and capacity to workload needs, avoiding over- or under-provisioning. Consolidated billing, tagging, and billing dashboards support cost management but are not the core efficiency principle described here.',
  },
  {
    id: 'bill-044',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['free-tier', 'vpc', 'iam', 'sample-exam'],
    question:
      'Which AWS services and features are provided to all customers at no additional cost? (Select TWO.)',
    options: [
      'Amazon Aurora',
      'VPC',
      'Amazon SageMaker',
      'AWS Identity and Access Management (IAM)',
      'Amazon Polly',
    ],
    correctAnswers: [1, 3],
    explanation:
      'VPC and IAM have no separate charge—you pay only for resources launched inside a VPC or accessed via IAM. Aurora, SageMaker, and Polly are usage-based paid services.',
  },
  {
    id: 'bill-045',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['trusted-advisor', 'sample-exam'],
    question:
      'In which categories does AWS Trusted Advisor provide recommended actions? (Select TWO.)',
    options: [
      'Operating system patches',
      'Cost optimization',
      'Repetitive tasks',
      'Service quotas',
      'Account activity logs',
    ],
    correctAnswers: [1, 3],
    explanation:
      'Trusted Advisor provides real-time best-practice checks in five categories: cost optimization, performance, security, fault tolerance, and service quotas. This item selects cost optimization and service quotas. OS patches, repetitive tasks, and account activity logs are not Trusted Advisor categories.',
  },
  {
    id: 'bill-046',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cost-allocation', 'tags', 'sample-exam'],
    question:
      'A company is running applications on Amazon EC2 instances in the same AWS account for several different projects. The company wants to track infrastructure costs for each of the projects separately. The company must perform this tracking with the least possible impact on existing infrastructure and at no additional cost.',
    options: [
      'Use a different Amazon EC2 instance type for each project.',
      'Publish project-specific Amazon CloudWatch custom metrics for each application.',
      'Deploy EC2 instances for each project in a separate AWS account.',
      'Use cost allocation tags with values specific to each project.',
    ],
    correctAnswers: [3],
    explanation:
      'Cost allocation tags are key-value pairs on resources such as EC2 instances that group spend in Cost Explorer and billing reports without changing architecture. Separate accounts add operational overhead; custom metrics can incur charges; instance types do not allocate costs by project.',
  },
  {
    id: 'bill-047',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cost-allocation', 'tags', 'sample-exam'],
    question:
      'A company is running workloads for multiple departments within a single VPC. The company needs to be able to bill each department for their resource usage. Which action should the company take to accomplish this goal with the LEAST operational overhead?',
    options: [
      'Add a department tag to each resource and configure cost allocation tags.',
      'Move each department\'s resources to their own VPC.',
      'Move each department\'s resources to their own AWS account.',
      'Use AWS Organizations to get a billing report for each department.',
    ],
    correctAnswers: [0],
    explanation:
      'Department tags activated as cost allocation tags break down bills in Cost Explorer and the Cost and Usage Report without splitting VPCs or accounts. Separate VPCs or accounts add migration and management overhead; Organizations consolidates billing but still needs tags or accounts to allocate spend by department.',
  },
  {
    id: 'bill-048',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['service-quotas', 'trusted-advisor', 'sample-exam'],
    question:
      'A company has an application that uses AWS services. During scaling events, the company wants to keep the application\'s usage within AWS service quotas. Which AWS services or tools can help the company monitor service limits? (Select TWO.)',
    options: [
      'Service Quotas console',
      'AWS Trusted Advisor',
      'AWS Systems Manager',
      'AWS Shield',
      'AWS Cost Explorer',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Service Quotas centralizes viewing quota usage, requesting increases, and setting alarms near limits. Trusted Advisor service limit checks warn when usage approaches default quotas. Systems Manager handles operations automation; Shield mitigates DDoS; Cost Explorer analyzes spend rather than service quotas.',
  },
  {
    id: 'bill-049',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['training', 'support', 'sample-exam'],
    question:
      'What options does AWS make available to customers who want to learn about cloud security in an instructor-led environment? (Select TWO.)',
    options: [
      'AWS Trusted Advisor',
      'AWS Online Tech Talks',
      'AWS Blog',
      'AWS Forums',
      'AWS Classroom Training',
    ],
    correctAnswers: [1, 4],
    explanation:
      'Per this exam item, AWS Online Tech Talks and AWS Classroom Training support instructor-led style learning about topics such as cloud security. Trusted Advisor recommends best practices in your account; the AWS Blog and Forums are self-service community and documentation resources.',
  },
  {
    id: 'bill-050',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['compute-optimizer', 'rightsizing', 'sample-exam'],
    question:
      'Which AWS tool or service provides recommendations to help users get right-sized Amazon EC2 instances based on the workload\'s historical usage data?',
    options: [
      'AWS Pricing Calculator',
      'AWS Compute Optimizer',
      'AWS App Runner',
      'AWS Systems Manager',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Compute Optimizer analyzes CloudWatch metrics and usage history to recommend optimal EC2 instance types and sizes. Pricing Calculator estimates future costs; App Runner runs containerized web apps; Systems Manager automates operations and patching.',
  },
  {
    id: 'bill-051',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'billing', 'sample-exam'],
    question:
      'Which AWS service or tool helps centrally manage billing and enable controlled access to resources across AWS accounts?',
    options: [
      'AWS Identity and Access Management (IAM)',
      'AWS Organizations',
      'AWS Cost Explorer',
      'AWS Budgets',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Organizations consolidates accounts, offers consolidated billing, and applies service control policies (SCPs) for cross-account access control. IAM manages identities within an account; Cost Explorer analyzes spend; Budgets set cost alerts.',
  },
  {
    id: 'bill-052',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['cost-optimization', 'rightsizing', 'sample-exam'],
    question:
      'Which actions are examples of a company\'s effort to right-size their AWS resources to control cloud costs? (Select TWO.)',
    options: [
      'Switching from Amazon RDS to Amazon DynamoDB.',
      'Selecting Amazon EC2 instance types based on previous utilization patterns.',
      'Using Amazon S3 lifecycle policies to move infrequently accessed objects to lower-cost storage tiers.',
      'Using Multi-AZ deployments for Amazon RDS.',
      'Replacing existing Amazon EC2 instances with AWS Elastic Beanstalk.',
    ],
    correctAnswers: [1, 2],
    explanation:
      'Right-sizing EC2 from utilization history and tiering S3 data with lifecycle policies reduce spend without changing application architecture unnecessarily. Migrating RDS to DynamoDB is a redesign; Multi-AZ improves availability at higher cost; Beanstalk is a deployment model, not inherently a right-sizing action.',
  },
  {
    id: 'bill-053',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['sustainability', 'billing', 'sample-exam'],
    question:
      'To access a report on the environmental impact of AWS usage, which service or feature should a company use?',
    options: [
      'AWS Organizations',
      'IAM Policy',
      'AWS Billing Console',
      'Amazon SNS',
    ],
    correctAnswers: [2],
    explanation:
      'Per this exam item, the AWS Billing Console provides access to reports on the estimated environmental impact of AWS usage (including carbon footprint views in Cost Management). Organizations manages accounts; IAM policies control access; SNS delivers notifications.',
  },
  {
    id: 'bill-054',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['trusted-advisor', 'sample-exam'],
    question:
      'Which AWS service should a cloud professional use to receive real-time guidance for provisioning resources, based on AWS best practices related to security, cost optimization, and service limits?',
    options: [
      'AWS Trusted Advisor',
      'AWS Config',
      'AWS Security Hub',
      'AWS Systems Manager',
    ],
    correctAnswers: [0],
    explanation:
      'Trusted Advisor analyzes your account against best practices in security, cost, performance, fault tolerance, and service limits, and can warn when quotas are nearly exhausted. Config tracks resource configuration; Security Hub aggregates security findings; Systems Manager handles operational automation.',
  },
  {
    id: 'bill-055',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'business', 'sample-exam'],
    question:
      'Which of the following is available to a company that has an AWS Business Support plan?',
    options: [
      'AWS concierge support',
      'AWS DDoS Response Team (DRT)',
      'AWS Technical Account Manager (TAM)',
      'AWS Health API',
    ],
    correctAnswers: [3],
    explanation:
      'Per this exam item, AWS Health API access is included with Business Support for programmatic Personal Health Dashboard data. Concierge and TAM are Enterprise-focused; DRT access is tied to AWS Shield Advanced, not standard Business Support alone.',
  },
  {
    id: 'bill-056',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'enterprise', 'iem', 'sample-exam'],
    question:
      'Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?',
    options: ['Business', 'Developer', 'Basic', 'Enterprise'],
    correctAnswers: [3],
    explanation:
      'Infrastructure Event Management (IEM) at no extra charge is included with Enterprise Support, helping with architectural guidance during planned events such as launches and traffic spikes. Business can purchase IEM for an additional fee per event; Developer and Basic do not include IEM.',
  },
  {
    id: 'bill-057',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'sla', 'study-guide'],
    question:
      'Which AWS Support plans include help for a production system down event within one hour?',
    options: [
      'Business and Enterprise Support',
      'Basic Support only',
      'Developer Support only',
      'No paid support plan offers one-hour production response',
    ],
    correctAnswers: [0],
    explanation:
      'Business and Enterprise Support include 24/7 access and response-time targets for production system down cases (within one hour for Business, faster tiers for Enterprise business-critical cases). Basic and Developer lack production down SLAs at that level.',
  },
  {
    id: 'bill-058',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'documentation', 'study-guide'],
    question:
      'Which AWS resource is a FAQ-style collection of answers to common technical problems?',
    options: [
      'AWS Knowledge Center',
      'AWS Cost and Usage Report',
      'Amazon EC2 launch template library',
      'AWS Artifact compliance agreements only',
    ],
    correctAnswers: [0],
    explanation:
      'The Knowledge Center provides FAQ articles for frequent technical issues and solutions. Official documentation at docs.aws.amazon.com covers comprehensive guides. CUR is billing data; launch templates configure EC2; Artifact hosts compliance documents.',
  },
  {
    id: 'bill-059',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cloudtrail', 'logging', 'study-guide'],
    question:
      'How long does AWS CloudTrail Event history retain management events at no additional charge?',
    options: [
      '90 days',
      '7 days',
      '1 year',
      'Indefinitely in every Region',
    ],
    correctAnswers: [0],
    explanation:
      'CloudTrail Event history in the console stores the last 90 days of management events per Region at no charge. Longer retention, data events, and multi-Region trails require creating a trail that delivers logs to S3 (and optionally CloudWatch Logs).',
  },
  {
    id: 'bill-060',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cloudtrail', 'integrity', 'study-guide'],
    question:
      'Which CloudTrail feature uses cryptographic hashing to help verify that log files have not been modified after delivery to Amazon S3?',
    options: [
      'Log file integrity validation',
      'AWS Config rules',
      'Amazon GuardDuty findings',
      'VPC Flow Logs',
    ],
    correctAnswers: [0],
    explanation:
      'Log file integrity validation creates SHA-256 hashes and signed digest files so you can detect tampering with CloudTrail logs in S3. It does not prevent deletion or show how files were altered. Config, GuardDuty, and Flow Logs serve other purposes.',
  },
  {
    id: 'bill-061',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['reserved-instances', 'reporting', 'study-guide'],
    question:
      'Which report shows how much you saved by using Reserved Instances compared with On-Demand pricing?',
    options: [
      'Reserved Instances Utilization report',
      'Reserved Instances Coverage report',
      'AWS Trusted Advisor Performance checks',
      'Amazon Inspector assessment report',
    ],
    correctAnswers: [0],
    explanation:
      'The RI Utilization report shows savings from reservations you purchased. The Coverage report shows how much usage could have been covered by RIs (potential savings). Trusted Advisor and Inspector do not report RI savings.',
  },
  {
    id: 'bill-062',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['tags', 'administration', 'study-guide'],
    question:
      'When creating an AWS resource tag, which components are required?',
    options: [
      'A tag key; the tag value is optional',
      'Both key and value are always required',
      'Only a value; AWS assigns the key',
      'Tags require approval from AWS Support before use',
    ],
    correctAnswers: [0],
    explanation:
      'Every tag must have a key; the value can be empty or omitted. Tags are case-sensitive, need not be unique account-wide, and help organize resources for administration and (when activated) cost allocation.',
  },
  {
    id: 'bill-063',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['cost-optimization', 'study-guide'],
    question:
      'Which AWS resources typically incur NO charges when they exist but contain no running workloads or objects?',
    options: [
      'An empty Amazon VPC and an empty Amazon S3 bucket',
      'A stopped Amazon EC2 instance with attached EBS volumes',
      'An Application Load Balancer with no targets',
      'An Amazon RDS DB instance in available state',
    ],
    correctAnswers: [0],
    explanation:
      'Empty VPCs and empty S3 buckets alone do not generate usage charges—you pay for resources inside them (NAT gateways, EC2, stored objects, etc.). Stopped EC2 still bills attached EBS; ALB and RDS bill while provisioned.',
  },
  {
    id: 'bill-064',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['trusted-advisor', 'performance', 'study-guide'],
    question:
      'Which AWS Trusted Advisor category identifies configuration settings that might block performance improvements?',
    options: [
      'Performance',
      'Cost Optimization',
      'Service Limits',
      'Fault Tolerance',
    ],
    correctAnswers: [0],
    explanation:
      'Trusted Advisor Performance checks flag issues such as under-provisioned EBS throughput or suboptimal instance choices. Cost Optimization finds unused spend; Service Limits warns on quotas; Fault Tolerance highlights backup and redundancy gaps.',
  },
  {
    id: 'bill-065',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['regions', 'govcloud', 'study-guide'],
    question:
      'Which AWS Region is designed for sensitive workloads and is available only to authorized U.S. customers meeting specific compliance requirements?',
    options: [
      'AWS GovCloud (US)',
      'Asia Pacific (Tokyo)',
      'Europe (London)',
      'US East (N. Virginia)',
    ],
    correctAnswers: [0],
    explanation:
      'AWS GovCloud (US) Regions isolate workloads for federal, state, and local government and regulated industry customers with stricter access requirements. Standard commercial Regions such as us-east-1, eu-west-2, and ap-northeast-1 are open to general AWS accounts.',
  },
  {
    id: 'bill-066',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['prescriptive-guidance', 'documentation', 'sample-exam'],
    question:
      'You need step-by-step instructions and architectural best practices for implementing a cloud solution. Which AWS technical resource should you use?',
    options: [
      'AWS Prescriptive Guidance',
      'AWS re:Post only',
      'AWS Marketplace',
      'AWS Cost Explorer',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Prescriptive Guidance provides proven patterns, step-by-step implementation guides, and architectural best practices for building on AWS. re:Post is a community Q&A forum; Marketplace sells third-party products; Cost Explorer analyzes spend.',
  },
  {
    id: 'bill-067',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['spot', 'pricing-models', 'sample-exam'],
    question:
      'A non-production workload runs only during office hours and can tolerate interruptions. Which EC2 pricing model BEST optimizes cost?',
    options: [
      'Spot Instances',
      'On-Demand Instances',
      'Reserved Instances (All Upfront)',
      'Compute Savings Plans with a three-year commitment',
    ],
    correctAnswers: [0],
    explanation:
      'Spot Instances offer the deepest discounts for interruptible, flexible workloads that do not need to run continuously. On-Demand suits unpredictable but non-interruptible use; Reserved Instances and Savings Plans require commitment and fit steady 24/7 usage better.',
  },
  {
    id: 'bill-068',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'reserved-instances', 'sample-exam'],
    question:
      'A company uses AWS Organizations and purchases Reserved Instances in the management account. How do other member accounts benefit?',
    options: [
      'Matching instances in member accounts automatically receive the RI pricing discount when shared billing is enabled',
      'Member accounts must purchase their own identical RIs to get any discount',
      'RI discounts apply only to the management account and never to member accounts',
      'Member accounts must submit a support ticket to join the RI pool each month',
    ],
    correctAnswers: [0],
    explanation:
      'With Organizations consolidated billing, Reserved Instance benefits can apply to matching instance usage across linked accounts in the organization—not only in the account that purchased them. Instance type, Region, platform, and tenancy must match the reservation.',
  },
  {
    id: 'bill-069',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['billing-conductor', 'crucial-exams'],
    question:
      'Which AWS service helps ISVs and resellers customize AWS billing, pricing, and cost reporting for their end customers?',
    options: [
      'AWS Billing Conductor',
      'Cost allocation tags alone',
      'AWS Budgets',
      'AWS Cost Explorer only',
    ],
    correctAnswers: [0],
    explanation:
      'Billing Conductor lets partners create custom billing groups, pricing rules, and pro forma invoices for downstream customers. Cost allocation tags break down spend within your own organization; Budgets set alerts; Cost Explorer visualizes usage.',
  },
  {
    id: 'bill-070',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['sla', 'availability', 'crucial-exams'],
    question: 'What is an AWS Service Level Agreement (SLA)?',
    options: [
      'A formal commitment from AWS about expected service availability for eligible services',
      'A mandatory contract every customer must sign before creating an account',
      'A tool that automatically right-sizes EC2 instances',
      'The same thing as the AWS Shared Responsibility Model',
    ],
    correctAnswers: [0],
    explanation:
      'AWS SLAs define availability targets for many services (for example Amazon EC2 and Amazon S3) and may provide service credits if commitments are not met. The Shared Responsibility Model defines security duties; SLAs address service uptime commitments.',
  },
  {
    id: 'bill-071',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cost-explorer', 'compute-optimizer', 'rightsizing', 'examtopics'],
    question:
      'Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Select TWO.)',
    options: [
      'AWS Cost Explorer',
      'AWS Billing Conductor',
      'Amazon CodeGuru',
      'Amazon SageMaker',
      'AWS Compute Optimizer',
    ],
    correctAnswers: [0, 4],
    explanation:
      'Cost Explorer includes rightsizing recommendations based on usage and cost data. Compute Optimizer analyzes CloudWatch metrics to recommend optimal instance types and sizes. Billing Conductor customizes partner billing; CodeGuru reviews code; SageMaker builds ML models.',
  },
  {
    id: 'bill-072',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['free-tier', 'pricing', 'examtopics'],
    question:
      'What happens when an AWS Free Tier offer expires or an application exceeds Free Tier usage limits?',
    options: [
      'Standard pay-as-you-go rates apply to usage beyond Free Tier limits',
      'All AWS services in the account are suspended immediately',
      'The account is closed automatically after 24 hours',
      'Free Tier benefits continue forever at no charge regardless of usage',
    ],
    correctAnswers: [0],
    explanation:
      'Free Tier provides limited usage at no charge for eligible services and periods. After limits expire or are exceeded, normal on-demand pricing applies—you are billed for additional usage. Accounts are not auto-closed; always monitor usage in the Billing console.',
  },
  {
    id: 'bill-073',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'enterprise', 'concierge', 'examtopics', 'sample-exam'],
    question:
      'A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?',
    options: [
      'AWS Health Dashboard',
      'AWS Support Concierge',
      'AWS Customer Service',
      'AWS Operations Support',
    ],
    correctAnswers: [1],
    explanation:
      'Enterprise Support includes AWS Support Concierge for fast help with billing and account questions. The AWS Health Dashboard shows service and account health events; general AWS Support handles technical cases; there is no separate product named AWS Operations Support.',
  },
  {
    id: 'bill-074',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['budgets', 'cloudwatch', 'sns', 'billing-alarm', 'examtopics', 'sample-exam'],
    question:
      'A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO.)',
    options: [
      'Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.',
      'Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.',
      'Configure the AWS Budgets Service to alert the company when the threshold is exceeded.',
      'Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.',
      'Configure the Amazon Connect Service to alert the company when the threshold is exceeded.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'AWS Budgets can send alerts when actual or forecasted spend crosses a dollar threshold. You can also create a billing metric alarm in Amazon CloudWatch (in us-east-1) that publishes to Amazon SNS for notifications. SES is for sending mail you build, not AWS billing alerts; CloudTrail logs API activity and does not delete resources on spend; Connect is a contact center service.',
  },
  {
    id: 'bill-075',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'on-demand', 'pricing', 'examtopics', 'sample-exam'],
    question:
      'You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?',
    options: [
      'Reserved instances',
      'Spot instances',
      'Dedicated instances',
      'On-demand instances',
    ],
    correctAnswers: [3],
    explanation:
      'On-Demand Instances have no upfront commitment and run until you stop them—ideal for short, uninterrupted workloads such as a one-day event. Reserved Instances require long-term commitment; Spot Instances can be interrupted with notice; Dedicated Instances isolate hardware but do not fit a brief no-interruption need better than On-Demand.',
  },
  {
    id: 'bill-076',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['reserved-instances', 'convertible', 'examtopics', 'sample-exam'],
    question:
      'An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?',
    options: [
      'Elastic RI',
      'Premium RI',
      'Standard RI',
      'Convertible RI',
    ],
    correctAnswers: [3],
    explanation:
      'Convertible Reserved Instances can be exchanged for other Convertible RIs with different instance families, operating systems, or tenancy during the term (when workloads change). Standard RIs offer the deepest discount but less flexibility; Elastic RI and Premium RI are not valid EC2 RI types on the exam.',
  },
  {
    id: 'bill-077',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'enterprise', 'iem', 'examtopics', 'sample-exam'],
    question:
      'A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?',
    options: [
      'AWS Knowledge Center',
      'AWS Health Dashboard',
      'Infrastructure Event Management',
      'AWS Support Concierge Service',
    ],
    correctAnswers: [2],
    explanation:
      'Infrastructure Event Management (IEM) is included with Enterprise Support (and available for a fee on Business) to help plan and scale for major events such as product launches and traffic spikes. The Knowledge Center is self-service documentation; Health Dashboard shows service health events; Concierge helps with billing and account inquiries.',
  },
  {
    id: 'bill-078',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['savings-plans', 'ec2', 'lambda', 'examtopics', 'sample-exam'],
    question:
      'Savings Plans are available for which of the following AWS compute services? (Choose TWO.)',
    options: [
      'AWS Batch',
      'AWS Outposts',
      'Amazon Lightsail',
      'Amazon EC2',
      'AWS Lambda',
    ],
    correctAnswers: [3, 4],
    explanation:
      'Compute Savings Plans (and EC2 Instance Savings Plans) apply discounted rates to eligible usage on Amazon EC2, AWS Lambda, and AWS Fargate. Batch orchestrates jobs but billing follows underlying compute; Outposts and Lightsail use separate pricing models outside standard Savings Plans coverage on this exam item.',
  },
  {
    id: 'bill-079',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'pricing', 'on-demand', 'examtopics', 'sample-exam'],
    question:
      'How are AWS customers billed for Linux-based Amazon EC2 usage?',
    options: [
      'EC2 instances will be billed on one second increments, with a minimum of one minute.',
      'EC2 instances will be billed on one hour increments, with a minimum of one day.',
      'EC2 instances will be billed on one minute increments, with a minimum of one hour.',
      'EC2 instances will be billed on one day increments, with a minimum of one month.',
    ],
    correctAnswers: [0],
    explanation:
      'Linux EC2 On-Demand instances are charged per second for running time, with a one-minute minimum per start. Hourly-only or daily billing with multi-day minimums are incorrect for standard On-Demand Linux EC2 pricing on the exam.',
  },
  {
    id: 'bill-080',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'pricing', 'examtopics', 'sample-exam'],
    question:
      'Which of the following will impact the price paid for an EC2 instance? (Choose TWO.)',
    options: [
      'Instance type',
      'The Availability Zone where the instance is provisioned',
      'Load balancing',
      'Number of buckets',
      'Number of private IPs',
    ],
    correctAnswers: [0, 1],
    explanation:
      'EC2 pricing depends on instance family and size (CPU, memory, network) and is set per AWS Region—Availability Zone selection is within that Regional price context on this exam item. Elastic Load Balancing is billed separately; S3 bucket count and private IP addresses on an instance do not change the EC2 instance hourly rate itself.',
  },
  {
    id: 'bill-081',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['reserved-instances', 'pricing', 'examtopics', 'sample-exam'],
    question:
      'What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO.)',
    options: [
      'Instances can be shut down by AWS at any time with no notification.',
      'Reserved instances require at least a one-year pricing commitment.',
      'There is no additional charge for using dedicated instances.',
      'Reserved instances provide a significant discount compared to on-demand instances.',
      'Reserved instances are best suited for periodic workloads.',
    ],
    correctAnswers: [1, 3],
    explanation:
      'Reserved Instances trade flexibility for lower hourly rates versus On-Demand—typically requiring a one- or three-year commitment (drawback) while offering substantial savings (benefit). Interruptible shutdown without notice describes Spot Instances; Dedicated Instances may incur extra fees; steady-state workloads fit RIs better than sporadic periodic use.',
  },
  {
    id: 'bill-082',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'on-demand', 'pricing', 'examtopics', 'sample-exam'],
    question:
      'What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?',
    options: [
      'On-Demand Instances',
      'Spot Instances',
      'Reserved Instances - All Upfront',
      'Reserved Instances - No Upfront',
    ],
    correctAnswers: [0],
    explanation:
      'For only two months of continuous availability, On-Demand avoids the one- or three-year Reserved Instance commitment whose savings may not offset unused term. Spot Instances can be interrupted and are unsuitable when availability must be guaranteed; Standard RIs require longer terms than two months to be cost-effective.',
  },
  {
    id: 'bill-083',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['tco', 'migration', 'examtopics', 'sample-exam'],
    question:
      'TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?',
    options: [
      'AWS Cost Explorer',
      'AWS TCO Calculator',
      'AWS Budgets',
      'AWS Pricing Calculator',
    ],
    correctAnswers: [1],
    explanation:
      'The AWS TCO Calculator compares the total cost of ownership of on-premises infrastructure versus AWS for migration planning. Cost Explorer analyzes existing AWS spend; Budgets sets cost alerts; Pricing Calculator estimates future AWS service configurations—not a full on-premises versus cloud TCO comparison.',
  },
  {
    id: 'bill-084',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cost-optimization', 'billing', 'examtopics', 'sample-exam'],
    question:
      'AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?',
    options: [
      'Deleting unused EBS volumes after terminating an EC2 instance.',
      'Deleting unused AutoScaling launch configuration.',
      'Deleting unused Elastic Load Balancers.',
      'Releasing unused Elastic IPs after terminating an EC2 instance.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS billing guidance commonly includes cleaning up unused EBS volumes, idle load balancers, and unassociated Elastic IPs that continue to incur charges. Auto Scaling launch configurations are metadata templates and are not highlighted as a typical source of ongoing surprise charges compared with those resources.',
  },
  {
    id: 'bill-085',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'pricing', 'on-demand', 'examtopics', 'sample-exam'],
    question:
      'An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?',
    options: [
      '3 hours for the Linux instance and 5 hours for the CentOS instance.',
      '2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.',
      '2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.',
      '3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.',
    ],
    correctAnswers: [2],
    explanation:
      'Pricing is per instance-hour consumed for each instance, from launch until termination or stop. Each partial instance-hour is billed per second for Linux, Windows, Windows with SQL Enterprise, Windows with SQL Standard, and Windows with SQL Web instances. All other instance types (such as CentOS) are billed as a full hour for each partial instance-hour consumed—4 hours 23 minutes 7 seconds rounds up to 5 billable hours.',
  },
  {
    id: 'bill-086',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['s3', 'pricing', 'volume-discount', 'examtopics', 'sample-exam'],
    question: 'Which AWS Service offers volume discounts based on usage?',
    options: ['Amazon VPC.', 'Amazon S3.', 'Amazon Lightsail.', 'AWS Cost Explorer.'],
    correctAnswers: [1],
    explanation:
      'Amazon S3 pricing includes tiered volume discounts—the more storage you use, the lower the per-GB rate in each tier. VPC has no usage-based volume pricing model; Lightsail uses flat monthly bundles; Cost Explorer is a billing analysis tool, not a service whose own usage earns volume discounts.',
  },
  {
    id: 'bill-087',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'pricing', 'pricing-calculator', 'examtopics', 'sample-exam'],
    question:
      'Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)',
    options: [
      'The amount of time the instances will be running.',
      'Number of security groups.',
      'Allocated Elastic IP Addresses.',
      'Number of Hosted Zones.',
      'Number of instances.',
    ],
    correctAnswers: [1, 3],
    explanation:
      'EC2 estimates depend on instance count, instance type, running time, and related charges such as EBS and Elastic IPs associated with those instances. Security groups are free VPC firewall rules and do not affect EC2 compute pricing. Route 53 hosted zones are a DNS billing item, separate from EC2 cost estimation.',
  },
  {
    id: 'bill-088',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'sla', 'examtopics', 'sample-exam'],
    question:
      'A user has opened a "Production System Down" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?',
    options: ['12 hours.', '15 minutes.', '24 hours.', 'One hour.'],
    correctAnswers: [3],
    explanation:
      'On eligible AWS Support plans (Business and Enterprise), a Production System Down case targets a response within one hour. Developer and Basic plans use longer response targets for general guidance cases. Fifteen minutes applies to Enterprise business-critical cases, not the standard Production System Down SLA emphasized on this exam item.',
  },
  {
    id: 'bill-089',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'business', 'examtopics', 'sample-exam'],
    question: 'Which features are included in the AWS Business Support Plan? (Choose TWO)',
    options: [
      '24x7 access to customer service.',
      'Access to Cloud Support Engineers via email only during business hours.',
      'Access to the Infrastructure Event Management (IEM) feature for additional fee.',
      '24x7 access to the TAM feature.',
      'Partial access to the core Trusted Advisor checks.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'AWS Business Support includes 24/7 access to Cloud Support Engineers by phone, chat, and email, plus full Trusted Advisor checks. Infrastructure Event Management can be purchased for an additional fee on Business (included at no extra charge on Enterprise). Email-only during business hours describes Developer Support; a Technical Account Manager (TAM) is an Enterprise benefit; partial Trusted Advisor access applies to Developer and Basic, not Business.',
  },
  {
    id: 'bill-090',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cost-explorer', 'forecasting', 'examtopics', 'sample-exam'],
    question: 'What does AWS Cost Explorer provide to help manage your AWS spend?',
    options: [
      'Cost comparisons between AWS Cloud environments and on-premises environments.',
      'Accurate estimates of AWS service costs based on your expected usage.',
      'Consolidated billing.',
      'Highly accurate cost forecasts for up to 12 months ahead.',
    ],
    correctAnswers: [3],
    explanation:
      'AWS Cost Explorer visualizes historical spend and generates cost forecasts up to 12 months based on past usage patterns to help plan budgets. The TCO Calculator compares on-premises versus AWS costs; the AWS Pricing Calculator estimates future configurations before deployment; consolidated billing is a feature of AWS Organizations.',
  },
  {
    id: 'bill-091',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ebs', 'pricing', 'examtopics', 'sample-exam'],
    question:
      'Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)',
    options: [
      'The size of volumes provisioned per month.',
      'The compute capacity you consume.',
      'The amount of data you have stored in snapshots.',
      'The compute time you consume.',
      'The number of Snowball storage devices you request.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Amazon EBS charges for provisioned volume storage (GB-months) and for snapshot storage in Amazon S3, plus additional charges for certain volume types (for example provisioned IOPS). Compute capacity and compute time relate to services such as EC2 and Lambda, not EBS block storage pricing. Snowball is a separate physical data transfer appliance with its own pricing.',
  },
  {
    id: 'bill-092',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'pricing', 'reserved-instances', 'examtopics', 'sample-exam'],
    question:
      'Which of the following is an available option when purchasing Amazon EC2 instances?',
    options: [
      'The ability to bid to get the lowest possible prices.',
      'The ability to register EC2 instances to get volume discounts on every hour the instances are running.',
      'The ability to buy Dedicated Instances for up to 90% discount.',
      'The ability to pay upfront to get lower hourly costs.',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon EC2 Reserved Instances and Savings Plans let you commit to usage and optionally pay all or part upfront in exchange for lower hourly or per-use rates versus On-Demand. Spot Instances use spare capacity at steep discounts but are interruptible—not the upfront commitment model in this answer. Dedicated Instances run on single-tenant hardware and typically cost more, not up to 90% off; EC2 has no per-hour volume discount registry for running instances.',
  },
  {
    id: 'bill-093',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['tco', 'migration', 'examtopics', 'sample-exam'],
    question:
      'Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?',
    options: [
      'AWS Cost Explorer.',
      'AWS Pricing Calculator.',
      'AWS Budgets.',
      'AWS TCO Calculator.',
    ],
    correctAnswers: [3],
    explanation:
      'The AWS TCO Calculator helps organizations—including those not yet on AWS—compare total cost of ownership of on-premises infrastructure against running equivalent workloads in AWS. Cost Explorer analyzes existing AWS account spend; Budgets sets cost and usage alerts; Pricing Calculator estimates AWS service costs for planned configurations, not a full on-premises versus cloud TCO study.',
  },
  {
    id: 'bill-094',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'business', 'chat', 'examtopics', 'sample-exam'],
    question:
      'Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can’t see a way to contact support via Chat. What should you do?',
    options: [
      'There is no chat feature in AWS support.',
      'The chat feature is available for all plans for an additional fee, but you have to request it first.',
      'At a minimum, upgrade to Business support plan.',
      'Upgrade from the Basic Support plan to Developer Support.',
    ],
    correctAnswers: [2],
    explanation:
      'Live chat (along with 24/7 phone and email access to Cloud Support Engineers) is included with AWS Business and Enterprise Support—not with Basic or Developer. Developer Support provides email access during business hours only; Basic Support covers account and billing questions with limited technical guidance.',
  },
  {
    id: 'bill-095',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['s3', 'pricing', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)',
    options: [
      'Using default encryption for any number of S3 buckets.',
      'The number of EBS volumes attached to your instances.',
      'The storage class used for the objects stored.',
      'Creating and deleting S3 buckets.',
      'The total size in gigabytes of all objects stored.',
    ],
    correctAnswers: [2, 4],
    explanation:
      'S3 charges primarily by storage class (Standard, Intelligent-Tiering, Glacier, etc.) and total data stored (GB-months), plus requests and transfer. Default encryption does not add a separate storage fee; EBS volumes are unrelated to S3 object storage; creating empty buckets is generally free.',
  },
  {
    id: 'bill-096',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cur', 'billing', 'practice-exam-7', 'sample-exam'],
    question:
      'You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?',
    options: [
      'Using the AWS Cost & Usage Report.',
      'Using the AWS Total Cost of Ownership (TCO) dashboard.',
      'Using the AWS CloudWatch logs dashboard.',
      'Using the Amazon VPC dashboard.',
    ],
    correctAnswers: [0],
    explanation:
      'The AWS Cost and Usage Report (CUR) delivers detailed line-item billing data to S3 for analysis. The TCO Calculator compares on-premises versus cloud before migration; CloudWatch logs and the VPC console do not provide account billing history.',
  },
  {
    id: 'bill-097',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'reserved-instances', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)',
    options: ['Convertible.', 'Expedited.', 'Bulk.', 'Spot.', 'Standard.'],
    correctAnswers: [0, 4],
    explanation:
      'EC2 Reserved Instances come in Standard (deepest discount, less flexibility) and Convertible (exchangeable for other Convertible RIs) types. Spot is a separate pricing model, not an RI type; Expedited and Bulk are not valid RI types on the exam.',
  },
  {
    id: 'bill-098',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cost-optimization', 'well-architected', 'practice-exam-7', 'sample-exam'],
    question:
      'Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?',
    options: [
      'Tagging Enforcement.',
      'Architecture Optimization.',
      'Budgeting Processes.',
      'Resource Controls.',
    ],
    correctAnswers: [1],
    explanation:
      'Architecture Optimization reviews and refines workloads (right-sizing, modernizing services, removing waste) to lower cost while meeting requirements. Tagging, budgets, and resource controls support governance but do not specifically describe ongoing architectural refinement.',
  },
  {
    id: 'bill-099',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['cloudfront', 'pricing', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following factors affect Amazon CloudFront cost? (Choose TWO)',
    options: [
      'Number of Requests.',
      'Traffic Distribution.',
      'Number of Volumes.',
      'Instance type.',
      'Storage Class.',
    ],
    correctAnswers: [0, 1],
    explanation:
      'CloudFront pricing includes the number of requests and the amount of data transferred out (traffic distribution to edge locations and viewers). EBS volumes, EC2 instance types, and S3 storage classes are not CloudFront billing dimensions.',
  },
  {
    id: 'bill-100',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'trusted-advisor', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?',
    options: [
      'Business & Enterprise Support.',
      'Basic & Developer Support.',
      'Developer & Enterprise Support.',
      'Developer & Business Support.',
    ],
    correctAnswers: [1],
    explanation:
      'Basic and Developer Support include the seven core Trusted Advisor checks (service limits, security groups, IAM use, MFA on root, etc.). Business and Enterprise unlock the full set of Trusted Advisor checks.',
  },
  {
    id: 'bill-101',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'practice-exam-7', 'sample-exam'],
    question: 'What are the benefits of the AWS Organizations service? (Choose TWO)',
    options: [
      'Control access to AWS services.',
      'Help organizations design and maintain an accelerated path to successful cloud adoption.',
      'Manage your organization’s payment methods.',
      'Help organization achieve their desired business outcomes with AWS.',
      'Consolidate billing across multiple AWS accounts.',
    ],
    correctAnswers: [0, 4],
    explanation:
      'AWS Organizations centralizes billing across member accounts and applies Service Control Policies (SCPs) to control which services and actions accounts can use. Cloud adoption programs and business outcomes are broader consulting/framework topics—not core Organizations features on this item.',
  },
  {
    id: 'bill-102',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'consolidated-billing', 'practice-exam-8', 'sample-exam'],
    question:
      'You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?',
    options: [
      'Try to remove unnecessary AWS accounts.',
      'Add the accounts to an AWS Organization and use Consolidated Billing.',
      'Track the AWS charges that are incurred by the member accounts.',
      'Enable AWS tiered-pricing before provisioning resources.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Organizations consolidated billing rolls up usage across accounts so volume pricing and Reserved Instance/Savings Plan benefits can apply organization-wide. Removing accounts or tracking charges alone does not unlock consolidated pricing; tiered pricing is not a separate enablement step.',
  },
  {
    id: 'bill-103',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'business', 'trusted-advisor', 'practice-exam-8', 'sample-exam'],
    question: 'What does the AWS “Business” support plan provide? (Choose TWO)',
    options: [
      'Access to the full set of Trusted Advisor checks.',
      'Support Concierge Service.',
      'Less than 15 minutes response-time support if your business critical system goes down.',
      'AWS Support API.',
      'Proactive Technical Account Management.',
    ],
    correctAnswers: [0, 3],
    explanation:
      'Business Support includes all Trusted Advisor checks and API access to AWS Support. Concierge and proactive TAM are Enterprise features; sub-15-minute response targets apply to Enterprise business-critical cases, not standard Business Production System Down SLAs.',
  },
  {
    id: 'bill-104',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['pricing', 'pay-as-you-go', 'practice-exam-8', 'sample-exam'],
    question: 'Which statement is true regarding AWS pricing? (Choose TWO)',
    options: [
      'With the AWS pay-as-you-go pricing model, you don’t have to pay any upfront fee.',
      'You have no responsibility for third-party software license costs.',
      'You only pay for the individual services that you need with no long-term contracts.',
      'For some services, you have to pay a startup fee in order to get the service running.',
      'There are no reservations on AWS, you only pay for what you use.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'AWS pay-as-you-go pricing typically requires no upfront payment and no long-term contracts for On-Demand usage. Customers may still pay third-party license costs (BYOL or marketplace); Reserved Instances and Savings Plans are reservation options; most services have no startup fee.',
  },
  {
    id: 'bill-105',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['ebs', 'cost-optimization', 'practice-exam-8', 'sample-exam'],
    question:
      'Which of the following actions may reduce Amazon EBS costs? (Choose TWO)',
    options: [
      'Deleting unused buckets.',
      'Using reservations.',
      'Deleting unnecessary snapshots.',
      'Changing the type of the volume.',
      'Distributing requests to multiple volumes.',
    ],
    correctAnswers: [2, 3],
    explanation:
      'Remove costly unused EBS snapshots and right-size volumes (for example gp3 instead of over-provisioned io1) to cut storage spend. S3 buckets are unrelated; EC2 Reserved Instances reduce compute, not EBS directly; spreading I/O across volumes does not inherently lower cost.',
  },
  {
    id: 'bill-106',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'practice-exam-8', 'sample-exam'],
    question:
      'Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)',
    options: ['Developer.', 'Premium.', 'Enterprise.', 'Standard.', 'Business.'],
    correctAnswers: [2, 4],
    explanation:
      'Business and Enterprise Support provide 24/7 phone, email, and chat access to Cloud Support Engineers. Developer offers business-hours email; Basic has limited support; Premium and Standard are not AWS Support plan names on the exam.',
  },
  {
    id: 'bill-107',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['marketplace', 'practice-exam-8', 'sample-exam'],
    question: 'What are the benefits of the AWS Marketplace service? (Choose TWO)',
    options: [
      'Protects customers by performing periodic security checks on listed products.',
      'Per-second billing.',
      'Provides cheaper options for purchasing Amazon EC2 on-demand instances.',
      'Provides flexible pricing options that suit most customer needs.',
      'Provides software solutions that run on AWS or any other Cloud vendor.',
    ],
    correctAnswers: [3, 4],
    explanation:
      'AWS Marketplace offers third-party software with varied pricing models (hourly, contract, BYOL) that deploy on AWS. AWS does not universally security-certify every listing; Marketplace billing follows product terms, not a blanket per-second EC2 discount for all On-Demand usage.',
  },
  {
    id: 'bill-108',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'on-demand', 'practice-exam-8', 'sample-exam'],
    question:
      'You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?',
    options: [
      'Savings Plans.',
      'Spot Instances.',
      'Reserved Instances.',
      'On-Demand Instances.',
    ],
    correctAnswers: [3],
    explanation:
      'For a short, unpredictable campaign requiring guaranteed capacity with no interruption risk, On-Demand Instances avoid long-term RI/Savings Plan commitments and Spot interruption. Spot is cheaper but can be reclaimed; RIs require term commitments longer than a weekend spike.',
  },
  {
    id: 'bill-109',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'on-demand', 'practice-exam-8', 'sample-exam'],
    question: 'What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)',
    options: [
      'They provide free capacity when testing your new applications.',
      'They are cheaper than all other EC2 options.',
      'They remove the need to buy “safety net” capacity to handle periodic traffic spikes.',
      'They only require 1-2 days for setup and configuration.',
      'You can increase or decrease your compute capacity depending on the demands of your application.',
    ],
    correctAnswers: [2, 4],
    explanation:
      'On-Demand Instances scale with application demand without upfront commitment, so you do not over-provision idle “safety net” servers for spikes. They are not free for testing, not always the cheapest option (Spot/RIs can be lower), and launch in minutes—not days of setup.',
  },
  {
    id: 'bill-110',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cur', 'billing', 'practice-exam-8', 'sample-exam'],
    question:
      'Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?',
    options: [
      'AWS Cost Explorer.',
      'AWS Budgets.',
      'AWS Cost and Usage report.',
      'AWS Billing dashboard.',
    ],
    correctAnswers: [2],
    explanation:
      'The AWS Cost and Usage Report (CUR) delivers the most detailed line-item billing data (hourly or daily) to S3 for deep analysis. Cost Explorer visualizes trends; Budgets sets alerts; the billing dashboard summarizes account charges at a higher level.',
  },
  {
    id: 'bill-111',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['trusted-advisor', 'practice-exam-9', 'sample-exam'],
    question:
      'Which of the following are categories of AWS Trusted Advisor? (Select TWO)',
    options: [
      'Fault Tolerance.',
      'Instance Usage.',
      'Infrastructure.',
      'Performance.',
      'Storage Capacity.',
    ],
    correctAnswers: [0, 3],
    explanation:
      'Trusted Advisor checks are grouped into categories including Fault Tolerance, Performance, Security, Cost Optimization, and Service Limits. Instance Usage, Infrastructure, and Storage Capacity are not official Trusted Advisor category names on the exam.',
  },
  {
    id: 'bill-112',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['billing', 'cost-management', 'practice-exam-9', 'sample-exam'],
    question:
      'Which AWS service is used to pay AWS bills, and monitor usage and budget costs?',
    options: [
      'AWS Billing and Cost Management.',
      'Consolidated billing.',
      'Amazon CloudWatch.',
      'Amazon QuickSight.',
    ],
    correctAnswers: [0],
    explanation:
      'The AWS Billing and Cost Management console (and related tools such as Cost Explorer and Budgets) centralizes invoices, payment methods, and cost monitoring. Consolidated billing is a feature of Organizations; CloudWatch monitors operational metrics; QuickSight is business intelligence.',
  },
  {
    id: 'bill-113',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'consolidated-billing', 'practice-exam-9', 'sample-exam'],
    question:
      'Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?',
    options: [
      'Service control policies (SCPs).',
      'Consolidated billing.',
      'All Upfront Reserved Instances.',
      'AWS Cost Explorer.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Organizations consolidated billing aggregates usage across linked accounts so tiered pricing and RI/Savings Plan benefits apply organization-wide. SCPs control permissions; Cost Explorer analyzes spend; All Upfront RIs are a purchase option, not a cross-account usage tier mechanism.',
  },
  {
    id: 'bill-114',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['tco', 'financial-benefits', 'practice-exam-9', 'sample-exam'],
    question: 'The financial benefits of using AWS are: (Select TWO)',
    options: [
      'Reduced Total Cost of Ownership (TCO).',
      'Increased capital expenditure (capex).',
      'Reduced operational expenditure ( opex ).',
      'Deferred payment plans for startups.',
      'Business credit lines for startups.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Cloud shifts spending from large upfront CapEx to variable OpEx and typically lowers TCO through economies of scale and no data center ownership. AWS does not generally offer deferred payment plans or credit lines as core financial benefits on the exam.',
  },
  {
    id: 'bill-115',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'consolidated-billing', 'practice-exam-9', 'sample-exam'],
    question:
      'If each department within a company has its own AWS account, what is one way to enable consolidated billing?',
    options: [
      'Use AWS Budgets on each account to pay only to budget.',
      'Contact AWS Support for a monthly bill.',
      'Create an AWS Organization from the payer account and invite the other accounts to join.',
      'Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.',
    ],
    correctAnswers: [2],
    explanation:
      'Create an AWS Organization with a management (payer) account and invite member accounts to enable consolidated billing and optional SCPs. Budgets alert on spend but do not merge bills; Support does not consolidate invoices; S3/Redshift is not a billing consolidation path.',
  },
  {
    id: 'bill-116',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['tco', 'practice-exam-9', 'sample-exam'],
    question:
      'What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?',
    options: [
      'Project management.',
      'Antivirus software licensing.',
      'Data center security.',
      'Software development.',
    ],
    correctAnswers: [2],
    explanation:
      'The AWS TCO Calculator compares facilities costs such as data center space, power, cooling, and physical security against AWS usage costs. Project management, antivirus licensing, and application development are workload-specific and not the typical data center facility line items in TCO comparisons on the exam.',
  },
  {
    id: 'bill-117',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['reserved-instances', 'pricing', 'practice-exam-10', 'sample-exam'],
    question:
      'Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?',
    options: [
      'One-year, No Upfront, Standard RI pricing.',
      'One-year, All Upfront, Convertible RI pricing.',
      'Three-year, All Upfront, Standard RI pricing.',
      'Three-year, No Upfront, Convertible RI pricing.',
    ],
    correctAnswers: [2],
    explanation:
      'Longer terms and All Upfront payment with Standard RIs (deepest discount, least flexibility) generally yield the highest savings versus On-Demand. Convertible RIs trade some discount for exchange flexibility; No Upfront lowers savings.',
  },
  {
    id: 'bill-118',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['ec2', 'reserved-instances', 'practice-exam-10', 'sample-exam'],
    question:
      'Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?',
    options: [
      'A Partial Upfront Reserved Instances for a 1-year term.',
      'All Upfront Reserved instances for a 1 year form.',
      'All Upfront Reserved Instances for a 3 year term.',
      'No Upfront Reserved Instances for a 3 year term.',
    ],
    correctAnswers: [2],
    explanation:
      'Three-year All Upfront Reserved Instances provide the largest discount versus On-Demand for steady workloads. Shorter terms and partial or no upfront payment reduce savings.',
  },
  {
    id: 'bill-119',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['pricing', 'pay-as-you-go', 'practice-exam-10', 'sample-exam'],
    question: 'Which of the following BEST describe the AWS pricing model? (Select TWO)',
    options: [
      'Fixed-term.',
      'Pay-as-you-go.',
      'Colocation.',
      'Planned.',
      'Variable cost.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'AWS primarily charges pay-as-you-go variable costs—you pay for what you use without long fixed contracts for On-Demand services. Fixed-term colocation and planned capex models describe traditional data centers more than core AWS pricing.',
  },
  {
    id: 'bill-120',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['cost-tools', 'pricing-calculator', 'tco', 'practice-exam-10', 'sample-exam'],
    question: 'Which AWS tools assist with estimating costs? (Select three)',
    options: [
      'Detailed billing report.',
      'Cost allocation tags.',
      'AWS Simple Monthly Calculator.',
      'AWS Total Cost of Ownership (TCO) Calculator.',
      'Cost Estimator.',
    ],
    correctAnswers: [1, 2, 3],
    explanation:
      'Cost allocation tags organize spend for analysis; the Simple Monthly Calculator (now AWS Pricing Calculator) estimates service costs; the TCO Calculator compares on-premises versus AWS. Detailed billing reports show historical usage after the fact rather than estimating future configurations.',
  },
  {
    id: 'bill-121',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'business', 'practice-exam-10', 'sample-exam'],
    question: 'Which benefits are included with the AWS Business Support plan? (Select TWO)',
    options: [
      '24/7 assistance by way of live chat or a telephone call.',
      'Support from a dedicated AWS Technical Account Manager.',
      'An unlimited number of cases and contacts.',
      '15-minute response time for production system interruption cases.',
      'Annual operational reviews with AWS Solutions Architects.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Business Support includes 24/7 phone, chat, and email access with unlimited cases and contacts. TAM and annual operational reviews are Enterprise benefits; 15-minute response targets apply to Enterprise business-critical cases, not standard Business SLAs.',
  },
  {
    id: 'bill-122',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['spot-instances', 'practice-exam-10', 'sample-exam'],
    question: 'When should a company consider using Amazon EC2 Spot Instances? (Select TWO)',
    options: [
      'For non-production applications.',
      'For stateful workloads.',
      'For applications that cannot have interruptions.',
      'For fault-tolerant flexible applications.',
      'For sensitive database applications.',
    ],
    correctAnswers: [0, 3],
    explanation:
      'Spot Instances suit interruptible, fault-tolerant workloads such as batch, dev/test, and flexible compute that can handle two-minute termination notices. Production databases and interruption-intolerant apps should use On-Demand, Reserved, or Savings Plans instead.',
  },
  {
    id: 'bill-123',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'consolidated-billing', 'practice-exam-11', 'sample-exam'],
    question:
      'Which of the following are advantages of AWS consolidated billing? (Select TWO)',
    options: [
      'The ability to receive one bill for multiple accounts.',
      'Service limits increasing by default in all accounts.',
      'A fixed discount on the monthly bill.',
      'Potential volume discounts, as usage in all accounts is combined.',
      'The automatic extension of the master account’s AWS support plan to all accounts.',
    ],
    correctAnswers: [0, 3],
    explanation:
      'AWS Organizations consolidated billing produces one bill for linked accounts and aggregates usage for volume pricing benefits. Service limits must still be requested; there is no fixed automatic discount; support plan benefits do not automatically extend to all member accounts.',
  },
  {
    id: 'bill-124',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'business', 'practice-exam-11', 'sample-exam'],
    question:
      'Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?',
    options: ['Enterprise.', 'Business.', 'Developer', 'Basic'],
    correctAnswers: [1],
    explanation:
      'Business Support includes a one-hour response-time target for Production System Down cases. Enterprise adds faster tiers for business-critical issues; Developer and Basic use longer response targets.',
  },
  {
    id: 'bill-125',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['trusted-advisor', 'practice-exam-11', 'sample-exam'],
    question:
      'How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)',
    options: [
      'It identifies software vulnerabilities in applications running on AWS.',
      'It provides a list of cost optimization recommendations based on current AWS usage.',
      'It detects potential security vulnerabilities caused by permissions settings on account resources.',
      'It automatically corrects potential security issues caused by permissions settings on account resources.',
      'It provides proactive alerting whenever an Amazon EC2 instance has been compromised.',
    ],
    correctAnswers: [1, 2],
    explanation:
      'Trusted Advisor scans your account for cost optimization opportunities and security findings such as overly permissive IAM or security group settings—it recommends fixes but does not auto-remediate. Application vulnerability scanning is Inspector/GuardDuty territory, not Trusted Advisor’s core checks.',
  },
  {
    id: 'bill-126',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'consolidated-billing', 'practice-exam-11', 'sample-exam'],
    question: 'Which of the following is an advantage of consolidated billing on AWS?',
    options: [
      'Volume pricing qualification.',
      'Shared access permissions.',
      'Multiple bills per account.',
      'Eliminates the need for tagging.',
    ],
    correctAnswers: [0],
    explanation:
      'Combined usage across linked accounts can reach lower pricing tiers for services that offer volume discounts. Consolidated billing does not merge IAM permissions, create multiple bills, or replace cost allocation tagging.',
  },
  {
    id: 'bill-127',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['spot-instances', 'practice-exam-11', 'sample-exam'],
    question:
      'Which Amazon EC2 instance pricing model can provide discounts of up to 90%?',
    options: [
      'Reserved Instances.',
      'On-Demand.',
      'Dedicated Hosts.',
      'Spot Instances.',
    ],
    correctAnswers: [3],
    explanation:
      'Spot Instances use spare EC2 capacity at steep discounts versus On-Demand—often up to 90%—but can be interrupted with two minutes notice. Reserved Instances and Savings Plans offer smaller predictable discounts for committed usage.',
  },
  {
    id: 'bill-128',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'business', 'practice-exam-11', 'sample-exam'],
    question:
      'Which is the MINIMUM AWS Support plan that provides technical support through phone calls?',
    options: ['Enterprise.', 'Business.', 'Developer.', 'Basic.'],
    correctAnswers: [1],
    explanation:
      'Business and Enterprise Support include 24/7 phone access to Cloud Support Engineers. Developer offers business-hours email; Basic has limited technical guidance without phone support for general cases.',
  },
  {
    id: 'bill-129',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'basic', 'practice-exam-11', 'sample-exam'],
    question:
      'How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?',
    options: [
      'AWS Senior Support Engineers.',
      'AWS Technical Account Managers.',
      'AWS Trusted Advisor.',
      'AWS Discussion Forums.',
    ],
    correctAnswers: [3],
    explanation:
      'Basic Support includes access to account and billing support plus community AWS Discussion Forums and documentation. Senior engineers, TAMs, and full Trusted Advisor checks require paid support plans.',
  },
  {
    id: 'bill-130',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['s3', 'backup', 'storage', 'practice-exam-11', 'sample-exam'],
    question:
      'What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?',
    options: [
      'Amazon S3.',
      'Amazon Glacier.',
      'Amazon EBS.',
      'Amazon EC2 Instance Store.',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon S3 Standard (or Intelligent-Tiering for varying access) provides durable, immediately retrievable object storage at lower cost than provisioned EBS for backup files. Glacier optimizes archival with retrieval delays; instance store is ephemeral.',
  },
  {
    id: 'bill-131',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'business', 'practice-exam-11', 'sample-exam'],
    question:
      'A company needs 24/7 phone, email, and chat access with a response time of less than 1 hour if a production system has a service interruption. Which AWS Support plan meets these requirements at the LOWEST cost?',
    options: ['Basic.', 'Developer.', 'Business.', 'Enterprise.'],
    correctAnswers: [2],
    explanation:
      'Business Support includes 24/7 phone, chat, and email with a one-hour response target for Production System Down cases at the lowest tier that meets all three channels. Developer lacks 24/7 phone/chat; Enterprise costs more.',
  },
  {
    id: 'bill-132',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['dedicated-hosts', 'tco', 'practice-exam-11', 'sample-exam'],
    question:
      'When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?',
    options: [
      'Dedicated Hosts.',
      'Reserved Instances.',
      'On-Demand Instances.',
      'No Upfront Reserved Instances.',
    ],
    correctAnswers: [0],
    explanation:
      'Dedicated Hosts provide physical servers dedicated to a single customer for isolation and license compliance—include their pricing in TCO for physically isolated workloads. Standard Reserved or On-Demand instances share underlying hardware.',
  },
]
