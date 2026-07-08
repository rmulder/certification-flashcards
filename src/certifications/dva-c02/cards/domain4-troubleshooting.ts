import type { Card } from '../../../core/types'

export const troubleshootingCards: Card[] = [
  {
    id: 'dva-trb-001',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'A Lambda function intermittently returns 502 errors from API Gateway. CloudWatch Logs show occasional "Task timed out after 3.00 seconds" messages, but most invocations complete in under 500 ms. What is the MOST likely root cause?',
    options: [
      'API Gateway integration timeout is shorter than the Lambda timeout',
      'Downstream dependency calls occasionally exceed the function timeout under load',
      'Lambda reserved concurrency is set too high',
      'The execution role lacks permission to write to CloudWatch Logs',
    ],
    correctAnswers: [1],
    explanation:
      'Intermittent timeouts with mostly fast invocations point to variable downstream latency (database, HTTP calls, or cold-start + slow dependency). Increasing timeout or optimizing the slow path addresses the root cause. A permissions issue would fail consistently, and reserved concurrency limits throttling rather than causing timeouts.',
  },
  {
    id: 'dva-trb-002',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'After deploying a new ECS service version, the Application Load Balancer marks all targets as unhealthy. Health check path is `/health`, container listens on port 8080, and the task definition maps container port 8080 to host port 8080. What should you verify FIRST?',
    options: [
      'Whether the security group on the ALB allows inbound HTTPS from the internet',
      'Whether the target group health check port and path match the container listener configuration',
      'Whether ECS service auto scaling is enabled',
      'Whether the task execution role includes ECR pull permissions',
    ],
    correctAnswers: [1],
    explanation:
      'When all targets are unhealthy immediately after deployment, mismatched health check configuration (wrong port, path, or protocol) is the most common root cause. ECR pull permissions affect task startup, not ongoing health checks. ALB inbound rules affect client traffic, not target health evaluation.',
  },
  {
    id: 'dva-trb-003',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'DynamoDB streams trigger a Lambda that processes records. Some records are processed multiple times, causing duplicate writes. What is the MOST likely root cause?',
    options: [
      'DynamoDB streams guarantee exactly-once delivery',
      'The Lambda function lacks reserved concurrency',
      'The function does not implement idempotent processing and stream/Lambda retries on failure or timeout',
      'CloudWatch Logs retention is too short',
    ],
    correctAnswers: [2],
    explanation:
      'DynamoDB streams and Lambda event source mappings provide at-least-once delivery. Retries after failures, timeouts, or checkpoint issues can redeliver the same batch. Idempotent handlers (conditional writes, deduplication keys) are required—not exactly-once guarantees from the stream.',
  },
  {
    id: 'dva-trb-004',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'A CI/CD pipeline fails at the CodeDeploy step with "The deployment failed because no instances were ready". EC2 instances are running and the application responds on port 80 when accessed directly. What is the MOST likely issue?',
    options: [
      'CodeDeploy agent is not installed or not running on the instances',
      'The deployment group uses the wrong IAM role for CodePipeline',
      'The build artifact is stored in the wrong S3 bucket region',
      'CloudFormation stack exports are missing',
    ],
    correctAnswers: [0],
    explanation:
      'CodeDeploy requires the agent on EC2 instances to report lifecycle events and run hooks. If the agent is missing or stopped, deployments fail because instances never become "ready" even when the app works. Build artifact location and pipeline roles affect earlier stages, not instance readiness.',
  },
  {
    id: 'dva-trb-005',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'An SQS-triggered Lambda shows a growing ApproximateAgeOfOldestMessage metric and increasing IteratorAge. Lambda concurrency is not maxed out. What is the MOST likely root cause?',
    options: [
      'SQS visibility timeout is shorter than the Lambda function timeout, causing duplicate processing loops',
      'The dead-letter queue is full',
      'SNS filter policies are dropping messages',
      'CloudWatch alarm actions are throttling invocations',
    ],
    correctAnswers: [0],
    explanation:
      'If visibility timeout is less than function duration, messages become visible again before processing finishes, leading to duplicates, wasted concurrency, and backlog growth. IteratorAge rises when consumers cannot keep pace. DLQ fullness is a symptom of repeated failures, not the typical visibility-timeout pattern.',
  },
  {
    id: 'dva-trb-006',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'You need to find all ERROR log lines for a specific requestId across multiple Lambda log groups in the last 24 hours. What is the MOST efficient approach?',
    options: [
      'Export each log group to S3 and query with Athena',
      'Create a CloudWatch Logs Insights query with `filter` and `stats` across the relevant log groups',
      'Enable X-Ray on API Gateway only',
      'Increase log retention and search manually in the console',
    ],
    correctAnswers: [1],
    explanation:
      'CloudWatch Logs Insights supports cross-log-group queries with filter patterns, field extraction, and aggregations—ideal for correlating by requestId. Exporting to S3 adds latency. X-Ray traces requests but does not replace structured log search across arbitrary fields.',
  },
  {
    id: 'dva-trb-007',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'A distributed microservices app on Lambda and API Gateway has high end-to-end latency, but individual Lambda durations look normal in CloudWatch. What should you enable to identify where time is spent between services?',
    options: [
      'AWS X-Ray tracing with active tracing on Lambda and API Gateway',
      'CloudWatch anomaly detection on EC2 CPU',
      'S3 server access logging',
      'AWS Config rules',
    ],
    correctAnswers: [0],
    explanation:
      'X-Ray provides service maps and subsegment timing for downstream calls (HTTP, DynamoDB, SQS), revealing latency outside Lambda execution time. CloudWatch Lambda duration alone misses network and dependency time. Config and S3 logging do not trace request flows.',
  },
  {
    id: 'dva-trb-008',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'You want custom business metrics (ordersProcessed, cacheHits) emitted from Lambda without making separate PutMetricData API calls. What approach MINIMIZES cost and latency?',
    options: [
      'Call PutMetricData from every invocation',
      'Publish metrics to a Kinesis stream consumed by a metric aggregator Lambda',
      'Use Embedded Metric Format (EMF) in structured log output',
      'Store counts in DynamoDB and poll with a scheduled Lambda',
    ],
    correctAnswers: [2],
    explanation:
      'EMF lets you embed metric definitions in CloudWatch Logs; CloudWatch extracts them automatically with no per-metric API calls. PutMetricData adds API cost and latency per invocation. DynamoDB polling is indirect and delayed.',
  },
  {
    id: 'dva-trb-009',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'Which practices improve observability for troubleshooting serverless applications? (Select TWO.)',
    options: [
      'Emit structured JSON logs with correlation IDs (requestId, userId)',
      'Disable CloudWatch Logs to reduce cost',
      'Use consistent log levels and include error stack traces in JSON fields',
      'Rely solely on default API Gateway access logs without Lambda logging',
      'Set log retention to one day for all production systems',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Structured logging with correlation IDs enables Logs Insights queries across services. Including stack traces and levels in parseable fields speeds root-cause analysis. Disabling logs or minimal retention hides failures. API Gateway logs alone miss function-level errors.',
  },
  {
    id: 'dva-trb-010',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'A CloudWatch alarm on Lambda Errors should notify on-call engineers only when errors exceed 10 in 5 minutes for the production alias. What alarm configuration is appropriate?',
    options: [
      'Metric: Errors, Statistic: Sum, Period: 300 seconds, Threshold: >= 10, Dimensions: FunctionName and Resource',
      'Metric: Invocations, Statistic: Average, Period: 60 seconds, Threshold: 1',
      'Metric: Duration, Statistic: Maximum, Period: 86400 seconds',
      'Custom metric without dimensions',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda Errors with Sum over 300 seconds and a threshold of 10 matches the requirement. Filtering by function name and alias (Resource dimension) scopes to production. Invocations and Duration do not measure error rate directly.',
  },
  {
    id: 'dva-trb-011',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'Operations needs a single pane showing API Gateway 5xx rate, Lambda duration p99, and DynamoDB throttled requests for a service. What is the BEST solution?',
    options: [
      'A CloudWatch dashboard with metric widgets from each service',
      'An S3 static website with CSV exports',
      'AWS Trusted Advisor performance checks only',
      'Email CloudWatch Logs daily',
    ],
    correctAnswers: [0],
    explanation:
      'CloudWatch dashboards aggregate metrics from API Gateway, Lambda, and DynamoDB in one view with customizable periods and alarms. Trusted Advisor gives recommendations, not live service metrics. Log emails are not real-time operational dashboards.',
  },
  {
    id: 'dva-trb-012',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'X-Ray shows a recurring "Fault" on an outbound HTTP subsegment to a third-party API with high latency. The Lambda timeout is 10 seconds. What is the FIRST troubleshooting step?',
    options: [
      'Increase Lambda memory without analyzing the dependency',
      'Add a subsegment timeout or circuit breaker and verify third-party latency/availability in X-Ray traces',
      'Disable X-Ray to reduce overhead',
      'Switch API Gateway to HTTP API without logging',
    ],
    correctAnswers: [1],
    explanation:
      'X-Ray subsegments pinpoint slow external calls. Confirm dependency latency, add timeouts/retries with backoff, and consider circuit breakers. Blindly increasing memory may not help I/O-bound waits. Disabling tracing removes diagnostic data.',
  },
  {
    id: 'dva-trb-013',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'A developer uses Amazon Q Developer in the IDE while debugging a Lambda that fails with AccessDenied on DynamoDB. What can Q Developer MOST directly help with?',
    options: [
      'Automatically change production IAM policies without review',
      'Explain the error, suggest missing IAM actions on the execution role, and propose code fixes',
      'Replace CloudWatch with third-party APM',
      'Provision ElastiCache clusters',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Q Developer assists by interpreting errors, recommending IAM permission additions (e.g., dynamodb:GetItem), and suggesting code changes in the IDE. It does not autonomously modify production IAM without human review and is not a replacement for CloudWatch observability.',
  },
  {
    id: 'dva-trb-014',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'A Node.js Lambda processing JSON payloads runs at 128 MB memory with 2-second average duration and high CPU during parsing. What optimization typically improves performance AND can reduce cost?',
    options: [
      'Decrease memory to 64 MB',
      'Increase memory allocation to gain proportional CPU, reducing duration enough to lower total cost',
      'Disable provisioned concurrency',
      'Remove all logging',
    ],
    correctAnswers: [1],
    explanation:
      'Lambda allocates CPU proportionally to memory. CPU-bound JSON parsing often runs faster with more memory; shorter duration can offset higher per-ms price. Reducing memory on CPU-bound work usually worsens duration. Logging aids troubleshooting and minor log cost is usually negligible.',
  },
  {
    id: 'dva-trb-015',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'An API backed by Lambda and DynamoDB experiences throttling during traffic spikes. Reserved concurrency for the Lambda is 50; account limit is 1000. Users see 429 from API Gateway. What should you tune FIRST?',
    options: [
      'Remove reserved concurrency so the function can use the account pool',
      'Increase DynamoDB on-demand capacity mode or provisioned capacity/WCU',
      'Add CloudFront in front of API Gateway for all mutations',
      'Disable API Gateway throttling limits',
    ],
    correctAnswers: [1],
    explanation:
      'DynamoDB throttling (or downstream limits) often surfaces as errors under spike load. Reserved concurrency of 50 caps Lambda parallelism—also worth reviewing—but DynamoDB WCU/RCU or on-demand limits are a common bottleneck for write-heavy APIs. CloudFront helps cacheable reads, not mutations.',
  },
  {
    id: 'dva-trb-016',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'Read-heavy API responses are identical for thousands of users. Latency to origin in us-east-1 is acceptable for editors but poor for global consumers. What optimization is MOST appropriate?',
    options: [
      'Enable ElastiCache in each region without CDN',
      'Place CloudFront in front of the API with cache policies for cacheable GET responses',
      'Increase Lambda timeout to 15 minutes',
      'Move DynamoDB to a single-AZ deployment',
    ],
    correctAnswers: [1],
    explanation:
      'CloudFront caches GET responses at edge locations, reducing origin load and global latency for identical content. ElastiCache helps origin-side caching but does not distribute globally like a CDN. Longer Lambda timeouts do not fix geographic latency.',
  },
  {
    id: 'dva-trb-017',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'A Lambda reads frequently accessed configuration from DynamoDB on every invocation. P99 duration is high due to repeated GetItem calls. What is the BEST optimization?',
    options: [
      'Cache configuration in ElastiCache or Lambda global scope with TTL, with invalidation on updates',
      'Switch to S3 Glacier for configuration storage',
      'Use SNS to fan out every read request',
      'Disable connection reuse in the HTTP client',
    ],
    correctAnswers: [0],
    explanation:
      'Caching hot configuration in ElastiCache or in-memory (with TTL and refresh on miss) avoids repeated DynamoDB reads. S3 Glacier is for archival. SNS fan-out does not reduce per-invocation reads. Connection reuse improves HTTP client performance, not DynamoDB read amplification.',
  },
  {
    id: 'dva-trb-018',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'Cold starts cause latency spikes on a Java Lambda with 3-second init time. Traffic is steady throughout the day. What reduces cold-start impact with predictable cost?',
    options: [
      'Set reserved concurrency to 0',
      'Configure provisioned concurrency on the production alias',
      'Use maximum memory only during off-peak hours',
      'Remove the Lambda layer containing dependencies',
    ],
    correctAnswers: [1],
    explanation:
      'Provisioned concurrency keeps initialized execution environments warm, reducing cold starts for steady traffic. Reserved concurrency of 0 would block invocations. Removing layers may break the function. Memory changes do not eliminate JVM init cost like provisioned warm instances.',
  },
  {
    id: 'dva-trb-019',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'Which changes can reduce Lambda costs while maintaining reliability for an event-driven workload? (Select TWO.)',
    options: [
      'Right-size memory after profiling duration vs. memory in Power Tuning or CloudWatch',
      'Set timeout to the maximum 15 minutes for all functions',
      'Use batching with SQS partial batch failure reporting to avoid reprocessing entire batches',
      'Disable dead-letter queues to save storage',
      'Increase provisioned concurrency on rarely used functions',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Memory right-sizing via profiling optimizes the cost-performance tradeoff. SQS partial batch response prevents failing an entire batch when one record fails, reducing retries and cost. Max timeouts increase billing risk. DLQs aid reliability. Provisioned concurrency on rarely used functions wastes money.',
  },
  {
    id: 'dva-trb-020',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'API Gateway returns 403 "Missing Authentication Token" for a valid REST API path. The client uses the correct stage URL and HTTP method. What is a COMMON root cause?',
    options: [
      'The request path does not match any resource/method in the API definition (wrong stage, typo, or missing proxy segment)',
      'Lambda concurrent execution limit is exceeded',
      'CloudWatch Logs Insights is disabled',
      'DynamoDB is in on-demand mode',
    ],
    correctAnswers: [0],
    explanation:
      'API Gateway returns "Missing Authentication Token" when no method matches the path—not only for auth issues. Typos, wrong stage, or missing `{proxy+}` cause this. Lambda concurrency causes 502/429, not this 403 message.',
  },
  {
    id: 'dva-trb-021',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'You run this CloudWatch Logs Insights query: `fields @timestamp, @message | filter @message like /ERROR/ | sort @timestamp desc | limit 20`. Results are empty but errors exist in raw logs. What is a likely reason?',
    options: [
      'The time range selected in Insights does not include the error events',
      'Lambda cannot write ERROR level logs',
      'Insights queries only work on VPC flow logs',
      'The limit clause prevents matching ERROR',
    ],
    correctAnswers: [0],
    explanation:
      'Insights queries are scoped to the selected time window and log groups. Errors outside that range return empty results. Lambda supports any log text. Limit restricts output count after matching, not whether ERROR matches.',
  },
  {
    id: 'dva-trb-022',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'After enabling SNS message filtering, a Lambda subscribed to the topic receives no messages. Publishing manually from the console works without filters. What should you check?',
    options: [
      'Whether subscription filter policy JSON matches the message attributes or payload structure publishers send',
      'Whether CloudWatch dashboards are public',
      'Whether X-Ray sampling rate is 100%',
      'Whether the Lambda is in a VPC',
    ],
    correctAnswers: [0],
    explanation:
      'SNS filter policies allow delivery only when attributes or message body fields match. Mismatched attribute names, types, or values silently drop messages for that subscription. Manual publish without required attributes fails filter rules.',
  },
  {
    id: 'dva-trb-023',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'ElastiCache Redis is used as a session store. Cache hit ratio is 40% and database load remains high. Keys expire correctly. What optimization should you try FIRST?',
    options: [
      'Review cache key design and TTL strategy so repeated reads hit the same keys; warm cache on deploy if needed',
      'Switch Redis to cluster mode without changing application logic',
      'Disable encryption in transit',
      'Reduce Redis node size',
    ],
    correctAnswers: [0],
    explanation:
      'Low hit ratio often indicates poor key granularity, too-short TTL, or cache stampedes after deploy. Fixing key design and warming frequently accessed data improves hits. Cluster mode helps scale but not misdesigned keys. Smaller nodes reduce capacity.',
  },
  {
    id: 'dva-trb-024',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'A Blue/Green deployment with CodeDeploy on Lambda shifts traffic to the green alias, then CloudWatch shows a spike in Errors on the green version only. What is the FASTEST way to mitigate user impact?',
    options: [
      'Roll back traffic to the blue alias using CodeDeploy or weighted alias routing',
      'Delete the green Lambda function',
      'Disable CloudWatch alarms',
      'Increase S3 bucket versioning',
    ],
    correctAnswers: [0],
    explanation:
      'Rolling back alias traffic to the last known good version immediately limits blast radius. CodeDeploy supports rollback hooks and traffic shifting reversal. Deleting the function causes outages. Disabling alarms hides the problem.',
  },
  {
    id: 'dva-trb-025',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'Which X-Ray features help diagnose performance bottlenecks in a serverless order-processing workflow? (Select TWO.)',
    options: [
      'Service map showing downstream service latency and error rates',
      'Trace annotations and metadata to search traces by orderId',
      'Automatic replacement of CloudWatch Logs',
      'Encryption of S3 buckets',
      'IAM Access Analyzer findings',
    ],
    correctAnswers: [0, 1],
    explanation:
      'The service map visualizes call paths and bottlenecks. Annotations/metadata enable filtering traces by business keys like orderId. X-Ray complements logs; it does not replace them. S3 encryption and Access Analyzer are unrelated to runtime performance tracing.',
  },
  {
    id: 'dva-trb-026',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'CloudFront serves static assets, but dynamic API calls still hit the regional ALB. Users report slow TTFB on API routes globally. Cache-Control on APIs is no-store. What is the MOST targeted optimization?',
    options: [
      'Cache API responses in CloudFront anyway without changing headers',
      'Use Lambda@Edge or CloudFront Functions only for static paths; optimize API in origin region or add regional endpoints/read replicas where applicable',
      'Disable ALB health checks',
      'Move APIs to S3 website hosting',
    ],
    correctAnswers: [1],
    explanation:
      'Dynamic no-store APIs should not be force-cached at CDN. Optimize origin (latency, DB, Lambda) or use multi-region/read patterns. Edge compute helps specific request/response manipulation, not blanket caching of dynamic data. S3 static hosting cannot replace APIs.',
  },
  {
    id: 'dva-trb-027',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'Step Functions execution fails at a Task state calling Lambda with "States.TaskFailed" and Cause showing "Unhandled" in the Lambda service. CloudWatch Logs for the function are empty for that invocation. What is a likely root cause?',
    options: [
      'The Lambda was invoked asynchronously instead of synchronously',
      'The function failed during initialization (handler/load error) before user code logged, or logging permissions are missing',
      'Step Functions does not support Lambda integrations',
      'X-Ray is enabled',
    ],
    correctAnswers: [1],
    explanation:
      'Init failures (import errors, syntax errors) can fail the invocation before application logs run. Missing logs:CreateLogStream permission also yields empty logs. Step Functions Task states invoke Lambda synchronously by default. X-Ray does not block execution.',
  },
  {
    id: 'dva-trb-028',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'You need an alarm when API Gateway latency p95 exceeds 2 seconds for 3 consecutive 1-minute periods. Which statistic and evaluation settings are correct?',
    options: [
      'Metric: Latency, ExtendedStatistic: p95, Period: 60, EvaluationPeriods: 3, DatapointsToAlarm: 3',
      'Metric: Count, Statistic: Sum, Period: 300',
      'Metric: 4XXError, Statistic: Minimum',
      'Metric: IntegrationLatency, Statistic: SampleCount only',
    ],
    correctAnswers: [0],
    explanation:
      'API Gateway Latency supports percentile extended statistics. Three 60-second periods with three breaching datapoints match "3 consecutive 1-minute periods". Count and 4XXError do not measure latency percentiles.',
  },
  {
    id: 'dva-trb-029',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'A team profiles a Python Lambda and finds most time spent in boto3 DynamoDB calls with serial requests. What is the BEST code-level optimization?',
    options: [
      'Use batch APIs (batch_get_item, batch_write_item) or parallelize independent queries with concurrency limits',
      'Convert all logic to synchronous Step Functions',
      'Store boto3 clients inside the handler without reuse',
      'Increase log verbosity to DEBUG',
    ],
    correctAnswers: [0],
    explanation:
      'Batching and controlled parallelization reduce round trips to DynamoDB. Creating clients per invocation adds overhead—reuse clients in global scope. Step Functions add orchestration overhead for simple parallelization. Debug logging increases I/O cost.',
  },
  {
    id: 'dva-trb-030',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'A new Lambda deployment causes intermittent 502 errors from API Gateway integration. Which investigations help isolate the root cause? (Select THREE.)',
    options: [
      'Compare CloudWatch Logs and X-Ray traces between old and new versions',
      'Check Lambda Errors, Duration, and Throttles metrics for the new version',
      'Verify environment variables and downstream resource connectivity changed in the deployment',
      'Immediately disable VPC flow logs globally',
      'Delete the API Gateway stage',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Logs and traces reveal exceptions and slow dependencies. Error/duration/throttle metrics quantify regression. Deployment diffs (env vars, VPC, IAM, endpoints) explain behavior changes. Disabling flow logs or deleting stages do not diagnose Lambda integration failures.',
  },
  {
    id: 'dva-trb-031',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'Structured logging in Lambda uses JSON like `{"level":"ERROR","requestId":"abc","error":"timeout"}`. What Logs Insights query extracts requestId and counts errors by requestId?',
    options: [
      'fields requestId | filter level = "ERROR" | stats count() by requestId',
      'parse @message /ERROR/ | display requestId',
      'fields @timestamp | sort @timestamp asc',
      'filter @ip = 127.0.0.1',
    ],
    correctAnswers: [0],
    explanation:
      'JSON logs auto-expose fields in Insights. Filtering level = "ERROR" and stats count() by requestId aggregates errors per request. Regex parse is unnecessary for valid JSON. Timestamp sort alone does not aggregate.',
  },
  {
    id: 'dva-trb-032',
    domain: 'troubleshooting',
    task: '4.3',
    tags: ['dva-c02', '4.3'],
    question:
      'Account-wide Lambda ConcurrentExecutions frequently approaches the regional limit, causing throttling across unrelated functions. What is the BEST account-level optimization strategy?',
    options: [
      'Set reserved concurrency on critical functions and use provisioned concurrency only where needed; optimize or async-process non-critical workloads',
      'Set reserved concurrency to 100 on every function',
      'Disable Lambda and move all logic to EC2',
      'Remove all CloudWatch alarms to reduce API calls',
    ],
    correctAnswers: [0],
    explanation:
      'Reserved concurrency guarantees capacity for critical functions while leaving a pool for others; provisioned concurrency targets latency-sensitive paths. Reserving on every function fragments the pool and can worsen throttling. Alarms do not consume significant concurrency.',
  },
  {
    id: 'dva-trb-033',
    domain: 'troubleshooting',
    task: '4.1',
    tags: ['dva-c02', '4.1'],
    question:
      'An Application Load Balancer returns 504 Gateway Timeout to clients. Target group health is healthy, TargetResponseTime p99 is 65 seconds, and idle timeout on the ALB is 60 seconds. What is the root cause?',
    options: [
      'Targets are unhealthy',
      'ALB idle timeout is shorter than backend response time',
      'Security group blocks health checks',
      'SSL certificate expired on CloudFront only',
    ],
    correctAnswers: [1],
    explanation:
      '504 from ALB occurs when the load balancer waits longer than idle timeout for a response. Healthy targets with 65s response time and 60s idle timeout match this. Health checks passing means targets respond to the check path, not necessarily slow endpoints.',
  },
  {
    id: 'dva-trb-034',
    domain: 'troubleshooting',
    task: '4.2',
    tags: ['dva-c02', '4.2'],
    question:
      'On-call needs Slack notifications when any production Lambda error rate exceeds 1% for five minutes, combining Errors and Invocations metrics. What approach is MOST maintainable?',
    options: [
      'A CloudWatch alarm on a metric math expression (Errors/Invocations*100) with SNS or Chatbot integration',
      'Manually refresh a spreadsheet every hour',
      'Poll CloudWatch Logs with a desktop script',
      'Use AWS Budgets alerts',
    ],
    correctAnswers: [0],
    explanation:
      'Metric math alarms compute error rate dynamically from Errors and Invocations, triggering SNS/Chatbot for Slack. Manual spreadsheets and desktop scripts are fragile. AWS Budgets tracks cost, not application error rates.',
  },
]
