import type { CertificationMeta } from '../types'

export const soaC03Meta: CertificationMeta = {
  id: 'soa-c03',
  code: 'SOA-C03',
  name: 'AWS Certified SysOps Administrator - Associate (CloudOps Engineer)',
  vendor: 'AWS',
  level: 'associate',
  description:
    'Associate certification for monitoring, operating, automating, and securing workloads on AWS.',
  available: true,
  domains: [
    {
      id: 'monitoring-remediation',
      name: 'Monitoring, Logging, and Remediation',
      weight: 20,
      description: 'CloudWatch, CloudTrail, EventBridge, alarms, and operational response',
    },
    {
      id: 'reliability-continuity',
      name: 'Reliability and Business Continuity',
      weight: 28,
      description: 'Resilience, backups, DR strategies, and high availability operations',
    },
    {
      id: 'deployment-automation',
      name: 'Deployment, Provisioning, and Automation',
      weight: 22,
      description: 'CloudFormation, Systems Manager, CI/CD operations, and governance',
    },
    {
      id: 'security-compliance',
      name: 'Security and Compliance',
      weight: 30,
      description: 'IAM, data protection, incident response, and compliance tooling',
    },
  ],
  mockExam: {
    questionCount: 65,
    passPercent: 72,
  },
  cardCount: 190,
}
