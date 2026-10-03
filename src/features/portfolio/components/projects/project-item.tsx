"use client"

import { addQueryParams } from "@/utils/url"
import { ArrowUpRightIcon, BoxIcon, InfinityIcon, LinkIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { metalClickSound } from "@/lib/soundcn/metal-click"
import { cn } from "@/lib/utils"
import { useSound } from "@/hooks/soundcn/use-sound"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/collapsible-animated"
import { GitHubIcon } from "@/components/icons"
import { Markdown } from "@/components/markdown"

import type { Project } from "../../types/projects"

const CATEGORY_NAMES = {
  ai: "AI & Autonomous",
  systems: "Systems & Security",
  platforms: "Platforms & Web",
} as const

function getStatusDotColor(status?: string) {
  if (!status) return "bg-muted-foreground"
  const s = status.toLowerCase()
  if (s.includes("live") || s.includes("production")) return "bg-emerald-500"
  if (
    s.includes("ai") ||
    s.includes("clinical") ||
    s.includes("nlp") ||
    s.includes("autonomous")
  )
    return "bg-sky-500 dark:bg-sky-400"
  if (s.includes("enterprise") || s.includes("national")) return "bg-amber-500"
  return "bg-zinc-400 dark:bg-zinc-500"
}

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const [playClick] = useSound(metalClickSound)
  const { start, end } = project.period
  const isOngoing = !end
  const isSinglePeriod = end === start
  const dotColor = getStatusDotColor(project.status)
  const categoryLabel = project.category
    ? CATEGORY_NAMES[project.category]
    : null

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      {/* Only the title is the trigger (accordion pattern); its overlay keeps
          the whole row clickable, while the project link sits above it. */}
      <div className="relative flex items-center transition-colors hover:bg-accent-muted">
        <IconTile className="mx-2.5 shrink-0 sm:mx-4">
          {project.icon ?? <BoxIcon />}
        </IconTile>

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-3 sm:p-4">
          <div className="min-w-0 flex-1 pr-2">
            <div className="mb-1 flex flex-wrap items-baseline gap-2">
              <h3 className="text-base/snug font-medium text-balance sm:text-[17px]/snug">
                <CollapsibleTrigger
                  className="cursor-pointer text-left"
                  onClick={() => playClick()}
                >
                  <span className="absolute inset-0" aria-hidden />
                  {project.title}
                </CollapsibleTrigger>
              </h3>

              {project.status && (
                <span className="py-0.2 inline-flex items-center gap-1 rounded-sm border border-line bg-muted/40 px-1.5 font-mono text-[9px] tracking-wide text-foreground/80 sm:text-[10px]">
                  <span
                    className={cn(
                      "size-1.5 animate-pulse rounded-full",
                      dotColor
                    )}
                    aria-hidden
                  />
                  {project.status}
                </span>
              )}
            </div>

            <dl className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-xs text-muted-foreground sm:text-[13px]">
              <dt className="sr-only">Period</dt>
              <dd className="flex items-center gap-0.5">
                <span>{start}</span>
                {!isSinglePeriod && (
                  <>
                    <span>—</span>
                    {isOngoing ? (
                      <InfinityIcon
                        className="size-3.5 translate-y-[0.5px]"
                        aria-label="Present"
                      />
                    ) : (
                      <span>{end}</span>
                    )}
                  </>
                )}
              </dd>

              {categoryLabel && (
                <>
                  <span className="text-muted-foreground/40">•</span>
                  <dd className="text-muted-foreground/80">{categoryLabel}</dd>
                </>
              )}
            </dl>
          </div>

          <Tooltip>
            <TooltipTrigger
              render={
                <a
                  className="relative flex size-7 shrink-0 items-center justify-center text-muted-foreground transition-colors after:absolute after:-inset-2 hover:text-foreground"
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener"
                  aria-label="Open project"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                </a>
              }
            />
            <TooltipContent>
              <p>Open project</p>
            </TooltipContent>
          </Tooltip>

          <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon duration={0.15} />
          </div>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line bg-card/20 p-4 sm:p-5">
          {project.highlight && (
            <p className="border-l-2 border-foreground/30 pl-3 font-mono text-xs/relaxed text-foreground/90 sm:text-[13px]">
              {project.highlight}
            </p>
          )}

          {project.description && (
            <div className="typeset typeset-description text-sm/relaxed text-muted-foreground">
              <Markdown>{project.description}</Markdown>
            </div>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag className="font-mono text-[11px]">{skill}</Tag>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap items-center gap-4 border-t border-dashed border-line pt-2 font-mono text-xs">
            <a
              href={addQueryParams(project.link, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 font-medium text-foreground hover:underline"
            >
              <span>Launch</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>

            {project.githubUrl && (
              <a
                href={addQueryParams(project.githubUrl, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <GitHubIcon className="size-3.5" />
                <span>Repository</span>
              </a>
            )}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
