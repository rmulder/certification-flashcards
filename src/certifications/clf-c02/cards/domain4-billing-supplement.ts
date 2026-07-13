import type { Card } from '../../../core/types'

/** Additional CLF-C02 practice questions — sample exams & exam guide (Domain 4) */
export const billingSupplementCards: Card[] = [
  {
    id: 'bill-036',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['budgets', 'sns', 'alerts'],
    question:
      'A finance team wants email alerts when actual AWS spend exceeds 80% of a monthly budget. Which combination of services should they use?',
    options: [
      'AWS Budgets with Amazon SNS notifications',
      'AWS Cost Explorer only without alerts',
      'Amazon CloudWatch CPU alarms',
      'AWS CloudTrail with S3 lifecycle rules',
    ],
    correctAnswers: [0],
    explanation:
      'AWS Budgets tracks spend against thresholds and can publish alerts to SNS, which delivers email, SMS, or Lambda notifications.',
  },
  {
    id: 'bill-037',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['savings-plans', 'pricing'],
    question:
      'Which pricing option provides flexible compute savings across EC2, Lambda, and Fargate with a committed hourly spend?',
    options: [
      'Savings Plans',
      'Dedicated Hosts only',
      'On-Demand with no commitment',
      'AWS Marketplace free tier',
    ],
    correctAnswers: [0],
    explanation:
      'Savings Plans offer lower prices in exchange for a one- or three-year hourly spend commitment, with flexibility across instance families and regions.',
  },
  {
    id: 'bill-038',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['support', 'tam'],
    question:
      'Which AWS Support plan includes a designated Technical Account Manager (TAM)?',
    options: [
      'Enterprise Support',
      'Developer Support',
      'Basic Support',
      'Business Support without add-ons',
    ],
    correctAnswers: [0],
    explanation:
      'Enterprise and Enterprise On-Ramp Support include TAM access. Business provides 24/7 support but not a dedicated TAM.',
  },
  {
    id: 'bill-039',
    domain: 'billing-pricing',
    task: '4.1',
    tags: ['spot', 'pricing'],
    question:
      'Which EC2 pricing model offers the largest discount compared to On-Demand but can be interrupted with two minutes notice?',
    options: [
      'Spot Instances',
      'Reserved Instances',
      'Dedicated Hosts',
      'On-Demand Instances',
    ],
    correctAnswers: [0],
    explanation:
      'Spot Instances use spare capacity at steep discounts but AWS can reclaim capacity with a 2-minute interruption notice.',
  },
  {
    id: 'bill-040',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['pricing-calculator', 'estimation'],
    question:
      'Before deploying a new architecture, which tool helps estimate monthly AWS costs?',
    options: [
      'AWS Pricing Calculator',
      'AWS Cost Explorer historical view only',
      'AWS Trusted Advisor security checks',
      'Amazon GuardDuty',
    ],
    correctAnswers: [0],
    explanation:
      'Pricing Calculator models future workloads and estimates costs. Cost Explorer analyzes past and forecasted spend after resources are in use.',
  },
  {
    id: 'bill-041',
    domain: 'billing-pricing',
    task: '4.2',
    tags: ['organizations', 'billing'],
    question:
      'What is a benefit of consolidated billing in AWS Organizations?',
    options: [
      'Combined usage for volume pricing discounts across member accounts',
      'Free unlimited data transfer between all cloud providers',
      'Automatic Reserved Instance sharing is never possible',
      'Elimination of all service quotas',
    ],
    correctAnswers: [0],
    explanation:
      'Consolidated billing aggregates usage across accounts for volume tiers and allows sharing some Reserved Instance and Savings Plan benefits.',
  },
  {
    id: 'bill-042',
    domain: 'billing-pricing',
    task: '4.3',
    tags: ['exam-format', 'support'],
    question:
      'What is the minimum passing score on the CLF-C02 exam?',
    options: ['700 out of 1000', '80%', '65 correct answers', '500 out of 1000'],
    correctAnswers: [0],
    explanation:
      'AWS uses scaled scoring from 100–1000 on CLF-C02; 700 is the minimum passing score. The exact number of correct answers varies by exam form.',
  },
]
