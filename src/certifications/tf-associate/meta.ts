import type { CertificationMeta } from '../types'

export const tfAssociateMeta: CertificationMeta = {

  id: 'tf-associate',
  code: 'TF-004',
  name: 'HashiCorp Certified: Terraform Associate (004)',
  vendor: 'HashiCorp',
  level: 'associate',
  description:
    'Associate certification for IaC concepts, Terraform workflow, configuration, modules, state, and HCP Terraform.',
  available: true,
  domains: [
    {
      id: 'iac-terraform',
      name: 'Infrastructure as Code with Terraform',
      weight: 13,
      description: 'IaC patterns, advantages, and multi-cloud workflows',
    },
    {
      id: 'fundamentals',
      name: 'Terraform Fundamentals',
      weight: 13,
      description: 'Providers, plugins, configuration, and state basics',
    },
    {
      id: 'core-workflow',
      name: 'Core Terraform Workflow',
      weight: 13,
      description: 'init, validate, plan, apply, destroy, and fmt',
    },
    {
      id: 'configuration',
      name: 'Terraform Configuration',
      weight: 15,
      description: 'Resources, data sources, variables, functions, and secrets',
    },
    {
      id: 'modules',
      name: 'Terraform Modules',
      weight: 13,
      description: 'Module sources, scope, versioning, and usage',
    },
    {
      id: 'state-management',
      name: 'Terraform State Management',
      weight: 13,
      description: 'Backends, locking, remote state, and drift',
    },
    {
      id: 'maintain-infra',
      name: 'Maintain Infrastructure with Terraform',
      weight: 12,
      description: 'Import, state inspection, and troubleshooting',
    },
    {
      id: 'hcp-terraform',
      name: 'HCP Terraform',
      weight: 11,
      description: 'Workspaces, collaboration, governance, and integration',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 70,
  },
  cardCount: 190,
}
