import type { Card } from '../../../core/types'

/** AWS Compliance Concepts — CLF-C02 Domain 2 (shared responsibility, frameworks, controls, documentation, continuous compliance). */
export const complianceConceptsSupplementCards: Card[] = [
  {
    id: 'sc-112',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'fundamentals'],
    question:
      'Which areas are core AWS compliance concepts for building and operating regulated workloads?',
    options: [
      'Shared responsibility model; regulatory frameworks; access controls; data encryption; monitoring and auditing',
      'Only choosing EC2 instance colors in the console',
      'Eliminating IAM in favor of shared passwords',
      'Disabling encryption to simplify audits',
    ],
    correctAnswers: [0],
    explanation:
      'Compliance on AWS combines understanding shared responsibility, mapping to frameworks (for example HIPAA, PCI DSS, GDPR, SOC), enforcing access and encryption, and maintaining audit visibility with logging and assessment tools.',
  },
  {
    id: 'sc-113',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['compliance-concepts', 'shared-responsibility'],
    question:
      'How does the shared responsibility model relate to compliance on AWS?',
    options: [
      'AWS is responsible for compliance of the cloud infrastructure; customers are responsible for compliance configuration of their workloads and data in the cloud',
      'AWS alone certifies every customer application without customer action',
      'Customers are responsible for physical data center compliance only',
      'Compliance is not applicable in a public cloud',
    ],
    correctAnswers: [0],
    explanation:
      'AWS maintains compliance programs for the underlying cloud. Customers must implement controls appropriate to their industry—identity, encryption, logging, and application security—for what they deploy on AWS.',
  },
  {
    id: 'sc-114',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'regulatory-frameworks'],
    question:
      'Which examples are regulatory or industry compliance frameworks customers often map to AWS workloads? (Select TWO.)',
    options: [
      'PCI DSS for payment card data',
      'GDPR for personal data protection in the EU',
      'Amazon S3 storage class names only',
      'EC2 instance generation numbers only',
      'Route 53 TTL values only',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Frameworks such as PCI DSS, HIPAA, GDPR, FedRAMP, and SOC define control objectives. AWS provides compliant infrastructure and documentation; customers configure services to meet framework requirements for their data and applications.',
  },
  {
    id: 'sc-115',
    domain: 'security-compliance',
    task: '2.3',
    tags: ['compliance-concepts', 'access-controls'],
    question:
      'Which AWS capability is central to access controls as a compliance concept?',
    options: [
      'AWS Identity and Access Management (IAM) policies, roles, and MFA',
      'Amazon CloudFront cache invalidation only',
      'AWS Snowball device weight limits',
      'Automatic public access for all S3 buckets',
    ],
    correctAnswers: [0],
    explanation:
      'Access controls limit who can perform actions on which resources. IAM, resource policies, Organizations SCPs, and IAM Identity Center help enforce least privilege required by many compliance frameworks.',
  },
  {
    id: 'sc-116',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'encryption'],
    question:
      'Which AWS services support data encryption as a compliance concept? (Select TWO.)',
    options: [
      'AWS Key Management Service (AWS KMS)',
      'AWS CloudHSM',
      'AWS Budgets',
      'Amazon Polly',
      'AWS Pricing Calculator',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Encryption at rest and in transit is a common compliance requirement. KMS manages encryption keys for AWS services and applications; CloudHSM provides dedicated hardware security modules for stricter key control.',
  },
  {
    id: 'sc-117',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'monitoring-auditing'],
    question:
      'Which services support monitoring and auditing for compliance? (Select THREE.)',
    options: [
      'AWS CloudTrail',
      'AWS Config',
      'Amazon GuardDuty',
      'Amazon GameLift',
      'AWS Snowmobile',
      'Amazon Kendra only',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'CloudTrail records API activity for audits. Config tracks resource configuration and rule compliance over time. GuardDuty detects suspicious activity from log analysis. Audit Manager and Security Hub extend compliance workflows.',
  },
  {
    id: 'sc-118',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'fundamentals'],
    question:
      'Which set lists additional AWS compliance concepts emphasized for ongoing cloud operations?',
    options: [
      'Compliance documentation; security best practices; risk management; incident response; continuous compliance',
      'Only Reserved Instance purchasing strategies',
      'Disabling all detective controls to reduce noise',
      'Using a single shared root user for all administrators',
    ],
    correctAnswers: [0],
    explanation:
      'Beyond baseline controls, compliance programs rely on AWS documentation and reports, following security best practices, managing risk, responding to incidents, and continuously evaluating configuration—not point-in-time checks only.',
  },
  {
    id: 'sc-119',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'compliance-documentation'],
    question:
      'Which AWS service provides compliance documentation such as SOC reports and PCI attestations for customer audits?',
    options: [
      'AWS Artifact',
      'Amazon Macie',
      'AWS Batch',
      'Amazon Lightsail',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Artifact is the compliance documentation portal. Customers download AWS third-party audit reports and agreements to demonstrate provider controls to their auditors and risk teams.',
  },
  {
    id: 'sc-120',
    domain: 'security-compliance',
    task: '2.4',
    tags: ['compliance-concepts', 'security-best-practices'],
    question:
      'Where should teams look for AWS security best practices to support compliance programs?',
    options: [
      'AWS Well-Architected Framework Security pillar and AWS security documentation',
      'Unverified third-party forums only',
      'S3 pricing pages exclusively',
      'EC2 instance metadata service alone',
    ],
    correctAnswers: [0],
    explanation:
      'The Well-Architected Security pillar and official AWS security guidance describe recommended controls for identity, detection, infrastructure protection, data protection, and incident response aligned with compliance goals.',
  },
  {
    id: 'sc-121',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'risk-management'],
    question:
      'Which activity best represents risk management as an AWS compliance concept?',
    options: [
      'Identifying threats to workloads, prioritizing them, and applying controls such as encryption, least-privilege IAM, and monitoring',
      'Ignoring service quotas until production fails',
      'Storing all secrets in plain text for faster deployments',
      'Disabling CloudTrail to reduce log volume',
    ],
    correctAnswers: [0],
    explanation:
      'Risk management means understanding impact and likelihood of threats, then mitigating with layered controls. AWS services and the shared responsibility model help, but customers must assess risk for their specific data and applications.',
  },
  {
    id: 'sc-122',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'incident-response'],
    question:
      'Which AWS capabilities support incident response as a compliance concept? (Select TWO.)',
    options: [
      'Amazon GuardDuty findings and AWS Security Hub aggregated alerts',
      'AWS CloudTrail logs to determine what actions occurred during an incident',
      'Deleting all logs immediately after an alert',
      'Disabling MFA during investigations',
      'Sharing root user credentials with external investigators',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Incident response uses detective services and immutable or retained logs to detect, contain, and analyze events. AWS also publishes incident response guidance; Enterprise Support offers Infrastructure Event Management for major launches.',
  },
  {
    id: 'sc-123',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'continuous-compliance'],
    question:
      'What does continuous compliance mean in an AWS environment?',
    options: [
      'Ongoing monitoring and evaluation of resources against policies and frameworks, not a one-time audit snapshot',
      'Compliance checks performed only when an account is first created',
      'Automatic certification of all custom application code by AWS',
      'Eliminating the need for customer configuration reviews',
    ],
    correctAnswers: [0],
    explanation:
      'Continuous compliance uses AWS Config rules, Audit Manager, Security Hub, and automated remediation to detect drift from desired secure configurations and maintain evidence over time.',
  },
  {
    id: 'sc-124',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'continuous-compliance'],
    question:
      'Which services help maintain continuous compliance with internal and external standards? (Select TWO.)',
    options: [
      'AWS Config with conformance packs',
      'AWS Audit Manager',
      'Amazon S3 Glacier retrieval tiers only',
      'AWS Snowcone shipping',
      'Disabling AWS Organizations',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Config conformance packs bundle rules aligned to frameworks. Audit Manager automates evidence collection mapped to controls. Together they support continuous compliance alongside CloudTrail and Security Hub.',
  },
  {
    id: 'sc-137',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-concepts', 'fundamentals', 'sample-exam'],
    question:
      'Which options represent aspects of AWS compliance? (Select FOUR.)',
    options: [
      'Risk management',
      'Regulatory frameworks',
      'Shared responsibility model',
      'Network and edge security',
      'Monitoring and auditing',
      'Cloud consumption policies',
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation:
      'AWS compliance concepts include understanding shared responsibility, mapping to regulatory frameworks, managing risk, and monitoring and auditing workloads. Network and edge security and cloud consumption policies are important governance and security topics but are framed separately from core compliance aspects in this exam item.',
  },
]
