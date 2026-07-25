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
  {
    id: 'sc-088',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['iam', 'federation', 'saml', 'oidc', 'crucial-exams'],
    question:
      'Which protocols does AWS identity federation commonly use to integrate external identity providers with IAM?',
    options: [
      'SAML 2.0 and OpenID Connect (OIDC)',
      'SMTP and FTP',
      'SNMP and ICMP',
      'HTTP only without any identity standard',
    ],
    correctAnswers: [0],
    explanation:
      'Federated access lets users sign in with corporate or social credentials from an external IdP. AWS supports SAML 2.0 and OIDC so users authenticate externally and receive temporary AWS credentials through IAM roles.',
  },
  {
    id: 'sc-089',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['kms', 'encryption', 'cmk', 'crucial-exams'],
    question:
      'What is a key difference between a customer-managed CMK and an AWS-managed CMK in AWS KMS?',
    options: [
      'Customer-managed CMKs give you more control, including key policy and rotation settings',
      'AWS-managed CMKs cannot encrypt any AWS service data',
      'Customer-managed CMKs are always free with no API charges',
      'Only AWS-managed CMKs support envelope encryption',
    ],
    correctAnswers: [0],
    explanation:
      'Both key types can encrypt data, but customer-managed CMKs let you define key policies, enable automatic rotation, and schedule deletion. AWS-managed CMKs are created and rotated automatically by AWS for integrated services with less customer control.',
  },
  {
    id: 'sc-090',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['iam', 'access-keys', 'examtopics'],
    question:
      'Which action helps improve security for IAM users who authenticate with access keys?',
    options: [
      'Rotate access keys on a recurring basis',
      'Embed access keys in application source code',
      'Share one access key across all developers',
      'Disable MFA for API-only users',
    ],
    correctAnswers: [0],
    explanation:
      'Regularly rotating access keys limits exposure if a key is compromised. Never embed keys in code or share them broadly; MFA adds protection for console and programmatic access where supported.',
  },
  {
    id: 'sc-091',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['iam', 'ec2', 's3', 'examtopics', 'sample-exam'],
    question:
      'According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?',
    options: [
      'Hard code an IAM user’s secret key and access key directly in the application, and upload the file.',
      'Store the IAM user’s secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.',
      'Have the EC2 instance assume a role to obtain the privileges to upload the file.',
      'Modify the S3 bucket policy so that any service can upload to it at any time.',
    ],
    correctAnswers: [2],
    explanation:
      'Attach an IAM role to the EC2 instance (via an instance profile) so the application receives temporary credentials to upload to S3—never embed or store long-lived IAM user access keys on the instance. Hard-coded keys, files on disk, and overly permissive bucket policies all increase credential exposure and blast radius.',
  },
  {
    id: 'sc-092',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'dynamodb', 'examtopics', 'sample-exam'],
    question:
      'Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?',
    options: [
      'Physical security of DynamoDB',
      'Patching of DynamoDB',
      'Access to DynamoDB tables',
      'Encryption of data at rest in DynamoDB',
    ],
    correctAnswers: [2],
    explanation:
      'Customers are responsible for security in the cloud, including who can access DynamoDB tables and data through IAM policies, fine-grained access control, and application logic. AWS secures the cloud infrastructure: physical facilities, patching the managed DynamoDB service, and operating the underlying platform.',
  },
  {
    id: 'sc-093',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['inspector', 'vulnerability', 'examtopics', 'sample-exam'],
    question:
      'A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?',
    options: [
      'AWS Trusted Advisor',
      'Amazon Inspector',
      'AWS Config',
      'Amazon GuardDuty',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Inspector continuously assesses EC2 instances, containers, and Lambda for software vulnerabilities and unintended network exposure against best practices. Trusted Advisor gives broad account recommendations across cost and security but not deep vulnerability scanning; Config tracks resource configuration compliance over time; GuardDuty detects suspicious activity from logs.',
  },
  {
    id: 'sc-140',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['cloudtrail', 'audit', 'examtopics', 'sample-exam'],
    question:
      'You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?',
    options: [
      'Amazon Inspector',
      'AWS CloudTrail',
      'AWS Trusted Advisor',
      'EC2 Instance Usage Report',
    ],
    correctAnswers: [1],
    explanation:
      'AWS CloudTrail records API activity in your account, including who terminated EC2 instances and when. Inspector scans for vulnerabilities; Trusted Advisor recommends best practices; the EC2 Instance Usage Report shows usage hours for billing, not the identity behind API actions.',
  },
  {
    id: 'sc-141',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['iam', 'groups', 'examtopics', 'sample-exam'],
    question:
      'An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?',
    options: [
      'IAM roles',
      'IAM users',
      'IAM user groups',
      'AWS Organizations',
    ],
    correctAnswers: [2],
    explanation:
      'IAM user groups let you organize IAM users into teams and attach policies once to the group so every member inherits the same permissions. IAM users are individual identities; roles grant temporary credentials (often for services or federated access); AWS Organizations manages multiple accounts, not user grouping within an account.',
  },
  {
    id: 'sc-142',
    domain: 'security-compliance',
    task: '2.4',
    tags: ['artifact', 'compliance', 'agreements', 'examtopics', 'sample-exam'],
    question:
      'Which of the following services allows customers to manage their agreements with AWS?',
    options: [
      'AWS Artifact',
      'AWS Certificate Manager',
      'AWS Systems Manager',
      'AWS Organizations',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Artifact provides on-demand access to AWS compliance reports, certifications, and agreements (such as the Business Associate Agreement for HIPAA). ACM manages TLS certificates; Systems Manager automates operational tasks on instances; Organizations consolidates billing and policies across accounts.',
  },
  {
    id: 'sc-143',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['iam', 'cli', 'access-keys', 'examtopics', 'sample-exam'],
    question:
      'Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?',
    options: [
      'Access keys',
      'Secret token',
      'UserID',
      'User name and password',
    ],
    correctAnswers: [0],
    explanation:
      'The AWS CLI uses programmatic credentials: an access key ID and secret access key (often referred to collectively as access keys). Console sign-in uses a user name and password; there is no standalone “secret token” or UserID field for standard CLI authentication.',
  },
  {
    id: 'sc-144',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['security-groups', 'nacl', 'ddos', 'network', 'examtopics', 'sample-exam'],
    question:
      'Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO.)',
    options: [
      'AWS CloudHSM',
      'Security Groups',
      'AWS Batch',
      'AWS IAM',
      'Network Access Control Lists (Network ACLs)',
    ],
    correctAnswers: [1, 4],
    explanation:
      'Security groups (stateful, instance-level) and network ACLs (stateless, subnet-level) filter inbound and outbound traffic to EC2, limiting exposure to unwanted volumes or types of traffic. CloudHSM manages hardware keys; IAM controls identities and permissions; Batch runs batch jobs—they do not act as VPC traffic filters for DDoS mitigation at the network edge.',
  },
  {
    id: 'sc-145',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['organizations', 'scp', 'examtopics', 'sample-exam'],
    question:
      'A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?',
    options: [
      'IAM Principals',
      'AWS Service Control Policies (SCPs)',
      'IAM policies',
      'AWS Fargate',
    ],
    correctAnswers: [1],
    explanation:
      'Service Control Policies (SCPs) set permission guardrails for accounts in an AWS Organization—they define the maximum actions and services member accounts can use, even if an IAM policy is more permissive. IAM principals and policies govern identities within an account; Fargate is serverless container compute.',
  },
  {
    id: 'sc-146',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['security-groups', 'nacl', 'network', 'examtopics', 'sample-exam'],
    question:
      'Which of the following is used to control network traffic in AWS? (Choose TWO.)',
    options: [
      'Network Access Control Lists (NACLs)',
      'Key Pairs',
      'Access Keys',
      'IAM Policies',
      'Security Groups',
    ],
    correctAnswers: [0, 4],
    explanation:
      'Security groups act as stateful virtual firewalls on EC2 ENIs; network ACLs are stateless subnet-level filters—both control network traffic in a VPC. Key pairs authenticate SSH/RDP to instances; access keys authenticate API calls; IAM policies grant permissions to AWS actions—they do not filter packets.',
  },
  {
    id: 'sc-147',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['acm', 'route-53', 'tls', 'https', 'examtopics', 'sample-exam'],
    question:
      'A developer needs to set up an SSL security certificate for a client’s eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO.)',
    options: [
      'Amazon Route 53',
      'AWS ACM',
      'AWS Directory Service',
      'AWS Identity & Access Management',
      'AWS Data Pipeline',
    ],
    correctAnswers: [0, 1],
    explanation:
      'AWS Certificate Manager (ACM) provisions and manages free SSL/TLS certificates for use with services such as Elastic Load Balancing and CloudFront to enable HTTPS. Amazon Route 53 supports DNS validation for ACM certificates and routes domain traffic to secured endpoints. Directory Service is for directories; IAM manages access identities; Data Pipeline moves data between services.',
  },
  {
    id: 'sc-148',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'mfa', 'authentication', 'examtopics', 'sample-exam'],
    question:
      'Which of the following is a type of MFA device that customers can use to protect their AWS resources?',
    options: [
      'AWS CloudHSM.',
      'U2F Security Key.',
      'AWS Access Keys.',
      'AWS Key Pair.',
    ],
    correctAnswers: [1],
    explanation:
      'IAM supports MFA devices including virtual authenticator apps, hardware TOTP tokens, and FIDO U2F security keys as a second authentication factor. CloudHSM stores and manages encryption keys in dedicated hardware—it is not an MFA device. Access keys and EC2 key pairs authenticate API or SSH access but are not MFA factors.',
  },
  {
    id: 'sc-149',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'dynamodb', 'least-privilege', 'examtopics', 'sample-exam'],
    question:
      'A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?',
    options: [
      'Create an IAM role and attach a policy with Amazon DynamoDB access permissions.',
      'Create an IAM role and attach a policy with Administrator access permissions.',
      'Create an IAM user and attach a policy with Amazon DynamoDB access permissions.',
      'Create an IAM user and attach a policy with Administrator access permissions.',
    ],
    correctAnswers: [2],
    explanation:
      'For long-term human access, create an individual IAM user (or use IAM Identity Center in larger organizations) and grant only the permissions needed—here, DynamoDB management—following least privilege. Administrator access is overly broad. IAM roles are intended for temporary credentials assumed by users, applications, or AWS services, not as the primary pattern for standing employee console access on this exam item.',
  },
  {
    id: 'sc-150',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['incident-response', 'iam', 'cloudtrail', 'examtopics', 'sample-exam'],
    question:
      'What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)',
    options: [
      'Stop all running services and open an investigation.',
      'Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.',
      'Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.',
      'Open an investigation and delete any potentially compromised IAM users.',
      'Change your AWS root account password and the passwords of any IAM users.',
    ],
    correctAnswers: [3, 4],
    explanation:
      'Unexpected resources may indicate unauthorized access—investigate (for example with CloudTrail) and remove compromised identities, then rotate credentials starting with the root account and affected IAM users. Do not share the root password with anyone, including AWS Support. Blindly stopping every service or deleting all IAM users can disrupt legitimate workloads and lock out authorized staff.',
  },
  {
    id: 'sc-151',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'rds', 'examtopics', 'sample-exam'],
    question:
      'For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)',
    options: [
      'Database setup.',
      'Network traffic protection.',
      'Management of the operating system.',
      'Access management.',
      'Management of firewall rules.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'With Amazon RDS, AWS handles provisioning and routine management of the database instance and underlying operating system (including OS patching). Customers configure VPC networking, security groups (firewall rules), and who can access the database through IAM and database credentials. AWS secures the cloud infrastructure globally; customers implement security in the cloud for their RDS deployments.',
  },
  {
    id: 'sc-152',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['s3', 'encryption', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)',
    options: [
      'Delete the encryption keys once your data is encrypted.',
      'With AWS you do not need to worry about encryption.',
      'Enable S3 Encryption.',
      'Encrypt the data prior to uploading it.',
      'Delete all IAM users that have access to S3.',
    ],
    correctAnswers: [2, 3],
    explanation:
      'Protect S3 data with server-side encryption (SSE-S3, SSE-KMS, or SSE-C) and/or client-side encryption before upload. Deleting keys makes data unreadable; encryption remains a shared responsibility—not optional “set and forget”; removing all IAM users breaks legitimate access instead of securing it.',
  },
  {
    id: 'sc-153',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'policy', 'practice-exam-7', 'sample-exam'],
    question: 'What can you use to assign permissions directly to an IAM user?',
    options: ['IAM Identity.', 'IAM Group.', 'IAM Role.', 'IAM Policy.'],
    correctAnswers: [3],
    explanation:
      'Attach IAM policies (managed or inline) directly to a user to grant permissions. Groups bundle users with shared policies; roles grant temporary credentials to principals that assume them—they are not attached as standing user permissions in the same way.',
  },
  {
    id: 'sc-154',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['kms', 'cloudhsm', 'encryption', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)',
    options: [
      'AWS KMS.',
      'AWS Certificate Manager.',
      'AWS CodeDeploy.',
      'AWS CodeCommit.',
      'CloudHSM.',
    ],
    correctAnswers: [0, 4],
    explanation:
      'AWS KMS creates and controls encryption keys for AWS services and your applications. AWS CloudHSM provides dedicated hardware security modules when you need single-tenant HSM control. ACM manages TLS certificates; CodeDeploy and CodeCommit handle deployments and source control—not encryption key management.',
  },
  {
    id: 'sc-155',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'credential-report', 'practice-exam-7', 'sample-exam'],
    question:
      'Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?',
    options: [
      'AWS CloudTrail Trails.',
      'IAM Credential Report.',
      'AWS Artifact reports.',
      'AWS Cost and Usage Report.',
    ],
    correctAnswers: [1],
    explanation:
      'The IAM credential report lists all IAM users and the status of passwords, access keys, and MFA devices. CloudTrail logs API activity; Artifact hosts compliance documents; the Cost and Usage Report is billing data.',
  },
  {
    id: 'sc-156',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['security-resources', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following security resources are available to any user for free? (Choose TWO)',
    options: [
      'AWS Bulletins.',
      'AWS TAM.',
      'AWS Support APl.',
      'AWS Security Blog.',
      'AWS Classroom Training.',
    ],
    correctAnswers: [0, 3],
    explanation:
      'AWS publishes free security guidance through AWS Security Bulletins and the AWS Security Blog. A Technical Account Manager requires Enterprise Support; the Support API and Classroom Training are not free general security resources for all users.',
  },
  {
    id: 'sc-157',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['s3', 'versioning', 'practice-exam-7', 'sample-exam'],
    question: 'How can you protect data stored on Amazon S3 from accidental deletion?',
    options: [
      'By enabling S3 Versioning.',
      'By configuring S3 Bucket Policies.',
      'By configuring S3 Lifecycle Policies.',
      'By disabling S3 Cross-Region Replication (CRR).',
    ],
    correctAnswers: [0],
    explanation:
      'S3 Versioning keeps prior versions of objects so you can restore data after accidental deletes or overwrites. Bucket policies control access; lifecycle rules transition or expire objects; disabling CRR does not protect against deletion.',
  },
  {
    id: 'sc-158',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?',
    options: [
      'Securing regions and edge locations.',
      'Performing auditing tasks.',
      'Monitoring AWS resources usage.',
      'Securing access to AWS resources.',
    ],
    correctAnswers: [0],
    explanation:
      'AWS is responsible for security of the cloud: physical data centers, Regions, Availability Zones, edge locations, and the global infrastructure. Customers audit and monitor their own workloads, configure access controls, and manage how resources are used.',
  },
  {
    id: 'sc-159',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['dynamodb', 'shared-responsibility', 'practice-exam-7', 'sample-exam'],
    question:
      'Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?',
    options: [
      'Your security team.',
      'Your development team.',
      'AWS.',
      'Your internal DevOps team.',
    ],
    correctAnswers: [2],
    explanation:
      'Amazon DynamoDB is a fully managed serverless database—AWS handles partitioning, replication, and scaling capacity (including on-demand and auto scaling modes). Customers design access patterns, encryption, and application logic.',
  },
  {
    id: 'sc-160',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'compliance', 'practice-exam-7', 'sample-exam'],
    question:
      'According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)',
    options: [
      'Awareness and Training.',
      'Communications controls.',
      'Data center security controls.',
      'Environmental controls.',
      'Resource Configuration Management.',
    ],
    correctAnswers: [2, 3],
    explanation:
      'Customers inherit AWS-managed physical and environmental controls for data centers (facilities, power, cooling, physical access). Awareness and training, communications, and resource configuration management remain customer responsibilities in the cloud.',
  },
  {
    id: 'sc-161',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['well-architected', 'security', 'practice-exam-7', 'sample-exam'],
    question:
      'Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)',
    options: [
      'Use manual monitoring techniques to protect your AWS resources.',
      'Use IAM roles to grant temporary access instead of long-term credentials.',
      'Scale horizontally to protect from failures.',
      'Enable real-time traceability.',
      'Never store sensitive data in the cloud.',
    ],
    correctAnswers: [1, 3],
    explanation:
      'The security pillar emphasizes granting temporary credentials through IAM roles and enabling traceability (for example with logging and monitoring) to detect and investigate events. Automate—not manual-only—monitoring; horizontal scaling supports reliability; sensitive data can be stored securely with proper controls.',
  },
  {
    id: 'sc-162',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['compliance', 'certifications', 'practice-exam-7', 'sample-exam'],
    question: 'How does AWS help customers achieve compliance in the cloud?',
    options: [
      'It’s not possible to meet regulatory compliance requirements in the Cloud.',
      'AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations.',
      'AWS has many common assurance certifications such as ISO 9001 and HIPAA.',
      'Many AWS services are assessed regularly to comply with local laws and regulations.',
    ],
    correctAnswers: [2],
    explanation:
      'AWS maintains a broad compliance program with third-party attestations and certifications (including ISO and HIPAA-eligible services) customers can leverage in their own compliance efforts. Customers remain responsible for configuring workloads to meet their regulatory obligations—AWS does not automatically comply on their behalf.',
  },
  {
    id: 'sc-163',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['ec2', 'dedicated-hosts', 'compliance', 'practice-exam-7', 'sample-exam'],
    question:
      'For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?',
    options: [
      'Use EC2 Dedicated Hosts.',
      'Use EC2 Reserved Instances.',
      'Use EC2 Spot Instances.',
      'Use EC2 On-demand Instances.',
    ],
    correctAnswers: [0],
    explanation:
      'EC2 Dedicated Hosts are physical servers dedicated to a single customer, helping meet requirements for hardware isolation and bring-your-own-license scenarios. Reserved, Spot, and standard On-Demand instances do not guarantee dedicated physical hardware tenancy.',
  },
  {
    id: 'sc-164',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'migration', 'practice-exam-7', 'sample-exam'],
    question:
      'A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?',
    options: [
      'AWS IAM.',
      'AWS Outposts.',
      'AWS Federation.',
      'Amazon Redshift.',
    ],
    correctAnswers: [0],
    explanation:
      'AWS IAM manages users, groups, roles, and policies for access control in AWS—the cloud equivalent of identity and permission management. Outposts runs AWS on-premises hardware; Federation integrates external IdPs but IAM remains the core AWS identity service; Redshift is a data warehouse.',
  },
  {
    id: 'sc-165',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['rds', 'security-groups', 'practice-exam-8', 'sample-exam'],
    question:
      'What is the main benefit of attaching security groups to an Amazon RDS instance?',
    options: [
      'Manages user access and encryption keys.',
      'Controls what IP address ranges can connect to your database instance.',
      'Deploys SSL/TLS certificates for use with your database instance.',
      'Distributes incoming traffic across multiple targets.',
    ],
    correctAnswers: [1],
    explanation:
      'RDS security groups act as virtual firewalls controlling which IP addresses or security groups can reach the database port. IAM manages identities; ACM or RDS features handle TLS certificates; load balancers distribute traffic—not security groups.',
  },
  {
    id: 'sc-167',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'ec2', 'practice-exam-8', 'sample-exam'],
    question: 'Which statement is true in relation to security in AWS?',
    options: [
      'AWS manages everything related to EC2 operating systems.',
      'AWS customers are responsible for patching any database software running on Amazon EC2.',
      'Server side encryption is the responsibility of AWS.',
      'AWS is responsible for the security of your application.',
    ],
    correctAnswers: [1],
    explanation:
      'Self-managed databases on EC2 follow the customer responsibility model—you patch and maintain the database engine and guest OS. AWS patches the hypervisor and physical infrastructure; SSE options depend on service and configuration; application security is always customer-owned.',
  },
  {
    id: 'sc-168',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'roles', 'practice-exam-8', 'sample-exam'],
    question:
      'What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)',
    options: [
      'An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.',
      'An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.',
      'IAM users are more cost effective than IAM roles.',
      'A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.',
      'An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it.',
    ],
    correctAnswers: [0, 1],
    explanation:
      'IAM users represent people or apps with long-term credentials (passwords and access keys). IAM roles grant temporary credentials when assumed by users, services, or federated identities—there is no separate IAM pricing difference between users and roles.',
  },
  {
    id: 'sc-169',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['guardduty', 'practice-exam-8', 'sample-exam'],
    question: 'What does Amazon GuardDuty do to protect AWS accounts and workloads?',
    options: [
      'Notifies AWS customers about abuse events once they are reported.',
      'Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.',
      'Helps AWS customers identify the root cause of potential security issues.',
      'Checks security groups for rules that allow unrestricted access to AWS. resources.',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon GuardDuty is a threat detection service that analyzes CloudTrail, VPC Flow Logs, and DNS logs for malicious activity. Abuse reporting uses the AWS Abuse team; root-cause analysis is your operational response; unrestricted security group checks appear in Trusted Advisor or Config—not GuardDuty’s core function.',
  },
  {
    id: 'sc-170',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'access-keys', 'practice-exam-8', 'sample-exam'],
    question:
      'Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)',
    options: [
      'IAM group.',
      'IAM user.',
      'IAM role.',
      'AWS account root user.',
      'TAM.',
    ],
    correctAnswers: [1, 3],
    explanation:
      'IAM users and the AWS account root user can have long-term access keys for programmatic API access. IAM roles provide temporary credentials when assumed; groups bundle users but do not have their own keys; a TAM is a person on Enterprise Support, not an AWS identity type.',
  },
  {
    id: 'sc-171',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['cloudfront', 'shield', 'waf', 'practice-exam-8', 'sample-exam'],
    question:
      'Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?',
    options: [
      'Amazon EFS.',
      'AWS Secrets Manager.',
      'AWS Systems Manager.',
      'Amazon CloudFront.',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon CloudFront integrates with AWS WAF and AWS Shield (Standard included; Advanced optional) to mitigate DDoS and application-layer attacks at the edge. EFS is file storage; Secrets Manager stores secrets; Systems Manager handles operations automation.',
  },
  {
    id: 'sc-172',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['ebs', 'kms', 'encryption', 'practice-exam-8', 'sample-exam'],
    question: 'Which of the following services is used when encrypting EBS volumes?',
    options: ['AWS WAF.', 'AWS KMS.', 'Amazon Macie.', 'Amazon GuardDuty.'],
    correctAnswers: [1],
    explanation:
      'Amazon EBS volume encryption uses AWS KMS keys to encrypt data at rest on volumes and snapshots. WAF protects web applications; Macie finds sensitive data in S3; GuardDuty detects threats.',
  },
  {
    id: 'sc-173',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['incident-response', 'iam', 'practice-exam-8', 'sample-exam'],
    question:
      'The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)',
    options: [
      'Download all the attached policies in a safe place.',
      'Delete all IAM accounts and recreate them.',
      'Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.',
      'Rotate all access keys.',
      'Change the email address and password of the root user account and enable MFA.',
    ],
    correctAnswers: [3, 4],
    explanation:
      'Immediately rotate or deactivate compromised access keys and secure the root account with a new password and MFA. Investigate with CloudTrail (not CloudWatch alone); deleting every IAM user disrupts legitimate staff; downloading policies does not revoke active credentials.',
  },
  {
    id: 'sc-174',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['pci', 'compliance', 'practice-exam-8', 'sample-exam'],
    question:
      'A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)',
    options: [
      'Start the migration process immediately as all AWS services are PCI compliant.',
      'Ensure that AWS services are configured properly to meet all PCI DSS standards.',
      'Restrict any access to cardholder data and create a policy that addresses information security for all personnel.',
      'Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.',
      'Ensure that all PCI DSS physical security requirements are met.',
    ],
    correctAnswers: [1, 2],
    explanation:
      'PCI DSS on AWS is a shared responsibility: customers configure eligible services correctly, restrict cardholder data access, and maintain organizational policies. Not every AWS service is in scope for PCI; AWS meets physical infrastructure controls; customers do not configure AWS’s underlying facilities.',
  },
  {
    id: 'sc-175',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['penetration-testing', 'practice-exam-8', 'sample-exam'],
    question:
      'Which of the following steps should be taken by a customer when conducting penetration testing on AWS?',
    options: [
      'Conduct penetration testing using Amazon Inspector, and then notify AWS support.',
      'Request and wait for approval from the customer’s internal security team, and then conduct testing.',
      'Notify AWS support, and then conduct testing immediately.',
      'Request and wait for approval from AWS support, and then conduct testing.',
    ],
    correctAnswers: [3],
    explanation:
      'Customers may perform many penetration tests on their own AWS resources without prior approval, but must follow AWS policies and request approval from AWS for prohibited or sensitive test types. Inspector is vulnerability assessment, not a substitute for penetration testing policy; internal approval alone does not replace AWS policy requirements on this exam item.',
  },
  {
    id: 'sc-176',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['s3', 'iam', 'practice-exam-9', 'sample-exam'],
    question:
      'Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?',
    options: [
      'A public and private key-pair.',
      'Amazon Inspector.',
      'AWS Identity and Access Management (IAM) policies.',
      'Security Groups.',
    ],
    correctAnswers: [2],
    explanation:
      'IAM policies (and bucket policies) control which principals can access S3 buckets and objects. EC2 key pairs authenticate SSH; Inspector scans workloads; security groups filter network traffic to compute resources—not S3 authorization.',
  },
  {
    id: 'sc-177',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['vpn', 'direct-connect', 'hybrid', 'practice-exam-9', 'sample-exam'],
    question:
      'Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)',
    options: ['AWS VPN.', 'Amazon Redshift.', 'API Gateway.', 'Amazon Direct Connect.'],
    correctAnswers: [0, 3],
    explanation:
      'AWS Site-to-Site VPN and AWS Direct Connect establish private connectivity between your VPC and on-premises networks. Redshift is a data warehouse; API Gateway exposes HTTP APIs—it does not link a VPC to a data center network.',
  },
  {
    id: 'sc-178',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'ec2', 'practice-exam-9', 'sample-exam'],
    question:
      'Which task is AWS responsible for in the shared responsibility model for security and compliance?',
    options: [
      'Granting access to individuals and services.',
      'Encrypting data in transit.',
      'Updating Amazon EC2 host firmware.',
      'Updating operating systems.',
    ],
    correctAnswers: [2],
    explanation:
      'AWS maintains the physical and virtual infrastructure, including EC2 host firmware and the hypervisor. Customers grant IAM access, configure encryption in transit for their applications, and patch guest operating systems on EC2.',
  },
  {
    id: 'sc-179',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['trusted-advisor', 'practice-exam-9', 'sample-exam'],
    question:
      'Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?',
    options: [
      'AWS Trusted Advisor.',
      'Amazon Inspector.',
      'Amazon CloudWatch.',
      'AWS CloudTrail.',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Trusted Advisor checks include security groups with rules that allow unrestricted access (for example 0.0.0.0/0 on sensitive ports). Inspector finds vulnerabilities; CloudWatch monitors metrics; CloudTrail logs API activity.',
  },
  {
    id: 'sc-180',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'practice-exam-9', 'sample-exam'],
    question:
      'Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)',
    options: [
      'Patching operating system components for Amazon Relational Database Server (Amazon RDS).',
      'Encrypting data on the client-side.',
      'Training the data center staff.',
      'Configuring Network Access Control Lists (ACL).',
      'Maintaining environmental controls within a data center.',
    ],
    correctAnswers: [1, 3],
    explanation:
      'Customers encrypt data before upload (client-side encryption) and configure NACLs in their VPC. AWS patches the RDS engine and host OS; physical data center staff and environmental controls are AWS responsibilities.',
  },
  {
    id: 'sc-181',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'practice-exam-9', 'sample-exam'],
    question:
      'Under the shared responsibility model, which of the following is a shared control between a customer and AWS?',
    options: [
      'Physical controls.',
      'Patch management.',
      'Zone security.',
      'Data center auditing.',
    ],
    correctAnswers: [1],
    explanation:
      'Patch management is shared: AWS patches managed services and infrastructure components while customers patch guest OS and applications on EC2 and configure update processes for their workloads. Physical controls and data center auditing are AWS-owned; zone security spans AWS infrastructure with customer VPC design.',
  },
  {
    id: 'sc-182',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['waf', 'nacl', 'practice-exam-9', 'sample-exam'],
    question:
      'Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)',
    options: [
      'AWS WAF.',
      'AWS Trusted Advisor.',
      'AWS Direct Connect.',
      'AWS Organizations.',
      'Network ACLs.',
    ],
    correctAnswers: [0, 4],
    explanation:
      'AWS WAF filters HTTP/HTTPS requests at the application layer (for example block IP ranges or malicious patterns). Network ACLs are stateless subnet-level firewalls that can deny traffic from specific CIDR blocks. Trusted Advisor recommends best practices; Direct Connect is connectivity; Organizations manages accounts.',
  },
  {
    id: 'sc-183',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['cloudtrail', 'audit', 'practice-exam-9', 'sample-exam'],
    question:
      'Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?',
    options: [
      'Amazon CloudWatch.',
      'AWS CloudTrail.',
      'AWS Config.',
      'AWS Health.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS CloudTrail records API calls and console sign-in activity for audit and compliance. CloudWatch collects metrics and logs; Config tracks resource configuration changes over time; AWS Health reports service events affecting your resources.',
  },
  {
    id: 'sc-184',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'encryption', 'practice-exam-9', 'sample-exam'],
    question:
      'What is the AWS customer responsible for according to the AWS shared responsibility model?',
    options: [
      'Physical access controls.',
      'Data encryption.',
      'Secure disposal of storage devices.',
      'Environmental risk management.',
    ],
    correctAnswers: [1],
    explanation:
      'Customers choose and implement encryption for their data (at rest and in transit) and manage keys according to their requirements. Physical access, media disposal, and environmental controls in AWS data centers are AWS responsibilities.',
  },
  {
    id: 'sc-185',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'groups', 'practice-exam-9', 'sample-exam'],
    question:
      'How would an AWS customer easily apply common access controls to a large set of users?',
    options: [
      'Apply an IAM policy to an IAM group.',
      'Apply an IAM policy to an IAM role.',
      'Apply the same IAM policy to all IAM users with access to the same workload.',
      'Apply an IAM policy to an Amazon Cognito user pool.',
    ],
    correctAnswers: [0],
    explanation:
      'Attach one IAM policy to an IAM group and add users to the group so they inherit the same permissions—easier than updating each user individually. Roles grant temporary credentials; Cognito user pools are for application sign-in federated with IAM differently.',
  },
  {
    id: 'sc-186',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['ec2', 'high-availability', 'practice-exam-9', 'sample-exam'],
    question:
      'A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?',
    options: [
      'Launch the instances across multiple Availability Zones in a single AWS Region.',
      'Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.',
      'Launch the instances in multiple AWS Regions but in the same Availability Zone.',
      'Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.',
    ],
    correctAnswers: [0],
    explanation:
      'Spreading instances across multiple AZs in one Region protects against a single-AZ failure. Same AZ, cross-Region with same AZ name, or Spot-only placement do not match the standard HA pattern emphasized on the exam.',
  },
  {
    id: 'sc-187',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['macie', 'data-classification', 'practice-exam-10', 'sample-exam'],
    question:
      'Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?',
    options: [
      'Amazon GuardDuty.',
      'Amazon Macie.',
      'Amazon Inspector.',
      'AWS Shield.',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Macie uses machine learning to discover and classify sensitive data such as PII in Amazon S3. GuardDuty detects threats; Inspector scans for vulnerabilities; Shield mitigates DDoS attacks.',
  },
  {
    id: 'sc-188',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'ec2', 'practice-exam-10', 'sample-exam'],
    question:
      'Which of the following is the customer’s responsibility under the AWS shared responsibility model?',
    options: [
      'Patching underlying infrastructure',
      'Physical security',
      'Patching Amazon EC2 instances',
      'Patching network infrastructure',
    ],
    correctAnswers: [2],
    explanation:
      'Customers patch the guest operating system and applications on EC2 instances. AWS patches the hypervisor, physical hardware, and global network infrastructure; physical security of data centers is AWS-owned.',
  },
  {
    id: 'sc-189',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'config', 'practice-exam-10', 'sample-exam'],
    question:
      'According to the AWS shared responsibility model who is responsible for configuration management?',
    options: [
      'It is solely the responsibility of the customer.',
      'It is solely the responsibility of AWS.',
      'It is shared between AWS and the customer.',
      'It is not part of the AWS shared responsibility model.',
    ],
    correctAnswers: [2],
    explanation:
      'Configuration management is shared: AWS configures managed services and infrastructure; customers configure their applications, OS settings on EC2, security groups, and service-specific options.',
  },
  {
    id: 'sc-190',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'practice-exam-10', 'sample-exam'],
    question:
      'Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)',
    options: [
      'Ensuring that application data is encrypted at rest.',
      'Ensuring that AWS NTP servers are set to the correct time.',
      'Ensuring that users have received security training in the use of AWS services.',
      'Ensuring that access to data centers is restricted.',
      'Ensuring that hardware is disposed of properly.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Customers implement encryption for their data and train their staff on secure AWS use. AWS operates NTP infrastructure, restricts physical data center access, and handles secure hardware disposal.',
  },
  {
    id: 'sc-191',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'access-keys', 'practice-exam-10', 'sample-exam'],
    question:
      'Access keys in AWS Identity and Access Management (IM1) are used to:',
    options: [
      'Log in to the AWS Management Console.',
      'Make programmatic calls to AWS from AWS APIs.',
      'Log in to Amazon EC2 instances.',
      'Authenticate to AWS CodeCommit repositories.',
    ],
    correctAnswers: [1],
    explanation:
      'IAM access keys (access key ID and secret access key) authenticate programmatic API, CLI, and SDK calls. Console sign-in uses passwords or SSO; EC2 uses SSH key pairs; CodeCommit can use Git credentials or IAM-generated HTTPS credentials.',
  },
  {
    id: 'sc-192',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'networking', 'practice-exam-10', 'sample-exam'],
    question:
      'The user is fully responsible for which action when running workloads on AWS?',
    options: [
      'Patching the infrastructure components.',
      'Maintaining the underlying infrastructure components.',
      'Maintaining physical and environmental controls.',
      'Implementing controls to route application traffic.',
    ],
    correctAnswers: [3],
    explanation:
      'Customers design and implement application traffic routing (load balancers, Route 53 records, security groups, NACLs). AWS maintains physical facilities and the cloud infrastructure beneath managed services; EC2 guest patching is customer-owned but “routing controls” is the best single answer on this item.',
  },
  {
    id: 'sc-193',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['config', 'compliance', 'practice-exam-10', 'sample-exam'],
    question:
      'Which AWS service allows users to identify the changes made to a resource over time?',
    options: [
      'Amazon Inspector.',
      'AWS Config.',
      'AWS Service Catalog.',
      'AWS IAM.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Config records configuration snapshots and change history for AWS resources and evaluates rules over time. Inspector assesses vulnerabilities; Service Catalog distributes approved products; IAM manages access identities.',
  },
  {
    id: 'sc-194',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'mfa', 'console', 'practice-exam-11', 'sample-exam'],
    question:
      'Which of the following will enhance the security of access to the AWS Management Console’? (Select TWO)',
    options: [
      'AWS Secrets Manager.',
      'AWS Certificate Manager.',
      'AWS Multi-Factor Authentication (AWS MFA).',
      'Security groups.',
      'Password policies.',
    ],
    correctAnswers: [2, 4],
    explanation:
      'Enable MFA for IAM users (especially administrators) and enforce strong account password policies to protect console sign-in. Secrets Manager stores secrets; ACM manages TLS certificates; security groups filter network traffic to resources—not console authentication.',
  },
  {
    id: 'sc-195',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['vpc', 'network', 'practice-exam-11', 'sample-exam'],
    question:
      'Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)',
    options: [
      'Amazon CloudFront distributions.',
      'Amazon Route 53.',
      'Security Groups.',
      'Subnets.',
      'Elastic Load Balancing.',
    ],
    correctAnswers: [2, 3],
    explanation:
      'The VPC console lets you create subnets and manage security groups for your virtual network. CloudFront, Route 53, and load balancers have their own consoles—though they integrate with VPC resources.',
  },
  {
    id: 'sc-196',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'audit', 'practice-exam-11', 'sample-exam'],
    question: 'For which auditing process does AWS have sole responsibility?',
    options: [
      'AWS IAM policies.',
      'Physical security.',
      'Amazon S3 bucket policies.',
      'AWS CloudTrail Logs.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS is solely responsible for physical security audits and controls of data centers. Customers define IAM and S3 bucket policies; CloudTrail logging is enabled and used by customers for their audit trails.',
  },
  {
    id: 'sc-200',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'access-keys', 'practice-exam-11', 'sample-exam'],
    question:
      'What credential components are required to gain programmatic access to an AWS account? (Select TWO)',
    options: [
      'An access key ID.',
      'A primary key.',
      'A secret access key.',
      'A user ID.',
      'A secondary key.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Programmatic access with the AWS CLI or SDKs requires an access key ID paired with a secret access key for an IAM user or role session. Console login uses different credentials; “primary/secondary key” is not standard IAM terminology.',
  },
  {
    id: 'sc-201',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'compliance', 'practice-exam-11', 'sample-exam'],
    question: 'Which of the following is a shared control between the customer and AWS?',
    options: [
      'Providing a key for Amazon S3 client-side encryption.',
      'Configuration of an Amazon EC2 instance.',
      'Environmental controls of physical AWS data centers.',
      'Awareness.',
    ],
    correctAnswers: [3],
    explanation:
      'Awareness and training is a shared control—AWS trains its staff; customers train their users on secure cloud use. Client-side encryption keys and EC2 configuration are customer responsibilities; data center environmental controls are AWS-owned.',
  },
  {
    id: 'sc-202',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['iam', 'security', 'practice-exam-11', 'sample-exam'],
    question:
      'Which of the following security measures protect access to an AWS account? (Select TWO)',
    options: [
      'Enable AWS CloudTrail.',
      'Grant least privilege access to IAM users.',
      'Create one IAM user and share with many developers and users.',
      'Enable Amazon CloudFront.',
      'Activate multi-factor authentication (MFA) for privileged users.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'Apply least privilege IAM policies and require MFA for privileged users to reduce account takeover risk. CloudTrail aids audit after the fact; shared IAM users violate best practice; CloudFront delivers content—it does not secure account login.',
  },
  {
    id: 'sc-203',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'ebs', 'backup', 'practice-exam-11', 'sample-exam'],
    question:
      'Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?',
    options: [
      'Ensuring network connectivity from AWS to the internet.',
      'Patching and fixing flaws within the AWS Cloud infrastructure.',
      'Ensuring the physical security of cloud data centers.',
      'Ensuring Amazon EBS volumes are backed up.',
    ],
    correctAnswers: [3],
    explanation:
      'Customers implement backup strategies for their EBS data (snapshots, AWS Backup, etc.). AWS operates global network connectivity and physical data center security; AWS patches the underlying cloud infrastructure, not customer backup policies.',
  },
  {
    id: 'sc-204',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['health', 'personal-health', 'practice-exam-11', 'sample-exam'],
    question:
      'Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?',
    options: [
      'AWS Personal Health Dashboard.',
      'AWS Service Health Dashboard.',
      'AWS Trusted Advisor.',
      'AWS Infrastructure Event Management.',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Personal Health Dashboard (AWS Health) notifies you of events that may affect your specific resources and accounts. The public Service Health Dashboard shows general AWS service status; Trusted Advisor recommends optimizations; IEM helps plan large events.',
  },
]
