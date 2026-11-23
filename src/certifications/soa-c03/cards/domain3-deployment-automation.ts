import type { Card } from '../../../core/types'

export const deploymentAutomationCards: Card[] = [
  {
    id: 'soa-automation-001',
    domain: 'deployment-automation',
    task: '3.1',
    tags: ['cloudformation', 'iac', 'stacks'],
    question: 'A team is standardizing infrastructure changes with stack-based IaC workflows. Which primary reference should they use?',
    options: [
      'AWS CloudFormation User Guide',
      'Amazon Textract docs only',
      'Amazon Neptune docs only',
      'AWS Marketplace seller docs',
    ],
    correctAnswers: [0],
    explanation:
      'CloudFormation stack lifecycle, drift, and rollback behavior are common exam topics: https://docs.aws.amazon.com/cloudformation/',
  },
  {
    id: 'soa-automation-002',
    domain: 'deployment-automation',
    task: '3.1',
    tags: ['cdk', 'iac', 'developer-tools'],
    question: 'Engineers want to define infrastructure in code abstractions that synthesize to CloudFormation. Which guide is MOST relevant?',
    options: ['AWS CDK Developer Guide', 'AWS Glue docs only', 'AWS Artifact docs', 'Amazon Lex docs only'],
    correctAnswers: [0],
    explanation:
      'CDK understanding helps with modern IaC workflows in operations teams: https://docs.aws.amazon.com/cdk/',
  },
  {
    id: 'soa-automation-003',
    domain: 'deployment-automation',
    task: '3.2',
    tags: ['systems-manager', 'automation', 'run-command'],
    question: 'A SysOps team needs centralized patching, command execution, and runbook automation for many instances. Which service is MOST appropriate?',
    options: ['AWS Systems Manager', 'AWS Signer only', 'Amazon SageMaker only', 'Amazon Connect only'],
    correctAnswers: [0],
    explanation:
      'Systems Manager Run Command, Patch Manager, and Automation are key SOA-C03 areas: https://docs.aws.amazon.com/systems-manager/',
  },
  {
    id: 'soa-automation-004',
    domain: 'deployment-automation',
    task: '3.2',
    tags: ['opsworks', 'state-manager', 'patching'],
    question: 'Operations must continuously enforce desired instance configuration state. Which Systems Manager feature should they use?',
    options: ['State Manager', 'Service Quotas', 'IAM Access Analyzer', 'AWS Budgets'],
    correctAnswers: [0],
    explanation:
      'State Manager helps maintain desired instance state continuously.',
  },
  {
    id: 'soa-automation-005',
    domain: 'deployment-automation',
    task: '3.3',
    tags: ['codepipeline', 'cicd', 'deployments'],
    question: 'A platform team needs managed pipeline orchestration across build/test/deploy stages. Which service docs should guide the implementation?',
    options: ['AWS CodePipeline User Guide', 'AWS Proton only', 'Amazon Athena only', 'Amazon SNS mobile docs only'],
    correctAnswers: [0],
    explanation:
      'CodePipeline appears in deployment automation and operational release workflows: https://docs.aws.amazon.com/codepipeline/',
  },
  {
    id: 'soa-automation-006',
    domain: 'deployment-automation',
    task: '3.3',
    tags: ['codedeploy', 'blue-green', 'rolling-deploy'],
    question: 'A release team must implement blue/green and in-place deployment patterns with rollback support. Which service is MOST relevant?',
    options: ['AWS CodeDeploy User Guide', 'Amazon CloudFront docs only', 'AWS DataSync docs only', 'Amazon MQ docs only'],
    correctAnswers: [0],
    explanation:
      'CodeDeploy lifecycle hooks and rollback strategies are useful for exam scenarios: https://docs.aws.amazon.com/codedeploy/',
  },
  {
    id: 'soa-automation-007',
    domain: 'deployment-automation',
    task: '3.4',
    tags: ['config', 'governance', 'compliance'],
    question: 'A governance team needs continuous drift detection and compliance evaluation against rules. Which service should they use?',
    options: ['AWS Config', 'Amazon Polly', 'AWS PCS', 'AWS Wickr'],
    correctAnswers: [0],
    explanation:
      'AWS Config rules and conformance packs are frequent SOA-C03 topics: https://docs.aws.amazon.com/config/',
  },
  {
    id: 'soa-automation-008',
    domain: 'deployment-automation',
    task: '3.4',
    tags: ['control-tower', 'organizations', 'multi-account'],
    question: 'An organization is establishing a multi-account landing zone with centralized governance controls. Which documentation is MOST appropriate?',
    options: [
      'AWS Control Tower documentation',
      'AWS Elastic Beanstalk docs only',
      'Amazon Lightsail docs only',
      'AWS Device Farm docs only',
    ],
    correctAnswers: [0],
    explanation:
      'Control Tower and Organizations are useful for multi-account operational governance: https://docs.aws.amazon.com/controltower/',
  },
  {
    id: 'soa-automation-009',
    domain: 'deployment-automation',
    task: '3.5',
    tags: ['service-catalog', 'standardization', 'self-service'],
    question: 'A cloud center of excellence wants teams to launch only approved infrastructure blueprints. Which service should they use?',
    options: ['AWS Service Catalog', 'Amazon Kinesis Video Streams', 'AWS IoT Core', 'AWS App Runner'],
    correctAnswers: [0],
    explanation:
      'Service Catalog supports standardized deployment controls in enterprises: https://docs.aws.amazon.com/servicecatalog/',
  },
  {
    id: 'soa-automation-010',
    domain: 'deployment-automation',
    task: '3.5',
    tags: ['api', 'cli', 'sdk', 'automation-scripts'],
    question: 'A runbook currently relies on manual console clicks and must become repeatable and auditable. Which practice is BEST?',
    options: [
      'Prefer AWS CLI/SDK/API-based workflows with versioned scripts',
      'Rely on manual console clicks and memory',
      'Disable logging to speed execution',
      'Skip IAM scoping for faster setup',
    ],
    correctAnswers: [0],
    explanation:
      'SOA-C03 favors repeatable, auditable automation over ad-hoc manual operations.',
  },
  {
    id: 'soa-automation-011',
    domain: 'deployment-automation',
    task: '3.6',
    tags: ['workshops', 'labs', 'hands-on'],
    question: 'A learner wants no-cost, guided hands-on labs for IaC and operations skills. Which source is MOST appropriate?',
    options: ['AWS Workshops', 'Unverified community snippets without context', 'Unsourced third-party answer banks', 'Service overview slides without implementation details'],
    correctAnswers: [0],
    explanation:
      'Hands-on workshops with guided steps: https://workshops.aws/',
  },
  {
    id: 'soa-automation-012',
    domain: 'deployment-automation',
    task: '3.6',
    tags: ['repost', 'knowledge-base', 'troubleshooting'],
    question: 'An engineer needs AWS-focused troubleshooting discussions and practical fixes from the community. Which official forum is best?',
    options: ['AWS re:Post', 'AWS re:Post accepted answers', 'Generic Q&A with no AWS context', 'AWS Knowledge Center troubleshooting articles'],
    correctAnswers: [0],
    explanation:
      'AWS re:Post contains vetted AWS troubleshooting discussions: https://repost.aws/',
  },
  ...buildModule6ManageResourcesCards(),
  ...buildDeploymentAutomationExtras(),
]

