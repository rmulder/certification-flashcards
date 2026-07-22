import type { Card } from '../../../core/types'

/** AWS Compliance Services — Artifact, Audit Manager, Config, GuardDuty, Security Hub, Compliance Center (CLF-C02 Domain 2). */
export const complianceServicesSupplementCards: Card[] = [
  {
    id: 'sc-125',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'fundamentals'],
    question:
      'Which services are commonly grouped as AWS compliance and security posture services for regulated environments? (Select THREE.)',
    options: [
      'AWS Artifact',
      'AWS Audit Manager',
      'AWS Config',
      'Amazon Polly',
      'AWS Snowball Edge',
      'Amazon GameLift',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Artifact provides compliance reports; Audit Manager automates audit evidence; Config evaluates resource configurations over time. GuardDuty and Security Hub add threat detection and centralized posture management alongside these services.',
  },
  {
    id: 'sc-126',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'compliance-center'],
    question:
      'What is the AWS Compliance Center primarily used for?',
    options: [
      'A central place to explore AWS compliance programs, resources, and links to reports and tools for your audits',
      'Launching Amazon EC2 instances at no cost',
      'Replacing AWS IAM for all authentication',
      'Storing application source code in Git repositories',
    ],
    correctAnswers: [0],
    explanation:
      'The AWS Compliance Center helps customers navigate AWS compliance offerings—framework alignments, documentation paths, and related services such as Artifact—rather than replacing operational tools like Config or GuardDuty.',
  },
  {
    id: 'sc-127',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'artifact'],
    question:
      'Which AWS compliance service provides on-demand access to AWS compliance reports and select online agreements?',
    options: [
      'AWS Artifact',
      'AWS Audit Manager',
      'Amazon GuardDuty',
      'AWS Security Hub',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Artifact is the self-service portal for downloading AWS SOC, PCI, and other third-party compliance reports and agreements for your auditors.',
  },
  {
    id: 'sc-128',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'audit-manager'],
    question:
      'Which service helps you continuously audit AWS usage and collect evidence mapped to compliance frameworks?',
    options: [
      'AWS Audit Manager',
      'Amazon CloudFront',
      'AWS Batch',
      'Amazon Lightsail',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Audit Manager automates evidence collection for internal and external audits, mapping controls to frameworks such as GDPR, HIPAA, and PCI DSS to simplify risk and compliance assessments.',
  },
  {
    id: 'sc-129',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'config'],
    question:
      'Which statement best describes AWS Config in a compliance program?',
    options: [
      'It assesses, audits, and tracks AWS resource configurations over time to help ensure they meet desired compliance rules',
      'It only encrypts Amazon EBS volumes automatically',
      'It replaces AWS CloudTrail API logging entirely',
      'It hosts static websites at edge locations',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Config records configuration history, runs managed and custom rules, and supports conformance packs so teams can detect when resources drift from compliant settings.',
  },
  {
    id: 'sc-130',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'guardduty'],
    question:
      'Which AWS compliance-related service continuously monitors for malicious activity and unauthorized behavior?',
    options: [
      'Amazon GuardDuty',
      'AWS Artifact',
      'AWS Pricing Calculator',
      'Amazon S3 Glacier',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon GuardDuty is a threat detection service that analyzes CloudTrail, VPC Flow Logs, and DNS logs to identify suspicious activity that may indicate compliance or security violations.',
  },
  {
    id: 'sc-131',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'security-hub'],
    question:
      'What is the primary role of AWS Security Hub in compliance and security operations?',
    options: [
      'Cloud security posture management that aggregates findings, runs security standard checks, and helps prioritize remediation',
      'Physical access control to AWS data centers',
      'Automatic generation of all IAM policies without review',
      'Replacement for Amazon RDS backups',
    ],
    correctAnswers: [0],
    explanation:
      'Security Hub collects findings from GuardDuty, Inspector, Config, and partner products; evaluates against standards such as CIS AWS Foundations; and supports automated response workflows.',
  },
  {
    id: 'sc-132',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'mapping', 'sample-exam'],
    question:
      'Match each need to the AWS compliance service: (1) Download SOC reports — (2) Detect public S3 bucket drift — (3) Centralize GuardDuty and Config findings. Which ordering is correct?',
    options: [
      'AWS Artifact; AWS Config; AWS Security Hub',
      'AWS Config; AWS Artifact; Amazon GuardDuty only',
      'Amazon GuardDuty; AWS Artifact; AWS Batch',
      'AWS Security Hub; AWS Pricing Calculator; AWS Artifact',
    ],
    correctAnswers: [0],
    explanation:
      'Artifact supplies compliance documentation. Config rules evaluate whether resources such as S3 buckets remain compliant over time. Security Hub aggregates and prioritizes findings from multiple services for posture management.',
  },
  {
    id: 'sc-133',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'fundamentals'],
    question:
      'Which option lists the AWS compliance services featured for documentation, auditing, configuration assessment, threat detection, and security posture management?',
    options: [
      'AWS Compliance Center, AWS Artifact, AWS Audit Manager, AWS Config, Amazon GuardDuty, and AWS Security Hub',
      'AWS Compliance Center, Amazon Polly, AWS Snowmobile, and Amazon GameLift',
      'AWS Artifact, AWS Batch, Amazon Lightsail, and AWS Cost Explorer only',
      'Amazon GuardDuty, AWS Pricing Calculator, and Amazon Kendra only',
    ],
    correctAnswers: [0],
    explanation:
      'For CLF, know Compliance Center (compliance resources hub), Artifact (reports), Audit Manager (audit evidence), Config (resource configuration compliance), GuardDuty (threat detection), and Security Hub (aggregated security posture and standards checks).',
  },
  {
    id: 'sc-134',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['license-manager', 'compliance-services', 'sample-exam'],
    question:
      'Which service is particularly beneficial for enterprises that use software from vendors like Microsoft, SAP, Oracle, and IBM, as it allows them to optimize their licensing costs while ensuring compliance with vendor agreements?',
    options: [
      'AWS Artifact',
      'Well-architected',
      'AWS License Manager',
      'AWS Compliance',
    ],
    correctAnswers: [2],
    explanation:
      'AWS License Manager tracks and manages software licenses from vendors such as Microsoft, SAP, Oracle, and IBM on AWS—helping enforce license limits on EC2 and other resources and avoid over- or under-licensing. Artifact provides AWS compliance reports; the Well-Architected Framework guides architecture reviews; AWS Compliance Center focuses on compliance programs and documentation rather than vendor license entitlements.',
  },
  {
    id: 'sc-138',
    domain: 'security-compliance',
    task: '2.2',
    tags: ['compliance-services', 'security-hub', 'sample-exam'],
    question:
      'Which AWS service assists with compliance by offering a comprehensive view of security posture and compliance status by evaluating AWS resources against industry standards?',
    options: [
      'AWS Config',
      'Audit Manager',
      'Security Hub',
      'Artifact',
    ],
    correctAnswers: [2],
    explanation:
      'AWS Security Hub provides a centralized view of security posture and runs automated checks against standards such as CIS AWS Foundations, aggregating findings from Config, GuardDuty, Inspector, and others. Config tracks resource configuration rules; Audit Manager collects audit evidence; Artifact hosts AWS compliance reports.',
  },
]
