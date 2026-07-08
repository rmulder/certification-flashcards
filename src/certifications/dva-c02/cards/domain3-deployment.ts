import type { Card } from '../../../core/types'

export const deploymentCards: Card[] = [
  {
    id: 'dva-dep-001',
    domain: 'deployment',
    task: '3.1',
    tags: ['lambda', 'packaging', 'artifacts'],
    question:
      'A developer needs to deploy a Lambda function with dependencies that exceed the 250 MB unzipped deployment package limit. What is the MOST appropriate packaging approach?',
    options: [
      'Upload the function code as a single ZIP file with all dependencies inlined',
      'Package the function as a container image stored in Amazon ECR',
      'Store dependencies in Amazon S3 and download them at runtime on every invocation',
      'Split the function into multiple Lambda functions and chain them with Step Functions only',
    ],
    correctAnswers: [1],
    explanation:
      'Lambda container images support up to 10 GB and are ideal when dependencies exceed ZIP package limits. ECR stores the image, and Lambda runs it like any other container-based deployment.',
  },
  {
    id: 'dva-dep-002',
    domain: 'deployment',
    task: '3.1',
    tags: ['lambda', 'layers', 'artifacts'],
    question:
      'Which statement best describes an AWS Lambda layer?',
    options: [
      'A separate versioned archive of libraries or custom runtimes that can be shared across multiple functions',
      'An API Gateway stage that routes traffic to different Lambda versions',
      'A CloudFormation nested stack used only for VPC configuration',
      'A CodeDeploy deployment group for Lambda aliases',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda layers package shared code or dependencies once and attach them to multiple functions, reducing duplication and simplifying artifact management.',
  },
  {
    id: 'dva-dep-003',
    domain: 'deployment',
    task: '3.1',
    tags: ['sam', 'artifacts', 'packaging'],
    question:
      'After running `sam build`, what does `sam package` do in a serverless deployment workflow?',
    options: [
      'Compiles TypeScript source locally without uploading anything',
      'Uploads local build artifacts to S3 and rewrites the template with S3 URIs for deployment',
      'Creates a new CloudFormation stack in the PRODUCTION environment automatically',
      'Replaces API Gateway with Application Load Balancer',
    ],
    correctAnswers: [1],
    explanation:
      'SAM package uploads built artifacts (Lambda ZIPs, layers, etc.) to S3 and produces a transformed template referencing those S3 locations, which `sam deploy` or CloudFormation then uses.',
  },
  {
    id: 'dva-dep-004',
    domain: 'deployment',
    task: '3.1',
    tags: ['cdk', 'cloudformation', 'iac'],
    question:
      'What is the primary output of `cdk synth` that is used for deployment?',
    options: [
      'A Docker Compose file for local emulation',
      'A CloudFormation template synthesized from CDK constructs',
      'An ECS task definition JSON file only',
      'A signed Lambda deployment bundle',
    ],
    correctAnswers: [1],
    explanation:
      'CDK apps are defined in code and synthesized into CloudFormation templates. `cdk deploy` uses that template (often via the CDK bootstrap asset bucket) to provision or update stacks.',
  },
  {
    id: 'dva-dep-005',
    domain: 'deployment',
    task: '3.1',
    tags: ['ecr', 'ecs', 'artifacts', 'multi-select'],
    question:
      'Which steps are required to deploy a new containerized application revision to Amazon ECS using an image in Amazon ECR? (Select TWO)',
    options: [
      'Build and push the container image to an ECR repository',
      'Register a new task definition revision referencing the new image URI',
      'Create a new VPC for every deployment',
      'Delete the ECR repository before each push',
      'Disable the ECS service auto scaling policies permanently',
    ],
    correctAnswers: [0, 1],
    explanation:
      'ECS deployments typically push a new image to ECR, register a task definition revision pointing at that image, then update the service to use the new revision. VPC recreation is not required for routine updates.',
  },
  {
    id: 'dva-dep-006',
    domain: 'deployment',
    task: '3.1',
    tags: ['eks', 'ecr', 'artifacts'],
    question:
      'A team runs workloads on Amazon EKS. Where should they store versioned container images used by Kubernetes Deployments?',
    options: [
      'Amazon ECR',
      'Amazon S3 Standard storage class only',
      'AWS Secrets Manager',
      'Amazon CloudWatch Logs',
    ],
    correctAnswers: [0],
    explanation:
      'EKS pulls container images from a registry. Amazon ECR is the native AWS container registry and integrates with IAM for secure image pull authentication.',
  },
  {
    id: 'dva-dep-007',
    domain: 'deployment',
    task: '3.1',
    tags: ['cloudformation', 'iac', 'artifacts'],
    question:
      'A CloudFormation template references a Lambda function code location. What is a valid way to supply the function code artifact during stack creation?',
    options: [
      'Inline code in the template for runtimes up to 4 KB, or an S3 bucket/key for larger packages',
      'Only through manual console upload after stack creation',
      'By attaching an EBS volume to the Lambda function',
      'Through an API Gateway stage variable',
    ],
    correctAnswers: [0],
    explanation:
      'CloudFormation supports inline `ZipFile` for small functions and `S3Bucket`/`S3Key` (or S3 object version) for larger deployment packages uploaded as stack artifacts.',
  },
  {
    id: 'dva-dep-008',
    domain: 'deployment',
    task: '3.1',
    tags: ['codebuild', 'artifacts'],
    question:
      'In AWS CodeBuild, what is the purpose of the `artifacts` section in `buildspec.yml`?',
    options: [
      'Define IAM permissions for the build project',
      'Specify output files from the build that CodeBuild uploads to S3 or passes to downstream pipeline actions',
      'Configure VPC endpoints for the build environment',
      'Set CloudWatch alarm thresholds for failed tests',
    ],
    correctAnswers: [1],
    explanation:
      'The artifacts section declares build outputs (such as compiled JARs, Lambda ZIPs, or CDK assets) that CodeBuild packages and stores, often for CodePipeline deployment stages.',
  },
  {
    id: 'dva-dep-009',
    domain: 'deployment',
    task: '3.1',
    tags: ['sam', 'cloudformation', 'iac'],
    question:
      'Which AWS SAM CLI command deploys a packaged serverless application and manages the underlying CloudFormation stack?',
    options: [
      'sam local invoke',
      'sam deploy',
      'sam validate',
      'sam logs',
    ],
    correctAnswers: [1],
    explanation:
      '`sam deploy` creates or updates the CloudFormation stack from a packaged template, handling parameters, capabilities, and change sets as configured.',
  },
  {
    id: 'dva-dep-010',
    domain: 'deployment',
    task: '3.1',
    tags: ['cdk', 'bootstrap', 'artifacts'],
    question:
      'Why must an AWS CDK environment be bootstrapped before first deployment in an account/Region?',
    options: [
      'To create the S3 bucket and IAM roles CDK uses to stage large assets and perform deployments',
      'To enable Amazon Q Developer in the IDE',
      'To convert CDK code into ECS task definitions automatically',
      'To register Lambda layers globally',
    ],
    correctAnswers: [0],
    explanation:
      'CDK bootstrap provisions a staging bucket, ECR repo (for container assets), and deployment roles so synthesized assets can be uploaded and CloudFormation stacks deployed reliably.',
  },
  {
    id: 'dva-dep-011',
    domain: 'deployment',
    task: '3.1',
    tags: ['lambda', 'packaging', 'environment'],
    question:
      'A Lambda function requires different configuration values per environment but the deployment package should remain identical. What is the BEST practice?',
    options: [
      'Hard-code environment values in the function source before each `zip`',
      'Use environment variables or AWS Systems Manager Parameter Store values referenced at deploy time',
      'Rebuild the container image for every parameter change even when code is unchanged',
      'Store secrets in the Lambda deployment ZIP unencrypted',
    ],
    correctAnswers: [1],
    explanation:
      'Separating configuration from code lets you promote the same artifact across environments. Environment variables, Parameter Store, or Secrets Manager supply environment-specific values at deployment.',
  },
  {
    id: 'dva-dep-012',
    domain: 'deployment',
    task: '3.1',
    tags: ['cloudformation', 'sam', 'cdk', 'multi-select'],
    question:
      'Which services produce or consume CloudFormation templates as part of infrastructure deployment? (Select TWO)',
    options: [
      'AWS SAM',
      'AWS CDK',
      'Amazon Route 53 health checks only',
      'AWS Amplify Hosting branch previews only',
      'Amazon SNS topic subscriptions',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Both SAM and CDK ultimately deploy infrastructure through CloudFormation. SAM transforms templates; CDK synthesizes them. Route 53 health checks and SNS alone do not author IaC templates.',
  },
  {
    id: 'dva-dep-013',
    domain: 'deployment',
    task: '3.2',
    tags: ['testing', 'integration'],
    question:
      'What distinguishes an integration test from a unit test in a typical AWS application pipeline?',
    options: [
      'Integration tests verify interactions between components or real AWS service endpoints, while unit tests isolate individual functions with mocks',
      'Integration tests run only on developer laptops',
      'Unit tests require a production VPC',
      'Integration tests cannot use the AWS SDK',
    ],
    correctAnswers: [0],
    explanation:
      'Unit tests focus on isolated logic with mocks or stubs. Integration tests exercise multiple components together, often against deployed or emulated AWS resources.',
  },
  {
    id: 'dva-dep-014',
    domain: 'deployment',
    task: '3.2',
    tags: ['api-gateway', 'mock', 'testing'],
    question:
      'A frontend team needs to develop against an API contract before the backend Lambda is finished. What API Gateway feature helps?',
    options: [
      'Mock integrations that return static responses defined in the API definition',
      'Blue/green deployment configuration',
      'Lambda provisioned concurrency',
      'AWS AppConfig hosted configuration',
    ],
    correctAnswers: [0],
    explanation:
      'API Gateway mock integrations return canned responses from mapping templates, enabling client development and contract testing without a live backend.',
  },
  {
    id: 'dva-dep-015',
    domain: 'deployment',
    task: '3.2',
    tags: ['amplify', 'testing', 'branches'],
    question:
      'How do AWS Amplify Hosting branch deployments support pre-production testing?',
    options: [
      'Each connected Git branch can receive its own preview URL with an isolated backend environment',
      'Amplify only deploys from the main branch',
      'Branch deployments automatically replace production without review',
      'Amplify disables HTTPS on preview branches',
    ],
    correctAnswers: [0],
    explanation:
      'Amplify can provision per-branch hosting endpoints (and associated backend resources) so feature branches get unique URLs for QA and stakeholder review before merging.',
  },
  {
    id: 'dva-dep-016',
    domain: 'deployment',
    task: '3.2',
    tags: ['amazon-q', 'testing'],
    question:
      'A developer wants AI assistance generating unit test cases for an existing AWS SDK-based Python module inside their IDE. Which tool is designed for this?',
    options: [
      'Amazon Q Developer',
      'AWS AppConfig',
      'AWS CodeDeploy',
      'Amazon ECR image scanning',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Q Developer provides in-IDE code suggestions, including generating and improving unit tests, which accelerates test authoring for application code.',
  },
  {
    id: 'dva-dep-017',
    domain: 'deployment',
    task: '3.2',
    tags: ['testing', 'environments'],
    question:
      'Integration tests for a microservice behind API Gateway should run against which target for realistic validation without impacting live users?',
    options: [
      'A dedicated staging stage or environment with test data and isolated resources',
      'The production API stage during peak traffic',
      'The CloudFormation service role',
      'The default VPC only',
    ],
    correctAnswers: [0],
    explanation:
      'Non-production stages or environments mirror production configuration while isolating test traffic and data, reducing risk to live users during integration testing.',
  },
  {
    id: 'dva-dep-018',
    domain: 'deployment',
    task: '3.2',
    tags: ['lambda', 'testing', 'local'],
    question:
      'Which approach lets developers invoke a Lambda function locally with a test event before deploying to AWS?',
    options: [
      'AWS SAM CLI `sam local invoke` with a sample event payload',
      'CodeDeploy in-place deployment to localhost',
      'Creating a Lambda alias named `local`',
      'Uploading the ZIP to S3 without a template',
    ],
    correctAnswers: [0],
    explanation:
      'SAM CLI can emulate Lambda locally using Docker, letting developers test handler logic and event processing before packaging and deploying to AWS.',
  },
  {
    id: 'dva-dep-019',
    domain: 'deployment',
    task: '3.2',
    tags: ['testing', 'api-gateway', 'multi-select'],
    question:
      'Which techniques help test an API-dependent application when downstream services are unavailable? (Select TWO)',
    options: [
      'API Gateway mock integrations',
      'Contract tests with stubbed HTTP responses',
      'Deleting API Gateway stages after each test',
      'Disabling CloudWatch Logs for all invocations',
      'Running only manual exploratory tests in production',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Mock integrations and HTTP stubs/simulators let teams validate clients and workflows without live backends. Removing stages or disabling logging are not sound testing strategies.',
  },
  {
    id: 'dva-dep-020',
    domain: 'deployment',
    task: '3.2',
    tags: ['testing', 'dynamodb'],
    question:
      'A team runs integration tests that write to Amazon DynamoDB. How should they prevent test data from polluting production tables?',
    options: [
      'Use separate tables or accounts for test environments and tear down or reset test data after runs',
      'Share the production table and delete random items nightly',
      'Disable DynamoDB streams in production during tests',
      'Run tests only against on-demand capacity in production',
    ],
    correctAnswers: [0],
    explanation:
      'Isolated test resources (separate tables, stacks, or accounts) keep production data safe. Automated cleanup or ephemeral environments further reduce cross-environment contamination.',
  },
  {
    id: 'dva-dep-021',
    domain: 'deployment',
    task: '3.2',
    tags: ['testing', 'ecs'],
    question:
      'Before promoting a new ECS service revision, which test validates container startup and health check behavior?',
    options: [
      'Deploy to a staging ECS service and verify target group health checks pass',
      'Only run `docker build` locally without running the container',
      'Change the production service desired count to zero',
      'Skip health checks to speed deployment',
    ],
    correctAnswers: [0],
    explanation:
      'Staging deployments with load balancer health checks confirm the container listens on the expected port and passes application health probes before production promotion.',
  },
  {
    id: 'dva-dep-022',
    domain: 'deployment',
    task: '3.2',
    tags: ['testing', 'cloudformation'],
    question:
      'What does `aws cloudformation validate-template` help verify before deployment?',
    options: [
      'That the template JSON or YAML syntax and basic resource properties are structurally valid',
      'That all integration tests pass in CodeBuild',
      'That Lambda aliases are weighted correctly',
      'That ECR images contain no vulnerabilities',
    ],
    correctAnswers: [0],
    explanation:
      'Template validation checks syntax and CloudFormation schema compliance early. It does not run application tests or security scans, but catches many IaC errors before stack operations.',
  },
  {
    id: 'dva-dep-023',
    domain: 'deployment',
    task: '3.2',
    tags: ['testing', 'sam'],
    question:
      'Which SAM CLI command starts a local HTTP API emulating API Gateway and Lambda for end-to-end testing on a laptop?',
    options: [
      'sam local start-api',
      'sam deploy --guided',
      'sam package',
      'sam pipeline bootstrap',
    ],
    correctAnswers: [0],
    explanation:
      '`sam local start-api` exposes a local REST API that routes requests to locally emulated Lambda functions, useful for quick end-to-end tests before cloud deployment.',
  },
  {
    id: 'dva-dep-024',
    domain: 'deployment',
    task: '3.3',
    tags: ['codebuild', 'automated-testing'],
    question:
      'Where in a CodeBuild project should a team define commands to install test dependencies and execute `npm test`?',
    options: [
      'The `phases` section of `buildspec.yml` (for example, `install` and `build` or `post_build`)',
      'The CodeDeploy AppSpec file',
      'The API Gateway stage variables',
      'The Lambda execution role trust policy',
    ],
    correctAnswers: [0],
    explanation:
      'buildspec.yml phases orchestrate the build lifecycle. Test installation and execution typically run in `install` and `build` (or dedicated test phases) so failures fail the build.',
  },
  {
    id: 'dva-dep-025',
    domain: 'deployment',
    task: '3.3',
    tags: ['codepipeline', 'automated-testing'],
    question:
      'A CodePipeline should run unit tests automatically on every commit but only deploy to production after manual approval. How should the pipeline be structured?',
    options: [
      'Source → CodeBuild test stage → Manual approval → Deploy stage',
      'Deploy stage → Source → Test stage',
      'Single stage with all actions parallel and no gates',
      'Manual approval before source checkout',
    ],
    correctAnswers: [0],
    explanation:
      'Automated tests belong early in the pipeline after source retrieval. Manual approval gates production deployment while still enforcing test automation on each change.',
  },
  {
    id: 'dva-dep-026',
    domain: 'deployment',
    task: '3.3',
    tags: ['codebuild', 'reports', 'automated-testing'],
    question:
      'How can CodeBuild publish structured test results viewable in the console and downstream tools?',
    options: [
      'Configure `reports` in buildspec.yml with a supported report file format such as JUnit XML',
      'Email test output to AWS Support',
      'Store results only in Lambda environment variables',
      'Write logs exclusively to CloudTrail',
    ],
    correctAnswers: [0],
    explanation:
      'CodeBuild report groups ingest JUnit, Cucumber, and other formats defined in the `reports` section, surfacing pass/fail trends inside CodeBuild and CI dashboards.',
  },
  {
    id: 'dva-dep-027',
    domain: 'deployment',
    task: '3.3',
    tags: ['codepipeline', 'codebuild', 'automated-testing'],
    question:
      'In CodePipeline, which action type commonly invokes automated tests in CodeBuild?',
    options: [
      'Build action using a CodeBuild project',
      'Deploy action using CodeDeploy only',
      'Source action using Amazon S3 event notifications only',
      'Invoke action calling AWS Support API',
    ],
    correctAnswers: [0],
    explanation:
      'CodePipeline Build actions trigger CodeBuild projects that compile code, run tests, and produce artifacts. Test execution is a standard responsibility of the build stage.',
  },
  {
    id: 'dva-dep-028',
    domain: 'deployment',
    task: '3.3',
    tags: ['automated-testing', 'multi-select'],
    question:
      'Which practices improve automated test reliability in CI pipelines on AWS? (Select TWO)',
    options: [
      'Run tests in isolated, reproducible build environments',
      'Fail the pipeline when tests fail',
      'Disable tests on pull requests to save time',
      'Share one long-lived production database across all test runs without cleanup',
      'Skip artifact caching to maximize build time',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Consistent build images and failing fast on test errors keep CI trustworthy. Disabling PR tests or using production data without isolation undermines automation value.',
  },
  {
    id: 'dva-dep-029',
    domain: 'deployment',
    task: '3.3',
    tags: ['sam', 'pipeline', 'automated-testing'],
    question:
      'What does `sam pipeline init` help teams establish?',
    options: [
      'A sample CI/CD pipeline configuration integrating SAM build, test, and deploy stages',
      'Automatic production rollbacks for ECS',
      'ECR lifecycle policies',
      'API Gateway custom domain certificates only',
    ],
    correctAnswers: [0],
    explanation:
      'SAM pipeline init scaffolds pipeline definitions (often for CodePipeline/CodeBuild) with best-practice stages for building, testing, and deploying serverless applications.',
  },
  {
    id: 'dva-dep-030',
    domain: 'deployment',
    task: '3.3',
    tags: ['cdk', 'automated-testing'],
    question:
      'A CDK stack includes infrastructure and application code. Where should automated infrastructure snapshot or assertion tests typically run?',
    options: [
      'In the CI pipeline after `cdk synth`, asserting expected template resources or using CDK assertions',
      'Only after manual production deployment',
      'Inside the Lambda execution environment at runtime',
      'In API Gateway method request validators',
    ],
    correctAnswers: [0],
    explanation:
      'CDK tests (for example, with `@aws-cdk/assertions`) validate synthesized templates in CI, catching unintended infrastructure changes before deployment.',
  },
  {
    id: 'dva-dep-031',
    domain: 'deployment',
    task: '3.3',
    tags: ['codebuild', 'vpc', 'automated-testing'],
    question:
      'Integration tests must reach a database in a private subnet. What CodeBuild configuration is required?',
    options: [
      'Configure the CodeBuild project to run in a VPC with appropriate subnets and security groups',
      'Make the database publicly accessible without authentication',
      'Run tests only from the AWS Management Console',
      'Disable security groups on the database',
    ],
    correctAnswers: [0],
    explanation:
      'CodeBuild projects can attach to a VPC so build containers reach private resources such as RDS instances, while security groups control least-privilege network access.',
  },
  {
    id: 'dva-dep-032',
    domain: 'deployment',
    task: '3.3',
    tags: ['amazon-q', 'automated-testing'],
    question:
      'During a CodeBuild run, a developer wants AI help interpreting a failing test stack trace in the IDE connected to the pipeline logs. Which service assists with developer productivity here?',
    options: [
      'Amazon Q Developer',
      'AWS AppConfig validators',
      'Amazon CloudFront',
      'AWS Artifact',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Q Developer helps developers understand errors, suggest fixes, and generate tests in the IDE, complementing automated CI test execution.',
  },
  {
    id: 'dva-dep-033',
    domain: 'deployment',
    task: '3.3',
    tags: ['codepipeline', 'artifacts', 'automated-testing'],
    question:
      'Test and build artifacts must flow from a test CodeBuild project to a later deploy stage in CodePipeline. How is this achieved?',
    options: [
      'Configure output artifacts on the build action and input artifacts on the deploy action',
      'Copy files manually from the build instance after every run',
      'Store artifacts only in CloudWatch Logs',
      'Use Lambda environment variables to transfer ZIP files',
    ],
    correctAnswers: [0],
    explanation:
      'CodePipeline passes artifacts between stages via S3. Build actions emit artifacts; downstream deploy actions consume them as inputs.',
  },
  {
    id: 'dva-dep-034',
    domain: 'deployment',
    task: '3.3',
    tags: ['cloudformation', 'automated-testing'],
    question:
      'A pipeline should block CloudFormation deployment if a change set would replace a stateful resource. What automated check helps?',
    options: [
      'Run `aws cloudformation create-change-set` and inspect the change set for `Replacement: True` before executing',
      'Skip change sets and always execute updates immediately',
      'Delete the stack before every deployment',
      'Disable CloudFormation drift detection',
    ],
    correctAnswers: [0],
    explanation:
      'Change sets preview modifications including replacements. CI can evaluate the change set and fail the pipeline before executing destructive updates.',
  },
  {
    id: 'dva-dep-035',
    domain: 'deployment',
    task: '3.4',
    tags: ['codepipeline', 'cicd', 'multi-select'],
    question:
      'Which are valid CodePipeline stage types in a typical application CI/CD workflow? (Select TWO)',
    options: [
      'Source',
      'Build',
      'CloudFront edge cache purge only stage',
      'IAM user creation stage',
      'Billing consolidation stage',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Common pipelines include Source (CodeCommit, GitHub, etc.) and Build (CodeBuild), followed by test, approval, and deploy stages. IAM or billing are not pipeline stage categories.',
  },
  {
    id: 'dva-dep-036',
    domain: 'deployment',
    task: '3.4',
    tags: ['codedeploy', 'blue-green', 'ecs'],
    question:
      'An ECS service requires zero-downtime releases with automatic traffic shifting between task sets. Which CodeDeploy deployment type fits?',
    options: [
      'Blue/green deployment on an Application Load Balancer',
      'In-place deployment without a load balancer',
      'Lambda all-at-once traffic shift only',
      'On-premises file copy deployment',
    ],
    correctAnswers: [0],
    explanation:
      'CodeDeploy blue/green for ECS registers a new task set, shifts ALB listener traffic gradually or all at once, and can terminate the old task set after success.',
  },
  {
    id: 'dva-dep-037',
    domain: 'deployment',
    task: '3.4',
    tags: ['lambda', 'aliases', 'canary'],
    question:
      'How do Lambda aliases enable canary deployments with weighted traffic?',
    options: [
      'Associate the alias with two function versions and assign traffic weights between them',
      'Create two API Gateway accounts',
      'Deploy the function to two Regions simultaneously without versions',
      'Use a single `$LATEST` version for all traffic',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda aliases point to weighted versions (for example, 90% version 1, 10% version 2). CodeDeploy or custom automation can shift weights for canary releases.',
  },
  {
    id: 'dva-dep-038',
    domain: 'deployment',
    task: '3.4',
    tags: ['api-gateway', 'stages', 'canary'],
    question:
      'What is the purpose of an API Gateway canary release on a stage?',
    options: [
      'Route a percentage of stage traffic to a new deployment while monitoring metrics before full promotion',
      'Encrypt API keys at rest',
      'Replace CloudFormation as the deployment engine',
      'Disable method-level throttling',
    ],
    correctAnswers: [0],
    explanation:
      'API Gateway canary releases shift a configurable percentage of requests to a new deployment on the same stage, supporting gradual rollout and rollback based on CloudWatch metrics.',
  },
  {
    id: 'dva-dep-039',
    domain: 'deployment',
    task: '3.4',
    tags: ['appconfig', 'deployment'],
    question:
      'A feature flag should roll out gradually to 25% of users with automatic rollback if CloudWatch alarms breach. Which service supports this deployment model?',
    options: [
      'AWS AppConfig',
      'Amazon ECR',
      'AWS Certificate Manager',
      'AWS Glue',
    ],
    correctAnswers: [0],
    explanation:
      'AWS AppConfig deploys configuration and feature flags with validators, gradual deployment strategies, and automatic rollback triggers tied to Amazon CloudWatch alarms.',
  },
  {
    id: 'dva-dep-040',
    domain: 'deployment',
    task: '3.4',
    tags: ['cloudformation', 'rollback', 'cicd'],
    question:
      'A CloudFormation stack update fails partway through. What is the default stack behavior?',
    options: [
      'CloudFormation rolls back the stack to the last stable state unless `--disable-rollback` was specified',
      'Resources remain in a partially updated state with no recovery option',
      'The stack is deleted automatically',
      'All S3 buckets in the account are emptied',
    ],
    correctAnswers: [0],
    explanation:
      'By default, failed stack updates trigger automatic rollback to the previous stable template state. `--disable-rollback` keeps failed resources for troubleshooting but is not the default.',
  },
  {
    id: 'dva-dep-041',
    domain: 'deployment',
    task: '3.4',
    tags: ['codedeploy', 'lambda', 'rollback'],
    question:
      'After a failed Lambda deployment using CodeDeploy, how can traffic be restored quickly to the last known good version?',
    options: [
      'Roll back the deployment or shift the alias weight back to the previous version',
      'Delete the Lambda function and recreate it without versions',
      'Publish a new `$LATEST` only version',
      'Disable API Gateway logging',
    ],
    correctAnswers: [0],
    explanation:
      'CodeDeploy tracks deployment lifecycle events for Lambda aliases. Failed deployments can roll back automatically or manually by restoring alias weights to the prior version.',
  },
  {
    id: 'dva-dep-042',
    domain: 'deployment',
    task: '3.4',
    tags: ['cicd', 'rollback', 'multi-select'],
    question:
      'Which deployment strategies reduce blast radius when releasing a new application version? (Select TWO)',
    options: [
      'Canary releases with gradual traffic shifting',
      'Blue/green deployments with health validation before cutover',
      'Deploying directly to all production users with no validation',
      'Disabling monitoring during release',
      'Skipping integration tests to deploy faster',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Canary and blue/green strategies limit exposure by validating new versions with a subset of traffic or a parallel environment before full cutover.',
  },
  {
    id: 'dva-dep-043',
    domain: 'deployment',
    task: '3.4',
    tags: ['codepipeline', 'cloudformation', 'cicd'],
    question:
      'A team uses CodePipeline to deploy infrastructure. Which action deploys a CloudFormation template produced by an earlier build stage?',
    options: [
      'CloudFormation deploy action or a CodeBuild action running `aws cloudformation deploy`',
      'Amazon SNS publish action only',
      'AWS AppSync resolver mapping',
      'ECR image scan on push',
    ],
    correctAnswers: [0],
    explanation:
      'CodePipeline supports native CloudFormation deploy/create/update actions, or custom deploy commands in CodeBuild, to apply IaC templates from pipeline artifacts.',
  },
  {
    id: 'dva-dep-044',
    domain: 'deployment',
    task: '3.4',
    tags: ['codedeploy', 'ec2', 'appspec'],
    question:
      'What does the CodeDeploy AppSpec file define for an EC2 or on-premises deployment?',
    options: [
      'Lifecycle hooks, files to copy, and scripts to run at events such as BeforeInstall and ApplicationStart',
      'API Gateway stage variables only',
      'Lambda layer ARNs',
      'CloudFront cache behaviors',
    ],
    correctAnswers: [0],
    explanation:
      'AppSpec YAML or JSON maps deployment lifecycle events to scripts and specifies source bundles and destination paths on instances during CodeDeploy deployments.',
  },
  {
    id: 'dva-dep-045',
    domain: 'deployment',
    task: '3.4',
    tags: ['amplify', 'cicd', 'branches'],
    question:
      'A team uses Amplify Hosting with Git-based CI/CD. What happens when a pull request is merged into the production branch?',
    options: [
      'Amplify automatically builds and deploys the updated branch to the configured production domain',
      'Amplify requires manual ZIP upload for every merge',
      'Amplify deploys only Lambda layers',
      'Amplify disables the previous deployment with no replacement',
    ],
    correctAnswers: [0],
    explanation:
      'Amplify Hosting connects to Git repositories and runs build/deploy workflows on branch updates, promoting merged changes to the associated hosting endpoint.',
  },
  {
    id: 'dva-dep-046',
    domain: 'deployment',
    task: '3.4',
    tags: ['api-gateway', 'stages', 'cicd'],
    question:
      'A CI/CD pipeline promotes an API from `dev` to `prod`. What API Gateway resource represents an independent deployable snapshot of the API configuration?',
    options: [
      'A deployment, which is then associated with a stage such as `prod`',
      'An IAM role session',
      'A CloudWatch log group name',
      'An S3 bucket policy',
    ],
    correctAnswers: [0],
    explanation:
      'API Gateway deployments capture a point-in-time API configuration. Stages (dev, prod) reference deployments, enabling controlled promotion and rollback between snapshots.',
  },
]
