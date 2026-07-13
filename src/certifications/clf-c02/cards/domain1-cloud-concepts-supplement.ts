import type { Card } from '../../../core/types'

/** Additional CLF-C02 practice questions — sample exams & exam guide (Domain 1) */
export const cloudConceptsSupplementCards: Card[] = [
  {
    id: 'cc-041',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['caf', 'migration'],
    question:
      'Which AWS resource provides structured guidance across six perspectives (business, people, governance, platform, security, and operations) for cloud transformation?',
    options: [
      'AWS Cloud Adoption Framework (AWS CAF)',
      'AWS Well-Architected Tool only',
      'Amazon CloudWatch',
      'AWS Artifact',
    ],
    correctAnswers: [0],
    explanation:
      'AWS CAF helps organizations build a comprehensive plan for cloud migration and transformation across business and technical perspectives.',
  },
  {
    id: 'cc-042',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'sustainability'],
    question:
      'Which Well-Architected Framework pillar focuses on minimizing the environmental impact of running cloud workloads?',
    options: [
      'Sustainability',
      'Operational excellence',
      'Performance efficiency',
      'Reliability',
    ],
    correctAnswers: [0],
    explanation:
      'The Sustainability pillar guides you to reduce energy consumption and carbon footprint while meeting performance needs.',
  },
  {
    id: 'cc-043',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['economics', 'licensing'],
    question:
      'A company wants to use existing Microsoft SQL Server licenses on AWS instead of paying for included licenses. Which licensing approach is this?',
    options: [
      'Bring Your Own License (BYOL)',
      'Reserved Instance pricing',
      'Spot Instance pricing',
      'Savings Plans',
    ],
    correctAnswers: [0],
    explanation:
      'BYOL lets customers apply existing software licenses to eligible AWS services, often on Dedicated Hosts or BYOL-supported RDS options.',
  },
  {
    id: 'cc-044',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['migration', 'snow-family'],
    question:
      'When migrating 500 TB of data from a data center with only 100 Mbps internet connectivity, which strategy is MOST appropriate?',
    options: [
      'Use AWS Snowball Edge for offline data transfer',
      'Stream all data over VPN during business hours only',
      'Use Amazon CloudFront to cache on-premises files',
      'Deploy AWS Wavelength at the data center',
    ],
    correctAnswers: [0],
    explanation:
      'Large offline datasets with limited bandwidth are common Snow Family use cases; physical appliances avoid lengthy network transfers.',
  },
  {
    id: 'cc-045',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['benefits', 'economies-of-scale'],
    question:
      'How do AWS economies of scale benefit customers?',
    options: [
      'AWS aggregates usage from many customers to offer lower per-unit prices',
      'Each customer must purchase identical hardware bundles',
      'AWS eliminates all variable costs',
      'Customers must commit to 3-year contracts for any service',
    ],
    correctAnswers: [0],
    explanation:
      'AWS passes cost efficiencies from massive scale to customers through pay-as-you-go pricing without large upfront investments.',
  },
  {
    id: 'cc-046',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['migration', 'dms'],
    question:
      'A company must replicate an on-premises Oracle database to Amazon RDS with minimal downtime during cutover. Which service supports ongoing replication?',
    options: [
      'AWS Database Migration Service (AWS DMS)',
      'AWS DataSync only',
      'Amazon S3 Transfer Acceleration',
      'AWS Transfer Family SFTP',
    ],
    correctAnswers: [0],
    explanation:
      'DMS supports continuous replication (CDC) for database migrations, enabling cutover windows with minimal downtime.',
  },
  {
    id: 'cc-047',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'reliability'],
    question:
      'Which design principle supports recovering from failures automatically in the Well-Architected Reliability pillar?',
    options: [
      'Test recovery procedures and use automatic recovery where possible',
      'Deploy all resources in a single Availability Zone',
      'Disable health checks to reduce API calls',
      'Use one large instance instead of multiple smaller ones',
    ],
    correctAnswers: [0],
    explanation:
      'Reliability includes anticipating and recovering from failures through testing, redundancy, and automated recovery mechanisms.',
  },
  {
    id: 'cc-048',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['economics', 'automation'],
    question:
      'Using AWS CloudFormation to provision environments reduces costs primarily by:',
    options: [
      'Enabling repeatable, automated deployments that avoid manual errors and waste',
      'Eliminating all EC2 charges',
      'Replacing the need for IAM',
      'Providing free cross-Region data transfer',
    ],
    correctAnswers: [0],
    explanation:
      'Infrastructure as code automates provisioning and teardown, reducing labor costs and misconfiguration that leads to idle or oversized resources.',
  },
  {
    id: 'cc-049',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['deployment-models', 'hybrid'],
    question:
      'A company runs sensitive workloads on-premises but wants to burst analytics jobs to AWS. Which deployment model is this?',
    options: ['Hybrid cloud', 'Public cloud only', 'Private cloud only', 'Multi-cloud only'],
    correctAnswers: [0],
    explanation:
      'Hybrid cloud combines on-premises infrastructure with AWS resources, often connected via VPN or Direct Connect.',
  },
  {
    id: 'cc-050',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['migration', 'application-migration'],
    question:
      'Which AWS service simplifies lift-and-shift migration of servers from on-premises or other clouds to AWS?',
    options: [
      'AWS Application Migration Service',
      'Amazon Kendra',
      'AWS Artifact',
      'Amazon Polly',
    ],
    correctAnswers: [0],
    explanation:
      'Application Migration Service (formerly CloudEndure Migration) replicates source servers and orchestrates cutover to EC2 with minimal downtime.',
  },
  {
    id: 'cc-051',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'cost-optimization'],
    question:
      'Which practice aligns with the Cost Optimization pillar of the Well-Architected Framework?',
    options: [
      'Right-sizing resources and eliminating unused workloads',
      'Using the largest instance type by default',
      'Disabling cost allocation tags',
      'Storing all data in the highest-performance storage tier',
    ],
    correctAnswers: [0],
    explanation:
      'Cost Optimization emphasizes matching spend to business value through rightsizing, purchasing models, and eliminating waste.',
  },
  {
    id: 'cc-052',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['exam-format', 'benefits'],
    question:
      'The CLF-C02 exam includes 65 questions in 90 minutes. How many of those questions affect your score?',
    options: ['50 scored questions', '65 scored questions', '40 scored questions', '15 scored questions'],
    correctAnswers: [0],
    explanation:
      'The exam has 50 scored questions and 15 unscored pilot questions. Treat every question seriously since unscored items are not identified.',
  },
]
