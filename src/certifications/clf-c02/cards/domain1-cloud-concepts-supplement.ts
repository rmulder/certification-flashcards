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
  {
    id: 'cc-053',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'operational-excellence', 'sample-exam'],
    question:
      'Which design principle is included in the operational excellence pillar of the AWS Well-Architected Framework?',
    options: [
      'Create annotated documentation',
      'Anticipate failure',
      'Ensure performance efficiency',
      'Optimize costs',
    ],
    correctAnswers: [0],
    explanation:
      'Create annotated documentation supports operational excellence by improving understanding and management of workloads. Anticipating failure aligns with reliability; performance efficiency and cost optimization are separate pillars.',
  },
  {
    id: 'cc-054',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['caf', 'operations', 'sample-exam'],
    question:
      'Which perspective includes foundational capabilities of the AWS Cloud Adoption Framework?',
    options: ['Sustainability', 'Operations', 'Performance Efficiency', 'Reliability'],
    correctAnswers: [1],
    explanation:
      'Operations is a foundational capability in AWS CAF, focusing on support and maintenance processes. Sustainability, performance efficiency, and reliability relate to Well-Architected pillars, not CAF perspective names.',
  },
  {
    id: 'cc-055',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['sustainability', 'carbon', 'sample-exam'],
    question:
      'Which AWS service or tool helps companies measure the environmental impact of their AWS usage?',
    options: [
      'AWS Customer Carbon Footprint Tool',
      'AWS Compute Optimizer',
      'Sustainability Pillar',
      'OS-Climate',
    ],
    correctAnswers: [0],
    explanation:
      'The AWS Customer Carbon Footprint Tool provides insights into the carbon emissions associated with your AWS usage. Compute Optimizer recommends resource sizing; the Sustainability pillar is Well-Architected guidance, not a measurement tool.',
  },
  {
    id: 'cc-056',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['caf', 'sample-exam'],
    question:
      'Which options are perspectives that include foundational capabilities of the AWS Cloud Adoption Framework? (Select TWO.)',
    options: [
      'Sustainability',
      'Security',
      'Operations',
      'Performance Efficiency',
      'Reliability',
    ],
    correctAnswers: [2, 3],
    explanation:
      'Per this exam item, Operations and Performance Efficiency are CAF perspectives that include foundational capabilities. Sustainability and Reliability are Well-Architected pillar names; Security is a separate CAF perspective in AWS’s six-perspective CAF model.',
  },
  {
    id: 'cc-057',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'sample-exam'],
    question:
      'Which of the following promotes AWS Cloud architectural best practices for designing and operating reliable, secure, efficient, and cost-effective systems?',
    options: [
      'AWS Serverless Application Model framework',
      'AWS Business Support',
      'Principle of least privilege',
      'AWS Well-Architected Framework',
    ],
    correctAnswers: [3],
    explanation:
      'The AWS Well-Architected Framework defines pillars and design principles for reliable, secure, efficient, and cost-effective workloads. SAM deploys serverless apps; Business Support is a support plan; least privilege is a security practice used within the framework but is not the overall architectural guidance model.',
  },
  {
    id: 'cc-058',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'operational-excellence', 'sample-exam'],
    question:
      'Which pillar of the AWS Well-Architected Framework includes a design principle about measuring the overall efficiency of workloads in terms of business value?',
    options: [
      'Operational Excellence',
      'Security',
      'Reliability',
      'Cost Optimization',
    ],
    correctAnswers: [0],
    explanation:
      'Operational Excellence includes measuring workload efficiency against business value through KPIs, goals aligned to objectives, and feedback loops to improve operations. Cost Optimization focuses on spend; Security and Reliability address protection and availability.',
  },
  {
    id: 'cc-059',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['sustainability', 'well-architected', 'sample-exam'],
    question:
      'To improve sustainability impact, which recommended practices should a company implement? (Select TWO.)',
    options: [
      'Scale infrastructure with user load',
      'Maximize distance between workloads and user locations',
      'Eliminate unused assets',
      'Scale resources with excess capacity',
      'Scale infrastructure based on user count',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Matching capacity to actual user load and decommissioning unused resources reduce energy waste and improve sustainability. Maximizing distance to users increases latency and often energy use; maintaining excess capacity and scaling only by headcount without load alignment waste resources.',
  },
  {
    id: 'cc-060',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'reliability', 'sample-exam'],
    question:
      'Which of the following represents a cloud concept that this architecture represents by deploying an application across multiple AWS Regions and configuring automatic failover between those Regions?',
    options: ['Security', 'Reliability', 'Scalability', 'Cost Optimization'],
    correctAnswers: [1],
    explanation:
      'Reliability covers recovering from disruptions and maintaining availability—multi-Region deployment with failover limits impact from regional outages. Security protects data and access; scalability adds capacity; cost optimization reduces spend—they are not the primary concept for cross-Region failover.',
  },
  {
    id: 'cc-061',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['regions', 'global-infrastructure', 'sample-exam'],
    question:
      'A company provides a software as a service (SaaS) application. The company has a new customer that is based in a different country. The new customer\'s data needs to be hosted in that country. Which AWS service or infrastructure component should the company use to meet this requirement?',
    options: [
      'AWS Shield',
      'Amazon S3 Object Lock',
      'AWS Regions',
      'Placement groups',
    ],
    correctAnswers: [2],
    explanation:
      'AWS Regions are geographic locations where AWS operates data centers; deploying workloads in the Region that maps to the customer\'s country helps meet data residency requirements. Shield mitigates DDoS; Object Lock prevents object deletion; placement groups influence EC2 physical proximity within an AZ.',
  },
  {
    id: 'cc-062',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'cloudtrail', 'sample-exam'],
    question:
      'Which AWS cloud design principle is followed when using AWS CloudTrail?',
    options: [
      'Automatically recover',
      'Perform operations as code',
      'Measure efficiency',
      'Ensure traceability',
    ],
    correctAnswers: [3],
    explanation:
      'CloudTrail records API activity and account events, supporting traceability—knowing who did what and when. Automatic recovery relates to reliability; operations as code uses automation such as IaC; measuring efficiency ties to operational excellence KPIs.',
  },
  {
    id: 'cc-063',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['architecture', 'decoupling', 'sample-exam'],
    question:
      'Which of the following is a benefit of decoupling an AWS cloud architecture?',
    options: [
      'Reduced latency',
      'Ability to update components independently',
      'Decreased costs',
      'Fewer components to manage',
    ],
    correctAnswers: [1],
    explanation:
      'Decoupling reduces tight dependencies so components interact through defined interfaces (for example queues or events), letting you change one part without disrupting others. It can improve scalability and availability but does not inherently cut latency, cost, or the number of components.',
  },
  {
    id: 'cc-064',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['availability-zone', 'global-infrastructure', 'sample-exam'],
    question: 'An Availability Zone consists of:',
    options: [
      'One or more data centers in a single location',
      'Two or more data centers in multiple locations',
      'One or more physical hosts in a single data center',
      'Two or more physical hosts in multiple data centers',
    ],
    correctAnswers: [0],
    explanation:
      'An Availability Zone is one or more discrete data centers in a single geographic area within a Region, with independent power, networking, and cooling. Multiple AZs in a Region improve resilience; hosts alone do not define an AZ boundary.',
  },
  {
    id: 'cc-065',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'cost-optimization', 'sample-exam'],
    question:
      'Which pillar of the AWS Well-Architected Framework focuses on the return on investment of migrating to the AWS cloud?',
    options: [
      'Sustainability',
      'Cost Optimization',
      'Operational Excellence',
      'Reliability',
    ],
    correctAnswers: [1],
    explanation:
      'The Cost Optimization pillar emphasizes delivering business value from cloud spend, including ROI of migration, rightsizing, and eliminating waste. Sustainability covers environmental impact; Operational Excellence covers operations; Reliability covers availability and recovery.',
  },
]
