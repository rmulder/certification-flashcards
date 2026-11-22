import type { Card } from '../../../core/types'

export const securityComplianceCards: Card[] = [
  {
    id: 'soa-security-001',
    domain: 'security-compliance',
    task: '4.1',
    tags: ['iam', 'least-privilege', 'identity'],
    question: 'Which documentation is primary for SOA-C03 identity and access management scenarios?',
    options: ['IAM User Guide', 'Amazon Bedrock docs only', 'Amazon EMR docs only', 'AWS Outposts docs only'],
    correctAnswers: [0],
    explanation:
      'IAM policy evaluation and role design are core exam topics: https://docs.aws.amazon.com/IAM/latest/UserGuide/',
  },
  {
    id: 'soa-security-002',
    domain: 'security-compliance',
    task: '4.1',
    tags: ['sts', 'cross-account', 'temporary-credentials'],
    question: 'What should you focus on for cross-account role assumption and temporary credential patterns?',
    options: [
      'AWS Security Token Service (STS) docs',
      'AWS Lambda Layers docs only',
      'AWS Data Pipeline legacy docs only',
      'Amazon Pinpoint docs only',
    ],
    correctAnswers: [0],
    explanation:
      'STS + IAM trust and permission boundaries are common in operations scenarios.',
  },
  {
    id: 'soa-security-003',
    domain: 'security-compliance',
    task: '4.2',
    tags: ['kms', 'encryption', 'key-management'],
    question: 'Which docs are best for encryption key strategy and permissions troubleshooting?',
    options: ['AWS KMS Developer Guide', 'AWS IQ docs', 'Amazon Textract docs', 'Amazon Personalize docs'],
    correctAnswers: [0],
    explanation:
      'KMS key policies, grants, and envelope encryption are frequently examined: https://docs.aws.amazon.com/kms/',
  },
  {
    id: 'soa-security-004',
    domain: 'security-compliance',
    task: '4.2',
    tags: ['secrets-manager', 'parameter-store', 'credentials'],
    question: 'For secret rotation and application credential handling, what should be your first-party study source?',
    options: [
      'AWS Secrets Manager User Guide',
      'AWS CodeCommit docs only',
      'Amazon Detective docs only',
      'AWS Clean Rooms docs only',
    ],
    correctAnswers: [0],
    explanation:
      'Secrets Manager usage and rotation are common security operations tasks: https://docs.aws.amazon.com/secretsmanager/',
  },
  {
    id: 'soa-security-005',
    domain: 'security-compliance',
    task: '4.3',
    tags: ['guardduty', 'threat-detection', 'security-monitoring'],
    question: 'Which AWS service docs should you study for managed threat detection findings?',
    options: ['Amazon GuardDuty User Guide', 'Amazon Forecast docs', 'Amazon Chime docs', 'AWS Panorama docs'],
    correctAnswers: [0],
    explanation:
      'GuardDuty findings and response workflows are common operational security scenarios: https://docs.aws.amazon.com/guardduty/',
  },
  {
    id: 'soa-security-006',
    domain: 'security-compliance',
    task: '4.3',
    tags: ['security-hub', 'findings', 'compliance-aggregation'],
    question: 'Which service consolidates security findings across multiple AWS security services?',
    options: ['AWS Security Hub', 'AWS Batch', 'Amazon ElastiCache', 'AWS IoT SiteWise'],
    correctAnswers: [0],
    explanation:
      'Security Hub centralizes and normalizes findings for triage: https://docs.aws.amazon.com/securityhub/',
  },
  {
    id: 'soa-security-007',
    domain: 'security-compliance',
    task: '4.4',
    tags: ['inspector', 'vulnerability-management', 'ec2'],
    question: 'For vulnerability assessment of workloads, which docs are high-priority for SOA-C03?',
    options: ['Amazon Inspector User Guide', 'Amazon Connect docs', 'Amazon Location Service docs', 'AWS SimSpace Weaver docs'],
    correctAnswers: [0],
    explanation:
      'Inspector findings and remediation planning are key for operations teams: https://docs.aws.amazon.com/inspector/',
  },
  {
    id: 'soa-security-008',
    domain: 'security-compliance',
    task: '4.4',
    tags: ['macie', 's3', 'data-classification'],
    question: 'Which service should you study for identifying sensitive data in S3?',
    options: ['Amazon Macie', 'AWS Glue Studio', 'AWS Service Catalog', 'AWS Backup'],
    correctAnswers: [0],
    explanation:
      'Macie helps detect and classify sensitive S3 data: https://docs.aws.amazon.com/macie/',
  },
  {
    id: 'soa-security-009',
    domain: 'security-compliance',
    task: '4.5',
    tags: ['waf', 'shield', 'ddos'],
    question: 'For L7 threat filtering and DDoS protection architecture, what docs should you prioritize?',
    options: [
      'AWS WAF and AWS Shield documentation',
      'AWS Data Exchange docs only',
      'Amazon WorkMail docs only',
      'AWS Mainframe Modernization docs only',
    ],
    correctAnswers: [0],
    explanation:
      'WAF and Shield are common controls in security operations questions: https://docs.aws.amazon.com/waf/ and https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html',
  },
  {
    id: 'soa-security-010',
    domain: 'security-compliance',
    task: '4.5',
    tags: ['network-firewall', 'vpc-security', 'inspection'],
    question: 'Which AWS service docs cover managed network traffic inspection and filtering in VPCs?',
    options: ['AWS Network Firewall Developer Guide', 'Amazon Lightsail docs', 'Amazon Polly docs', 'AWS Wickr docs'],
    correctAnswers: [0],
    explanation:
      'Network Firewall supports centralized and scalable packet filtering: https://docs.aws.amazon.com/network-firewall/',
  },
  {
    id: 'soa-security-011',
    domain: 'security-compliance',
    task: '4.6',
    tags: ['artifact', 'compliance-reports', 'audit'],
    question: 'Which AWS portal provides on-demand compliance reports and agreements for audit preparation?',
    options: ['AWS Artifact', 'AWS Billing Console only', 'AWS IQ only', 'AWS Outposts console only'],
    correctAnswers: [0],
    explanation:
      'Artifact gives access to compliance reports and legal agreements: https://docs.aws.amazon.com/artifact/',
  },
  {
    id: 'soa-security-012',
    domain: 'security-compliance',
    task: '4.6',
    tags: ['ramp-up-guide', 'training-plan', 'exam-readiness'],
    question: 'Which official AWS page helps sequence learning resources into a structured certification prep journey?',
    options: [
      'AWS Certification exam prep and ramp-up guides',
      'Only random video playlists',
      'Only personal notes',
      'Only release notes',
    ],
    correctAnswers: [0],
    explanation:
      'Use AWS certification prep pages and ramp-up guidance to organize study: https://aws.amazon.com/certification/',
  },
]
