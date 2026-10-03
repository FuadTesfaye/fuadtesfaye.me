import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  CpuIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "zion",
    companyName: "Zion Software Agency",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    companyWebsite: "https://www.fuadtesfaye.me",
    location: "Addis Ababa, Ethiopia",
    locationType: "Hybrid",
    positions: [
      {
        id: "1",
        title: "Founding Engineer",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Part-time",
        icon: <CpuIcon />,
        description: `- Lead technical strategy, system architecture, and client scoping across enterprise engagements.
- Spearheaded the technical architecture proposal for Teklehaimanot General Hospital’s next-generation Health Information Management System (HIMS/EHR), designing FHIR-aligned data schemas, role-based access control (RBAC), and HL7 integration pathways.
- Mentoring and technically guiding a cohort of 30 software interns, conducting code reviews, architecture workshops, and pair-programming sessions across PERN-stack (Postgres, Express, React, Node) finance systems and the agency's Zion ERP flagship product.`,
        skills: [
          "Technical Strategy",
          "System Architecture",
          "HIMS/EHR (FHIR/HL7)",
          "Zion ERP",
          "PERN Stack",
          "PostgreSQL",
          "Express.js",
          "React",
          "Node.js",
          "Engineering Mentorship",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "insa",
    companyName: "INSA (Information Network Security Administration)",
    companyIcon: <ShieldCheckIcon strokeWidth={1.8} />,
    companyWebsite: "https://www.fuadtesfaye.me",
    location: "Addis Ababa, Ethiopia",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Full-Stack Developer (Fleet-Management & Procurement)",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Full-time",
        icon: <ServerIcon />,
        description: `- Engineered core backend services for a nationwide fleet-management platform using Spring Boot and microservices architecture, integrating Kafka for real-time telemetry streaming and PostgreSQL for persistence.
- Built high-performance, accessible frontend dashboards with Next.js (App Router), TypeScript, and Tailwind CSS, reducing operator triage time across high-density vehicle tracking views.
- Architected and developed a mission-critical procurement system for national agency workflows using C# / .NET microservices, RabbitMQ for asynchronous event propagation, and PostgreSQL, ensuring ACID compliance across multi-party approval chains.
- Designed clean RESTful and event-driven APIs connecting Next.js clients to distributed .NET and Spring Boot services, enforcing strict data contracts and sub-100ms response targets.`,
        skills: [
          "Spring Boot",
          "C# / .NET",
          "Microservices",
          "Apache Kafka",
          "RabbitMQ",
          "PostgreSQL",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Event-Driven Architecture",
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
          end: "05.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Developed and deployed a production-grade real estate and staff management CRM platform using Express.js and React, delivering real-time vacancy tracking and lease-lifecycle automation.
- Implemented role-based authentication, complex relational queries, and responsive frontends; integrated automated email dispatch pipelines, reducing client turnaround on leases by ~30%.`,
        skills: [
          "Express.js",
          "React",
          "Node.js",
          "TypeScript",
          "CRM Systems",
          "Relational Queries",
          "Authentication & RBAC",
          "Tailwind CSS",
        ],
      },
    ],
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
        title: "MERN Stack Developer (Intern → Developer)",
        employmentPeriod: {
          start: "11.2023",
          end: "09.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Promoted from intern to developer within 6 months based on contributions across 6 client projects spanning e-commerce, portfolio sites, and enterprise dashboards.
- Architected a production stock and inventory management system for a major client using Laravel (PHP), MySQL, and modern frontends; implemented FIFO valuation and low-stock alerting.
- Built full-stack features using React, Node.js, Express, and MongoDB; optimized unindexed aggregation queries, cutting response times across high-traffic inventory endpoints by 40%.`,
        skills: [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "Laravel",
          "PHP",
          "MySQL",
          "Database Optimization",
          "Inventory Systems",
        ],
      },
    ],
  },
]
