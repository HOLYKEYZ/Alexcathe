# Alexcathe Services Website

A premium construction and engineering website built for Alexcathe Services Nig Ltd, utilizing modern web technologies for a high-performance, accessible, and stunning user experience.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** Radix UI primitives, [Lucide React](https://lucide.dev/) icons
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** React Hook Form + Zod validation

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository (if not already local).
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
   *Note: `--legacy-peer-deps` is required due to React 19 peer dependency checks with some libraries.*

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

- `/app`: App Router pages and layouts
- `/components`: Reusable UI components
  - `/ui`: Shadcn-like primitive components
- `/lib`: Utility functions and animation variants
- `/public`: Static assets

## Design System

The design follows a deep blue/black theme with vibrant gradients (`bg-gradient-primary`, `bg-gradient-cta`) adhering to the Alexcathe brand identity.
