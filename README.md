# Certification Flashcards

A local study app for IT certification exams. Runs entirely in your browser with no backend — progress is saved to `localStorage`.

## Certifications

| Code | Exam | Status |
|------|------|--------|
| CLF-C02 | AWS Certified Cloud Practitioner | **Available** (190 cards) |
| AIF-C01 | AWS Certified AI Practitioner | **Available** (190 cards) |
| DVA-C02 | AWS Certified Developer - Associate | Coming soon |
| DEA-C01 | AWS Certified Data Engineer - Associate | Coming soon |
| SAA-C03 | AWS Certified Solutions Architect - Associate | Coming soon |
| AIP-C01 | AWS Certified Generative AI Developer - Professional | Coming soon |

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
│   ├── stubs.ts      # Placeholder configs for upcoming certs
│   └── clf-c02/      # CLF-C02 cards and config
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
