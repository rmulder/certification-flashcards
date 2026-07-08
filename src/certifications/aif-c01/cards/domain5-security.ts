import type { Card } from '../../../core/types'

export const securityCards: Card[] = [
  {
    id: 'aif-sec-001',
    domain: 'security',
    task: '5.1',
    tags: ['shared-responsibility', 'fundamentals'],
    question:
      'In the AWS shared responsibility model for generative AI workloads, who configures IAM access to a Bedrock knowledge base?',
    options: [
      'AWS exclusively',
      'The customer',
      'Amazon Macie automatically',
      'Third-party auditors only',
    ],
    correctAnswers: [1],
    explanation:
      'Customers manage identities, permissions, and data access in the cloud. AWS secures the underlying infrastructure and managed service foundations.',
  },
  {
    id: 'aif-sec-002',
    domain: 'security',
    task: '5.2',
    tags: ['iam', 'least-privilege'],
    question:
      'Which IAM practice limits damage if a Bedrock application role is compromised?',
    options: [
      'Attaching AdministratorAccess to all roles',
      'Granting least-privilege permissions scoped to required actions and resources',
      'Sharing access keys in source code',
      'Using the root user for API calls',
    ],
    correctAnswers: [1],
    explanation:
      'Least privilege restricts roles to only the actions and resources needed, reducing blast radius if credentials are exposed or misused.',
  },
  {
    id: 'aif-sec-003',
    domain: 'security',
    task: '5.2',
    tags: ['encryption', 'data-protection'],
    question:
      'Which options protect sensitive training data at rest in Amazon S3? (Select TWO)',
    options: [
      'SSE-S3 or SSE-KMS server-side encryption',
      'Client-side encryption before upload',
      'Disabling all bucket policies',
      'Making the bucket public read',
      'Removing versioning',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Server-side encryption (SSE-S3, SSE-KMS) and client-side encryption protect data at rest. Public buckets and removed controls increase exposure.',
  },
  {
    id: 'aif-sec-004',
    domain: 'security',
    task: '5.2',
    tags: ['macie', 'pii'],
    question:
      'Which AWS service automatically discovers and classifies sensitive data such as PII in S3 buckets used for RAG corpora?',
    options: [
      'Amazon Macie',
      'Amazon Polly',
      'AWS Snowmobile',
      'Amazon Lightsail',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Macie uses machine learning to detect sensitive data types in S3, helping teams govern training and retrieval datasets.',
  },
  {
    id: 'aif-sec-005',
    domain: 'security',
    task: '5.2',
    tags: ['privatelink', 'networking'],
    question:
      'How does AWS PrivateLink help secure access to Amazon Bedrock from a VPC?',
    options: [
      'Routes traffic over the public internet without encryption',
      'Provides private connectivity without exposing traffic to the internet',
      'Replaces the need for IAM policies',
      'Automatically redacts all prompts',
    ],
    correctAnswers: [1],
    explanation:
      'PrivateLink enables private API access from VPCs through interface endpoints, keeping generative AI traffic off the public internet.',
  },
  {
    id: 'aif-sec-006',
    domain: 'security',
    task: '5.1',
    tags: ['prompt-injection', 'genai-threats'],
    question:
      'An attacker embeds instructions in retrieved documents to override system prompts. What attack is this?',
    options: [
      'Prompt injection',
      'Cross-region replication',
      'Spot instance interruption',
      'DNS failover',
    ],
    correctAnswers: [0],
    explanation:
      'Prompt injection manipulates model behavior through malicious or adversarial input— including poisoned RAG content— to bypass intended guardrails.',
  },
  {
    id: 'aif-sec-007',
    domain: 'security',
    task: '5.2',
    tags: ['guardrails', 'bedrock'],
    question:
      'Which Bedrock capability helps block harmful outputs and filter denied topics in production chatbots?',
    options: [
      'Amazon Bedrock Guardrails',
      'AWS Budgets',
      'Amazon Q Developer only',
      'AWS Cost Explorer',
    ],
    correctAnswers: [0],
    explanation:
      'Bedrock Guardrails apply content filters, topic denial, PII handling, and grounding checks to reduce unsafe or off-policy model responses.',
  },
  {
    id: 'aif-sec-008',
    domain: 'security',
    task: '5.1',
    tags: ['rag', 'grounding'],
    question:
      'Why is grounding important in a retrieval-augmented generation (RAG) architecture?',
    options: [
      'It ties responses to verified source documents, reducing unsupported hallucinations',
      'It eliminates the need for encryption',
      'It replaces IAM entirely',
      'It disables all logging',
    ],
    correctAnswers: [0],
    explanation:
      'Grounding anchors model answers in retrieved context, improving factual accuracy and enabling citation of authoritative sources.',
  },
  {
    id: 'aif-sec-009',
    domain: 'security',
    task: '5.2',
    tags: ['data-lineage', 'governance'],
    question:
      'What does data lineage tracking provide for an ML pipeline?',
    options: [
      'A record of how data flows and transforms from source to model',
      'Automatic model fine-tuning without datasets',
      'Unlimited free inference',
      'Physical data center floor plans',
    ],
    correctAnswers: [0],
    explanation:
      'Data lineage documents dataset origins, transformations, and usage— supporting auditability, reproducibility, and compliance investigations.',
  },
  {
    id: 'aif-sec-010',
    domain: 'security',
    task: '5.2',
    tags: ['model-cards', 'documentation'],
    question:
      'How do SageMaker Model Cards support security and governance reviews?',
    options: [
      'They document model purpose, data sources, metrics, and risk information for approvers',
      'They store IAM access keys',
      'They replace CloudTrail logging',
      'They encrypt network traffic automatically',
    ],
    correctAnswers: [0],
    explanation:
      'Model Cards give reviewers standardized information to assess deployment risk, compliance fit, and operational boundaries before production use.',
  },
  {
    id: 'aif-sec-011',
    domain: 'security',
    task: '5.2',
    tags: ['cloudtrail', 'audit'],
    question:
      'Which service records API calls made to Amazon Bedrock and SageMaker for security auditing?',
    options: [
      'AWS CloudTrail',
      'Amazon Connect',
      'AWS Amplify',
      'Amazon Chime',
    ],
    correctAnswers: [0],
    explanation:
      'CloudTrail logs management and data events for AWS API activity, enabling forensic analysis and compliance auditing.',
  },
  {
    id: 'aif-sec-012',
    domain: 'security',
    task: '5.2',
    tags: ['config', 'compliance'],
    question:
      'Which AWS service continuously evaluates resource configurations against rules and flags noncompliant AI infrastructure?',
    options: [
      'AWS Config',
      'Amazon Translate',
      'AWS Batch',
      'Amazon MQ',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Config tracks configuration changes and evaluates rules— such as encryption enabled or public access blocked— for ongoing compliance.',
  },
  {
    id: 'aif-sec-013',
    domain: 'security',
    task: '5.2',
    tags: ['audit-manager', 'frameworks'],
    question:
      'Which service helps automate evidence collection for compliance frameworks relevant to AI workloads?',
    options: [
      'AWS Audit Manager',
      'Amazon Kinesis Video Streams',
      'AWS Snowball Edge',
      'Amazon WorkSpaces',
    ],
    correctAnswers: [0],
    explanation:
      'Audit Manager prebuilds controls and collects evidence from AWS services to streamline audits against standards like SOC, HIPAA, or GDPR mappings.',
  },
  {
    id: 'aif-sec-014',
    domain: 'security',
    task: '5.2',
    tags: ['artifact', 'compliance-reports'],
    question:
      'Where can AWS customers download third-party audit reports and compliance certifications?',
    options: [
      'AWS Artifact',
      'Amazon S3 Glacier Instant Retrieval only',
      'IAM Access Analyzer',
      'VPC Reachability Analyzer',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Artifact provides on-demand access to AWS compliance reports, agreements, and certifications for customer audit programs.',
  },
  {
    id: 'aif-sec-015',
    domain: 'security',
    task: '5.1',
    tags: ['data-governance', 'access'],
    question:
      'What is a foundational data governance practice before using corporate documents in a generative AI knowledge base?',
    options: [
      'Classify data sensitivity and enforce access controls based on classification',
      'Upload all data without review',
      'Disable logging for speed',
      'Share one admin credential across teams',
    ],
    correctAnswers: [0],
    explanation:
      'Data governance classifies sensitivity, defines ownership, and enforces access policies so only authorized content enters AI systems.',
  },
  {
    id: 'aif-sec-016',
    domain: 'security',
    task: '5.1',
    tags: ['residency', 'sovereignty'],
    question:
      'A European bank requires customer data and inference to remain in the EU. Which concern does this address?',
    options: [
      'Data residency and sovereignty requirements',
      'Model quantization',
      'Hyperparameter search',
      'Spot fleet diversification',
    ],
    correctAnswers: [0],
    explanation:
      'Data residency constraints require storing and processing data in specific geographic regions to meet regulatory and contractual obligations.',
  },
  {
    id: 'aif-sec-017',
    domain: 'security',
    task: '5.1',
    tags: ['scoping-matrix', 'genai-security'],
    question:
      'What is the purpose of the AWS Generative AI Security Scoping Matrix?',
    options: [
      'Map security responsibilities and controls across generative AI architecture patterns',
      'Replace all IAM policies with defaults',
      'Provide GPU benchmarking scores',
      'Schedule SageMaker training jobs',
    ],
    correctAnswers: [0],
    explanation:
      'The scoping matrix helps teams identify security considerations— data, model, application, infrastructure— for different Gen AI deployment patterns.',
  },
  {
    id: 'aif-sec-018',
    domain: 'security',
    task: '5.2',
    tags: ['encryption', 'transit'],
    question:
      'How is data encrypted in transit when calling Amazon Bedrock APIs?',
    options: [
      'TLS encrypts connections between clients and AWS endpoints',
      'Data is sent unencrypted for lower latency',
      'Only metadata is encrypted',
      'Encryption in transit is not supported',
    ],
    correctAnswers: [0],
    explanation:
      'AWS API calls use TLS to protect data in transit. Customers should also use HTTPS for client applications and secure VPC endpoints where applicable.',
  },
  {
    id: 'aif-sec-019',
    domain: 'security',
    task: '5.1',
    tags: ['prompt-injection', 'mitigation'],
    question:
      'Which measures reduce prompt injection risk in a customer-facing chatbot? (Select TWO)',
    options: [
      'Input validation and sanitization',
      'Bedrock Guardrails with topic and content filters',
      'Publishing system prompts publicly',
      'Disabling all human review permanently',
      'Logging only failed authentication attempts',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Validate untrusted input, apply guardrails, separate instructions from user content, and monitor outputs. Exposing system prompts aids attackers.',
  },
  {
    id: 'aif-sec-020',
    domain: 'security',
    task: '5.2',
    tags: ['iam', 'roles'],
    question:
      'Why should a SageMaker notebook use an IAM role instead of long-term access keys?',
    options: [
      'Roles provide temporary credentials and integrate with AWS STS',
      'Access keys never expire and are more secure',
      'Roles bypass all permission checks',
      'Roles are only for S3 buckets',
    ],
    correctAnswers: [0],
    explanation:
      'IAM roles supply short-lived credentials via STS, avoiding embedded long-term keys and supporting fine-grained, auditable permissions.',
  },
  {
    id: 'aif-sec-021',
    domain: 'security',
    task: '5.2',
    tags: ['kms', 'encryption'],
    question:
      'Which service manages encryption keys used to encrypt SageMaker volumes and S3 objects?',
    options: [
      'AWS Key Management Service (KMS)',
      'Amazon EventBridge Scheduler',
      'AWS Service Catalog',
      'Amazon Elastic File System only',
    ],
    correctAnswers: [0],
    explanation:
      'AWS KMS creates and controls encryption keys for services like S3, SageMaker, and Bedrock custom model storage when SSE-KMS is enabled.',
  },
  {
    id: 'aif-sec-022',
    domain: 'security',
    task: '5.1',
    tags: ['rag', 'data-quality'],
    question:
      'Before indexing documents into a Bedrock knowledge base, what security step should occur?',
    options: [
      'Review content for sensitive or restricted information and apply access filters',
      'Index every file in the organization without classification',
      'Disable Guardrails to improve recall',
      'Remove CloudTrail to save costs',
    ],
    correctAnswers: [0],
    explanation:
      'Pre-index review prevents leaking confidential, regulated, or incorrect content into retrieval pipelines accessible by generative applications.',
  },
  {
    id: 'aif-sec-023',
    domain: 'security',
    task: '5.2',
    tags: ['logging', 'monitoring'],
    question:
      'Which AWS services support detective controls for AI workloads? (Select TWO)',
    options: [
      'AWS CloudTrail',
      'Amazon GuardDuty',
      'Deleting all VPC flow logs weekly',
      'Disabling AWS Config recorders',
      'Using only the root user',
    ],
    correctAnswers: [0, 1],
    explanation:
      'CloudTrail audits API activity; GuardDuty detects threats. Maintaining logs and configuration records is essential for security monitoring.',
  },
  {
    id: 'aif-sec-024',
    domain: 'security',
    task: '5.1',
    tags: ['shared-responsibility', 'bedrock'],
    question:
      'Which security task remains the customer responsibility when using Amazon Bedrock foundation models?',
    options: [
      'Securing application prompts, data, and IAM access to Bedrock resources',
      'Physical security of AWS data centers',
      'Patching the Bedrock hypervisor layer',
      'Operating AWS global network backbone',
    ],
    correctAnswers: [0],
    explanation:
      'AWS manages the foundation model service infrastructure. Customers secure their data, prompts, integrations, identities, and compliance posture.',
  },
  {
    id: 'aif-sec-025',
    domain: 'security',
    task: '5.2',
    tags: ['macie', 'governance'],
    question:
      'After Macie finds unencrypted S3 objects containing credentials in an ML dataset bucket, what should the team do first?',
    options: [
      'Remediate exposure by encrypting data, restricting access, and rotating secrets',
      'Ignore findings because ML data is always public',
      'Copy credentials into the model card',
      'Disable Macie permanently',
    ],
    correctAnswers: [0],
    explanation:
      'Sensitive data findings require immediate remediation— encryption, access restriction, secret rotation, and process fixes to prevent recurrence.',
  },
  {
    id: 'aif-sec-026',
    domain: 'security',
    task: '5.1',
    tags: ['scoping-matrix', 'architecture'],
    question:
      'When designing a RAG application, which layer of the Generative AI Security Scoping Matrix covers vector store access controls?',
    options: [
      'Data layer security',
      'Marketing layer security',
      'Billing layer security only',
      'Physical shipping layer',
    ],
    correctAnswers: [0],
    explanation:
      'The matrix spans data, model, application, and infrastructure layers. Vector stores, embeddings, and source documents fall under data layer controls.',
  },
  {
    id: 'aif-sec-027',
    domain: 'security',
    task: '5.2',
    tags: ['compliance', 'governance'],
    question:
      'Which combination supports ongoing governance of AI resources on AWS? (Select TWO)',
    options: [
      'AWS Config rules for resource compliance',
      'SageMaker Model Cards for model documentation',
      'Disabling all audit logs',
      'Storing secrets in public Git repositories',
      'Granting AdministratorAccess to all developers',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Config monitors infrastructure compliance; Model Cards document model risk. Strong governance requires logging, least privilege, and secure secret handling.',
  },
]
