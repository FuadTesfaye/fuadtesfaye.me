import { BriefcaseBusinessIcon, CodeXmlIcon, CpuIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "zion",
    companyName: "Zion Software Agency",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    companyWebsite: "https://www.fuadtesfaye.me",
    location: "Addis Ababa, Ethiopia",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Chief Technology Officer",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Full-time",
        icon: <CpuIcon />,
        description: `- Leading technical strategy and overseeing software development lifecycle for high-impact projects.
- Managing engineering teams and architectural decisions to ensure scalable, enterprise-grade solutions.
- Driving innovation and technical excellence across the agency's product portfolio.`,
        skills: [
          "Technical Leadership",
          "System Architecture",
          "Microservices",
          "ASP.NET Core",
          "Next.js",
          "Enterprise Solutions",
          "Team Management",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "fusion-it",
    companyName: "Fusion IT Consultancy",
    companyIcon: <CodeXmlIcon strokeWidth={1.8} />,
    companyWebsite: "https://www.fuadtesfaye.me",
    location: "Addis Ababa, Ethiopia",
    locationType: "Hybrid",
    positions: [
      {
        id: "1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "08.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Developing highly scalable web applications leveraging Express.js and modern frontend frameworks.
- Focused on responsive UI implementations and clean component API designs.
- Collaborating in hybrid working environments to deliver high-quality, production-ready code.`,
        skills: [
          "Express.js",
          "React",
          "Next.js",
          "TypeScript",
          "RESTful APIs",
          "Tailwind CSS",
          "Component Architecture",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "sky-hub",
    companyName: "Sky-hub Technology Solutions",
    companyIcon: <CodeXmlIcon strokeWidth={1.8} />,
    companyWebsite: "https://www.fuadtesfaye.me",
    location: "Addis Ababa, Ethiopia",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "MERN Stack Developer",
        employmentPeriod: {
          start: "11.2023",
          end: "09.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Specialized in building and maintaining diverse client projects utilizing the MERN stack.
- Optimized database queries, overall application performance, and database interactions using MongoDB.
- Consistently delivered clean component architecture and implemented progressive enhancement strategies.`,
        skills: [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "JavaScript",
          "Database Optimization",
          "RESTful APIs",
        ],
      },
    ],
  },
]
