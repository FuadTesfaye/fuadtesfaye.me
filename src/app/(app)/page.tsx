// import { Suspense } from "react"
import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import { CARBON_ADS } from "@/config/ads"
import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl, cn } from "@/lib/utils"
import { ArabicStar } from "@/components/arabic-star"
import { FloatingCarbonAds } from "@/components/floating-carbon-ads"
// import { Blocks } from "@/features/portfolio/components/blocks"
// import { Blog } from "@/features/portfolio/components/blog"
// import { Components } from "@/features/portfolio/components/components"
import { Education } from "@/features/portfolio/components/education"
import { Experiences } from "@/features/portfolio/components/experiences"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Hello } from "@/features/portfolio/components/hello"
// import {
//   Insights,
//   InsightsSkeleton,
// } from "@/features/portfolio/components/insights"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
// import { Recognition } from "@/features/portfolio/components/recognition"
import { SocialLinks } from "@/features/portfolio/components/social-links"
// import { Sponsors } from "@/features/portfolio/components/sponsors"
// import { SponsorsCarousel } from "@/features/portfolio/components/sponsors-carousel"
import { TechStack } from "@/features/portfolio/components/tech-stack"
// import { Testimonials } from "@/features/portfolio/components/testimonials"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={getProfilePageJsonLd()} />
      {CARBON_ADS && <FloatingCarbonAds />}

      <div className="[--separator-height:--spacing(10)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
        <div className="mx-auto md:max-w-4xl">
          <ProfileHeader />
          <Separator pattern="girih" arabic="فُؤَيْد" latin="DOSSIER" />

          <SocialLinks />
          <Overview />
          <GitHubContributions />
          <Separator pattern="kufic" arabic="إتقان" latin="CADENCE" />

          <Hello />
          {/* <SponsorsCarousel /> */}
          {/* <Testimonials /> */}
          <Separator pattern="mashrabiya" arabic="فلسفة" latin="PHILOSOPHY" />

          {/* <Components /> */}
          {/* <Separator /> */}

          {/* <Blocks /> */}
          {/* <Separator /> */}

          {/* <Blog /> */}
          {/* <Separator /> */}

          <TechStack />
          <Separator pattern="shamsa" arabic="كفاءة" latin="ARSENAL" />

          <Experiences />
          <Separator pattern="muqarnas" arabic="مسيرة" latin="CHRONOLOGY" />

          <Education />
          <Separator pattern="zellij" arabic="معارف" latin="ACADEMIA" />

          <Projects />
          <Separator pattern="arabesque" arabic="إنجاز" latin="WORKS" />

          {/* <Recognition /> */}
          {/* <Separator /> */}

          {/* <Suspense fallback={<InsightsSkeleton />}>
            <Insights />
          </Suspense> */}
          {/* <Separator /> */}

          {/* <Sponsors /> */}
        </div>
      </div>
    </>
  )
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/"),
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    // Reference the Person defined in the WebSite node (rendered globally in
    // the root layout) so both blocks resolve to the same entity.
    mainEntity: { "@id": JSON_LD_ID.person },
  }
}

type SeparatorPattern =
  | "girih"
  | "kufic"
  | "mashrabiya"
  | "shamsa"
  | "muqarnas"
  | "zellij"
  | "arabesque"
  | "frieze"

type SeparatorProps = {
  className?: string
  arabic?: string
  latin?: string
  pattern?: SeparatorPattern
}

const PATTERN_CLASS_MAP: Record<SeparatorPattern, string> = {
  girih: "stripe-divider-girih",
  kufic: "stripe-divider-kufic",
  mashrabiya: "stripe-divider-mashrabiya",
  shamsa: "stripe-divider-shamsa",
  muqarnas: "stripe-divider-muqarnas",
  zellij: "stripe-divider-zellij",
  arabesque: "stripe-divider-arabesque",
  frieze: "stripe-divider-frieze",
}

function Separator({
  className,
  arabic,
  latin,
  pattern = "girih",
}: SeparatorProps) {
  const patternClass = PATTERN_CLASS_MAP[pattern] ?? "stripe-divider"

  return (
    <div
      className={cn(
        patternClass,
        "relative flex h-(--separator-height) w-full items-center justify-center border-x border-line",
        className
      )}
    >
      {/* Precision corner crosshair datum marks */}
      <div
        className="pointer-events-none absolute -top-1.5 -left-1.5 z-2 flex size-3 items-center justify-center font-mono text-[9px] text-muted-foreground/45 select-none"
        aria-hidden
      >
        +
      </div>
      <div
        className="pointer-events-none absolute -top-1.5 -right-1.5 z-2 flex size-3 items-center justify-center font-mono text-[9px] text-muted-foreground/45 select-none"
        aria-hidden
      >
        +
      </div>

      {/* Architectural center seal / medallion */}
      {arabic && (
        <div className="z-1 flex items-center gap-2 border border-line bg-background/95 px-3 py-0.5 shadow-2xs backdrop-blur-xs select-none">
          <ArabicStar className="size-3 text-muted-foreground/80" />
          <span className="font-arabic text-xs font-bold tracking-normal text-foreground/90">
            {arabic}
          </span>
          {latin && (
            <>
              <span className="text-[10px] text-muted-foreground/40">•</span>
              <span className="font-mono text-[9px] font-medium tracking-widest text-muted-foreground uppercase">
                {latin}
              </span>
            </>
          )}
          <ArabicStar className="size-3 text-muted-foreground/50" />
        </div>
      )}
    </div>
  )
}
