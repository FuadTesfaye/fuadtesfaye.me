"use client"

import { useMemo, useState } from "react"
import type { Route } from "next"
import Link from "next/link"
import { addQueryParams } from "@/utils/url"
import { ArrowRightIcon, ArrowUpRightIcon, BoxIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { metalClickSound } from "@/lib/soundcn/metal-click"
import { cn } from "@/lib/utils"
import { useSound } from "@/hooks/soundcn/use-sound"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/ui/tag"
import { ArabicStar } from "@/components/arabic-star"
import { GitHubIcon } from "@/components/icons"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS } from "@/features/portfolio/data/projects"
import type { ProjectCategory } from "@/features/portfolio/types/projects"

const ID = "projects"

const CATEGORIES: { id: ProjectCategory; label: string; arabic: string }[] = [
  { id: "all", label: "All Works", arabic: "الكل" },
  { id: "ai", label: "AI & Autonomous", arabic: "ذكاء" },
  { id: "systems", label: "Systems & Security", arabic: "أنظمة" },
  { id: "platforms", label: "Platforms & Web", arabic: "منصات" },
]

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

export function Projects({ isStandalone = false }: { isStandalone?: boolean }) {
  const [playClick] = useSound(metalClickSound)
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [showAll, setShowAll] = useState(isStandalone)

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS
    return PROJECTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const displayedProjects = useMemo(() => {
    if (showAll || activeCategory !== "all" || isStandalone) {
      return filteredProjects
    }
    return filteredProjects.slice(0, 6)
  }, [filteredProjects, showAll, activeCategory, isStandalone])

  const handleCategoryChange = (cat: ProjectCategory) => {
    playClick()
    setActiveCategory(cat)
  }

  return (
    <Panel id={ID}>
      {/* Panel Header */}
      <PanelHeader className="flex flex-wrap items-center justify-between gap-3">
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>

        {/* Counter badge */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <ArabicStar className="size-3 text-muted-foreground/60" />
          <span>
            SHOWING {displayedProjects.length} OF {PROJECTS.length} WORKS
          </span>
        </div>
      </PanelHeader>

      {/* Category Filter Ribbon */}
      <div className="flex scrollbar-none overflow-x-auto border-b border-line bg-muted/10 font-mono text-xs sm:text-[13px]">
        {CATEGORIES.map((cat) => {
          const count =
            cat.id === "all"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat.id).length
          const isActive = activeCategory === cat.id

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryChange(cat.id)}
              className={cn(
                "flex shrink-0 cursor-pointer items-center gap-2 border-r border-line px-4 py-3 transition-colors last:border-r-0",
                isActive
                  ? "border-b-2 border-b-foreground bg-card font-semibold text-foreground"
                  : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
              )}
            >
              <span>{cat.label}</span>
              <span className="font-arabic text-xs text-muted-foreground/70">
                ({count})
              </span>
            </button>
          )
        })}
      </div>

      {/* High-Visibility Architectural Cards Grid */}
      <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
        {displayedProjects.map((project, index) => {
          const dotColor = getStatusDotColor(project.status)

          return (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between bg-background p-5 transition-colors duration-200 hover:bg-card/70 sm:p-6"
            >
              <div className="space-y-4">
                {/* Card Header: Index, Category, Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-muted-foreground/70">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-muted-foreground uppercase">
                      {project.category
                        ? project.category.toUpperCase()
                        : "SYSTEM"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.status && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-foreground">
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
                    <span className="text-muted-foreground/60">
                      {project.period.start}
                    </span>
                  </div>
                </div>

                {/* Project Identity: Icon + Title */}
                <div className="flex items-start gap-3.5 pt-1">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-line bg-muted/30 text-foreground transition-transform duration-200 group-hover:scale-105">
                    {project.icon ?? <BoxIcon className="size-5" />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                      <a
                        href={addQueryParams(project.link, UTM_PARAMS)}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1.5 hover:underline"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRightIcon className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      </a>
                    </h3>
                  </div>
                </div>

                {/* Architectural Highlight */}
                {project.highlight && (
                  <p className="border-l-2 border-foreground/40 bg-muted/20 px-3 py-2 font-mono text-xs/relaxed text-foreground/90 sm:text-[13px]/relaxed">
                    {project.highlight}
                  </p>
                )}

                {/* Description */}
                {project.description && (
                  <p className="text-sm/relaxed text-muted-foreground sm:text-[14.5px]/relaxed">
                    {project.description
                      .replace(/^-\s+/gm, "• ")
                      .replace(/\n+/g, " ")}
                  </p>
                )}

                {/* Tech Skills Pills */}
                {project.skills.length > 0 && (
                  <div className="pt-2">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.skills.map((skill) => (
                        <li key={skill}>
                          <Tag>{skill}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-line pt-4 font-mono text-xs">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-medium transition-colors hover:bg-foreground hover:text-background"
                  nativeButton={false}
                  render={
                    <a
                      href={addQueryParams(project.link, UTM_PARAMS)}
                      target="_blank"
                      rel="noopener"
                    />
                  }
                >
                  <span>Launch System</span>
                  <ArrowUpRightIcon className="size-3.5" />
                </Button>

                {project.githubUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    nativeButton={false}
                    render={
                      <a
                        href={addQueryParams(project.githubUrl, UTM_PARAMS)}
                        target="_blank"
                        rel="noopener"
                      />
                    }
                  >
                    <GitHubIcon className="size-3.5" />
                    <span>Source Code</span>
                  </Button>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {/* Show all / Show less toggle */}
      {!isStandalone &&
        activeCategory === "all" &&
        filteredProjects.length > 6 && (
          <div className="border-t border-line bg-muted/10 p-3.5 text-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                playClick()
                setShowAll(!showAll)
              }}
              className="cursor-pointer font-mono text-xs"
            >
              {showAll
                ? "Show Less (6 projects)"
                : `Show All ${filteredProjects.length} Projects`}
            </Button>
          </div>
        )}

      {/* Section Footer */}
      <div className="flex items-center justify-between border-t border-line bg-muted/20 px-4 py-3 font-mono text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ArabicStar className="size-3.5 text-muted-foreground/70" />
          <span className="font-arabic text-sm font-bold text-foreground/85">
            إنجاز
          </span>
          <span>•</span>
          <span>
            {displayedProjects.length} OF {PROJECTS.length} WORKS DISPLAYED
          </span>
        </span>

        {!isStandalone ? (
          <Link
            href={"/projects" as Route}
            className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary hover:underline"
          >
            <span>Full Catalog</span>
            <ArrowRightIcon className="size-3.5" />
          </Link>
        ) : (
          <span className="text-muted-foreground/70">
            ARCHITECTURAL REPOSITORY
          </span>
        )}
      </div>
    </Panel>
  )
}
