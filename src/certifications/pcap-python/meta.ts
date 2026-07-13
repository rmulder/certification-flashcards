import type { CertificationMeta } from '../types'

export const pcapPythonMeta: CertificationMeta = {
  id: 'pcap-python',
  code: 'PCAP-31-03',
  name: 'PCAP™ – Certified Associate Python Programmer',
  vendor: 'Programming Languages and Databases',
  level: 'associate',
  description:
    'Associate-level Python certification covering modules, exceptions, strings, OOP, comprehensions, lambdas, closures, and I/O.',
  available: true,
  domains: [
    {
      id: 'modules-packages',
      name: 'Modules and Packages',
      weight: 12,
      description: 'Import mechanics, __name__, packages, and module search path',
    },
    {
      id: 'exceptions',
      name: 'Exceptions',
      weight: 12,
      description: 'try/except/else/finally, raising, hierarchy, and custom exceptions',
    },
    {
      id: 'strings',
      name: 'Strings',
      weight: 12,
      description: 'Indexing, slicing, formatting, encoding, and string methods',
    },
    {
      id: 'oop',
      name: 'Object-Oriented Programming',
      weight: 25,
      description: 'Classes, inheritance, polymorphism, special methods, and properties',
    },
    {
      id: 'misc',
      name: 'Miscellaneous',
      weight: 39,
      description: 'Comprehensions, lambdas, closures, decorators, and file I/O',
    },
  ],
  mockExam: {
    questionCount: 40,
    passPercent: 70,
  },
  cardCount: 190,
}
