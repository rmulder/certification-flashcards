import type { Card } from '../../../core/types'

/** AIF-C01 exam guide v1.1 supplement — in-scope services and objectives with thin deck coverage. */
export const aifExamGuideSupplementCards: Card[] = [
  {
    id: 'aif-sup-001',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['ai-concepts', 'deep-learning', 'agentic-ai', 'exam-guide'],
    question:
      'How do deep learning and agentic AI relate to machine learning and generative AI?',
    options: [
      'Deep learning is an ML approach using neural networks; agentic AI extends generative models with planning, tools, and multi-step workflows',
      'Deep learning replaces all generative AI; agentic AI is unrelated to LLMs',
      'Agentic AI only applies to batch inference on tabular data',
      'Deep learning cannot use unstructured text or images',
    ],
    correctAnswers: [0],
    explanation:
      'ML learns from data. Deep learning uses multi-layer neural networks for complex patterns. GenAI creates new content. Agentic AI adds autonomous task execution with tools and memory on top of foundation models.',
  },
  {
    id: 'aif-sup-002',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['inference', 'asynchronous', 'serverless', 'exam-guide'],
    question:
      'A document summarization job processes thousands of files overnight with no immediate response required. Which inference pattern fits best?',
    options: [
      'Asynchronous or batch inference',
      'Real-time synchronous inference with millisecond latency',
      'Interactive reinforcement learning only',
      'On-premises model training without deployment',
    ],
    correctAnswers: [0],
    explanation:
      'Batch and asynchronous inference handle large workloads offline or with deferred results. Real-time endpoints suit low-latency interactive use cases such as fraud scoring at checkout.',
  },
  {
    id: 'aif-sup-003',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['foundation-models', 'traditional-ml', 'exam-guide'],
    question:
      'When is a traditional ML model often preferred over a foundation model?',
    options: [
      'When strict explainability, smaller data needs, or predictable structured predictions are required with lower operational cost',
      'Whenever any text generation is needed',
      'When you must avoid all labeled data forever',
      'When regulatory requirements forbid any model monitoring',
    ],
    correctAnswers: [0],
    explanation:
      'Foundation models excel at language, multimodal, and generative tasks. Traditional ML can be better for narrow structured problems, interpretable models, and constrained budgets when an FM is unnecessary.',
  },
  {
    id: 'aif-sup-004',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['aws-services', 'kendra', 'exam-guide'],
    question:
      'Which AWS service provides enterprise search and FAQ-style answers over documents using machine learning?',
    options: [
      'Amazon Kendra',
      'Amazon Polly',
      'AWS Snowball',
      'Amazon Route 53',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Kendra is an intelligent search service for organizational documents and websites. Teams also use Bedrock Knowledge Bases for RAG, but Kendra remains an in-scope managed search option on the exam.',
  },
  {
    id: 'aif-sup-005',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['aws-services', 'personalize', 'exam-guide'],
    question:
      'A streaming service wants real-time personalized movie recommendations. Which AWS service is purpose-built for this?',
    options: [
      'Amazon Personalize',
      'Amazon Textract',
      'AWS Artifact',
      'Amazon Inspector',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Personalize builds recommendation models from user behavior and item metadata without requiring you to build ML infrastructure from scratch.',
  },
  {
    id: 'aif-sup-006',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['aws-services', 'textract', 'exam-guide'],
    question:
      'Which AWS service extracts text, forms, and tables from scanned PDFs and images?',
    options: [
      'Amazon Textract',
      'Amazon Translate',
      'Amazon Macie',
      'AWS Budgets',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Textract uses OCR and ML to pull structured data from documents—often upstream of RAG pipelines that index enterprise content.',
  },
  {
    id: 'aif-sup-007',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['aws-services', 'rekognition', 'computer-vision', 'exam-guide'],
    question:
      'A security team needs to detect faces and objects in uploaded images automatically. Which service should they use?',
    options: [
      'Amazon Rekognition',
      'Amazon Comprehend',
      'Amazon Kendra',
      'AWS Glue DataBrew',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Rekognition provides computer vision APIs for object detection, facial analysis, moderation, and related image and video tasks.',
  },
  {
    id: 'aif-sup-008',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['pipeline', 'bedrock', 'amazon-q', 'kiro', 'sagemaker', 'exam-guide'],
    question:
      'Which AWS offerings are highlighted for stages of the AI/ML pipeline in AIF-C01? (Select TWO.)',
    options: [
      'Amazon Bedrock and Amazon SageMaker AI',
      'Amazon Q and Kiro',
      'Amazon S3 Glacier for real-time FM inference',
      'AWS Snowmobile for prompt engineering only',
      'Route 53 as a vector database',
    ],
    correctAnswers: [0, 1],
    explanation:
      'The exam guide emphasizes Bedrock and SageMaker AI for building and deploying AI, plus builder tools such as Amazon Q and Kiro for assisted development workflows.',
  },
  {
    id: 'aif-sup-009',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['amazon-nova', 'bedrock', 'exam-guide'],
    question:
      'What is Amazon Nova in the AWS generative AI portfolio?',
    options: [
      'A family of AWS foundation models available through Amazon Bedrock for text, image, and multimodal workloads',
      'A network firewall for VPC traffic only',
      'A compliance report download portal',
      'A batch ETL service for structured SQL only',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Nova models are AWS-developed foundation models offered on Bedrock alongside partner models, supporting generative use cases with AWS-managed infrastructure.',
  },
  {
    id: 'aif-sup-010',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['aws-transform', 'exam-guide'],
    question:
      'What is AWS Transform designed to help organizations do?',
    options: [
      'Accelerate modernization of legacy applications using generative AI-assisted analysis and transformation',
      'Replace Amazon Bedrock for all chat applications',
      'Provide DNS routing for CloudFront distributions',
      'Store encryption keys in hardware security modules only',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Transform is an in-scope GenAI-related service that helps teams analyze and modernize legacy codebases—such as mainframe or .NET workloads—using AI-assisted transformation workflows.',
  },
  {
    id: 'aif-sup-011',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['amazon-quick', 'analytics', 'exam-guide'],
    question:
      'How does Amazon Quick support generative AI use cases for business teams?',
    options: [
      'It lets users ask natural-language questions of business data and build insights or dashboards with generative assistance',
      'It trains diffusion models from scratch on satellite imagery only',
      'It replaces IAM for Bedrock API authentication',
      'It is a physical data transfer appliance',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Quick (including Quick Sight generative capabilities) helps analysts explore data through natural language and AI-assisted visualizations—connecting analytics to business decision making.',
  },
  {
    id: 'aif-sup-012',
    domain: 'applications',
    task: '3.1',
    tags: ['customization', 'cost-tradeoffs', 'exam-guide'],
    question:
      'Which FM customization approach is usually lowest cost and fastest to update when facts change frequently?',
    options: [
      'RAG or in-context learning with a synced knowledge base',
      'Full pre-training from random initialization',
      'Continued pre-training on the entire public internet weekly',
      'Building a custom tokenizer without a model',
    ],
    correctAnswers: [0],
    explanation:
      'RAG and in-context learning avoid expensive weight updates for changing facts. Fine-tuning suits behavior and style; pre-training and continued pre-training are highest cost and slowest to refresh factual knowledge.',
  },
  {
    id: 'aif-sup-013',
    domain: 'applications',
    task: '3.2',
    tags: ['prompt-poisoning', 'security', 'exam-guide'],
    question:
      'An attacker inserts malicious instructions into training or retrieval data so the model later behaves incorrectly. What is this called?',
    options: [
      'Prompt or data poisoning',
      'Model distillation',
      'Semantic chunk overlap',
      'Instruction tuning',
    ],
    correctAnswers: [0],
    explanation:
      'Poisoning corrupts data used for fine-tuning or RAG retrieval. Mitigations include data validation, access controls on knowledge sources, guardrails, and monitoring for anomalous outputs.',
  },
  {
    id: 'aif-sup-014',
    domain: 'applications',
    task: '3.4',
    tags: ['evaluation', 'llm-as-judge', 'exam-guide'],
    question:
      'A team uses one foundation model to score another model\'s answers for helpfulness and correctness. Which evaluation approach is this?',
    options: [
      'LLM-as-a-judge',
      'Batch transform on tabular CSV only',
      'VPC peering analysis',
      'S3 lifecycle transition',
    ],
    correctAnswers: [0],
    explanation:
      'LLM-as-a-judge uses a capable model to evaluate outputs against rubrics—often combined with human review and automatic metrics such as ROUGE, BLEU, or BERTScore.',
  },
  {
    id: 'aif-sup-015',
    domain: 'applications',
    task: '3.4',
    tags: ['business-metrics', 'evaluation', 'exam-guide'],
    question:
      'Which metrics align generative AI application evaluation with business objectives? (Select TWO.)',
    options: [
      'Task completion rate',
      'Cost per interaction',
      'Number of VPC subnets',
      'SSL certificate expiration date',
      'EBS volume type only',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Business alignment metrics include task completion rate, user satisfaction, engagement, ROI, and cost per interaction—not just n-gram overlap scores from automatic text metrics.',
  },
  {
    id: 'aif-sup-016',
    domain: 'guidelines',
    task: '4.1',
    tags: ['legal', 'intellectual-property', 'exam-guide'],
    question:
      'Which is a legal or trust risk when deploying generative AI for customer-facing content?',
    options: [
      'Potential intellectual property infringement or biased outputs that erode customer trust',
      'Automatic compliance with every global regulation without review',
      'Guaranteed elimination of all model hallucinations',
      'Removal of the need for data governance',
    ],
    correctAnswers: [0],
    explanation:
      'GenAI can reproduce copyrighted material, generate harmful or biased content, or produce hallucinations. Responsible deployment requires policy review, attribution, human oversight, and clear customer communication.',
  },
  {
    id: 'aif-sup-017',
    domain: 'guidelines',
    task: '4.1',
    tags: ['sustainability', 'model-selection', 'exam-guide'],
    question:
      'Why might a team choose a smaller foundation model for a simple classification-style task?',
    options: [
      'To reduce compute cost and environmental impact while meeting accuracy needs',
      'Because larger models always produce zero carbon emissions',
      'Because sustainability is irrelevant to cloud AI',
      'To eliminate the need for any evaluation',
    ],
    correctAnswers: [0],
    explanation:
      'Responsible model selection considers environmental impact and cost. Right-sizing models and inference avoids over-provisioning compute for tasks that do not require the largest FM.',
  },
  {
    id: 'aif-sup-018',
    domain: 'security',
    task: '5.1',
    tags: ['agentcore', 'identity', 'exam-guide'],
    question:
      'What do Amazon Bedrock AgentCore Identity and Policy features help with?',
    options: [
      'Managing secure agent authentication and enforcing policy guardrails for tool and resource access',
      'Replacing AWS KMS for all encryption keys',
      'Training computer vision models on satellite data only',
      'Provisioning EC2 Reserved Instances',
    ],
    correctAnswers: [0],
    explanation:
      'AgentCore Identity integrates authentication for agents acting on behalf of users or systems. Policy controls help limit which tools and data agents can access—supporting least privilege for agentic workloads.',
  },
  {
    id: 'aif-sup-019',
    domain: 'security',
    task: '5.1',
    tags: ['data-leakage', 'output-filtering', 'exam-guide'],
    question:
      'Which practices reduce data leakage and unsafe outputs in a generative AI application? (Select TWO.)',
    options: [
      'Bedrock Guardrails for output filtering and PII handling',
      'Logging and auditing AI interactions with CloudTrail',
      'Publishing all prompts and responses to public forums',
      'Disabling encryption for lower latency',
      'Granting agents unrestricted AdministratorAccess',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Data leakage prevention combines access controls, guardrails, output validation, toxicity filters, and audit trails. Logging AI interactions supports forensic review and compliance requirements.',
  },
  {
    id: 'aif-sup-020',
    domain: 'security',
    task: '5.1',
    tags: ['hallucination-detection', 'grounding', 'exam-guide'],
    question:
      'Which methods help detect or reduce hallucinations in production GenAI systems? (Select TWO.)',
    options: [
      'RAG grounding with citations to source documents',
      'Confidence scoring and output validation against retrieved context',
      'Removing all retrieval and increasing temperature to maximum',
      'Disabling human review for regulated decisions',
      'Storing model weights in public S3 buckets',
    ],
    correctAnswers: [0, 1],
    explanation:
      'Grounding ties answers to verified sources. Validation checks, guardrails, and confidence thresholds flag unsupported claims before users see them—especially important in high-stakes domains.',
  },
  {
    id: 'aif-sup-021',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['interpretability', 'limitations', 'percipio', 'sample-exam'],
    question:
      'Which potential disadvantage of generative AI is characterized by challenges in understanding and explaining how models make decisions and generate outputs?',
    options: [
      'Nondeterminism',
      'Interpretability',
      'Hallucination',
      'Inaccuracy',
    ],
    correctAnswers: [1],
    explanation:
      'Interpretability (or explainability) refers to difficulty tracing why a model produced a specific output. Hallucinations are false content; inaccuracy is wrong answers; nondeterminism is variable outputs from the same input.',
  },
  {
    id: 'aif-sup-022',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['maintenance', 'capabilities', 'percipio', 'sample-exam'],
    question:
      'Which benefit of the simplicity of generative AI enables easier troubleshooting and updating, leading to lower costs and fewer errors?',
    options: [
      'Ease of use',
      'Security',
      'Maintenance',
      'Scalability',
    ],
    correctAnswers: [2],
    explanation:
      'Simpler GenAI architectures and managed services can reduce ongoing maintenance effort—making updates, debugging, and operational fixes less costly than highly bespoke legacy ML stacks.',
  },
  {
    id: 'aif-sup-023',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['benchmarking', 'model-selection', 'percipio', 'sample-exam'],
    question:
      'In a lifecycle for choosing the appropriate generative AI model, which phase uses AWS tools to test and compare model performance against defined metrics?',
    options: [
      'Consider ethics and regulations',
      'Identify use cases',
      'Data quality and quantity',
      'Benchmarking',
    ],
    correctAnswers: [3],
    explanation:
      'Benchmarking evaluates candidate models on standardized or business metrics—often using services such as Amazon Bedrock Model Evaluation—after use cases are defined and before final selection.',
  },
  {
    id: 'aif-sup-024',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['responsiveness', 'capabilities', 'percipio', 'sample-exam'],
    question:
      'Which statement defines the responsiveness advantage of generative AI?',
    options: [
      'The capacity to be fine-tuned and customized',
      'The ability to streamline and automate complex tasks',
      'The capacity to generate outputs that are based on real-world data',
      'The ability to react quickly to changes and requests',
    ],
    correctAnswers: [3],
    explanation:
      'Responsiveness means GenAI can adapt quickly to new prompts, user requests, and changing conditions at inference time. Adaptability emphasizes fine-tuning and customization; automation emphasizes workflow efficiency.',
  },
  {
    id: 'aif-sup-025',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['business-metrics', 'conversion-rate', 'percipio', 'sample-exam'],
    question:
      'Which metric for generative AI applications measures effectiveness in achieving desired outcomes such as user engagement, sales, or other KPIs?',
    options: [
      'Ground truth comparison',
      'Average revenue per user',
      'Cross-domain performance',
      'Conversion rate',
    ],
    correctAnswers: [3],
    explanation:
      'Conversion rate tracks how often users complete a desired action (purchase, signup, click-through)—a business KPI for GenAI-assisted experiences. ARPU is related but distinct; ground truth comparison is an evaluation technique, not a business outcome metric.',
  },
  {
    id: 'aif-sup-026',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['inaccuracy', 'limitations', 'percipio', 'sample-exam'],
    question:
      'Inaccuracies in generative AI can happen for several reasons. Which are valid causes? (Select FOUR.)',
    options: [
      'Issues with the quality and currency of the training data',
      'The vast and diverse datasets used for training alone',
      'Nondeterministic outputs',
      'Scalability and costs alone',
      'Limited generalization skills',
      'The statistical nature of the models',
    ],
    correctAnswers: [0, 2, 4, 5],
    explanation:
      'Inaccuracy stems from stale or poor training data, probabilistic (statistical) generation, limited generalization beyond training distribution, and nondeterministic sampling. Dataset size or diversity alone is not inherently a cause; scalability and cost are operational concerns, not direct inaccuracy drivers.',
  },
  {
    id: 'aif-sup-027',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['nondeterminism', 'limitations', 'percipio', 'sample-exam'],
    question:
      'Which disadvantage of generative AI refers to the inherent unpredictability of models that can produce different outputs from the same input under varying conditions?',
    options: [
      'Inaccuracy',
      'Hallucination',
      'Nondeterminism',
      'Interpretability',
    ],
    correctAnswers: [2],
    explanation:
      'Nondeterminism means identical prompts can yield different completions when temperature, sampling, or context varies. Inaccuracy is factual wrongness; hallucination is confident false content; interpretability is explainability difficulty.',
  },
  {
    id: 'aif-sup-028',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['adaptability', 'capabilities', 'percipio', 'sample-exam'],
    question:
      'Which statement defines the adaptability advantage of generative AI?',
    options: [
      'The ability to streamline and automate complex tasks',
      'The capacity to be fine-tuned and customized',
      'The capacity to generate outputs that are based on real-world data',
      'The ability to react quickly to changes and requests',
    ],
    correctAnswers: [1],
    explanation:
      'Adaptability highlights that foundation models can be fine-tuned, customized, or prompt-engineered for domain-specific tasks. Responsiveness is quick reaction to requests; automation is workflow efficiency; real-world data grounding relates to RAG and factual grounding.',
  },
  {
    id: 'aif-sup-029',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['efficiency', 'aws-genai', 'percipio', 'sample-exam'],
    question:
      'What advantage of building applications with AWS generative AI lies in its ability to streamline and automate the development process as well as optimize performance?',
    options: [
      'Accessibility',
      'Cost-effective',
      'Speed to market',
      'Efficiency',
    ],
    correctAnswers: [3],
    explanation:
      'Efficiency on AWS comes from managed services, reusable patterns, and automation that reduce undifferentiated work and improve resource use. Speed to market is related but distinct—efficiency emphasizes streamlined development and optimized performance.',
  },
  {
    id: 'aif-sup-030',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['bedrock', 'foundation-models', 'percipio', 'sample-exam'],
    question:
      'Amazon Bedrock offers high-performing foundation models from leading AI companies. Which providers are supported on Bedrock? (Select FOUR.)',
    options: [
      'Cohere',
      'AI21 Labs',
      'Meta',
      'Ripple',
      'Quant',
      'Anthropic',
    ],
    correctAnswers: [0, 1, 2, 5],
    explanation:
      'Bedrock hosts models from providers such as Anthropic, Meta, Cohere, AI21 Labs, Amazon (Nova), and others depending on Region. Ripple and Quant are not Bedrock foundation model providers.',
  },
  {
    id: 'aif-sup-031',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['partyrock', 'percipio', 'sample-exam'],
    question:
      'Which Amazon service is designed to make generative AI app-building fun and intuitive—for example generating dad jokes, personalized playlists, or optimizing a party budget?',
    options: [
      'Amazon PartyRock',
      'Amazon SageMaker JumpStart',
      'Amazon Bedrock',
      'Amazon Q',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon PartyRock is a playful, no-code/low-code GenAI app builder for experimenting with prompts and workflows. Bedrock is the FM API platform; JumpStart is SageMaker model hub; Amazon Q is workplace and developer assistance.',
  },
  {
    id: 'aif-sup-032',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['amazon-q', 'ide', 'percipio', 'sample-exam'],
    question:
      'Which Amazon service integrates well with various IDEs such as Visual Studio Code and JetBrains?',
    options: [
      'Amazon SageMaker JumpStart',
      'Amazon PartyRock',
      'Amazon Bedrock',
      'Amazon Q',
    ],
    correctAnswers: [3],
    explanation:
      'Amazon Q Developer (and related Q products) embed in IDEs to assist with coding, AWS guidance, and refactoring. Bedrock is invoked via APIs/SDKs; PartyRock is a separate app builder; JumpStart is accessed through SageMaker.',
  },
  {
    id: 'aif-sup-033',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['token-pricing', 'caching', 'percipio', 'sample-exam'],
    question:
      'Which statement pertains to the token-based pricing cost tradeoff of AWS generative AI services?',
    options: [
      'Training custom models requires significant computational resources, which can increase costs',
      'Implementing caching strategies allows reuse of previous responses for similar queries',
      'Utilizing high-performance models will often require more computational resources, leading to higher costs',
      'Pre-trained models are more cost-effective but may not perform as well for specialized tasks',
    ],
    correctAnswers: [1],
    explanation:
      'Prompt caching and response reuse reduce repeated token processing for similar queries—a direct token-pricing optimization. Larger models and custom training affect cost differently; pre-training tradeoffs are about customization, not caching specifically.',
  },
  {
    id: 'aif-sup-034',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['security', 'zero-trust', 'percipio', 'sample-exam'],
    question:
      'Which of the following is a security benefit of the AWS infrastructure for generative AI applications?',
    options: [
      'Bias mitigation',
      'Sustainability',
      'Ethical AI development',
      'Zero-trust architecture',
    ],
    correctAnswers: [3],
    explanation:
      'AWS infrastructure supports zero-trust security patterns—identity verification, least privilege, encryption, and network isolation—for GenAI workloads. Bias mitigation and ethical AI are responsible-AI practices; sustainability is an environmental consideration.',
  },
  {
    id: 'aif-sup-035',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['sagemaker-jumpstart', 'percipio', 'sample-exam'],
    question:
      'What is an ML hub designed to accelerate the ML journey by offering foundation models, built-in algorithms, and prebuilt ML solutions deployable with a few clicks?',
    options: [
      'Amazon PartyRock',
      'Amazon Bedrock',
      'Amazon Q',
      'Amazon SageMaker JumpStart',
    ],
    correctAnswers: [3],
    explanation:
      'SageMaker JumpStart provides pretrained models, notebooks, and solutions for quick experimentation and deployment on SageMaker. Bedrock offers serverless FM APIs; PartyRock targets playful app building; Q is an assistant.',
  },
  {
    id: 'aif-sup-036',
    domain: 'applications',
    task: '3.1',
    tags: ['rag', 'lifecycle', 'percipio', 'sample-exam'],
    question:
      'What is the first step in the retrieval augmented generation (RAG) lifecycle?',
    options: [
      'Context addition',
      'Creating embeddings',
      'Response generation',
      'Similarity search',
    ],
    correctAnswers: [1],
    explanation:
      'RAG begins by ingesting and embedding source documents so they can be indexed. Similarity search retrieves relevant chunks, context is added to the prompt, and the model generates the final response.',
  },
  {
    id: 'aif-sup-037',
    domain: 'applications',
    task: '3.1',
    tags: ['model-selection', 'computational-cost', 'percipio', 'sample-exam'],
    question:
      'Which selection criterion for choosing pre-trained models entails determining resources needed to train and fine-tune the model, such as GPU/CPU time and memory usage?',
    options: [
      'Historical performance data',
      'Computational cost',
      'Transfer learning capability',
      'Performance',
    ],
    correctAnswers: [1],
    explanation:
      'Computational cost covers hardware, training time, memory, and ongoing inference expense. Performance metrics measure quality; transfer learning describes reuse of pretrained weights; historical data informs benchmarks.',
  },
  {
    id: 'aif-sup-038',
    domain: 'applications',
    task: '3.1',
    tags: ['agents', 'multi-step', 'percipio', 'sample-exam'],
    question:
      'Which AWS feature enhances efficiency, accuracy, and flexibility by breaking down tasks and specializing in specific roles?',
    options: [
      'Parallel processors',
      'Vector indexes',
      'Dynamic adapters',
      'Multi-step task agents',
    ],
    correctAnswers: [3],
    explanation:
      'Multi-step agents (for example Amazon Bedrock Agents) decompose complex goals into specialized subtasks and tool calls. Vector indexes support retrieval; adapters relate to parameter-efficient fine-tuning.',
  },
  {
    id: 'aif-sup-039',
    domain: 'applications',
    task: '3.1',
    tags: ['pgvector', 'aurora', 'percipio', 'sample-exam'],
    question:
      'Which extension is used by Amazon Aurora and RDS for PostgreSQL to store and manipulate vector embeddings directly within the relational database?',
    options: [
      'DocumentDB',
      'OpenSearch',
      'pgvector',
      'k-NN plugin',
    ],
    correctAnswers: [2],
    explanation:
      'The pgvector extension adds vector storage and similarity search to PostgreSQL-compatible Aurora and RDS. OpenSearch uses its own k-NN indexing; DocumentDB is a separate document database service.',
  },
  {
    id: 'aif-sup-040',
    domain: 'applications',
    task: '3.1',
    tags: ['bedrock', 'knowledge-bases', 'rag', 'percipio', 'sample-exam'],
    question:
      'Which AWS service helps manage the added costs of using RAG in foundation model customization?',
    options: [
      'Amazon Bedrock Knowledge Bases',
      'Amazon OpenSearch Service alone without Bedrock',
      'Amazon Neptune Analytics alone without ingestion',
      'Amazon DocumentDB with MongoDB compatibility alone',
    ],
    correctAnswers: [0],
    explanation:
      'Bedrock Knowledge Bases provides managed ingestion, chunking, embedding, and retrieval—reducing custom RAG pipeline work and helping control operational complexity and cost versus fully DIY stacks.',
  },
  {
    id: 'aif-sup-041',
    domain: 'applications',
    task: '3.1',
    tags: ['temperature', 'inference-parameters', 'percipio', 'sample-exam'],
    question:
      'Which inference parameter affects the randomness and diversity of model responses by modulating the probability distribution for the next token?',
    options: [
      'Temperature',
      'Input length',
      'Output length',
      'Latency',
    ],
    correctAnswers: [0],
    explanation:
      'Temperature scales token probabilities—higher values increase randomness and diversity; lower values produce more deterministic outputs. Max output tokens caps length; latency is a performance metric, not a sampling parameter.',
  },
  {
    id: 'aif-sup-042',
    domain: 'applications',
    task: '3.2',
    tags: ['hijacking', 'prompt-risks', 'percipio', 'sample-exam'],
    question:
      'Which prompt engineering risk refers to malicious actors manipulating prompts so the model adopts an unintended persona or behavior?',
    options: [
      'Jailbreaking',
      'Hijacking',
      'Exposure',
      'Poisoning',
    ],
    correctAnswers: [1],
    explanation:
      'Hijacking shifts the model into an unintended role or behavior via crafted prompts. Jailbreaking bypasses safety policies; poisoning corrupts training or retrieval data; exposure leaks sensitive prompt or context information.',
  },
  {
    id: 'aif-sup-043',
    domain: 'applications',
    task: '3.2',
    tags: ['latent-space', 'prompt-engineering', 'percipio', 'sample-exam'],
    question:
      'Which prompt engineering concept refers to the high-dimensional space where the model represents and processes input data?',
    options: [
      'Model latent space',
      'Instruction',
      'Negative prompt',
      'Context',
    ],
    correctAnswers: [0],
    explanation:
      'Latent space is the internal representation where embeddings and hidden states capture meaning. Context is what you provide in the prompt; instructions direct behavior; negative prompts steer diffusion models away from unwanted content.',
  },
  {
    id: 'aif-sup-044',
    domain: 'applications',
    task: '3.2',
    tags: ['concision', 'best-practices', 'percipio', 'sample-exam'],
    question:
      'Which prompt engineering best practice involves being clear and to the point, using the fewest words necessary to convey instructions effectively?',
    options: [
      'Quality',
      'Concision',
      'Guidance',
      'Flexibility',
    ],
    correctAnswers: [1],
    explanation:
      'Concision reduces noise and token cost while keeping instructions unambiguous. Quality and guidance matter too, but this item defines concise, focused prompting.',
  },
  {
    id: 'aif-sup-045',
    domain: 'applications',
    task: '3.3',
    tags: ['training', 'data-collection', 'percipio', 'sample-exam'],
    question:
      'What is the first step when training a foundation model?',
    options: [
      'Customize the model',
      'Data collection',
      'Deployment',
      'Fine-tuning',
    ],
    correctAnswers: [1],
    explanation:
      'Training begins with gathering and curating data that matches the target task and quality standards. Customization, fine-tuning, and deployment come after data is prepared and the base model is selected.',
  },
  {
    id: 'aif-sup-046',
    domain: 'applications',
    task: '3.4',
    tags: ['benchmarks', 'datasets', 'percipio', 'sample-exam'],
    question:
      'Which are common real-world benchmark datasets used when evaluating models on AWS? (Select FOUR.)',
    options: [
      'ROUGE',
      'RLHF',
      'ImageNet',
      'MS MARCO',
      'SQuAD',
      'GLUE',
    ],
    correctAnswers: [2, 3, 4, 5],
    explanation:
      'ImageNet (vision), MS MARCO (search/QA), SQuAD (reading comprehension), and GLUE (language understanding) are benchmark datasets. ROUGE is a metric; RLHF is a training alignment technique.',
  },
  {
    id: 'aif-sup-047',
    domain: 'applications',
    task: '3.3',
    tags: ['fine-tuning', 'dataset-size', 'percipio', 'sample-exam'],
    question:
      'Which statement about preparing to fine-tune a foundation model based on dataset size is true?',
    options: [
      'If the dataset is too small, use sampling to create a representative subset only',
      'A larger dataset can help the model generalize better and improve task performance',
      'The dataset should be kept sufficiently small to limit what the model learns',
      'Large datasets should never use data augmentation',
    ],
    correctAnswers: [1],
    explanation:
      'More high-quality labeled examples usually improve fine-tuning generalization up to practical limits. Very small sets may need augmentation or transfer learning; size alone does not replace data quality.',
  },
  {
    id: 'aif-sup-048',
    domain: 'applications',
    task: '3.4',
    tags: ['business-metrics', 'deployment', 'percipio', 'sample-exam'],
    question:
      'Which step helps determine if a foundation model meets business goals based on user engagement?',
    options: [
      'Deploy the foundation model and integrate it into relevant user-facing applications',
      'Establish productivity metrics only without any deployment',
      'Choose a model without measuring user interaction',
      'Run offline benchmarks without production integration',
    ],
    correctAnswers: [0],
    explanation:
      'User engagement and business KPIs are measured in real applications with actual users. Offline benchmarks and metric definition matter, but integrated deployment is how you observe engagement outcomes.',
  },
  {
    id: 'aif-sup-049',
    domain: 'applications',
    task: '3.4',
    tags: ['bleu', 'evaluation', 'percipio', 'sample-exam'],
    question:
      'Which foundation model performance metric uses a brevity penalty to avoid favoring shorter generated texts?',
    options: [
      'GLUE',
      'BERTScore',
      'BLEU',
      'ROUGE-N',
    ],
    correctAnswers: [2],
    explanation:
      'BLEU applies a brevity penalty so overly short translations or generations are not scored too highly. ROUGE focuses on recall-oriented n-gram overlap; BERTScore uses contextual embeddings; GLUE is a benchmark suite.',
  },
  {
    id: 'aif-sup-050',
    domain: 'applications',
    task: '3.3',
    tags: ['transfer-learning', 'fine-tuning', 'percipio', 'sample-exam'],
    question:
      'Which fine-tuning approach leverages a pre-trained model and adapts it to a specific task using domain-specific data?',
    options: [
      'Transfer learning',
      'Continuous pre-training only on random web crawl with no task data',
      'Deleting all pre-trained weights before training',
      'Prompt injection testing',
    ],
    correctAnswers: [0],
    explanation:
      'Transfer learning starts from pretrained weights and adapts them with domain or task data—closely related to fine-tuning and domain adaptation in foundation model workflows.',
  },
  {
    id: 'aif-sup-051',
    domain: 'guidelines',
    task: '4.2',
    tags: ['explainability', 'non-explainable', 'percipio', 'sample-exam'],
    question:
      'Which type of ML model has decision processes that are not easily interpretable by humans?',
    options: [
      'Non-transparent',
      'Transparent',
      'Explainable',
      'Non-explainable',
    ],
    correctAnswers: [3],
    explanation:
      'Non-explainable (or black-box) models such as deep neural networks can be highly accurate but difficult to interpret. Transparent and explainable models support clearer reasoning about individual predictions.',
  },
  {
    id: 'aif-sup-052',
    domain: 'guidelines',
    task: '4.2',
    tags: ['human-centered', 'controllability', 'percipio', 'sample-exam'],
    question:
      'Which human-centered design principle for explainable AI involves mechanisms to monitor and steer AI behavior within desired parameters?',
    options: [
      'Governance',
      'Controllability',
      'Security',
      'Explainability',
    ],
    correctAnswers: [1],
    explanation:
      'Controllability gives operators and users ways to monitor outputs and intervene when systems drift from intended behavior. Explainability focuses on understanding decisions; governance is broader organizational oversight.',
  },
  {
    id: 'aif-sup-053',
    domain: 'guidelines',
    task: '4.2',
    tags: ['tradeoffs', 'performance', 'interpretability', 'percipio', 'sample-exam'],
    question:
      'Which tradeoff occurs when more complex models such as deep neural networks achieve higher accuracy but are less interpretable?',
    options: [
      'Performance',
      'Safety',
      'Bias',
      'Transparency',
    ],
    correctAnswers: [0],
    explanation:
      'This exam item frames the accuracy-interpretability tension as a performance tradeoff: more complex models often deliver higher predictive performance at the cost of transparency into how decisions are made.',
  },
  {
    id: 'aif-sup-054',
    domain: 'guidelines',
    task: '4.1',
    tags: ['legal', 'hallucinations', 'percipio', 'sample-exam'],
    question:
      'Which is a legal risk associated with AI hallucinations?',
    options: [
      'Misleading content',
      'Discrimination claims only with no other legal exposure',
      'Reputational damage alone with no legal implications',
      'Data privacy violations unrelated to false outputs',
    ],
    correctAnswers: [0],
    explanation:
      'Hallucinated or false content can create legal exposure through misleading claims, advertising violations, or negligent advice. Reputation harm and bias claims may also arise, but this item identifies misleading content as the legal risk.',
  },
  {
    id: 'aif-sup-055',
    domain: 'guidelines',
    task: '4.1',
    tags: ['veracity', 'responsible-ai', 'percipio', 'sample-exam'],
    question:
      'Which responsible AI feature focuses on ensuring systems produce correct outputs even when faced with unexpected or adversarial inputs?',
    options: [
      'Safety',
      'Veracity',
      'Fairness',
      'Inclusivity',
    ],
    correctAnswers: [1],
    explanation:
      'Veracity emphasizes truthfulness and correctness of outputs. Safety covers harm prevention; fairness addresses equitable treatment; inclusivity addresses diverse representation and access.',
  },
  {
    id: 'aif-sup-056',
    domain: 'guidelines',
    task: '4.1',
    tags: ['transparency', 'inclusivity', 'percipio', 'sample-exam'],
    question:
      'Which aspect of inclusivity and diversity provides clear documentation about a dataset, including sources, collection methods, and potential biases?',
    options: [
      'Bias minimization',
      'Relevance',
      'Transparency',
      'Balance',
    ],
    correctAnswers: [2],
    explanation:
      'Dataset transparency documents provenance, collection practices, and known limitations so teams and auditors understand bias risks. Balance and relevance relate to representation and fit for purpose.',
  },

  // Security, Compliance, and Governance for AI Solutions (Percipio)
  {
    id: 'aif-sup-057',
    domain: 'security',
    task: '5.2',
    tags: ['iso-42001', 'compliance', 'percipio', 'sample-exam'],
    question:
      'What ISO standard outlines requirements for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS) within organizations?',
    options: ['45001', '42001', '29134', '27701'],
    correctAnswers: [1],
    explanation:
      'ISO/IEC 42001 specifies requirements for an AI management system (AIMS). ISO 45001 covers occupational health and safety; ISO 27701 extends privacy; ISO 29134 relates to privacy impact assessment.',
  },
  {
    id: 'aif-sup-058',
    domain: 'security',
    task: '5.1',
    tags: ['data-residency', 'data-governance', 'percipio', 'sample-exam'],
    question:
      'Which Amazon AI data governance strategy involves leveraging various regions and availability zones to help organizations comply with requirements by storing data within specific geographic locations?',
    options: [
      'Data lifecycles',
      'Data logging',
      'Data residency',
      'Data retention',
    ],
    correctAnswers: [2],
    explanation:
      'Data residency ensures data is stored and processed in designated geographic regions to meet regulatory, contractual, and sovereignty requirements. Retention and lifecycle govern how long data is kept; logging records access and changes.',
  },
  {
    id: 'aif-sup-059',
    domain: 'security',
    task: '5.1',
    tags: ['data-cleansing', 'data-quality', 'percipio', 'sample-exam'],
    question:
      'AWS emphasizes the importance of data quality in secure data engineering. Which practice uses methods like deduplication and standardization to transform data?',
    options: [
      'Data cleansing',
      'Data quality rules',
      'Anomaly detection',
      'Data profiling',
    ],
    correctAnswers: [0],
    explanation:
      'Data cleansing transforms raw data through deduplication, standardization, and correction to improve quality before ML use. Profiling analyzes data characteristics; quality rules validate against standards; anomaly detection flags outliers.',
  },
  {
    id: 'aif-sup-060',
    domain: 'security',
    task: '5.1',
    tags: ['source-citation', 'rag', 'percipio', 'sample-exam'],
    question:
      'What is a segment of a generated response that is metadata regarding the basis in the knowledge base of the response?',
    options: [
      'Source citation',
      'IAM roles',
      'Single-shot prompt',
      'Semi-structured data',
    ],
    correctAnswers: [0],
    explanation:
      'A source citation is metadata in a generated response that references the knowledge-base documents used as the basis for the answer, supporting transparency and verifiability in RAG systems.',
  },
  {
    id: 'aif-sup-061',
    domain: 'security',
    task: '5.2',
    tags: ['review-cadence', 'ai-governance', 'percipio', 'sample-exam'],
    question:
      'Which AWS AI governance protocol establishes a regular routine to assess the performance, compliance, and ethical considerations of AI systems?',
    options: [
      'Security scoping matrix',
      'Review cadence',
      'Transparency standards',
      'Team training requirements',
    ],
    correctAnswers: [1],
    explanation:
      'Review cadence defines a scheduled routine for evaluating AI system performance, compliance posture, and ethical considerations. Transparency standards and training support governance but do not establish the recurring assessment schedule.',
  },
  {
    id: 'aif-sup-062',
    domain: 'security',
    task: '5.1',
    tags: ['infrastructure-protection', 'ai-security', 'percipio', 'sample-exam'],
    question:
      'Which consideration of AI security and privacy deals with securing the operating systems and services used to operate AI workloads, ensuring data protection at every layer of the AI stack?',
    options: [
      'Vulnerability management',
      'Threat detection',
      'Infrastructure protection',
      'Prompt injection attack controls',
    ],
    correctAnswers: [2],
    explanation:
      'Infrastructure protection secures the OS, compute, network, and managed services that run AI workloads across the stack. Vulnerability management and threat detection are related but narrower; prompt injection controls address application-layer model abuse.',
  },

  // Security, Compliance, and Governance Awareness (Entry Level) — Percipio
  {
    id: 'aif-sup-063',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['nlp', 'terminology', 'percipio', 'sample-exam', 'awareness'],
    question:
      'What AI process is used to understand, interpret, and produce human language, enabling applications like chatbots, language translation, and sentiment analysis?',
    options: [
      'Expert systems',
      'Computer vision',
      'Predictive analytics',
      'Natural language processing',
    ],
    correctAnswers: [3],
    explanation:
      'Natural language processing (NLP) focuses on text and speech—understanding, generating, and analyzing language. Computer vision handles images and video; predictive analytics forecasts outcomes; expert systems use rule-based knowledge.',
  },
  {
    id: 'aif-sup-064',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['computer-vision', 'terminology', 'percipio', 'sample-exam', 'awareness'],
    question:
      'Which term best describes the ability of computers to extract information and insights from images and videos?',
    options: [
      'Neural networks',
      'Deep learning',
      'Natural language processing',
      'Computer vision',
    ],
    correctAnswers: [3],
    explanation:
      'Computer vision analyzes visual data—objects, faces, scenes, and motion in images and video. Neural networks and deep learning are techniques that power many vision models; NLP handles language, not pixels.',
  },
  {
    id: 'aif-sup-065',
    domain: 'generative-ai',
    task: '2.1',
    tags: ['llm', 'transformer', 'percipio', 'sample-exam', 'awareness'],
    question:
      'Which solution is pre-trained on vast amounts of data and uses a transformer architecture, consisting of an encoder and a decoder with self-attention capabilities?',
    options: [
      'Computer vision',
      'Expert systems',
      'Large language models',
      'Natural language processing',
    ],
    correctAnswers: [2],
    explanation:
      'Large language models are pretrained on massive text corpora using transformer blocks with self-attention. NLP is the broader field; computer vision targets images; expert systems rely on hand-crafted rules rather than deep transformers.',
  },
  {
    id: 'aif-sup-066',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['automated-scaling', 'aws-value', 'percipio', 'sample-exam', 'awareness'],
    question:
      'Which is an AWS AI/ML model value proposition that can automatically adjust resources based on demand, ensuring optimal performance without manual intervention, particularly useful for applications with fluctuating workloads?',
    options: [
      'Continuous learning and adaptation',
      'Automated scaling',
      'Linear regression',
      'Predictive analytics',
    ],
    correctAnswers: [1],
    explanation:
      'Automated scaling on AWS adjusts compute capacity to match demand—useful for variable inference or training workloads. Continuous learning is a model behavior; linear regression and predictive analytics are ML techniques, not infrastructure scaling features.',
  },
  {
    id: 'aif-sup-067',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['use-cases', 'limitations', 'multi-select', 'percipio', 'sample-exam', 'awareness'],
    question:
      'In which scenarios would AI/ML possibly not be appropriate? (Select FOUR.)',
    options: [
      'Medical diagnosis without human oversight',
      'Cost prohibitive situations where simpler methods suffice',
      'Cloud service integration',
      'Legal judgments requiring nuanced human ethics',
      'Real-time applications with proven ML patterns',
      'Biased training data that would propagate unfair outcomes',
    ],
    correctAnswers: [0, 1, 3, 5],
    explanation:
      'High-stakes domains (medicine, law), prohibitive cost, and known biased data are reasons to pause or avoid ML. Cloud integration and real-time applications are common, appropriate ML deployment patterns when designed responsibly.',
  },

  // Security, Compliance, and Governance Literacy (Beginner Level) — Percipio
  {
    id: 'aif-sup-068',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['ai-concepts', 'deep-learning', 'multi-select', 'percipio', 'sample-exam', 'literacy'],
    question:
      'Which statements are true when comparing AI to ML and deep learning? (Select FOUR.)',
    options: [
      'AI is the overarching field',
      'AI involves a broad span of applications including deep learning',
      'AI is a subset of ML that uses neural networks to model complex data patterns',
      'AI encompasses a wide range of technologies including ML',
      'AI is a specialization within ML that focuses on neural networks and large datasets',
      'AI is a broad field of computer science',
    ],
    correctAnswers: [0, 1, 3, 5],
    explanation:
      'AI is the broad parent field; ML and deep learning are subsets. Deep learning uses neural networks on large datasets—it is not the definition of AI itself. Statements that reverse the hierarchy (AI as subset of ML) are false.',
  },
  {
    id: 'aif-sup-069',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['data-types', 'multi-select', 'percipio', 'sample-exam', 'literacy'],
    question:
      'Which are valid data types found in ML models? (Select FOUR.)',
    options: [
      'Unlabeled',
      'Structured',
      'Time-series',
      'Meta',
      'Batch',
      'Tabular',
    ],
    correctAnswers: [0, 1, 2, 5],
    explanation:
      'Models consume unlabeled, structured, tabular, and time-series data among other formats. "Meta" is not a standard data-type category; batch refers to an inference or processing pattern, not a data type.',
  },
  {
    id: 'aif-sup-070',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['eda', 'lifecycle', 'percipio', 'sample-exam', 'literacy'],
    question:
      'Which stage of the ML pipeline involves analyzing and visualizing data to understand its structure, detect anomalies, and uncover patterns assisting data scientists in making informed decisions?',
    options: [
      'Exploratory data analysis',
      'Data collection',
      'Model training',
      'ML pipeline evaluation',
    ],
    correctAnswers: [0],
    explanation:
      'Exploratory data analysis (EDA) inspects distributions, correlations, and anomalies before modeling. Data collection gathers raw inputs; training fits the model; evaluation measures performance after training.',
  },
  {
    id: 'aif-sup-071',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['pretrained-models', 'jumpstart', 'multi-select', 'percipio', 'sample-exam', 'literacy'],
    question:
      'Which statements regarding open-source pre-trained models are TRUE? (Select FOUR.)',
    options: [
      'They can save significant time and computational resources',
      'They have already been trained on large datasets and are made available to the public',
      'They are available from various sources such as SageMaker JumpStart and the AWS Marketplace',
      'They can be used as-is or fine-tuned for specific tasks',
      'They provide more control over architecture and training but require more time and resources',
      'They involve building and training a model from scratch',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Pre-trained open-source models reduce training cost and time, are shared publicly, and can be deployed or fine-tuned. Building from scratch and full custom architecture control describe training your own model—not using a pretrained one.',
  },
  {
    id: 'aif-sup-072',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['mlops', 'experiment-tracking', 'percipio', 'sample-exam', 'literacy'],
    question:
      'Which key aspect of MLOps experimentation emphasizes the importance of following the progress of experiments to ensure reproducibility and collaboration?',
    options: [
      'Experiment tracking',
      'Scalability',
      'Version control',
      'Automated workflows',
    ],
    correctAnswers: [0],
    explanation:
      'Experiment tracking logs parameters, metrics, artifacts, and runs so teams can reproduce and compare results. Version control tracks code; automated workflows orchestrate pipelines; scalability addresses resource growth.',
  },
  {
    id: 'aif-sup-073',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['mlops', 'scalability', 'multi-select', 'percipio', 'sample-exam', 'literacy'],
    question:
      'Which are specific benefits of MLOps scalable systems? (Select FOUR.)',
    options: [
      'Flexibility',
      'Durability',
      'Efficiency',
      'Cost-effectiveness',
      'Reliability',
      'Security',
    ],
    correctAnswers: [0, 2, 3, 4],
    explanation:
      'Scalable MLOps systems flex with workload demand, use resources efficiently, control cost, and stay reliable under growth. Durability and security are important but are not the specific scalability benefits highlighted in this framework.',
  },

  // Security, Compliance, and Governance Competency (Intermediate Level) — Percipio
  {
    id: 'aif-sup-074',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['sagemaker', 'quickstart', 'percipio', 'sample-exam', 'competency'],
    question:
      'Which service offers Quickstart, designed to help users get started quickly with ML on AWS, by providing a streamlined setup process and a range of resources to simplify the ML journey?',
    options: [
      'Amazon Comprehend',
      'Amazon SageMaker',
      'Amazon Cognito',
      'Amazon Lex',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon SageMaker provides Quickstart resources and guided setup to accelerate the ML journey. Comprehend, Lex, and Cognito are managed AI or identity services—not the primary SageMaker onboarding path.',
  },
  {
    id: 'aif-sup-075',
    domain: 'applications',
    task: '3.1',
    tags: ['self-hosted', 'deployment', 'percipio', 'sample-exam', 'competency'],
    question:
      'Which statement best describes the use of a self-hosted API model in production?',
    options: [
      'It involves leveraging another vendor\'s underlying resources, scaling, and maintenance',
      'It involves deploying the model on your own infrastructure such as on-premises servers or virtual machines',
      'It involves automatically scaling infrastructure based on incoming traffic without any customer management',
      'It involves deploying the model using only a cloud provider\'s fully managed serverless API with no infrastructure control',
    ],
    correctAnswers: [1],
    explanation:
      'Self-hosted deployment runs the model on infrastructure you control—on-premises or VMs you manage. Fully managed vendor APIs and automatic cloud scaling describe managed or cloud-hosted patterns, not self-hosting.',
  },
  {
    id: 'aif-sup-076',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['sagemaker', 'deployment', 'percipio', 'sample-exam', 'competency'],
    question:
      'In which stage of the ML pipeline would one be most likely to use SageMaker hosting services and SageMaker multi-model endpoints?',
    options: [
      'MLOps and automation',
      'Exploratory data analysis (EDA)',
      'Data collection and preparation',
      'Model deployment',
    ],
    correctAnswers: [3],
    explanation:
      'SageMaker hosting and multi-model endpoints serve trained models for inference—part of deployment. EDA explores data; preparation cleans features; MLOps automates the broader lifecycle but hosting is a deployment activity.',
  },
  {
    id: 'aif-sup-077',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['data-wrangler', 'sagemaker', 'percipio', 'sample-exam', 'competency'],
    question:
      'What is the single most important capability of Amazon SageMaker Data Wrangler in an ML pipeline?',
    options: [
      'The ability to simplify and accelerate the data preparation process',
      'To provide a robust set of tools and services to support each stage of the ML pipeline',
      'To offer a full IDE for data scientists to perform EDA only',
      'The delivery of a scalable infrastructure for training ML models',
    ],
    correctAnswers: [0],
    explanation:
      'Data Wrangler focuses on visual, low-code data preparation—transformations, joins, and feature workflows. SageMaker Studio covers broader IDE needs; training infrastructure is separate; end-to-end pipeline tooling spans multiple SageMaker components.',
  },
  {
    id: 'aif-sup-078',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['feature-store', 'sagemaker', 'percipio', 'sample-exam', 'competency'],
    question:
      'What Amazon ML service allows you to ingest data from various sources, such as application logs, service logs, clickstreams, sensors, and tabular data from AWS or third-party data sources?',
    options: [
      'SageMaker Model Registry',
      'SageMaker Feature Store',
      'SageMaker multi-model endpoints',
      'SageMaker Model Monitor',
    ],
    correctAnswers: [1],
    explanation:
      'SageMaker Feature Store centralizes feature ingestion and storage from diverse sources for training and inference consistency. Model Registry versions models; Model Monitor tracks quality; multi-model endpoints serve multiple models.',
  },
  {
    id: 'aif-sup-079',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['model-monitor', 'sagemaker', 'percipio', 'sample-exam', 'competency'],
    question:
      'In which stage of the ML pipeline would SageMaker Model Monitor perform consistency checks to help maintain model quality during the tuning process?',
    options: [
      'MLOps and automation',
      'Hyperparameter tuning',
      'Data collection and preparation',
      'Exploratory data analysis (EDA)',
    ],
    correctAnswers: [1],
    explanation:
      'Model Monitor can run consistency and quality checks while models are tuned and evaluated across hyperparameter trials. EDA and data prep precede training; MLOps spans production automation beyond the tuning phase.',
  },
  {
    id: 'aif-sup-080',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['technical-debt', 'mlops', 'percipio', 'sample-exam', 'competency'],
    question:
      'What term refers to the accumulated shortcuts, suboptimal practices, and temporary solutions in the MLOps lifecycle that can hinder the efficiency, scalability, and maintainability of ML systems over time?',
    options: [
      'Experiment tracking',
      'Technical debt',
      'Distributed training',
      'Return on investment',
    ],
    correctAnswers: [1],
    explanation:
      'Technical debt in MLOps is the cost of quick fixes and shortcuts that slow future development. Experiment tracking improves reproducibility; distributed training scales compute; ROI measures business value.',
  },
  {
    id: 'aif-sup-081',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['production-readiness', 'mlops', 'percipio', 'sample-exam', 'competency'],
    question:
      'What feature of MLOps involves implementing best practices that ensure machine learning models are reliable, scalable, and maintainable in a live environment?',
    options: [
      'Model monitoring',
      'Production readiness',
      'Model retraining',
      'Version control',
    ],
    correctAnswers: [1],
    explanation:
      'Production readiness is the MLOps discipline of preparing models and pipelines for reliable live operation. Monitoring, retraining, and version control support production readiness but do not define the overall readiness practice itself.',
  },

  // Kaplan / Skillsoft AIF-C01 practice exam — knowledge gaps
  {
    id: 'aif-sup-082',
    domain: 'security',
    task: '5.2',
    tags: ['compliance', 'regulated-industries', 'kaplan', 'practice-exam'],
    question:
      'When deploying generative AI applications in regulated industries such as healthcare and finance on AWS, which factor is most important for adhering to requirements like HIPAA or GDPR?',
    options: [
      'Cost-effectiveness',
      'Responsiveness',
      'Compliance',
      'Safety',
    ],
    correctAnswers: [2],
    explanation:
      'Compliance with industry and data-protection regulations is paramount in regulated sectors. Safety, performance, and cost matter but do not replace legal obligations. AWS helps through encryption, access controls, audit logging, and certifications.',
  },
  {
    id: 'aif-sup-083',
    domain: 'applications',
    task: '3.2',
    tags: ['instructions', 'prompt-engineering', 'kaplan', 'practice-exam'],
    question:
      'Which of the following BEST describes the primary function of instructions within a well-crafted prompt for a large language model?',
    options: [
      'To constrain the model\'s output to a predefined format such as a list or table',
      'To act as a safety mechanism guiding the model away from harmful content',
      'To direct the model to perform a specific task or exhibit a desired behavior',
      'To establish the background or setting for the prompt, providing necessary context',
    ],
    correctAnswers: [2],
    explanation:
      'Instructions are the action-oriented directive—summarize, translate, classify, write. Context sets background; output formatting and safety guardrails are related but secondary to the core task directive.',
  },
  {
    id: 'aif-sup-084',
    domain: 'applications',
    task: '3.2',
    tags: ['single-shot', 'prompt-engineering', 'kaplan', 'practice-exam'],
    question:
      'Which of the following is an example of single-shot learning in prompt engineering?',
    options: [
      'Translate \'Hello\' to Spanish.',
      'Let\'s think step by step. How do you say \'thank you\' in Spanish?',
      'Translate \'Hello\' to Spanish: Hola. Translate \'Goodbye\' to Spanish:',
      'Translate the following text to Spanish: [Insert Text]',
    ],
    correctAnswers: [2],
    explanation:
      'Single-shot prompting includes exactly one input-output example before the new task. Zero-shot has no examples; chain-of-thought uses step-by-step reasoning; a template with placeholders but no example pair is not single-shot.',
  },
  {
    id: 'aif-sup-085',
    domain: 'guidelines',
    task: '4.1',
    tags: ['sustainability', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'A company wants to minimize the environmental impact of its large language model. Which practices are the MOST important? (Select TWO.)',
    options: [
      'Utilizing compute-intensive models',
      'Using larger datasets for fine-tuning',
      'Choosing efficient models',
      'Using the right deployment strategy',
      'Prioritizing multilingual support',
    ],
    correctAnswers: [2, 3],
    explanation:
      'Efficient models and deployment patterns (serverless inference, quantization, right-sized hardware, renewable Regions) reduce energy use. Larger fine-tuning sets and compute-heavy models increase consumption; multilingual support is an accessibility concern, not a primary sustainability lever.',
  },
  {
    id: 'aif-sup-086',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['jumpstart', 'pretrained-models', 'kaplan', 'practice-exam'],
    question:
      'A startup wants to start with pretrained models and quickly deploy them for common generative AI tasks such as text summarization. Which AWS service or feature should they use?',
    options: [
      'Amazon SQS',
      'Amazon QuickSight',
      'Amazon SageMaker JumpStart',
      'Amazon Bedrock',
    ],
    correctAnswers: [2],
    explanation:
      'SageMaker JumpStart provides pretrained models and one-click deployment workflows for common ML and generative tasks. Bedrock offers foundation model APIs but JumpStart is often the faster path to deploy ready-made pretrained models on SageMaker.',
  },
  {
    id: 'aif-sup-087',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['custom-models', 'bedrock', 'kaplan', 'practice-exam'],
    question:
      'What is a key advantage when choosing to develop and train a custom generative AI model on AWS as opposed to using a pretrained foundation model from Amazon Bedrock?',
    options: [
      'Greater control over the model architecture, data, and training process',
      'Lower development costs and faster time to market',
      'Automatic compliance with all industry regulations',
      'Guaranteed higher accuracy compared to pretrained models',
    ],
    correctAnswers: [0],
    explanation:
      'Custom training gives full control over architecture, data curation, and hyperparameters. It typically costs more, takes longer, and does not guarantee accuracy or automatic regulatory compliance versus managed FMs.',
  },
  {
    id: 'aif-sup-088',
    domain: 'guidelines',
    task: '4.2',
    tags: ['white-box', 'explainability', 'kaplan', 'practice-exam'],
    question:
      'Which type of model offers the easiest understanding of the relationship between inputs and outputs due to its readily interpretable internal workings?',
    options: [
      'Black-box',
      'Deep neural network',
      'Gray-box',
      'White-box',
    ],
    correctAnswers: [3],
    explanation:
      'White-box models such as linear regression, shallow decision trees, and rule-based systems expose structure and parameters. Deep networks and black-box FMs are far harder to interpret directly.',
  },
  {
    id: 'aif-sup-089',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['underfitting', 'lifecycle', 'kaplan', 'practice-exam'],
    question:
      'Which term describes a phenomenon where an ML model is too simple to capture underlying patterns in the data, performing poorly on both training and test sets?',
    options: [
      'Regression',
      'Convergence',
      'Underfitting',
      'Overfitting',
    ],
    correctAnswers: [2],
    explanation:
      'Underfitting means the model misses the signal—high error on training and unseen data. Overfitting memorizes training data but fails to generalize; convergence is an optimization process, not a failure mode.',
  },
  {
    id: 'aif-sup-090',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['arpu', 'business-metrics', 'kaplan', 'practice-exam'],
    question:
      'A marketing team implemented a generative AI campaign for targeted advertisements. Which metric best quantifies the overall financial profitability of the campaign?',
    options: [
      'Cross-domain performance',
      'Conversion rate',
      'Customer feedback',
      'Average revenue per user (ARPU)',
    ],
    correctAnswers: [3],
    explanation:
      'ARPU measures average revenue generated per user—a direct financial return indicator for campaigns. Conversion rate tracks actions; feedback is qualitative; cross-domain performance measures model transfer, not profitability.',
  },
  {
    id: 'aif-sup-091',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['recommendations', 'use-cases', 'kaplan', 'practice-exam'],
    question:
      'An online streaming service wants to enhance engagement using individual viewing preferences. Which generative AI application is MOST suitable?',
    options: [
      'Content summarization',
      'Real-time language translation',
      'Automated scriptwriting',
      'Personalized content discovery',
    ],
    correctAnswers: [3],
    explanation:
      'Personalized content discovery analyzes viewing behavior to recommend relevant movies and shows—a recommendation-engine use case. Summarization, translation, and scriptwriting do not directly match preference-based discovery.',
  },
  {
    id: 'aif-sup-092',
    domain: 'applications',
    task: '3.1',
    tags: ['rag', 'kaplan', 'practice-exam'],
    question:
      'What is the key mechanism of retrieval-augmented generation (RAG) in the context of large language models?',
    options: [
      'Adjusting the model\'s internal parameters during inference',
      'Prompt engineering with carefully crafted input prompts only',
      'Acquiring external knowledge to enhance the model\'s input',
      'Fine-tuning the pretrained model on a task-specific dataset',
    ],
    correctAnswers: [2],
    explanation:
      'RAG retrieves relevant external documents and injects them into the prompt at inference time without changing model weights. Fine-tuning updates weights; prompt engineering alone does not retrieve fresh knowledge bases.',
  },
  {
    id: 'aif-sup-093',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['use-cases', 'propensity-modeling', 'kaplan', 'practice-exam'],
    question:
      'Predicting customer churn for a subscription service is best categorized as which AI/ML application type?',
    options: [
      'Speech recognition',
      'Propensity modeling',
      'Computer vision',
      'Recommendation systems',
    ],
    correctAnswers: [1],
    explanation:
      'Churn prediction estimates the likelihood a customer will leave—a propensity or predictive modeling task. Recommendation systems suggest items; speech recognition handles audio; computer vision analyzes images.',
  },
  {
    id: 'aif-sup-094',
    domain: 'security',
    task: '5.2',
    tags: ['iso-27001', 'isms', 'kaplan', 'practice-exam'],
    question:
      'A healthcare provider needs a standard focused on information security management systems (ISMS) for managing security risks related to AI systems. Which standard applies?',
    options: [
      'ISO/IEC 27001',
      'PCI DSS',
      'HIPAA',
      'SOC 2',
    ],
    correctAnswers: [0],
    explanation:
      'ISO/IEC 27001 defines an ISMS framework for managing information security risks across industries. HIPAA is a U.S. healthcare privacy rule; PCI DSS covers payment cards; SOC 2 reports on service organization controls.',
  },
  {
    id: 'aif-sup-095',
    domain: 'applications',
    task: '3.1',
    tags: ['context-window', 'model-selection', 'kaplan', 'practice-exam'],
    question:
      'An application needs to generate a varied and potentially large amount of tokens. Which model selection criterion is MOST important?',
    options: [
      'Modality',
      'Input/output length',
      'Multilingual support',
      'Model complexity',
    ],
    correctAnswers: [1],
    explanation:
      'Input/output length (context window) caps combined prompt and completion tokens. Exceeding it truncates output or fails requests. Modality, language support, and complexity matter but cannot substitute for sufficient sequence length.',
  },
  {
    id: 'aif-sup-096',
    domain: 'applications',
    task: '3.3',
    tags: ['foundation-models', 'lifecycle', 'kaplan', 'practice-exam'],
    question:
      'In foundation model development, which stage immediately follows model architecture design and selection?',
    options: [
      'Model deployment and monitoring',
      'Fine-tuning for downstream tasks',
      'Evaluation on benchmark datasets',
      'Data collection and preprocessing for initial training',
    ],
    correctAnswers: [3],
    explanation:
      'After choosing architecture, teams gather and preprocess massive unlabeled corpora before initial pretraining. Benchmark evaluation, fine-tuning, and deployment come later in the FM lifecycle.',
  },
  {
    id: 'aif-sup-097',
    domain: 'guidelines',
    task: '4.1',
    tags: ['safety', 'responsible-ai', 'kaplan', 'practice-exam'],
    question:
      'A team building an AI content moderation tool on AWS is concerned about bias, harmful outputs, and unintended consequences. Which aspect of AWS generative AI offerings addresses this?',
    options: [
      'Compliance',
      'Cost',
      'Safety',
      'Availability',
    ],
    correctAnswers: [2],
    explanation:
      'Safety initiatives target harmful, biased, or unintended model behavior through guardrails, filters, and responsible-AI practices. Compliance covers regulations; cost and availability are operational concerns.',
  },
  {
    id: 'aif-sup-098',
    domain: 'applications',
    task: '3.3',
    tags: ['transfer-learning', 'kaplan', 'practice-exam'],
    question:
      'Which scenario correctly characterizes transfer learning?',
    options: [
      'A model trained on English text is then trained on random noise',
      'A stock-price model is used to predict unrelated weather patterns with no shared features',
      'A model trained on handwritten digits is applied to unrelated natural images with no reusable features',
      'A model trained to recognize cats and dogs is adapted to recognize other animals',
    ],
    correctAnswers: [3],
    explanation:
      'Transfer learning reuses features learned on a related source task (animal recognition) for a new but similar target task. Unrelated domains or random noise do not provide transferable representations.',
  },

  // Kaplan / Skillsoft AIF-C01 practice exam — batch 2 (Q25–Q77 gaps)
  {
    id: 'aif-sup-099',
    domain: 'applications',
    task: '3.4',
    tags: ['transfer-learning', 'cross-domain', 'kaplan', 'practice-exam'],
    question:
      'A generative model trained on natural language must generate structured JSON. Which assessment method best evaluates how well the model transfers its learning to a new format?',
    options: [
      'Average revenue per user',
      'Conversion rate',
      'Customer lifetime value',
      'Cross-domain performance',
    ],
    correctAnswers: [3],
    explanation:
      'Cross-domain performance measures how well a model applies knowledge from one domain (text) to another (structured JSON). ARPU, conversion rate, and CLV are business KPIs, not transfer-learning evaluation metrics.',
  },
  {
    id: 'aif-sup-100',
    domain: 'security',
    task: '5.1',
    tags: ['ids', 'incident-response', 'kaplan', 'practice-exam'],
    question:
      'A web application sees traffic spikes from unknown IP addresses and users report intermittent access issues. What is the MOST relevant initial security step?',
    options: [
      'Implement rate-limiting measures to control traffic spikes',
      'Review intrusion detection system (IDS) logs',
      'Check the application server for unauthorized configuration changes',
      'Update the operating system to the latest security patch',
    ],
    correctAnswers: [1],
    explanation:
      'IDS logs reveal suspicious traffic patterns such as spikes from unknown IPs. Review them first to understand the attack before applying rate limits, config audits, or patching.',
  },
  {
    id: 'aif-sup-101',
    domain: 'security',
    task: '5.2',
    tags: ['inspector', 'vulnerability-management', 'kaplan', 'practice-exam'],
    question:
      'Which AWS service proactively identifies software vulnerabilities in EC2 instances and container images and detects unintended network exposure?',
    options: [
      'AWS CloudTrail',
      'Amazon Inspector',
      'AWS Audit Manager',
      'AWS Trusted Advisor',
    ],
    correctAnswers: [1],
    explanation:
      'Amazon Inspector runs automated security assessments on EC2 and container workloads for OS and application vulnerabilities. CloudTrail logs API activity; Audit Manager collects compliance evidence; Trusted Advisor gives cost and best-practice recommendations.',
  },
  {
    id: 'aif-sup-102',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['auc', 'imbalanced-data', 'fraud-detection', 'kaplan', 'practice-exam'],
    question:
      'A fraud detection model is trained on a dataset with far more legitimate than fraudulent transactions. Which metric is MOST important to avoid misleadingly high scores?',
    options: [
      'Accuracy',
      'AUC (area under the ROC curve)',
      'Learning rate',
      'Precision only',
    ],
    correctAnswers: [1],
    explanation:
      'Accuracy can look high when the model predicts the majority class every time. AUC evaluates discrimination across thresholds and is more robust on imbalanced datasets. Learning rate is a training hyperparameter, not an evaluation metric.',
  },
  {
    id: 'aif-sup-103',
    domain: 'applications',
    task: '3.2',
    tags: ['exposure', 'prompt-risks', 'kaplan', 'practice-exam'],
    question:
      'Which prompt engineering risk involves sensitive information being unintentionally released through prompts?',
    options: [
      'Exposure',
      'Jailbreaking',
      'Poisoning',
      'Prompt injection',
    ],
    correctAnswers: [0],
    explanation:
      'Exposure is leaking PII, credentials, or confidential data by including them in prompts whose outputs may be visible to others. Prompt injection manipulates behavior; jailbreaking bypasses safety guardrails; poisoning corrupts training or retrieval data.',
  },
  {
    id: 'aif-sup-104',
    domain: 'applications',
    task: '3.4',
    tags: ['meteor', 'evaluation', 'kaplan', 'practice-exam'],
    question:
      'Which machine translation evaluation metric uses stemming, synonym matching, and recall to improve on n-gram-only scores?',
    options: [
      'BLEU',
      'METEOR',
      'Perplexity',
      'CIDEr',
    ],
    correctAnswers: [1],
    explanation:
      'METEOR (Metric for Evaluation of Translation with Explicit ORdering) adds stemming, synonymy, and recall to translation evaluation. BLEU uses n-gram precision; perplexity measures language-model uncertainty; CIDEr evaluates image captions.',
  },
  {
    id: 'aif-sup-105',
    domain: 'applications',
    task: '3.4',
    tags: ['perplexity', 'evaluation', 'kaplan', 'practice-exam'],
    question:
      'Which metric measures uncertainty in language models, where lower values indicate better fit to the data?',
    options: [
      'ROUGE',
      'BLEU',
      'Perplexity',
      'CIDEr',
    ],
    correctAnswers: [2],
    explanation:
      'Perplexity quantifies how well a language model predicts a text sample—lower is better. ROUGE and BLEU compare generated text to references; CIDEr scores image-caption consensus.',
  },
  {
    id: 'aif-sup-106',
    domain: 'applications',
    task: '3.4',
    tags: ['cider', 'evaluation', 'kaplan', 'practice-exam'],
    question:
      'Which metric uses consensus-based scoring to evaluate generated image captions against human reference captions?',
    options: [
      'BERTScore',
      'CIDEr',
      'METEOR',
      'Perplexity',
    ],
    correctAnswers: [1],
    explanation:
      'CIDEr (Consensus-based Image Description Evaluation) compares generated captions to multiple human references using TF-IDF weighted n-grams. BERTScore uses contextual embeddings; METEOR targets translation; perplexity measures LM uncertainty.',
  },
  {
    id: 'aif-sup-107',
    domain: 'security',
    task: '5.2',
    tags: ['eu-ai-act', 'compliance', 'kaplan', 'practice-exam'],
    question:
      'Which regulation classifies AI systems by risk level and enforces stringent requirements for high-risk applications to ensure safety, transparency, and accountability?',
    options: [
      'EU AI Act',
      'PCI DSS',
      'HIPAA',
      'FedRAMP',
    ],
    correctAnswers: [0],
    explanation:
      'The EU AI Act tiers AI systems by risk and imposes strict obligations on high-risk use cases. PCI DSS covers payment cards; HIPAA covers U.S. healthcare privacy; FedRAMP authorizes U.S. government cloud use.',
  },
  {
    id: 'aif-sup-108',
    domain: 'security',
    task: '5.2',
    tags: ['nyc-local-law-144', 'bias-audit', 'kaplan', 'practice-exam'],
    question:
      'Which regulation mandates independent bias audits for automated employment decision tools to ensure fairness in hiring practices?',
    options: [
      'SOC 2 Type II',
      'New York City Local Law 144',
      'ISO/IEC 27001',
      'GDPR',
    ],
    correctAnswers: [1],
    explanation:
      'NYC Local Law 144 requires bias audits for automated employment decision tools (AEDTs) used in hiring. SOC 2 reports on service controls; ISO 27001 defines ISMS; GDPR governs personal data processing in the EU.',
  },
  {
    id: 'aif-sup-109',
    domain: 'security',
    task: '5.2',
    tags: ['iso-24028', 'trustworthiness', 'kaplan', 'practice-exam'],
    question:
      'Which standard provides guidelines for achieving AI trustworthiness, focusing on robustness, safety, security, and ethical considerations?',
    options: [
      'ISO/IEC TR 24028',
      'ISO/IEC 27001',
      'PCI DSS',
      'SOC 1',
    ],
    correctAnswers: [0],
    explanation:
      'ISO/IEC TR 24028 offers guidance on trustworthy AI across robustness, safety, security, and ethics. ISO 27001 covers information security management; PCI DSS covers payment data; SOC 1 covers financial reporting controls.',
  },
  {
    id: 'aif-sup-110',
    domain: 'security',
    task: '5.2',
    tags: ['soc-2', 'compliance', 'kaplan', 'practice-exam'],
    question:
      'Which framework defines controls for security, availability, processing integrity, confidentiality, and privacy for service organizations, applicable to AI workloads?',
    options: [
      'SOC 2',
      'ISO/IEC 42001',
      'COPPA',
      'FERPA',
    ],
    correctAnswers: [0],
    explanation:
      'SOC 2 (System and Organization Controls 2) evaluates trust service criteria including security and privacy for service providers. ISO 42001 defines an AI management system; COPPA and FERPA are U.S. child and student privacy laws.',
  },
  {
    id: 'aif-sup-111',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['unstructured-data', 'data-types', 'kaplan', 'practice-exam'],
    question:
      'Which data type lacks a predefined format and does not map to a consistent schema, making traditional analysis harder?',
    options: [
      'Structured data',
      'Tabular data',
      'Unstructured data',
      'Labeled data',
    ],
    correctAnswers: [2],
    explanation:
      'Unstructured data—images, text documents, video, audio—has no fixed schema. Structured and tabular data follow predefined formats; labeled data refers to supervised-learning targets, not schema structure.',
  },
  {
    id: 'aif-sup-112',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['deep-learning', 'supervised', 'unsupervised', 'kaplan', 'practice-exam'],
    question:
      'Which statement accurately reflects the relationship between deep learning and ML paradigms?',
    options: [
      'Deep learning can be used for both supervised and unsupervised learning tasks',
      'All machine learning algorithms are deep learning algorithms',
      'Deep learning is a specific type of machine learning algorithm unrelated to neural networks',
      'Neural networks are only used outside deep learning',
    ],
    correctAnswers: [0],
    explanation:
      'Deep learning uses multi-layer neural networks for supervised tasks (classification) and unsupervised tasks (clustering, autoencoders). Not all ML is deep learning; neural networks are central to deep learning.',
  },
  {
    id: 'aif-sup-113',
    domain: 'applications',
    task: '3.3',
    tags: ['foundation-models', 'lifecycle', 'kaplan', 'practice-exam'],
    question:
      'What is the correct order of stages in the foundation model lifecycle?',
    options: [
      'Pre-training → Data selection → Fine-tuning → Deployment → Evaluation',
      'Data selection and preparation → Pre-training → Fine-tuning → Evaluation → Deployment',
      'Fine-tuning → Pre-training → Data selection → Evaluation → Deployment',
      'Deployment → Evaluation → Fine-tuning → Pre-training → Data selection',
    ],
    correctAnswers: [1],
    explanation:
      'Teams first gather and preprocess data, pretrain on large corpora, fine-tune for downstream tasks, evaluate performance, then deploy. Fine-tuning cannot precede pretraining; evaluation precedes production deployment.',
  },
  {
    id: 'aif-sup-114',
    domain: 'guidelines',
    task: '4.1',
    tags: ['bias-variance', 'overfitting', 'underfitting', 'kaplan', 'practice-exam'],
    question:
      'A model fits a straight line to data that clearly follows a curved pattern, making systematic errors. Which problem does this illustrate?',
    options: [
      'High variance (overfitting)',
      'High bias (underfitting)',
      'Good fit (low bias, low variance)',
      'Data poisoning',
    ],
    correctAnswers: [1],
    explanation:
      'High bias (underfitting) occurs when a model is too simple and makes strong wrong assumptions—like a linear fit to nonlinear data. High variance is overfitting noisy training data; good fit generalizes well to unseen data.',
  },
  {
    id: 'aif-sup-115',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['mse', 'regression', 'metrics', 'kaplan', 'practice-exam'],
    question:
      'A regression model predicts housing prices. Which metric is MOST appropriate for evaluating prediction correctness?',
    options: [
      'F1 score',
      'AUC',
      'Recall',
      'Mean squared error (MSE)',
    ],
    correctAnswers: [3],
    explanation:
      'MSE averages squared differences between predicted and actual continuous values—lower is better for regression. F1, AUC, and recall are classification metrics, not suited for continuous price prediction.',
  },
  {
    id: 'aif-sup-116',
    domain: 'guidelines',
    task: '4.1',
    tags: ['fairness', 'geographic-bias', 'kaplan', 'practice-exam'],
    question:
      'A model consistently underperforms for users from a specific geographic region. Which responsible AI feature is most directly compromised?',
    options: [
      'Safety',
      'Robustness',
      'Veracity',
      'Fairness',
    ],
    correctAnswers: [3],
    explanation:
      'Fairness requires equitable performance across user groups, including geography. Regional underperformance signals bias. Robustness is consistency under noise; veracity is truthfulness; safety covers harm prevention.',
  },
  {
    id: 'aif-sup-117',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['multi-region', 'cost', 'deployment', 'kaplan', 'practice-exam'],
    question:
      'A global company deploys a generative AI application across multiple AWS Regions to minimize latency worldwide. What is a primary concern with this approach?',
    options: [
      'Reduced redundancy',
      'Lower availability',
      'Decreased performance',
      'Increased costs',
    ],
    correctAnswers: [3],
    explanation:
      'Multi-Region deployment replicates compute, storage, and model hosting in each Region—increasing cost versus a single Region. It typically improves redundancy and latency rather than reducing them.',
  },
  {
    id: 'aif-sup-118',
    domain: 'security',
    task: '5.1',
    tags: ['data-governance', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'Which are components of AI data governance? (Select THREE.)',
    options: [
      'Governance frameworks',
      'Review cadence',
      'GPU clock speed',
      'Transparency standards',
      'Model parameter count',
      'Team training requirements',
    ],
    correctAnswers: [0, 1, 3],
    explanation:
      'Governance frameworks structure risk management; review cadence schedules periodic assessments; transparency standards guide explainability. GPU speed and parameter counts are technical specs, not governance components.',
  },
  {
    id: 'aif-sup-119',
    domain: 'guidelines',
    task: '4.2',
    tags: ['human-centered', 'explainability', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'Which elements should be included in human-centered design for explainable AI? (Select THREE.)',
    options: [
      'Cognitive load management',
      'Learning rate values',
      'Transparency',
      'Obfuscating uncertainty',
      'Contextual relevance',
      'Technical jargon for all users',
    ],
    correctAnswers: [0, 2, 4],
    explanation:
      'Effective XAI manages cognitive load, provides transparent reasoning, and keeps explanations contextually relevant to each audience. Learning rates are training hyperparameters; hiding uncertainty and forcing jargon harm usability.',
  },
  {
    id: 'aif-sup-120',
    domain: 'guidelines',
    task: '4.1',
    tags: ['legal', 'intellectual-property', 'kaplan', 'practice-exam'],
    question:
      'A team trains a generative model on copyrighted material without a license. Which legal risk does this create?',
    options: [
      'Loss of customer trust from inconsistent chatbot answers',
      'End-user risk from insufficient safety testing of physical products',
      'Intellectual property infringement',
      'Hallucinated citations in research outputs',
    ],
    correctAnswers: [2],
    explanation:
      'Training on unlicensed copyrighted content can trigger IP infringement claims. Inconsistent answers erode trust; insufficient safety testing creates end-user risk; fabricated citations are hallucination risks—each maps to different actions.',
  },
  {
    id: 'aif-sup-121',
    domain: 'guidelines',
    task: '4.2',
    tags: ['transparent-models', 'interpretability', 'kaplan', 'practice-exam'],
    question:
      'A company wants a transparent machine learning model to predict customer behavior with high accuracy. Which is a disadvantage of highly transparent models?',
    options: [
      'Difficulty in understanding inputs and outputs',
      'Difficulty in debugging',
      'Limited capacity for complex patterns',
      'High computational cost',
    ],
    correctAnswers: [2],
    explanation:
      'Transparent models such as linear regression or shallow decision trees are easy to interpret but often underfit complex nonlinear relationships. They trade interpretability for limited pattern-capture capacity—not debugging difficulty or inherently high compute cost.',
  },
  {
    id: 'aif-sup-122',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['model-training', 'lifecycle', 'kaplan', 'practice-exam'],
    question:
      'A data scientist uses a random forest algorithm to learn patterns from a prepared dataset of customer purchase behaviors. During which ML pipeline stage does this occur?',
    options: [
      'Hyperparameter tuning',
      'Model training',
      'Evaluation',
      'Deployment',
    ],
    correctAnswers: [1],
    explanation:
      'Model training is when an algorithm learns relationships from prepared data—supervised (features to targets) or unsupervised (underlying structure). Hyperparameter tuning optimizes settings after or during training; evaluation and deployment follow.',
  },
  {
    id: 'aif-sup-123',
    domain: 'applications',
    task: '3.1',
    tags: ['multimodal', 'model-selection', 'kaplan', 'practice-exam'],
    question:
      'A design team needs a generative AI model that creates marketing materials with both written copy and accompanying visuals. Which selection factor is most important?',
    options: [
      'Availability of pretrained weights',
      'Multi-modal capabilities',
      'Model size (number of parameters)',
      'Computational cost of training',
    ],
    correctAnswers: [1],
    explanation:
      'Multimodal models handle and generate content across data types such as text and images—directly matching copy-plus-visual marketing needs. Pretrained weights, parameter count, and training cost matter but do not address cross-modality requirements.',
  },
  {
    id: 'aif-sup-124',
    domain: 'applications',
    task: '3.3',
    tags: ['domain-adaptation', 'fine-tuning', 'kaplan', 'practice-exam'],
    question:
      'Adapting a pretrained model for use in industries such as healthcare and finance is an example of which fine-tuning method?',
    options: [
      'Continuous training',
      'Domain adaptation',
      'Decision trees',
      'Linear regression',
    ],
    correctAnswers: [1],
    explanation:
      'Domain adaptation fine-tunes a general pretrained model on specialized domain data—clinical notes, financial reports—so it performs well in that industry. Continuous training keeps models updated over time; decision trees and linear regression are separate ML algorithms.',
  },
  {
    id: 'aif-sup-125',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['pretrained-models', 'computer-vision', 'kaplan', 'practice-exam'],
    question:
      'A team has a limited budget and must quickly deploy a model for object recognition in images. Which approach is most cost effective and time efficient?',
    options: [
      'Training a custom model on a large proprietary dataset',
      'Using an open-source pretrained model',
      'Developing a rule-based expert system',
      'Outsourcing model development to a specialized AI company',
    ],
    correctAnswers: [1],
    explanation:
      'Open-source pretrained vision models provide strong baselines and can be fine-tuned quickly with limited data and compute. Custom training from scratch, expert systems, and outsourcing are slower and more expensive for standard object recognition.',
  },
  {
    id: 'aif-sup-126',
    domain: 'applications',
    task: '3.3',
    tags: ['pretraining', 'customization', 'kaplan', 'practice-exam'],
    question:
      'Which foundation model customization approach typically demands the most computational resources and the largest datasets?',
    options: [
      'Retrieval-Augmented Generation (RAG)',
      'Pretraining',
      'Fine-tuning',
      'In-context learning',
    ],
    correctAnswers: [1],
    explanation:
      'Pretraining from scratch on massive corpora requires enormous GPU compute, memory, and time. Fine-tuning uses smaller labeled sets; RAG adds retrieval at inference; in-context learning needs no weight updates beyond the prompt.',
  },

  // Kaplan / Skillsoft AIF-C01 practice exam — batch 3 (Q117–Q128 gaps)
  {
    id: 'aif-sup-127',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['performance-tracking', 'data-drift', 'concept-drift', 'kaplan', 'practice-exam'],
    question:
      'After deploying an ML solution to production, which practice is most important for maintaining effectiveness as data patterns evolve?',
    options: [
      'Performance tracking',
      'Experimentation only without monitoring',
      'Infrastructure scaling only',
      'Repeatable processes only',
    ],
    correctAnswers: [0],
    explanation:
      'Performance tracking continuously monitors metrics such as accuracy, precision, and recall to detect data drift (changing input distributions) and concept drift (changing feature-target relationships), triggering retraining or adjustments when needed.',
  },
  {
    id: 'aif-sup-128',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['computer-vision', 'quality-control', 'manufacturing', 'kaplan', 'practice-exam'],
    question:
      'A manufacturer wants to automate quality control on a high-volume production line. How can AI/ML provide the most value?',
    options: [
      'Automating product inspection using computer vision',
      'Improving financial forecasting from historical sales data',
      'Scaling customer support with AI chatbots',
      'Providing production efficiency reports without automated inspection',
    ],
    correctAnswers: [0],
    explanation:
      'Computer vision can inspect thousands of products per hour for defects and inconsistencies at production-line speed. Forecasting, chatbots, and reporting help other business areas but do not directly automate quality control.',
  },
  {
    id: 'aif-sup-129',
    domain: 'security',
    task: '5.1',
    tags: ['data-profiling', 'standardization', 'data-quality', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'Which actions should you implement for assessing data quality in an analytics pipeline? (Select TWO.)',
    options: [
      'Data augmentation',
      'Feature engineering',
      'Standardization',
      'Encryption',
      'Data profiling',
    ],
    correctAnswers: [2, 4],
    explanation:
      'Data profiling analyzes structure, content, and quality issues such as missing values and outliers. Standardization transforms data into consistent formats or scales. Feature engineering improves models; encryption protects confidentiality; augmentation expands training data—they do not assess quality.',
  },
  {
    id: 'aif-sup-130',
    domain: 'generative-ai',
    task: '2.1',
    tags: ['llm-architecture', 'transformer', 'kaplan', 'practice-exam'],
    question:
      'What is the correct order of steps when text is processed in a transformer-based large language model?',
    options: [
      'Tokens → Embedding layer → Positional encoding → Attention mechanism → Feedforward networks → Layer stacking → Output layer',
      'Attention mechanism → Tokens → Output layer → Embedding layer → Positional encoding',
      'Output layer → Layer stacking → Tokens → Positional encoding → Attention mechanism',
      'Embedding layer → Output layer → Tokens → Feedforward networks → Attention mechanism',
    ],
    correctAnswers: [0],
    explanation:
      'Text is tokenized, converted to embeddings, given positional encodings for sequence order, processed through attention and feedforward blocks in stacked layers, then passed to an output layer that predicts the next token via softmax over the vocabulary.',
  },
  {
    id: 'aif-sup-131',
    domain: 'applications',
    task: '3.3',
    tags: ['data-curation', 'fine-tuning', 'kaplan', 'practice-exam'],
    question:
      'A company is fine-tuning an LLM for customer support interactions. What is the primary purpose of data curation?',
    options: [
      'To identify, select, clean, and organize relevant interaction data for effective fine-tuning',
      'To ensure customer data complies with privacy regulations only',
      'To collect agent feedback on model performance after deployment',
      'To add labels such as "complaint" or "inquiry" for supervised fine-tuning only',
    ],
    correctAnswers: [0],
    explanation:
      'Data curation selects the most appropriate data, removes noise and errors, and structures it for training. Governance covers compliance; labeling is one subset of preparation; post-deployment feedback is evaluation—not curation.',
  },
  {
    id: 'aif-sup-132',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['cltv', 'business-metrics', 'kaplan', 'practice-exam'],
    question:
      'Which generative AI business metric estimates the total revenue expected from a single customer over the entire relationship?',
    options: [
      'Customer lifetime value (CLTV)',
      'Conversion rate',
      'Cross-domain performance',
      'Perplexity',
    ],
    correctAnswers: [0],
    explanation:
      'CLTV estimates long-term revenue per customer—a financial KPI for GenAI initiatives that improve retention or engagement. Conversion rate tracks completed actions; cross-domain performance measures model transfer; perplexity evaluates language-model fit.',
  },
  {
    id: 'aif-sup-133',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['cost-savings', 'business-metrics', 'kaplan', 'practice-exam'],
    question:
      'Which metric measures operational efficiency gains from automating tasks or processes with generative AI?',
    options: [
      'Cost savings',
      'Average revenue per user (ARPU)',
      'BLEU score',
      'Data drift',
    ],
    correctAnswers: [0],
    explanation:
      'Cost savings quantifies reduced operational expense from GenAI automation. ARPU measures revenue per user; BLEU is a text-generation metric; data drift is a production monitoring concern, not a business ROI metric.',
  },
  {
    id: 'aif-sup-134',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['customer-satisfaction', 'business-metrics', 'kaplan', 'practice-exam'],
    question:
      'Which metric measures user experience with generative AI-powered services, often through surveys or feedback?',
    options: [
      'Customer satisfaction',
      'Efficiency (speed and resource utilization)',
      'Accuracy (output quality)',
      'Token-based pricing',
    ],
    correctAnswers: [0],
    explanation:
      'Customer satisfaction captures how users feel about GenAI interactions—typically via CSAT surveys or feedback. Efficiency measures speed and compute use; accuracy evaluates output correctness; token pricing is a cost model.',
  },
  {
    id: 'aif-sup-135',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['nondeterminism', 'robotics', 'limitations', 'kaplan', 'practice-exam'],
    question:
      'A manufacturer wants generative AI to produce precise robotic assembly instructions but worries about output reliability. Which GenAI characteristic presents the challenge?',
    options: [
      'Adaptability',
      'Compliance',
      'Conversion rate',
      'Nondeterminism',
    ],
    correctAnswers: [3],
    explanation:
      'Generative models are probabilistic—the same prompt can yield slightly different outputs. Nondeterminism is problematic when robotic instructions require absolute consistency. Adaptability is a benefit; compliance and conversion rate are unrelated concerns.',
  },
  {
    id: 'aif-sup-136',
    domain: 'applications',
    task: '3.2',
    tags: ['concision', 'best-practices', 'kaplan', 'practice-exam'],
    question:
      'Which is a best practice in prompt engineering?',
    options: [
      'Relying on negative prompts to control all output',
      'Using colorful, flowery instructions to encourage creativity',
      'Avoiding experimentation to maintain consistency',
      'Being specific and concise in your instructions',
    ],
    correctAnswers: [3],
    explanation:
      'Clear, specific, concise instructions reduce ambiguity and improve output quality. Creativity is tuned with parameters such as temperature—not flowery prompt language. Experimentation improves prompts; negative prompts alone are not a primary best practice.',
  },

  // Kaplan / Skillsoft AIF-C01 practice exam — batch 4 (Q79–Q98 gaps)
  {
    id: 'aif-sup-137',
    domain: 'guidelines',
    task: '4.2',
    tags: ['bias', 'clarify', 'monitoring', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'Which should be considered to detect and monitor bias, trustworthiness, and truthfulness in foundation models? (Select THREE.)',
    options: [
      'Human audits',
      'Amazon SageMaker Clarify',
      'Label quality analysis',
      'Amazon Data Wrangler',
      'Clustering',
      'Amazon Athena',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Human audits catch issues automated tools miss; SageMaker Clarify measures bias and explainability; label quality analysis ensures training data is accurate and consistent. Data Wrangler prepares data; clustering is unsupervised ML; Athena queries data—it does not monitor FM trustworthiness.',
  },
  {
    id: 'aif-sup-138',
    domain: 'security',
    task: '5.1',
    tags: ['data-governance', 'review', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'Which strategies should be included when reviewing data governance protocols for effectiveness? (Select THREE.)',
    options: [
      'Auditing by an independent team',
      'Conducting a gap analysis for current practices',
      'Feedback collection from stakeholders',
      'Running red and blue team exercises',
      'Implementing new encryption technologies',
      'Automating data backups',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Independent audits provide objective assessment; gap analysis compares current practices to standards; stakeholder feedback surfaces real-world gaps. Red/blue team exercises test security defenses; encryption and backups are operational controls, not governance review methods.',
  },
  {
    id: 'aif-sup-139',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['availability-zones', 'redundancy', 'kaplan', 'practice-exam'],
    question:
      'What is the primary benefit of deploying generative AI models across multiple Availability Zones (AZs) in AWS?',
    options: [
      'Enhanced redundancy and availability',
      'Reduced training costs',
      'Improved model accuracy',
      'Increased inference speed',
    ],
    correctAnswers: [0],
    explanation:
      'Multi-AZ deployment isolates workloads across distinct data centers within a Region. If one AZ fails, others continue serving requests—improving redundancy and uptime. It does not reduce training cost, improve accuracy, or inherently speed inference.',
  },
  {
    id: 'aif-sup-140',
    domain: 'applications',
    task: '3.1',
    tags: ['multilingual', 'model-selection', 'kaplan', 'practice-exam'],
    question:
      'A company wants a generative AI application for global users with diverse linguistic backgrounds. Which model selection criterion is MOST important?',
    options: [
      'Multilingual support',
      'Cost per inference',
      'Input/output length',
      'Model complexity',
    ],
    correctAnswers: [0],
    explanation:
      'Multilingual support ensures the model understands and generates content in required languages—essential for a global audience. Cost, context length, and complexity matter but cannot substitute for language coverage.',
  },
  {
    id: 'aif-sup-141',
    domain: 'guidelines',
    task: '4.2',
    tags: ['licensing', 'transparency', 'inspectability', 'kaplan', 'practice-exam'],
    question:
      'Which factor can restrict the transparency and inspectability of a machine learning model\'s internal workings?',
    options: [
      'Model licensing',
      'Hardware specifications',
      'Training data size',
      'Model complexity alone',
    ],
    correctAnswers: [0],
    explanation:
      'Proprietary licenses may allow only black-box API use without access to architecture or weights. Open-source licenses enable inspection. Complexity affects interpretability but not legal access; hardware and dataset size do not block inspectability.',
  },
  {
    id: 'aif-sup-142',
    domain: 'generative-ai',
    task: '2.2',
    tags: ['limitations', 'use-cases', 'kaplan', 'practice-exam'],
    question:
      'Which is NOT a typical use case for generative AI?',
    options: [
      'Image generation',
      'Numerical weather forecasting',
      'Customer service chatbots',
      'Code generation',
    ],
    correctAnswers: [1],
    explanation:
      'Numerical weather forecasting relies on physics-based simulations and differential equations, not generative content creation. Image generation, chatbots, and code generation are established GenAI applications.',
  },
  {
    id: 'aif-sup-143',
    domain: 'guidelines',
    task: '4.1',
    tags: ['robustness', 'responsible-ai', 'kaplan', 'practice-exam'],
    question:
      'Which responsible AI pillar means a model performs consistently and resists adversarial attacks, data noise, and unexpected inputs?',
    options: [
      'Robustness',
      'Veracity',
      'Safety',
      'Inclusivity',
    ],
    correctAnswers: [0],
    explanation:
      'Robustness maintains performance under challenging or adversarial conditions. Veracity is output truthfulness; safety minimizes harm; inclusivity ensures equitable access across diverse populations.',
  },
  {
    id: 'aif-sup-144',
    domain: 'guidelines',
    task: '4.1',
    tags: ['veracity', 'responsible-ai', 'kaplan', 'practice-exam'],
    question:
      'Which responsible AI pillar focuses on producing outputs that are accurate, factual, and truthful?',
    options: [
      'Veracity',
      'Robustness',
      'Fairness',
      'Safety',
    ],
    correctAnswers: [0],
    explanation:
      'Veracity ensures model outputs are grounded in reality—not fabricated or misleading. Robustness handles noisy inputs; fairness addresses equitable treatment; safety prevents harm.',
  },
  {
    id: 'aif-sup-145',
    domain: 'applications',
    task: '3.4',
    tags: ['roi', 'business-metrics', 'kaplan', 'practice-exam'],
    question:
      'A company invested in an ML-driven marketing campaign. Which metric MOST directly assesses the feasibility of this investment?',
    options: [
      'Return on investment (ROI)',
      'Mean time to resolution (MTTR)',
      'Cost per click (CPC)',
      'Recovery time objective (RTO)',
    ],
    correctAnswers: [0],
    explanation:
      'ROI compares campaign gains against costs to judge profitability and feasibility. MTTR measures incident resolution time; CPC is an ad metric; RTO is a disaster-recovery target—not investment feasibility measures.',
  },
  {
    id: 'aif-sup-146',
    domain: 'security',
    task: '5.2',
    tags: ['kms', 'cross-account', 'sagemaker', 'kaplan', 'practice-exam'],
    question:
      'A team needs cross-account access to SageMaker notebook instances and encrypted data in different AWS accounts. What is required?',
    options: [
      'A customer managed key (CMK) with cross-account KMS key policies',
      'An Amazon Resource Name (ARN) only',
      'SSE-S3 with AWS managed keys',
      'Server-side encryption without key policy changes',
    ],
    correctAnswers: [0],
    explanation:
      'CMKs in AWS KMS let you define key policies granting other accounts decrypt/encrypt access. AWS-managed keys cannot be shared across accounts. ARNs identify resources but do not grant cross-account encryption access.',
  },
  {
    id: 'aif-sup-147',
    domain: 'applications',
    task: '3.1',
    tags: ['amazon-q', 'business-assistant', 'kaplan', 'practice-exam'],
    question:
      'A startup wants to quickly integrate a generative AI business assistant into internal workflows to answer employee questions and generate reports from company data. Which AWS service is most appropriate?',
    options: [
      'Amazon Q',
      'AWS Step Functions',
      'Amazon SageMaker JumpStart',
      'Amazon Bedrock alone without connectors',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Q is a generative AI business assistant that connects to enterprise data, answers employee questions, generates reports, and supports workflow integration. Step Functions orchestrates workflows; JumpStart deploys models; Bedrock is the FM API layer.',
  },
  {
    id: 'aif-sup-148',
    domain: 'guidelines',
    task: '4.2',
    tags: ['transparency', 'complexity', 'tradeoffs', 'kaplan', 'practice-exam'],
    question:
      'When balancing model safety and transparency on AWS, which tradeoff is common?',
    options: [
      'More complex models are often less transparent',
      'More transparent models are always less safe',
      'Simpler models always perform better on complex tasks',
      'Transparency and safety are always perfectly aligned',
    ],
    correctAnswers: [0],
    explanation:
      'Deep learning and other complex models often achieve higher performance but are harder to interpret. Simpler models are more transparent yet may underfit complex patterns. Transparency and safety can conflict but are not always opposed.',
  },
  {
    id: 'aif-sup-149',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['comprehend', 'sentiment-analysis', 'kaplan', 'practice-exam'],
    question:
      'A marketing team wants to automatically analyze customer sentiment from online product reviews. Which AWS service is BEST suited?',
    options: [
      'Amazon Comprehend',
      'Amazon Polly',
      'Amazon Translate',
      'Amazon Lex',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Comprehend performs NLP tasks including sentiment analysis on text such as reviews. Polly converts text to speech; Translate converts languages; Lex builds conversational chatbots.',
  },
  {
    id: 'aif-sup-150',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['classification', 'metrics', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'You are building a spam email classifier. Which metrics should you use to measure performance? (Select THREE.)',
    options: [
      'Precision',
      'Recall',
      'F1 score',
      'SHAP value',
      'Training time',
      'Feature importance',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Precision, recall, and F1 score evaluate classification quality—especially useful when spam is imbalanced. SHAP and feature importance explain predictions; training time is an operational metric, not model quality.',
  },
  {
    id: 'aif-sup-151',
    domain: 'applications',
    task: '3.3',
    tags: ['lineage-tracking', 'sagemaker', 'reproducibility', 'kaplan', 'practice-exam'],
    question:
      'You need to identify the exact code, configurations, and parameters used to train a specific ML model in AWS to reproduce the training workflow. Which service should you use?',
    options: [
      'Amazon SageMaker AI Lineage Tracking',
      'Amazon SageMaker Model Registry',
      'Amazon SageMaker Debugger',
      'AWS CloudTrail',
    ],
    correctAnswers: [0],
    explanation:
      'SageMaker AI Lineage Tracking records provenance of datasets, processing jobs, training artifacts, and parameters across the ML workflow. Model Registry manages approved models; Debugger captures training metrics; CloudTrail logs API calls.',
  },
  {
    id: 'aif-sup-152',
    domain: 'applications',
    task: '3.2',
    tags: ['negative-prompt', 'prompt-engineering', 'kaplan', 'practice-exam'],
    question:
      'Which of the following is a negative prompt in prompt engineering?',
    options: [
      '"Avoid including any offensive content."',
      '"Write a short story about a negative cat."',
      '"Translate this sentence into negative Spanish words."',
      '"You are a helpful but negative informative assistant."',
    ],
    correctAnswers: [0],
    explanation:
      'A negative prompt explicitly tells the model what not to generate—a direct output constraint. Using "negative" as a descriptive adjective in content instructions is a positive instruction about theme, not a negative prompt.',
  },

  // Kaplan / Skillsoft AIF-C01 practice exam — batch 5 (Q99–Q141 gaps)
  {
    id: 'aif-sup-153',
    domain: 'fundamentals',
    task: '1.2',
    tags: ['use-cases', 'limitations', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'Which are NOT realistic use cases for AI/ML solutions? (Select THREE.)',
    options: [
      'Determining the exact future price of a specific stock with 100% certainty',
      'Creating a system that perfectly predicts individual human behavior in all situations',
      'Implementing a system that guarantees complete protection against all cyberattacks',
      'Analyzing customer sentiment from social media posts and product reviews',
      'Predicting the probability of equipment failure from sensor data',
      'Automating data entry from handwritten forms using OCR',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'AI/ML is probabilistic—it cannot guarantee certainty, perfect human-behavior prediction, or absolute security. Sentiment analysis, predictive maintenance, and document OCR are established, realistic ML applications.',
  },
  {
    id: 'aif-sup-154',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['ml-pipeline', 'lifecycle', 'kaplan', 'practice-exam'],
    question:
      'What is the correct order of steps in a typical machine learning pipeline?',
    options: [
      'Data collection → Data preprocessing → EDA → Feature engineering → Model training → Hyperparameter tuning → Evaluation → Deployment → Monitoring',
      'Model training → Data collection → Deployment → EDA → Feature engineering → Monitoring',
      'Deployment → Evaluation → Hyperparameter tuning → Data collection → Model training',
      'Feature engineering → Deployment → Data collection → Preprocessing → Monitoring → EDA',
    ],
    correctAnswers: [0],
    explanation:
      'Teams collect data, preprocess and explore it, engineer features, train and tune models, evaluate on held-out data, deploy to production, then monitor for drift and degradation. Training cannot precede data collection; deployment follows evaluation.',
  },
  {
    id: 'aif-sup-155',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['aws-value', 'advantages', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'Which are advantages of using AWS generative AI services? (Select THREE.)',
    options: [
      'Speed to market',
      'Enhanced accessibility',
      'Low barrier to entry',
      'Perfect predictions by models',
      'Zero compliance needs',
      'Complete removal of human effort',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Managed AWS GenAI services accelerate prototyping, lower infrastructure barriers, and democratize access. Models remain probabilistic—not perfect. Compliance and human oversight are still required; GenAI augments rather than eliminates human effort.',
  },
  {
    id: 'aif-sup-156',
    domain: 'generative-ai',
    task: '2.1',
    tags: ['transformer', 'llm', 'architecture', 'kaplan', 'practice-exam'],
    question:
      'A developer is building a ChatGPT-style chatbot. Which neural network architecture is the foundation for natural language understanding and generation?',
    options: [
      'Transformer-based large language models',
      'Foundation models (as an architecture type)',
      'Diffusion models',
      'Multi-modal models only',
    ],
    correctAnswers: [0],
    explanation:
      'GPT-style chatbots use transformer architectures with self-attention to process sequential text and capture long-range context. "Foundation model" describes a pretrained model category—not a specific neural network architecture. Diffusion models generate images.',
  },
  {
    id: 'aif-sup-157',
    domain: 'security',
    task: '5.1',
    tags: ['vulnerability-management', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'Which are best practices for identifying, assessing, and mitigating security vulnerabilities in an AI system? (Select THREE.)',
    options: [
      'Encrypt data at rest and in transit',
      'Implement server hardening',
      'Apply security patches and updates promptly',
      'Perform data quality checks',
      'Implement data access control',
      'Track data lineage',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Encryption, hardened servers, and timely patching directly mitigate security vulnerabilities. Data quality checks, access control, and lineage support governance and data management—they are not the primary vulnerability-mitigation practices in this context.',
  },
  {
    id: 'aif-sup-158',
    domain: 'applications',
    task: '3.3',
    tags: ['data-selection', 'foundation-models', 'lifecycle', 'kaplan', 'practice-exam'],
    question:
      'A team is developing a new foundation model. What is the first step in the model creation process?',
    options: [
      'Data selection—identifying, gathering, and preparing a large diverse dataset',
      'Evaluation on benchmark datasets',
      'Fine-tuning for downstream tasks',
      'Pretraining on the corpus',
    ],
    correctAnswers: [0],
    explanation:
      'Data selection comes first: teams identify and prepare relevant corpora aligned with intended capabilities. Pretraining follows on that data; fine-tuning and evaluation occur later in the FM lifecycle.',
  },
  {
    id: 'aif-sup-159',
    domain: 'security',
    task: '5.2',
    tags: ['rbac', 'segmentation', 'access-control', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'Which are data access control best practices for a secure data engineering workflow? (Select TWO.)',
    options: [
      'Role-based access control (RBAC)',
      'Segmentation',
      'Discretionary access control (DAC) for all users',
      'Flat permissions across all teams',
      'Data lineage tracking',
    ],
    correctAnswers: [0, 1],
    explanation:
      'RBAC assigns permissions to roles such as data scientist or analyst; segmentation isolates sensitive data to authorized zones. Flat permissions violate least privilege; DAC is harder to govern at scale; lineage supports auditability but is not an access-control mechanism.',
  },
  {
    id: 'aif-sup-160',
    domain: 'fundamentals',
    task: '1.1',
    tags: ['data-types', 'tabular', 'kaplan', 'practice-exam'],
    question:
      'Email metadata fields such as Subject, Sender, Recipients, Date, and Time are best categorized as which data type?',
    options: [
      'Tabular (structured) data',
      'Unstructured text data',
      'Image data',
      'Time-series data',
    ],
    correctAnswers: [0],
    explanation:
      'Metadata has structured attributes and values—like rows in a table—even though email body content is text. Image data is visual; time-series requires time-ordered measurements such as hourly traffic counts.',
  },
  {
    id: 'aif-sup-161',
    domain: 'fundamentals',
    task: '1.3',
    tags: ['mlops', 'repeatable-processes', 'kaplan', 'practice-exam'],
    question:
      'Which MLOps principle emphasizes automating the ML workflow for consistent, reproducible results across environments?',
    options: [
      'Repeatable processes',
      'Experimentation',
      'Managing technical debt',
      'Scalable systems',
    ],
    correctAnswers: [0],
    explanation:
      'Repeatable processes automate data prep through deployment and monitoring for reproducibility—a core MLOps tenet. Experimentation tries different models and hyperparameters; scalability and technical-debt management address different concerns.',
  },
  {
    id: 'aif-sup-162',
    domain: 'security',
    task: '5.2',
    tags: ['healthcare', 'privacy', 'multi-select', 'kaplan', 'practice-exam'],
    question:
      'You are building an ML model on healthcare data and must protect sensitive information while complying with privacy regulations. Which methods should you use? (Select THREE.)',
    options: [
      'Federated learning',
      'Data masking',
      'Key management',
      'Data sharding',
      'Overfitting data',
      'Gradient descent optimization',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Federated learning trains on decentralized data without centralizing records; data masking obscures sensitive fields; key management (KMS) secures encryption keys. Sharding splits data for scale—not privacy; overfitting and gradient descent are training concepts.',
  },
  {
    id: 'aif-sup-163',
    domain: 'applications',
    task: '3.1',
    tags: ['rag', 'chatbot', 'business-use-case', 'kaplan', 'practice-exam'],
    question:
      'Which is a typical business application of retrieval-augmented generation (RAG)?',
    options: [
      'Building a chatbot that answers questions from company internal documentation',
      'Optimizing supply-chain logistics routes',
      'Creating personalized music playlists',
      'Generating synthetic image training data only',
    ],
    correctAnswers: [0],
    explanation:
      'RAG retrieves relevant passages from private knowledge bases—FAQs, policies, wikis—to ground chatbot answers. Supply-chain optimization and playlist generation use other ML approaches; synthetic image generation is not a typical RAG use case.',
  },
  {
    id: 'aif-sup-164',
    domain: 'applications',
    task: '3.1',
    tags: ['self-hosted', 'compliance', 'deployment', 'kaplan', 'practice-exam'],
    question:
      'A regulated financial institution must deploy an LLM on sensitive documents with strict control over all deployment infrastructure. Which method is MOST suitable?',
    options: [
      'Self-hosted API on infrastructure the company directly manages',
      'Managed API service with provider-managed infrastructure',
      'Serverless deployment only',
      'Batch inference without access controls',
    ],
    correctAnswers: [0],
    explanation:
      'Self-hosted deployment on company-managed servers or a dedicated VPC provides maximum control over hardware, network, and security configurations required for strict compliance. Managed and serverless options trade control for convenience.',
  },
  {
    id: 'aif-sup-165',
    domain: 'generative-ai',
    task: '2.3',
    tags: ['bedrock', 'foundation-models', 'kaplan', 'practice-exam'],
    question:
      'A startup needs access to foundation models from multiple providers through a simple API without managing underlying infrastructure. Which AWS service should they choose?',
    options: [
      'Amazon Bedrock',
      'Amazon SageMaker JumpStart',
      'AWS Inferentia',
      'Amazon Q',
    ],
    correctAnswers: [0],
    explanation:
      'Amazon Bedrock provides unified API access to partner and AWS foundation models as a fully managed service—no infrastructure to provision. JumpStart deploys models on SageMaker infrastructure; Inferentia is inference hardware; Q is a business assistant.',
  },
  {
    id: 'aif-sup-166',
    domain: 'security',
    task: '5.1',
    tags: ['data-governance', 'monitoring', 'observation', 'kaplan', 'practice-exam'],
    question:
      'Which data governance strategy proactively analyzes data to discover patterns, trends, and anomalies?',
    options: [
      'Data observation',
      'Data monitoring',
      'Data retention',
      'Data residency',
    ],
    correctAnswers: [0],
    explanation:
      'Data observation is exploratory analysis to find patterns and anomalies. Data monitoring continuously tracks quality, availability, and security metrics. Retention defines how long data is kept; residency specifies where data must be stored.',
  },
]
