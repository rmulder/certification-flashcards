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
  {
    id: 'sc-061',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['security-groups', 'ec2', 'sample-exam'],
    question:
      'A company needs to control incoming and outgoing traffic to an Amazon EC2 instance. Which AWS service or feature can the company associate with the EC2 instance to meet this requirement?',
    options: [
      'Network ACL',
      'Security group',
      'AWS WAF',
      'VPC route tables',
    ],
    correctAnswers: [1],
    explanation:
      'A security group is a virtual firewall on an EC2 instance ENI—you define allowed protocols, ports, and source or destination IP ranges for inbound and outbound traffic. NACLs apply at the subnet level; WAF protects web applications; route tables direct traffic rather than filter it.',
  },
  {
    id: 'sc-062',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['cloudhsm', 'encryption', 'sample-exam'],
    question:
      'A security engineer wants a single-tenant AWS solution to create, control, and manage their own cryptographic keys to meet data security regulatory requirements. Which AWS service should the engineer use?',
    options: [
      'AWS Key Management Service (AWS KMS)',
      'AWS Certificate Manager (ACM)',
      'AWS CloudHSM',
      'AWS Systems Manager',
    ],
    correctAnswers: [2],
    explanation:
      'AWS CloudHSM provides dedicated hardware security modules (HSMs) for single-tenant key control. KMS is multi-tenant and AWS-managed; ACM manages TLS certificates; Systems Manager manages operational data and automation.',
  },
  {
    id: 'sc-063',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['secrets-manager', 'credentials', 'sample-exam'],
    question:
      'Which AWS service should be used to store database credentials with the highest security?',
    options: [
      'AWS Identity and Access Management (IAM)',
      'AWS Secrets Manager',
      'Amazon S3',
      'AWS Key Management Service (AWS KMS)',
    ],
    correctAnswers: [1],
    explanation:
      'Secrets Manager securely stores, encrypts, rotates, and retrieves secrets such as database credentials, passwords, and API keys. IAM manages access identities; S3 is object storage; KMS manages encryption keys rather than storing credential payloads.',
  },
  {
    id: 'sc-064',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['security-groups', 'vpc', 'sample-exam'],
    question:
      'A company wants to establish a security layer in their VPC that will act as a firewall to control subnet traffic.',
    options: [
      'Routing tables',
      'Network access control lists (network ACLs)',
      'Security groups',
      'Amazon GuardDuty',
    ],
    correctAnswers: [2],
    explanation:
      'Per this exam item, security groups act as stateful firewalls you associate with instances to allow or deny traffic. NACLs are stateless subnet-level filters; route tables route traffic; GuardDuty detects threats rather than filtering traffic.',
  },
  {
    id: 'sc-065',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'sample-exam'],
    question:
      'Which group shares responsibility with AWS for the security and compliance of AWS accounts and resources?',
    options: ['Outsourced vendors', 'Customers', 'Reseller partners', 'Internet providers'],
    correctAnswers: [1],
    explanation:
      'In the AWS Shared Responsibility Model, customers are responsible for security in the cloud—including identity, access control, and data—while AWS secures the cloud infrastructure.',
  },
  {
    id: 'sc-066',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['security-groups', 'nacl', 'cidr', 'sample-exam'],
    question:
      'Which of the following AWS services or features allow CIDR block notation when providing an IP address range? (Select TWO.)',
    options: [
      'Security groups',
      'Amazon Machine Image (AMI)',
      'Network access control list (network ACL)',
      'AWS Budgets',
      'Amazon Elastic Block Store (Amazon EBS)',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Security groups (instance-level) and network ACLs (subnet-level) use CIDR notation in allow/deny rules for inbound and outbound traffic. AMIs are launch templates; Budgets track spend; EBS provides block storage volumes.',
  },
  {
    id: 'sc-067',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'sample-exam'],
    question:
      'Which tasks are customer responsibilities, according to the AWS Shared Responsibility Model? (Select TWO.)',
    options: [
      'Configure the AWS-provided security group firewall.',
      'Classify the company\'s assets on the AWS cloud.',
      'Determine which Availability Zones to use for Amazon S3 buckets.',
      'Patch or update Amazon DynamoDB.',
      'Select Amazon EC2 instances to run AWS Lambda.',
      'AWS Config',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Customers handle security in the cloud: network access controls such as security group rules and governance tasks like asset classification. AWS patches managed services such as DynamoDB; Lambda is serverless without customer-chosen EC2; AWS Config is a service you enable, not a customer responsibility category in this item.',
  },
  {
    id: 'sc-068',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['waf', 'http', 'sample-exam'],
    question:
      'Which AWS service or feature provides protection against HTTP attacks for users running public-facing web applications?',
    options: [
      'Security Groups',
      'Network ACLs',
      'AWS Shield Standard',
      'AWS WAF',
    ],
    correctAnswers: [3],
    explanation:
      'AWS WAF is a web application firewall that filters HTTP/HTTPS traffic with rules to block exploits such as SQL injection, XSS, and unwanted bots. Security groups and NACLs control network access; Shield Standard mitigates common DDoS attacks at the network edge rather than application-layer HTTP rules.',
  },
  {
    id: 'sc-069',
    domain: 'security-compliance',
    task: '2.4',
    tags: ['abuse', 'compliance', 'sample-exam'],
    question:
      'A company suspects their AWS resources are being used for illegal activities. Which AWS group or team should the company notify?',
    options: [
      'AWS Abuse Team',
      'AWS Support Team',
      'AWS Technical Account Managers',
      'AWS Professional Services Team',
    ],
    correctAnswers: [0],
    explanation:
      'Report suspected abuse of AWS resources (such as spam, malware, or unauthorized access) to the AWS Abuse Team. AWS Support handles account and technical issues; TAMs are Enterprise Support contacts; Professional Services helps with implementation projects.',
  },
  {
    id: 'sc-070',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['iam', 'groups', 'sample-exam'],
    question:
      'A company is setting up its AWS cloud environment. The company\'s administrators need to group users and apply permissions to the group. Which AWS service or feature can the company use to meet these requirements?',
    options: [
      'AWS Organizations',
      'Resource Groups',
      'Resource Tagging',
      'AWS Identity and Access Management (IAM)',
    ],
    correctAnswers: [3],
    explanation:
      'IAM lets you create users and groups and attach policies that grant permissions to all members of a group. Organizations manages multiple accounts; Resource Groups and tags organize resources for operations and billing, not user permission grouping.',
  },
  {
    id: 'sc-071',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['cloudtrail', 'audit', 'sample-exam'],
    question:
      'Which AWS service will help a company identify the user who deleted an Amazon EC2 instance yesterday?',
    options: [
      'Amazon CloudWatch',
      'AWS Trusted Advisor',
      'AWS CloudTrail',
      'Amazon Inspector',
    ],
    correctAnswers: [2],
    explanation:
      'CloudTrail logs AWS API calls, including who terminated an EC2 instance and when. CloudWatch monitors metrics and logs; Trusted Advisor recommends optimizations; Inspector scans for vulnerabilities.',
  },
  {
    id: 'sc-072',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['waf', 'threats', 'sample-exam'],
    question:
      'A company needs to configure rules to identify threats and protect applications from malicious access on the network. Which AWS service should the company use to meet these requirements?',
    options: [
      'AWS Identity and Access Management (IAM)',
      'Amazon QuickSight',
      'AWS WAF',
      'Amazon Detective',
    ],
    correctAnswers: [2],
    explanation:
      'AWS WAF lets you define rules to block malicious web request patterns and common application-layer threats. IAM controls who can call AWS APIs; QuickSight is business intelligence; Detective investigates security findings after the fact rather than inline filtering.',
  },
  {
    id: 'sc-073',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['cloudtrail', 'api', 'sample-exam'],
    question:
      'Which AWS service should a cloud engineer use to visualize API calls to AWS services?',
    options: [
      'Amazon CloudWatch',
      'AWS CloudTrail',
      'AWS Config',
      'AWS Artifact',
    ],
    correctAnswers: [1],
    explanation:
      'CloudTrail logs AWS API activity in your account for audit and review, including the CloudTrail console event history view. CloudWatch monitors performance metrics and application logs; Config tracks resource configuration changes; Artifact provides compliance documents.',
  },
  {
    id: 'sc-074',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['inspector', 'vulnerability', 'sample-exam'],
    question:
      'A company needs an automated vulnerability management service that continuously scans AWS workloads for software vulnerabilities. Which AWS service will meet these requirements?',
    options: [
      'Amazon GuardDuty',
      'Amazon Inspector',
      'AWS Security Hub',
      'AWS Shield',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Inspector continuously discovers and scans EC2, containers, and Lambda for CVEs and unintended network exposure. GuardDuty detects suspicious activity; Security Hub aggregates findings; Shield provides DDoS protection.',
  },
  {
    id: 'sc-075',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['waf', 'shield', 'sample-exam'],
    question:
      'Which AWS services or tools are designed to protect a workload from SQL injection, cross-site scripting, and DDoS attacks? (Select TWO.)',
    options: [
      'VPC endpoint',
      'AWS Shield Standard',
      'AWS Config',
      'AWS WAF',
    ],
    correctAnswers: [1, 3],
    explanation:
      'Per this exam item, AWS WAF filters application-layer web threats such as SQL injection and XSS, and AWS Shield Standard provides baseline DDoS protection for AWS edge services. VPC endpoints enable private access to AWS APIs; Config tracks resource configuration compliance.',
  },
  {
    id: 'sc-076',
    domain: 'security-compliance',
    task: '2.4',
    tags: ['artifact', 'pci', 'compliance', 'sample-exam'],
    question:
      'A company has an online shopping website and wants to store customer credit card data. The company must comply with Payment Card Industry (PCI) standards. Which AWS service helps the company access compliance documentation and reports for PCI?',
    options: [
      'Amazon Cloud Directory',
      'AWS Artifact',
      'AWS Trusted Advisor',
      'Amazon Inspector',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Artifact provides on-demand AWS compliance reports, certifications, and agreements (including PCI-related documentation) for customer audits. Cloud Directory is a directory database; Trusted Advisor recommends optimizations; Inspector scans for vulnerabilities.',
  },
  {
    id: 'sc-077',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['inspector', 'assessment', 'sample-exam'],
    question:
      'How can an AWS user perform security assessments on Amazon EC2 instances, NAT gateways, and Elastic Load Balancers in an AWS-approved manner?',
    options: [
      'Flood a target with requests',
      'Use Amazon Inspector',
      'Conduct penetration testing',
      'Use the AWS Service Health Dashboard',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Inspector runs automated security assessments on EC2, containers, and related workloads and reports findings by severity. Unauthorized flooding resembles attack traffic; penetration testing has separate AWS policies; Service Health Dashboard shows AWS service events, not your resource assessments.',
  },
  {
    id: 'sc-078',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['security-groups', 'ec2', 'sample-exam'],
    question:
      'Which of the following acts as a firewall at the instance level to control inbound and outbound access?',
    options: [
      'Network access control list',
      'Security groups',
      'AWS Trusted Advisor',
      'Virtual private gateways',
    ],
    correctAnswers: [1],
    explanation:
      'Security groups are stateful firewalls attached to EC2 instance ENIs that control inbound and outbound traffic. Network ACLs filter at the subnet level; Trusted Advisor gives recommendations; virtual private gateways connect on-premises networks to a VPC.',
  },
  {
    id: 'sc-079',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['iam', 'roles', 'sample-exam'],
    question:
      'A company has teams with different job functions and responsibilities. The company\'s employees frequently change teams. The company needs to manage the employees\' permissions to be appropriate for the job responsibilities. Which IAM feature should the company use to meet this requirement with the LEAST operational overhead?',
    options: [
      'IAM user groups',
      'IAM roles',
      'IAM instance profiles',
      'IAM policies for individual users',
    ],
    correctAnswers: [1],
    explanation:
      'IAM roles grant temporary permissions users assume when they change function, without attaching new policies to each user individually. Groups help but still require moving users between groups; instance profiles attach roles to EC2; per-user policies create high overhead when teams change often.',
  },
  {
    id: 'sc-080',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['kms', 'cloudhsm', 'encryption', 'sample-exam'],
    question:
      'Which AWS services provide a way to generate encryption keys that can be used to encrypt data? (Select TWO)',
    options: [
      'Amazon Macie',
      'AWS Certificate Manager',
      'AWS Key Management Service (AWS KMS)',
      'AWS Secrets Manager',
      'AWS CloudHSM',
    ],
    correctAnswers: [2, 4],
    explanation:
      'AWS KMS creates and manages encryption keys in AWS-managed software HSMs; AWS CloudHSM provides dedicated hardware security modules with more control over key generation. Macie classifies sensitive S3 data; ACM issues TLS certificates for data in transit; Secrets Manager stores secrets (using encryption) rather than serving as your general key-generation service for arbitrary data.',
  },
  {
    id: 'sc-081',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['encryption', 'client-side', 'study-guide'],
    question:
      'Which encryption approach protects data at every step of its lifecycle by encrypting on the client before upload?',
    options: [
      'Client-side encryption',
      'Server-side encryption with Amazon S3-managed keys (SSE-S3)',
      'AWS Shield Standard',
      'Amazon GuardDuty',
    ],
    correctAnswers: [0],
    explanation:
      'Client-side encryption means data is encrypted before it leaves the customer environment and remains encrypted in transit and at rest until the customer decrypts it. SSE-S3 encrypts after upload inside S3; Shield and GuardDuty address DDoS and threat detection, not end-to-end data encryption.',
  },
  {
    id: 'sc-082',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['cli', 'access-keys', 'study-guide'],
    question: 'How are requests to the AWS Command Line Interface (AWS CLI) authenticated?',
    options: [
      'Access key ID and secret access key',
      'IAM user console password only',
      'AWS account root email address',
      'Amazon Cognito user pool token only',
    ],
    correctAnswers: [0],
    explanation:
      'The AWS CLI uses programmatic credentials—an access key ID paired with a secret access key—configured through aws configure or environment variables. Console passwords are for web sign-in; Cognito serves application end users, not CLI administration by default.',
  },
  {
    id: 'sc-083',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'programmatic-access', 'study-guide'],
    question:
      'An IAM user is created with programmatic access only for API and CLI use. Which credential is NOT required?',
    options: [
      'Console password',
      'Access key ID',
      'Secret access key',
      'IAM permissions via policies',
    ],
    correctAnswers: [0],
    explanation:
      'Programmatic-only IAM users authenticate with access keys for APIs and the CLI—they do not sign in to the AWS Management Console and therefore do not need a console password or MFA for console login. They still need policies granting permitted actions.',
  },
  {
    id: 'sc-084',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['ebs', 'encryption', 'study-guide'],
    question:
      'When can you enable encryption on an existing Amazon EBS volume that was created unencrypted?',
    options: [
      'You cannot—EBS volumes must be encrypted at creation time',
      'Any time using the EC2 console Encrypt button',
      'Automatically on the next reboot',
      'Only during a snapshot restore to a new volume',
    ],
    correctAnswers: [0],
    explanation:
      'Per AWS design, EBS encryption is selected when the volume is created. To encrypt existing data, create an encrypted snapshot or copy to a new encrypted volume— you cannot toggle encryption on an in-place unencrypted volume.',
  },
  {
    id: 'sc-085',
    domain: 'security-compliance',
    task: '2.4',
    tags: ['security-groups', 'vpc', 'study-guide'],
    question:
      'What are the default rules when you create a new Amazon EC2 security group?',
    options: [
      'No inbound rules; outbound traffic to all destinations is allowed',
      'Inbound HTTP and HTTPS from anywhere; no outbound rules',
      'Deny all inbound and outbound traffic until you add allow rules',
      'Allow all inbound and outbound traffic until you add deny rules',
    ],
    correctAnswers: [0],
    explanation:
      'Security groups are stateful and allow-only: a new group has no inbound rules (implicit deny inbound) and a default outbound rule allowing all traffic. You add inbound allow rules as needed; security groups cannot contain explicit deny rules.',
  },
  {
    id: 'sc-086',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'rds', 'sample-exam'],
    question:
      'Under the AWS Shared Responsibility Model, who is responsible for securing the database schema and data in Amazon RDS?',
    options: [
      'The customer',
      'AWS',
      'Neither—the service is fully managed with no customer security tasks',
      'A third-party auditor assigned by AWS',
    ],
    correctAnswers: [0],
    explanation:
      'AWS secures the cloud infrastructure running RDS (host OS patching, physical security). Customers secure data in the cloud: database schema design, user permissions, encryption choices, network access (security groups), and application-level controls.',
  },
  {
    id: 'sc-087',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'rds', 'ec2', 'sample-exam'],
    question:
      'When comparing Amazon RDS to running a database on self-managed Amazon EC2 instances, which statement is correct?',
    options: [
      'RDS offloads more database management tasks (such as patching and backups) to AWS than self-managed databases on EC2',
      'Customers patch the database engine on RDS just as they would on EC2',
      'AWS has no responsibility for RDS infrastructure security',
      'EC2 always requires less customer operational responsibility than RDS',
    ],
    correctAnswers: [0],
    explanation:
      'Managed RDS handles infrastructure tasks like engine patching, automated backups, and Multi-AZ failover options. On EC2, customers manage the guest OS, database installation, patching, and backup strategy. Both models still require customers to secure data and access.',
  },
]
