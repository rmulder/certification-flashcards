import type { Card } from '../../../core/types'

export const developmentCards: Card[] = [
  {
    id: 'dva-dev-001',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A team is decomposing a monolithic e-commerce application into independently deployable services. Each service owns its data and communicates through well-defined interfaces. Which architectural style does this describe?',
    options: [
      'Microservices architecture',
      'Lift-and-shift migration',
      'Single-tier web hosting',
      'Batch ETL pipeline',
    ],
    correctAnswers: [0],
    explanation:
      'Microservices break an application into small, independently deployable services with bounded contexts. Teams can scale, deploy, and fail independently while integrating through APIs or messaging.',
  },
  {
    id: 'dva-dev-002',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A REST API must return an order confirmation to the client immediately after checkout. The payment processor may take several seconds. Which integration pattern is most appropriate for the client-facing call?',
    options: [
      'Synchronous request/response through API Gateway to a Lambda function',
      'Fire-and-forget publish to an SQS queue with no response to the client',
      'Batch processing with AWS Glue overnight',
      'Direct scan of a DynamoDB table from the browser',
    ],
    correctAnswers: [0],
    explanation:
      'When the caller needs an immediate result, use synchronous request/response. Long-running or decoupled work can be handed off asynchronously after acknowledging the client.',
  },
  {
    id: 'dva-dev-003',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'An order service must notify inventory, billing, and shipping services when a new order is placed. Subscribers should not need to know about each other. Which service best supports this publish/subscribe decoupling?',
    options: [
      'Amazon SNS with multiple topic subscribers',
      'Amazon SQS standard queue with one consumer',
      'Amazon RDS read replica',
      'AWS CloudFormation stack export',
    ],
    correctAnswers: [0],
    explanation:
      'SNS implements pub/sub fan-out. One publisher sends to a topic and multiple subscribers (SQS queues, Lambda, HTTP endpoints) receive messages independently without coupling to one another.',
  },
  {
    id: 'dva-dev-004',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'You are building a new serverless HTTP API with JWT authorization, CORS, and Lambda proxy integration. You want lower cost and built-in JWT support. Which API Gateway type should you choose?',
    options: [
      'HTTP API',
      'REST API with SOAP integration',
      'Amazon MQ broker endpoint',
      'Classic Load Balancer listener rule only',
    ],
    correctAnswers: [0],
    explanation:
      'HTTP APIs are optimized for common serverless patterns with lower cost and native JWT authorizers. REST APIs offer more advanced features such as request validation, API keys, and usage plans when those are required.',
  },
  {
    id: 'dva-dev-005',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'Multiple AWS accounts need to react to EC2 state changes and custom application events from a central event bus. Which service routes events between accounts and third-party SaaS sources using rules and targets?',
    options: [
      'Amazon EventBridge',
      'Amazon SNS SMS notifications',
      'AWS CloudTrail only',
      'Amazon Route 53 health checks',
    ],
    correctAnswers: [0],
    explanation:
      'EventBridge is a serverless event bus for routing events from AWS services, custom applications, and SaaS partners to targets such as Lambda, Step Functions, SQS, and SNS using event rules.',
  },
  {
    id: 'dva-dev-006',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A developer uses AWS SDK for Java v2 to call DynamoDB from an EC2 instance. The SDK should automatically pick up credentials from the instance role without hard-coded keys. Which feature provides this behavior?',
    options: [
      'Default credential provider chain',
      'S3 bucket policy',
      'API Gateway usage plan',
      'CloudFront origin access control',
    ],
    correctAnswers: [0],
    explanation:
      'The AWS SDK default credential provider chain checks multiple sources in order, including environment variables, web identity, and EC2/ECS instance metadata for IAM role credentials.',
  },
  {
    id: 'dva-dev-007',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A developer wants AI-assisted code completion, chat-based debugging help, and AWS service-aware suggestions inside the IDE while building a Lambda function. Which tool is designed for this workflow?',
    options: [
      'Amazon Q Developer',
      'AWS Cost Explorer',
      'AWS Trusted Advisor',
      'Amazon Inspector',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Q Developer provides generative AI assistance for coding, testing, and AWS-specific development tasks directly in supported IDEs and the AWS console.',
  },
  {
    id: 'dva-dev-008',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'You are testing a SAM-defined Lambda function locally before deployment. Which SAM CLI command invokes the function with a sample event on your workstation?',
    options: [
      'sam local invoke',
      'sam deploy --guided only',
      'aws cloudformation validate-template',
      'sam pipeline bootstrap',
    ],
    correctAnswers: [0],
    explanation:
      'sam local invoke runs a Lambda function in a local Docker container using a specified event payload, enabling fast feedback during development without deploying to AWS.',
  },
  {
    id: 'dva-dev-009',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A microservice processing uploads should not block the web tier when downstream image processing is slow or unavailable. Which pattern improves resilience between services?',
    options: [
      'Place a message queue between the API and the worker service',
      'Use synchronous HTTP calls with no timeout',
      'Share one database table without transactions',
      'Deploy all services as a single CloudFormation nested stack only',
    ],
    correctAnswers: [0],
    explanation:
      'Queues decouple producers and consumers, absorb traffic spikes, and allow retries. The API can accept work quickly while workers process messages at their own pace.',
  },
  {
    id: 'dva-dev-010',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'API Gateway uses Lambda proxy integration. What does the Lambda function receive in this integration type?',
    options: [
      'The full HTTP request event including headers, path, query string, and body',
      'Only the response status code from API Gateway',
      'Pre-mapped DynamoDB items only',
      'A CloudWatch Logs stream ARN',
    ],
    correctAnswers: [0],
    explanation:
      'With Lambda proxy integration, API Gateway passes the entire request to Lambda as an event object. Lambda returns a response object with statusCode, headers, and body that API Gateway sends to the client.',
  },
  {
    id: 'dva-dev-011',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A service calling a downstream payment API experiences repeated timeouts. To prevent cascading failures, the team stops sending requests after error thresholds are exceeded and periodically tests recovery. Which pattern is this?',
    options: [
      'Circuit breaker',
      'Blue/green deployment',
      'Static website hosting',
      'Sharding',
    ],
    correctAnswers: [0],
    explanation:
      'A circuit breaker monitors failures and opens the circuit to fail fast instead of overwhelming a degraded dependency. After a cooldown, it allows trial requests to detect recovery.',
  },
  {
    id: 'dva-dev-012',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'An AWS SDK client calling an external HTTP API should retry transient 503 errors without overwhelming the service. Which retry strategy is recommended?',
    options: [
      'Exponential backoff with jitter',
      'Immediate unlimited retries with no delay',
      'Never retry any failed request',
      'Retry only after manual operator approval',
    ],
    correctAnswers: [0],
    explanation:
      'Exponential backoff increases delay between retries, and jitter randomizes timing to prevent synchronized retry storms. AWS SDKs support configurable retry modes including adaptive and standard strategies.',
  },
  {
    id: 'dva-dev-013',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'Which are advantages of event-driven architecture on AWS? (Select TWO.)',
    options: [
      'Loose coupling between producers and consumers',
      'Guaranteed synchronous response to every caller',
      'Independent scaling of event producers and processors',
      'Elimination of all IAM permissions',
      'Requirement for a shared monolithic database',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Event-driven designs decouple components and scale independently through services like EventBridge, SNS, and SQS. They do not eliminate security controls or guarantee synchronous responses.',
  },
  {
    id: 'dva-dev-014',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A read-heavy public API returns identical responses for popular product catalog requests. Which API Gateway feature reduces latency and backend load for cacheable GET requests?',
    options: [
      'API Gateway stage-level caching',
      'Lambda provisioned concurrency only',
      'SQS long polling',
      'DynamoDB on-demand mode',
    ],
    correctAnswers: [0],
    explanation:
      'API Gateway caching stores responses for a configured TTL at the stage level. Cache hits return quickly without invoking backend integrations, reducing cost and latency for read-heavy workloads.',
  },
  {
    id: 'dva-dev-015',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A startup wants to deploy a containerized web application with minimal infrastructure management, automatic scaling, and HTTPS. Which AWS service is purpose-built for this hosted application scenario?',
    options: [
      'AWS App Runner',
      'Amazon EBS volume attachment',
      'AWS Snowball Edge',
      'Amazon VPC traffic mirroring',
    ],
    correctAnswers: [0],
    explanation:
      'App Runner deploys containerized web apps and APIs with automatic scaling, load balancing, and TLS. Elastic Beanstalk and Amplify Hosting are alternatives depending on runtime and frontend needs.',
  },
  {
    id: 'dva-dev-016',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'An order fulfillment workflow requires human approval, parallel branching, and automatic retries across multiple Lambda functions over several days. Which service should orchestrate this workflow?',
    options: [
      'AWS Step Functions',
      'Amazon SNS topic subscription',
      'Amazon S3 lifecycle transition',
      'AWS CloudTrail event history',
    ],
    correctAnswers: [0],
    explanation:
      'Step Functions coordinates distributed workflows with visual state machines, built-in error handling, retries, parallel states, and human approval tasks using callbacks or task tokens.',
  },
  {
    id: 'dva-dev-017',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A client application submits a video transcoding job and polls for status updates every few seconds. Which combination best separates the initial acceptance from long-running processing?',
    options: [
      'API Gateway accepts the job synchronously, then SQS or Step Functions processes transcoding asynchronously',
      'Single synchronous Lambda with a 15-minute timeout blocking the HTTP response',
      'Direct browser upload to RDS tables',
      'CloudFront invalidation as the job queue',
    ],
    correctAnswers: [0],
    explanation:
      'Accept work quickly with a synchronous API, persist a job identifier, and process asynchronously via queues or Step Functions. Clients poll or subscribe for status instead of holding open HTTP connections.',
  },
  {
    id: 'dva-dev-018',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A CI/CD pipeline running in GitHub Actions must call AWS APIs using short-lived credentials without storing long-term access keys. Which approach is recommended?',
    options: [
      'Configure OIDC federation to assume an IAM role in AWS',
      'Embed IAM user access keys in GitHub repository variables',
      'Use the AWS account root user access key',
      'Disable IAM and use bucket ACLs only',
    ],
    correctAnswers: [0],
    explanation:
      'OIDC identity providers such as GitHub Actions can assume IAM roles through web identity federation, issuing temporary credentials scoped to the pipeline without long-term keys.',
  },
  {
    id: 'dva-dev-019',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'A mobile app calls a BFF (backend-for-frontend) API that aggregates data from three internal microservices. Where should aggregation logic typically live?',
    options: [
      'In the BFF Lambda or service tailored to the mobile client',
      'In the mobile app by exposing internal service endpoints directly',
      'In an S3 bucket policy',
      'In AWS Organizations service control policies only',
    ],
    correctAnswers: [0],
    explanation:
      'A BFF exposes a client-specific API and orchestrates calls to internal microservices, hiding service topology and reducing chatty client interactions.',
  },
  {
    id: 'dva-dev-020',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'Which capabilities does Amazon Q Developer provide for AWS application development? (Select TWO.)',
    options: [
      'Code suggestions and chat-based troubleshooting in the IDE',
      'Automatic production deployment without review',
      'Unit test generation and code transformation assistance',
      'Replacement of all IAM policies with public access',
      'Guaranteed elimination of all security vulnerabilities',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Amazon Q Developer assists with coding, testing, and AWS-aware recommendations in the IDE. It does not deploy to production automatically or replace security governance.',
  },
  {
    id: 'dva-dev-021',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A Lambda function performs CPU-intensive JSON transformation. Increasing which configuration setting also increases CPU allocation proportionally?',
    options: [
      'Memory size',
      'Reserved concurrency limit only',
      'Dead-letter queue ARN',
      'Execution role name',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda allocates CPU power in proportion to memory configured between 128 MB and 10,240 MB. CPU-bound workloads often perform better with higher memory settings even if RAM itself is not the bottleneck.',
  },
  {
    id: 'dva-dev-022',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A Lambda function calls several downstream APIs. The function timeout is 3 seconds but downstream calls can take up to 30 seconds. What is the likely outcome?',
    options: [
      'Lambda terminates the invocation at 3 seconds even if downstream calls are still running',
      'Lambda automatically extends timeout to match downstream latency',
      'API Gateway increases Lambda timeout automatically',
      'The execution role extends the timeout at runtime',
    ],
    correctAnswers: [0],
    explanation:
      'The function timeout is a hard limit per invocation. Set it higher than the longest expected path including downstream calls, or refactor long work to asynchronous processing.',
  },
  {
    id: 'dva-dev-023',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'Multiple Lambda functions share a 50 MB dependency library that rarely changes. How should you package this dependency to reduce deployment package size and improve reuse?',
    options: [
      'Create a Lambda layer and attach it to each function',
      'Embed the library in every function deployment zip',
      'Store the library in CloudWatch Logs',
      'Upload the library to an public S3 website endpoint',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda layers package libraries, custom runtimes, or other artifacts separately. Functions reference the layer, reducing duplicate deployment artifacts and simplifying updates.',
  },
  {
    id: 'dva-dev-024',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'An asynchronously invoked Lambda function fails after exhausting retries. You need to capture failed events for later analysis. Which configuration achieves this?',
    options: [
      'Configure a dead-letter queue (DLQ) on the function or event source mapping',
      'Enable API Gateway caching',
      'Attach an Elastic IP to the function',
      'Increase DynamoDB read capacity only',
    ],
    correctAnswers: [0],
    explanation:
      'DLQs (SQS or SNS) store failed asynchronous invocation payloads after retries are exhausted, enabling inspection, reprocessing, or alerting without losing events.',
  },
  {
    id: 'dva-dev-025',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'You want to automatically invoke another Lambda function or send results to SNS/SQS based on whether an asynchronous invocation succeeds or fails. Which feature should you configure?',
    options: [
      'Lambda destinations',
      'Lambda layers',
      'Lambda@Edge',
      'CloudFront origin shield',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda destinations route asynchronous invocation results to SNS topics, SQS queues, EventBridge buses, or other Lambda functions for success and failure handling without custom polling code.',
  },
  {
    id: 'dva-dev-026',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A Lambda function must access a private Amazon RDS instance in a VPC. What additional consideration affects cold start latency?',
    options: [
      'Attaching the function to VPC subnets creates ENI setup that can increase cold start duration',
      'VPC configuration eliminates cold starts entirely',
      'RDS automatically invokes Lambda without networking',
      'Lambda cannot connect to resources in a VPC',
    ],
    correctAnswers: [0],
    explanation:
      'VPC-enabled Lambda functions create elastic network interfaces to reach private resources, which can add cold start latency. Use minimal subnet/security group configuration and provisioned concurrency if needed.',
  },
  {
    id: 'dva-dev-027',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A critical payment processing Lambda must always have capacity available even during account-wide traffic spikes. Which setting reserves execution capacity for that function?',
    options: [
      'Reserved concurrency',
      'Unreserved concurrency pool only',
      'Lambda layer version pinning',
      'CloudWatch log retention',
    ],
    correctAnswers: [0],
    explanation:
      'Reserved concurrency guarantees a maximum number of concurrent executions for a function and also acts as a ceiling. It protects critical functions from being starved by others in the account.',
  },
  {
    id: 'dva-dev-028',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A developer stores a database endpoint URL in Lambda environment variables and a password in Secrets Manager. What is the best practice for retrieving the password at runtime?',
    options: [
      'Fetch the secret inside the handler using the AWS SDK with least-privilege IAM permissions',
      'Hard-code the password in the Lambda deployment package',
      'Return the password in the API Gateway response body',
      'Store the password in a public S3 object',
    ],
    correctAnswers: [0],
    explanation:
      'Retrieve secrets at runtime with IAM-restricted SDK calls. Cache secrets across invocations when appropriate, and avoid embedding credentials in code or environment variables when Secrets Manager is available.',
  },
  {
    id: 'dva-dev-029',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'An SQS queue triggers a Lambda function through an event source mapping. Messages are failing due to poison messages. What does setting maximumReceiveCount on the source queue redrive policy enable?',
    options: [
      'Moving repeatedly failing messages to a dead-letter queue after the threshold',
      'Automatic deletion of all messages after one attempt',
      'Unlimited retries with no DLQ',
      'Direct API Gateway integration with SQS',
    ],
    correctAnswers: [0],
    explanation:
      'SQS redrive policies send messages to a DLQ after maximumReceiveCount failed processing attempts. Combine with Lambda event source mapping partial batch response for fine-grained retry control.',
  },
  {
    id: 'dva-dev-030',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'Which invocation type should you use when a client calls Lambda through API Gateway and waits for the function result in the same HTTP request?',
    options: [
      'Synchronous invocation',
      'Asynchronous invocation',
      'Event source mapping from DynamoDB Streams only',
      'Scheduled CloudWatch Events without a target',
    ],
    correctAnswers: [0],
    explanation:
      'API Gateway and SDK RequestResponse invocations are synchronous. Lambda runs the function and returns the result or error directly to the caller in the same request cycle.',
  },
  {
    id: 'dva-dev-031',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A Lambda function processes SQS messages in batches of 10. One malformed message causes the entire batch to retry repeatedly. How can you prevent good messages from being blocked?',
    options: [
      'Enable partial batch failure reporting and return failed message IDs only',
      'Disable SQS visibility timeout',
      'Set batch size to zero',
      'Remove the event source mapping entirely',
    ],
    correctAnswers: [0],
    explanation:
      'ReportBatchItemFailures lets Lambda mark individual failed messages for retry while successfully processed messages are deleted from the queue, improving throughput and isolating poison pills.',
  },
  {
    id: 'dva-dev-032',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A latency-sensitive API backed by Lambda experiences cold starts that violate SLA requirements. Which feature keeps execution environments initialized and ready?',
    options: [
      'Provisioned concurrency',
      'Reserved concurrency only without pre-warming',
      'Increasing CloudWatch log retention',
      'Using S3 Transfer Acceleration',
    ],
    correctAnswers: [0],
    explanation:
      'Provisioned concurrency initializes a requested number of execution environments so invocations avoid cold start latency. Reserved concurrency limits capacity but does not pre-warm environments.',
  },
  {
    id: 'dva-dev-033',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A team wants lower cost and improved price-performance for a Lambda compute workload that supports the ARM architecture. Which runtime architecture should they choose?',
    options: [
      'arm64 (Graviton2)',
      'x86_64 only with no alternative',
      'Bare metal EC2 inside Lambda',
      'FPGA-based custom hardware',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda supports arm64 based on AWS Graviton2 processors, often delivering better price-performance for supported runtimes. Verify all dependencies and layers support arm64 before migrating.',
  },
  {
    id: 'dva-dev-034',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A team packages a Lambda function as a container image up to 10 GB to include large ML dependencies. What remains unchanged compared to zip-based deployment?',
    options: [
      'Lambda manages scaling, execution, and integrates with event sources the same way',
      'Lambda no longer supports IAM execution roles',
      'Container image functions cannot use VPC networking',
      'API Gateway cannot invoke container-based functions',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda container images use the same execution model, scaling, and integrations as zip deployments. Images must implement the Lambda Runtime API and be stored in Amazon ECR.',
  },
  {
    id: 'dva-dev-035',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'Which are Lambda best practices for production workloads? (Select TWO.)',
    options: [
      'Separate business logic from the Lambda handler for testability',
      'Perform all work in the global initialization code regardless of scope',
      'Use environment variables or parameter stores for configuration, not hard-coded secrets',
      'Grant AdministratorAccess to every execution role for simplicity',
      'Disable all logging to reduce costs',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Keep handlers thin, externalize configuration securely, apply least-privilege IAM, and use structured logging. Initialize only shared SDK clients outside the handler when reuse is safe.',
  },
  {
    id: 'dva-dev-036',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'When should you choose Lambda destinations instead of a dead-letter queue for asynchronous invocations?',
    options: [
      'When you want native routing of success and failure results to multiple target types without custom DLQ polling code',
      'When you need to store failed SQS messages only',
      'When synchronous API Gateway integration is required',
      'When replacing IAM execution roles',
    ],
    correctAnswers: [0],
    explanation:
      'Destinations natively route async results to Lambda, SNS, SQS, or EventBridge for success and failure paths. DLQs still capture failed events but destinations simplify downstream routing patterns.',
  },
  {
    id: 'dva-dev-037',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A developer needs end-to-end tracing from API Gateway through Lambda to DynamoDB calls. Which feature should be enabled on the Lambda function?',
    options: [
      'AWS X-Ray active tracing',
      'S3 server access logging',
      'CloudFront field-level encryption',
      'Route 53 resolver query logging',
    ],
    correctAnswers: [0],
    explanation:
      'Active X-Ray tracing on Lambda records segments for the function and downstream AWS SDK calls, helping diagnose latency and errors across distributed serverless applications.',
  },
  {
    id: 'dva-dev-038',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'You deploy a new Lambda version and want API Gateway to send 10% of traffic to it for canary testing while 90% stays on the previous version. Which feature supports this?',
    options: [
      'Lambda alias weighted routing',
      'Lambda layer versioning only',
      'SQS FIFO deduplication',
      'DynamoDB TTL attribute',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda aliases can point to multiple function versions with weighted traffic distribution, enabling blue/green and canary deployments without changing the API integration ARN.',
  },
  {
    id: 'dva-dev-039',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'You must modify HTTP headers and authenticate viewers at CloudFront edge locations before requests reach the origin. Which Lambda variant should you use?',
    options: [
      'Lambda@Edge',
      'Lambda in a VPC with public IP only',
      'AWS Batch job definition',
      'Amazon ECS scheduled task',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda@Edge runs functions at CloudFront edge locations in response to CloudFront events such as viewer request and origin response, enabling low-latency edge customization.',
  },
  {
    id: 'dva-dev-040',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'A Lambda deployment package zip (without layers) has a maximum uncompressed size limit. What is that limit?',
    options: [
      '250 MB unzipped deployment package size',
      '5 GB unzipped deployment package size',
      '50 KB unzipped deployment package size',
      'Unlimited size for zip deployments',
    ],
    correctAnswers: [0],
    explanation:
      'Direct-upload zip deployment packages have a 50 MB compressed and 250 MB uncompressed limit. Larger dependencies should use Lambda layers or container images stored in ECR.',
  },
  {
    id: 'dva-dev-041',
    domain: 'development',
    task: '1.2',
    tags: ['dva-c02', '1.2'],
    question:
      'In a SAM project, which folder convention typically holds unit tests that mock AWS SDK calls for Lambda handler logic?',
    options: [
      'A tests/ directory using a framework such as pytest or Jest alongside the function code',
      'The .aws-sam/build output directory only',
      'CloudWatch Logs Insights saved queries',
      'The Lambda console test event tab exclusively',
    ],
    correctAnswers: [0],
    explanation:
      'SAM projects commonly include unit tests in a tests directory, mocking AWS services to validate handler logic. sam local invoke and CI pipelines run these tests before sam deploy.',
  },
  {
    id: 'dva-dev-042',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A DynamoDB table stores user sessions keyed by userId with frequent lookups by userId and sessionId composite key. Which key design supports efficient retrieval of one session?',
    options: [
      'Partition key userId and sort key sessionId',
      'Partition key sessionId only with no sort key for all users',
      'No primary key; rely on Scan only',
      'Partition key createdAt timestamp for all records globally',
    ],
    correctAnswers: [0],
    explanation:
      'Composite keys (partition + sort) enable Query operations to retrieve all sessions for a user or a specific session when both keys are provided. Choose partition keys with high cardinality.',
  },
  {
    id: 'dva-dev-043',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'An e-commerce table uses orderId as the partition key. Developers need to query orders by customerEmail, which is not the primary key. What should they add?',
    options: [
      'A Global Secondary Index (GSI) with customerEmail as the partition key',
      'A table Scan filtered on customerEmail for every request',
      'An S3 lifecycle rule',
      'A CloudFront cache policy',
    ],
    correctAnswers: [0],
    explanation:
      'GSIs provide alternate partition and sort keys for Query access patterns without duplicating the entire table scan. LSIs share the same partition key and must be defined at table creation.',
  },
  {
    id: 'dva-dev-044',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A developer needs all items in a DynamoDB table where status equals "PENDING" and createdDate is between two values. The table partition key is orderId. What is the most efficient access method if a suitable GSI exists on status and createdDate?',
    options: [
      'Query the GSI with key condition expressions on status and createdDate',
      'Scan the base table and filter every item on every request',
      'Export the table to S3 and use Athena for each lookup',
      'Use ElastiCache to store the entire table in memory always',
    ],
    correctAnswers: [0],
    explanation:
      'Query uses indexes and key conditions to read only matching items efficiently. Scan reads every item and applies filters afterward, consuming more capacity and increasing latency at scale.',
  },
  {
    id: 'dva-dev-045',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A financial application reads account balances immediately after a write in the same Region. Which DynamoDB read consistency should be used for the read operation?',
    options: [
      'Strongly consistent read',
      'Eventually consistent read (default)',
      'Global table cross-Region eventual read only',
      'S3 Transfer Acceleration read',
    ],
    correctAnswers: [0],
    explanation:
      'Strongly consistent reads return the latest written data for the item. Eventually consistent reads may return stale data briefly but consume half the read capacity units of strong reads.',
  },
  {
    id: 'dva-dev-046',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A DynamoDB table must trigger a Lambda function whenever items are inserted, updated, or deleted. Which feature captures item-level changes?',
    options: [
      'DynamoDB Streams',
      'DynamoDB Scan with CloudWatch cron',
      'RDS event notifications',
      'SNS SMS messages',
    ],
    correctAnswers: [0],
    explanation:
      'DynamoDB Streams records item-level modifications in near-real time. Lambda event source mappings or Kinesis Client Library consumers process stream records for replication, auditing, or aggregation.',
  },
  {
    id: 'dva-dev-047',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'Two Lambda functions update the same DynamoDB item concurrently. You must prevent lost updates when both read the same version. Which API feature enforces safe concurrent writes?',
    options: [
      'ConditionExpression checking an expected attribute value or version',
      'Unconditional PutItem without checks',
      'Scan with FilterExpression only',
      'Disable DynamoDB streams',
    ],
    correctAnswers: [0],
    explanation:
      'Conditional writes fail if the condition is not met, enabling optimistic locking patterns with version attributes and preventing overwriting newer data silently.',
  },
  {
    id: 'dva-dev-048',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'Which are common use cases for Amazon ElastiCache? (Select TWO.)',
    options: [
      'Caching frequently read database query results to reduce latency',
      'Primary durable system of record for financial transactions',
      'Session store for web applications',
      'Long-term archival of compliance records',
      'Static website hosting replacement for S3',
    ],
    correctAnswers: [0, 2],
    explanation:
      'ElastiCache (Redis or Memcached) provides in-memory caching and session storage to accelerate applications. Durable primary storage and archival belong in databases or S3 with appropriate durability models.',
  },
  {
    id: 'dva-dev-049',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A team needs in-memory caching with multi-AZ replication, persistence options, and advanced data structures such as sorted sets. Which ElastiCache engine should they choose?',
    options: [
      'Redis',
      'Memcached only without replication features',
      'Amazon OpenSearch Service',
      'Amazon DocumentDB without cache',
    ],
    correctAnswers: [0],
    explanation:
      'ElastiCache for Redis supports replication, persistence, pub/sub, and rich data structures. Memcached is simpler multi-node caching without native replication or persistence features.',
  },
  {
    id: 'dva-dev-050',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'An application requires full-text search, faceted filtering, and log analytics across millions of JSON documents. Which AWS service is most appropriate?',
    options: [
      'Amazon OpenSearch Service',
      'Amazon SQS',
      'AWS Step Functions',
      'Amazon EBS snapshot',
    ],
    correctAnswers: [0],
    explanation:
      'OpenSearch Service provides distributed search and analytics with indexing, aggregations, and Kibana/OpenSearch Dashboards for visualization. It suits log analytics and full-text search workloads.',
  },
  {
    id: 'dva-dev-051',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A gaming platform ingests millions of clickstream events per second from thousands of clients and must retain ordering within each user session partition. Which service ingests the stream?',
    options: [
      'Amazon Kinesis Data Streams',
      'Amazon SQS standard queue',
      'Amazon SNS topic without subscribers',
      'AWS Batch job queue',
    ],
    correctAnswers: [0],
    explanation:
      'Kinesis Data Streams ingests high-throughput streaming data with shards providing ordered sequences per partition key. Consumers such as Lambda, KCL, or Firehose process records in near-real time.',
  },
  {
    id: 'dva-dev-052',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'Which statements correctly compare Amazon SQS and Kinesis Data Streams? (Select TWO.)',
    options: [
      'SQS provides simple queue-based decoupling with per-message delete acknowledgment',
      'Kinesis supports ordered record sequences within a shard and stream replay',
      'SQS requires manual shard capacity planning like Kinesis',
      'Kinesis cannot be consumed by AWS Lambda',
      'Both services are primarily used for relational OLTP storage',
    ],
    correctAnswers: [0, 1],
    explanation:
      'SQS is a managed message queue ideal for worker decoupling. Kinesis ingests high-throughput ordered streams with replay capability. Lambda integrates with both as an event consumer.',
  },
  {
    id: 'dva-dev-053',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A DynamoDB table stores temporary session records that should be automatically removed after 24 hours without a scheduled cleanup job. Which feature should you use?',
    options: [
      'Time to Live (TTL) attribute',
      'Global table replication',
      'On-demand backup only',
      'DynamoDB Accelerator (DAX)',
    ],
    correctAnswers: [0],
    explanation:
      'TTL automatically deletes items when a designated numeric epoch timestamp attribute expires. Deletion is background-processed at no additional write cost for the expiry itself.',
  },
  {
    id: 'dva-dev-054',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A workflow must atomically transfer funds by debiting one DynamoDB item and crediting another. Which API ensures all-or-nothing execution?',
    options: [
      'TransactWriteItems',
      'BatchWriteItem without conditions',
      'Scan with parallel segments',
      'Query on a GSI only',
    ],
    correctAnswers: [0],
    explanation:
      'TransactWriteItems groups up to 100 actions across multiple items and tables with ACID guarantees in a single Region. All operations succeed or none are applied.',
  },
  {
    id: 'dva-dev-055',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A new DynamoDB workload has unpredictable traffic with occasional spikes and no steady baseline. Which capacity mode should you start with?',
    options: [
      'On-demand capacity mode',
      'Provisioned capacity with fixed RCU/WCU and no auto scaling',
      'Reserved Instance purchasing for DynamoDB tables',
      'Manual shard splitting in Kinesis',
    ],
    correctAnswers: [0],
    explanation:
      'On-demand mode scales automatically and charges per request, ideal for unknown or spiky workloads. Provisioned with auto scaling suits predictable traffic with cost optimization opportunities.',
  },
  {
    id: 'dva-dev-056',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A read-heavy application repeatedly fetches the same DynamoDB items and needs microsecond read latency with an in-memory cache in front of DynamoDB. Which service should you deploy?',
    options: [
      'DynamoDB Accelerator (DAX)',
      'Amazon S3 Glacier',
      'AWS Snowcone',
      'Amazon MQ',
    ],
    correctAnswers: [0],
    explanation:
      'DAX is a DynamoDB-compatible caching layer that reduces read latency and offloads read traffic from DynamoDB tables for heavily accessed keys.',
  },
  {
    id: 'dva-dev-057',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'Which AWS services are appropriate for storing and querying structured NoSQL data with single-digit millisecond latency at scale? (Select TWO.)',
    options: [
      'Amazon DynamoDB',
      'Amazon S3 Glacier Deep Archive as primary OLTP store',
      'Amazon DocumentDB (with MongoDB compatibility)',
      'Amazon EBS snapshot as query engine',
      'AWS Snowball as online transaction database',
    ],
    correctAnswers: [0, 2],
    explanation:
      'DynamoDB and DocumentDB provide low-latency operational data stores for application workloads. Glacier and Snowball are for archive and transfer, not primary transactional query engines.',
  },
  {
    id: 'dva-dev-058',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'Which messaging services support decoupling event producers from consumers in AWS? (Select TWO.)',
    options: [
      'Amazon SQS',
      'Amazon EC2 instance store volumes',
      'Amazon SNS',
      'Amazon EBS direct API',
      'AWS CloudFormation drift detection',
    ],
    correctAnswers: [0, 2],
    explanation:
      'SQS provides durable queues for point-to-point decoupling. SNS provides pub/sub fan-out to multiple subscribers. Together they are core building blocks for event-driven microservices.',
  },
  {
    id: 'dva-dev-059',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'Application logs and clickstream data must be indexed for search while also landing in S3 for long-term storage. Which pipeline component delivers streaming data to S3 with optional transformation?',
    options: [
      'Amazon Kinesis Data Firehose',
      'Amazon RDS automated backup',
      'AWS CloudFormation stack sets',
      'Amazon VPC peering',
    ],
    correctAnswers: [0],
    explanation:
      'Kinesis Data Firehose captures streaming data and delivers it to S3, Redshift, OpenSearch, or third-party destinations with buffering, compression, and optional Lambda transformation.',
  },
  {
    id: 'dva-dev-060',
    domain: 'development',
    task: '1.1',
    tags: ['dva-c02', '1.1'],
    question:
      'Which approaches support unit testing AWS SAM Lambda functions in a CI pipeline? (Select TWO.)',
    options: [
      'Mock AWS SDK clients and test handler logic with pytest or Jest',
      'Require production AWS credentials in every developer laptop only',
      'Use sam local invoke with sample events in automated tests',
      'Disable all tests because Lambda cannot be tested locally',
      'Deploy to production to validate behavior',
    ],
    correctAnswers: [0, 2],
    explanation:
      'SAM projects combine unit tests with mocked dependencies and sam local invoke integration tests using sample events. Production deployment should not be the primary testing strategy.',
  },
  {
    id: 'dva-dev-061',
    domain: 'development',
    task: '1.3',
    tags: ['dva-c02', '1.3'],
    question:
      'A Lambda function consumes records from a Kinesis data stream with multiple shards. How does Lambda scale consumption as shard count increases?',
    options: [
      'Lambda creates parallel event source mapping pollers up to one concurrent execution per shard (by default)',
      'Lambda merges all shards into a single sequential thread always',
      'Kinesis automatically invokes API Gateway instead of Lambda',
      'Shard count has no effect on Lambda concurrency',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda event source mappings for Kinesis process shards in parallel, typically mapping one concurrent execution per shard by default. Increase shard count to raise ingestion throughput and parallel processing.',
  },
]
