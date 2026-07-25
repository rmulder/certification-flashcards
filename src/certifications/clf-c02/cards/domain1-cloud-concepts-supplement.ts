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
  {
    id: 'cc-066',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['economics', 'capex', 'sample-exam'],
    question:
      'Which describes the significant upfront costs of purchasing hardware, networking equipment, and software licenses that require periodic upgrades to maintain performance and security?',
    options: ['Compliance', 'Recovery', 'Staffing', 'CapEx'],
    correctAnswers: [3],
    explanation:
      'CapEx (capital expenditure) is money spent upfront on physical assets such as servers, networking gear, and licensed software, plus ongoing refresh cycles. AWS Cloud shifts much of this to OpEx (pay-as-you-go). Compliance, recovery, and staffing are cost categories or activities, not the definition of upfront capital spending.',
  },
  {
    id: 'cc-067',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['caf', 'governance', 'sample-exam'],
    question:
      'What CAF perspective establishes security, compliance, and risk management controls for a smooth cloud transition?',
    options: ['Governance', 'Operations', 'Business', 'People'],
    correctAnswers: [0],
    explanation:
      'The Governance perspective in AWS CAF focuses on policies, compliance, risk management, and security controls that guide cloud adoption. Operations covers day-to-day running of workloads; Business aligns strategy and outcomes; People covers skills and organizational change.',
  },
  {
    id: 'cc-068',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['migration', 'professional-services', 'sample-exam'],
    question:
      'To facilitate cloud migration, which global team of experts helps customers achieve their desired business outcomes when using the AWS Cloud?',
    options: [
      'AWS Well-Architected',
      'AWS Professional Services',
      'AWS Migration Acceleration Program',
      'AWS Training and Certification',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Professional Services (ProServe) is AWS’s global consulting team that helps plan and execute migrations and cloud transformations to reach business goals. Well-Architected is a framework and review process; MAP provides funding and methodology for migrations; Training and Certification builds skills through courses and exams.',
  },
  {
    id: 'cc-069',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['migration', '6rs', 'relocate', 'sample-exam'],
    question:
      'Which migration strategy involves moving workloads to AWS without making significant modifications, typically at the hypervisor level?',
    options: ['Retire', 'Relocate', 'Retain', 'Refactor'],
    correctAnswers: [1],
    explanation:
      'Relocate moves infrastructure to AWS with minimal change, often by shifting VMware workloads to VMware Cloud on AWS at the hypervisor layer. Rehost lifts apps to EC2; Refactor re-architects for cloud; Retire decommissions; Retain keeps workloads on-premises.',
  },
  {
    id: 'cc-070',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['managed-services', 'rds', 'elasticache', 'sample-exam'],
    question:
      'What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?',
    options: [
      'They have better performance than customer-managed services',
      'They do not require the customer to optimize instance type or size selections',
      'They simplify patching and updating underlying OSs',
      'They require the customer to monitor and replace failing instances',
    ],
    correctAnswers: [2],
    explanation:
      'Managed services such as RDS and ElastiCache handle patching and updates to underlying operating systems and engines, reducing maintenance work. AWS also handles much failure detection and recovery—you still choose appropriate instance types and sizes for your workload. Performance depends on configuration and workload, not managed vs. self-managed alone.',
  },
  {
    id: 'cc-071',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'performance-efficiency', 'sample-exam'],
    question:
      'Which pillar of the AWS Well-Architected Framework focuses on selecting the right resource types and sizes based on workload requirements?',
    options: [
      'Cost Optimization',
      'Reliability',
      'Performance Efficiency',
      'Sustainability',
    ],
    correctAnswers: [2],
    explanation:
      'Performance Efficiency emphasizes using compute, storage, and database resources efficiently—including right-sizing and adapting as demand changes. Reliability targets correct function and recovery from failure; Cost Optimization reduces waste and cost; Sustainability minimizes environmental impact of workloads.',
  },
  {
    id: 'cc-072',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['caf', 'transformation-domains', 'sample-exam'],
    question:
      'Which transformation domains are defined by the AWS Cloud Adoption Framework (AWS CAF)? (Select TWO)',
    options: ['Process', 'Product', 'Security', 'Infrastructure', 'Compliance'],
    correctAnswers: [0, 1],
    explanation:
      'AWS CAF defines four transformation domains: Technology, Process, Organization, and Product. Process covers digitizing and optimizing operations; Product covers reimagining the business model with cloud capabilities. Security is a CAF perspective, not a transformation domain; Infrastructure sits under Technology/Platform; Compliance is addressed through Governance.',
  },
  {
    id: 'cc-073',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['automation', 'well-architected', 'sample-exam'],
    question:
      'Which benefit of AWS automation accelerates infrastructure deployment and updates, allowing businesses to swiftly adapt to changing demands without manual intervention?',
    options: [
      'Rapid changes',
      'Repeatable configurations',
      'Automated testing',
      'Improved productivity',
    ],
    correctAnswers: [0],
    explanation:
      'Automation (for example with CloudFormation or CI/CD) enables rapid, repeatable infrastructure changes so teams can deploy and update environments quickly without manual steps. Repeatable configurations and improved productivity are related benefits; automated testing validates changes—the exam item identifies rapid changes as the benefit tied to swift adaptation.',
  },
  {
    id: 'cc-074',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['cloud-models', 'iaas', 'study-guide'],
    question:
      'Which cloud service model gives customers access to virtualized units of a provider\'s physical resources and lets them manage infrastructure much like local physical servers?',
    options: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Function as a Service (FaaS) only',
    ],
    correctAnswers: [0],
    explanation:
      'IaaS (for example Amazon EC2) provides virtual compute, storage, and networking that customers configure and operate. PaaS masks infrastructure complexity for application deployment; SaaS delivers ready-to-use applications; FaaS is event-driven compute, not full infrastructure control.',
  },
  {
    id: 'cc-075',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['virtualization', 'study-guide'],
    question: 'What is a hypervisor in cloud computing?',
    options: [
      'Software that administers virtualized operations on physical hardware',
      'Dedicated hardware that replaces all physical servers',
      'A network firewall inside every VPC',
      'An AWS billing report for EC2 usage',
    ],
    correctAnswers: [0],
    explanation:
      'A hypervisor is software that creates and runs virtual machines on physical hosts, enabling cloud providers to partition hardware among many customers. AWS operates the hypervisor layer as part of security OF the cloud; customers do not manage hypervisors on EC2.',
  },
  {
    id: 'cc-076',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['governance', 'acceptable-use', 'study-guide'],
    question:
      'Which AWS document defines permitted and prohibited uses of AWS services and should be reviewed for acceptable workload behavior?',
    options: [
      'AWS Acceptable Use Policy',
      'AWS Pricing Calculator user guide',
      'Amazon EC2 instance type catalog',
      'AWS CloudFormation template reference',
    ],
    correctAnswers: [0],
    explanation:
      'The AWS Acceptable Use Policy describes allowed and forbidden activities on AWS (for example spam, malware, and illegal content). Violations may be reported to the AWS Abuse Team. Pricing and technical references do not define acceptable use rules.',
  },
  {
    id: 'cc-077',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['global-services', 'regions', 'study-guide'],
    question:
      'Which AWS services are considered global and are not restricted to a single AWS Region? (Select TWO.)',
    options: [
      'Amazon Route 53',
      'Amazon EC2',
      'Amazon CloudFront',
      'Amazon RDS',
      'Amazon EBS',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Route 53 (DNS) and CloudFront (CDN) operate globally across edge locations and DNS endpoints. EC2, RDS, and EBS are Regional services—you launch or create them in a specific Region and Availability Zone.',
  },
  {
    id: 'cc-078',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'operational-excellence', 'sample-exam'],
    question:
      'Which AWS Well-Architected Framework pillar focuses on running and monitoring systems to deliver business value and continually improving processes and procedures?',
    options: [
      'Operational Excellence',
      'Performance Efficiency',
      'Reliability',
      'Security',
    ],
    correctAnswers: [0],
    explanation:
      'Operational Excellence covers how you run workloads, observe them, and improve operations over time. Performance Efficiency focuses on efficient resource use; Reliability on recovery and availability; Security on protecting data and systems.',
  },
  {
    id: 'cc-079',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['caf', 'migration', 'sample-exam'],
    question:
      'What is a key advantage of following a structured framework such as the AWS Cloud Adoption Framework (AWS CAF) during cloud transition?',
    options: [
      'Increased operational efficiency through guided best practices and streamlined decision-making',
      'Unlimited free data storage for all workloads',
      'Zero need for IT staff after migration',
      'Automatic elimination of all compliance requirements',
    ],
    correctAnswers: [0],
    explanation:
      'AWS CAF organizes guidance across perspectives (business, people, governance, platform, security, operations) to help teams adopt cloud consistently, reducing rework and improving operational efficiency. It does not remove staffing, compliance, or storage costs.',
  },
  {
    id: 'cc-080',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['economics', 'variable-cost', 'sample-exam'],
    question: 'Which example best describes a variable cost in cloud computing?',
    options: [
      'Paying per hour for an Amazon EC2 instance based on how long it runs',
      'A one-time purchase of on-premises server hardware',
      'A fixed annual software license regardless of user count',
      'Monthly rent for a data center facility that does not change with usage',
    ],
    correctAnswers: [0],
    explanation:
      'Variable (consumption-based) costs rise and fall with usage—such as EC2 hours, S3 storage GB-months, or Lambda invocations. Upfront hardware, fixed licenses, and flat facility rent are fixed costs typical of on-premises models.',
  },
  {
    id: 'cc-081',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['disaster-recovery', 'rpo', 'crucial-exams'],
    question: 'What does Recovery Point Objective (RPO) measure in disaster recovery planning?',
    options: [
      'The maximum acceptable amount of data loss measured in time',
      'The maximum acceptable downtime before service is restored',
      'The number of Availability Zones required for compliance',
      'The monthly cost of backup storage in Amazon S3',
    ],
    correctAnswers: [0],
    explanation:
      'RPO defines how much data you can afford to lose—for example, 15 minutes of transactions— and drives backup and replication frequency. Recovery Time Objective (RTO) measures how long restoration can take, not data loss.',
  },
  {
    id: 'cc-082',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['disaster-recovery', 'rto', 'crucial-exams'],
    question: 'What does Recovery Time Objective (RTO) measure in disaster recovery planning?',
    options: [
      'The maximum acceptable time to restore a system after a disruption',
      'The maximum acceptable data loss measured in time',
      'The percentage uptime guaranteed by every AWS service SLA',
      'The time required to provision a new AWS account',
    ],
    correctAnswers: [0],
    explanation:
      'RTO is how quickly workloads must be back online after an outage—for example, four hours. Recovery Point Objective (RPO) limits acceptable data loss, not restoration duration.',
  },
  {
    id: 'cc-083',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['deployment', 'blue-green', 'crucial-exams'],
    question: 'What is a blue-green deployment strategy?',
    options: [
      'Running two identical environments and switching traffic from the old (blue) to the new (green) with minimal downtime',
      'Deploying only to AWS Regions named with color codes',
      'Using Spot Instances for production and On-Demand for development',
      'Storing blue and green S3 buckets in different Regions for compliance',
    ],
    correctAnswers: [0],
    explanation:
      'Blue-green deployment keeps a current production environment (blue) and a parallel new version (green). After validation, traffic shifts to green for near-zero-downtime releases. Route 53, load balancers, or Auto Scaling can orchestrate the cutover.',
  },
  {
    id: 'cc-084',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['scalability', 'horizontal', 'crucial-exams'],
    question: 'What is horizontal scaling in the AWS Cloud?',
    options: [
      'Adding more instances or resources to handle increased load',
      'Upgrading a single server to a larger instance type only',
      'Moving all workloads to a single Availability Zone',
      'Replacing on-premises hardware with tape backups',
    ],
    correctAnswers: [0],
    explanation:
      'Horizontal scaling (scale out/in) adds or removes instances—for example more EC2 instances behind a load balancer. Vertical scaling increases capacity of one resource, such as a larger instance type.',
  },
  {
    id: 'cc-085',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['scalability', 'vertical', 'crucial-exams'],
    question: 'What is vertical scaling in the AWS Cloud?',
    options: [
      'Increasing the capacity of an existing resource, such as moving to a larger EC2 instance type',
      'Deploying identical copies of an application across multiple Regions only',
      'Deleting unused S3 buckets to save cost',
      'Using CloudFront edge locations for caching',
    ],
    correctAnswers: [0],
    explanation:
      'Vertical scaling (scale up/down) changes the size or power of a single resource—for example resizing an RDS instance class. Horizontal scaling adds more instances rather than making one instance bigger.',
  },
  {
    id: 'cc-086',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['fault-tolerance', 'reliability', 'crucial-exams'],
    question: 'What does fault tolerance mean in cloud architecture?',
    options: [
      'The ability of a system to continue operating when components fail, often through redundancy',
      'The guarantee that no AWS service will ever experience downtime',
      'Eliminating the need for backups and monitoring',
      'Running all workloads on a single large server to simplify management',
    ],
    correctAnswers: [0],
    explanation:
      'Fault tolerance designs assume components can fail and use redundancy—such as Multi-AZ deployments or load-balanced instances—so the overall system keeps working. High availability and fault tolerance overlap; neither eliminates the need for monitoring or DR planning.',
  },
  {
    id: 'cc-087',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['cloud-models', 'paas', 'crucial-exams'],
    question:
      'Which cloud service model provides a managed platform for deploying applications without managing underlying servers, storage, and networking?',
    options: [
      'Platform as a Service (PaaS)',
      'Infrastructure as a Service (IaaS)',
      'Software as a Service (SaaS)',
      'Hardware as a Service (HaaS)',
    ],
    correctAnswers: [0],
    explanation:
      'PaaS (for example AWS Elastic Beanstalk) handles runtime, middleware, and infrastructure so developers focus on code. IaaS gives raw virtual infrastructure; SaaS delivers finished applications to end users.',
  },
  {
    id: 'cc-088',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['cloud-models', 'saas', 'crucial-exams'],
    question:
      'Which cloud service model delivers ready-to-use applications to end users over the internet, typically with a subscription?',
    options: [
      'Software as a Service (SaaS)',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Database as a Service only',
    ],
    correctAnswers: [0],
    explanation:
      'SaaS provides complete applications—such as email or CRM—managed by the provider. Customers use the software without managing servers or platforms. IaaS and PaaS target builders and operators, not only end-user app consumption.',
  },
  {
    id: 'cc-089',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['deployment-models', 'crucial-exams'],
    question:
      'A company keeps sensitive data on-premises but uses AWS for development and test environments connected over VPN. Which deployment model is this?',
    options: [
      'Hybrid cloud',
      'Public cloud only',
      'Private cloud only',
      'Multi-cloud only',
    ],
    correctAnswers: [0],
    explanation:
      'Hybrid cloud combines on-premises (or private) infrastructure with public cloud resources. Public cloud is AWS-only workloads; private cloud is dedicated cloud-like infrastructure on-premises; multi-cloud uses multiple public cloud providers.',
  },
  {
    id: 'cc-090',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['shared-responsibility', 'crucial-exams'],
    question: 'What does the AWS Shared Responsibility Model define?',
    options: [
      'Which security and operational tasks AWS manages versus which tasks the customer manages',
      'Which AWS Support plan every account must purchase',
      'How Reserved Instance discounts are shared in Organizations',
      'Which Regions are free for all customers',
    ],
    correctAnswers: [0],
    explanation:
      'AWS is responsible for security of the cloud (physical infrastructure, hypervisor, managed services operations). Customers are responsible for security in the cloud (data, IAM, OS patching on EC2, network configuration). Responsibilities vary slightly by service type.',
  },
  {
    id: 'cc-091',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['benefits', 'agility', 'examtopics'],
    question:
      'A company needs to provision additional servers quickly for a new line of business. Which advantage of cloud computing helps meet this need?',
    options: [
      'Benefit from massive economies of scale only',
      'Increase speed and agility',
      'Trade fixed expense for variable expense',
      'Go global in minutes',
    ],
    correctAnswers: [1],
    explanation:
      'Speed and agility means you can provision and deprovision infrastructure in minutes instead of waiting for physical hardware. Economies of scale and pay-as-you-go pricing are separate cloud benefits; global reach addresses worldwide deployment, not rapid local provisioning.',
  },
  {
    id: 'cc-092',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['benefits', 'elasticity', 'examtopics'],
    question:
      'Which advantage of cloud computing allows users to scale resources up and down based on application load instead of forecasting peak capacity upfront?',
    options: [
      'Stop guessing capacity',
      'Shared responsibility',
      'High availability only',
      'Dedicated tenancy',
    ],
    correctAnswers: [0],
    explanation:
      'Stop guessing capacity is a core cloud benefit: you add or remove resources on demand rather than over-provisioning for peak load. Shared responsibility defines security duties; high availability and dedicated tenancy address architecture choices, not elastic capacity planning.',
  },
  {
    id: 'cc-093',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['well-architected', 'design-principles', 'examtopics'],
    question:
      'Which AWS design principle emphasizes reducing interdependencies between application components so one failure does not cascade?',
    options: [
      'Loose coupling',
      'Tight coupling',
      'Vertical scaling only',
      'Single-AZ deployment',
    ],
    correctAnswers: [0],
    explanation:
      'Loose coupling limits how tightly components depend on one another, improving resilience and independent scaling. Tight coupling increases blast radius; vertical scaling and single-AZ designs do not address component interdependency.',
  },
  {
    id: 'cc-094',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['migration', '6rs', 'replatform', 'examtopics'],
    question:
      'A company migrates a MySQL database from self-managed on-premises servers to Amazon RDS with minimal application changes but a different database platform. Which migration strategy is this?',
    options: ['Rehost', 'Replatform', 'Retire', 'Retain'],
    correctAnswers: [1],
    explanation:
      'Replatform moves a workload to the cloud with modest optimizations—such as shifting a self-managed database to a managed service like RDS—without fully re-architecting the application. Rehost lifts with minimal change; Refactor (not listed) re-architects; Retire decommissions; Retain stays on-premises.',
  },
  {
    id: 'cc-095',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['caf', 'envision', 'examtopics'],
    question:
      'Which phase of the AWS Cloud Adoption Framework (AWS CAF) cloud transformation journey focuses on defining measurable business outcomes and demonstrating how the cloud accelerates strategy?',
    options: ['Envision', 'Align', 'Launch', 'Scale'],
    correctAnswers: [0],
    explanation:
      'The Envision phase establishes the business case and desired outcomes for cloud adoption. Align maps organizational capabilities to the plan; Launch and Scale execute and expand workloads. CAF also uses perspectives (Governance, People, etc.) alongside these journey phases.',
  },
  {
    id: 'cc-096',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['caf', 'governance', 'examtopics', 'sample-exam'],
    question:
      'Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?',
    options: [
      'Sustainability',
      'Performance efficiency',
      'Governance',
      'Reliability',
    ],
    correctAnswers: [2],
    explanation:
      'AWS CAF organizes guidance into six perspectives: Business, People, Governance, Platform, Security, and Operations—each with foundational capabilities. Sustainability, Performance efficiency, and Reliability are AWS Well-Architected Framework pillar names, not CAF perspective names.',
  },
  {
    id: 'cc-097',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['elasticity', 'well-architected', 'examtopics', 'sample-exam'],
    question:
      'One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?',
    options: [
      'By automatically scaling your on-premises resources based on changes in demand.',
      'By automatically scaling your AWS resources using an Elastic Load Balancer.',
      'By reducing interdependencies between application components wherever possible.',
      'By automatically provisioning the required AWS resources based on changes in demand.',
    ],
    correctAnswers: [3],
    explanation:
      'Elasticity means AWS resources expand or contract to match demand—often with Auto Scaling and related services—so capacity follows workload changes. On-premises auto-scaling is not an AWS cloud principle; ELB distributes traffic but does not define elasticity by itself; reducing interdependencies describes loose coupling.',
  },
  {
    id: 'cc-098',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['iaas', 'paas', 'saas', 'cloud-models', 'examtopics', 'sample-exam'],
    question:
      'Which of the following does NOT belong to the AWS Cloud Computing models?',
    options: [
      'Platform as a Service (PaaS)',
      'Infrastructure as a Service (IaaS)',
      'Software as a Service (SaaS)',
      'Networking as a Service (NaaS)',
    ],
    correctAnswers: [3],
    explanation:
      'The three common cloud service models on AWS are IaaS (for example EC2), PaaS (for example Elastic Beanstalk), and SaaS (for example WorkMail). Networking as a Service (NaaS) is not one of these standard cloud computing model categories in AWS exam terminology.',
  },
  {
    id: 'cc-099',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['managed-services', 'dynamodb', 'emr', 'examtopics', 'sample-exam'],
    question:
      'Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO.)',
    options: [
      'Amazon VPC',
      'Amazon DynamoDB',
      'Amazon Elastic MapReduce',
      'AWS IAM',
      'Amazon Elastic Compute Cloud',
    ],
    correctAnswers: [1, 2],
    explanation:
      'Amazon DynamoDB and Amazon EMR (Elastic MapReduce) are managed services where AWS handles much of the underlying infrastructure operations and maintenance. Amazon VPC and EC2 are IaaS building blocks you configure and operate; IAM is an identity service you configure with policies and users—not a compute/data platform with AWS-run infrastructure patching like DynamoDB or EMR clusters.',
  },
  {
    id: 'cc-100',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['benefits', 'cloud-vs-on-premises', 'examtopics', 'sample-exam'],
    question:
      'What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO.)',
    options: [
      'Reserved Compute capacity',
      'Eliminating Single Points of Failure (SPOFs)',
      'Distributed infrastructure',
      'Virtualized compute resources',
      'Dedicated hosting',
    ],
    correctAnswers: [1, 2],
    explanation:
      'Cloud providers operate distributed infrastructure across Availability Zones and Regions, which helps you design for resilience and reduce reliance on a single facility or component. Reserved capacity is a pricing option, not a fundamental cloud-versus-datacenter advantage; virtualization and dedicated hosting are also common in traditional data centers.',
  },
  {
    id: 'cc-101',
    domain: 'cloud-concepts',
    task: '1.4',
    tags: ['disaster-recovery', 'multi-region', 'high-availability', 'examtopics', 'sample-exam'],
    question:
      'A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?',
    options: [
      'Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.',
      'Deploy AWS resources across multiple Availability Zones within the same AWS Region.',
      'Create point-in-time backups in another subnet and recover this data when a disaster occurs.',
      'Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.',
    ],
    correctAnswers: [3],
    explanation:
      'Natural disasters can affect an entire AWS Region. For near-zero downtime, run Active-Active (or hot standby) workloads in a second Region with traffic routed to healthy endpoints. Multi-AZ protects against AZ failure within a Region; CloudFront edge caches content but is not a full application DR strategy; subnet backups alone imply recovery delay (RTO), not continuous availability.',
  },
  {
    id: 'cc-102',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'operational-excellence', 'cloudformation', 'examtopics', 'sample-exam'],
    question:
      'Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?',
    options: [
      'Using AWS Trusted Advisor to find underutilized resources.',
      'Using AWS CloudTrail to record user activities.',
      'Using AWS CloudFormation to manage infrastructure as code.',
      'Deploying an application in multiple Availability Zones.',
    ],
    correctAnswers: [2],
    explanation:
      'Operational Excellence emphasizes running and improving systems through automation, IaC, and repeatable operations—CloudFormation codifies infrastructure for consistent deploys and changes. Trusted Advisor unused resources aligns with Cost Optimization; CloudTrail audit logs support Security and governance; Multi-AZ deployments primarily support Reliability.',
  },
  {
    id: 'cc-103',
    domain: 'cloud-concepts',
    task: '1.3',
    tags: ['map', 'migration', 'professional-services', 'partners', 'examtopics', 'sample-exam'],
    question:
      'As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO.)',
    options: [
      'AWS Partners',
      'AWS Artifact',
      'AWS Professional Services',
      'Amazon Athena',
      'Amazon PinPoint',
    ],
    correctAnswers: [0, 2],
    explanation:
      'MAP combines AWS funding, tools, and methodology with AWS Professional Services and the AWS Partner Network to help enterprises migrate at scale. Artifact hosts compliance reports; Athena queries S3 data; Pinpoint is a customer engagement messaging service—not core MAP delivery mechanisms.',
  },
  {
    id: 'cc-104',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['regions', 'global-infrastructure', 'examtopics', 'sample-exam'],
    question:
      'Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)',
    options: [
      "The AWS Region's security level.",
      'Data sovereignty.',
      'Cost.',
      'The planned number of VPCs.',
      "Geographic proximity to the company's location.",
    ],
    correctAnswers: [1, 2],
    explanation:
      'Region choice should reflect where data may legally reside (data sovereignty and compliance) and how pricing varies by Region. AWS applies a consistent shared responsibility security model across Regions—there is no tiered "security level" per Region. VPC count is a design detail inside a Region, not a primary Region-selection driver; latency to users matters more than proximity to the company headquarters alone.',
  },
  {
    id: 'cc-105',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['availability-zones', 'global-infrastructure', 'examtopics', 'sample-exam'],
    question:
      'Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?',
    options: [
      'Create private connection to your data center.',
      'Achieve global high availability.',
      'Automate the process of provisioning new compute resources.',
      'Make synchronous replication of your data possible.',
    ],
    correctAnswers: [3],
    explanation:
      'Low-latency networking between Availability Zones in the same Region supports synchronous replication for highly available architectures—for example Multi-AZ databases that keep a standby copy current with minimal delay. Private connections to a data center use Direct Connect or VPN; global availability spans Regions; automated provisioning uses services such as Auto Scaling or CloudFormation.',
  },
  {
    id: 'cc-106',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['availability-zones', 'edge-locations', 'global-infrastructure', 'examtopics', 'sample-exam'],
    question:
      'Which of the following is true regarding the AWS availability zones and edge locations?',
    options: [
      'Edge locations are located in separate Availability Zones worldwide to serve global customers.',
      'An availability zone exists within an edge location to distribute content globally with low latency.',
      'An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.',
      'An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.',
    ],
    correctAnswers: [3],
    explanation:
      'Availability Zones are isolated data centers within an AWS Region for resilient, low-latency workloads. Edge locations (CloudFront points of presence) are separate global sites in many cities used to cache and deliver content closer to users—they are not AZs inside Regions, and AZs are not collections of edge locations.',
  },
  {
    id: 'cc-107',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['benefits', 'economies-of-scale', 'examtopics', 'sample-exam'],
    question: 'What does the term “Economies of scale” mean?',
    options: [
      'It means that you save more when you consume more.',
      'It means as more time passes using AWS, you pay more for its services.',
      'It means that AWS will continuously lower costs as it grows.',
      'It means that you have the ability to pay as you go.',
    ],
    correctAnswers: [2],
    explanation:
      'Economies of scale means that as AWS grows and aggregates demand, it can operate more efficiently and pass savings to customers through lower prices over time. Saving more as you personally consume more describes volume/tiered pricing for an individual account; pay-as-you-go is a separate cloud pricing model; usage time alone does not inherently increase what you pay.',
  },
  {
    id: 'cc-108',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['serverless', 'cost', 'benefits', 'examtopics', 'sample-exam'],
    question:
      'Why are Serverless Architectures more economical than Server-based Architectures?',
    options: [
      'Serverless Architectures use new powerful computing devices.',
      'With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.',
      'When you reserve serverless capacity, you will get large discounts compared to server reservation.',
      'With Serverless Architectures you have the ability to scale automatically up or down as demand changes.',
    ],
    correctAnswers: [1],
    explanation:
      'Server-based models such as always-on EC2 instances incur charges while servers run, even at idle. Serverless services such as AWS Lambda bill primarily for actual execution time and requests, so you avoid paying for unused capacity. Auto scaling is a benefit but not the core cost comparison in this answer; serverless does not rely on special hardware or traditional capacity reservations for its economics.',
  },
  {
    id: 'cc-109',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['resource-groups', 'operations', 'practice-exam-7', 'sample-exam'],
    question:
      'You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?',
    options: [
      'AWS Resource Groups.',
      'AWS Placement Groups.',
      'AWS Management Console.',
      'AWS Tag Editor.',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Resource Groups let you create custom console views of resources that share tags or other criteria—useful for separating dev, test, and production environments. Placement Groups influence EC2 placement for performance; the Management Console is the overall UI; Tag Editor bulk-edits tags but does not provide saved environment dashboards.',
  },
  {
    id: 'cc-110',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['ec2', 'elasticity', 'cost', 'practice-exam-7', 'sample-exam'],
    question:
      'The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?',
    options: [
      'AWS allows customers to launch powerful EC2 instances to handle spikes in load.',
      'AWS allows customers to pay upfront to get bigger discounts.',
      'AWS allows customers to launch and terminate EC2 instances based on demand.',
      'AWS allows customers to choose cheaper types of EC2 instances that best fit their needs.',
    ],
    correctAnswers: [2],
    explanation:
      'Elasticity—launching and terminating (or scaling) capacity with demand—avoids paying for idle servers during low-traffic periods, a key cloud economic benefit. Larger instance types, upfront payments, and instance type selection help cost optimization but do not capture the core pay-for-what-you-use elasticity advantage.',
  },
  {
    id: 'cc-111',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'design-principles', 'practice-exam-7', 'sample-exam'],
    question:
      'What are some key design principles for designing public cloud systems? (Choose TWO)',
    options: [
      'Reserved capacity instead of on demand.',
      'Loose coupling over tight coupling.',
      'Servers instead of managed services.',
      'Disposable resources instead of fixed servers.',
      'Multi-AZ deployments instead of multi-region deployments.',
    ],
    correctAnswers: [1, 3],
    explanation:
      'Cloud-native design favors loosely coupled components and disposable (ephemeral) resources that can be replaced rather than pet servers you maintain indefinitely. On-demand capacity, managed services, and multi-Region designs are often preferred over the opposite choices in this question.',
  },
  {
    id: 'cc-112',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['high-availability', 'regions', 'practice-exam-7', 'sample-exam'],
    question:
      'You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?',
    options: [
      'There is no need to architect for these capabilities in AWS, as AWS is redundant by default.',
      'Deploy the application in a single Availability Zone.',
      'Deploy the application in multiple Availability Zones in a single AWS region.',
      'Deploy the application in multiple Availability Zones in multiple AWS regions.',
    ],
    correctAnswers: [3],
    explanation:
      'Maximum fault tolerance spans multiple AZs and multiple Regions so a Regional or AZ outage does not take the application offline globally. AWS provides building blocks for redundancy, but you must architect for it; a single AZ offers the least resilience.',
  },
  {
    id: 'cc-113',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['health-dashboard', 'practice-exam-7', 'sample-exam'],
    question: 'What can you access by visiting the URL: http://status.aws.amazon.com?',
    options: [
      'AWS Billing Dashboard.',
      'AWS Cost Dashboard.',
      'AWS Service Health Dashboard.',
      'AWS Security Dashboard.',
    ],
    correctAnswers: [2],
    explanation:
      'status.aws.amazon.com is the public AWS Service Health Dashboard showing current and historical AWS service availability events. Billing and cost dashboards require signing in to the AWS Management Console; there is no public “security dashboard” at that URL.',
  },
  {
    id: 'cc-114',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['ec2', 'benefits', 'practice-exam-8', 'sample-exam'],
    question:
      'Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)',
    options: [
      'Improves Fault-Tolerance.',
      'Provides your business with a seamless remote accessibility.',
      'Prevents unauthorized users from getting into your network.',
      'Provides automatic data backups.',
      'Can be scaled manually in a shorter period of time.',
    ],
    correctAnswers: [0, 4],
    explanation:
      'EC2 supports resilient architectures (multiple instances/AZs) and lets you add or remove capacity in minutes compared with procuring physical hardware. Remote access is also possible with traditional servers; network protection requires your security design; automatic backups require services such as EBS snapshots or AWS Backup.',
  },
  {
    id: 'cc-115',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['control-tower', 'governance', 'practice-exam-8', 'sample-exam'],
    question:
      'Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?',
    options: [
      'AWS Control Tower.',
      'Amazon Macie.',
      'AWS Systems Manager Patch Manager.',
      'AWS Security Hub.',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Control Tower automates a multi-account landing zone with guardrails, account vending, and governance best practices. Macie finds sensitive S3 data; Patch Manager patches instances; Security Hub aggregates security findings—they do not set up multi-account environments end-to-end.',
  },
  {
    id: 'cc-116',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['tagging', 'operations', 'practice-exam-8', 'sample-exam'],
    question:
      'Which of the following makes it easier for you to categorize, manage and filter your resources?',
    options: [
      'Amazon CloudWatch.',
      'AWS Service Catalog.',
      'AWS Directory Service.',
      'AWS Tagging.',
    ],
    correctAnswers: [3],
    explanation:
      'AWS resource tags are key-value metadata used to organize, filter, and allocate costs across resources in the console and APIs. CloudWatch monitors metrics; Service Catalog distributes approved products; Directory Service hosts Active Directory.',
  },
  {
    id: 'cc-117',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['high-availability', 'availability-zones', 'practice-exam-8', 'sample-exam'],
    question:
      'How can you increase your application’s fault-tolerance while it is being hosted in AWS?',
    options: [
      'Deploy your application across multiple EC2 instances.',
      'Deploy your application across multiple Availability Zones.',
      'Host your application on one powerful EC2 instance type instead of multiple smaller instances.',
      'Deploy the underlying application resources across multiple subnets.',
    ],
    correctAnswers: [1],
    explanation:
      'Spreading workloads across multiple Availability Zones protects against failure of a single data center within a Region. Multiple instances in one AZ still share AZ failure risk; one large instance is a single point of failure; subnets alone do not span isolated AZ infrastructure.',
  },
  {
    id: 'cc-118',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'design-principles', 'practice-exam-8', 'sample-exam'],
    question: 'Which of the following is a benefit of the “Loose Coupling” architecture principle?',
    options: [
      'It eliminates the need for change management.',
      'It allows for Cross-Region Replication.',
      'It helps AWS customers reduce Privileged Access to AWS resources.',
      'It allows individual application components or services to be modified without affecting other components.',
    ],
    correctAnswers: [3],
    explanation:
      'Loosely coupled systems interact through well-defined interfaces so you can change, deploy, or fail over one component independently. Change management remains important; cross-Region replication is a data resilience technique; privileged access reduction relates to IAM practices.',
  },
  {
    id: 'cc-119',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['deployment-models', 'practice-exam-8', 'sample-exam'],
    question:
      'Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?',
    options: ['On-premises.', 'IaaS.', 'PaaS.', 'Cloud.'],
    correctAnswers: [3],
    explanation:
      'Public cloud deployment (answer “Cloud”) moves infrastructure to a cloud provider so you do not operate your own physical data centers. On-premises keeps facilities in-house; IaaS and PaaS are service models that can run in public or private cloud contexts.',
  },
  {
    id: 'cc-120',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['elasticity', 'cost', 'practice-exam-8', 'sample-exam'],
    question:
      'The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)',
    options: [
      'Deploy your resources across multiple Availability Zones.',
      'Use Amazon EC2 Auto Scaling.',
      'Deploy your resources in another region.',
      'Use Elastic Load Balancing.',
      'Use Serverless Computing whenever possible.',
    ],
    correctAnswers: [1, 4],
    explanation:
      'Auto Scaling adjusts capacity to demand; serverless services scale automatically with usage—both align capacity to actual load and reduce idle spend. Multi-AZ and multi-Region improve availability; ELB distributes traffic but does not by itself scale compute capacity.',
  },
  {
    id: 'cc-121',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['availability-zones', 'global-infrastructure', 'practice-exam-8', 'sample-exam'],
    question:
      'Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?',
    options: [
      'It is a data center designed to be completely isolated from other data centers in the same region.',
      'It is a collection of data centers distributed in multiple countries.',
      'It is a logically isolated network of the AWS Cloud.',
      'It is a distinct location within a region that is insulated from « failures in other Availability Zones.',
    ],
    correctAnswers: [3],
    explanation:
      'An Availability Zone is one or more discrete data centers in a Region, engineered to be isolated from failures in other AZs while connected through low-latency links. AZs are within one Region, not multiple countries; a VPC is a logical network, not an AZ definition.',
  },
  {
    id: 'cc-122',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['disaster-recovery', 'regions', 'practice-exam-8', 'sample-exam'],
    question:
      'AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple […].',
    options: ['Regions.', 'Transportation devices.', 'Support plans.', 'Edge locations.'],
    correctAnswers: [0],
    explanation:
      'Multi-Region architectures support disaster recovery and business continuity when a Regional outage occurs. Snowball and edge locations serve migration and content delivery—not primary DR Region strategy; support plans do not deploy infrastructure.',
  },
  {
    id: 'cc-123',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'performance-efficiency', 'practice-exam-8', 'sample-exam'],
    question:
      'Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?',
    options: [
      'Operational Excellence.',
      'Security.',
      'Performance Efficiency.',
      'Reliability.',
    ],
    correctAnswers: [2],
    explanation:
      'The Performance Efficiency pillar focuses on using the right resource types and sizes (compute, storage, database) for your workload and adapting as needs evolve. Operational Excellence covers operations; Security protects systems; Reliability targets availability and recovery.',
  },
  {
    id: 'cc-124',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['availability-zones', 'global-infrastructure', 'practice-exam-8', 'sample-exam'],
    question:
      'Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?',
    options: [
      'AWS Regions.',
      'Availability Zones.',
      'Edge locations.',
      'Amazon CloudFront.',
    ],
    correctAnswers: [1],
    explanation:
      'Availability Zones are built from one or more discrete data centers with independent power, networking, and connectivity in separate facilities within a Region. Regions are geographic areas containing multiple AZs; edge locations cache content; CloudFront is the CDN service using edge locations.',
  },
  {
    id: 'cc-125',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['high-availability', 'availability-zones', 'practice-exam-8', 'sample-exam'],
    question:
      'How many Availability Zones should compute resources be provisioned across to achieve high availability?',
    options: [
      'A minimum of one.',
      'A minimum of two.',
      'A minimum of three.',
      'A minimum of four or more.',
    ],
    correctAnswers: [1],
    explanation:
      'High availability within a Region typically requires at least two AZs so workloads survive the loss of one AZ. A single AZ has no cross-AZ failover; three or more AZs can add resilience but two is the minimum HA pattern emphasized on the exam.',
  },
  {
    id: 'cc-126',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['global-infrastructure', 'regions', 'practice-exam-8', 'sample-exam'],
    question: 'The AWS Cloud’s multiple Regions are an example of:',
    options: ['Agility.', 'Global infrastructure.', 'Elasticity.', 'Pay-as-you-go pricing.'],
    correctAnswers: [1],
    explanation:
      'AWS Regions worldwide are part of AWS global infrastructure—geographically distributed locations where you deploy resources. Agility is rapid provisioning; elasticity is scaling with demand; pay-as-you-go is a pricing model.',
  },
  {
    id: 'cc-127',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['high-availability', 'well-architected', 'practice-exam-8', 'sample-exam'],
    question:
      'Which is a recommended pattern for designing a highly available architecture on AWS?',
    options: [
      'Ensure that components have low-latency network connectivity.',
      'Run enough Amazon EC2 instances to operate at peak load.',
      'Ensure that the application is designed to accommodate failure of any single component.',
      'Use a monolithic application that handles all operations.',
    ],
    correctAnswers: [2],
    explanation:
      'Design for failure by assuming any single component can fail and building redundancy (multi-AZ, auto recovery, loose coupling). Low latency alone does not ensure HA; provisioning only for peak is costly and not inherently resilient; monoliths increase blast radius.',
  },
  {
    id: 'cc-128',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['elasticity', 'pricing', 'practice-exam-8', 'sample-exam'],
    question:
      'Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)',
    options: [
      'High availability.',
      'Shared security model.',
      'Elasticity.',
      'Pay-as-you-go pricing.',
      'Reliability.',
    ],
    correctAnswers: [2, 3],
    explanation:
      'Elasticity matches capacity to variable demand while pay-as-you-go billing charges for actual usage—together they avoid over-provisioning fixed capacity. High availability and reliability improve uptime; the shared responsibility model addresses security division—not dynamic cost savings directly.',
  },
  {
    id: 'cc-129',
    domain: 'cloud-concepts',
    task: '2.2',
    tags: ['security-resources', 'free', 'practice-exam-9', 'sample-exam'],
    question: 'Which of the following security-related actions are available at no cost?',
    options: [
      'Calling AWS Support.',
      'Contacting AWS Professional Services to request a workshop.',
      'Accessing forums, blogs, and whitepapers.',
      'Attending AWS classes at a local university.',
    ],
    correctAnswers: [2],
    explanation:
      'AWS documentation, forums, blogs, and whitepapers are freely available online. AWS Support plans charge fees; Professional Services and training are paid engagements beyond free self-service content.',
  },
  {
    id: 'cc-130',
    domain: 'cloud-concepts',
    task: '2.1',
    tags: ['shared-responsibility', 'practice-exam-9', 'sample-exam'],
    question:
      'According to the AWS shared responsibility model what is the sole responsibility of AWS?',
    options: [
      'Application security.',
      'Edge location management.',
      'Patch management.',
      'Client-side data.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS solely manages global infrastructure including edge locations and Regions. Application security and client-side data are customer responsibilities; patch management is shared between AWS and customers depending on the service.',
  },
  {
    id: 'cc-131',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'practice-exam-9', 'sample-exam'],
    question:
      'Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)',
    options: [
      'Multiple Availability Zones.',
      'Performance efficiency.',
      'Security.',
      'Encryption usage.',
      'High availability.',
    ],
    correctAnswers: [1, 2],
    explanation:
      'The six Well-Architected pillars are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Multiple AZs and high availability are architecture patterns; encryption is a security practice within the Security pillar.',
  },
  {
    id: 'cc-132',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'design-principles', 'practice-exam-9', 'sample-exam'],
    question:
      'Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)',
    options: [
      'Use manual monitoring.',
      'Use fixed servers.',
      'Implement loose coupling.',
      'Rely on individual components.',
      'Design for scalability.',
    ],
    correctAnswers: [2, 4],
    explanation:
      'Breaking monoliths into loosely coupled, independently scalable services supports cloud elasticity and resilience. Manual-only monitoring and fixed servers oppose cloud automation; “rely on individual components” without redundancy increases failure risk.',
  },
  {
    id: 'cc-133',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['elasticity', 'design-principles', 'practice-exam-9', 'sample-exam'],
    question:
      'When architecting cloud applications, which of the following are a key design principle?',
    options: [
      'Use the largest instance possible.',
      'Provision capacity for peak load.',
      'Use the Scrum development process.',
      'Implement elasticity.',
    ],
    correctAnswers: [3],
    explanation:
      'Elasticity—scaling resources up and down with demand—is a core cloud design principle. Oversized instances and peak-only provisioning waste cost; Scrum is a development methodology, not an infrastructure design principle.',
  },
  {
    id: 'cc-134',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['tco', 'elasticity', 'practice-exam-9', 'sample-exam'],
    question: 'Which AWS feature will reduce the customer’s total cost of ownership (TCO)?',
    options: [
      'Shared responsibility security model.',
      'Single tenancy.',
      'Elastic computing.',
      'Encryption.',
    ],
    correctAnswers: [2],
    explanation:
      'Elastic computing lets you pay only for capacity you use and avoid over-provisioning idle hardware—a primary TCO benefit versus fixed on-premises capacity. Shared responsibility and encryption are operational/security models; single tenancy typically increases cost.',
  },
  {
    id: 'cc-135',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['benefits', 'practice-exam-9', 'sample-exam'],
    question: 'Which of the following is a benefit of using the AWS Cloud?',
    options: [
      'Permissive security removes the administrative burden.',
      'Ability to focus on revenue-generating activities.',
      'Control over cloud network hardware.',
      'Choice of specific cloud hardware vendors.',
    ],
    correctAnswers: [1],
    explanation:
      'By offloading undifferentiated infrastructure work to AWS, teams focus on differentiating business features that drive revenue. Security remains a shared responsibility; customers do not choose AWS’s underlying hardware vendors or physical network gear.',
  },
  {
    id: 'cc-136',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['economies-of-scale', 'pricing', 'practice-exam-9', 'sample-exam'],
    question: 'How do customers benefit from Amazon’s massive economies of scale?',
    options: [
      'Periodic price reductions as the result of Amazon’s operational efficiencies.',
      'New Amazon EC2 instance types providing the latest hardware.',
      'The ability to scale up and down when needed.',
      'Increased reliability in the underlying hardware of Amazon EC2 instances.',
    ],
    correctAnswers: [0],
    explanation:
      'AWS passes efficiency savings to customers through ongoing price reductions and lower per-unit costs as AWS scales. New instance types, elasticity, and reliability are separate cloud benefits—not the direct definition of economies-of-scale price benefit on this item.',
  },
  {
    id: 'cc-137',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['global-infrastructure', 'regions', 'availability-zones', 'practice-exam-9', 'sample-exam'],
    question:
      'Which of the following are main components of the AWS global infrastructure? (Select TWO)',
    options: [
      'Resource groups.',
      'Availability Zones.',
      'Security groups.',
      'Regions.',
      'Amazon Machine Images (AMIS).',
    ],
    correctAnswers: [1, 3],
    explanation:
      'AWS global infrastructure is built from Regions (geographic areas) and multiple isolated Availability Zones within each Region. Resource groups organize resources; security groups are VPC firewalls; AMIs are EC2 launch templates.',
  },
  {
    id: 'cc-138',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['global-audience', 'latency', 'practice-exam-9', 'sample-exam'],
    question:
      'What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)',
    options: [
      'Companies can deploy applications in multiple AWS Regions to reduce latency.',
      'Amazon Translate automatically translates third-party website interfaces into multiple languages.',
      'Amazon CloudFront has multiple edge locations around the world to reduce latency.',
      'Amazon Comprehend allows users to build applications that can respond to user requests in many languages.',
      'Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Multi-Region deployments and CloudFront edge caching place content and compute closer to global users, reducing latency. Translate and Comprehend are ML language services, not automatic global latency solutions; ELB distributes within a Region—it is not a cross-Region global traffic manager.',
  },
  {
    id: 'cc-139',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'design-principles', 'practice-exam-9', 'sample-exam'],
    question:
      'Which of the following is an important architectural design principle when designing cloud applications?',
    options: [
      'Use multiple Availability Zones.',
      'Use tightly coupled components.',
      'Use open source software.',
      'Provision extra capacity.',
    ],
    correctAnswers: [0],
    explanation:
      'Designing across multiple AZs improves fault tolerance within a Region. Tight coupling and static extra capacity oppose cloud best practices; open source is a licensing choice, not a core AWS architectural principle.',
  },
  {
    id: 'cc-140',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['serverless', 'benefits', 'practice-exam-10', 'sample-exam'],
    question:
      'A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?',
    options: [
      'Amazon Elastic Compute Cloud (Amazon EC2).',
      'AWS Lambda.',
      'Amazon DynamoDB.',
      'AWS CodeCommit.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Lambda runs code without provisioning servers, eliminating physical or virtual machine management for developers. EC2 requires instances; DynamoDB is a database; CodeCommit is source control.',
  },
  {
    id: 'cc-141',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['hybrid', 'architecture', 'practice-exam-10', 'sample-exam'],
    question:
      'Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?',
    options: [
      'Cloud-native.',
      'Partner network.',
      'Hybrid architecture.',
      'Infrastructure as a service.',
    ],
    correctAnswers: [2],
    explanation:
      'Hybrid architecture combines cloud resources (EC2) with on-premises systems connected via VPN or Direct Connect. Cloud-native is built for cloud; partner network refers to APN; IaaS is a service model, not this topology name.',
  },
  {
    id: 'cc-142',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['global-infrastructure', 'regions', 'practice-exam-10', 'sample-exam'],
    question:
      'Which of the following is a correct relationship between regions, Availability Zones, and edge locations?',
    options: [
      'Data centers contain regions.',
      'Regions contain Availability Zones.',
      'Availability Zones contain edge locations.',
      'Edge locations contain regions.',
    ],
    correctAnswers: [1],
    explanation:
      'Each AWS Region contains multiple isolated Availability Zones. Edge locations are separate CloudFront POP sites globally—they are not nested inside AZs, and regions are not contained in a single data center.',
  },
  {
    id: 'cc-143',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'decoupling', 'practice-exam-10', 'sample-exam'],
    question:
      'A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?',
    options: [
      'Implementing elasticity enabling the application to scale up or scale down as demand changes.',
      'Enabling several EC2 instances to run in parallel to achieve better performance.',
      'Focusing on decoupling components by isolating them and ensuring individual components can function when other components.',
      'Doubling EC2 computing resources to increase system fault tolerance.',
    ],
    correctAnswers: [2],
    explanation:
      'Loose coupling and isolation let components fail independently without cascading outages—core reliability design. Elasticity and more instances help scale and redundancy but do not fix tight coupling; doubling resources alone does not decouple architecture.',
  },
  {
    id: 'cc-144',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['partners', 'professional-services', 'practice-exam-10', 'sample-exam'],
    question:
      'A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?',
    options: [
      'AWS Partner Network Technology Partners.',
      'AWS Marketplace.',
      'AWS Partner Network Consulting Partners.',
      'AWS Service Catalog.',
    ],
    correctAnswers: [2],
    explanation:
      'AWS Partner Network (APN) Consulting Partners help customers design, build, and migrate workloads. Technology Partners sell software products; Marketplace lists third-party products; Service Catalog distributes approved internal templates.',
  },
  {
    id: 'cc-145',
    domain: 'cloud-concepts',
    task: '1.1',
    tags: ['agility', 'provisioning', 'practice-exam-10', 'sample-exam'],
    question: 'How does AWS shorten the time to provision IT resources?',
    options: [
      'It supplies an online IT ticketing platform for resource requests.',
      'It supports automatic code validation services.',
      'It provides the ability to programmatically provision existing resources.',
      'It automates the resource request process from a company’s IT vendor list.',
    ],
    correctAnswers: [2],
    explanation:
      'APIs, CLI, SDKs, and IaC tools let teams provision AWS resources in minutes programmatically instead of waiting for physical hardware. AWS does not replace internal ticketing or vendor procurement workflows directly.',
  },
  {
    id: 'cc-146',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['trusted-advisor', 'cost-optimization', 'practice-exam-10', 'sample-exam'],
    question:
      'Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?',
    options: [
      'AWS Cost Explorer.',
      'AWS Trusted Advisor.',
      'Consolidated billing.',
      'Detailed billing.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS Trusted Advisor analyzes your account against best practices in cost optimization, performance, security, fault tolerance, and service limits. Cost Explorer visualizes spend; consolidated billing merges invoices; detailed billing is raw usage data.',
  },
  {
    id: 'cc-147',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['auto-scaling', 'elasticity', 'practice-exam-10', 'sample-exam'],
    question: 'What technology enables compute capacity to adjust as loads change?',
    options: [
      'Load balancing.',
      'Automatic failover.',
      'Round robin.',
      'Auto Scaling.',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon EC2 Auto Scaling automatically adds or removes instances based on demand metrics or schedules. Load balancing distributes traffic; failover recovers from failures; round robin is a scheduling algorithm used by load balancers.',
  },
  {
    id: 'cc-148',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['high-availability', 'well-architected', 'practice-exam-10', 'sample-exam'],
    question:
      'Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?',
    options: [
      'Implement automation.',
      'Design for agility.',
      'Design for failure.',
      'Implement elasticity.',
    ],
    correctAnswers: [2],
    explanation:
      'Multi-AZ designs assume components can fail and build redundancy so the workload survives AZ outages—”design for failure.” Automation, agility, and elasticity are related pillars but multi-AZ specifically targets failure tolerance.',
  },
  {
    id: 'cc-149',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['well-architected', 'design-principles', 'practice-exam-10', 'sample-exam'],
    question:
      'According to best practices, how should an application be designed to run in the AWS Cloud?',
    options: [
      'Use tightly coupled components.',
      'Use loosely coupled components.',
      'Use infrequently coupled components.',
      'Use frequently coupled components.',
    ],
    correctAnswers: [1],
    explanation:
      'Loosely coupled services communicate through well-defined interfaces (APIs, queues, events) so teams can deploy and fail independently—a foundational cloud architecture practice.',
  },
  {
    id: 'cc-150',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['tco', 'cost-optimization', 'practice-exam-11', 'sample-exam'],
    question: 'How can a company reduce its Total Cost of Ownership (TCO) using AWS?',
    options: [
      'By minimizing large capital expenditures.',
      'By having no responsibility for third-party license costs.',
      'By having no operational expenditures.',
      'By having AWS manage applications.',
    ],
    correctAnswers: [0],
    explanation:
      'Cloud shifts upfront data center CapEx (servers, facilities) to pay-as-you-go OpEx, reducing large capital outlays. Customers still pay for usage (OpEx), manage applications, and may still owe third-party license costs depending on the workload.',
  },
  {
    id: 'cc-151',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['managed-services', 'rds', 'practice-exam-11', 'sample-exam'],
    question:
      'Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)',
    options: [
      'Patching databases software.',
      'Testing application releases.',
      'Backing up databases.',
      'Creating database schema.',
      'Running penetration tests.',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Managed services such as Amazon RDS automate engine patching and offer backup/snapshot capabilities so teams spend less time on undifferentiated maintenance. Schema design, release testing, and security testing remain customer responsibilities.',
  },
  {
    id: 'cc-152',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['regions', 'global-infrastructure', 'practice-exam-11', 'sample-exam'],
    question:
      'A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?',
    options: [
      'Contact an AWS Account Manager to sign a new contract.',
      'Move an Availability Zone to the new Region.',
      'Begin deploying resources in the second Region.',
      'Download the AWS Management Console for the new Region.',
    ],
    correctAnswers: [2],
    explanation:
      'Regions are independent geographic areas—enable the Region in your account (if required) and deploy resources there. AZs cannot be moved between Regions; no separate console download or new contract is required to start using another Region.',
  },
  {
    id: 'cc-153',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['professional-services', 'migration', 'practice-exam-11', 'sample-exam'],
    question:
      'What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?',
    options: [
      'AWS Enterprise Support.',
      'AWS Solutions Architects.',
      'AWS Professional Services.',
      'AWS Account Managers.',
    ],
    correctAnswers: [2],
    explanation:
      'AWS Professional Services delivers paid consulting engagements to accelerate migrations and cloud adoption. Solutions Architects provide best-practice guidance; Account Managers handle commercial relationships; Enterprise Support is a support plan tier.',
  },
  {
    id: 'cc-154',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['high-availability', 'multi-az', 'practice-exam-11', 'sample-exam'],
    question:
      'What is an advantage of deploying an application across multiple Availability Zones?',
    options: [
      'There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.',
      'The application will have higher availability because it can withstand a service disruption in one Availability Zone.',
      'There will be better coverage as Availability Zones are geographically distant and can serve a wider area.',
      'There will be decreased application latency that will improve the user experience.',
    ],
    correctAnswers: [1],
    explanation:
      'Multi-AZ architectures survive the loss of a single Availability Zone within a Region. Multi-AZ does not protect against an entire Region failure (use multi-Region for that); AZs in a Region are separate failure domains but not global edge points for latency.',
  },
  {
    id: 'cc-155',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['cloudfront', 'edge-locations', 'practice-exam-11', 'sample-exam'],
    question: 'What can AWS edge locations be used for? (Select TWO)',
    options: [
      'Hosting applications.',
      'Delivering content closer to users.',
      'Running NoSQL database caching services.',
      'Reducing traffic on the server by caching responses.',
      'Sending notification messages to end users.',
    ],
    correctAnswers: [1, 3],
    explanation:
      'CloudFront edge locations cache and deliver content near users to reduce latency and origin load. They are not general application hosting environments, managed NoSQL databases, or SNS notification endpoints.',
  },
  {
    id: 'cc-157',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['cloud-adoption', 'business-value', 'practice-exam-11', 'sample-exam'],
    question:
      'One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:',
    options: [
      'It allows the business to eliminate IT bills.',
      'It allows the business to put a server in each customer’s data center.',
      'It allows the business to focus on business activities.',
      'It allows the business to leave servers unpatched.',
    ],
    correctAnswers: [2],
    explanation:
      'Moving to AWS lets organizations focus on differentiating work instead of undifferentiated data center heavy lifting. Cloud still incurs IT spend; patching remains a shared responsibility; AWS does not place servers in customer premises.',
  },
  {
    id: 'cc-158',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['disaster-recovery', 'regions', 'practice-exam-11', 'sample-exam'],
    question:
      'How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?',
    options: [
      'Deploy applications across multiple Availability Zones within an AWS Region.',
      'Use a hybrid cloud computing deployment model within the geographic area.',
      'Deploy applications across multiple AWS Regions.',
      'Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.',
    ],
    correctAnswers: [2],
    explanation:
      'Multi-Region architectures survive Region-wide disasters because each Region is a separate geographic area. Multi-AZ protects against AZ failure within one Region; Artifact stores compliance documents, not application failover.',
  },
  {
    id: 'cc-159',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['disaster-recovery', 'high-availability', 'practice-exam-11', 'sample-exam'],
    question: 'Which disaster recovery scenario offers the lowest probability of down time?',
    options: [
      'Backup and restore.',
      'Pilot light.',
      'Warm standby.',
      'Multi-site active-active.',
    ],
    correctAnswers: [3],
    explanation:
      'Multi-site active-active runs production workloads in multiple sites simultaneously with traffic distributed—lowest downtime (RTO/RPO near zero). Backup and restore, pilot light, and warm standby require more recovery time after a failure.',
  },
  {
    id: 'cc-160',
    domain: 'cloud-concepts',
    task: '1.2',
    tags: ['capex', 'opex', 'migration', 'practice-exam-11', 'sample-exam'],
    question:
      'A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?',
    options: [
      'Moving from variable operational expense (opex) to upfront capital expense (capex).',
      'Moving from upfront capital expense (capex) to variable capital expense (capex).',
      'Moving from upfront capital expense (capex) to variable operational expense (opex).',
      'Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex).',
    ],
    correctAnswers: [2],
    explanation:
      'On-premises infrastructure typically requires large upfront hardware CapEx; AWS converts that to variable OpEx billed for actual usage. Cloud does not eliminate all IT spending—you still pay ongoing operational costs for consumed services.',
  },
]
