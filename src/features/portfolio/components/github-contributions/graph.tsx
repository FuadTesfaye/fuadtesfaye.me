"use client"

import { use, useEffect, useState } from "react"
import { formatNumber } from "@/utils/format"
import { format, parseISO } from "date-fns"
import { LoaderIcon } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Activity } from "@/registry/components/contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/registry/components/contribution-graph"
import fallbackContributions from "@/features/portfolio/data/github-contributions-fallback.json"
import { SOCIAL } from "@/features/portfolio/data/social-links"

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>
}) {
  const initialData = use(contributions)
  const [data, setData] = useState<Activity[]>(() => {
    if (initialData && initialData.length > 0) {
      return initialData
    }
    return fallbackContributions as Activity[]
  })

  useEffect(() => {
    if (!initialData || initialData.length === 0) {
      const apiUrl =
        process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL ||
        "https://github-contributions-api.jogruber.de/v4"

      fetch(`${apiUrl}/${SOCIAL.github.handle}?y=last`)
        .then((res) => {
          if (!res.ok) throw new Error("Fetch failed")
          return res.json() as Promise<{ contributions?: Activity[] }>
        })
        .then((json) => {
          if (json?.contributions && json.contributions.length > 0) {
            setData(json.contributions)
          }
        })
        .catch(() => {
          // Fallback already rendered
        })
    }
  }, [initialData])

  if (data.length === 0) {
    return null
  }

  return (
    <figure>
      <ContributionGraph
        className="mx-auto gap-4 py-4"
        data={data}
        blockSize={12}
        blockMargin={2}
        blockRadius={0}
        aria-label="GitHub Contributions Graph"
      >
        <ContributionGraphCalendar
          className="px-4 **:data-[slot=month-labels]:text-muted-foreground"
          title="GitHub Contributions"
          aria-hidden
        >
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger
                render={
                  <g>
                    <ContributionGraphBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  </g>
                }
              />
              <TooltipContent className="font-sans">
                <p>
                  {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                  on {format(parseISO(activity.date), "d MMM yyyy")}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-4 text-sm">
          <ContributionGraphTotalCount>
            {({ totalCount }) => (
              <figcaption className="text-pretty tabular-nums">
                <span className="mr-2 tracking-wide text-muted-foreground/80">
                  Fig. 2.
                </span>
                {formatNumber(totalCount)} contributions,{" "}
                {format(parseISO(data[0].date), "d MMM yyyy")} –{" "}
                {format(parseISO(data[data.length - 1].date), "d MMM yyyy")}.
                Source:{" "}
                <a
                  href={SOCIAL.github.href}
                  className="link-underline"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
                .
              </figcaption>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend aria-hidden />
        </ContributionGraphFooter>
      </ContributionGraph>
    </figure>
  )
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-45 w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  )
}
