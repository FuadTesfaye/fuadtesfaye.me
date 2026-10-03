import {
  CodeXmlIcon,
  CpuIcon,
  GlobeIcon,
  LockIcon,
  ServerIcon,
  ShieldCheckIcon,
  TerminalSquareIcon,
} from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "algowars",
    title: "AlgoWars: Neon Syntax",
    period: {
      start: "05.2026",
    },
    link: "https://v0-algo-wars-3004.vercel.app/",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "systems",
    status: "Vercel Hackathon Winner",
    highlight:
      "Global Vercel v0 Hackathon Winner (8,000+ submissions) — server-authoritative deterministic coding strategy with Google Gemini AI tactics",
    skills: [
      "Vercel AI SDK",
      "Google Gemini",
      "Server-Authoritative",
      "TypeScript",
      "Deterministic Simulation",
      "Game Engine",
    ],
    description: `Winner of the global Vercel v0 Hackathon among 8,000+ developer submissions worldwide.
- Built a real-time multiplayer tactical coding strategy game where players author autonomous algorithms to command units across a dynamic neon grid.
- Engineered a server-authoritative deterministic simulation engine with zero-latency client prediction, ensuring cheat-proof competitive play.
- Integrated Google Gemini via the Vercel AI SDK to generate dynamic game scenarios, analyze player tactics, and power an adaptive AI adversary.
`,
    icon: <TerminalSquareIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "aria",
    title: "ARIA — Resort Intelligence Layer",
    period: {
      start: "2025",
    },
    link: "https://aria-main-98cdc8.free.laravel.cloud/",
    category: "ai",
    status: "Multi-Agent Platform",
    highlight:
      "Production multi-agent hospitality operations platform with sub-second WebSocket telemetry, OpenAI Realtime voice concierge, and 3D spatial mapping",
    skills: [
      "Laravel",
      "PHP 8.3",
      "OpenAI Realtime",
      "WebSockets",
      "Redis",
      "Three.js",
      "MySQL",
      "Twilio",
    ],
    description: `Architected a production-grade multi-agent operations platform for luxury resorts, featuring autonomous guest-experience routing, predictive maintenance scheduling, and real-time staff orchestration.
- Backend built on Laravel / PHP 8.3 with MySQL, Redis caching, and WebSockets (Pusher/Reverb) for sub-second telemetry delivery.
- Integrated multi-modal AI pipelines: OpenAI Realtime API for natural conversational concierge, Twilio for SMS/voice dispatch, and deep telemetry analytics.
- Designed responsive 3D spatial guest maps using Three.js / React Three Fiber embedded in modern blade views.
`,
    icon: <GlobeIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "aiqa",
    title: "AIQA — Autonomous QA Runtime",
    period: {
      start: "2026",
    },
    link: "https://github.com/FuadTesfaye/AiQa",
    githubUrl: "https://github.com/FuadTesfaye/AiQa",
    category: "ai",
    status: "Autonomous Runtime",
    highlight:
      "Evidence-first autonomous QA orchestrator composing 6 browser agents across 5 phases, Playwright MCP, and ISO 29119-4 standards",
    skills: [
      "Playwright MCP",
      "browser-use CLI",
      "ISO 29119-4",
      "TypeScript",
      "Node.js",
      "Agentic Orchestration",
    ],
    description: `Engineered an evidence-first autonomous QA orchestrator that composes 6 specialized browser agents across 5 lifecycle phases (understand, plan, explore, test, report).
- Clean-state incognito verification engine that executes real-browser exploration, auto-discovers edge cases, and produces reproducible, timestamped test artifacts with video traces.
- Integrated dual-engine support: browser-use CLI for agentic web navigation and Playwright MCP for deterministic execution.
- Designed around ISO 29119-4 boundary-value and equivalence-partitioning test standards.
`,
    icon: <TerminalSquareIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "insa-fleet",
    title: "INSA Fleet-Management Platform",
    period: {
      start: "06.2025",
    },
    link: "https://github.com/FuadTesfaye",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "systems",
    status: "Nationwide Telemetry",
    highlight:
      "Nationwide microservices platform with Apache Kafka telemetry streaming and sub-100ms vehicle tracking Next.js dashboards",
    skills: [
      "Spring Boot",
      "Apache Kafka",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Microservices",
      "Tailwind CSS",
    ],
    description: `Core backend services and operator dashboards for a nationwide fleet-management platform monitoring vehicles in real time.
- Engineered core backend services using Spring Boot and microservices architecture, integrating Kafka for real-time telemetry streaming and PostgreSQL for persistence.
- Built high-performance, accessible frontend dashboards with Next.js (App Router), TypeScript, and Tailwind CSS, reducing operator triage time across high-density vehicle tracking views.
`,
    icon: <ServerIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "procurement",
    title: "INSA Procurement Management System",
    period: {
      start: "01.2026",
    },
    link: "https://github.com/FuadTesfaye",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "systems",
    status: "National Enterprise System",
    highlight:
      "ACID-compliant procurement microservices in C#/.NET with RabbitMQ asynchronous event propagation and Next.js interfaces",
    skills: [
      "C# / .NET",
      "Next.js",
      "RabbitMQ",
      "PostgreSQL",
      "Microservices",
      "Enterprise Architecture",
    ],
    description: `Mission-critical procurement system engineered for national agency workflows ensuring strict compliance and multi-party approval chains.
- Architected and developed C# / .NET microservices with RabbitMQ for asynchronous event propagation and PostgreSQL datastore.
- Designed clean RESTful and event-driven APIs connecting Next.js clients to distributed .NET and Spring Boot services, enforcing strict data contracts and sub-100ms response targets.
`,
    icon: <ServerIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "keyshare",
    title: "Keyshare",
    period: {
      start: "2025",
    },
    link: "https://github.com/FuadTesfaye",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "systems",
    status: "Open Source CLI (MIT)",
    highlight:
      "Zero-leak secret transmission with client-side AES-256-GCM encryption, HMAC-SHA256 verification, and ephemeral TTL access codes",
    skills: [
      "Node.js",
      "CLI",
      "AES-256-GCM",
      "HMAC-SHA256",
      "Express.js",
      "MongoDB",
      "Cryptography",
    ],
    description: `Developer-first CLI for transmitting zero-leak environment variables and API keys using ephemeral, single-use access codes.
- Implemented client-side AES-256-GCM encryption with HMAC-SHA256 integrity verification; secrets never touch servers in plaintext.
- Architected lightweight backend with Express and MongoDB with automatic TTL-based expiration indices, guaranteeing zero artifact retention after retrieval.
`,
    icon: <LockIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "dagmawi-dispatch",
    title: "The Dagmawi Dispatch",
    period: {
      start: "01.2026",
    },
    link: "https://the-dagmawi-dispatch.vercel.app/",
    category: "ai",
    status: "Live AI Broadsheet",
    highlight:
      "Real-time Telegram channel intelligence platform powered by Groq AI and multi-model synthesis",
    skills: ["Next.js", "Bun", "PostgreSQL", "Groq AI", "Grammy"],
    description:
      "A universal Telegram channel intelligence and AI summarization platform with real-time indexing, multi-model LLM daily digests, @lurklord_bot integration, and avant-garde broadsheet UI.",
    icon: <CpuIcon className="size-4" />,
  },
  {
    id: "web2app",
    title: "web2app",
    period: {
      start: "2026",
    },
    link: "https://web2app-psi.vercel.app/",
    category: "systems",
    status: "Open Source Tool",
    highlight:
      "Cross-platform CLI tool compiling web applications into native Android, Windows, and Linux binaries",
    skills: ["TypeScript", "CLI", "WebView2", "Kotlin", "npm"],
    description:
      "Zero-bloat CLI tool to compile Next.js, React, Vue, Python, or live web URLs into native installable desktop and mobile apps for Android, Windows, Debian, and Arch Linux.",
    icon: <CodeXmlIcon className="size-4" />,
  },
  {
    id: "biomatch",
    title: "BioMatch",
    period: {
      start: "2025",
    },
    link: "https://bio-match-six.vercel.app/",
    category: "ai",
    status: "Clinical AI Engine",
    highlight:
      "HIPAA-compliant multi-organ compatibility and transplant matching engine validated for medical workflows",
    skills: ["React", "AI/ML", "Transplant Matching", "HIPAA"],
    description:
      "Advanced multi-organ AI matching platform for organ transplant compatibility. HIPAA-compliant, clinically validated, and trusted by medical professionals.",
    icon: <ShieldCheckIcon className="size-4" />,
  },
  {
    id: "safehire",
    title: "SafeHire Ethiopia",
    period: {
      start: "2025",
    },
    link: "https://labour-link-six.vercel.app/",
    category: "platforms",
    status: "National Verification",
    highlight:
      "Employment platform connecting Ethiopian workers with verified employers via national Fayda digital ID",
    skills: ["Next.js", "Fayda ID", "Digital Contracts", "Auth"],
    description:
      "Connecting Ethiopian workers with employers through digital contracts and Fayda ID verification. A secure, modern employment platform for the Ethiopian market.",
    icon: <ShieldCheckIcon className="size-4" />,
  },
  {
    id: "portfolio",
    title: "Modern Developer Portfolio",
    period: {
      start: "2024",
    },
    link: "https://www.fuadtesfaye.me/",
    githubUrl: "https://github.com/FuadTesfaye/fuadtesfaye.me",
    category: "platforms",
    status: "Production Portfolio",
    highlight:
      "Interactive architectural portfolio engineered with Next.js 16, Islamic geometry, and GSAP micro-interactions",
    skills: [
      "React 19",
      "Next.js 16",
      "GSAP",
      "Three.js",
      "Tailwind CSS v4",
      "TypeScript",
    ],
    description:
      "A high-performance portfolio with interactive GSAP animations, particle effects, and rich 3D elements focused on premium UI/UX.",
    icon: <CodeXmlIcon className="size-4" />,
  },
  {
    id: "agentavis",
    title: "AgentAvis Insights",
    period: {
      start: "2025",
    },
    link: "https://agentavis-insights.vercel.app/",
    category: "ai",
    status: "Autonomous Analytics",
    highlight:
      "Autonomous intelligence dashboard with real-time multi-agent business telemetry and actionable synthesis",
    skills: ["Next.js", "AI Agents", "Analytics", "TypeScript"],
    description:
      "An AI-driven insights and analytics dashboard providing real-time intelligence and actionable business recommendations.",
    icon: <CpuIcon className="size-4" />,
  },
  {
    id: "compute",
    title: "COMPUTE",
    period: {
      start: "2025",
    },
    link: "https://ai-agents-ui-omega.vercel.app/",
    category: "ai",
    status: "Distributed Runtime",
    highlight:
      "Multi-model autonomous AI agent deployment runtime orchestrated across global edge infrastructure",
    skills: ["TypeScript", "AI SDK", "Distributed Computing", "Multi-Model"],
    description:
      "Deploy autonomous AI agents that execute complex tasks across distributed infrastructure. Features multi-model support, secure sandboxing, and global edge deployment.",
    icon: <ServerIcon className="size-4" />,
  },
  {
    id: "sada-al-qawafi",
    title: "Sada Al-Qawafi",
    period: {
      start: "2025",
    },
    link: "https://sada-al-qawafi.vercel.app/",
    category: "platforms",
    status: "Arabic NLP Platform",
    highlight:
      "Arabic classical poetry and rhyme analysis suite featuring Arabic phonetic processing and metric exploration",
    skills: ["React", "Arabic NLP", "UI/UX", "Vite"],
    description:
      "A beautifully crafted Arabic literary platform for poetry and rhyme exploration, featuring elegant typography and cultural design language.",
    icon: <GlobeIcon className="size-4" />,
  },
  {
    id: "sovereign",
    title: "Sovereign OS",
    period: {
      start: "2025",
    },
    link: "https://sovereign-v3.vercel.app/",
    category: "platforms",
    status: "Interactive WebGL OS",
    highlight:
      "Terminal-driven cyberpunk operating system simulation with custom WebGL shaders and command runtime",
    skills: ["React", "TypeScript", "WebGL", "System UI"],
    description:
      "A futuristic operating system interface simulation featuring terminal-driven interactions, immersive boot sequences, and cyberpunk-inspired design aesthetics.",
    icon: <TerminalSquareIcon className="size-4" />,
  },
]
