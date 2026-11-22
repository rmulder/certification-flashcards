import type { Card } from '../../../core/types'

export const reliabilityContinuityCards: Card[] = [
  {
    id: 'soa-reliability-001',
    domain: 'reliability-continuity',
    task: '2.1',
    tags: ['backup', 'dr', 'business-continuity'],
    question: 'A team needs centralized backup governance across AWS workloads. Which service guidance should they use first?',
    options: ['AWS Backup Developer Guide', 'AWS Panorama docs', 'AWS Glue docs only', 'AWS SNS mobile push docs'],
    correctAnswers: [0],
    explanation:
      'AWS Backup appears frequently in continuity scenarios: https://docs.aws.amazon.com/aws-backup/',
  },
  {
    id: 'soa-reliability-002',
    domain: 'reliability-continuity',
    task: '2.1',
    tags: ['ebs', 'snapshots', 'restore'],
    question: 'An operations runbook needs EC2 volume snapshot and restore procedures. Which documentation should be prioritized?',
    options: [
      'Amazon EBS snapshots and AMI lifecycle docs',
      'Amazon Lex V2 docs',
      'AWS Wavelength docs',
      'AWS Transfer Family docs only',
    ],
    correctAnswers: [0],
    explanation:
      'Study EBS snapshots and AMI patterns in EC2 docs: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html',
  },
  {
    id: 'soa-reliability-003',
    domain: 'reliability-continuity',
    task: '2.2',
    tags: ['rds', 'multi-az', 'read-replicas'],
    question: 'A database team must choose between high availability and read-scaling patterns in RDS. Which reference is MOST appropriate?',
    options: [
      'Amazon RDS User Guide',
      'AWS Budgets User Guide',
      'Amazon Kendra docs',
      'AWS SimSpace Weaver docs',
    ],
    correctAnswers: [0],
    explanation:
      'RDS HA and DR patterns are core SOA-C03 topics: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/',
  },
  {
    id: 'soa-reliability-004',
    domain: 'reliability-continuity',
    task: '2.2',
    tags: ['route53', 'health-checks', 'failover'],
    question: 'A workload requires DNS-based failover with health checks across endpoints. Which AWS reference should guide implementation?',
    options: ['Amazon Route 53 Developer Guide', 'AWS Artifact portal', 'AWS IQ docs', 'AWS Device Farm docs only'],
    correctAnswers: [0],
    explanation:
      'Route 53 routing and failover strategies are tested in operations contexts: https://docs.aws.amazon.com/route53/',
  },
  {
    id: 'soa-reliability-005',
    domain: 'reliability-continuity',
    task: '2.3',
    tags: ['autoscaling', 'ec2', 'availability'],
    question: 'An app must stay available during demand shifts using lifecycle hooks and health-based scaling. Which docs are MOST relevant?',
    options: [
      'Amazon EC2 Auto Scaling User Guide',
      'Amazon Forecast docs',
      'AWS Proton docs',
      'Amazon Macie docs only',
    ],
    correctAnswers: [0],
    explanation:
      'Auto Scaling mechanics are essential for reliability operations: https://docs.aws.amazon.com/autoscaling/ec2/userguide/',
  },
  {
    id: 'soa-reliability-006',
    domain: 'reliability-continuity',
    task: '2.3',
    tags: ['elastic-load-balancing', 'alb', 'nlb'],
    question: 'A team is designing resilient traffic distribution with target health checks. Which service guidance is MOST appropriate?',
    options: [
      'Elastic Load Balancing documentation',
      'AWS Ground Station docs',
      'AWS Wickr docs',
      'AWS CodeArtifact docs only',
    ],
    correctAnswers: [0],
    explanation:
      'ALB/NLB health checks and target behavior are common exam topics: https://docs.aws.amazon.com/elasticloadbalancing/',
  },
  {
    id: 'soa-reliability-007',
    domain: 'reliability-continuity',
    task: '2.4',
    tags: ['s3', 'versioning', 'replication'],
    question: 'A data platform needs durable object protection with versioning, lifecycle, and replication controls. Which docs should anchor the design?',
    options: ['Amazon S3 User Guide', 'AWS App Mesh docs', 'Amazon WorkDocs docs', 'AWS Snowcone docs only'],
    correctAnswers: [0],
    explanation:
      'Master S3 resilience controls from official S3 docs: https://docs.aws.amazon.com/AmazonS3/latest/userguide/',
  },
  {
    id: 'soa-reliability-008',
    domain: 'reliability-continuity',
    task: '2.4',
    tags: ['efs', 'fsx', 'storage-resilience'],
    question: 'A mixed Linux/Windows fleet needs highly available shared file storage. Which documentation set is MOST relevant?',
    options: [
      'Amazon EFS and Amazon FSx documentation',
      'Amazon Braket docs',
      'AWS IoT TwinMaker docs',
      'AWS DataZone docs only',
    ],
    correctAnswers: [0],
    explanation:
      'Study both EFS and FSx behaviors for operations scenarios: https://docs.aws.amazon.com/efs/ and https://docs.aws.amazon.com/fsx/',
  },
  {
    id: 'soa-reliability-009',
    domain: 'reliability-continuity',
    task: '2.5',
    tags: ['dr-strategy', 'whitepaper', 'rto-rpo'],
    question: 'Leadership asks for disaster recovery strategy options mapped to RTO and RPO targets. Which AWS resource should be used first?',
    options: [
      'Disaster Recovery of Workloads on AWS whitepaper',
      'Only service release changelogs',
      'Only billing invoices',
      'Only cloud provider comparison blogs',
    ],
    correctAnswers: [0],
    explanation:
      'Use AWS DR guidance for pilot light, warm standby, and multi-site patterns: https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html',
  },
  {
    id: 'soa-reliability-010',
    domain: 'reliability-continuity',
    task: '2.5',
    tags: ['resilience-hub', 'workload-assessment', 'drills'],
    question: 'A team wants continuous resilience scoring and improvement recommendations for workloads. Which service should they use?',
    options: [
      'AWS Resilience Hub documentation',
      'AWS Payment Cryptography docs',
      'Amazon CodeWhisperer docs only',
      'Amazon Chime SDK docs only',
    ],
    correctAnswers: [0],
    explanation:
      'Resilience Hub supports resilience assessments and recommendations: https://docs.aws.amazon.com/resilience-hub/',
  },
  {
    id: 'soa-reliability-011',
    domain: 'reliability-continuity',
    task: '2.6',
    tags: ['fault-injection', 'chaos-engineering', 'testing'],
    question: 'An SRE team wants to validate failure assumptions with controlled disruption experiments. Which AWS service is MOST appropriate?',
    options: [
      'AWS Fault Injection Service (FIS) docs',
      'AWS Resource Explorer docs',
      'Amazon Rekognition docs',
      'Amazon Monitron docs',
    ],
    correctAnswers: [0],
    explanation:
      'FIS helps validate resiliency assumptions with experiments: https://docs.aws.amazon.com/fis/',
  },
  {
    id: 'soa-reliability-012',
    domain: 'reliability-continuity',
    task: '2.6',
    tags: ['well-architected-labs', 'hands-on', 'reliability-pillar'],
    question: 'A candidate wants guided practical exercises focused on reliability best practices. Which resource is BEST?',
    options: [
      'AWS Well-Architected Labs',
      'Only product launch livestreams',
      'Only marketing keynote recaps',
      'Only pricing pages',
    ],
    correctAnswers: [0],
    explanation:
      'Well-Architected Labs provide practical reliability exercises: https://wellarchitectedlabs.com/',
  },
  ...buildModule7HighAvailabilityCards(),
  ...buildModule8AutomateScalingCards(),
  ...buildModule12MountableStorageCards(),
  ...buildModule13ObjectStorageCards(),
  ...buildReliabilityContinuityExtras(),
]

