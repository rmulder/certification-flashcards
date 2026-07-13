import type { CertificationMeta } from '../types'

export const ocpJava21Meta: CertificationMeta = {
  id: 'ocp-java-21',
  code: '1Z0-830',
  name: 'Oracle Certified Professional: Java SE 21 Developer',
  vendor: 'Programming Languages and Databases',
  level: 'professional',
  description:
    'Professional certification covering Java SE 21 syntax, OOP, collections, generics, streams, lambdas, exceptions, I/O, concurrency, virtual threads, pattern matching, sequenced collections, and the module system.',
  available: true,
  domains: [
    {
      id: 'java-basics',
      name: 'Java Basics & Syntax',
      weight: 15,
      description: 'Primitives, operators, strings, arrays, control flow, var, records, and text blocks',
    },
    {
      id: 'oop',
      name: 'Object-Oriented Programming',
      weight: 20,
      description: 'Classes, inheritance, interfaces, sealed types, enums, encapsulation, and polymorphism',
    },
    {
      id: 'collections-generics',
      name: 'Collections & Generics',
      weight: 18,
      description: 'List, Set, Map, Deque, generics, wildcards, and sequenced collections',
    },
    {
      id: 'streams-lambdas',
      name: 'Streams & Lambdas',
      weight: 17,
      description: 'Functional interfaces, lambda expressions, Stream API, Optional, and collectors',
    },
    {
      id: 'exceptions-io',
      name: 'Exceptions & I/O',
      weight: 15,
      description: 'Exception handling, try-with-resources, java.io, and NIO.2',
    },
    {
      id: 'concurrency',
      name: 'Concurrency',
      weight: 10,
      description: 'Threads, synchronization, executors, virtual threads, and CompletableFuture',
    },
    {
      id: 'modules-java21',
      name: 'Modules & Java 21 Features',
      weight: 5,
      description: 'JPMS, pattern matching, record patterns, sequenced collections, and Java 21 APIs',
    },
  ],
  mockExam: {
    questionCount: 50,
    passPercent: 68,
  },
  cardCount: 190,
}
