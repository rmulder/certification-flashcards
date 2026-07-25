import type { Card } from '../../../core/types'

/** Cards aligned to the AWS vs. customer responsibility matrix (CLF-C02 Domain 2.1). */
export const sharedResponsibilitySupplementCards: Card[] = [
  {
    id: 'sc-081',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'physical-security', 'responsibility-matrix'],
    question:
      'Under the AWS Shared Responsibility Model, which statement about physical security is correct?',
    options: [
      'Customers must control access to AWS data center buildings.',
      'AWS protects data centers and controls physical access; customers have no physical security duties for AWS facilities.',
      'Customers and AWS equally share badge access to every AWS Region.',
      'Physical security is entirely the customer\'s responsibility when using EC2.',
    ],
    correctAnswers: [1],
    explanation:
      'Physical security is security OF the cloud: AWS secures facilities, hardware, and environmental controls. Customers do not manage AWS data center physical access.',
  },
  {
    id: 'sc-082',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'network-security', 'responsibility-matrix'],
    question:
      'In the network security category of the shared responsibility model, which task is AWS responsible for?',
    options: [
      'Configuring security group rules on your EC2 instances',
      'Creating network ACL rules for your VPC subnets',
      'Securing the AWS global network and cloud infrastructure',
      'Designing your application\'s TLS certificate rotation',
    ],
    correctAnswers: [2],
    explanation:
      'AWS secures the underlying network infrastructure. Customers configure virtual network controls such as security groups (instance level) and network ACLs (subnet level).',
  },
  {
    id: 'sc-083',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'network-security', 'responsibility-matrix'],
    question:
      'According to the shared responsibility model, which network controls are customer responsibilities in a VPC? (Select TWO.)',
    options: [
      'Configuring security groups for EC2 instances',
      'Patching the VPC hypervisor',
      'Configuring network ACLs for subnets',
      'Operating AWS edge routers worldwide',
      'Replacing failed physical switches in AWS data centers',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Customers configure security groups and NACLs to control traffic to and within their VPC. AWS operates and secures the physical and global network infrastructure behind the VPC service.',
  },
  {
    id: 'sc-084',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'data-protection', 'responsibility-matrix'],
    question:
      'In the data protection category, which pairing correctly matches AWS and customer responsibilities?',
    options: [
      'AWS implements encryption on all customer objects automatically; customers choose nothing.',
      'AWS provides encryption tools and services; customers implement encryption and manage access to their data.',
      'Customers build KMS hardware; AWS manages all bucket policies without customer input.',
      'AWS classifies all customer data; customers operate physical HSMs in every Region.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS offers encryption capabilities (for example KMS, S3 encryption options, TLS on services). Customers choose encryption settings, manage keys and access policies, and protect data in their applications.',
  },
  {
    id: 'sc-085',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'application-security', 'responsibility-matrix'],
    question:
      'For application security in the shared responsibility model, who is responsible for securing application code and addressing software vulnerabilities?',
    options: [
      'AWS, for all code running on any AWS service',
      'The customer',
      'AWS Support during Business hours only',
      'Amazon Inspector, without any customer action',
    ],
    correctAnswers: [1],
    explanation:
      'AWS ensures a secure cloud infrastructure and offers tools (WAF, Inspector, etc.). Customers secure their applications, fix vulnerabilities in their code, and configure those tools appropriately.',
  },
  {
    id: 'sc-086',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'application-security', 'responsibility-matrix'],
    question:
      'Which statement best describes AWS\'s role in the application security category of the shared responsibility model?',
    options: [
      'AWS writes and tests all customer application code.',
      'AWS ensures secure infrastructure; customers secure workloads and applications they deploy on it.',
      'Customers maintain AWS data center application firewalls.',
      'Application security is solely an AWS responsibility when using managed services.',
    ],
    correctAnswers: [1],
    explanation:
      'Application security splits infrastructure (AWS) from what you run on it (customer). Managed services shift some stack layers to AWS, but customer data, configuration, and custom code remain customer responsibilities.',
  },
  {
    id: 'sc-087',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'iam', 'responsibility-matrix'],
    question:
      'In IAM and access control, which division of responsibility is correct?',
    options: [
      'Customers provide IAM; AWS configures every user\'s MFA device.',
      'AWS provides IAM tools; customers configure policies, permissions, and enable MFA for their identities.',
      'AWS assigns root user credentials to each employee.',
      'IAM is optional and AWS automatically grants least privilege to all resources.',
    ],
    correctAnswers: [1],
    explanation:
      'AWS supplies IAM, Identity Center, and related authentication infrastructure. Customers define who can access what through policies, roles, groups, and MFA enforcement.',
  },
  {
    id: 'sc-088',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'patch-management', 'responsibility-matrix'],
    question:
      'For patch management, which tasks belong to AWS? (Select TWO.)',
    options: [
      'Patching the guest operating system on Amazon EC2 instances you launch',
      'Patching and updating AWS-managed infrastructure and hypervisors',
      'Updating your custom application dependencies in a container image',
      'Maintaining and patching managed service infrastructure (for example the RDS engine platform AWS manages)',
      'Installing antivirus on developer laptops',
    ],
    correctAnswers: [1, 3],
    explanation:
      'AWS patches the cloud infrastructure and the portions of managed services AWS operates (such as the RDS engine maintenance AWS performs). Customers patch guest OS on EC2, their applications, and container images they build.',
  },
  {
    id: 'sc-089',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'monitoring', 'responsibility-matrix'],
    question:
      'For monitoring and logging in the shared responsibility model, what is the customer responsible for?',
    options: [
      'Building and operating CloudTrail storage hardware in every Region',
      'Using AWS monitoring and security services (for example CloudTrail, GuardDuty, Security Hub) to detect and respond to threats in their account',
      'Writing all GuardDuty detection rules from scratch without AWS',
      'Disabling logging to reduce AWS infrastructure cost',
    ],
    correctAnswers: [1],
    explanation:
      'AWS provides monitoring and logging services and the underlying infrastructure. Customers enable trails, analyze findings, integrate alerts, and act on threats in their environments.',
  },
  {
    id: 'sc-090',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'monitoring', 'responsibility-matrix'],
    question:
      'Which pairing reflects AWS vs. customer responsibilities for monitoring and logging?',
    options: [
      'AWS analyzes every customer\'s logs and remediates incidents without customer involvement.',
      'AWS provides security monitoring tools; customers configure and use them for threat detection in their accounts.',
      'Customers must deploy physical log servers in AWS data centers.',
      'Neither party is responsible for logging in the shared responsibility model.',
    ],
    correctAnswers: [1],
    explanation:
      'Services like CloudTrail, GuardDuty, and Security Hub are provided by AWS, but customers turn them on, scope them to their workloads, and operationalize detection and response.',
  },
  {
    id: 'sc-091',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'responsibility-matrix', 'sample-exam'],
    question:
      'Which responsibilities fall on the customer across the shared responsibility categories? (Select THREE.)',
    options: [
      'Configure security groups and network ACLs',
      'Protect physical access to AWS data centers',
      'Implement encryption and manage access to sensitive data',
      'Secure application code and address vulnerabilities',
      'Patch the AWS global network backbone',
      'Enable MFA and IAM policies for users and roles',
    ],
    correctAnswers: [0, 2, 5],
    explanation:
      'Customers handle security in the cloud: virtual network rules (security groups and NACLs), data encryption and access, and IAM configuration including MFA. Application security is also customer-owned (see related cards). Physical facilities and AWS global network operations are AWS responsibilities.',
  },
  {
    id: 'sc-136',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'iaas', 'ec2', 'sample-exam'],
    question:
      'Which are customer responsibilities at AWS when using Infrastructure as a Service deployment type? (Select FOUR.)',
    options: [
      'Configuring security groups',
      'Updating guest operating systems',
      'Identity and access management',
      'Maintaining physical security',
      'Providing encryption tools',
      'Patching applications',
    ],
    correctAnswers: [0, 1, 2, 5],
    explanation:
      'IaaS on AWS (for example Amazon EC2) leaves the customer responsible for security in the cloud: network access controls (security groups), guest OS updates, IAM, and application patching. AWS maintains physical security of data centers and provides encryption services (KMS and others); customers choose to implement encryption but AWS supplies the tools.',
  },
  {
    id: 'sc-139',
    domain: 'security-compliance',
    task: '2.1',
    tags: ['shared-responsibility', 'ec2', 'iaas', 'examtopics', 'sample-exam'],
    question:
      'A company wants to run a NoSQL database on Amazon EC2 instances. Which task is the responsibility of AWS in this scenario?',
    options: [
      'Update the guest operating system of the EC2 instances.',
      'Maintain high availability at the database layer.',
      'Patch the physical infrastructure that hosts the EC2 instances.',
      'Configure the security group firewall.',
    ],
    correctAnswers: [2],
    explanation:
      'On EC2 (IaaS), AWS secures the cloud: physical data centers, hardware, networking, and the hypervisor. Customers manage security in the cloud: guest OS patching, database software, high availability design, and security groups.',
  },
]