type ReliabilityItem = {
  slug: string
  task: string
  tags: string[]
  resource: string
  focus: string
  url: string
}

function getReliabilityItems(): ReliabilityItem[] {
  return [
  { slug: 'backup', task: '2.1', tags: ['backup', 'vaults'], resource: 'AWS Backup Developer Guide', focus: 'backup plans, vaults, and restore workflows', url: 'https://docs.aws.amazon.com/aws-backup/' },
  { slug: 'ebs', task: '2.1', tags: ['ebs', 'snapshots'], resource: 'Amazon EBS snapshots documentation', focus: 'snapshot strategy and restore mechanics', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html' },
  { slug: 'ami', task: '2.1', tags: ['ami', 'ec2'], resource: 'Amazon EC2 AMI lifecycle documentation', focus: 'golden AMI operations and patch-ready image governance', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html' },
  { slug: 'asg', task: '2.3', tags: ['autoscaling', 'ec2'], resource: 'Amazon EC2 Auto Scaling User Guide', focus: 'health checks, lifecycle hooks, and scaling policies', url: 'https://docs.aws.amazon.com/autoscaling/ec2/userguide/' },
  { slug: 'elb', task: '2.3', tags: ['elb', 'alb', 'nlb'], resource: 'Elastic Load Balancing documentation', focus: 'target health and resilient traffic distribution', url: 'https://docs.aws.amazon.com/elasticloadbalancing/' },
  { slug: 'route53', task: '2.2', tags: ['route53', 'dns-failover'], resource: 'Amazon Route 53 Developer Guide', focus: 'DNS failover and health-check routing policies', url: 'https://docs.aws.amazon.com/route53/' },
  { slug: 'rds', task: '2.2', tags: ['rds', 'multi-az'], resource: 'Amazon RDS User Guide', focus: 'Multi-AZ and read replica operations', url: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/' },
  { slug: 'aurora-global', task: '2.2', tags: ['aurora', 'global-database'], resource: 'Amazon Aurora Global Database documentation', focus: 'cross-Region failover and low-RPO database continuity', url: 'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html' },
  { slug: 's3-replication', task: '2.4', tags: ['s3', 'replication'], resource: 'Amazon S3 Replication documentation', focus: 'cross-Region replication and data durability operations', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html' },
  { slug: 'efs', task: '2.4', tags: ['efs', 'storage'], resource: 'Amazon EFS User Guide', focus: 'durable shared storage and backup integrations', url: 'https://docs.aws.amazon.com/efs/' },
  { slug: 'fsx', task: '2.4', tags: ['fsx', 'storage'], resource: 'Amazon FSx documentation', focus: 'managed file-system reliability trade-offs', url: 'https://docs.aws.amazon.com/fsx/' },
  { slug: 'dr-whitepaper', task: '2.5', tags: ['dr', 'rto-rpo'], resource: 'Disaster Recovery of Workloads on AWS whitepaper', focus: 'RTO/RPO-based disaster recovery strategies', url: 'https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html' },
  { slug: 'resilience-hub', task: '2.5', tags: ['resilience-hub', 'assessments'], resource: 'AWS Resilience Hub documentation', focus: 'workload resilience scoring and recommendations', url: 'https://docs.aws.amazon.com/resilience-hub/' },
  { slug: 'fis', task: '2.6', tags: ['fis', 'chaos-engineering'], resource: 'AWS Fault Injection Service documentation', focus: 'controlled resilience experiments and game-day validation', url: 'https://docs.aws.amazon.com/fis/' },
  ]
}

function buildReliabilityContinuityExtras(): Card[] {
  const cards: Card[] = []
  let n = 13
  const runbookPrompts = [
    (focus: string) =>
      `A workload owner is defining runbooks for ${focus}. Which source should anchor those procedures first?`,
    (focus: string) =>
      `Your team is documenting recovery workflows for ${focus}. Which reference should be treated as the baseline?`,
    (focus: string) =>
      `Before finalizing continuity playbooks for ${focus}, which source should be validated first?`,
  ]
  const gameDayPrompts = [
    (focus: string) =>
      `During a game-day review for ${focus}, teams disagree on expected behavior. Which source should resolve the disagreement?`,
    (focus: string) =>
      `A DR drill exposes conflicting assumptions about ${focus}. Which source should decide the correct path forward?`,
    (focus: string) =>
      `During post-incident analysis of ${focus}, which source is most authoritative for corrective actions?`,
  ]
  const planningPrompts = [
    (focus: string) =>
      `For continuity planning around ${focus}, what first step best improves exam and real-world readiness?`,
    (focus: string) =>
      `When preparing to practice ${focus}, what should come first to reduce design errors?`,
    (focus: string) =>
      `You are starting a resilience study sprint on ${focus}. Which starting point provides the strongest foundation?`,
  ]
  const explanationLines = [
    (url: string) =>
      `Runbooks should reference canonical service behavior from AWS documentation: ${url}.`,
    (url: string) =>
      `For resilience decisions, prioritize AWS first-party docs/whitepapers over anecdotal guidance: ${url}.`,
    (url: string) =>
      `Begin with official guidance, then validate with labs and recovery drills: ${url}.`,
  ]

  for (const [index, item] of getReliabilityItems().entries()) {
    const variation = index % 3
    cards.push({
      id: `soa-reliability-${String(n).padStart(3, '0')}`,
      domain: 'reliability-continuity',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-drill'],
      question: runbookPrompts[variation](item.focus),
      options: [
        item.resource,
        'A third-party summary that omits AWS limits',
        'An old slide deck from a prior project',
        'A social post with no references',
      ],
      correctAnswers: [0],
      explanation: explanationLines[variation](item.url),
    })
    n++

    cards.push({
      id: `soa-reliability-${String(n).padStart(3, '0')}`,
      domain: 'reliability-continuity',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-authority'],
      question: gameDayPrompts[variation](item.focus),
      options: [
        'Only forum answers',
        item.resource,
        'A short training clip with no citations',
        'Internal tribal knowledge only',
      ],
      correctAnswers: [1],
      explanation: explanationLines[(variation + 1) % 3](item.url),
    })
    n++

    cards.push({
      id: `soa-reliability-${String(n).padStart(3, '0')}`,
      domain: 'reliability-continuity',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-priority'],
      question: planningPrompts[variation](item.focus),
      options: [
        'Tune cost first, then consider recovery later',
        'Jump directly to production changes without docs',
        item.resource,
        'Rely only on unsourced flashcards',
      ],
      correctAnswers: [2],
      explanation: explanationLines[(variation + 2) % 3](item.url),
    })
    n++
  }

  return cards
}

function buildModule7HighAvailabilityCards(): Card[] {
  return [
    {
      id: 'soa-reliability-m7-001',
      domain: 'reliability-continuity',
      task: '2.2',
      tags: ['route53', 'elb', 'multi-region', 'module-7', 'difficulty-easy'],
      question: 'In a multi-Region high-availability design, what is Route 53 primarily responsible for?',
      options: [
        'Routing DNS queries to healthy regional endpoints using routing policies and health checks',
        'Terminating TLS on every EC2 instance',
        'Replacing target-group health checks',
        'Automatically patching backend servers',
      ],
      correctAnswers: [0],
      explanation:
        'Route 53 acts as the global DNS layer that routes traffic to healthy regional ELB endpoints.',
    },
    {
      id: 'soa-reliability-m7-002',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['elb', 'alb', 'nlb', 'glb', 'clb', 'module-7', 'difficulty-easy'],
      question: 'Which load balancer type is best for advanced HTTP/HTTPS features such as redirects and fixed responses?',
      options: ['Application Load Balancer (ALB)', 'Network Load Balancer (NLB)', 'Gateway Load Balancer (GWLB)', 'Classic Load Balancer (CLB)'],
      correctAnswers: [0],
      explanation:
        'L7 HTTP features such as redirects and fixed responses are handled by ALB.',
    },
    {
      id: 'soa-reliability-m7-003',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['nlb', 'static-ip', 'tcp', 'module-7', 'difficulty-easy'],
      question: 'Which load balancer is preferred when you need very high performance, low latency, and static IP support?',
      options: ['Network Load Balancer (NLB)', 'Application Load Balancer (ALB)', 'Gateway Load Balancer (GWLB)', 'Classic Load Balancer (CLB)'],
      correctAnswers: [0],
      explanation:
        'NLB is designed for ultra-low latency, high throughput, and static IP support per Availability Zone.',
    },
    {
      id: 'soa-reliability-m7-004',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['gwlb', 'appliances', 'layer-3', 'module-7', 'difficulty-easy'],
      question: 'When integrating third-party virtual network appliances, which ELB type is purpose-built?',
      options: ['Gateway Load Balancer (GWLB)', 'Application Load Balancer (ALB)', 'Network Load Balancer (NLB)', 'Classic Load Balancer (CLB)'],
      correctAnswers: [0],
      explanation:
        'GWLB is designed to scale and manage traffic through third-party virtual appliances.',
    },
    {
      id: 'soa-reliability-m7-005',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['elb', 'target-groups', 'listeners', 'rules', 'module-7', 'difficulty-medium'],
      question: 'In ELB architecture, what determines which target group receives a request?',
      options: [
        'Listener rules (conditions and priority), with a default rule fallback',
        'The EC2 AMI ID of each target',
        'CloudTrail event history',
        'The Route 53 hosted zone name only',
      ],
      correctAnswers: [0],
      explanation:
        'In ELB, listeners evaluate rule conditions and route traffic to target groups.',
    },
    {
      id: 'soa-reliability-m7-006',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['elb', 'health-checks', 'active-passive', 'module-7', 'difficulty-medium'],
      question: 'Which statement about ELB health checks is accurate?',
      options: [
        'Active checks send periodic probes; passive checks observe connection behavior and are not supported for UDP traffic',
        'Passive checks replace active checks in ALB',
        'ELB health checks require Route 53 alias records',
        'Health checks can only run once per hour',
      ],
      correctAnswers: [0],
      explanation:
        'ELB uses both active and passive checks, and passive checks are not supported for UDP traffic.',
    },
    {
      id: 'soa-reliability-m7-007',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['elb', 'access-logs', 's3', 'module-7', 'difficulty-medium'],
      question: 'Where are ELB access logs stored when enabled?',
      options: ['Amazon S3 buckets (compressed files)', 'AWS Systems Manager Parameter Store', 'Amazon DynamoDB tables', 'CloudWatch Logs only'],
      correctAnswers: [0],
      explanation:
        'ELB access logs are delivered to S3 for retention and analysis.',
    },
    {
      id: 'soa-reliability-m7-008',
      domain: 'reliability-continuity',
      task: '2.2',
      tags: ['route53', 'alias', 'cname', 'module-7', 'difficulty-medium'],
      question: 'For routing a root domain (zone apex) to an ELB, which DNS record is preferred in Route 53?',
      options: ['Alias A/AAAA record to the ELB DNS name', 'CNAME at the zone apex', 'SRV record', 'TXT record'],
      correctAnswers: [0],
      explanation:
        'For ELB integration, alias records are preferred and support apex-domain routing use cases.',
    },
    {
      id: 'soa-reliability-m7-009',
      domain: 'reliability-continuity',
      task: '2.2',
      tags: ['route53', 'health-checks', 'module-7', 'difficulty-hard'],
      question:
        'A team wants Route 53 failover decisions to follow a CloudWatch alarm state. Which health-check mode should they use?',
      options: ['CloudWatch alarm', 'Calculated health check', 'Multivalue answer policy', 'Private hosted zone association'],
      correctAnswers: [0],
      explanation:
        'Route 53 health checks can evaluate endpoint status directly or use CloudWatch alarm state.',
    },
    {
      id: 'soa-reliability-m7-010',
      domain: 'reliability-continuity',
      task: '2.2',
      tags: ['route53', 'routing-policy', 'module-7', 'difficulty-hard'],
      question:
        'A workload uses active-passive disaster recovery between Regions. Which Route 53 routing policy is MOST appropriate?',
      options: ['Failover routing policy', 'Weighted routing policy', 'Latency routing policy', 'Multivalue answer routing policy'],
      correctAnswers: [0],
      explanation:
        'Active-passive DR traffic control maps to Route 53 failover routing.',
    },
    {
      id: 'soa-reliability-m7-011',
      domain: 'reliability-continuity',
      task: '2.2',
      tags: ['route53', 'multivalue', 'module-7', 'difficulty-hard'],
      question:
        'A SysOps administrator enables multivalue answer routing for a record set. What behavior should they expect?',
      options: [
        'Up to eight healthy records selected at random',
        'The lowest-latency healthy record in each Region',
        'All records regardless of health-check status',
        'Exactly one weighted record based on explicit weight values',
      ],
      correctAnswers: [0],
      explanation:
        'Multivalue answer routing returns multiple healthy records, up to eight.',
    },
    {
      id: 'soa-reliability-m7-012',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['elb', 'troubleshooting', 'http-4xx', 'module-7', 'difficulty-hard'],
      question:
        'An Application Load Balancer shows elevated HTTP 4XX responses. Which interpretation is MOST accurate?',
      options: [
        'Most 4XX responses indicate client-side request/authentication/time-out issues',
        '4XX primarily indicates ELB node failure in one Availability Zone',
        '4XX confirms target health checks are failing at the application port',
        '4XX means ELB access logs are delayed and cannot be trusted yet',
      ],
      correctAnswers: [0],
      explanation:
        'HTTP 400/401/408 patterns typically indicate client-side issues to investigate first.',
    },
  ]
}

function buildModule8AutomateScalingCards(): Card[] {
  return [
    {
      id: 'soa-reliability-m8-001',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['ec2-auto-scaling', 'module-8', 'launch-templates', 'difficulty-easy'],
      question: 'What is the core role of an EC2 Auto Scaling launch template?',
      options: [
        'It defines how new instances should be launched in the Auto Scaling group',
        'It stores CloudWatch metrics history',
        'It replaces Route 53 health checks',
        'It sets IAM account password policy',
      ],
      correctAnswers: [0],
      explanation:
        'Launch templates define EC2 instance settings before scaling behavior is attached.',
    },
    {
      id: 'soa-reliability-m8-002',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['auto-scaling-group', 'health-checks', 'module-8', 'difficulty-easy'],
      question: 'In an Auto Scaling group, what happens when an instance fails health checks?',
      options: [
        'It is terminated and replaced automatically',
        'It is ignored until manual intervention',
        'It is moved to Route 53 standby only',
        'It is converted to Spot capacity automatically',
      ],
      correctAnswers: [0],
      explanation:
        'ASG core behavior is automatic unhealthy instance replacement to maintain desired capacity.',
    },
    {
      id: 'soa-reliability-m8-003',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['scaling-policy', 'cloudwatch', 'sqs', 'module-8', 'difficulty-easy'],
      question: 'A queue-backed workload must scale workers when backlog grows. Which scaling trigger pattern fits Module 8 guidance?',
      options: ['CloudWatch alarms tied to scaling policies', 'S3 bucket lifecycle transitions', 'IAM Access Analyzer findings', 'Route 53 private hosted zones'],
      correctAnswers: [0],
      explanation:
        'Dynamic scaling should be tied to CloudWatch metrics and alarm states, including queue-depth demand signals.',
    },
    {
      id: 'soa-reliability-m8-004',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['scheduled-scaling', 'predictable-load', 'module-8', 'difficulty-easy'],
      question: 'When is scheduled scaling the best fit?',
      options: [
        'When load patterns are predictable by time/date',
        'When failures are random and unknown',
        'Only when using Spot Fleets',
        'Only for one-time incident remediation',
      ],
      correctAnswers: [0],
      explanation:
        'Scheduled actions are designed for known cyclical demand patterns (for example weekday peaks).',
    },
    {
      id: 'soa-reliability-m8-005',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['target-tracking', 'dynamic-scaling', 'desired-capacity', 'module-8', 'difficulty-medium'],
      question: 'Your team wants to keep average CPU near 50% without managing step thresholds manually. Which policy is best?',
      options: [
        'Target tracking policy on average CPU utilization',
        'You manually set desired capacity every minute',
        'It requires fixed instance counts only',
        'It disables scale-in behavior',
      ],
      correctAnswers: [0],
      explanation:
        'Target tracking is policy-driven: set metric + target, and the service manages scale-out/scale-in around it.',
    },
    {
      id: 'soa-reliability-m8-006',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['step-scaling', 'thresholds', 'module-8', 'difficulty-medium'],
      question: 'Traffic has multiple severity bands and each should add different capacity amounts. Which policy style fits best?',
      options: [
        'Step scaling with threshold bands and different adjustment steps',
        'Step scaling cannot use CloudWatch',
        'Step scaling works only with Spot instances',
        'Step scaling is DNS-based',
      ],
      correctAnswers: [0],
      explanation:
        'Step scaling uses threshold bands with explicit adjustment steps instead of maintaining one target metric value.',
    },
    {
      id: 'soa-reliability-m8-007',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['cooldown', 'warmup', 'thrashing', 'module-8', 'difficulty-medium'],
      question: 'Why are cooldown and instance warmup settings important in Auto Scaling?',
      options: [
        'They reduce oscillation/thrashing and prevent premature repeated scaling actions',
        'They encrypt launch template parameters',
        'They replace ELB health checks',
        'They configure S3 lifecycle policies',
      ],
      correctAnswers: [0],
      explanation:
        'Cooldown and warmup settings stabilize scaling so new capacity can influence metrics before further actions.',
    },
    {
      id: 'soa-reliability-m8-008',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['predictive-scaling', 'forecasting', 'module-8', 'difficulty-medium'],
      question: 'When is predictive scaling most appropriate?',
      options: [
        'For workloads with recurring daily/weekly demand patterns',
        'For random one-time spikes with no pattern',
        'Only for static web hosting',
        'Only for single-instance groups',
      ],
      correctAnswers: [0],
      explanation:
        'Predictive scaling forecasts repeating traffic patterns and is not ideal for completely unpredictable spikes.',
    },
    {
      id: 'soa-reliability-m8-009',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['spot-fleet', 'cost-optimization', 'module-8', 'difficulty-hard'],
      question:
        'A team plans to use Spot Fleet for cost optimization. Which behavior is an accurate characteristic of Spot Fleet?',
      options: [
        'It launches Spot (and optionally On-Demand) capacity toward a target while respecting price/capacity conditions',
        'It guarantees uninterrupted Spot capacity during rebalance recommendations',
        'It always prioritizes lowest-price pools even if capacity is unavailable',
        'It can use only one instance type and one Availability Zone per request',
      ],
      correctAnswers: [0],
      explanation:
        'Spot Fleet fulfills requests based on available capacity and Spot pricing constraints.',
    },
    {
      id: 'soa-reliability-m8-010',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['instance-maintenance-policy', 'replacement', 'module-8', 'difficulty-hard'],
      question:
        'A production Auto Scaling group needs controlled unhealthy instance replacement. What does an instance maintenance policy control?',
      options: [
        'How unhealthy instance replacement is sequenced (launch-before-terminate, terminate-and-launch, or custom)',
        'The ALB target-group deregistration delay for draining',
        'The Route 53 routing policy used for DNS failover',
        'The EC2 launch template AMI patching schedule',
      ],
      correctAnswers: [0],
      explanation:
        'Instance maintenance policies tune replacement behavior to balance availability, speed, and cost.',
    },
    {
      id: 'soa-reliability-m8-011',
      domain: 'reliability-continuity',
      task: '2.2',
      tags: ['license-manager', 'governance', 'module-8', 'difficulty-hard'],
      question:
        'In a scaled EC2 environment with commercial software, what is the primary goal of AWS License Manager?',
      options: [
        'Track and enforce software license usage rules across instances',
        'Automatically tune scaling cooldown and warmup windows',
        'Replace IAM role permissions for licensed software',
        'Control Route 53 health checks for licensed workloads',
      ],
      correctAnswers: [0],
      explanation:
        'License Manager tracks license configurations and consumption to prevent noncompliance.',
    },
    {
      id: 'soa-reliability-m8-012',
      domain: 'reliability-continuity',
      task: '2.3',
      tags: ['troubleshooting', 'ami', 'launch-template', 'module-8', 'difficulty-hard'],
      question:
        'An Auto Scaling launch fails with "AMI is pending, and cannot be run." What is the MOST appropriate next step?',
      options: [
        'Wait until the AMI is available, then create/use the launch template',
        'Mark the instance healthy manually and force attach to the target group',
        'Switch to terminate-and-launch maintenance policy and retry immediately',
        'Update scaling policy cooldown to avoid launch template validation',
      ],
      correctAnswers: [0],
      explanation:
        'Resolve this by waiting for AMI readiness before launch-template scale actions run.',
    },
  ]
}

function buildModule12MountableStorageCards(): Card[] {
  return [
    {
      id: 'soa-reliability-m12-001',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-12', 'ebs', 'volume-types', 'difficulty-easy'],
      question:
        'A team is selecting Amazon EBS storage for a transactional workload with frequent random reads/writes. Which class is MOST appropriate?',
      options: ['SSD-backed EBS volumes', 'HDD-backed EBS volumes', 'S3 Glacier', 'Instance store only'],
      correctAnswers: [0],
      explanation:
        'Module 12 emphasizes SSD-backed EBS for transactional I/O patterns where IOPS performance matters.',
    },
    {
      id: 'soa-reliability-m12-002',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-12', 'ebs-hdd', 'throughput', 'difficulty-easy'],
      question:
        'A workload streams large sequential datasets and prioritizes throughput over IOPS. Which EBS volume family is usually the better fit?',
      options: ['HDD-backed EBS volumes', 'Provisioned IOPS SSD only', 'EFS One Zone', 'AWS Backup vaults'],
      correctAnswers: [0],
      explanation:
        'For large streaming workloads, HDD-backed volumes are optimized around throughput (MiB/s) characteristics.',
    },
    {
      id: 'soa-reliability-m12-003',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-12', 'ebs-snapshot', 'dr', 'difficulty-easy'],
      question:
        'A SysOps engineer needs to preserve and later restore block storage state for recovery. Which EBS feature should they use?',
      options: ['EBS snapshots', 'CloudTrail trails', 'Route 53 health checks', 'IAM Access Analyzer findings'],
      correctAnswers: [0],
      explanation:
        'EBS snapshots are the core mechanism for point-in-time volume backup and recovery workflows.',
    },
    {
      id: 'soa-reliability-m12-004',
      domain: 'reliability-continuity',
      task: '2.5',
      tags: ['soa-c03', 'module-12', 'backup', 'dlm', 'difficulty-easy'],
      question:
        'Which service helps automate snapshot lifecycle policies for EBS-backed resources?',
      options: ['Amazon Data Lifecycle Manager (DLM)', 'AWS Shield Standard', 'Amazon CloudFront', 'AWS Artifact'],
      correctAnswers: [0],
      explanation:
        'Module 12 highlights DLM for policy-based automation of EBS snapshot and retention workflows.',
    },
    {
      id: 'soa-reliability-m12-005',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-12', 'ebs-hdd', 'constraints', 'difficulty-medium'],
      question:
        'A team tries to use st1/sc1 as the root volume for an EC2 instance. What is the MOST accurate expectation?',
      options: [
        'HDD volume types are not supported as boot/root volumes and should be used as secondary volumes',
        'st1/sc1 are preferred for root volumes because they maximize IOPS',
        'Root-volume support depends only on IAM permissions',
        'st1/sc1 can be root volumes only when using Multi-Attach',
      ],
      correctAnswers: [0],
      explanation:
        'Module 12 calls out that st1/sc1 are intended for throughput-oriented secondary workloads, not boot volumes.',
    },
    {
      id: 'soa-reliability-m12-006',
      domain: 'reliability-continuity',
      task: '2.5',
      tags: ['soa-c03', 'module-12', 'snapshot-copy', 'cross-region', 'difficulty-medium'],
      question:
        'A workload must be recoverable in another Region using EBS backups. Which approach is MOST appropriate?',
      options: [
        'Copy EBS snapshots to the target Region',
        'Copy an attached volume directly across Regions',
        'Share route tables between Regions',
        'Enable CloudWatch Logs Insights for snapshots',
      ],
      correctAnswers: [0],
      explanation:
        'You cannot copy volumes directly across Regions; snapshot copy is the supported cross-Region backup pattern.',
    },
    {
      id: 'soa-reliability-m12-007',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-12', 'ebs-multi-attach', 'io1', 'difficulty-medium'],
      question:
        'A clustered Linux application needs concurrent read/write access from multiple Nitro-based instances to one EBS volume in the same AZ. Which capability is designed for this?',
      options: ['EBS Multi-Attach on io1', 'EBS snapshot copy', 'EFS replication', 'S3 Cross-Region Replication'],
      correctAnswers: [0],
      explanation:
        'Module 12 describes Multi-Attach for io1 volumes to support shared block access in specific clustered designs.',
    },
    {
      id: 'soa-reliability-m12-008',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-12', 'performance', 'iops-throughput', 'difficulty-medium'],
      question:
        'When sizing EBS storage, which metric is typically most important for transactional databases with frequent random operations?',
      options: ['IOPS', 'MiB/s throughput only', 'S3 request count', 'DNS query latency'],
      correctAnswers: [0],
      explanation:
        'Transactional random I/O workloads are generally constrained by IOPS rather than pure throughput.',
    },
    {
      id: 'soa-reliability-m12-009',
      domain: 'reliability-continuity',
      task: '2.5',
      tags: ['soa-c03', 'module-12', 'backup-strategy', 'dlm', 'difficulty-hard'],
      question:
        'An operations team needs repeatable EBS backup retention with minimal manual effort. What is the BEST first design choice?',
      options: [
        'Implement DLM snapshot lifecycle policies for target resources',
        'Create snapshots manually once per quarter',
        'Rely only on instance reboot schedules',
        'Use CloudTrail event history as backup storage',
      ],
      correctAnswers: [0],
      explanation:
        'Policy-driven DLM automation provides consistent snapshot cadence and retention governance.',
    },
    {
      id: 'soa-reliability-m12-010',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-12', 'multi-attach', 'clustering', 'difficulty-hard'],
      question:
        'A team enables Multi-Attach and immediately sees data-consistency issues. What is the MOST appropriate corrective action?',
      options: [
        'Use a clustered file system that is designed for concurrent writers',
        'Disable all EBS encryption to reduce write conflicts',
        'Switch routing policy to Route 53 failover',
        'Convert the volume to sc1 for stronger consistency',
      ],
      correctAnswers: [0],
      explanation:
        'Multi-Attach requires an application/storage layer that safely handles concurrent writes (for example clustered FS).',
    },
    {
      id: 'soa-reliability-m12-011',
      domain: 'reliability-continuity',
      task: '2.5',
      tags: ['soa-c03', 'module-12', 'snapshot-operations', 'cli', 'difficulty-hard'],
      question:
        'A SysOps engineer needs to seed disaster recovery in another Region quickly. Which operational sequence is MOST appropriate?',
      options: [
        'Create an EBS snapshot, copy it to the destination Region, then restore a volume there',
        'Detach the volume and attach it directly to an EC2 instance in another Region',
        'Export the volume through Route 53 and reimport in the target Region',
        'Replicate the EBS volume by enabling VPC Flow Logs',
      ],
      correctAnswers: [0],
      explanation:
        'Cross-Region volume recovery is performed by snapshot copy followed by volume creation in the destination Region.',
    },
    {
      id: 'soa-reliability-m12-012',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-12', 'troubleshooting', 'volume-selection', 'difficulty-hard'],
      question:
        'Application latency increased after moving from SSD to HDD EBS volumes. Which explanation is MOST likely?',
      options: [
        'The workload depends on high random IOPS, which HDD types are not optimized to provide',
        'HDD volumes cannot be attached to EC2 in any Availability Zone',
        'HDD volumes always disable CloudWatch metrics collection',
        'HDD volumes require AWS Shield Advanced to perform normally',
      ],
      correctAnswers: [0],
      explanation:
        'If a workload is random-I/O heavy, migrating from SSD to throughput-optimized HDD can increase latency.',
    },
  ]
}

function buildModule13ObjectStorageCards(): Card[] {
  return [
    {
      id: 'soa-reliability-m13-001',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 's3', 'object-storage', 'difficulty-easy'],
      question:
        'A team needs durable object storage for application assets and backups. Which AWS service is MOST appropriate?',
      options: ['Amazon S3', 'Amazon EBS', 'Amazon EFS only', 'AWS Secrets Manager'],
      correctAnswers: [0],
      explanation:
        'Module 13 focuses on deploying and operating Amazon S3 for object-storage use cases.',
    },
    {
      id: 'soa-reliability-m13-002',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 's3-block-public-access', 'difficulty-easy'],
      question:
        'What is the primary purpose of S3 Block Public Access settings?',
      options: [
        'Prevent bucket/object configurations that would allow unintended public access',
        'Automatically encrypt all objects with customer-managed keys',
        'Replicate objects to every AWS Region',
        'Convert all objects to Glacier immediately',
      ],
      correctAnswers: [0],
      explanation:
        'Block Public Access adds account/bucket-level guardrails against public exposure through ACL or policy settings.',
    },
    {
      id: 'soa-reliability-m13-003',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 's3-event-notifications', 'difficulty-easy'],
      question:
        'A workflow must trigger processing whenever new objects are uploaded to a bucket. Which S3 capability should be used?',
      options: ['S3 Event Notifications', 'S3 Batch Replication only', 'S3 Access Points only', 'S3 Inventory reports'],
      correctAnswers: [0],
      explanation:
        'S3 Event Notifications emit object-level events to downstream targets for event-driven processing.',
    },
    {
      id: 'soa-reliability-m13-004',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 's3-lifecycle', 'difficulty-easy'],
      question:
        'Which S3 feature automatically transitions objects between storage classes over time?',
      options: ['Lifecycle rules', 'Bucket policy conditions', 'IAM role trust policy', 'VPC endpoint policy'],
      correctAnswers: [0],
      explanation:
        'Lifecycle rules automate object transition and expiration actions based on age and other criteria.',
    },
    {
      id: 'soa-reliability-m13-005',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 'intelligent-tiering', 'difficulty-medium'],
      question:
        'A workload has unpredictable access patterns and cost should be optimized automatically. Which storage class is MOST appropriate?',
      options: ['S3 Intelligent-Tiering', 'S3 Standard only', 'S3 Glacier Deep Archive only', 'S3 One Zone-IA only'],
      correctAnswers: [0],
      explanation:
        'Intelligent-Tiering monitors access patterns and moves objects between tiers to optimize storage cost.',
    },
    {
      id: 'soa-reliability-m13-006',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 'intelligent-tiering', 'access-patterns', 'difficulty-medium'],
      question:
        'In S3 Intelligent-Tiering, what generally happens when an object is not accessed for a period of time?',
      options: [
        'It is automatically moved to lower-cost access tiers',
        'It is deleted permanently by default',
        'It is copied to every bucket in the account',
        'It is converted into an EBS snapshot',
      ],
      correctAnswers: [0],
      explanation:
        'Intelligent-Tiering is designed to reduce cost by moving infrequently accessed objects into less expensive tiers.',
    },
    {
      id: 'soa-reliability-m13-007',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 'archive-restore', 'difficulty-medium'],
      question:
        'An object is in an archive access tier and must be read. What is the required first step?',
      options: [
        'Initiate an S3 restore request',
        'Disable bucket versioning',
        'Attach the bucket to a Transit Gateway',
        'Recreate the object key in Route 53',
      ],
      correctAnswers: [0],
      explanation:
        'Archived objects are not immediately accessible; a restore request is required before retrieval.',
    },
    {
      id: 'soa-reliability-m13-008',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 's3-notification-config', 'difficulty-medium'],
      question:
        'A team configured an event target, but notifications still do not fire. Which S3-side step is essential?',
      options: [
        'Set the bucket notification configuration to point to the target',
        'Enable AWS Shield Advanced on the bucket',
        'Create a VPC peering connection to the bucket',
        'Enable CloudTrail Lake for all Regions',
      ],
      correctAnswers: [0],
      explanation:
        'S3 requires explicit bucket notification configuration that maps selected event types to a valid target.',
    },
    {
      id: 'soa-reliability-m13-009',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 'public-access', 'guardrails', 'difficulty-hard'],
      question:
        'An account should allow internal S3 use but prevent accidental public exposure from future bucket changes. What is the BEST first control?',
      options: [
        'Enable account-level S3 Block Public Access guardrails',
        'Disable all bucket policies in every account',
        'Move all objects to Glacier Deep Archive',
        'Require every upload to use multipart transfer',
      ],
      correctAnswers: [0],
      explanation:
        'Account-level Block Public Access provides broad preventive guardrails against accidental public ACL/policy exposure.',
    },
    {
      id: 'soa-reliability-m13-010',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 'archive-restore', 'operations', 'difficulty-hard'],
      question:
        'A restore was requested for an archived object, but the application still cannot read it immediately. What is the MOST accurate explanation?',
      options: [
        'Restore is asynchronous; access is available only after restore processing completes',
        'Archived objects can never be restored once transitioned',
        'The bucket must be recreated after every restore request',
        'Only IAM users (not roles) can read restored objects',
      ],
      correctAnswers: [0],
      explanation:
        'S3 restore operations take time; applications can access the temporary restored copy only after completion.',
    },
    {
      id: 'soa-reliability-m13-011',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 'event-driven', 'integration', 'difficulty-hard'],
      question:
        'A team needs low-latency, event-driven downstream processing for new objects and deletes. Which approach is MOST appropriate?',
      options: [
        'Configure S3 Event Notifications for required object event types and target services',
        'Run weekly S3 Inventory exports and process deltas manually',
        'Use only S3 lifecycle transitions as event triggers',
        'Poll bucket metrics once per day from CloudWatch',
      ],
      correctAnswers: [0],
      explanation:
        'For near-real-time object workflows, S3 Event Notifications are preferred over periodic polling/export patterns.',
    },
    {
      id: 'soa-reliability-m13-012',
      domain: 'reliability-continuity',
      task: '2.4',
      tags: ['soa-c03', 'module-13', 'cost-optimization', 'storage-class', 'difficulty-hard'],
      question:
        'A dataset alternates unpredictably between hot and cold usage, and operators want minimal tuning overhead. Which strategy is BEST?',
      options: [
        'Store in S3 Intelligent-Tiering and let access-based tiering adapt automatically',
        'Pin all objects permanently in S3 Glacier Deep Archive',
        'Use S3 Standard for all objects with no lifecycle or tiering',
        'Copy objects daily between buckets based on manual judgment',
      ],
      correctAnswers: [0],
      explanation:
        'Intelligent-Tiering is purpose-built for variable access patterns where manual class tuning is inefficient.',
    },
  ]
}
