import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "epsu",
    school: "Ethiopian Public Service University",
    degree: "Software Engineer Student",
    fieldOfStudy: "Software Engineering",
    period: {
      start: "2022",
    },
    description: `- Building foundational engineering knowledge essential for real-world software development.
- Engaging in structured coursework emphasizing web systems, algorithms, and application architecture.`,
    skills: [
      "Software Engineering",
      "Web Systems",
      "Algorithms",
      "Application Architecture",
      "Data Structures",
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
    description: `- Completed a competitive summer program focused entirely on cybersecurity and coding.
- Refined hands-on skills executing complex security tools, networking protocols, and modern digital technologies.`,
    skills: [
      "Cybersecurity",
      "Networking Protocols",
      "Security Tools",
      "Coding",
      "Information Security",
    ],
  },
]
