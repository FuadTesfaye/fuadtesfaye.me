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
        <div className="mx-auto md:max-w-5xl">
          <ProfileHeader />
          <Separator pattern="girih" arabic="فُؤَيْد" />

          <SocialLinks />
          <Overview />
          <Separator pattern="kufic" arabic="إتقان" />

          <Hello />
          {/* <SponsorsCarousel /> */}
          {/* <Testimonials /> */}
          <Separator pattern="mashrabiya" arabic="فلسفة" />

          {/* <Components /> */}
          {/* <Separator /> */}

          {/* <Blocks /> */}
          {/* <Separator /> */}

          {/* <Blog /> */}
          {/* <Separator /> */}

          <TechStack />
          <Separator pattern="shamsa" arabic="كفاءة" />

          <Experiences />
          <Separator pattern="muqarnas" arabic="مسيرة" />

          <Education />
          <Separator pattern="zellij" arabic="معارف" />

          <Projects />
          <Separator pattern="arabesque" arabic="إنجاز" />

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

function Separator({ className, arabic, pattern = "girih" }: SeparatorProps) {
  const patternClass = PATTERN_CLASS_MAP[pattern] ?? "stripe-divider"

  return (
    <div
      className={cn(
        patternClass,
        "relative flex h-(--separator-height) w-full items-center justify-center border-x border-line",
        className
      )}
    >
      {/* Architectural center seal / medallion */}
      {arabic && (
        <div className="z-1 flex items-center gap-2 border border-line bg-background/95 px-3.5 py-1 shadow-2xs backdrop-blur-xs select-none">
          <ArabicStar className="size-3.5 text-muted-foreground/80" />
          <span className="font-arabic text-sm font-bold tracking-normal text-foreground/90">
            {arabic}
          </span>
          <ArabicStar className="size-3.5 text-muted-foreground/50" />
        </div>
      )}
    </div>
  )
}
