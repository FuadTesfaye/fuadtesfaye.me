import {
  CodeXmlIcon,
  CpuIcon,
  GlobeIcon,
  LockIcon,
  ServerIcon,
  ShieldCheckIcon,
  TerminalSquareIcon,
} from "lucide-react"

import { ChanhDaiMark } from "@/components/chanhdai-mark"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "procurement",
    title: "Procurement Management System",
    period: {
      start: "01.2026",
    },
    link: "https://github.com/FuadTesfaye",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "systems",
    status: "Enterprise System",
    highlight:
      "ASP.NET Core microservices with asynchronous RabbitMQ event bus and audited PostgreSQL datastore",
    skills: [
      "ASP.NET Core",
      "Next.js",
      "RabbitMQ",
      "PostgreSQL",
      "Microservices",
      "Enterprise Architecture",
    ],
    description: `An enterprise-grade microservices platform engineered for securing and automating large-scale procurement workflows.
- Scalable microservices backend built on ASP.NET Core with asynchronous messaging via RabbitMQ
- Modern Next.js frontend with clean architecture and role-based access control
- Secure database interaction and audit logging with PostgreSQL
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
    status: "Open Source CLI",
    highlight:
      "Client-side AES-256 encrypted secret transmission with ephemeral single-use generation tokens",
    skills: ["Node.js", "CLI", "AES-256", "Security", "Cryptography"],
    description: `A secure CLI for sharing internal secrets using short-lived, one-time generation codes.
- Zero-leak secret transmission with client-side AES-256 encryption
- Ephemeral single-use tokens with automated expiration
- Developer-friendly terminal workflow published for multi-platform environments
`,
    icon: <LockIcon className="size-4" />,
    isExpanded: true,
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
    skills: ["React", "GSAP", "Three.js", "Tailwind CSS", "TypeScript"],
    description:
      "A high-performance portfolio with interactive GSAP animations, particle effects, and rich 3D elements focused on premium UI/UX.",
    icon: <ChanhDaiMark className="size-4" />,
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
    id: "aiqa",
    title: "AIQA Orchestrator",
    period: {
      start: "2026",
    },
    link: "https://github.com/FuadTesfaye/AiQa",
    githubUrl: "https://github.com/FuadTesfaye/AiQa",
    category: "ai",
    status: "Autonomous Runtime",
    highlight:
      "Evidence-first autonomous QA orchestrator integrating Playwright MCP with ISO 29119-4 standards",
    skills: ["TypeScript", "Node.js", "Playwright MCP", "ISO 29119-4"],
    description:
      "An evidence-first autonomous QA runtime and multi-engine orchestrator that composes Playwright MCP, agentic web exploration, and ISO 29119-4 test planning into a unified CLI.",
    icon: <TerminalSquareIcon className="size-4" />,
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
    id: "algowars",
    title: "AlgoWars",
    period: {
      start: "2026",
    },
    link: "https://v0-algo-wars-3004.vercel.app/",
    category: "systems",
    status: "Live Simulation Game",
    highlight:
      "Server-authoritative deterministic strategy game with sandboxed algorithm execution",
    skills: ["JavaScript", "Game Engine", "Server-Authoritative", "Automation"],
    description:
      "A server-authoritative tactical strategy game where logic is law. Script unit behaviors, deploy algorithms to a secure sandbox, and outsmart opponents in real-time deterministic simulations.",
    icon: <TerminalSquareIcon className="size-4" />,
  },
  {
    id: "aria",
    title: "Aria",
    period: {
      start: "2026",
    },
    link: "https://aria-main-98cdc8.free.laravel.cloud/",
    category: "ai",
    status: "AI Cloud Platform",
    highlight:
      "Intelligent automation and dynamic content synthesis engine built on high-performance Laravel cloud",
    skills: ["Laravel", "PHP", "AI", "Cloud"],
    description:
      "An intelligent AI-powered platform built on Laravel infrastructure, delivering smart automation and dynamic content experiences.",
    icon: <GlobeIcon className="size-4" />,
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
    skills: ["React", "AI/ML", "DNA Analysis", "HIPAA"],
    description:
      "Advanced multi-organ AI matching platform for organ transplant compatibility. HIPAA-compliant, clinically validated, and trusted by medical professionals.",
    icon: <ShieldCheckIcon className="size-4" />,
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
