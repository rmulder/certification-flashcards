import type { Card } from '../../../core/types'

export const reliabilityContinuityCards: Card[] = [
  {
    id: 'soa-reliability-001',
    domain: 'reliability-continuity',
    task: '2.1',
    tags: ['backup', 'dr', 'business-continuity'],
    question: 'Which documentation is most important for managed backup strategy scenarios in SOA-C03?',
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
    question: 'To prepare for EC2 storage recovery questions, which docs should you prioritize?',
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
    question: 'Which reference should you use to compare RDS Multi-AZ deployments and read replicas?',
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
    question: 'For DNS failover and health-check routing policies, what is the primary study source?',
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
    question: 'Which docs should you drill for Auto Scaling health checks, lifecycle hooks, and scaling policies?',
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
    question: 'For traffic distribution and fault tolerance at the network/app edge, which docs are most relevant?',
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
    question: 'Which docs best prepare you for S3 durability, versioning, lifecycle, and replication questions?',
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
    question: 'Where should you study managed shared file storage reliability trade-offs for Linux and Windows workloads?',
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
    question: 'Which AWS resource is best for comparing DR patterns by RTO and RPO expectations?',
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
    question: 'Which service documentation helps assess and improve workload resilience continuously?',
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
    question: 'Which official service should you use to practice controlled resilience experiments?',
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
    question: 'Which free hands-on content is best for reliability pillar operational practice?',
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
]