type AutomationItem = {
  slug: string
  task: string
  tags: string[]
  resource: string
  focus: string
  url: string
}

function getAutomationItems(): AutomationItem[] {
  return [
  { slug: 'cloudformation', task: '3.1', tags: ['cloudformation', 'iac'], resource: 'AWS CloudFormation User Guide', focus: 'stack lifecycle and safe update workflows for infrastructure changes', url: 'https://docs.aws.amazon.com/cloudformation/' },
  { slug: 'cli-dry-run', task: '3.1', tags: ['aws-cli', 'dry-run', 'permissions'], resource: 'AWS CLI --dry-run behavior documentation', focus: 'permission pre-checks before executing API actions', url: 'https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html' },
  { slug: 'ssm-automation', task: '3.2', tags: ['systems-manager', 'automation'], resource: 'AWS Systems Manager Automation documentation', focus: 'runbooks and operational task automation', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html' },
  { slug: 'patch-manager', task: '3.2', tags: ['patch-manager', 'systems-manager'], resource: 'Systems Manager Patch Manager documentation', focus: 'fleet patching baselines and patch windows', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html' },
  { slug: 'state-manager', task: '3.2', tags: ['state-manager', 'systems-manager'], resource: 'Systems Manager State Manager documentation', focus: 'continuous instance configuration enforcement', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html' },
  { slug: 'cloudshell', task: '3.3', tags: ['cloudshell', 'cli', 'sdk-tools'], resource: 'AWS CloudShell User Guide', focus: 'browser-based shell with preauthenticated credentials and built-in tools', url: 'https://docs.aws.amazon.com/cloudshell/latest/userguide/welcome.html' },
  { slug: 'session-manager-benefits', task: '3.3', tags: ['systems-manager', 'session-manager', 'no-bastion'], resource: 'Session Manager documentation', focus: 'secure shell access, port forwarding, and no-bastion operational model', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html' },
  { slug: 'config', task: '3.4', tags: ['config', 'compliance'], resource: 'AWS Config Developer Guide', focus: 'config rules, drift checks, and conformance packs', url: 'https://docs.aws.amazon.com/config/' },
  { slug: 'session-manager', task: '3.4', tags: ['systems-manager', 'session-manager', 'vpc-endpoints'], resource: 'AWS Systems Manager Session Manager documentation', focus: 'secure instance access without bastion hosts using Session Manager and VPC endpoints', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html' },
  { slug: 'resource-groups', task: '3.5', tags: ['systems-manager', 'resource-groups', 'operations'], resource: 'AWS Resource Groups and Systems Manager docs', focus: 'grouping resources for centralized visibility and operational actions', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-resource-groups.html' },
  ]
}

function buildDeploymentAutomationExtras(): Card[] {
  const cards: Card[] = []
  let n = 13
  const items = getAutomationItems()
  const resources = items.map((i) => i.resource)
  const standardizePrompts = [
    (focus: string) =>
      `A platform team must standardize ${focus}. Which source should they use first to build dependable automation?`,
    (focus: string) =>
      `Before automating ${focus} at scale, which reference should be treated as the implementation baseline?`,
    (focus: string) =>
      `Your team is writing repeatable procedures for ${focus}. Which source should anchor the first draft?`,
  ]
  const disagreementPrompts = [
    (focus: string) =>
      `Two engineers disagree on implementation details for ${focus}. Which source should settle the design?`,
    (focus: string) =>
      `During deployment planning for ${focus}, reviewers conflict on expected behavior. Which source should break the tie?`,
    (focus: string) =>
      `A postmortem reveals uncertainty around ${focus}. Which source is most authoritative for correcting the runbook?`,
  ]
  const baselinePrompts = [
    (focus: string) =>
      `Before implementing ${focus} in a lab, which first step gives the most reliable baseline?`,
    (focus: string) =>
      `For exam prep and ops readiness on ${focus}, what should you do before hands-on execution?`,
    (focus: string) =>
      `When practicing ${focus}, which starting point best reduces avoidable configuration mistakes?`,
  ]
  const explanationLines = [
    (url: string) =>
      `Production automation should start from canonical AWS behavior and limits in official docs: ${url}.`,
    (url: string) =>
      `First-party AWS references are the safest authority for both exam reasoning and operational design: ${url}.`,
    (url: string) =>
      `Use official service guidance first, then validate assumptions with sandbox testing: ${url}.`,
  ]

  for (const [index, item] of items.entries()) {
    const variation = index % 3
    const distractors = [
      resources[(index + 1) % resources.length],
      resources[(index + 2) % resources.length],
      resources[(index + 3) % resources.length],
    ]
    cards.push({
      id: `soa-automation-${String(n).padStart(3, '0')}`,
      domain: 'deployment-automation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-drill'],
      question: standardizePrompts[variation](item.focus),
      options: [
        item.resource,
        distractors[0],
        distractors[1],
        distractors[2],
      ],
      correctAnswers: [0],
      explanation: explanationLines[variation](item.url),
    })
    n++

    cards.push({
      id: `soa-automation-${String(n).padStart(3, '0')}`,
      domain: 'deployment-automation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-authority'],
      question: disagreementPrompts[variation](item.focus),
      options: [
        distractors[0],
        item.resource,
        distractors[1],
        distractors[2],
      ],
      correctAnswers: [1],
      explanation: explanationLines[(variation + 1) % 3](item.url),
    })
    n++

    cards.push({
      id: `soa-automation-${String(n).padStart(3, '0')}`,
      domain: 'deployment-automation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-priority'],
      question: baselinePrompts[variation](item.focus),
      options: [
        distractors[0],
        distractors[1],
        item.resource,
        distractors[2],
      ],
      correctAnswers: [2],
      explanation: explanationLines[(variation + 2) % 3](item.url),
    })
    n++
  }

  return cards
}

function buildModule6ManageResourcesCards(): Card[] {
  return [
    {
      id: 'soa-automation-m6-001',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['systems-manager', 'opsdata', 'explorer', 'module-6', 'difficulty-easy'],
      question: 'Which Systems Manager capability provides a customizable OpsData dashboard across accounts and Regions?',
      options: ['Explorer', 'Session Manager', 'Patch Manager', 'Distributor'],
      correctAnswers: [0],
      explanation:
        'Explorer aggregates OpsData like EC2 metadata, patch compliance, and OpsCenter details into one dashboard view.',
    },
    {
      id: 'soa-automation-m6-002',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['systems-manager', 'opscenter', 'opsitems', 'module-6', 'difficulty-easy'],
      question: 'What is the primary purpose of Systems Manager OpsCenter?',
      options: [
        'Investigate and resolve operational work items (OpsItems) faster',
        'Store static website files',
        'Create VPC route tables',
        'Analyze S3 storage classes',
      ],
      correctAnswers: [0],
      explanation:
        'OpsCenter centralizes OpsItems with related alarms/logs and can trigger Automation runbooks to reduce MTTR.',
    },
    {
      id: 'soa-automation-m6-003',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['systems-manager', 'prerequisites', 'ssm-agent', 'module-6', 'difficulty-easy'],
      question: 'Before managing an instance with Systems Manager, which prerequisite is required?',
      options: [
        'Install or verify the SSM Agent on the managed instance',
        'Enable CloudFront logging',
        'Create an Auto Scaling launch template',
        'Enable AWS Budgets alerts',
      ],
      correctAnswers: [0],
      explanation:
        'Core prerequisites are IAM permissions, SSM Agent availability, and HTTPS egress to Systems Manager endpoints.',
    },
    {
      id: 'soa-automation-m6-004',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['systems-manager', 'dhmc', 'module-6', 'difficulty-easy'],
      question: 'What is a key benefit of enabling Default Host Management Configuration (DHMC) in Systems Manager?',
      options: [
        'It applies account-level Systems Manager management defaults to EC2 instances in the Region',
        'It replaces CloudFormation stack policies',
        'It disables Patch Manager and Inventory',
        'It removes the need for IAM permissions',
      ],
      correctAnswers: [0],
      explanation:
        'DHMC provides a scalable way to standardize managed-instance setup for both new and existing EC2 instances.',
    },
    {
      id: 'soa-automation-m6-005',
      domain: 'deployment-automation',
      task: '3.3',
      tags: ['systems-manager', 'application-manager', 'module-6', 'difficulty-easy'],
      question: 'Which Systems Manager capability lets operators view application topology, ops data, and run actions in app context?',
      options: ['Application Manager', 'Fleet Manager', 'Change Manager', 'Service Catalog'],
      correctAnswers: [0],
      explanation:
        'Application Manager correlates resources and operational signals for an application-centric operations view.',
    },
    {
      id: 'soa-automation-m6-006',
      domain: 'deployment-automation',
      task: '3.3',
      tags: ['appconfig', 'feature-flags', 'module-6', 'difficulty-easy'],
      question: 'In AWS AppConfig workflow, what comes before choosing a deployment strategy?',
      options: [
        'Create configuration profiles and feature flags',
        'Enable cross-account Organizations SCPs',
        'Rotate all KMS keys',
        'Create Route 53 health checks',
      ],
      correctAnswers: [0],
      explanation:
        'Typical AppConfig flow is: create app, create environment, define config profiles/flags, then choose a deployment strategy.',
    },
    {
      id: 'soa-automation-m6-007',
      domain: 'deployment-automation',
      task: '3.3',
      tags: ['parameter-store', 'secrets', 'module-6', 'difficulty-medium'],
      question: 'Which store is best for hierarchical configuration values like `/myapp/prod/ami-id`?',
      options: ['Systems Manager Parameter Store', 'AWS Glue Data Catalog', 'Amazon ECR', 'CloudTrail Lake'],
      correctAnswers: [0],
      explanation:
        'Parameter Store supports hierarchies, versioning, and optional encryption for configuration and secret-like values.',
    },
    {
      id: 'soa-automation-m6-008',
      domain: 'deployment-automation',
      task: '3.3',
      tags: ['parameter-store', 'kms', 'securestring', 'module-6', 'difficulty-medium'],
      question: 'What happens when you store a SecureString parameter?',
      options: [
        'Value is encrypted with AWS KMS and stored encrypted in Parameter Store',
        'Value is copied in plaintext to CloudTrail',
        'Value is hashed and cannot be retrieved',
        'Value is stored only in instance metadata',
      ],
      correctAnswers: [0],
      explanation:
        'SecureString uses KMS encryption context, with transmission protected by TLS.',
    },
    {
      id: 'soa-automation-m6-009',
      domain: 'deployment-automation',
      task: '3.1',
      tags: ['cloudformation', 'parameter-store', 'module-6', 'difficulty-medium'],
      question: 'Why reference Parameter Store values in CloudFormation templates?',
      options: [
        'To centralize frequently reused values instead of hardcoding them in templates',
        'To avoid using IAM entirely',
        'To disable stack updates',
        'To make stacks Region-locked',
      ],
      correctAnswers: [0],
      explanation:
        'For maintainability, retrieve public/private parameters instead of duplicating template constants.',
    },
    {
      id: 'soa-automation-m6-010',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['automation', 'documents', 'module-6', 'difficulty-medium'],
      question: 'Which statement about Systems Manager Automation documents is correct?',
      options: [
        'They define sequential workflow steps and can call scripts, AWS APIs, or CloudFormation actions',
        'They are only for Linux package installation',
        'They cannot include parameters',
        'They only run manually from the CLI',
      ],
      correctAnswers: [0],
      explanation:
        'Automation documents include attributes and ordered steps with action types like `aws:executeScript` and `aws:createStack`.',
    },
    {
      id: 'soa-automation-m6-011',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['automation', 'documents', 'module-6', 'difficulty-medium'],
      question: 'Which document type is used by Run Command to execute commands on managed instances?',
      options: ['Command document', 'Dashboard document', 'Audit document', 'Budget document'],
      correctAnswers: [0],
      explanation:
        'Command documents focus on command execution, while automation documents orchestrate multi-step workflows.',
    },
    {
      id: 'soa-automation-m6-012',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['run-command', 'rate-control', 'module-6', 'difficulty-medium'],
      question: 'Which Run Command option controls blast radius when patching many nodes?',
      options: ['Rate control (concurrency/error thresholds)', 'S3 bucket policy', 'VPC flow logs', 'CloudFront TTL'],
      correctAnswers: [0],
      explanation:
        'Run Command controls blast radius through targets, rate controls, output settings, and SNS notifications.',
    },
    {
      id: 'soa-automation-m6-013',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['maintenance-windows', 'change-management', 'module-6', 'difficulty-hard'],
      question:
        'A SysOps team needs to reduce business impact during monthly patching. Which approach is MOST appropriate?',
      options: [
        'Schedule disruptive operations (patching/updates) during defined time windows',
        'Enforce least-privilege IAM policies account-wide',
        'Automatically tune EC2 Auto Scaling cooldowns',
        'Provide a query engine for CloudTrail event analysis',
      ],
      correctAnswers: [0],
      explanation:
        'Maintenance Windows coordinates when administrative tasks run to minimize business disruption.',
    },
    {
      id: 'soa-automation-m6-014',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['patch-manager', 'patch-policies', 'module-6', 'difficulty-hard'],
      question:
        'A team is creating a patch policy in Systems Manager Patch Manager. Which workflow matches the expected setup sequence?',
      options: [
        'Choose scan vs scan-and-install, set schedule, select baseline, define targets',
        'Create OpsItems, define EventBridge archive, then publish SNS topic',
        'Create launch template, attach ALB listener, then set Route 53 failover',
        'Create Config aggregator, then apply conformance pack to patch approvals',
      ],
      correctAnswers: [0],
      explanation:
        'Patch policy setup includes operation mode, schedule, baseline selection, and target scoping.',
    },
    {
      id: 'soa-automation-m6-015',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['fleet-manager', 'node-tools', 'module-6', 'difficulty-hard'],
      question:
        'An operations engineer needs one console workflow to administer both AWS and on-prem servers. Which capability should they use?',
      options: ['Fleet Manager', 'OpsCenter', 'Session Manager', 'Explorer'],
      correctAnswers: [0],
      explanation:
        'Fleet Manager supports common management tasks and node-level access from one console workflow.',
    },
    {
      id: 'soa-automation-m6-016',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['state-manager', 'associations', 's3-output', 'module-6', 'difficulty-hard'],
      question:
        'During a compliance audit, the team must retain command output history from State Manager associations. Which optional configuration is MOST appropriate?',
      options: [
        'Write command output to an Amazon S3 bucket',
        'Disable CloudWatch and S3 output to reduce overhead',
        'Store command logs only on local instance disks',
        'Run associations only with anonymous IAM permissions',
      ],
      correctAnswers: [0],
      explanation:
        'Sending State Manager command output to S3 improves traceability and audit reviews.',
    },
    {
      id: 'soa-automation-m6-017',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['troubleshooting', 'session-manager', 'module-6', 'difficulty-hard'],
      question:
        'An EC2 instance is missing from Session Manager. What should be the FIRST troubleshooting check?',
      options: [
        'SSM Agent status, network path to SSM endpoints, and IAM role permissions',
        'ALB listener SSL policy and ACM certificate chain',
        'Route 53 health-check failure thresholds',
        'EBS snapshot lifecycle and retention rules',
      ],
      correctAnswers: [0],
      explanation:
        'Start troubleshooting by verifying agent status, network reachability, and IAM permissions.',
    },
    {
      id: 'soa-automation-m6-018',
      domain: 'deployment-automation',
      task: '3.2',
      tags: ['troubleshooting', 'automation', 'module-6', 'difficulty-hard'],
      question:
        'A Systems Manager Automation runbook failed after execution started. What is the MOST direct next step?',
      options: [
        'Open the failed automation execution and inspect the failed step details',
        'Re-run the same runbook repeatedly without reviewing step output',
        'Delete and recreate IAM roles before checking execution logs',
        'Disable alarm actions globally to prevent additional failures',
      ],
      correctAnswers: [0],
      explanation:
        'Use the Automation console (or `get-automation-execution`) to inspect step-level failure details quickly.',
    },
  ]
}
