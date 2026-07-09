import type { CertificationMeta } from '../types'

export const deepLearningStudyMeta: CertificationMeta = {
  id: 'deep-learning-study',
  code: 'Deep Learning',
  name: 'Deep Learning Specialization Study Track',
  vendor: 'AI / ML',
  level: 'associate',
  description:
    'Study deck aligned with the Coursera Deep Learning Specialization — neural networks, optimization, ML project strategy, CNNs, and sequence models. No official proctored exam; complements course completion certificates.',
  available: true,
  studyTrack: true,
  domains: [
    {
      id: 'neural-networks',
      name: 'Neural Networks and Deep Learning',
      weight: 25,
      description: 'Forward/backprop, activations, loss, and vectorized implementations',
    },
    {
      id: 'improving-dnn',
      name: 'Improving Deep Neural Networks',
      weight: 22,
      description: 'Regularization, optimization, hyperparameters, and batch normalization',
    },
    {
      id: 'ml-projects',
      name: 'Structuring Machine Learning Projects',
      weight: 12,
      description: 'Train/dev/test, bias/variance, error analysis, and transfer learning',
    },
    {
      id: 'cnns',
      name: 'Convolutional Neural Networks',
      weight: 22,
      description: 'Conv layers, ResNets, detection, recognition, and style transfer',
    },
    {
      id: 'sequence-models',
      name: 'Sequence Models',
      weight: 19,
      description: 'RNNs, LSTM/GRU, attention, transformers, and Hugging Face NLP',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
