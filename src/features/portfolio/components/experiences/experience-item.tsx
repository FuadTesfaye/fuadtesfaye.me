import Image from "next/image"
import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"

import type { Experience } from "../../types/experiences"
import { ExperiencePositionItem } from "./experience-position-item"

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div
      id={`experience-${experience.id}`}
      className="group/experience screen-line-bottom scroll-mt-14 space-y-4 py-4"
    >
      <div className="flex items-start gap-3 sm:items-center">
        <div className="flex size-6 shrink-0 items-center justify-center select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-5">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={`${experience.companyName} logo`}
              width={24}
              height={24}
              quality={100}
              className="rounded-full grayscale transition-[filter] duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover/experience:grayscale-0"
              unoptimized
              aria-hidden
            />
          ) : (
            (experience.companyIcon ?? (
              <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            ))
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-x-3 gap-y-1 pr-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-xl/6 font-medium sm:text-2xl/7">
            {experience.companyWebsite ? (
              <a
                className="link"
                href={addQueryParams(experience.companyWebsite, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
              >
                {experience.companyName}
              </a>
            ) : (
              experience.companyName
            )}
          </h3>

          {experience.location && experience.locationType && (
            <dl className="flex min-w-0 items-center gap-1.5 text-sm whitespace-nowrap text-muted-foreground sm:text-[15px]">
              <dt className="sr-only">Location</dt>
              <dd className="truncate">{experience.location}</dd>

              <dt className="sr-only">Location type</dt>
              <dd>({experience.locationType})</dd>

              {experience.isCurrentEmployer && (
                <>
                  <dt className="sr-only">Employment status</dt>
                  <dd className="py-0.2 ml-1 inline-flex items-center rounded-sm border border-line bg-muted/40 px-1 font-mono text-[9px] font-medium tracking-widest text-muted-foreground uppercase">
                    CURRENT
                  </dd>
                </>
              )}
            </dl>
          )}
        </div>
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}
