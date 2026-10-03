import { MapPinIcon } from "lucide-react"

import { ArabicStar } from "@/components/arabic-star"
import { USER } from "@/features/portfolio/data/user"

import { Panel, PanelContent } from "../panel"
import { CurrentLocalTimeItem } from "./current-local-time-item"
import { EmailItem } from "./email-item"
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"
import { JobItem } from "./job-item"
import { PhoneItem } from "./phone-item"

export function Overview() {
  return (
    <Panel
      id="contact"
      className="screen-line-bottom-none screen-line-top-none"
    >
      <div className="flex items-center justify-between border-b border-line bg-muted/20 px-4 py-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:text-[11px]">
        <span>SECTION // 01</span>
        <span className="flex items-center gap-1.5">
          <ArabicStar className="size-3 text-muted-foreground/60" />
          <span className="font-arabic text-xs font-bold text-foreground/80">
            مُعطَيات
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span>DOSSIER SPECIFICATION</span>
        </span>
        <span>CHANNELS // VERIFIED</span>
      </div>

      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
              experienceId={job.experienceId}
            />
          )
        })}

        <IntroItem>
          <IntroItemIcon>
            <MapPinIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
              aria-label={`Location: ${USER.address}`}
            >
              {USER.address}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <CurrentLocalTimeItem timeZone={USER.timeZone} />

        <EmailItem emailB64={USER.emailB64} />

        <PhoneItem phoneNumberB64={USER.phoneNumberB64} />

        {/* <IntroItem>
          <IntroItemIcon>
            <LinkIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={USER.website}
              aria-label={`Personal website: ${urlToName(USER.website)}`}
            >
              {urlToName(USER.website)}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem> */}

        {/* <IntroItem>
          <IntroItemIcon>{getGenderIcon(USER.gender)}</IntroItemIcon>
          <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
            {USER.pronouns}
          </IntroItemContent>
        </IntroItem> */}
      </PanelContent>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-px -translate-x-2.25 border-r border-dashed border-line max-sm:hidden" />
    </Panel>
  )
}

// function getGenderIcon(gender: User["gender"]) {
//   switch (gender) {
//     case "male":
//       return <MarsIcon />
//     case "female":
//       return <VenusIcon />
//     case "non-binary":
//       return <NonBinaryIcon />
//   }
// }
