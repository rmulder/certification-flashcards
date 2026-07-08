import type { Card } from '../../../core/types'

export const guidelinesCards: Card[] = [
  {
    id: 'aif-resp-001',
    domain: 'guidelines',
    task: '4.1',
    tags: ['bias', 'fundamentals'],
    question:
      'A hiring model consistently ranks candidates from one demographic lower despite similar qualifications. What type of issue is this?',
    options: [
      'Model underfitting',
      'Algorithmic bias',
      'Prompt injection',
      'Data residency violation',
    ],
    correctAnswers: [1],
    explanation:
      'Algorithmic bias occurs when a model produces systematically unfair outcomes for certain groups, often due to skewed training data or proxy features.',
  },
  {
    id: 'aif-resp-002',
    domain: 'guidelines',
    task: '4.1',
    tags: ['fairness', 'metrics'],
    question:
      'Which fairness approach requires equal prediction rates across protected groups for a loan approval model?',
    options: [
      'Demographic parity',
      'Maximum likelihood estimation',
      'Gradient clipping',
      'Token perplexity',
    ],
    correctAnswers: [0],
    explanation:
      'Demographic parity (statistical parity) compares outcome rates across groups. Other fairness definitions include equalized odds and predictive parity.',
  },
  {
    id: 'aif-resp-003',
    domain: 'guidelines',
    task: '4.1',
    tags: ['inclusivity', 'design'],
    question:
      'An image classifier fails on users with darker skin tones because the training set lacks representation. Which practice addresses this?',
    options: [
      'Increasing model parameters only',
      'Improving dataset diversity and inclusive data collection',
      'Disabling model monitoring',
      'Using only synthetic data without validation',
    ],
    correctAnswers: [1],
    explanation:
      'Inclusive AI requires diverse, representative datasets and testing across user populations so models perform equitably for all intended users.',
  },
  {
    id: 'aif-resp-004',
    domain: 'guidelines',
    task: '4.2',
    tags: ['bedrock', 'guardrails'],
    question:
      'Which Amazon Bedrock feature blocks harmful content and filters topics in generative AI responses?',
    options: [
      'Amazon Macie',
      'Amazon Bedrock Guardrails',
      'AWS Artifact',
      'Amazon Inspector',
    ],
    correctAnswers: [1],
    explanation:
      'Bedrock Guardrails apply content filters, denied topics, word filters, and contextual grounding checks to help keep model outputs safe and on-policy.',
  },
  {
    id: 'aif-resp-005',
    domain: 'guidelines',
    task: '4.2',
    tags: ['sagemaker', 'clarify'],
    question:
      'Which SageMaker capability detects bias in datasets and models before and after training?',
    options: [
      'SageMaker Clarify',
      'SageMaker Ground Truth',
      'Amazon Rekognition',
      'AWS Glue Crawler',
    ],
    correctAnswers: [0],
    explanation:
      'SageMaker Clarify provides bias metrics, feature attribution (SHAP), and model explainability reports for pre-training and post-training analysis.',
  },
  {
    id: 'aif-resp-006',
    domain: 'guidelines',
    task: '4.2',
    tags: ['sagemaker', 'model-monitor'],
    question:
      'A deployed model shows drift in input feature distributions over time. Which service detects this automatically?',
    options: [
      'Amazon SageMaker Model Monitor',
      'AWS CloudFormation',
      'Amazon Route 53',
      'AWS Step Functions',
    ],
    correctAnswers: [0],
    explanation:
      'SageMaker Model Monitor tracks data quality, model quality, bias drift, and feature attribution drift on production endpoints.',
  },
  {
    id: 'aif-resp-007',
    domain: 'guidelines',
    task: '4.2',
    tags: ['a2i', 'human-review'],
    question:
      'When should a team use Amazon Augmented AI (A2I) with a machine learning workflow?',
    options: [
      'To replace all human judgment permanently',
      'When low-confidence predictions need human review in the loop',
      'Only for encrypting training data',
      'To compile Python code faster',
    ],
    correctAnswers: [1],
    explanation:
      'A2I integrates human reviewers when model confidence is below a threshold, supporting responsible decisions in labeling and inference workflows.',
  },
  {
    id: 'aif-resp-008',
    domain: 'guidelines',
    task: '4.1',
    tags: ['overfitting', 'underfitting'],
    question:
      'A model scores 99% on training data but 62% on validation data. What is the most likely problem?',
    options: [
      'Underfitting',
      'Overfitting',
      'Data residency',
      'Prompt injection',
    ],
    correctAnswers: [1],
    explanation:
      'Large train-validation performance gaps indicate overfitting—the model memorized training patterns instead of generalizing to unseen data.',
  },
  {
    id: 'aif-resp-009',
    domain: 'guidelines',
    task: '4.1',
    tags: ['underfitting', 'fundamentals'],
    question:
      'A simple linear model performs poorly on both training and test sets for a complex classification task. What likely occurred?',
    options: [
      'Underfitting due to insufficient model complexity',
      'Overfitting from too much regularization only',
      'Successful generalization',
      'Complete elimination of bias',
    ],
    correctAnswers: [0],
    explanation:
      'Underfitting happens when a model is too simple to capture underlying patterns, yielding high error on both training and evaluation data.',
  },
  {
    id: 'aif-resp-010',
    domain: 'guidelines',
    task: '4.1',
    tags: ['explainability', 'transparency'],
    question:
      'A bank must explain why a credit model denied an application to comply with regulations. Which concept applies?',
    options: [
      'Model explainability',
      'Horizontal scaling',
      'Cold start inference',
      'Batch transform scheduling',
    ],
    correctAnswers: [0],
    explanation:
      'Explainability helps stakeholders understand model decisions through feature importance, SHAP values, or similar interpretability methods.',
  },
  {
    id: 'aif-resp-011',
    domain: 'guidelines',
    task: '4.2',
    tags: ['sagemaker', 'model-cards'],
    question:
      'Which AWS artifact documents intended use, training data, evaluation metrics, and ethical considerations for a model?',
    options: [
      'SageMaker Model Cards',
      'AWS CloudTrail event history',
      'Amazon S3 lifecycle policy',
      'VPC flow logs',
    ],
    correctAnswers: [0],
    explanation:
      'SageMaker Model Cards provide standardized documentation of model details, limitations, and responsible AI information for governance and transparency.',
  },
  {
    id: 'aif-resp-012',
    domain: 'guidelines',
    task: '4.1',
    tags: ['human-centered', 'design'],
    question:
      'What is a core principle of human-centered design for AI systems?',
    options: [
      'Optimize solely for model accuracy regardless of user impact',
      'Involve end users and stakeholders throughout development',
      'Eliminate all human oversight after deployment',
      'Hide model limitations from customers',
    ],
    correctAnswers: [1],
    explanation:
      'Human-centered design prioritizes user needs, accessibility, transparency, and meaningful human control over automated outcomes.',
  },
  {
    id: 'aif-resp-013',
    domain: 'guidelines',
    task: '4.1',
    tags: ['legal', 'ip'],
    question:
      'A team trains a generative model on copyrighted material without license. What responsible AI risk does this create?',
    options: [
      'Improved inference latency only',
      'Intellectual property and legal compliance risk',
      'Automatic GDPR compliance',
      'Elimination of hallucinations',
    ],
    correctAnswers: [1],
    explanation:
      'Using protected content without rights can violate copyright, licensing agreements, and organizational policies, creating legal and reputational exposure.',
  },
  {
    id: 'aif-resp-014',
    domain: 'guidelines',
    task: '4.1',
    tags: ['dataset', 'diversity'],
    question:
      'Why is dataset diversity important when building facial recognition systems?',
    options: [
      'It reduces storage costs automatically',
      'It helps models generalize across varied demographics and conditions',
      'It removes the need for validation sets',
      'It guarantees 100% accuracy',
    ],
    correctAnswers: [1],
    explanation:
      'Diverse datasets covering age, ethnicity, lighting, and pose reduce performance gaps and support fairer outcomes across user populations.',
  },
  {
    id: 'aif-resp-015',
    domain: 'guidelines',
    task: '4.2',
    tags: ['clarify', 'explainability'],
    question:
      'Which SageMaker Clarify capability helps explain individual predictions using SHAP values?',
    options: [
      'Feature attribution',
      'Spot instance management',
      'Hyperparameter tuning',
      'Network ACL configuration',
    ],
    correctAnswers: [0],
    explanation:
      'Clarify feature attribution explains how each input feature contributed to a specific prediction, supporting transparency and debugging.',
  },
  {
    id: 'aif-resp-016',
    domain: 'guidelines',
    task: '4.1',
    tags: ['bias', 'mitigation'],
    question:
      'Which actions can reduce bias in a training dataset? (Select TWO)',
    options: [
      'Audit labels for historical prejudice',
      'Balance representation across groups',
      'Remove all validation data',
      'Ignore protected attributes without analysis',
      'Disable model evaluation',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Bias mitigation starts with understanding data sources, auditing labels, and improving representation. Ignoring attributes without analysis can hide proxy bias.',
  },
  {
    id: 'aif-resp-017',
    domain: 'guidelines',
    task: '4.2',
    tags: ['guardrails', 'bedrock'],
    question:
      'Which Bedrock Guardrails features help enforce responsible generative AI use? (Select TWO)',
    options: [
      'Denied topic filters',
      'Content moderation filters',
      'EC2 instance type selection',
      'S3 cross-region replication',
      'Route 53 health checks',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Guardrails provide topic denial, harmful content filtering, PII redaction, and grounding checks—not infrastructure provisioning features.',
  },
  {
    id: 'aif-resp-018',
    domain: 'guidelines',
    task: '4.1',
    tags: ['fairness', 'tradeoffs'],
    question:
      'Why can optimizing for one fairness metric sometimes harm another?',
    options: [
      'Fairness definitions can conflict mathematically across groups',
      'AWS prohibits multiple metrics',
      'Models cannot produce probabilities',
      'All fairness metrics are identical',
    ],
    correctAnswers: [0],
    explanation:
      'Different fairness criteria (e.g., demographic parity vs. equalized odds) may be incompatible; teams must choose metrics aligned with business and ethical goals.',
  },
  {
    id: 'aif-resp-019',
    domain: 'guidelines',
    task: '4.2',
    tags: ['model-monitor', 'bias-drift'],
    question:
      'SageMaker Model Monitor detects that approval rates differ significantly by gender compared to baseline. What type of drift is this?',
    options: [
      'Bias drift',
      'Network latency drift',
      'DNS propagation drift',
      'Storage class drift',
    ],
    correctAnswers: [0],
    explanation:
      'Bias drift monitoring compares group-level outcome metrics over time against a baseline to catch emerging fairness issues in production.',
  },
  {
    id: 'aif-resp-020',
    domain: 'guidelines',
    task: '4.1',
    tags: ['transparency', 'limitations'],
    question:
      'What should teams communicate to users about AI system limitations?',
    options: [
      'Nothing; limitations reduce adoption',
      'Known failure modes, uncertainty, and appropriate use cases',
      'Only the model version number',
      'Internal AWS account IDs',
    ],
    correctAnswers: [1],
    explanation:
      'Transparent communication about capabilities, uncertainty, and boundaries helps users make informed decisions and reduces harmful over-reliance.',
  },
  {
    id: 'aif-resp-021',
    domain: 'guidelines',
    task: '4.2',
    tags: ['a2i', 'ground-truth'],
    question:
      'How does A2I improve label quality for a sensitive document classification project?',
    options: [
      'By routing uncertain items to trained human reviewers',
      'By deleting all ambiguous samples',
      'By disabling encryption',
      'By removing audit trails',
    ],
    correctAnswers: [0],
    explanation:
      'A2I sends low-confidence or random audit samples to human reviewers, improving label accuracy and accountability for sensitive workflows.',
  },
  {
    id: 'aif-resp-022',
    domain: 'guidelines',
    task: '4.1',
    tags: ['inclusivity', 'accessibility'],
    question:
      'Which design choice supports inclusivity in a voice assistant product?',
    options: [
      'Training only on one accent and dialect',
      'Testing with diverse speech patterns and accessibility needs',
      'Blocking users who require screen readers',
      'Using a single language without localization review',
    ],
    correctAnswers: [1],
    explanation:
      'Inclusive products are tested with diverse languages, accents, abilities, and assistive technologies to ensure equitable access and performance.',
  },
  {
    id: 'aif-resp-023',
    domain: 'guidelines',
    task: '4.1',
    tags: ['legal', 'privacy'],
    question:
      'Using customer chat logs to retrain a model without consent may violate which responsible AI concern?',
    options: [
      'Privacy and data use policy compliance',
      'GPU memory allocation',
      'Subnet CIDR planning',
      'Auto Scaling group size',
    ],
    correctAnswers: [0],
    explanation:
      'Responsible AI requires lawful, transparent data use aligned with privacy regulations, consent, and organizational data governance policies.',
  },
  {
    id: 'aif-resp-024',
    domain: 'guidelines',
    task: '4.2',
    tags: ['clarify', 'pre-training'],
    question:
      'When should a team run SageMaker Clarify bias analysis on a dataset?',
    options: [
      'Before training to identify potential disparities in labels and features',
      'Only after the model is deleted',
      'Never; bias cannot be measured',
      'Only during S3 bucket creation',
    ],
    correctAnswers: [0],
    explanation:
      'Pre-training bias analysis surfaces label imbalance, representation gaps, and disparate impact before expensive training and deployment.',
  },
  {
    id: 'aif-resp-025',
    domain: 'guidelines',
    task: '4.1',
    tags: ['overfitting', 'mitigation'],
    question:
      'Which techniques help reduce overfitting? (Select TWO)',
    options: [
      'Regularization',
      'Cross-validation',
      'Removing the test set',
      'Adding noise to labels intentionally without reason',
      'Training until training error is zero without validation',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Regularization penalizes complexity; cross-validation estimates generalization. Holding out test data and early stopping also help combat overfitting.',
  },
  {
    id: 'aif-resp-026',
    domain: 'guidelines',
    task: '4.2',
    tags: ['model-cards', 'governance'],
    question:
      'What information belongs in a SageMaker Model Card for governance reviewers?',
    options: [
      'Intended use cases, performance metrics, bias evaluation, and known limitations',
      'Employee home addresses',
      'Root account password history',
      'Unrelated marketing campaign budgets',
    ],
    correctAnswers: [0],
    explanation:
      'Model Cards capture purpose, metrics, training data summary, ethical risks, and caveats so reviewers can assess fitness for deployment.',
  },
  {
    id: 'aif-resp-027',
    domain: 'guidelines',
    task: '4.1',
    tags: ['human-centered', 'accountability'],
    question:
      'Who is accountable for harmful outcomes from an AI system deployed to customers?',
    options: [
      'The organization that builds and deploys the system',
      'No one; AI decisions are always neutral',
      'AWS automatically assumes all liability',
      'End users exclusively',
    ],
    correctAnswers: [0],
    explanation:
      'Under the shared responsibility model, customers remain accountable for how they design, deploy, and govern AI systems on AWS.',
  },
]
