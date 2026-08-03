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
]
