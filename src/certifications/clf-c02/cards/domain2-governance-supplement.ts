import type { Card } from '../../../core/types'

/** AWS Governance Concepts — security pillars (IAM, monitoring, edge, data, audit) and operational pillars (consumption, compliance, tagging, logs, assessment). */
export const governanceSupplementCards: Card[] = [
  {
    id: 'sc-092',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'fundamentals'],
    question:
      'Which set lists core AWS governance concepts for securing and managing cloud environments?',
    options: [
      'Identity and access management; continuous monitoring and logging; network and edge security; data security and encryption; auditing and compliance',
      'Hardware procurement; colocation contracts; on-premises tape rotation only',
      'Reserved Instance purchasing; Spot Instance bidding; Savings Plans calculators only',
      'Physical data center badge access; customer-owned hypervisors; private fiber to every laptop',
    ],
    correctAnswers: [0],
    explanation:
      'This framing groups governance around identity, monitoring, network edge, data protection, and audit. CLF also emphasizes operational governance: cloud consumption policies, compliance and shared responsibility, tagging, log storage for forensics, and audit and assessment.',
  },
  {
    id: 'sc-093',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['governance', 'governance-concepts', 'iam'],
    question:
      'Under the identity and access management governance concept, which actions help control access across an organization? (Select TWO.)',
    options: [
      'Define IAM policies and roles with least privilege',
      'Use Service Control Policies (SCPs) in AWS Organizations to set permission guardrails',
      'Disable MFA to simplify sign-in for administrators',
      'Share one root user password across all teams',
      'Publish all S3 buckets as public by default',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Governance for identity and access uses IAM (users, groups, roles, policies, MFA) and central guardrails such as Organizations SCPs and IAM Identity Center for workforce access.',
  },
  {
    id: 'sc-094',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'monitoring'],
    question:
      'Which services support the continuous monitoring and logging governance concept? (Select THREE.)',
    options: [
      'AWS CloudTrail',
      'Amazon CloudWatch Logs',
      'Amazon VPC Flow Logs',
      'AWS Snowball Edge import jobs only',
      'Amazon Polly text-to-speech',
      'AWS Pricing Calculator',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'CloudTrail records API activity for audit. CloudWatch Logs collects and stores log data from applications and AWS services. VPC Flow Logs capture IP traffic metadata for network visibility. Together they support ongoing monitoring and forensic analysis.',
  },
  {
    id: 'sc-095',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'monitoring'],
    question:
      'A security team needs ongoing threat detection across accounts in addition to API and network logs. Which service aligns with the monitoring and logging governance pillar?',
    options: [
      'Amazon GuardDuty',
      'AWS Artifact document downloads only',
      'Amazon Lightsail static IP assignment',
      'AWS Snowcone device shipping',
    ],
    correctAnswers: [0],
    explanation:
      'GuardDuty continuously analyzes CloudTrail, VPC Flow Logs, and DNS logs for suspicious activity. It complements CloudTrail and CloudWatch for detective governance controls.',
  },
  {
    id: 'sc-096',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'network-edge'],
    question:
      'Which combination best supports the network and edge security governance concept? (Select TWO.)',
    options: [
      'AWS WAF and AWS Shield for application and DDoS protection at the edge',
      'Security groups and network ACLs within a VPC',
      'Disabling all VPC routing',
      'Storing IAM policies only in Amazon S3 Glacier',
      'Using root user credentials for daily administration',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Network and edge governance includes VPC-level controls (security groups, NACLs, AWS Network Firewall) and edge services such as CloudFront with WAF and Shield to protect traffic entering your environment.',
  },
  {
    id: 'sc-097',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'network-edge'],
    question:
      'Which service delivers content globally while integrating with AWS WAF to help protect web applications at edge locations?',
    options: [
      'Amazon CloudFront',
      'Amazon RDS Multi-AZ',
      'AWS Glue crawlers',
      'Amazon EBS snapshots',
    ],
    correctAnswers: [0],
    explanation:
      'CloudFront is AWS\'s CDN with edge locations worldwide. Pairing it with WAF and Shield supports network and edge security as part of cloud governance.',
  },
  {
    id: 'sc-098',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'data-security'],
    question:
      'Which practices align with the data security and encryption governance concept? (Select TWO.)',
    options: [
      'Encrypt data at rest and in transit using AWS KMS and TLS',
      'Use Amazon Macie to discover sensitive data in Amazon S3',
      'Disable encryption to improve query performance in all cases',
      'Store database passwords in plain text in source code',
      'Block all use of customer managed keys',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Data governance includes choosing encryption for storage and transport, managing keys with KMS, and discovering/classifying sensitive data with services like Macie.',
  },
  {
    id: 'sc-099',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'auditing-compliance'],
    question:
      'Which services support auditing and compliance as an AWS governance concept? (Select THREE.)',
    options: [
      'AWS Config',
      'AWS CloudTrail',
      'AWS Artifact',
      'Amazon GameLift',
      'AWS Audit Manager',
      'Amazon Rekognition celebrity recognition only',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Config tracks resource configuration and rule compliance. CloudTrail provides an audit trail of API activity. Artifact supplies AWS compliance reports for your auditors. Audit Manager also helps automate evidence for compliance frameworks.',
  },
  {
    id: 'sc-100',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'auditing-compliance'],
    question:
      'An auditor asks for AWS SOC reports to verify cloud provider controls. Which service provides on-demand access to those compliance documents?',
    options: [
      'AWS Artifact',
      'Amazon CloudWatch',
      'AWS Elastic Beanstalk',
      'Amazon Connect',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Artifact is the governance portal for compliance reports and agreements. Customers still configure their workloads to meet regulations using Config, Audit Manager, and shared responsibility practices.',
  },
  {
    id: 'sc-101',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['governance', 'governance-concepts', 'organizations'],
    question:
      'Which AWS service helps set up and govern a secure multi-account environment with preconfigured guardrails and account vending?',
    options: [
      'AWS Control Tower',
      'Amazon SQS',
      'AWS Batch',
      'Amazon Polly',
    ],
    correctAnswers: [0],
    explanation:
      'Control Tower orchestrates AWS Organizations, SCPs, and landing zones so enterprises apply consistent identity, logging, and compliance guardrails across accounts.',
  },
  {
    id: 'sc-102',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'mapping'],
    question:
      'AWS Security Hub primarily supports which governance concept?',
    options: [
      'Continuous monitoring and logging by aggregating security findings',
      'Physical data center access control',
      'EC2 instance family selection for cost',
      'Domain registration with Route 53 only',
    ],
    correctAnswers: [0],
    explanation:
      'Security Hub centralizes findings from GuardDuty, Inspector, and partner tools—supporting the monitoring pillar and helping teams prioritize remediation under governance programs.',
  },
  {
    id: 'sc-103',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'governance-operational', 'fundamentals'],
    question:
      'Which set reflects AWS governance concepts for managing cloud use at scale?',
    options: [
      'Cloud consumption policies; compliance frameworks and the shared responsibility model; tagging and resource management; log storage and forensics; audit and assessment',
      'Only EC2 instance family selection and AMI naming conventions',
      'Replacing IAM with shared root passwords for all developers',
      'Disabling all logging to reduce storage costs',
    ],
    correctAnswers: [0],
    explanation:
      'Operational governance defines how teams may consume AWS (policies and guardrails), meet compliance obligations, organize resources with tags, retain and analyze logs for investigations, and assess posture through audits and automated checks.',
  },
  {
    id: 'sc-104',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['governance', 'governance-concepts', 'governance-operational', 'consumption-policies'],
    question:
      'Which tools help implement cloud consumption policies that limit how accounts use AWS? (Select TWO.)',
    options: [
      'Service Control Policies (SCPs) in AWS Organizations',
      'AWS Budgets with alerts for cost thresholds',
      'Amazon Polly speech synthesis',
      'Disabling AWS CloudTrail in all Regions',
      'Publishing all resources without tags',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Consumption policies set guardrails on what teams can do and spend. SCPs cap maximum IAM permissions for member accounts; AWS Budgets and Service Quotas help control cost and usage. Control Tower and landing zones often combine these controls.',
  },
  {
    id: 'sc-105',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['governance', 'governance-concepts', 'governance-operational', 'compliance'],
    question:
      'Under the compliance frameworks and shared responsibility model governance concept, which statements are correct? (Select TWO.)',
    options: [
      'AWS maintains compliance for the underlying cloud infrastructure and publishes evidence in AWS Artifact',
      'Customers configure their workloads and data to meet their industry and regulatory requirements',
      'AWS is solely responsible for all application code security with no customer duties',
      'Shared responsibility means customers never configure encryption or access controls',
      'Compliance frameworks such as PCI DSS require no customer action on AWS',
    ],
    correctAnswers: [0, 1],
    explanation:
      'AWS aligns its infrastructure to many compliance programs and provides reports via Artifact. Customers remain responsible for security in the cloud—identity, data, network configuration, and applications—according to each service model.',
  },
  {
    id: 'sc-106',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['governance', 'governance-concepts', 'governance-operational', 'tagging'],
    question:
      'Which practices support the tagging and resource management governance concept? (Select TWO.)',
    options: [
      'Apply consistent tags (for example Environment, Owner, Project) and activate cost allocation tags',
      'Use AWS Resource Groups to organize and manage resources that share the same tags',
      'Avoid tagging to reduce API calls',
      'Use only the root user so tags are unnecessary',
      'Disable AWS Config to hide resource changes',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Tags are metadata for cost allocation, automation, and access boundaries. Resource Groups and the Tag Editor help find and manage tagged resources. Tag policies in Organizations can enforce tagging standards.',
  },
  {
    id: 'sc-107',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'governance-operational', 'logging-forensics'],
    question:
      'Which approach supports log storage and forensics as a governance concept?',
    options: [
      'Enable AWS CloudTrail, store logs in Amazon S3 with appropriate retention, and analyze activity for investigations',
      'Delete CloudTrail logs after 24 hours in all accounts',
      'Rely on console screenshots instead of API logs',
      'Disable VPC Flow Logs to save costs during security incidents',
    ],
    correctAnswers: [0],
    explanation:
      'Forensics requires durable, centralized logs. CloudTrail captures API activity; VPC Flow Logs and CloudWatch Logs add network and application context. S3, CloudWatch Logs retention, and tools like Athena support search and investigation.',
  },
  {
    id: 'sc-108',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'governance-operational', 'logging-forensics'],
    question:
      'After a suspected account compromise, which services provide data most useful for forensic analysis? (Select TWO.)',
    options: [
      'AWS CloudTrail',
      'Amazon GuardDuty findings',
      'AWS Pricing Calculator estimates',
      'Amazon Lightsail blueprint selection',
      'AWS Snowball Edge shipping labels',
    ],
    correctAnswers: [0, 1],
    explanation:
      'CloudTrail shows who invoked which APIs and when. GuardDuty correlates logs for suspicious behavior. Together they support the log storage and forensics governance pillar alongside VPC Flow Logs and CloudWatch Logs.',
  },
  {
    id: 'sc-109',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'governance-operational', 'audit-assessment'],
    question:
      'Which services support audit and assessment as an AWS governance concept? (Select THREE.)',
    options: [
      'AWS Config',
      'AWS Audit Manager',
      'AWS Trusted Advisor',
      'Amazon GameLift',
      'AWS Batch job queues only',
      'Amazon Kendra search indexes only',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Config evaluates resource configurations against rules over time. Audit Manager collects compliance evidence. Trusted Advisor assesses accounts against cost, security, fault tolerance, performance, and quota best practices. Security Hub and Inspector add deeper security assessments.',
  },
  {
    id: 'sc-110',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'governance-operational', 'audit-assessment'],
    question:
      'A governance team wants continuous assessment of whether S3 buckets remain private over time. Which service is the best fit?',
    options: [
      'AWS Config rules',
      'Amazon S3 Glacier Flexible Retrieval',
      'AWS Snowmobile',
      'Amazon Polly',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Config rules detect configuration drift—such as public bucket ACLs or policies—and support audit and assessment workflows. This complements periodic reviews and frameworks tracked in Audit Manager.',
  },
  {
    id: 'sc-111',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['governance', 'governance-concepts', 'governance-operational', 'consumption-policies'],
    question:
      'A company wants to prevent member accounts from launching expensive instance types in unapproved Regions. Which governance control applies?',
    options: [
      'Service Control Policies (SCPs) attached to organizational units',
      'Amazon RDS automated backups only',
      'Amazon CloudFront cache invalidation',
      'AWS Secrets Manager rotation without IAM',
    ],
    correctAnswers: [0],
    explanation:
      'SCPs are cloud consumption policies that set maximum permissions for accounts in AWS Organizations, restricting services, Regions, or actions even if an IAM policy allows them.',
  },
  {
    id: 'sc-135',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['governance', 'governance-concepts', 'fundamentals', 'sample-exam'],
    question:
      'Which term describes an ongoing process that evolves with business needs and regulatory changes?',
    options: [
      'Compliance',
      'Architecture',
      'Attestation',
      'Governance',
    ],
    correctAnswers: [3],
    explanation:
      'Governance is the continuous set of policies, processes, and controls that guide how an organization uses the cloud as strategy and regulations change. Compliance is meeting specific requirements at a point in time; architecture is system design; attestation is formal verification or certification evidence.',
  },
]
