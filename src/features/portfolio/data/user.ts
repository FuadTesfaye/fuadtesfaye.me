import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Fuad",
  lastName: "Tesfaye",
  displayName: "Fuad Tesfaye",
  username: "FuadTesfaye",
  gender: "male",
  pronouns: "he/him",
  bio: "Full-Stack AI Engineer | Backend & Cloud Systems",
  flipSentences: [
    "Full-Stack AI Engineer & Cloud Systems Architect.",
    "Winner of the Vercel v0 Global Hackathon (AlgoWars).",
    "Founding Engineer at Zion Software Agency.",
    "Building mission-critical microservices at INSA.",
    "Open to remote engineering opportunities worldwide.",
  ],
  address: "Addis Ababa, Ethiopia",
  phoneNumberB64: "KzI1MTkyNDExMzA4Ng==", // +251924113086 base64 encoded
  emailB64: "ZnVhZHRlc2ZheWUyNEBnbWFpbC5jb20=", // fuadtesfaye24@gmail.com base64 encoded
  website: "https://www.fuadtesfaye.me",
  jobTitle: "Full-Stack AI Engineer | Backend & Cloud Systems",
  jobs: [
    {
      title: "Founding Engineer",
      company: "Zion Software Agency",
      website: "https://www.fuadtesfaye.me",
      experienceId: "zion",
    },
    {
      title: "Full-Stack Developer",
      company: "INSA",
      website: "https://www.fuadtesfaye.me",
      experienceId: "insa",
    },
  ],
  about: `- Full-stack and backend engineer with 3+ years designing production-grade, distributed, and AI-native systems across microservices, event-driven architectures, and high-concurrency environments.
- Built mission-critical systems for national programs (fleet management, procurement) handling thousands of transactions.
- Winner of the Vercel v0 Global Hackathon (AlgoWars) out of 8,000+ submissions worldwide.
- Deeply skilled in Next.js, Node.js/Express, Spring Boot, C#/.NET, Python, and multi-agent AI orchestration.
- Experienced leading engineering teams, driving technical strategy, and delivering end-to-end solutions from architecture to cloud deployment.
`,
  avatar: "https://avatars.githubusercontent.com/u/155218084?v=4",
  avatarSketch: "https://avatars.githubusercontent.com/u/155218084?v=4",
  avatarVariants: {
    lightOff: "https://avatars.githubusercontent.com/u/155218084?v=4",
    lightOn: "https://avatars.githubusercontent.com/u/155218084?v=4",
    darkOff: "https://avatars.githubusercontent.com/u/155218084?v=4",
    darkOn: "https://avatars.githubusercontent.com/u/155218084?v=4",
  },
  ogImage: "https://www.fuadtesfaye.me/flogo.png",
  namePronunciationUrl: "",
  timeZone: "Africa/Addis_Ababa",
  keywords: [
    "fuad tesfaye",
    "fuad",
    "tesfaye",
    "fuadtesfaye",
    "full-stack ai engineer",
    "backend engineer",
    "cloud systems",
    "microservices",
    "spring boot",
    "asp.net core",
    "next.js",
    "algowars",
    "addis ababa",
    "ethiopia",
  ],
  dateCreated: "2024-01-01", // YYYY-MM-DD
}
