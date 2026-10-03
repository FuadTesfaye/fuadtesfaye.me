import type { Metadata } from "next"

import { X_HANDLE } from "@/config/site"
import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { Projects } from "@/features/portfolio/components/projects"

const title = "Projects"
const description =
  "Enterprise platforms, autonomous agent runtimes, cryptographic tools, and open-source systems."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

export default function ProjectsPage() {
  return (
    <>
      <JsonLdScript
        data={jsonLdBreadcrumbList([
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Projects",
            href: "/projects",
          },
        ])}
      />

      <div className="min-h-svh">
        <PageHeading>
          <PageHeadingTagline>Projects</PageHeadingTagline>
          <PageHeadingTitle>
            Engineered systems, autonomous runtimes, and open-source software.
          </PageHeadingTitle>
        </PageHeading>

        <div className="h-4" />

        {/* Overview metric ledger strip */}
        <div className="screen-line-top screen-line-bottom grid grid-cols-2 gap-px border-b border-line bg-line font-mono text-xs sm:grid-cols-4">
          <div className="bg-background px-4 py-3">
            <span className="text-[11px] text-muted-foreground uppercase">
              Total Works
            </span>
            <p className="mt-1 text-base font-semibold text-foreground">
              14 Systems
            </p>
          </div>
          <div className="bg-background px-4 py-3">
            <span className="text-[11px] text-muted-foreground uppercase">
              AI & Agents
            </span>
            <p className="mt-1 text-base font-semibold text-foreground">
              6 Engines
            </p>
          </div>
          <div className="bg-background px-4 py-3">
            <span className="text-[11px] text-muted-foreground uppercase">
              Systems & CLI
            </span>
            <p className="mt-1 text-base font-semibold text-foreground">
              4 Runtimes
            </p>
          </div>
          <div className="bg-background px-4 py-3">
            <span className="text-[11px] text-muted-foreground uppercase">
              Platforms
            </span>
            <p className="mt-1 text-base font-semibold text-foreground">
              4 Deployed
            </p>
          </div>
        </div>

        <div className="h-4" />

        <Projects isStandalone />

        <div className="h-6" />
      </div>
    </>
  )
}
