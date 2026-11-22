import type { Card } from '../../../core/types'

export const monitoringRemediationCards: Card[] = [
  {
    id: 'soa-monitoring-001',
    domain: 'monitoring-remediation',
    task: '1.1',
    tags: ['soa-c03', 'exam-guide', 'aws-training'],
    question: 'Which resource should you prioritize first to align all study with SOA-C03 objectives?',
    options: [
      'Community cheat sheet only',
      'Official AWS SOA-C03 exam guide',
      'Random practice exam bank',
      'Service marketing pages only',
    ],
    correctAnswers: [1],
    explanation:
      'Start from the official exam guide and blueprint: https://aws.amazon.com/certification/certified-sysops-admin-associate/',
  },
  {
    id: 'soa-monitoring-002',
    domain: 'monitoring-remediation',
    task: '1.1',
    tags: ['soa-c03', 'skill-builder', 'digital-course'],
    question: 'Which AWS-owned training platform is best for structured SOA-C03 learning paths?',
    options: ['AWS Skill Builder', 'AWS Artifact', 'AWS IQ', 'AWS Billing Console'],
    correctAnswers: [0],
    explanation:
      'AWS Skill Builder hosts exam prep and labs. Start at: https://explore.skillbuilder.aws/',
  },
  {
    id: 'soa-monitoring-003',
    domain: 'monitoring-remediation',
    task: '1.2',
    tags: ['cloudwatch', 'docs', 'alarms'],
    question: 'For deep exam prep on metrics, logs, alarms, and dashboards, which primary documentation set should you master?',
    options: [
      'Amazon S3 User Guide',
      'Amazon CloudWatch documentation',
      'AWS Budgets documentation only',
      'AWS Marketplace guides',
    ],
    correctAnswers: [1],
    explanation:
      'CloudWatch is central to Domain 1. Use the docs landing page: https://docs.aws.amazon.com/cloudwatch/',
  },
  {
    id: 'soa-monitoring-004',
    domain: 'monitoring-remediation',
    task: '1.2',
    tags: ['cloudtrail', 'audit', 'logs'],
    question: 'Which documentation is essential for understanding account activity auditing and event history?',
    options: [
      'AWS CloudTrail User Guide',
      'Amazon Route 53 Developer Guide',
      'AWS Lambda Powertools docs',
      'AWS Snowball docs',
    ],
    correctAnswers: [0],
    explanation:
      'CloudTrail is heavily tested for audit and investigations: https://docs.aws.amazon.com/awscloudtrail/',
  },
  {
    id: 'soa-monitoring-005',
    domain: 'monitoring-remediation',
    task: '1.3',
    tags: ['eventbridge', 'event-driven-ops', 'remediation'],
    question: 'What resource best supports learning event-driven auto-remediation patterns?',
    options: [
      'Amazon EventBridge User Guide',
      'AWS Cost Explorer API docs only',
      'AWS Glue DataBrew docs',
      'AWS App Runner docs',
    ],
    correctAnswers: [0],
    explanation:
      'EventBridge routes operational events to remediation actions: https://docs.aws.amazon.com/eventbridge/',
  },
  {
    id: 'soa-monitoring-006',
    domain: 'monitoring-remediation',
    task: '1.3',
    tags: ['x-ray', 'observability', 'troubleshooting'],
    question: 'Which service docs help you practice distributed tracing for troubleshooting application latency?',
    options: [
      'AWS X-Ray Developer Guide',
      'AWS Data Exchange docs',
      'AWS Wickr docs',
      'AWS Ground Station docs',
    ],
    correctAnswers: [0],
    explanation:
      'X-Ray tracing is useful for operational diagnostics: https://docs.aws.amazon.com/xray/',
  },
  {
    id: 'soa-monitoring-007',
    domain: 'monitoring-remediation',
    task: '1.4',
    tags: ['trusted-advisor', 'operational-excellence', 'best-practices'],
    question: 'Which AWS tool should you review for checks on cost, performance, fault tolerance, and security posture?',
    options: ['AWS Trusted Advisor', 'Amazon Polly', 'AWS Panorama', 'AWS RoboMaker'],
    correctAnswers: [0],
    explanation:
      'Trusted Advisor checks are common operational review inputs: https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
  },
  {
    id: 'soa-monitoring-008',
    domain: 'monitoring-remediation',
    task: '1.4',
    tags: ['health-dashboard', 'incident-response', 'service-events'],
    question: 'Where should you learn to interpret account-specific AWS service events that can impact operations?',
    options: [
      'Personal Health Dashboard documentation',
      'AWS Pricing Calculator docs',
      'AWS IQ FAQ',
      'CloudFront marketing page only',
    ],
    correctAnswers: [0],
    explanation:
      'Review the Personal Health Dashboard behavior and event types: https://docs.aws.amazon.com/health/',
  },
  {
    id: 'soa-monitoring-009',
    domain: 'monitoring-remediation',
    task: '1.5',
    tags: ['systems-manager', 'opscenter', 'incident-manager'],
    question: 'Which documentation family best covers OpsCenter and Incident Manager workflows for operational remediation?',
    options: [
      'AWS Systems Manager documentation',
      'Amazon Chime docs',
      'AWS AppSync docs',
      'AWS Mainframe Modernization docs',
    ],
    correctAnswers: [0],
    explanation:
      'Systems Manager contains core operations tooling: https://docs.aws.amazon.com/systems-manager/',
  },
  {
    id: 'soa-monitoring-010',
    domain: 'monitoring-remediation',
    task: '1.5',
    tags: ['well-architected', 'operational-excellence', 'review'],
    question: 'Which framework should you map to SOA-C03 operations scenarios for best-practice reasoning?',
    options: [
      'AWS Well-Architected Framework',
      'Only the AWS re:Post homepage',
      'Only AWS startup blog posts',
      'Only EC2 instance type tables',
    ],
    correctAnswers: [0],
    explanation:
      'Use Operational Excellence guidance from Well-Architected: https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
  },
  {
    id: 'soa-monitoring-011',
    domain: 'monitoring-remediation',
    task: '1.6',
    tags: ['workshop', 'cloudwatch', 'hands-on'],
    question: 'Which resource type gives the fastest practical practice for CloudWatch alarms, dashboards, and logs?',
    options: [
      'AWS Workshops labs',
      'Only certification badge images',
      'Only social media threads',
      'Only release notes',
    ],
    correctAnswers: [0],
    explanation:
      'Hands-on workshops are high-yield for SysOps skills: https://workshops.aws/',
  },
  {
    id: 'soa-monitoring-012',
    domain: 'monitoring-remediation',
    task: '1.6',
    tags: ['faq', 'exam-policies', 'prep-plan'],
    question: 'Before booking your exam, which official page should you review for exam logistics and policy details?',
    options: [
      'AWS Certification FAQ',
      'AWS Activate credits page only',
      'AWS Store checkout page',
      'AWS Outposts hardware specs only',
    ],
    correctAnswers: [0],
    explanation:
      'Review exam policies, scoring, and logistics in the FAQ: https://aws.amazon.com/certification/faqs/',
  },
  ...buildMonitoringRemediationExtras(),
]

