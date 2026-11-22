import type { Card } from '../../../core/types'

export const securityComplianceCards: Card[] = [
  {
    id: 'soa-security-001',
    domain: 'security-compliance',
    task: '4.1',
    tags: ['iam', 'least-privilege', 'identity'],
    question: 'A team is redesigning access controls around least privilege and policy evaluation. Which reference should they start with?',
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
    question: 'Multiple AWS accounts need secure temporary access patterns using assumed roles. Which documentation is MOST relevant?',
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
    question: 'A security engineer must troubleshoot key-policy and grant issues for encrypted workloads. Which guide is MOST appropriate?',
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
    question: 'An application must rotate credentials automatically and avoid hardcoded secrets. Which service guidance should be used first?',
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
    question: 'A SOC wants managed threat findings sourced from AWS telemetry with minimal setup overhead. Which service should they use?',
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
    question: 'A central security team needs one aggregated view of findings and controls across services. Which service is MOST appropriate?',
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
    question: 'Operations wants continuous vulnerability assessments for running workloads. Which service guidance is MOST relevant?',
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
    question: 'A data governance team must detect and classify sensitive information stored in S3. Which service should they use?',
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
    question: 'A public web workload needs layer-7 filtering plus DDoS protection planning. Which documentation set is MOST relevant?',
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
    question: 'A network security team requires managed stateful filtering for VPC traffic paths. Which service should they evaluate first?',
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
    question: 'An auditor requests AWS compliance reports and contractual documents for evidence collection. Which portal should be used?',
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
    question: 'A candidate wants an official, structured path to prepare for SOA-C03 and related labs. Which page should they use?',
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
  ...buildModule10DataSecurityAuditingCards(),
  ...buildModule11SecureResilientNetworksCards(),
  ...buildSecurityComplianceExtras(),
]

function buildModule10DataSecurityAuditingCards(): Card[] {
  return [
    {
      id: 'soa-security-m10-001',
      domain: 'security-compliance',
      task: '4.1',
      tags: ['soa-c03', 'module-10', 'iam', 'identity-foundation', 'difficulty-easy'],
      question:
        'A team is hardening account access before enabling additional detection services. Which control area should be established FIRST?',
      options: [
        'A strong IAM foundation with least-privilege roles and policies',
        'A larger set of CloudWatch dashboards',
        'More EC2 Auto Scaling groups',
        'Additional Route 53 hosted zones',
      ],
      correctAnswers: [0],
      explanation:
        'Module 10 emphasizes identity and access foundations as a prerequisite for dependable security operations.',
    },
    {
      id: 'soa-security-m10-002',
      domain: 'security-compliance',
      task: '4.1',
      tags: ['soa-c03', 'module-10', 'access-analyzer', 'findings', 'difficulty-easy'],
      question:
        'Which IAM capability helps identify resources that are shared publicly or with external accounts through policy analysis?',
      options: ['IAM Access Analyzer', 'IAM Credential Report', 'AWS Organizations SCPs', 'AWS Budgets'],
      correctAnswers: [0],
      explanation:
        'Access Analyzer evaluates resource and policy access paths and surfaces external-access findings for review.',
    },
    {
      id: 'soa-security-m10-003',
      domain: 'security-compliance',
      task: '4.3',
      tags: ['soa-c03', 'module-10', 'guardduty', 'threat-detection', 'difficulty-easy'],
      question:
        'A security team wants managed threat detection without building custom analytics pipelines. Which service is MOST appropriate?',
      options: ['Amazon GuardDuty', 'AWS Config', 'Amazon Athena', 'AWS CloudFormation'],
      correctAnswers: [0],
      explanation:
        'GuardDuty analyzes multiple telemetry sources and generates actionable threat-detection findings.',
    },
    {
      id: 'soa-security-m10-004',
      domain: 'security-compliance',
      task: '4.3',
      tags: ['soa-c03', 'module-10', 'cloudtrail', 'auditing', 'difficulty-easy'],
      question:
        'Which AWS service provides event records for API activity that are essential for auditing and investigations?',
      options: ['AWS CloudTrail', 'AWS Health Dashboard', 'AWS Trusted Advisor', 'Amazon CloudSearch'],
      correctAnswers: [0],
      explanation:
        'CloudTrail records API activity and request context used for audit trails and forensic analysis.',
    },
    {
      id: 'soa-security-m10-005',
      domain: 'security-compliance',
      task: '4.3',
      tags: ['soa-c03', 'module-10', 'guardduty', 'data-sources', 'difficulty-medium'],
      question:
        'A security architect is validating GuardDuty input coverage. Which data-source combination aligns with core GuardDuty detections?',
      options: [
        'CloudTrail events, VPC Flow Logs, and DNS logs',
        'CloudFront access logs, AWS Budgets, and Cost Explorer',
        'RDS Performance Insights, S3 Inventory, and Trusted Advisor checks',
        'CloudFormation drift reports, Route 53 health checks, and AMI catalogs',
      ],
      correctAnswers: [0],
      explanation:
        'GuardDuty core detection sources include CloudTrail, VPC Flow Logs, and DNS logs as covered in Module 10.',
    },
    {
      id: 'soa-security-m10-006',
      domain: 'security-compliance',
      task: '4.3',
      tags: ['soa-c03', 'module-10', 'access-analyzer', 'findings', 'difficulty-medium'],
      question:
        'An Access Analyzer finding is marked as unintended external access. What is the MOST appropriate first action?',
      options: [
        'Update the resource policy to remove the unintended access path',
        'Delete CloudTrail trails to reduce noise',
        'Disable all IAM roles temporarily',
        'Rotate every KMS key in the account',
      ],
      correctAnswers: [0],
      explanation:
        'For unintended exposure, policy remediation should remove the access grant that generated the finding.',
    },
    {
      id: 'soa-security-m10-007',
      domain: 'security-compliance',
      task: '4.3',
      tags: ['soa-c03', 'module-10', 'cloudtrail', 'event-format', 'difficulty-medium'],
      question:
        'In a CloudTrail event header, which fields are most useful to quickly identify who performed an action and which API was called?',
      options: [
        'userIdentity and eventName',
        'recipientAccountId and resources only',
        'eventCategory and readOnly only',
        'tlsDetails and edgeLocation',
      ],
      correctAnswers: [0],
      explanation:
        'CloudTrail event headers use `userIdentity` for principal context and `eventName` for the API action.',
    },
    {
      id: 'soa-security-m10-008',
      domain: 'security-compliance',
      task: '4.6',
      tags: ['soa-c03', 'module-10', 'eventbridge', 'remediation', 'difficulty-medium'],
      question:
        'A team needs automatic response when a compliance finding occurs. Which pattern is MOST appropriate?',
      options: [
        'Route findings to EventBridge and trigger Automation or Lambda playbooks',
        'Export findings to CSV and review monthly',
        'Use Route 53 health checks to trigger remediation',
        'Scale out EC2 instances on a fixed schedule',
      ],
      correctAnswers: [0],
      explanation:
        'Module 10 shows incident-remediation patterns where findings flow through EventBridge to Automation/Lambda targets.',
    },
    {
      id: 'soa-security-m10-009',
      domain: 'security-compliance',
      task: '4.3',
      tags: ['soa-c03', 'module-10', 'guardduty', 'findings', 'difficulty-hard'],
      question:
        'A SOC receives a new GuardDuty finding and must prioritize triage quickly. Which information set is MOST useful first?',
      options: [
        'Finding category, affected resource, severity level, and suggested remediation path',
        'Only the IAM account alias and billing preferences',
        'The current EC2 reserved-instance utilization report',
        'Route 53 hosted-zone NS records and TTL values',
      ],
      correctAnswers: [0],
      explanation:
        'GuardDuty findings provide classification and context details that drive triage priority and response workflows.',
    },
    {
      id: 'soa-security-m10-010',
      domain: 'security-compliance',
      task: '4.6',
      tags: ['soa-c03', 'module-10', 'remediation-playbooks', 'automation', 'difficulty-hard'],
      question:
        'An operations team wants repeatable incident response with minimal manual steps. What is the BEST first design choice?',
      options: [
        'Create remediation playbooks and invoke them from EventBridge-driven workflows',
        'Require engineers to run ad-hoc console actions during each incident',
        'Pause all detections until a weekly change window',
        'Disable findings that trigger frequently',
      ],
      correctAnswers: [0],
      explanation:
        'Automated playbooks reduce response variability and integrate directly with event-driven remediation pipelines.',
    },
    {
      id: 'soa-security-m10-011',
      domain: 'security-compliance',
      task: '4.1',
      tags: ['soa-c03', 'module-10', 'access-analyzer', 'cross-account', 'difficulty-hard'],
      question:
        'A team is evaluating an Access Analyzer finding for cross-account access that is expected by design. What is the MOST appropriate action?',
      options: [
        'Archive the finding with rationale after validating the access intent',
        'Delete the shared resource immediately',
        'Disable Access Analyzer for the account',
        'Block all cross-account role assumptions organization-wide',
      ],
      correctAnswers: [0],
      explanation:
        'Expected findings should be validated and archived so teams can focus on truly unintended access paths.',
    },
    {
      id: 'soa-security-m10-012',
      domain: 'security-compliance',
      task: '4.3',
      tags: ['soa-c03', 'module-10', 'cloudtrail', 'investigation', 'difficulty-hard'],
      question:
        'During an investigation, analysts must correlate suspicious API behavior to a principal and source. Which approach is MOST appropriate?',
      options: [
        'Inspect CloudTrail event fields such as userIdentity, sourceIPAddress, eventTime, and eventName',
        'Rely only on CloudWatch CPU metrics',
        'Use Cost Explorer anomalies as the primary forensic source',
        'Review S3 lifecycle transitions for all buckets first',
      ],
      correctAnswers: [0],
      explanation:
        'CloudTrail event context fields are central to reconstructing who performed actions, when they occurred, and from where.',
    },
  ]
}

function buildModule11SecureResilientNetworksCards(): Card[] {
  return [
    {
      id: 'soa-security-m11-001',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'vpc', 'network-foundation', 'difficulty-easy'],
      question:
        'A team is deploying a new workload and needs network isolation boundaries in AWS. Which service is the primary foundation?',
      options: ['Amazon VPC', 'Amazon CloudWatch', 'AWS Config', 'Amazon GuardDuty'],
      correctAnswers: [0],
      explanation:
        'Module 11 starts with building secure VPC environments as the base for resilient network operations.',
    },
    {
      id: 'soa-security-m11-002',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'route-tables', 'vpc', 'difficulty-easy'],
      question:
        'Which VPC component determines where subnet traffic is forwarded based on destination and target?',
      options: ['Route table', 'Security group', 'Network ACL', 'DHCP option set'],
      correctAnswers: [0],
      explanation:
        'Route tables contain destination-target entries that control subnet-level traffic forwarding.',
    },
    {
      id: 'soa-security-m11-003',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'transit-gateway', 'connectivity', 'difficulty-easy'],
      question:
        'An organization needs to connect multiple VPCs and on-premises networks through a central routing hub. Which service is MOST appropriate?',
      options: ['AWS Transit Gateway', 'VPC Peering only', 'AWS WAF', 'Amazon Inspector'],
      correctAnswers: [0],
      explanation:
        'Transit Gateway is designed as a hub to connect multiple VPCs and VPN/on-premises attachments.',
    },
    {
      id: 'soa-security-m11-004',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'vpc-flow-logs', 'monitoring', 'difficulty-easy'],
      question:
        'Which feature should a SysOps team enable to monitor accepted/rejected IP traffic metadata for VPC resources?',
      options: ['VPC Flow Logs', 'CloudTrail Lake only', 'S3 Inventory', 'AWS Budgets alerts'],
      correctAnswers: [0],
      explanation:
        'VPC Flow Logs capture network flow metadata for troubleshooting and security analysis.',
    },
    {
      id: 'soa-security-m11-005',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'main-route-table', 'subnets', 'difficulty-medium'],
      question:
        'A subnet is not explicitly associated with a custom route table. Which route table applies by default?',
      options: [
        'The VPC main route table',
        'A new route table created by CloudWatch',
        'The closest route table in another VPC',
        'No route table applies until manually assigned',
      ],
      correctAnswers: [0],
      explanation:
        'Subnets without explicit association inherit routing behavior from the VPC main route table.',
    },
    {
      id: 'soa-security-m11-006',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'internet-gateway', 'public-subnet', 'difficulty-medium'],
      question:
        'A workload in a public subnet cannot reach the internet. Which routing condition is required in addition to attaching an internet gateway?',
      options: [
        'A route in the subnet route table that targets the internet gateway',
        'A GuardDuty finding suppression rule',
        'A Route 53 private hosted zone',
        'An ACM certificate in the same account',
      ],
      correctAnswers: [0],
      explanation:
        'Internet access requires both an attached IGW and a matching route-table entry toward that gateway.',
    },
    {
      id: 'soa-security-m11-007',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'transit-gateway', 'route-propagation', 'difficulty-medium'],
      question:
        'When using Transit Gateway, how are packets forwarded from one attachment to another?',
      options: [
        'Through Transit Gateway route tables that use propagated or static routes',
        'Only by security group rules on each instance',
        'Only through NACL rule order',
        'Only if CloudFront is in front of both VPCs',
      ],
      correctAnswers: [0],
      explanation:
        'Transit Gateway uses its own route tables to steer traffic between attached VPC and VPN connections.',
    },
    {
      id: 'soa-security-m11-008',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'cloudfront', 'origins', 'difficulty-medium'],
      question:
        'A team is configuring CloudFront for a web app. Which origin setting identifies where CloudFront fetches the original content?',
      options: ['Origin domain name', 'Viewer protocol policy', 'Price class', 'Cache policy name'],
      correctAnswers: [0],
      explanation:
        'CloudFront distributions define one or more origins, and origin domain name specifies the source endpoint.',
    },
    {
      id: 'soa-security-m11-009',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'shield', 'ddos', 'difficulty-hard'],
      question:
        'A security lead asks which AWS DDoS protection is included automatically at no additional charge. Which answer is correct?',
      options: ['AWS Shield Standard', 'AWS Shield Advanced', 'AWS WAF managed rules', 'Route 53 Resolver DNS Firewall'],
      correctAnswers: [0],
      explanation:
        'Shield Standard is included by default, while Shield Advanced adds enhanced protections and response features.',
    },
    {
      id: 'soa-security-m11-010',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'shield-advanced', 'drt', 'difficulty-hard'],
      question:
        'An organization needs advanced DDoS detection plus access to the AWS DDoS Response Team (DRT). Which choice is MOST appropriate?',
      options: [
        'Enable AWS Shield Advanced on supported resources',
        'Enable VPC Flow Logs only',
        'Create more CloudFront distributions',
        'Use Security Hub controls without Shield',
      ],
      correctAnswers: [0],
      explanation:
        'Shield Advanced includes enhanced detection/mitigation and DRT access for supported resources.',
    },
    {
      id: 'soa-security-m11-011',
      domain: 'security-compliance',
      task: '4.2',
      tags: ['soa-c03', 'module-11', 'acm', 'tls', 'difficulty-hard'],
      question:
        'A team wants to secure application communications with managed TLS certificate lifecycle and minimal operational overhead. Which service should they use?',
      options: ['AWS Certificate Manager (ACM)', 'AWS Secrets Manager', 'AWS KMS aliases only', 'IAM Access Analyzer'],
      correctAnswers: [0],
      explanation:
        'ACM provisions and manages public certificates for integrated AWS services with reduced certificate-management burden.',
    },
    {
      id: 'soa-security-m11-012',
      domain: 'security-compliance',
      task: '4.5',
      tags: ['soa-c03', 'module-11', 'network-troubleshooting', 'flow-logs', 'difficulty-hard'],
      question:
        'A production endpoint intermittently fails to connect across VPC boundaries. What is the BEST first diagnostic action?',
      options: [
        'Review VPC Flow Logs and relevant route-table entries for the affected paths',
        'Rotate all IAM user access keys immediately',
        'Disable Security Hub standards to reduce alerts',
        'Recreate all subnets in a new VPC',
      ],
      correctAnswers: [0],
      explanation:
        'For network-path issues, begin with flow visibility and route validation before making broad configuration changes.',
    },
  ]
}

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
  { slug: 'sts', task: '4.1', tags: ['sts', 'cross-account'], resource: 'AWS STS documentation', focus: 'temporary credentials, session duration, and AssumeRole patterns', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html' },
  { slug: 'kms', task: '4.2', tags: ['kms', 'encryption'], resource: 'AWS KMS Developer Guide', focus: 'key policies, grants, and encryption workflows', url: 'https://docs.aws.amazon.com/kms/' },
  { slug: 'secrets-manager', task: '4.2', tags: ['secrets-manager', 'rotation'], resource: 'AWS Secrets Manager User Guide', focus: 'secret rotation and secure application credentials', url: 'https://docs.aws.amazon.com/secretsmanager/' },
  { slug: 'guardduty', task: '4.3', tags: ['guardduty', 'threat-detection'], resource: 'Amazon GuardDuty User Guide', focus: 'threat-detection findings and triage operations', url: 'https://docs.aws.amazon.com/guardduty/' },
  { slug: 'security-hub', task: '4.3', tags: ['security-hub', 'findings'], resource: 'AWS Security Hub User Guide', focus: 'aggregated security findings, controls, and compliance views', url: 'https://docs.aws.amazon.com/securityhub/' },
  { slug: 'inspector', task: '4.4', tags: ['inspector', 'vulnerabilities'], resource: 'Amazon Inspector User Guide', focus: 'continuous vulnerability scanning and prioritization', url: 'https://docs.aws.amazon.com/inspector/' },
  { slug: 'macie', task: '4.4', tags: ['macie', 'data-protection'], resource: 'Amazon Macie User Guide', focus: 'S3 sensitive data discovery and classification', url: 'https://docs.aws.amazon.com/macie/' },
  { slug: 'waf', task: '4.5', tags: ['waf', 'web-security'], resource: 'AWS WAF documentation', focus: 'L7 web ACL design and managed rule usage', url: 'https://docs.aws.amazon.com/waf/' },
  { slug: 'shield', task: '4.5', tags: ['shield', 'ddos'], resource: 'AWS Shield documentation', focus: 'DDoS protections and response workflows', url: 'https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html' },
  { slug: 'network-firewall', task: '4.5', tags: ['network-firewall', 'vpc'], resource: 'AWS Network Firewall Developer Guide', focus: 'stateful network filtering in VPC architectures', url: 'https://docs.aws.amazon.com/network-firewall/' },
  { slug: 'session-manager-logging', task: '4.6', tags: ['session-manager', 'audit-logging'], resource: 'Session Manager logging and auditing documentation', focus: 'session logging to S3 and CloudWatch Logs for command/audit trails', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html' },
  { slug: 'detective', task: '4.3', tags: ['detective', 'investigations'], resource: 'Amazon Detective User Guide', focus: 'security investigations from linked findings', url: 'https://docs.aws.amazon.com/detective/' },
  { slug: 'access-analyzer', task: '4.1', tags: ['access-analyzer', 'iam'], resource: 'IAM Access Analyzer documentation', focus: 'external-access analysis for policies and resources', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html' },
  { slug: 'iam-passrole', task: '4.1', tags: ['iam', 'passrole', 'troubleshooting'], resource: 'IAM PassRole documentation', focus: 'scoping iam:PassRole permissions to expected role resources during troubleshooting', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html' },
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
      question: `A security operations team is formalizing controls for ${item.focus}. Which source should define the baseline?`,
      options: [
        item.resource,
        'Only third-party exam notes',
        'An unsourced cloud-security blog',
        'Only screenshot-based runbooks',
      ],
      correctAnswers: [0],
      explanation: `Security controls should be anchored to first-party AWS guidance for correct behavior and limits: ${item.url}.`,
    })
    n++

    cards.push({
      id: `soa-security-${String(n).padStart(3, '0')}`,
      domain: 'security-compliance',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-authority'],
      question: `During an incident postmortem, teams disagree on expected AWS behavior for ${item.focus}. Which source should resolve it?`,
      options: [
        'Only community comments',
        item.resource,
        'Only AI summaries with no source links',
        'Only old, unrelated service docs',
      ],
      correctAnswers: [1],
      explanation: `For security decisions and exam alignment, prioritize canonical AWS service documentation: ${item.url}.`,
    })
    n++

    cards.push({
      id: `soa-security-${String(n).padStart(3, '0')}`,
      domain: 'security-compliance',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-priority'],
      question: `For dependable SOA-C03 prep on ${item.focus}, which first step is best before labs and practice tests?`,
      options: [
        'Rely only on unsourced study groups',
        'Rely only on short-form videos',
        item.resource,
        'Use only release-note headlines',
      ],
      correctAnswers: [2],
      explanation: `Read the canonical AWS source first, then reinforce with hands-on labs and scenario drills: ${item.url}.`,
    })
    n++
  }

  return cards
}
