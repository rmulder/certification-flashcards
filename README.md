# Certification Flashcards

A local study app for IT certification exams. Runs entirely in your browser with no backend — progress is saved to `localStorage`.

## Certifications

| Code | Exam | Status |
|------|------|--------|
| CLF-C02 | AWS Certified Cloud Practitioner | **Available** (242 cards) — *start here* |
| AIF-C01 | AWS Certified AI Practitioner | **Available** (190 cards) — *start here* |
| DVA-C02 | AWS Certified Developer - Associate | **Available** (190 cards) |
| SAA-C03 | AWS Certified Solutions Architect - Associate | **Available** (190 cards) |
| MLA-C01 | AWS Certified Machine Learning Engineer - Associate | **Available** (190 cards) |
| AIP-C01 | AWS Certified Generative AI Developer - Professional | **Available** (190 cards) |
| DOP-C02 | AWS Certified DevOps Engineer - Professional | **Available** (190 cards) |
| SAP-C02 | AWS Certified Solutions Architect - Professional | **Available** (190 cards) |
| SCS-C03 | AWS Certified Security - Specialty | **Available** (190 cards) |
| DEA-C01 | AWS Certified Data Engineer - Associate | **Available** (190 cards) |
| MLS-C01 | AWS Certified Machine Learning - Specialty | **Available** (190 cards, retired exam) |
| ANS-C01 | AWS Certified Advanced Networking - Specialty | **Available** (190 cards, retires Aug 2026) |

### AI / ML

| Code | Exam | Status |
|------|------|--------|
| AI for Everyone | AI For Everyone | **Available** (190 cards) |
| Machine Learning | Machine Learning Specialization Study Track | **Available** (190 cards) |
| Deep Learning | Deep Learning Specialization Study Track | **Available** (190 cards) |
| IBM AI Engineering | IBM AI Engineering Professional Certificate | **Available** (190 cards) |
| IBM Generative AI Engineering | IBM Generative AI Engineering Professional Certificate | **Available** (190 cards) |
| Dataquest Gen AI | Generative AI Fundamentals in Python | **Available** (190 cards) |
| AI+ Foundation | TrainAI AI+ Foundation | **Available** (190 cards) |
| IBM RAG & Agentic AI | IBM RAG and Agentic AI Professional Certificate | **Available** (190 cards) |
| PMI-CPMAI | PMI Certified Professional in Managing AI (PMI-CPMAI) | **Available** (190 cards) |

### JavaScript

| Code | Exam | Status |
|------|------|--------|
| React | React Professional Study Track | **Available** (190 cards) |
| OpenJS Node | OpenJS Node.js Developer Study Track | **Available** (190 cards, retired exams) |

### Google Cloud

| Code | Exam | Status |
|------|------|--------|
| GCP CDL | Google Cloud Digital Leader | **Available** (190 cards) |
| GCP GAIL | Google Cloud Generative AI Leader | **Available** (190 cards) |
| Google AI Essentials | Google AI Essentials Study Track | **Available** (190 cards) |
| GCP ACE | Google Cloud Associate Cloud Engineer | **Available** (190 cards) |
| GCP PMLE | Google Cloud Professional Machine Learning Engineer | **Available** (190 cards) |

### Microsoft

| Code | Exam | Status |
|------|------|--------|
| AZ-900 | Microsoft Certified: Azure Fundamentals | **Available** (190 cards) |
| AI-901 | Microsoft Certified: Azure AI Fundamentals | **Available** (190 cards) |
| AI-102 | Microsoft Certified: Azure AI Engineer Associate | **Available** (190 cards) |

### Programming Languages and Databases

| Code | Exam | Status |
|------|------|--------|
| GH-300 | GitHub Copilot | **Available** (190 cards) |
| TF-004 | HashiCorp Certified: Terraform Associate (004) | **Available** (190 cards) |
| PG-ESS | EDB Essentials for PostgreSQL | **Available** (167 cards, SQL-focused) |
| PCAP-31-03 | PCAP™ – Certified Associate Python Programmer | **Available** (190 cards) |
| 1Z0-830 | Oracle Certified Professional: Java SE 21 Developer | **Available** (190 cards) |
| PD1 | Salesforce Certified Platform Developer I | **Available** (190 cards) |

## Features

- **Catalog home** — pick a certification to study
- **Study mode** — flip cards with keyboard shortcuts
- **Quiz mode** — multiple-choice practice with instant feedback
- **Mock exam** — domain-weighted questions with pass threshold
- **Progress tracking** — per-card ratings and domain breakdown
- **Offline-ready** after build

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

## Quick start

```bash
cd certification-flashcards
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Production build (fully local)

```bash
npm run build
npm run preview
```

## Usage

| Mode | Description |
|------|-------------|
| **Study** | Flip through cards; rate as Don't know / Learning / Know it |
| **Quiz** | 20-question MCQ session with explanations |
| **Mock Exam** | Full exam weighted by domain; pass threshold per cert |
| **Progress** | Domain-level stats and last mock score |

### Keyboard shortcuts (Study mode)

- `Space` — flip card
- `←` `→` — previous / next
- `1` `2` `3` — rate card

## Project structure

```
src/
├── core/
│   ├── components/   # Shared UI (Study, Quiz, Mock Exam, etc.)
│   ├── lib/          # Storage, quiz logic
│   └── types/        # Shared types
├── certifications/
│   ├── registry.ts   # All registered certs
│   ├── clf-c02/      # CLF-C02 cards and config
│   ├── aif-c01/      # AIF-C01 cards and config
│   ├── edb-pg-essentials/  # EDB Essentials for PostgreSQL
│   └── …             # One folder per certification
└── pages/
    ├── CatalogHome.tsx
    └── CertHome.tsx
```

## Adding a certification

1. Create `src/certifications/{cert-id}/` with domain card files and `index.ts`
2. Export a `CertificationConfig` with `available: true`
3. Register it in `src/certifications/registry.ts`

Each card follows this shape:

```typescript
{
  id: 'unique-id',
  domain: 'domain-id',
  task: '1.1',
  tags: ['S3', 'storage'],
  question: '...',
  options: ['A', 'B', 'C', 'D'],
  correctAnswers: [2],        // or [0, 2] for multi-select
  explanation: '...',
}
```

## License

MIT — study content references AWS public documentation. AWS and Amazon Web Services are trademarks of Amazon.com, Inc.
