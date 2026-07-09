import type { CertificationMeta } from '../types'

export const machineLearningStudyMeta: CertificationMeta = {
  id: 'machine-learning-study',
  code: 'Machine Learning',
  name: 'Machine Learning Specialization Study Track',
  vendor: 'AI / ML',
  level: 'foundational',
  description:
    'Study deck aligned with the Coursera Machine Learning Specialization — supervised learning, advanced algorithms, and unsupervised learning with recommenders and reinforcement learning. No official proctored exam; complements course completion certificates.',
  available: true,
  studyTrack: true,
  domains: [
    {
      id: 'supervised-ml',
      name: 'Supervised Machine Learning: Regression and Classification',
      weight: 35,
      description: 'Linear/logistic regression, gradient descent, and scikit-learn fundamentals',
    },
    {
      id: 'advanced-algorithms',
      name: 'Advanced Learning Algorithms',
      weight: 36,
      description: 'Neural networks, TensorFlow, decision trees, ensembles, and ML best practices',
    },
    {
      id: 'unsupervised-rl',
      name: 'Unsupervised Learning, Recommenders, and Reinforcement Learning',
      weight: 29,
      description: 'Clustering, anomaly detection, recommenders, and reinforcement learning',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
