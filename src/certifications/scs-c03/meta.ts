import type { CertificationMeta } from '../types'

export const scsC03Meta: CertificationMeta = {

  id: 'scs-c03',
  code: 'SCS-C03',
  name: 'AWS Certified Security - Specialty',
  vendor: 'AWS',
  level: 'specialty',
  description:
    'Specialty certification for securing AWS workloads: detection, incident response, IAM, data protection, and governance.',
  available: true,
  domains: [
    {
      id: 'detection',
      name: 'Detection',
      weight: 16,
      description: 'Threat detection, logging, and security monitoring',
    },
    {
      id: 'incident-response',
      name: 'Incident Response',
      weight: 14,
      description: 'Investigation, containment, and automated response',
    },
    {
      id: 'infrastructure-security',
      name: 'Infrastructure Security',
      weight: 18,
      description: 'Network, compute, and edge protection',
    },
    {
      id: 'iam',
      name: 'Identity and Access Management',
      weight: 20,
      description: 'IAM policies, federation, and access at scale',
    },
    {
      id: 'data-protection',
      name: 'Data Protection',
      weight: 18,
      description: 'Encryption, key management, and data classification',
    },
    {
      id: 'security-governance',
      name: 'Security Foundations and Governance',
      weight: 14,
      description: 'Organizations, compliance, and security baselines',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 75,
  },
  cardCount: 190,
}