type MonitoringItem = {
  slug: string
  task: string
  tags: string[]
  resource: string
  focus: string
  url: string
}

function getMonitoringItems(): MonitoringItem[] {
  return [
  {
    slug: 'cloudwatch-core',
    task: '1.2',
    tags: ['cloudwatch', 'metrics', 'alarms'],
    resource: 'Amazon CloudWatch User Guide',
    focus: 'metrics, alarm states, and dashboard design',
    url: 'https://docs.aws.amazon.com/cloudwatch/',
  },
  {
    slug: 'cloudtrail-core',
    task: '1.2',
    tags: ['cloudtrail', 'audit', 'api-activity'],
    resource: 'AWS CloudTrail User Guide',
    focus: 'API auditing and account activity history',
    url: 'https://docs.aws.amazon.com/awscloudtrail/',
  },
  {
    slug: 'eventbridge-core',
    task: '1.3',
    tags: ['eventbridge', 'events', 'automation'],
    resource: 'Amazon EventBridge User Guide',
    focus: 'event-driven remediation and routing',
    url: 'https://docs.aws.amazon.com/eventbridge/',
  },
  {
    slug: 'systems-manager-ops',
    task: '1.5',
    tags: ['systems-manager', 'opscenter', 'incident-manager'],
    resource: 'AWS Systems Manager User Guide',
    focus: 'OpsCenter and Incident Manager workflows',
    url: 'https://docs.aws.amazon.com/systems-manager/',
  },
  {
    slug: 'cloudwatch-agent',
    task: '1.3',
    tags: ['cloudwatch-agent', 'ec2', 'observability'],
    resource: 'CloudWatch agent documentation',
    focus: 'OS metrics/log collection from EC2 and on-prem hosts',
    url: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html',
  },
  {
    slug: 'config-aggregator',
    task: '1.4',
    tags: ['aws-config', 'multi-account', 'inventory'],
    resource: 'AWS Config multi-account aggregator documentation',
    focus: 'aggregated multi-account and multi-Region resource inventory',
    url: 'https://docs.aws.amazon.com/config/latest/developerguide/aggregate-data.html',
  },
  {
    slug: 'config-rules',
    task: '1.4',
    tags: ['aws-config', 'managed-rules', 'compliance'],
    resource: 'AWS Config managed and custom rules documentation',
    focus: 'continuous compliance checks and remediation triggers',
    url: 'https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html',
  },
  {
    slug: 'cloudwatch-composite-alarms',
    task: '1.2',
    tags: ['cloudwatch', 'composite-alarms', 'noise-reduction'],
    resource: 'CloudWatch composite alarms documentation',
    focus: 'multi-signal alarm strategy and alert-noise reduction',
    url: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html',
  },
  {
    slug: 'logs-insights',
    task: '1.2',
    tags: ['cloudwatch-logs', 'logs-insights', 'querying'],
    resource: 'CloudWatch Logs Insights documentation',
    focus: 'interactive log analysis and troubleshooting',
    url: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html',
  },
  ]
}

