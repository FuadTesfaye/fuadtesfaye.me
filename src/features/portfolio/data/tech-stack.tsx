import {
  GitHubIcon,
  JsIcon,
  OpenAIIcon,
  TsIcon,
  VercelIcon,
} from "@/components/icons"

import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // --- Frontend ---
  {
    key: "react",
    title: "React",
    href: "https://react.dev",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Frontend"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Frontend"],
  },
  {
    key: "vite",
    title: "Vite",
    href: "https://vitejs.dev",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M23.018 3.535 12.593 23.774a.82.82 0 0 1-1.186 0L.982 3.535a.82.82 0 0 1 .715-1.186h5.75L12 11.238l4.553-8.889h5.75a.82.82 0 0 1 .715 1.186Z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Frontend"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: <TsIcon />,
    categories: ["Frontend"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <JsIcon />,
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Frontend"],
  },
  {
    key: "gsap",
    title: "GSAP",
    href: "https://gsap.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm3.75 16.5h-7.5v-2.25h7.5v2.25Zm0-4.5h-7.5V9.75h7.5V12Zm0-4.5h-7.5V5.25h7.5V7.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Frontend"],
  },
  {
    key: "threejs",
    title: "Three.js",
    href: "https://threejs.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 1.63L2.25 7.26v11.26L12 24.15l9.75-5.63V7.26L12 1.63zm0 2.31l7.75 4.47-7.75 4.48-7.75-4.48L12 3.94zm-8.25 5.34l7.25 4.19v8.38l-7.25-4.19V9.28zm9.25 12.57v-8.38l7.25-4.19v8.38l-7.25 4.19z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Frontend"],
  },

  // --- Backend ---
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "express",
    title: "Express.js",
    href: "https://expressjs.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2zm0-7h-2V7h2z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "laravel",
    title: "Laravel",
    href: "https://laravel.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M8.826 3.024 1.98 6.974a.8.8 0 0 0-.404.693v9.066a.8.8 0 0 0 .404.693l6.846 3.95a.8.8 0 0 0 .8 0l6.846-3.95a.8.8 0 0 0 .404-.693V7.667a.8.8 0 0 0-.404-.693L9.626 3.024a.8.8 0 0 0-.8 0Z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "aspnetcore",
    title: "ASP.NET Core",
    href: "https://dotnet.microsoft.com/apps/aspnet",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M24 10.667v2.666h-5.333V24H16V13.333H8V24H5.333V0H8v10.667h8V0h2.667v10.667z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "springboot",
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0Zm5.44 14.67a6.24 6.24 0 0 1-5.18 5.43 6.3 6.3 0 0 1-6.8-5.39 6.27 6.27 0 0 1 5.37-6.83c.43-.05.86-.05 1.28 0a6.26 6.26 0 0 1 5.33 6.79Z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "microservices",
    title: "Microservices",
    href: "https://microservices.io",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M4 2h4v4H4V2zm12 0h4v4h-4V2zm-6 8h4v4h-4v-4zm-6 8h4v4H4v-4zm12 0h4v4h-4v-4zm-5-9h2v2h-2v-2zm-5-3h2v2H7V6zm8 0h2v2h-2V6zm-8 8h2v2H7v-2zm8 0h2v2h-2v-2z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },
  {
    key: "rest-api",
    title: "RESTful API Design",
    href: "https://restfulapi.net",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Backend"],
  },

  // --- Tools & Cloud ---
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Tools & Cloud"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/FuadTesfaye",
    icon: <GitHubIcon />,
    categories: ["Tools & Cloud"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Tools & Cloud"],
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M6.545 13.921c-.426-.299-.68-.78-.68-1.284V7.5a1.5 1.5 0 0 1 3 0v4.137c0 .193.078.378.216.513l2.42 2.373a1.5 1.5 0 0 1-2.1 2.14l-2.856-2.742z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Tools & Cloud"],
  },
  {
    key: "gcp",
    title: "Google Cloud",
    href: "https://cloud.google.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Tools & Cloud"],
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com",
    icon: <VercelIcon />,
    categories: ["Tools & Cloud"],
  },
  {
    key: "vscode",
    title: "VS Code",
    href: "https://code.visualstudio.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479l1.321 1.202c.38.346.953.37 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Tools & Cloud"],
  },
  {
    key: "cursor",
    title: "Cursor",
    href: "https://cursor.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Tools & Cloud"],
  },

  // --- AI Integration ---
  {
    key: "openai",
    title: "OpenAI API",
    href: "https://openai.com",
    icon: <OpenAIIcon />,
    categories: ["AI Integration"],
  },
  {
    key: "groq",
    title: "Groq",
    href: "https://groq.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["AI Integration"],
  },
  {
    key: "huggingface",
    title: "Hugging Face",
    href: "https://huggingface.co",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-3.5 7.5a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm7 0a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["AI Integration"],
  },
  {
    key: "openrouter",
    title: "OpenRouter",
    href: "https://openrouter.ai",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    categories: ["AI Integration"],
  },
  {
    key: "llm-integration",
    title: "LLM Integration",
    href: "https://www.fuadtesfaye.me",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1.27c.34-.6.99-1 1.73-1a2 2 0 1 1 0 4c-.74 0-1.39-.4-1.73-1H21a7 7 0 0 1-7 7v1.27c.6.34 1 .99 1 1.73a2 2 0 1 1-4 0c0-.74.4-1.39 1-1.73V21H11a7 7 0 0 1-7-7H2.73c-.34.6-.99 1-1.73 1a2 2 0 1 1 0-4c.74 0 1.39.4 1.73 1H4a7 7 0 0 1 7-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["AI Integration"],
  },
  {
    key: "prompt-engineering",
    title: "Prompt Engineering",
    href: "https://www.fuadtesfaye.me",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="m7 8 5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6L7 8z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["AI Integration"],
  },
  {
    key: "automation",
    title: "Automation",
    href: "https://www.fuadtesfaye.me",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54A.484.484 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.63 8.5c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["AI Integration"],
  },
]
