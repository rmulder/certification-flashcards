import type { Card } from '../../../core/types'

export const monitoringRemediationCards: Card[] = [
  {
    id: 'soa-monitoring-001',
    domain: 'monitoring-remediation',
    task: '1.1',
    tags: ['soa-c03', 'exam-guide', 'aws-training'],
    question: 'A new SysOps candidate needs to align study to tested objectives before doing practice exams. What should they review first?',
    options: [
      'AWS Whitepapers library',
      'Official AWS SOA-C03 exam guide',
      'Random practice exam bank',
      'AWS service FAQs and release notes',
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
    question: 'A learner wants guided AWS-authored training paths for SysOps skills. Which platform is MOST appropriate?',
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
    question: 'An operations team must design monitoring with metrics, alarms, logs, and dashboards. Which reference should they consult first?',
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
    question: 'During an investigation, the team needs authoritative guidance on AWS API activity history and auditing. Which source is MOST appropriate?',
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
    question: 'A team wants event-driven remediation workflows triggered by operational events. Which service guidance should anchor the design?',
    options: [
      'Amazon EventBridge User Guide',
      'AWS Systems Manager Automation docs',
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
    question: 'Latency spans multiple microservices and the team needs request-level traces. Which AWS service is MOST relevant?',
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
    question: 'A cloud ops lead needs account-level best-practice checks for cost, performance, resilience, and security. Which tool should they use?',
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
    question: 'An incident may be caused by AWS service events affecting your account resources. Where should operators check first?',
    options: [
      'Personal Health Dashboard documentation',
      'AWS Pricing Calculator docs',
      'AWS IQ FAQ',
      'AWS Service Health dashboard docs',
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
    question: 'A team is formalizing incident response with OpsCenter and Incident Manager capabilities. Which documentation family is MOST appropriate?',
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
    question: 'A team wants to evaluate operational decisions against AWS best practices. Which framework should guide that analysis?',
    options: [
      'AWS Well-Architected Framework',
      'Only the AWS re:Post homepage',
      'AWS Architecture Center reference patterns',
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
    question: 'An engineer needs hands-on practice quickly for CloudWatch alarms, dashboards, and logs. Which resource type is BEST?',
    options: [
      'AWS Workshops labs',
      'Only certification badge images',
      'AWS re:Post knowledge center articles',
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
    question: 'Before scheduling SOA-C03, a candidate wants to confirm retake rules, logistics, and scoring policy. Which page should they read?',
    options: [
      'AWS Certification FAQ',
      'AWS Training and Certification overview',
      'AWS Store checkout page',
      'AWS exam prep official page',
    ],
    correctAnswers: [0],
    explanation:
      'Review exam policies, scoring, and logistics in the FAQ: https://aws.amazon.com/certification/faqs/',
  },
  ...buildModule9SystemHealthCards(),
  ...buildModule14CostOptimizationCards(),
  ...buildModule15CourseSummaryCards(),
  ...buildMonitoringRemediationExtras(),
]

function buildModule9SystemHealthCards(): Card[] {
  return [
    {
      id: 'soa-monitoring-m9-001',
      domain: 'monitoring-remediation',
      task: '1.2',
      tags: ['soa-c03', 'module-9', 'cloudwatch', 'metrics', 'difficulty-easy'],
      question:
        'An operator wants one place to visualize metric trends and alarm status for key workloads. Which service should they use first?',
      options: ['Amazon CloudWatch', 'AWS Artifact', 'Amazon Polly', 'AWS Data Exchange'],
      correctAnswers: [0],
      explanation:
        'CloudWatch is the primary monitoring service for metrics, alarms, and dashboards across AWS resources.',
    },
    {
      id: 'soa-monitoring-m9-002',
      domain: 'monitoring-remediation',
      task: '1.2',
      tags: ['soa-c03', 'module-9', 'cloudwatch', 'namespace', 'difficulty-easy'],
      question:
        'You need to compare CPU utilization across EC2 instances in a dashboard. Which metric property helps separate each instance series?',
      options: ['Dimensions', 'Retention period', 'Alarm state', 'Metric math'],
      correctAnswers: [0],
      explanation:
        'Dimensions identify distinct metric streams, such as `InstanceId` for EC2.',
    },
    {
      id: 'soa-monitoring-m9-003',
      domain: 'monitoring-remediation',
      task: '1.2',
      tags: ['soa-c03', 'module-9', 'cloudwatch', 'dashboards', 'difficulty-easy'],
      question:
        'A team needs a shared operations view across several AWS Regions. What is the best CloudWatch feature to start with?',
      options: [
        'CloudWatch Dashboards with cross-Region widgets',
        'CloudTrail event history only',
        'IAM Access Analyzer',
        'AWS Cost Categories',
      ],
      correctAnswers: [0],
      explanation:
        'CloudWatch Dashboards support centralized visualizations, including cross-Region data views.',
    },
    {
      id: 'soa-monitoring-m9-004',
      domain: 'monitoring-remediation',
      task: '1.2',
      tags: ['soa-c03', 'module-9', 'cloudwatch-logs', 'troubleshooting', 'difficulty-easy'],
      question:
        'During a production incident, where should operators look to quickly inspect application and system log streams?',
      options: ['CloudWatch Logs', 'AWS Billing console', 'Amazon Connect', 'AWS Organizations'],
      correctAnswers: [0],
      explanation:
        'CloudWatch Logs is designed for centralized operational log collection and analysis.',
    },
    {
      id: 'soa-monitoring-m9-005',
      domain: 'monitoring-remediation',
      task: '1.3',
      tags: ['soa-c03', 'module-9', 'eventbridge', 'automation', 'difficulty-medium'],
      question:
        'An operations team wants to trigger automation only when specific events occur. Which EventBridge capability should they rely on?',
      options: ['Event patterns in rules', 'CloudFormation stack drift', 'EBS snapshots', 'Route tables'],
      correctAnswers: [0],
      explanation:
        'EventBridge rules use event patterns to match specific event content and route to targets.',
    },
    {
      id: 'soa-monitoring-m9-006',
      domain: 'monitoring-remediation',
      task: '1.3',
      tags: ['soa-c03', 'module-9', 'eventbridge', 'sources', 'difficulty-medium'],
      question:
        'Which event fields are most important when distinguishing operational events from different AWS services in EventBridge?',
      options: ['source and detail-type', 'alarm name and threshold', 'bucket and key', 'region and AZ only'],
      correctAnswers: [0],
      explanation:
        'EventBridge commonly filters by `source` and `detail-type` to separate service event categories.',
    },
    {
      id: 'soa-monitoring-m9-007',
      domain: 'monitoring-remediation',
      task: '1.2',
      tags: ['soa-c03', 'module-9', 'dashboards', 'multi-account', 'difficulty-medium'],
      question:
        'A centralized operations team monitors several accounts. Which approach best supports a single pane of glass?',
      options: [
        'CloudWatch dashboards using cross-account observability views',
        'CloudWatch cross-account observability setup',
        'Manual spreadsheet updates',
        'One-time exports to CSV',
      ],
      correctAnswers: [0],
      explanation:
        'CloudWatch cross-account observability patterns are designed for centralized, multi-account operations.',
    },
    {
      id: 'soa-monitoring-m9-008',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-9', 'resource-health', 'troubleshooting', 'difficulty-medium'],
      question:
        'An EC2 instance alarm fired, but the app team suspects AWS infrastructure impact. Which view should be checked first?',
      options: [
        'CloudWatch Resource Health view',
        'S3 inventory report',
        'AWS Marketplace product page',
        'KMS key rotation schedule',
      ],
      correctAnswers: [0],
      explanation:
        'Resource health views help correlate monitoring signals with underlying resource or service health context.',
    },
    {
      id: 'soa-monitoring-m9-009',
      domain: 'monitoring-remediation',
      task: '1.3',
      tags: ['soa-c03', 'module-9', 'eventbridge', 'remediation', 'difficulty-hard'],
      question:
        'An ops team must auto-remediate only terminated EC2 instances, not every state change. Which EventBridge design is MOST appropriate?',
      options: [
        'Create an EventBridge rule with a detail filter for the terminated state',
        'Match all EC2 instance-state-change events and filter inside the Lambda code only',
        'Create a CloudWatch alarm on CPU and invoke remediation from alarm actions',
        'Use a scheduled EventBridge rule every minute to poll and remediate',
      ],
      correctAnswers: [0],
      explanation:
        'A precise EventBridge pattern on event details minimizes false triggers and unnecessary remediation runs.',
    },
    {
      id: 'soa-monitoring-m9-010',
      domain: 'monitoring-remediation',
      task: '1.2',
      tags: ['soa-c03', 'module-9', 'cloudwatch-logs', 'analysis', 'difficulty-hard'],
      question:
        'A latency spike lasted 12 minutes overnight. Which method is MOST effective to gather root-cause evidence from logs?',
      options: [
        'Query the relevant CloudWatch log groups for that exact time window',
        'Review only CloudWatch dashboard widgets without drilling into logs',
        'Increase instance count first, then inspect logs the next day',
        'Use AWS Cost Explorer anomalies to infer application error causes',
      ],
      correctAnswers: [0],
      explanation:
        'Time-bounded log analysis in CloudWatch provides the fastest evidence path during incident triage.',
    },
    {
      id: 'soa-monitoring-m9-011',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-9', 'health', 'operations', 'difficulty-hard'],
      question:
        'During an active incident bridge, why is it important to include AWS service/resource health context alongside application metrics?',
      options: [
        'It helps determine whether the issue is workload-level or provider-level',
        'It removes the need to review application logs and traces',
        'It automatically selects the correct rollback strategy',
        'It guarantees that alarm thresholds no longer require tuning',
      ],
      correctAnswers: [0],
      explanation:
        'Separating workload faults from AWS-side service/resource issues improves escalation and remediation decisions.',
    },
    {
      id: 'soa-monitoring-m9-012',
      domain: 'monitoring-remediation',
      task: '1.3',
      tags: ['soa-c03', 'module-9', 'eventbridge', 'operations', 'difficulty-hard'],
      question:
        'Too many unrelated events are invoking automation targets. What is the BEST first corrective action?',
      options: [
        'Tighten EventBridge rule patterns to match only required sources and detail fields',
        'Add more generic wildcard patterns to catch future event types',
        'Increase CloudWatch alarm thresholds to reduce event volume',
        'Disable DLQs so failed targets retry less often',
      ],
      correctAnswers: [0],
      explanation:
        'Most event-noise issues are solved by narrowing rule-matching criteria to intended operational events.',
    },
  ]
}

function buildModule14CostOptimizationCards(): Card[] {
  return [
    {
      id: 'soa-monitoring-m14-001',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'cost-explorer', 'visibility', 'difficulty-easy'],
      question:
        'A team needs a quick view of historical AWS spend by service and account. Which tool should they use first?',
      options: ['AWS Cost Explorer', 'AWS Artifact', 'AWS X-Ray', 'AWS AppConfig'],
      correctAnswers: [0],
      explanation:
        'Module 14 centers cost and usage visibility around Cost Explorer for historical and current trend analysis.',
    },
    {
      id: 'soa-monitoring-m14-002',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'cost-explorer', 'granularity', 'difficulty-easy'],
      question:
        'Which Cost Explorer option controls whether cost data is shown hourly, daily, or monthly?',
      options: ['Time granularity', 'Cost category inheritance', 'Savings plan commitment', 'Reservation scope'],
      correctAnswers: [0],
      explanation:
        'Cost Explorer supports selectable time granularity for analyzing cost trends at different detail levels.',
    },
    {
      id: 'soa-monitoring-m14-003',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'budgets', 'alerts', 'difficulty-easy'],
      question:
        'A finance owner wants alerts before monthly spend exceeds a defined threshold. Which service is MOST appropriate?',
      options: ['AWS Budgets', 'AWS Trusted Advisor only', 'CloudFormation drift detection', 'IAM Access Analyzer'],
      correctAnswers: [0],
      explanation:
        'AWS Budgets provides threshold-based cost/usage alerting and notifications for proactive control.',
    },
    {
      id: 'soa-monitoring-m14-004',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'anomaly-detection', 'cost-management', 'difficulty-easy'],
      question:
        'Which capability helps identify unexpected spikes in AWS spend without manually checking every service each day?',
      options: ['Cost Anomaly Detection', 'S3 Event Notifications', 'EC2 Auto Scaling lifecycle hooks', 'Route 53 health checks'],
      correctAnswers: [0],
      explanation:
        'Cost anomaly features flag unusual spending patterns so teams can investigate before costs escalate.',
    },
    {
      id: 'soa-monitoring-m14-005',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'cost-explorer', 'time-ranges', 'difficulty-medium'],
      question:
        'An operator wants to compare current month spend with the last three full months in Cost Explorer. Which setup is MOST appropriate?',
      options: [
        'Set a historical date range that includes prior complete months and compare by month',
        'Use only hourly granularity with no date filter',
        'Enable Shield Advanced for all accounts',
        'Analyze only CloudTrail event counts',
      ],
      correctAnswers: [0],
      explanation:
        'Cost Explorer analysis depends on selecting the proper historical date range and grouping view.',
    },
    {
      id: 'soa-monitoring-m14-006',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'budgets', 'governance', 'difficulty-medium'],
      question:
        'A team wants notifications when resource utilization drops below target efficiency levels, not just when cost rises. Which tool supports this?',
      options: [
        'AWS Budgets with utilization-related thresholds and alerts',
        'Route 53 traffic policies',
        'AWS Certificate Manager',
        'EBS snapshot copy operations',
      ],
      correctAnswers: [0],
      explanation:
        'Module 14 notes that budgets can alert on both overrun and under-utilization-style control thresholds.',
    },
    {
      id: 'soa-monitoring-m14-007',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'reservations', 'optimization', 'difficulty-medium'],
      question:
        'A cost owner wants purchase guidance based on observed usage to lower compute costs. Which Cost Explorer feature is MOST relevant?',
      options: [
        'Reserved Instance recommendations',
        'CloudWatch metric streams',
        'GuardDuty threat findings',
        'AWS Config conformance packs',
      ],
      correctAnswers: [0],
      explanation:
        'Cost Explorer reservation recommendations use usage patterns to estimate potential savings opportunities.',
    },
    {
      id: 'soa-monitoring-m14-008',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'cost-management', 'forecast', 'difficulty-medium'],
      question:
        'A manager asks whether this month will exceed planned spend before it ends. Which approach is MOST appropriate?',
      options: [
        'Use Cost Explorer forecast views with relevant filters and date scope',
        'Rely only on prior-year static spreadsheets',
        'Rotate all IAM credentials',
        'Enable Multi-AZ for every database',
      ],
      correctAnswers: [0],
      explanation:
        'Forecasted cost views help project likely end-of-period spend based on current usage trends.',
    },
    {
      id: 'soa-monitoring-m14-009',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'ri-recommendations', 'scope', 'difficulty-hard'],
      question:
        'A team expects RI recommendations for a service but sees none in Cost Explorer. What is the MOST likely explanation?',
      options: [
        'That service/usage pattern may not currently qualify for supported RI recommendation coverage',
        'Cost Explorer cannot show any recommendations when Budgets are enabled',
        'Recommendations appear only after enabling CloudTrail data events',
        'RI guidance requires S3 lifecycle rules on all buckets',
      ],
      correctAnswers: [0],
      explanation:
        'RI recommendation availability depends on service support and sufficient eligible usage history.',
    },
    {
      id: 'soa-monitoring-m14-010',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'alerting', 'operations', 'difficulty-hard'],
      question:
        'An organization wants early warning and response playbooks when spend deviates unexpectedly. What is the BEST first design?',
      options: [
        'Combine anomaly detection with budget thresholds and route notifications to operations channels',
        'Wait for monthly invoices and investigate manually afterward',
        'Disable all cost visibility to avoid false positives',
        'Use Route 53 health checks as the only cost-control mechanism',
      ],
      correctAnswers: [0],
      explanation:
        'Layering anomaly detection with budget alerts supports earlier detection and faster operational response.',
    },
    {
      id: 'soa-monitoring-m14-011',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'cost-explorer', 'investigation', 'difficulty-hard'],
      question:
        'A sudden spend spike appears in one business unit. Which Cost Explorer analysis path is MOST appropriate first?',
      options: [
        'Filter and group costs by account/service/time to isolate the primary spend driver',
        'Delete older CloudWatch metrics to reduce dashboard noise',
        'Rebuild VPC route tables in all Regions',
        'Disable S3 Block Public Access for debugging',
      ],
      correctAnswers: [0],
      explanation:
        'Cost Explorer filtering and grouping dimensions provide the fastest path to isolate major contributors.',
    },
    {
      id: 'soa-monitoring-m14-012',
      domain: 'monitoring-remediation',
      task: '1.4',
      tags: ['soa-c03', 'module-14', 'cost-optimization', 'governance', 'difficulty-hard'],
      question:
        'Leadership wants ongoing spend optimization without relying on ad-hoc quarterly reviews. Which strategy is BEST?',
      options: [
        'Adopt continuous cost governance using Cost Explorer, Budgets, anomaly alerts, and periodic commitment reviews',
        'Run one-time cost cleanup and avoid further monitoring',
        'Track only total bill amount with no service-level visibility',
        'Replace all alerting with manual email checklists',
      ],
      correctAnswers: [0],
      explanation:
        'Module 14 promotes continuous cost-awareness loops rather than one-off optimization efforts.',
    },
  ]
}