function buildMonitoringRemediationExtras(): Card[] {
  const cards: Card[] = []
  let n = 13

  for (const item of getMonitoringItems()) {
    cards.push({
      id: `soa-monitoring-${String(n).padStart(3, '0')}`,
      domain: 'monitoring-remediation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-drill'],
      question: `An operations team needs a runbook for ${item.focus}. Which source should they trust first when designing production procedures?`,
      options: [
        item.resource,
        'An internal wiki with no external references',
        'A random exam dump with no change history',
        'A marketing page without implementation details',
      ],
      correctAnswers: [0],
      explanation: `Use first-party AWS guidance for operational accuracy and up-to-date behavior. Primary source: ${item.resource} (${item.url}).`,
    })
    n++

    cards.push({
      id: `soa-monitoring-${String(n).padStart(3, '0')}`,
      domain: 'monitoring-remediation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-authority'],
      question: `You are troubleshooting an incident and must confirm AWS service behavior for ${item.focus}. Which source should break the tie between conflicting advice?`,
      options: [
        'A short social post thread',
        item.resource,
        'A cached copy of old forum comments',
        'A personal note from a prior project',
      ],
      correctAnswers: [1],
      explanation: `During incident response, use canonical service docs instead of unverified commentary: ${item.url}.`,
    })
    n++

    cards.push({
      id: `soa-monitoring-${String(n).padStart(3, '0')}`,
      domain: 'monitoring-remediation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-priority'],
      question: `For SOA-C03 prep, what is the best first step before doing hands-on labs for ${item.focus}?`,
      options: [
        'Memorize acronyms from flashcards only',
        'Skip docs and start with production changes',
        item.resource,
        'Depend on one short video with no references',
      ],
      correctAnswers: [2],
      explanation: `Read the official AWS source first, then reinforce with labs and scenarios. Start here: ${item.url}.`,
    })
    n++
  }

  return cards.slice(0, 26)
}
