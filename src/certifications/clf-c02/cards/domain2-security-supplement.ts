import type { Card } from '../../../core/types'

/** Additional CLF-C02 practice questions — sample exams & exam guide (Domain 2) */
export const securitySupplementCards: Card[] = [
  {
    id: 'sc-046',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['inspector', 'vulnerability'],
    question:
      'A team runs web applications on EC2 and needs automated assessment of application vulnerabilities and deviations from security best practices. Which service should they use?',
    options: [
      'Amazon Inspector',
      'AWS Trusted Advisor',
      'Amazon CloudFront',
      'AWS Cost Explorer',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Inspector scans EC2 instances and container images for software vulnerabilities and unintended network exposure. Trusted Advisor gives broader optimization checks, not deep app vulnerability assessment.',
  },
  {
    id: 'sc-047',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['artifact', 'compliance'],
    question:
      'Where can you download AWS compliance reports such as SOC and PCI attestations for your audits?',
    options: ['AWS Artifact', 'Amazon S3 console', 'AWS Pricing Calculator', 'Amazon Connect'],
    correctAnswers: [0],
    explanation:
      'AWS Artifact provides on-demand access to AWS compliance reports and agreements for customer audit and compliance programs.',
  },
  {
    id: 'sc-048',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['iam-identity-center', 'sso'],
    question:
      'A company wants single sign-on for employees to access multiple AWS accounts and business applications. Which service is designed for this?',
    options: [
      'AWS IAM Identity Center (AWS SSO)',
      'Amazon Cognito user pools for workforce only',
      'AWS KMS',
      'Amazon Macie',
    ],
    correctAnswers: [0],
    explanation:
      'IAM Identity Center centralizes workforce access to AWS accounts and SAML-enabled applications. Cognito is primarily for application end users.',
  },
  {
    id: 'sc-049',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['secrets-manager', 'credentials'],
    question:
      'Which service helps store and automatically rotate database credentials, API keys, and other secrets?',
    options: [
      'AWS Secrets Manager',
      'Amazon S3 Glacier',
      'AWS CloudFormation',
      'Amazon Route 53',
    ],
    correctAnswers: [0],
    explanation:
      'Secrets Manager stores secrets with optional automatic rotation and integrates with RDS, Lambda, and other services.',
  },
  {
    id: 'sc-050',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['security-hub', 'aggregation'],
    question:
      'Which service aggregates security findings from GuardDuty, Inspector, and third-party tools into a single dashboard?',
    options: [
      'AWS Security Hub',
      'AWS Shield Advanced only',
      'Amazon EFS',
      'AWS Budgets',
    ],
    correctAnswers: [0],
    explanation:
      'Security Hub collects, organizes, and prioritizes security findings across AWS accounts and supported partner products.',
  },
  {
    id: 'sc-051',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['encryption', 'transit'],
    question:
      'Which option protects data in transit between a client and an Application Load Balancer?',
    options: [
      'TLS/SSL certificates from AWS Certificate Manager (ACM)',
      'S3 Object Lock',
      'EBS volume encryption at rest only',
      'IAM password policy',
    ],
    correctAnswers: [0],
    explanation:
      'ACM provides TLS certificates for encrypting data in transit to ALB, CloudFront, and API Gateway endpoints.',
  },
  {
    id: 'sc-052',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'lambda'],
    question:
      'When using AWS Lambda, which security task is AWS responsible for?',
    options: [
      'Patching and securing the underlying compute infrastructure',
      'Writing secure application code inside the function',
      'Configuring IAM roles for the function',
      'Encrypting sensitive data in environment variables (customer choice)',
    ],
    correctAnswers: [0],
    explanation:
      'For Lambda, AWS manages the infrastructure and runtime patching. Customers secure their code, IAM permissions, and data handling.',
  },
  {
    id: 'sc-053',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['cognito', 'authentication'],
    question:
      'Which service provides user sign-up, sign-in, and authentication for web and mobile application end users?',
    options: [
      'Amazon Cognito',
      'AWS IAM for application customers',
      'AWS Organizations',
      'AWS Control Tower',
    ],
    correctAnswers: [0],
    explanation:
      'Cognito handles customer identity for apps with user pools and identity pools. IAM manages AWS resource access for administrators and workloads.',
  },
  {
    id: 'sc-054',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['detective', 'cloudtrail'],
    question:
      'Which service records AWS API calls and delivers audit logs for security analysis and compliance?',
    options: [
      'AWS CloudTrail',
      'Amazon CloudWatch metrics only',
      'AWS Pricing Calculator',
      'Amazon QuickSight',
    ],
    correctAnswers: [0],
    explanation:
      'CloudTrail logs management events and data events (optional) for who did what on AWS. CloudWatch monitors performance metrics and logs from applications.',
  },
  {
    id: 'sc-055',
    domain: 'security-compliance',
    task: '2.4',
    tags: ['trusted-advisor', 'security'],
    question:
      'Which AWS service provides automated checks including open security groups, MFA on root, and public S3 buckets?',
    options: [
      'AWS Trusted Advisor',
      'Amazon Textract',
      'AWS Snowball',
      'Amazon Kendra',
    ],
    correctAnswers: [0],
    explanation:
      'Trusted Advisor inspects your environment and recommends improvements across security, performance, cost, and fault tolerance.',
  },
  {
    id: 'sc-056',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['shield', 'ddos'],
    question:
      'Which AWS service provides managed Distributed Denial of Service (DDoS) protection for applications?',
    options: [
      'AWS Shield',
      'AWS WAF only',
      'Amazon Inspector',
      'AWS Artifact',
    ],
    correctAnswers: [0],
    explanation:
      'Shield provides DDoS protection for CloudFront, Route 53, and Elastic Load Balancing. WAF filters application-layer web requests.',
  },
  {
    id: 'sc-057',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['root-user', 'tasks'],
    question:
      'Which action can ONLY be performed by the AWS account root user?',
    options: [
      'Change the AWS account name and close the AWS account',
      'Create IAM users',
      'Attach IAM policies to roles',
      'Launch EC2 instances',
    ],
    correctAnswers: [0],
    explanation:
      'Only the root user can change account settings like the account name, root email, and account closure. Day-to-day tasks should use IAM users or roles.',
  },
  {
    id: 'sc-058',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['audit-manager', 'compliance'],
    question:
      'Which service helps continuously audit AWS usage against compliance frameworks and map controls to evidence?',
    options: [
      'AWS Audit Manager',
      'Amazon Lex',
      'AWS Batch',
      'Amazon Lightsail',
    ],
    correctAnswers: [0],
    explanation:
      'Audit Manager automates evidence collection for audits against standards like GDPR, HIPAA, and PCI DSS.',
  },
  {
    id: 'sc-059',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'rds'],
    question:
      'For Amazon RDS, which task is typically AWS responsibility compared to self-managed databases on EC2?',
    options: [
      'Patching the database engine and underlying OS',
      'Configuring security groups for the database',
      'Encrypting data using customer-managed keys (optional)',
      'Managing database user accounts and permissions',
    ],
    correctAnswers: [0],
    explanation:
      'RDS is a managed service: AWS handles patching and infrastructure. Customers configure access, encryption options, and database-level security.',
  },
  {
    id: 'sc-060',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['config', 'governance'],
    question:
      'Which service tracks AWS resource configuration changes over time and evaluates rules for compliance?',
    options: [
      'AWS Config',
      'Amazon GuardDuty',
      'AWS Cost Anomaly Detection',
      'Amazon Polly',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Config records configuration history and supports conformance packs to check resources against desired settings.',
  },
]
