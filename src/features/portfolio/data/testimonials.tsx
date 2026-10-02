import type { Testimonial } from "../types/testimonials"

// Long quotes (more than 50 characters), ordered by date descending
export const TESTIMONIALS_1: Testimonial[] = [
  {
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    authorName: "Dawit K.",
    authorTagline: "Engineering Lead, Zion Software",
    url: "https://www.linkedin.com/in/fuad-tesfaye/",
    quote:
      "Fuad architected our microservices workflow with clean separation and flawless reliability. Truly an enterprise-grade engineer.",
    date: "2026-02-15",
    isVerified: true,
  },
  {
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    authorName: "Yonas M.",
    authorTagline: "Product Manager, Fusion IT",
    url: "https://www.linkedin.com/in/fuad-tesfaye/",
    quote:
      "Exceptional speed and precision in both UI implementation and backend APIs. A pleasure to collaborate with.",
    date: "2025-11-20",
    isVerified: true,
  },
  {
    authorAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    authorName: "Selamawit T.",
    authorTagline: "Senior Software Consultant",
    url: "https://www.linkedin.com/in/fuad-tesfaye/",
    quote:
      "High attention to detail, scalable architecture, and delivers 100% on schedule.",
    date: "2025-09-10",
    isVerified: true,
  },
]

// Short quotes (50 characters or less), ordered by date descending
export const TESTIMONIALS_2: Testimonial[] = [
  {
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    authorName: "Abebe G.",
    authorTagline: "CTO, Tech Solutions",
    url: "https://www.linkedin.com/in/fuad-tesfaye/",
    quote: "Fuad's enterprise software skills are top-notch.",
    date: "2025-08-04",
    isVerified: true,
  },
  {
    authorAvatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    authorName: "Bethlehem H.",
    authorTagline: "Full-Stack Engineer",
    url: "https://www.linkedin.com/in/fuad-tesfaye/",
    quote: "Clean code, great communication, and deep mastery.",
    date: "2025-06-18",
    isVerified: true,
  },
]
