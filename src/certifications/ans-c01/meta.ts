import type { CertificationMeta } from '../types'

export const ansC01Meta: CertificationMeta = {

  id: 'ans-c01',
  code: 'ANS-C01',
  name: 'AWS Certified Advanced Networking - Specialty',
  vendor: 'AWS',
  level: 'specialty',
  description:
    'Specialty certification for complex AWS and hybrid network design, implementation, operations, and security. Exam retires August 25, 2026.',
  available: true,
  domains: [
    {
      id: 'network-design',
      name: 'Network Design',
      weight: 30,
      description: 'VPC, hybrid connectivity, multi-account, and HA network architecture',
    },
    {
      id: 'network-implementation',
      name: 'Network Implementation',
      weight: 26,
      description: 'Routing, BGP, VPN, Direct Connect, and network automation',
    },
    {
      id: 'network-operations',
      name: 'Network Management and Operation',
      weight: 20,
      description: 'Monitoring, troubleshooting, flow logs, and performance tuning',
    },
    {
      id: 'network-security',
      name: 'Network Security, Compliance, and Governance',
      weight: 24,
      description: 'WAF, Shield, Network Firewall, segmentation, and compliance',
    },
  ],
  mockExam: {
    questionCount: 65,
    passPercent: 75,
  },
  cardCount: 190,
}
