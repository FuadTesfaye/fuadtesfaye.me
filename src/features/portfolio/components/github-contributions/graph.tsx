"use client"

import { useEffect, useState } from "react"
import { formatNumber } from "@/utils/format"
import { format, parseISO } from "date-fns"

import { cn } from "@/lib/utils"
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
  initialData,
}: {
  initialData?: Activity[]
}) {
  const [data, setData] = useState<Activity[]>(() => {
    if (initialData && initialData.length > 0) {
      return initialData
    }
    return fallbackContributions as Activity[]
  })

  useEffect(() => {
    if (data.length > 0) return

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
  }, [data.length])

  if (!data || data.length === 0) {
    return null
  }

  return (
    <figure>
      <ContributionGraph
        className={cn(
          "mx-auto gap-4 py-4",
          '**:data-[level="0"]:fill-[#ebedf0] dark:**:data-[level="0"]:fill-[#161b22]',
          '**:data-[level="1"]:fill-[#9be9a8] dark:**:data-[level="1"]:fill-[#0e4429]',
          '**:data-[level="2"]:fill-[#40c463] dark:**:data-[level="2"]:fill-[#006d32]',
          '**:data-[level="3"]:fill-[#30a14e] dark:**:data-[level="3"]:fill-[#26a641]',
          '**:data-[level="4"]:fill-[#216e39] dark:**:data-[level="4"]:fill-[#39d353]'
        )}
        data={data}
        blockSize={12}
        blockMargin={2}
        blockRadius={2}
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
