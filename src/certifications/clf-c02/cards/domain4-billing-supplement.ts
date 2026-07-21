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
]
