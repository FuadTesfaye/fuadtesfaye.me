# [fuadtesfaye.me](https://www.fuadtesfaye.me)

Personal portfolio, developer dossier, and showcase for Fuad Tesfaye — Full-Stack Software Engineer and AI Automation Developer.

- Live site: [fuadtesfaye.me](https://www.fuadtesfaye.me)
- Repository: [github.com/FuadTesfaye/fuadtesfaye.me](https://github.com/FuadTesfaye/fuadtesfaye.me)

## Overview

A modern, high-performance portfolio engineered with Next.js 16 (App Router), React 19, and Tailwind CSS v4. Designed with an architectural minimalist aesthetic, tactile typography, interactive components, and responsive typography across all screen viewports.

## Tech stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI primitives**: [shadcn/ui](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/)
- **Content**: MDX (centralized document layer)
- **Testing**: [Vitest](https://vitest.dev/)
- **Package manager**: pnpm (with Bun for build scripts)
- **Deployment**: [Vercel](https://vercel.com/)

## Key features

- **Tactile UI and typography**: Custom typography pairings (Metamorphous, Unica One, Aldrich Cyber, Mea Culpa cursive) combined with an architectural monochrome aesthetic.
- **Interactive telemetry**: Live GitHub contribution grid, system status telemetry, and responsive scroll-spy floating pill navigation.
- **Light and dark modes**: Seamless theme transitions with custom CSS variables and meta theme support.
- **Centralized MDX content**: Unified content system powering blog posts, component documentation, dynamic OG images, and RSS feeds.
- **Component registry**: Built-in shadcn-compatible component and block registry distribution system.
- **SEO and AI ready**: Full structured data with JSON-LD schemas, automated sitemaps, robots.txt, and [`/llms.txt`](https://llmstxt.org) documentation for AI agents.
- **Privacy and anti-spam**: Base64-obfuscated contact telemetry and spam-resistant contact endpoints.
- **PWA ready**: Installable progressive web application with customized web manifest and theme color integration.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [pnpm](https://pnpm.io/) (`corepack enable pnpm`)
- [Bun](https://bun.sh/) (required for registry build scripts)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FuadTesfaye/fuadtesfaye.me.git
   cd fuadtesfaye.me
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Update the required environment variables inside `.env.local`.

4. Start the local development server:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) (or your configured local dev URL) in your browser.

## Available scripts

| Command                  | Description                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| `pnpm dev`               | Starts the Next.js development server                                |
| `pnpm build`             | Builds the component registry and compiles production Next.js output |
| `pnpm start`             | Runs the compiled production server                                  |
| `pnpm check-types`       | Executes TypeScript type checking via `tsc --noEmit`                 |
| `pnpm lint`              | Runs ESLint analysis across the codebase                             |
| `pnpm lint:fix`          | Runs ESLint and automatically fixes lint issues                      |
| `pnpm format:write`      | Formats source files with Prettier                                   |
| `pnpm test:run`          | Executes the Vitest test suite once                                  |
| `pnpm registry:build`    | Generates registry JSON manifests and index files                    |
| `pnpm registry:validate` | Validates shadcn registry compliance                                 |

## Project structure

| Path                      | Purpose                                                           |
| ------------------------- | ----------------------------------------------------------------- |
| `src/app/`                | Next.js App Router pages, layouts, and API routes                 |
| `src/components/`         | Shared UI and architectural components                            |
| `src/features/portfolio/` | Portfolio modules, user data, experiences, and projects           |
| `src/features/doc/`       | MDX content layer, document collections, and parser utilities     |
| `src/features/blog/`      | Blog views, post layout components, and reading time helpers      |
| `src/registry/`           | Registry source for reusable components, blocks, and hooks        |
| `src/config/`             | Site configurations, navigation metadata, and JSON-LD definitions |
| `src/hooks/`              | Reusable React hooks                                              |
| `src/lib/`                | Shared utility libraries and styling helpers                      |

## Author

**Fuad Tesfaye**

- Role: Full-Stack Software Engineer & AI Automation Developer
- Location: Addis Ababa, Ethiopia
- Website: [fuadtesfaye.me](https://www.fuadtesfaye.me)
- GitHub: [@FuadTesfaye](https://github.com/FuadTesfaye)
- LinkedIn: [Fuad Tesfaye](https://www.linkedin.com/in/fuad-tesfaye/)
- X: [@FuadTesfaye](https://x.com/FuadTesfaye)
- Email: [fuadtesfaye@gmail.com](mailto:fuadtesfaye@gmail.com)

## Acknowledgements

Based on the open-source portfolio architecture created by [Chánh Đại](https://chanhdai.com).

## License

This project is licensed under the [MIT License](./LICENSE).
