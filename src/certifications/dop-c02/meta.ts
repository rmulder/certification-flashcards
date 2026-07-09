import type { CertificationMeta } from '../types'

export const dopC02Meta: CertificationMeta = {

  id: 'dop-c02',
  code: 'DOP-C02',
  name: 'AWS Certified DevOps Engineer - Professional',
  vendor: 'AWS',
  level: 'professional',
  description:
    'Professional certification for CI/CD automation, IaC, resilient operations, monitoring, incident response, and security on AWS.',
  available: true,
  domains: [
    {
      id: 'sdlc-automation',
      name: 'SDLC Automation',
      weight: 22,
      description: 'CI/CD pipelines, deployment strategies, and release automation',
    },
    {
      id: 'config-iac',
      name: 'Configuration Management and IaC',
      weight: 17,
      description: 'CloudFormation, CDK, SAM, StackSets, and desired-state config',
    },
    {
      id: 'resilient',
      name: 'Resilient Cloud Solutions',
      weight: 15,
      description: 'High availability, scaling, DR, and self-healing architectures',
    },
    {
      id: 'monitoring',
      name: 'Monitoring and Logging',
      weight: 15,
      description: 'CloudWatch, logs, metrics, traces, and observability',
    },
    {
      id: 'incident-response',
      name: 'Incident and Event Response',
      weight: 14,
      description: 'Event routing, remediation workflows, and troubleshooting',
    },
    {
      id: 'security-compliance',
      name: 'Security and Compliance',
      weight: 17,
      description: 'IAM at scale, secrets, guardrails, and audit automation',
    },
  ],
  mockExam: {
    questionCount: 75,
    passPercent: 75,
  },
  cardCount: 190,
}
