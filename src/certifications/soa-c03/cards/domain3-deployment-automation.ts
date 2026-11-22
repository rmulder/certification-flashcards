import type { Card } from '../../../core/types'

export const deploymentAutomationCards: Card[] = [
  {
    id: 'soa-automation-001',
    domain: 'deployment-automation',
    task: '3.1',
    tags: ['cloudformation', 'iac', 'stacks'],
    question: 'For Infrastructure as Code scenarios in SOA-C03, which docs should be your main reference?',
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
    question: 'Which resource helps map high-level IaC definitions to underlying CloudFormation stacks?',
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
    question: 'Which service is best to study for patching, command execution, and automation runbooks across fleets?',
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
    question: 'Which specific Systems Manager capability is commonly used to enforce consistent EC2 configuration over time?',
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
    question: 'For operational CI/CD pipeline orchestration on AWS, which official docs are most relevant?',
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
    question: 'Which service docs should you use for blue/green and in-place deployment strategies?',
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
    question: 'Which service should you study for configuration drift detection and compliance rules?',
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
    question: 'Which resource best helps with landing zone and account governance preparation for operations teams?',
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
    question: 'Which AWS service enables approved, reusable infrastructure products for self-service deployment?',
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
    question: 'Which operational practice is most important when converting manual console steps into repeatable automation?',
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
    question: 'Which source should you use for free hands-on IaC and operations labs across AWS services?',
    options: ['AWS Workshops', 'Only social media notes', 'Only exam dump sites', 'Only certification logos'],
    correctAnswers: [0],
    explanation:
      'Hands-on workshops with guided steps: https://workshops.aws/',
  },
  {
    id: 'soa-automation-012',
    domain: 'deployment-automation',
    task: '3.6',
    tags: ['repost', 'knowledge-base', 'troubleshooting'],
    question: 'Which official community forum is useful for researching real-world operational troubleshooting patterns?',
    options: ['AWS re:Post', 'Random forum archives', 'Generic Q&A with no AWS context', 'Local shell history only'],
    correctAnswers: [0],
    explanation:
      'AWS re:Post contains vetted AWS troubleshooting discussions: https://repost.aws/',
  },
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
  { slug: 'change-sets', task: '3.1', tags: ['cloudformation', 'change-sets'], resource: 'CloudFormation change sets documentation', focus: 'previewing stack updates before execution', url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html' },
  { slug: 'ssm-automation', task: '3.2', tags: ['systems-manager', 'automation'], resource: 'AWS Systems Manager Automation documentation', focus: 'runbooks and operational task automation', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html' },
  { slug: 'patch-manager', task: '3.2', tags: ['patch-manager', 'systems-manager'], resource: 'Systems Manager Patch Manager documentation', focus: 'fleet patching baselines and patch windows', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html' },
  { slug: 'state-manager', task: '3.2', tags: ['state-manager', 'systems-manager'], resource: 'Systems Manager State Manager documentation', focus: 'continuous instance configuration enforcement', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html' },
  { slug: 'stacksets', task: '3.3', tags: ['cloudformation', 'stacksets', 'multi-account'], resource: 'CloudFormation StackSets documentation', focus: 'rolling out standardized stacks across accounts and Regions', url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html' },
  { slug: 'cfn-bootstrap', task: '3.3', tags: ['cloudformation', 'cfn-init', 'cfn-signal'], resource: 'CloudFormation helper scripts documentation', focus: 'EC2 bootstrap status signaling during stack deployments', url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-helper-scripts-reference.html' },
  { slug: 'config', task: '3.4', tags: ['config', 'compliance'], resource: 'AWS Config Developer Guide', focus: 'config rules, drift checks, and conformance packs', url: 'https://docs.aws.amazon.com/config/' },
  { slug: 'session-manager', task: '3.4', tags: ['systems-manager', 'session-manager', 'vpc-endpoints'], resource: 'AWS Systems Manager Session Manager documentation', focus: 'secure instance access without bastion hosts using Session Manager and VPC endpoints', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html' },
  { slug: 'rollback-triggers', task: '3.5', tags: ['cloudformation', 'rollback'], resource: 'CloudFormation rollback triggers documentation', focus: 'automatic rollback based on CloudWatch alarms during updates', url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html' },
  ]
}

function buildDeploymentAutomationExtras(): Card[] {
  const cards: Card[] = []
  let n = 13

  for (const item of getAutomationItems()) {
    cards.push({
      id: `soa-automation-${String(n).padStart(3, '0')}`,
      domain: 'deployment-automation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-drill'],
      question: `A platform team must standardize ${item.focus}. Which source should they use first to build dependable automation?`,
      options: [
        item.resource,
        'A random cheat sheet copied between repos',
        'A one-page blog summary with no references',
        'Only old architecture screenshots',
      ],
      correctAnswers: [0],
      explanation: `Production automation should start from canonical AWS behavior and limits in official docs: ${item.url}.`,
    })
    n++

    cards.push({
      id: `soa-automation-${String(n).padStart(3, '0')}`,
      domain: 'deployment-automation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-authority'],
      question: `Two engineers disagree on implementation details for ${item.focus}. Which source should settle the design?`,
      options: [
        'Only old screenshots of the console',
        item.resource,
        'A community thread with no citations',
        'An unrelated AWS FAQ page',
      ],
      correctAnswers: [1],
      explanation: `SOA-C03 operations questions align to first-party service documentation: ${item.url}.`,
    })
    n++

    cards.push({
      id: `soa-automation-${String(n).padStart(3, '0')}`,
      domain: 'deployment-automation',
      task: item.task,
      tags: ['soa-c03', ...item.tags, 'resource-priority'],
      question: `Before implementing ${item.focus} in a lab, which first step gives the most reliable baseline?`,
      options: [
        'Rely on copied snippets from chat threads',
        'Try changes directly in production first',
        item.resource,
        'Memorize an answer key without context',
      ],
      correctAnswers: [2],
      explanation: `Use AWS service docs first, then validate with sandbox labs and failure testing: ${item.url}.`,
    })
    n++
  }

  return cards
}
