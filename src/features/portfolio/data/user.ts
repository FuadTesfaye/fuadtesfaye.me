import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Fuad",
  lastName: "Tesfaye",
  displayName: "Fuad Tesfaye",
  username: "FuadTesfaye",
  gender: "male",
  pronouns: "he/him",
  bio: "Full-Stack Software Engineer Building Modern Web Products",
  flipSentences: [
    "Full-Stack Software Engineer Building Modern Web Products.",
    "Specializing in MERN, Next.js, and Clean Architecture.",
    "Chief Technology Officer at Zion Software Agency.",
    "Open to opportunities — Addis Ababa, Ethiopia.",
  ],
  address: "Addis Ababa, Ethiopia",
  phoneNumberB64: "KzI1MTk0MDE2NTUwMw==", // +251940165503 base64 encoded
  emailB64: "ZnVhZHRlc2ZheWVAZ21haWwuY29t", // fuadtesfaye@gmail.com base64 encoded
  website: "https://www.fuadtesfaye.me",
  jobTitle: "Full-Stack Software Engineer & AI Automation Developer",
  jobs: [
    {
      title: "Chief Technology Officer",
      company: "Zion Software Agency",
      website: "https://www.fuadtesfaye.me",
      experienceId: "zion",
    },
    {
      title: "Full-Stack Developer",
      company: "Fusion IT Consultancy",
      website: "https://www.fuadtesfaye.me",
      experienceId: "fusion-it",
    },
  ],
  about: `- Dedicated Full-Stack Software Engineer with over 3 years of experience specializing in the MERN stack, Next.js, and enterprise-grade backend architecture.
- Diverse skill set ranging from UI/UX precision and front-end polish using GSAP and Three.js, to scalable backend systems using Node.js and ASP.NET Core, delivering high-quality, full-scale web applications.
- Maintaining a track record of 10+ completed projects with a 100% client satisfaction rate.
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
    "full-stack software engineer",
    "ai automation developer",
    "mern stack",
    "next.js",
    "clean architecture",
    "addis ababa",
    "ethiopia",
  ],
  dateCreated: "2024-01-01", // YYYY-MM-DD
}