function buildModule15CourseSummaryCards(): Card[] {
  return [
    {
      id: 'soa-monitoring-m15-001',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'course-summary', 'capstone', 'difficulty-easy'],
      question:
        'A candidate is planning final review before the exam. Which strategy is MOST aligned with the course summary objectives?',
      options: [
        'Practice compliance, automation, cost optimization, and troubleshooting as one integrated workflow',
        'Focus only on memorizing service launch dates',
        'Study only one service deeply and skip cross-domain scenarios',
        'Use only static notes and avoid hands-on labs',
      ],
      correctAnswers: [0],
      explanation:
        'Module 15 emphasizes cross-domain operational capability, not isolated memorization.',
    },
    {
      id: 'soa-monitoring-m15-002',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'monitoring', 'triggers', 'difficulty-easy'],
      question:
        'Which activity best reflects the objective of implementing alarms and triggers for AWS resources?',
      options: [
        'Define actionable alarm thresholds and route notifications to responders',
        'Create dashboards without any alarm actions',
        'Disable all alerts to reduce operational noise',
        'Track only monthly billing totals',
      ],
      correctAnswers: [0],
      explanation:
        'Effective operations require alerts tied to clear response actions.',
    },
    {
      id: 'soa-monitoring-m15-003',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'automation', 'repeatability', 'difficulty-easy'],
      question:
        'A team wants to meet the course objective for repeatable deployments of recurring tasks. What is the BEST approach?',
      options: [
        'Automate procedures with versioned runbooks and infrastructure definitions',
        'Rely on ad-hoc console steps documented in static notes',
        'Execute changes only from memory during incidents',
        'Disable change logs to move faster',
      ],
      correctAnswers: [0],
      explanation:
        'Repeatability comes from automated, versioned operational workflows.',
    },
    {
      id: 'soa-monitoring-m15-004',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'troubleshooting', 'operations', 'difficulty-easy'],
      question:
        'Which behavior best matches the objective of effectively troubleshooting common system administration scenarios?',
      options: [
        'Start with telemetry and context, isolate cause, then apply targeted remediation',
        'Reboot everything immediately before gathering evidence',
        'Ignore logs and rely only on assumptions',
        'Delay all action until next business week',
      ],
      correctAnswers: [0],
      explanation:
        'Structured evidence-first troubleshooting improves accuracy and time to resolve.',
    },
    {
      id: 'soa-monitoring-m15-005',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'compliance', 'governance', 'difficulty-medium'],
      question:
        'Leadership asks how to sustain compliance and governance as workloads scale. Which plan is MOST appropriate?',
      options: [
        'Use policy guardrails, continuous checks, and alert-driven remediation workflows',
        'Run one annual review and stop monitoring in between',
        'Allow ad-hoc policy exceptions without tracking',
        'Disable findings that are hard to investigate',
      ],
      correctAnswers: [0],
      explanation:
        'Continuous controls and remediation loops are essential for scalable governance.',
    },
    {
      id: 'soa-monitoring-m15-006',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'cost-optimization', 'operations', 'difficulty-medium'],
      question:
        'A team wants to optimize cloud spend while maintaining performance. What is the BEST ongoing approach?',
      options: [
        'Continuously monitor usage patterns and adjust resources with cost controls',
        'Reduce all instance sizes without measuring impact',
        'Turn off monitoring to cut operational overhead',
        'Review costs only at year-end',
      ],
      correctAnswers: [0],
      explanation:
        'Sustained optimization requires iterative measurement and controlled adjustments.',
    },
    {
      id: 'soa-monitoring-m15-007',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'capstone', 'cross-domain', 'difficulty-medium'],
      question:
        'During final prep, which practice most improves readiness for integrated SOA-C03 scenarios?',
      options: [
        'Run end-to-end drills that combine deployment, monitoring, security, and recovery decisions',
        'Study each service in isolation with no scenario context',
        'Memorize CLI syntax without understanding outcomes',
        'Skip post-incident reviews in lab exercises',
      ],
      correctAnswers: [0],
      explanation:
        'Exam scenarios often require cross-domain reasoning under operational constraints.',
    },
    {
      id: 'soa-monitoring-m15-008',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'resource-consumption', 'optimization', 'difficulty-medium'],
      question:
        'Which metric trend should prompt a review for possible overprovisioning and resource optimization?',
      options: [
        'Persistent low utilization with stable performance margins',
        'Temporary high utilization during planned load tests',
        'Increased error rates during deployments only',
        'One-time billing anomaly resolved last month',
      ],
      correctAnswers: [0],
      explanation:
        'Consistent underutilization commonly indicates optimization opportunities.',
    },
    {
      id: 'soa-monitoring-m15-009',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'incident-remediation', 'difficulty-hard'],
      question:
        'An alert indicates degraded service and rising cost simultaneously. What is the MOST appropriate first response?',
      options: [
        'Correlate telemetry, identify root cause, and apply a targeted remediation that addresses both signals',
        'Suppress all alarms until monthly review',
        'Scale every component to maximum size immediately',
        'Roll back all infrastructure changes without investigation',
      ],
      correctAnswers: [0],
      explanation:
        'Cross-signal correlation avoids overreaction and leads to effective remediation.',
    },
    {
      id: 'soa-monitoring-m15-010',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'readiness', 'practice', 'difficulty-hard'],
      question:
        'A candidate has strong theory knowledge but weak operational speed. Which final-week activity is BEST?',
      options: [
        'Timed scenario labs with postmortems to improve decision speed and accuracy',
        'Re-read static documentation without executing tasks',
        'Skip practical exercises to avoid mistakes',
        'Focus only on memorizing glossary terms',
      ],
      correctAnswers: [0],
      explanation:
        'Timed scenario practice best simulates exam pressure and operational decision-making.',
    },
    {
      id: 'soa-monitoring-m15-011',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'governance', 'operations', 'difficulty-hard'],
      question:
        'Which operating model most closely aligns with the course objective of meeting compliance and governance requirements at scale?',
      options: [
        'Policy-driven controls with automated detection and remediation feedback loops',
        'Manual approvals for every change with no telemetry',
        'One-time hardening followed by no ongoing checks',
        'Decentralized ad-hoc standards per team',
      ],
      correctAnswers: [0],
      explanation:
        'Scalable governance depends on continuous controls, observability, and corrective automation.',
    },
    {
      id: 'soa-monitoring-m15-012',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'course-summary', 'exam-strategy', 'difficulty-hard'],
      question:
        'What is the BEST indicator that a learner is exam-ready according to the overall course outcomes?',
      options: [
        'They can repeatedly solve end-to-end ops scenarios with secure, cost-aware, and resilient decisions',
        'They can list all AWS service names from memory',
        'They can recite definitions without applying them',
        'They can complete only single-service tutorials',
      ],
      correctAnswers: [0],
      explanation:
        'SOA-C03 readiness is demonstrated by applied operational judgment across domains.',
    },
    {
      id: 'soa-monitoring-m15-013',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'cross-domain', 'incident-response', 'difficulty-hard'],
      question:
        'A production alarm indicates API latency, 5XX errors, and a sudden cost spike. What is the BEST first action?',
      options: [
        'Correlate metrics, logs, and recent deployments to isolate the shared failure domain before scaling changes',
        'Scale every Auto Scaling group to maximum immediately',
        'Disable all alarms to reduce alert noise during triage',
        'Open a support case before collecting any workload evidence',
      ],
      correctAnswers: [0],
      explanation:
        'Initial correlation across telemetry and change context prevents expensive overcorrection and shortens time to root cause.',
    },
    {
      id: 'soa-monitoring-m15-014',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'security', 'automation', 'difficulty-hard'],
      question:
        'GuardDuty reports suspicious API behavior from one instance profile. Which response is MOST appropriate first?',
      options: [
        'Isolate the affected workload path and restrict credentials while preserving forensic telemetry',
        'Delete all IAM roles in the account to block all risk',
        'Disable GuardDuty findings for that detector',
        'Rotate DNS records to another Region without investigation',
      ],
      correctAnswers: [0],
      explanation:
        'Containment with scoped credential and network controls is preferred before broad destructive actions.',
    },
    {
      id: 'soa-monitoring-m15-015',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'cost-control', 'governance', 'difficulty-hard'],
      question:
        'A team repeatedly exceeds budget due to ad-hoc environment growth. What is the BEST long-term control pattern?',
      options: [
        'Combine budget alerts, tagging enforcement, and automated lifecycle cleanup for nonproduction resources',
        'Rely on monthly emails and manual reminders only',
        'Disable developer account access during business hours',
        'Reduce CloudWatch retention to cut monitoring costs',
      ],
      correctAnswers: [0],
      explanation:
        'Sustained control needs policy guardrails plus automated remediation, not manual reminders alone.',
    },
    {
      id: 'soa-monitoring-m15-016',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'ha-dr', 'tradeoffs', 'difficulty-hard'],
      question:
        'Leadership demands lower RTO, but budget constraints are strict. Which approach is MOST appropriate first?',
      options: [
        'Map workloads by criticality and apply tiered DR patterns instead of one expensive pattern for all systems',
        'Deploy active-active multi-Region for every workload immediately',
        'Remove backups to fund failover infrastructure',
        'Delay all DR planning until the next fiscal year',
      ],
      correctAnswers: [0],
      explanation:
        'Tiered DR by business criticality balances resilience objectives with cost constraints.',
    },
    {
      id: 'soa-monitoring-m15-017',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'change-management', 'ops', 'difficulty-hard'],
      question:
        'A change caused intermittent failures in one AZ after a maintenance window. What is the BEST immediate next step?',
      options: [
        'Stop further rollout, compare pre/post health signals, and execute a scoped rollback path',
        'Continue rollout to all AZs to keep environments consistent',
        'Delete affected alarms so incidents do not escalate',
        'Rebuild the VPC before confirming cause',
      ],
      correctAnswers: [0],
      explanation:
        'Containing blast radius and validating rollback conditions is the safest first response to post-change instability.',
    },
    {
      id: 'soa-monitoring-m15-018',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'observability', 'diagnostics', 'difficulty-hard'],
      question:
        'Metrics show saturation, but logs show no app errors. Which follow-up is MOST appropriate?',
      options: [
        'Expand observability by correlating infrastructure metrics, load-balancer metrics, and trace-level latency data',
        'Assume metrics are wrong and ignore them',
        'Permanently increase instance size without further analysis',
        'Delete low-traffic endpoints to reduce noise',
      ],
      correctAnswers: [0],
      explanation:
        'Cross-layer observability is required when app logs alone do not explain user-facing degradation.',
    },
    {
      id: 'soa-monitoring-m15-019',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'multi-account', 'operations-model', 'difficulty-hard'],
      question:
        'A central operations team struggles to monitor ten AWS accounts consistently. What is the BEST first architecture move?',
      options: [
        'Establish centralized cross-account observability and standard alarm/reporting baselines',
        'Keep separate dashboards and alert rules in each account indefinitely',
        'Disable account-level alarms and review only weekly summaries',
        'Migrate all accounts into one large VPC',
      ],
      correctAnswers: [0],
      explanation:
        'Shared observability baselines reduce detection gaps and inconsistent incident handling across accounts.',
    },
    {
      id: 'soa-monitoring-m15-020',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'event-driven', 'remediation', 'difficulty-hard'],
      question:
        'Automation triggers too often and causes unnecessary remediation actions. What is the BEST first correction?',
      options: [
        'Refine event/alert conditions and add guard conditions before invoking remediation targets',
        'Disable all automation permanently',
        'Increase every threshold by 10x',
        'Move all logs to archive tiers to reduce events',
      ],
      correctAnswers: [0],
      explanation:
        'Precision in trigger criteria and guardrails reduces false automation without losing valid response coverage.',
    },
    {
      id: 'soa-monitoring-m15-021',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'security-audit', 'forensics', 'difficulty-hard'],
      question:
        'An audit requests proof of who changed production access policies last week. What is the MOST appropriate evidence path?',
      options: [
        'Use CloudTrail event history with principal, API action, and timestamp context for policy-change events',
        'Use billing reports to infer who changed IAM policies',
        'Use VPC Flow Logs as primary identity evidence',
        'Use Route 53 query logs to identify IAM administrators',
      ],
      correctAnswers: [0],
      explanation:
        'CloudTrail provides authoritative identity and API action records for control-plane changes.',
    },
    {
      id: 'soa-monitoring-m15-022',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'backup-recovery', 'readiness', 'difficulty-hard'],
      question:
        'Backups exist, but recovery objectives are routinely missed in drills. What is the BEST improvement?',
      options: [
        'Add scheduled restore validation drills and measure against explicit RTO/RPO targets',
        'Increase backup frequency without testing restores',
        'Retain fewer snapshots to speed up audits',
        'Move all backups to one Region only',
      ],
      correctAnswers: [0],
      explanation:
        'Recovery confidence comes from tested restores against objective targets, not backup existence alone.',
    },
    {
      id: 'soa-monitoring-m15-023',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'performance', 'cost', 'difficulty-hard'],
      question:
        'A team wants to cut cost by downsizing instances, but SLOs are strict. What is the BEST rollout strategy?',
      options: [
        'Use phased right-sizing with canary validation and rollback criteria tied to SLO telemetry',
        'Downsize all production instances in one maintenance window',
        'Freeze monitoring to avoid false alarms during downsizing',
        'Disable auto scaling so baseline is easier to compare',
      ],
      correctAnswers: [0],
      explanation:
        'Phased optimization with explicit guardrails balances cost reduction and reliability risk.',
    },
    {
      id: 'soa-monitoring-m15-024',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'governance', 'policy-enforcement', 'difficulty-hard'],
      question:
        'Teams keep deploying noncompliant resources despite policy guidance. Which response is MOST effective?',
      options: [
        'Implement preventive controls and automated compliance remediation, backed by exception workflows',
        'Send more reminder emails and keep controls manual',
        'Turn off compliance checks to reduce ticket volume',
        'Allow each team to define independent standards',
      ],
      correctAnswers: [0],
      explanation:
        'Enforceable controls plus automated correction are more effective than advisory-only governance.',
    },
    {
      id: 'soa-monitoring-m15-025',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'network-resilience', 'troubleshooting', 'difficulty-hard'],
      question:
        'Intermittent connectivity affects only one subnet path. What is the BEST first technical check set?',
      options: [
        'Validate route tables, security controls, and flow-log evidence for the affected path',
        'Rotate all KMS keys used by the application',
        'Delete all target groups and recreate load balancers',
        'Archive old snapshots to reduce storage footprint',
      ],
      correctAnswers: [0],
      explanation:
        'Path-specific network incidents should start with routing/security-path validation and flow evidence.',
    },
    {
      id: 'soa-monitoring-m15-026',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'operational-excellence', 'runbooks', 'difficulty-hard'],
      question:
        'Runbook quality varies by team and causes inconsistent incident outcomes. Which action is MOST appropriate first?',
      options: [
        'Standardize runbook templates with decision checkpoints, telemetry references, and escalation criteria',
        'Allow each responder to improvise for speed',
        'Shorten runbooks to one page by removing diagnostics',
        'Replace runbooks with weekly knowledge-sharing sessions',
      ],
      correctAnswers: [0],
      explanation:
        'Consistent runbook structure improves response reliability and onboarding across teams.',
    },
    {
      id: 'soa-monitoring-m15-027',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'capacity-planning', 'forecasting', 'difficulty-hard'],
      question:
        'Capacity incidents occur monthly at predictable peaks. What is the BEST preventive strategy?',
      options: [
        'Use forecast-informed scaling and scheduled controls validated with post-peak reviews',
        'Rely only on manual midnight scaling changes',
        'Ignore forecast data and wait for alarm-driven outages',
        'Disable peak-hour alarms to reduce responder fatigue',
      ],
      correctAnswers: [0],
      explanation:
        'Predictable demand should be managed with planned scaling and continuous validation loops.',
    },
    {
      id: 'soa-monitoring-m15-028',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'security-ops', 'least-privilege', 'difficulty-hard'],
      question:
        'Privileged access keeps expanding over time through temporary exceptions. What is the MOST appropriate control?',
      options: [
        'Implement periodic least-privilege review with automated detection of overbroad permissions',
        'Grant full admin to avoid break-glass delays',
        'Remove all role assumption and use long-term user keys',
        'Disable audit logs to reduce operational overhead',
      ],
      correctAnswers: [0],
      explanation:
        'Privilege drift is best managed by recurring review and automated over-permission detection.',
    },
    {
      id: 'soa-monitoring-m15-029',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'cost-anomaly', 'response', 'difficulty-hard'],
      question:
        'Cost anomaly alerts are frequent, but many are low-value and noisy. What is the BEST refinement approach?',
      options: [
        'Tune anomaly monitors and thresholds by account/service context, then route alerts by severity',
        'Disable anomaly detection and rely on invoices',
        'Escalate every anomaly to executive incident channels',
        'Convert all workloads to one pricing model immediately',
      ],
      correctAnswers: [0],
      explanation:
        'Context-aware monitor tuning preserves useful detection while reducing alert fatigue.',
    },
    {
      id: 'soa-monitoring-m15-030',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'service-health', 'incident-triage', 'difficulty-hard'],
      question:
        'An outage may be caused either by application regression or AWS service disruption. What is the BEST triage sequence?',
      options: [
        'Check service/resource health context alongside workload telemetry before choosing rollback or escalation',
        'Rollback immediately without checking provider health context',
        'Assume provider fault and pause all remediation',
        'Wait for customer tickets before triage',
      ],
      correctAnswers: [0],
      explanation:
        'Parallel provider/workload context reduces misclassification and speeds correct response paths.',
    },
    {
      id: 'soa-monitoring-m15-031',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'exam-readiness', 'decision-quality', 'difficulty-hard'],
      question:
        'Which practice most improves “best-next-action” judgment for SOA-C03 style questions?',
      options: [
        'After each scenario, justify why each distractor is wrong under the stated constraints',
        'Memorize only correct options without reviewing distractors',
        'Skip tradeoff analysis and focus on service definitions',
        'Avoid timed practice to reduce stress',
      ],
      correctAnswers: [0],
      explanation:
        'Exam performance improves when you can eliminate plausible distractors using scenario constraints.',
    },
    {
      id: 'soa-monitoring-m15-032',
      domain: 'monitoring-remediation',
      task: '1.6',
      tags: ['soa-c03', 'module-15', 'capstone', 'operations', 'difficulty-hard'],
      question:
        'A final capstone scenario spans deployment, security, reliability, and cost goals with conflicting constraints. What is the BEST operating principle?',
      options: [
        'Prioritize actions that satisfy explicit business constraints while minimizing risk and operational overhead',
        'Always choose the most complex architecture available',
        'Optimize one domain completely and ignore the others',
        'Delay decisions until all constraints disappear',
      ],
      correctAnswers: [0],
      explanation:
        'SOA-C03 scenarios reward balanced operational decisions under real constraints, not single-domain optimization.',
    },
  ]
}

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
  const items = getMonitoringItems()
  const resources = items.map((i) => i.resource)
  const runbookPrompts = [
    (focus: string) =>
      `An operations team needs a runbook for ${focus}. Which source should they trust first when designing production procedures?`,
    (focus: string) =>
      `A team is standardizing incident response for ${focus}. Which reference should be treated as the source of truth?`,
    (focus: string) =>
      `Before publishing operational guidance for ${focus}, which source should be validated first?`,
  ]
  const incidentPrompts = [
    (focus: string) =>
      `You are troubleshooting an incident and must confirm AWS service behavior for ${focus}. Which source should break the tie between conflicting advice?`,
    (focus: string) =>
      `During an outage, teammates disagree on expected behavior for ${focus}. Which source should decide the final action?`,
    (focus: string) =>
      `An incident timeline points to uncertainty around ${focus}. Which reference is most authoritative for response decisions?`,
  ]
  const prepPrompts = [
    (focus: string) =>
      `For SOA-C03 prep, what is the best first step before doing hands-on labs for ${focus}?`,
    (focus: string) =>
      `When studying ${focus}, what should come first to avoid learning outdated patterns?`,
    (focus: string) =>
      `You are planning a study sprint on ${focus}. Which starting point provides the strongest baseline?`,
  ]
  const explanationLines = [
    (resource: string, url: string) =>
      `Use first-party AWS guidance for operational accuracy and up-to-date behavior. Primary source: ${resource} (${url}).`,
    (_resource: string, url: string) =>
      `Official AWS documentation is the most reliable tie-breaker during real-world operations. Start here: ${url}.`,
    (_resource: string, url: string) =>
      `For exam prep and production runbooks, prefer canonical docs before third-party summaries. Reference: ${url}.`,
  ]

  for (const [index, item] of items.entries()) {
    const variation = index % 3
    const distractors = [
      resources[(index + 1) % resources.length],
      resources[(index + 2) % resources.length],
      resources[(index + 3) % resources.length],
    ]
    cards.push({
      id: `soa-monitoring-${String(n).padStart(3, '0')}`,
      domain: 'monitoring-remediation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-drill'],
      question: runbookPrompts[variation](item.focus),
      options: [
        item.resource,
        distractors[0],
        distractors[1],
        distractors[2],
      ],
      correctAnswers: [0],
      explanation: explanationLines[variation](item.resource, item.url),
    })
    n++

    cards.push({
      id: `soa-monitoring-${String(n).padStart(3, '0')}`,
      domain: 'monitoring-remediation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-authority'],
      question: incidentPrompts[variation](item.focus),
      options: [
        distractors[0],
        item.resource,
        distractors[1],
        distractors[2],
      ],
      correctAnswers: [1],
      explanation: explanationLines[(variation + 1) % 3](item.resource, item.url),
    })
    n++

    cards.push({
      id: `soa-monitoring-${String(n).padStart(3, '0')}`,
      domain: 'monitoring-remediation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-priority'],
      question: prepPrompts[variation](item.focus),
      options: [
        distractors[0],
        distractors[1],
        item.resource,
        distractors[2],
      ],
      correctAnswers: [2],
      explanation: explanationLines[(variation + 2) % 3](item.resource, item.url),
    })
    n++
  }

  return cards
}
