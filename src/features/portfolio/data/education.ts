import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "epsu",
    school: "Ethiopian Public Service University",
    degree: "Software Engineering Coursework",
    fieldOfStudy: "Software Engineering",
    period: {
      start: "2022",
      end: "2026 (Expected)",
    },
    description: `- Rigorous coursework emphasizing distributed systems, algorithm design, data structures, and enterprise architecture.
- Hands-on practical engineering translating theoretical computer science into production web platforms.`,
    skills: [
      "Software Engineering",
      "Distributed Systems",
      "Algorithms",
      "Data Structures",
      "Application Architecture",
      "Clean Architecture",
    ],
    isExpanded: true,
  },
  {
    id: "insa",
    school: "INSA (Information Network Security Administration)",
    degree: "National Ethio Cyber Talent Summer Camp",
    fieldOfStudy: "Cybersecurity & Coding",
    period: {
      start: "07.2025",
      end: "09.2025",
    },
    description: `- Selected for a competitive national summer program focused on advanced cybersecurity protocols and low-level engineering.
- Refined hands-on skills executing complex security tooling, networking architectures, and defensive software design.`,
    skills: [
      "Cybersecurity",
      "Networking Protocols",
      "Security Audits",
      "Penetration Testing",
      "Defensive Architecture",
    ],
  },
]
