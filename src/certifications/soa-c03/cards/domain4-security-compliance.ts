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
  ...buildSecurityComplianceExtras(),
]

type SecurityItem = {
  slug: string
  task: string
  tags: string[]
  resource: string
  focus: string
  url: string
}

function getSecurityItems(): SecurityItem[] {
  return [
  { slug: 'iam', task: '4.1', tags: ['iam', 'identity'], resource: 'IAM User Guide', focus: 'policy evaluation and least-privilege design', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/' },
  { slug: 'sts', task: '4.1', tags: ['sts', 'cross-account'], resource: 'AWS STS documentation', focus: 'temporary credentials and AssumeRole patterns', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html' },
  { slug: 'kms', task: '4.2', tags: ['kms', 'encryption'], resource: 'AWS KMS Developer Guide', focus: 'key policies, grants, and encryption workflows', url: 'https://docs.aws.amazon.com/kms/' },
  { slug: 'secrets-manager', task: '4.2', tags: ['secrets-manager', 'rotation'], resource: 'AWS Secrets Manager User Guide', focus: 'secret rotation and secure application credentials', url: 'https://docs.aws.amazon.com/secretsmanager/' },
  { slug: 'guardduty', task: '4.3', tags: ['guardduty', 'threat-detection'], resource: 'Amazon GuardDuty User Guide', focus: 'threat-detection findings and triage operations', url: 'https://docs.aws.amazon.com/guardduty/' },
  { slug: 'security-hub', task: '4.3', tags: ['security-hub', 'findings'], resource: 'AWS Security Hub User Guide', focus: 'aggregated security findings and compliance views', url: 'https://docs.aws.amazon.com/securityhub/' },
  { slug: 'inspector', task: '4.4', tags: ['inspector', 'vulnerabilities'], resource: 'Amazon Inspector User Guide', focus: 'continuous vulnerability scanning and prioritization', url: 'https://docs.aws.amazon.com/inspector/' },
  { slug: 'macie', task: '4.4', tags: ['macie', 'data-protection'], resource: 'Amazon Macie User Guide', focus: 'S3 sensitive data discovery and classification', url: 'https://docs.aws.amazon.com/macie/' },
  { slug: 'waf', task: '4.5', tags: ['waf', 'web-security'], resource: 'AWS WAF documentation', focus: 'L7 web ACL design and managed rule usage', url: 'https://docs.aws.amazon.com/waf/' },
  { slug: 'shield', task: '4.5', tags: ['shield', 'ddos'], resource: 'AWS Shield documentation', focus: 'DDoS protections and response workflows', url: 'https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html' },
  { slug: 'network-firewall', task: '4.5', tags: ['network-firewall', 'vpc'], resource: 'AWS Network Firewall Developer Guide', focus: 'stateful network filtering in VPC architectures', url: 'https://docs.aws.amazon.com/network-firewall/' },
  { slug: 'artifact', task: '4.6', tags: ['artifact', 'audit'], resource: 'AWS Artifact documentation', focus: 'compliance reports and agreement retrieval', url: 'https://docs.aws.amazon.com/artifact/' },
  { slug: 'detective', task: '4.3', tags: ['detective', 'investigations'], resource: 'Amazon Detective User Guide', focus: 'security investigations from linked findings', url: 'https://docs.aws.amazon.com/detective/' },
  { slug: 'access-analyzer', task: '4.1', tags: ['access-analyzer', 'iam'], resource: 'IAM Access Analyzer documentation', focus: 'external-access analysis for policies and resources', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html' },
  { slug: 'cloudtrail-lake', task: '4.6', tags: ['cloudtrail', 'audit-analytics'], resource: 'CloudTrail Lake documentation', focus: 'audit event retention and SQL-style event analysis', url: 'https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake.html' },
  ]
}

function buildSecurityComplianceExtras(): Card[] {
  const cards: Card[] = []
  let n = 13

  for (const item of getSecurityItems()) {
    cards.push({
      id: `soa-security-${String(n).padStart(3, '0')}`,
      domain: 'security-compliance',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-drill'],
      question: `Which official AWS resource is best for ${item.focus} in SOA-C03 prep?`,
      options: [
        item.resource,
        'Only third-party exam notes',
        'A generic cloud blog with no AWS references',
        'Only console screenshots',
      ],
      correctAnswers: [0],
      explanation: `Primary source: ${item.resource}. Start here: ${item.url}`,
    })
    n++

    cards.push({
      id: `soa-security-${String(n).padStart(3, '0')}`,
      domain: 'security-compliance',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-authority'],
      question: `You are studying ${item.focus}. Which source should you trust first for exam prep?`,
      options: [
        'Only community comments',
        item.resource,
        'Only AI summaries with no source links',
        'Only old, unrelated service docs',
      ],
      correctAnswers: [1],
      explanation: `AWS first-party references should anchor security and compliance prep: ${item.url}`,
    })
    n++

    cards.push({
      id: `soa-security-${String(n).padStart(3, '0')}`,
      domain: 'security-compliance',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-priority'],
      question: `For dependable coverage of ${item.focus}, where should you begin first?`,
      options: [
        'Only unsourced study groups',
        'Only short-form videos',
        item.resource,
        'Only release headlines',
      ],
      correctAnswers: [2],
      explanation: `Start with the AWS canonical source, then reinforce with labs and practice: ${item.url}`,
    })
    n++
  }

  return cards
}
