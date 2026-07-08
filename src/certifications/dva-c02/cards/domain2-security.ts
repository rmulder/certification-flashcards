import type { Card } from '../../../core/types'

export const securityCards: Card[] = [
  {
    id: 'dva-sec-001',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'A mobile app uses Amazon Cognito user pools for sign-in. After authentication, the app needs temporary AWS credentials to call API Gateway directly. Which Cognito feature should you use?',
    options: [
      'Cognito user pool app client secret only',
      'Cognito identity pool with an authenticated IAM role',
      'Cognito hosted UI without an identity pool',
      'Cognito user pool MFA settings alone',
    ],
    correctAnswers: [1],
    explanation:
      'Cognito identity pools exchange user pool tokens for temporary AWS credentials via STS. Map authenticated users to an IAM role so the mobile client can call AWS services with least-privilege permissions.',
  },
  {
    id: 'dva-sec-002',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'An API Gateway REST API must validate JWTs issued by a Cognito user pool before invoking a Lambda function. What is the most appropriate approach?',
    options: [
      'Store the JWT in an S3 bucket and validate it in Lambda',
      'Configure a Cognito user pool authorizer on the API method',
      'Use IAM authorization on every method',
      'Disable authorization and validate in the client app only',
    ],
    correctAnswers: [1],
    explanation:
      'A Cognito user pool authorizer validates bearer tokens at the API edge. API Gateway checks signature, expiration, and audience before the request reaches Lambda.',
  },
  {
    id: 'dva-sec-003',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'A Lambda function in Account A must read objects from an S3 bucket in Account B. Both accounts belong to the same organization. What is the recommended access pattern?',
    options: [
      'Embed Account B access keys in the Lambda environment variables',
      'Use STS AssumeRole with a cross-account IAM role trusted by Account A',
      'Make the S3 bucket public and restrict by object prefix',
      'Copy objects to Account A with EventBridge on every write',
    ],
    correctAnswers: [1],
    explanation:
      'Cross-account access should use IAM roles and STS AssumeRole. The Lambda execution role in Account A assumes a role in Account B that grants only the required S3 permissions.',
  },
  {
    id: 'dva-sec-004',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'A developer needs an IAM policy that allows reading objects only from `s3://reports-bucket/team-alpha/*`. Which policy element enforces that path restriction?',
    options: [
      'Principal',
      'Condition with StringLike on s3:prefix',
      'Resource ARN scoped to the bucket and prefix',
      'Effect set to Deny for all other buckets',
    ],
    correctAnswers: [2],
    explanation:
      'Scope the Resource element to the bucket ARN and object prefix, for example `arn:aws:s3:::reports-bucket/team-alpha/*`. This applies least privilege at the IAM policy level.',
  },
  {
    id: 'dva-sec-005',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'Which statements about Amazon Cognito user pools are correct? (Select THREE.)',
    options: [
      'User pools provide user directory, sign-up, and sign-in',
      'User pools directly issue long-term IAM access keys',
      'User pools can issue ID, access, and refresh tokens',
      'User pools replace the need for IAM roles in all AWS access',
      'User pools support custom attributes and group-based claims',
    ],
    correctAnswers: [0, 2, 4],
    explanation:
      'User pools manage authentication and issue JWT tokens. They do not issue IAM access keys; identity pools exchange tokens for temporary credentials. Custom attributes and groups support fine-grained authorization claims.',
  },
  {
    id: 'dva-sec-006',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'An application uses bearer tokens from Cognito to call a protected API. Where should token validation occur for defense in depth?',
    options: [
      'Only in the browser after login',
      'At the API authorizer and again in backend business logic as needed',
      'Only in CloudWatch Logs',
      'Only in the Cognito hosted UI',
    ],
    correctAnswers: [1],
    explanation:
      'Validate bearer tokens at the API boundary with an authorizer. Backend services can additionally enforce fine-grained authorization using claims such as groups, scopes, or custom attributes.',
  },
  {
    id: 'dva-sec-007',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'A Lambda function assumes an IAM role in another account using STS. Which trust policy condition helps prevent confused deputy attacks?',
    options: [
      'Allow any principal from any AWS account',
      'Require aws:SourceArn or aws:SourceAccount matching the calling resource',
      'Set Effect to Allow without conditions',
      'Use a managed policy named AdministratorAccess',
    ],
    correctAnswers: [1],
    explanation:
      'Trust policies should restrict which principals can assume a role and use conditions like aws:SourceAccount or aws:SourceArn so only the intended service or resource in the trusted account can assume the role.',
  },
  {
    id: 'dva-sec-008',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'You need fine-grained authorization in a serverless API based on Cognito group membership. What is a common implementation pattern?',
    options: [
      'Store group names in DynamoDB and ignore JWT claims',
      'Read `cognito:groups` from the validated JWT in Lambda authorizer or business logic',
      'Grant all users the same IAM policy',
      'Use S3 bucket policies for user-level access',
    ],
    correctAnswers: [1],
    explanation:
      'Cognito group membership appears in JWT claims such as `cognito:groups`. API Gateway or Lambda can enforce route-level and resource-level authorization from those claims.',
  },
  {
    id: 'dva-sec-009',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'An EC2 instance needs to call DynamoDB without storing long-term credentials on disk. What should you attach to the instance?',
    options: [
      'An IAM user access key in user data',
      'An instance profile with an IAM role granting DynamoDB permissions',
      'A Cognito identity pool only',
      'A KMS key policy',
    ],
    correctAnswers: [1],
    explanation:
      'EC2 instance profiles provide temporary credentials through IAM roles. Applications use the instance metadata service to obtain short-lived credentials automatically.',
  },
  {
    id: 'dva-sec-010',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'A developer wants API Gateway to authorize requests using IAM signatures instead of JWTs. Which authorization type should be selected?',
    options: [
      'COGNITO_USER_POOLS',
      'AWS_IAM',
      'NONE',
      'CUSTOM with a Lambda authorizer only for JWTs',
    ],
    correctAnswers: [1],
    explanation:
      'AWS_IAM authorization requires SigV4-signed requests. This pattern is common for server-to-server or AWS SDK clients, not for browser users with Cognito JWTs.',
  },
  {
    id: 'dva-sec-011',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'A Lambda authorizer for API Gateway returns an IAM policy document. What does this enable?',
    options: [
      'Automatic encryption of request payloads',
      'Fine-grained method- and resource-level access control per caller',
      'Replacement of Cognito user pools',
      'Automatic WAF rule creation',
    ],
    correctAnswers: [1],
    explanation:
      'Lambda authorizers can return an IAM policy that API Gateway evaluates to allow or deny specific routes and resources for each authenticated caller.',
  },
  {
    id: 'dva-sec-012',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'Temporary security credentials obtained through STS include which set of values?',
    options: [
      'Username, password, and MFA seed',
      'Access key ID, secret access key, and session token',
      'KMS CMK ID and alias only',
      'Cognito refresh token and client secret',
    ],
    correctAnswers: [1],
    explanation:
      'STS temporary credentials consist of an access key ID, secret access key, and session token. They expire automatically and should be preferred over long-term access keys.',
  },
  {
    id: 'dva-sec-013',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'A web application allows users to sign in with Google through Cognito. Which Cognito component federates the external identity?',
    options: [
      'Identity pool only, without a user pool',
      'User pool configured with a Google identity provider',
      'IAM SAML provider attached to S3',
      'Secrets Manager secret named google-oauth',
    ],
    correctAnswers: [1],
    explanation:
      'Cognito user pools support external identity providers such as Google. After federation, Cognito issues its own tokens and can link the external identity to a user profile.',
  },
  {
    id: 'dva-sec-014',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'Which IAM best practice most directly supports least privilege for a Lambda function that writes to one DynamoDB table?',
    options: [
      'Attach AdministratorAccess to the execution role',
      'Create a custom policy allowing only the required DynamoDB actions on that table ARN',
      'Use the root account access keys in environment variables',
      'Share one IAM user across all Lambda functions',
    ],
    correctAnswers: [1],
    explanation:
      'Least privilege means granting only the actions and resources required. Scope the Lambda execution role to specific DynamoDB APIs and the single table ARN.',
  },
  {
    id: 'dva-sec-015',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'An application needs to restrict API access to authenticated users only, using OAuth 2.0 scopes defined in Cognito. Where are scopes typically enforced?',
    options: [
      'In the S3 lifecycle policy',
      'In the resource server configuration and authorizer validation of the access token',
      'In VPC route tables',
      'In CloudFront cache behaviors only',
    ],
    correctAnswers: [1],
    explanation:
      'Cognito resource servers define custom scopes. API authorizers or backend services validate that the access token contains the required scopes before allowing the operation.',
  },
  {
    id: 'dva-sec-016',
    domain: 'security',
    task: '2.1',
    tags: ['dva-c02', '2.1'],
    question:
      'Which are valid uses of AWS STS? (Select THREE.)',
    options: [
      'AssumeRole for cross-account access',
      'GetSessionToken for MFA-protected API calls with IAM users',
      'Permanently rotate KMS keys',
      'Store application secrets at rest',
      'GetFederationToken for custom federated users with restricted policies',
    ],
    correctAnswers: [0, 1, 4],
    explanation:
      'STS issues temporary credentials through operations such as AssumeRole, GetSessionToken, and GetFederationToken. KMS rotation and secret storage are handled by other services.',
  },
  {
    id: 'dva-sec-017',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'An application stores customer files in S3 and must encrypt them at rest using a key you manage. Which approach meets this requirement?',
    options: [
      'SSE-S3 only',
      'SSE-KMS with a customer managed CMK',
      'Disable default encryption',
      'Store files unencrypted in EBS snapshots',
    ],
    correctAnswers: [1],
    explanation:
      'SSE-KMS with a customer managed CMK gives you control over key policy, rotation settings, and audit visibility through CloudTrail. SSE-S3 uses keys managed entirely by Amazon S3.',
  },
  {
    id: 'dva-sec-018',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'A Lambda function must encrypt sensitive payloads before writing them to DynamoDB. Which service should provide the encryption key and API?',
    options: [
      'AWS WAF',
      'AWS KMS Encrypt API with a CMK',
      'Amazon CloudFront',
      'AWS Certificate Manager only',
    ],
    correctAnswers: [1],
    explanation:
      'Application-level encryption before persistence uses KMS Encrypt with a CMK. Store the ciphertext in DynamoDB and decrypt only when authorized processing requires it.',
  },
  {
    id: 'dva-sec-019',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'Data is encrypted in transit between a client and API Gateway. Which combination is standard for HTTPS APIs?',
    options: [
      'TLS terminated at API Gateway with an ACM certificate',
      'Unencrypted HTTP with KMS',
      'Client-side encryption only, no TLS',
      'FTP over port 21',
    ],
    correctAnswers: [0],
    explanation:
      'API Gateway custom domain names use ACM certificates to terminate TLS. Clients connect over HTTPS, protecting data in transit between client and API endpoint.',
  },
  {
    id: 'dva-sec-020',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'You need automatic annual rotation of a database master password stored in AWS. Which service supports managed rotation for RDS credentials?',
    options: [
      'Systems Manager Parameter Store String parameter without encryption',
      'AWS Secrets Manager with rotation configured',
      'S3 bucket versioning',
      'IAM access key rotation only',
    ],
    correctAnswers: [1],
    explanation:
      'Secrets Manager supports automatic rotation using Lambda functions for services such as RDS. Parameter Store can store secrets but managed rotation is a primary Secrets Manager feature.',
  },
  {
    id: 'dva-sec-021',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'A team wants to store a non-rotating configuration value such as an API endpoint URL securely. Cost is a concern. What is the best choice?',
    options: [
      'Secrets Manager secret with daily rotation',
      'SSM Parameter Store SecureString encrypted with KMS',
      'Plaintext Lambda environment variable',
      'Public S3 object',
    ],
    correctAnswers: [1],
    explanation:
      'Parameter Store SecureString parameters are KMS-encrypted and cost-effective for configuration values that do not require Secrets Manager rotation features.',
  },
  {
    id: 'dva-sec-022',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'A developer encrypts data in the browser before uploading to S3. Who manages the plaintext encryption key in this client-side encryption model?',
    options: [
      'Amazon S3 automatically',
      'The client application before upload',
      'AWS KMS only, with no client involvement',
      'API Gateway',
    ],
    correctAnswers: [1],
    explanation:
      'In client-side encryption, the client encrypts data locally and uploads ciphertext. The client or a key management process it controls handles plaintext keys; AWS stores only encrypted content.',
  },
  {
    id: 'dva-sec-023',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'A Lambda function reads a SecureString from Parameter Store. What must the execution role include?',
    options: [
      'Permission to read the parameter and use the KMS key that encrypts it',
      'S3 Full Access only',
      'CloudFront invalidation rights',
      'Cognito admin permissions',
    ],
    correctAnswers: [0],
    explanation:
      'Reading SecureString parameters requires `ssm:GetParameter` on the parameter and `kms:Decrypt` on the backing KMS key. Missing either permission causes access failures.',
  },
  {
    id: 'dva-sec-024',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'Account B must use a KMS CMK in Account A to encrypt S3 objects. What must be configured in Account A?',
    options: [
      'Make the S3 bucket public',
      'KMS key policy allowing Account B principals to use the key',
      'Disable encryption on the bucket',
      'Store the CMK private key in Parameter Store',
    ],
    correctAnswers: [1],
    explanation:
      'Cross-account encryption requires the KMS key policy in Account A to trust principals from Account B. IAM policies in Account B must also authorize the required KMS actions.',
  },
  {
    id: 'dva-sec-025',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'Automatic key rotation is enabled on a customer managed KMS CMK. What happens during rotation?',
    options: [
      'All existing ciphertext becomes unreadable',
      'AWS retains previous key material so existing ciphertext remains decryptable',
      'The key alias is deleted',
      'IAM roles are automatically recreated',
    ],
    correctAnswers: [1],
    explanation:
      'KMS automatic rotation generates new backing key material while retaining older versions for decryption. New encrypt operations use the current key material.',
  },
  {
    id: 'dva-sec-026',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'An application uses server-side encryption with S3 bucket keys. What is the primary benefit?',
    options: [
      'Eliminates the need for TLS',
      'Reduces KMS API request costs for SSE-KMS objects',
      'Replaces IAM policies',
      'Stores keys in client local storage',
    ],
    correctAnswers: [1],
    explanation:
      'S3 Bucket Keys reduce the number of KMS requests by using a bucket-level key for SSE-KMS. Objects remain encrypted at rest with keys protected by KMS.',
  },
  {
    id: 'dva-sec-027',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'Which statements about encryption in transit for AWS application workloads are correct? (Select THREE.)',
    options: [
      'TLS should protect client-to-service connections',
      'VPC endpoints can use HTTPS for AWS API calls',
      'DynamoDB encrypts all table data in transit by default without TLS on the client',
      'Unencrypted HTTP is recommended inside a VPC',
      'ACM provides certificates for public HTTPS endpoints',
    ],
    correctAnswers: [0, 1, 4],
    explanation:
      'Use TLS for data in transit, including client connections and AWS API calls. ACM issues certificates for public endpoints. Clients must still use encrypted endpoints; encryption at rest does not replace TLS.',
  },
  {
    id: 'dva-sec-028',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'A microservice retrieves a database password at runtime from Secrets Manager. How should the secret be encrypted at rest?',
    options: [
      'Stored as plaintext in the secret',
      'Encrypted with a KMS CMK associated with the secret',
      'Encrypted with a client-generated RSA key only, never KMS',
      'Stored in CloudWatch Logs',
    ],
    correctAnswers: [1],
    explanation:
      'Secrets Manager encrypts secret values at rest with KMS. You can use the AWS managed key or a customer managed CMK for additional control and auditing.',
  },
  {
    id: 'dva-sec-029',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'You must ensure an RDS database instance is encrypted at rest. When is encryption enabled?',
    options: [
      'At any time by toggling a setting on a running unencrypted instance',
      'At instance creation or by restoring from a snapshot into an encrypted instance',
      'Only when using DynamoDB instead',
      'Automatically only in dev environments',
    ],
    correctAnswers: [1],
    explanation:
      'RDS encryption at rest is selected at creation time or when restoring from a snapshot to an encrypted instance. You cannot enable encryption directly on an existing unencrypted RDS instance in place.',
  },
  {
    id: 'dva-sec-030',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'A Lambda environment variable contains a database connection string with credentials. What AWS feature encrypts environment variables at rest?',
    options: [
      'Lambda environment variable encryption using a KMS CMK',
      'CloudWatch metric filters',
      'API Gateway usage plans',
      'S3 transfer acceleration',
    ],
    correctAnswers: [0],
    explanation:
      'Lambda supports KMS encryption for environment variables at rest. Prefer Secrets Manager or Parameter Store for secrets, but Lambda can encrypt env vars with a CMK when needed.',
  },
  {
    id: 'dva-sec-031',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'An application uses the AWS Encryption SDK for client-side envelope encryption. Which statement is true?',
    options: [
      'Data keys are stored in plaintext in S3 metadata only',
      'The SDK generates data keys and encrypts them with a KMS CMK',
      'TLS is no longer required',
      'WAF performs the encryption',
    ],
    correctAnswers: [1],
    explanation:
      'The AWS Encryption SDK uses envelope encryption: it generates data keys, encrypts data locally, and protects data keys with a KMS CMK. This combines client-side encryption with centralized key management.',
  },
  {
    id: 'dva-sec-032',
    domain: 'security',
    task: '2.2',
    tags: ['dva-c02', '2.2'],
    question:
      'A compliance team requires manual rotation of a Secrets Manager secret on a custom schedule. What component typically performs the rotation logic?',
    options: [
      'A customer-defined AWS Lambda rotation function',
      'Amazon Route 53 health checks',
      'S3 event notifications only',
      'EC2 instance user data scripts without Lambda',
    ],
    correctAnswers: [0],
    explanation:
      'Secrets Manager rotation commonly uses a Lambda function that creates a new secret version, updates the target service, and marks the old version for deprecation.',
  },
  {
    id: 'dva-sec-033',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'An API returns user profile data to a mobile client. Which practice reduces exposure of sensitive fields such as government ID numbers?',
    options: [
      'Return all database columns to simplify the client',
      'Apply response filtering or DTO mapping to expose only required fields',
      'Log full responses in CloudWatch',
      'Store PII in URL query parameters',
    ],
    correctAnswers: [1],
    explanation:
      'Data minimization and sanitization mean returning only fields the client needs. Map internal records to response models that exclude sensitive attributes such as full SSN or medical record numbers.',
  },
  {
    id: 'dva-sec-034',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'A healthcare application processes PHI in Lambda. Which combination best supports regulatory handling of sensitive data?',
    options: [
      'Log PHI to CloudWatch for troubleshooting and use public S3',
      'Encrypt PHI at rest and in transit, restrict access with IAM, and avoid logging sensitive values',
      'Store PHI in environment variables without encryption',
      'Disable authentication to reduce latency',
    ],
    correctAnswers: [1],
    explanation:
      'PHI requires encryption, strict access control, and careful logging practices. Never log sensitive health data in plain text, and protect storage and transport with encryption and least privilege.',
  },
  {
    id: 'dva-sec-035',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'A developer accidentally committed an AWS access key to a Git repository. What is the FIRST security action?',
    options: [
      'Delete the Git repository and ignore the key',
      'Deactivate or delete the exposed access key and issue new credentials',
      'Rotate the KMS CMK',
      'Enable S3 versioning',
    ],
    correctAnswers: [1],
    explanation:
      'Exposed long-term credentials must be invalidated immediately. Disable or delete the compromised key, audit usage in CloudTrail, and replace it with new credentials or preferably an IAM role.',
  },
  {
    id: 'dva-sec-036',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'Which technique helps prevent SQL injection in a serverless application using RDS?',
    options: [
      'Concatenate user input directly into SQL strings',
      'Use parameterized queries or an ORM with bound parameters',
      'Store SQL in public S3 objects',
      'Return database errors with full stack traces to clients',
    ],
    correctAnswers: [1],
    explanation:
      'Parameterized queries separate SQL structure from user input, mitigating injection attacks. Also sanitize and validate input at the application layer.',
  },
  {
    id: 'dva-sec-037',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'A public-facing API must block common web exploits such as SQL injection and cross-site scripting at the edge. Which service should you use with API Gateway?',
    options: [
      'AWS WAF',
      'Amazon MQ',
      'AWS Batch',
      'Amazon EFS',
    ],
    correctAnswers: [0],
    explanation:
      'AWS WAF attaches to API Gateway, CloudFront, and ALB to filter malicious requests using managed and custom rules. It provides edge protection against common application attacks.',
  },
  {
    id: 'dva-sec-038',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'An application logs request bodies for debugging. What change best protects PII in logs?',
    options: [
      'Log entire credit card numbers for auditability',
      'Redact or hash sensitive fields before writing logs',
      'Send logs to a public S3 bucket',
      'Disable log retention limits',
    ],
    correctAnswers: [1],
    explanation:
      'Sanitize logs by redacting, tokenizing, or hashing PII and secrets before emission. Structured logging with field-level filtering prevents accidental disclosure in CloudWatch or third-party tools.',
  },
  {
    id: 'dva-sec-039',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'Which are examples of sensitive data that developers should treat with extra controls in AWS applications? (Select TWO.)',
    options: [
      'Social Security numbers and payment card data',
      'Public marketing blog posts',
      'Protected health information',
      'Static website images with no user data',
      'Open-source license text',
    ],
    correctAnswers: [0, 2],
    explanation:
      'PII, payment card data, and PHI require encryption, access controls, and data minimization. Public marketing content and open-source licenses are not sensitive in the same way.',
  },
  {
    id: 'dva-sec-040',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'A Lambda function needs a third-party API key at runtime. What is the most secure retrieval pattern?',
    options: [
      'Hard-code the key in the deployment package',
      'Retrieve the key from Secrets Manager at cold start with IAM-restricted access',
      'Embed the key in client-side JavaScript',
      'Email the key to all developers',
    ],
    correctAnswers: [1],
    explanation:
      'Store third-party secrets in Secrets Manager or Parameter Store, retrieve them at runtime with least-privilege IAM permissions, and avoid embedding secrets in code or client applications.',
  },
  {
    id: 'dva-sec-041',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'A team stores user-uploaded documents containing PII in S3. Which controls should be combined for defense in depth?',
    options: [
      'Public bucket ACL and no encryption',
      'SSE-KMS, bucket policy denying insecure transport, and IAM least privilege',
      'HTTP-only access from the internet',
      'Store PII in object metadata tags only',
    ],
    correctAnswers: [1],
    explanation:
      'Protect sensitive objects with encryption at rest, enforce HTTPS via bucket policy conditions such as `aws:SecureTransport`, and restrict access with IAM and optional VPC endpoints.',
  },
  {
    id: 'dva-sec-042',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'An API accepts free-text user comments displayed to other users. Which mitigation addresses stored cross-site scripting?',
    options: [
      'Escape or sanitize output and validate input on the server',
      'Trust all input because users are authenticated',
      'Store comments only in CloudWatch',
      'Disable TLS to inspect traffic',
    ],
    correctAnswers: [0],
    explanation:
      'Prevent stored XSS by validating input, encoding output for the rendering context, and using content security policies where appropriate. Authentication alone does not stop malicious payloads.',
  },
  {
    id: 'dva-sec-043',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'A company must ensure only the finance team Lambda functions can read a Secrets Manager secret. What should be configured?',
    options: [
      'Resource policy on the secret and least-privilege IAM policies on finance roles',
      'Public read access on the secret',
      'Store the secret in a public GitHub gist',
      'Attach PowerUserAccess to all Lambda roles',
    ],
    correctAnswers: [0],
    explanation:
      'Restrict secret access with IAM policies on the execution roles and optionally a Secrets Manager resource policy. Grant `secretsmanager:GetSecretValue` only to the finance team roles.',
  },
  {
    id: 'dva-sec-044',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'A DynamoDB table stores customer email addresses. The app no longer needs full emails in analytics events sent to Kinesis. What practice applies?',
    options: [
      'Send full emails to simplify joins',
      'Tokenize or hash identifiers in the analytics stream',
      'Disable encryption on the stream',
      'Write emails to public S3 for analytics',
    ],
    correctAnswers: [1],
    explanation:
      'Apply data minimization and sanitization by removing or transforming PII before it enters analytics pipelines. Use irreversible hashing or tokenization when identifiers are not required.',
  },
  {
    id: 'dva-sec-045',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'Which AWS WAF capabilities help protect a serverless web API? (Select TWO.)',
    options: [
      'Managed rule groups for common vulnerabilities',
      'Rate-based rules to limit abusive traffic',
      'Automatic RDS password rotation',
      'KMS key generation inside WAF',
      'Replacing Cognito authentication entirely',
    ],
    correctAnswers: [0, 1],
    explanation:
      'WAF provides managed protections and rate limiting at the edge. It complements authentication and does not rotate database passwords or manage KMS keys.',
  },
  {
    id: 'dva-sec-046',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'A developer needs to share read-only access to a SecureString parameter across three Lambda functions in the same account. What is the best approach?',
    options: [
      'Duplicate the secret in each function\'s source code',
      'Grant a shared IAM policy with `ssm:GetParameter` and `kms:Decrypt` to each execution role',
      'Make the parameter a public String type',
      'Post the value in an SNS topic',
    ],
    correctAnswers: [1],
    explanation:
      'Reuse a single SecureString parameter and grant each Lambda execution role the minimum IAM permissions to read it. Avoid duplicating secret material in code.',
  },
  {
    id: 'dva-sec-047',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'An organization requires encryption of sensitive application data in an S3 bucket owned by another team in the same account. Who can use a customer managed KMS key for that bucket?',
    options: [
      'Only the root user automatically',
      'Any principal allowed by the KMS key policy and IAM policies',
      'Only CloudFront distributions',
      'Only users with console access',
    ],
    correctAnswers: [1],
    explanation:
      'Access to a customer managed CMK is controlled by the KMS key policy plus IAM policies. Grant decrypt and encrypt permissions only to roles and users that need them, following least privilege.',
  },
  {
    id: 'dva-sec-048',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'Which practices support secure handling of environment variables in Lambda for sensitive configuration? (Select THREE.)',
    options: [
      'Enable KMS encryption for environment variables',
      'Store highly sensitive secrets in Secrets Manager instead of env vars when possible',
      'Print all environment variables in logs during startup',
      'Commit env files with secrets to source control',
      'Use least-privilege IAM on the execution role',
    ],
    correctAnswers: [0, 1, 4],
    explanation:
      'Encrypt Lambda environment variables with KMS, prefer Secrets Manager for rotating secrets, and restrict the execution role. Never log or commit secret values.',
  },
  {
    id: 'dva-sec-049',
    domain: 'security',
    task: '2.3',
    tags: ['dva-c02', '2.3'],
    question:
      'A multi-tenant SaaS API must ensure tenant A cannot access tenant B\'s records in DynamoDB. Which authorization approach is most appropriate?',
    options: [
      'Use a single shared IAM role with admin access for all tenants',
      'Enforce tenant ID from the authenticated token in application logic and key design, with IAM scoped to the table only',
      'Rely on obscurity of record IDs without authentication',
      'Store all tenants in a public S3 bucket with prefixes',
    ],
    correctAnswers: [1],
    explanation:
      'Fine-grained application authorization uses claims from the authenticated identity, such as tenant ID in a JWT, plus partition key design and query filters. IAM scopes service access; the app enforces tenant isolation.',
  },
]
