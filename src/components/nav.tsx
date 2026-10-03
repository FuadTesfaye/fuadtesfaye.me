"use client"

import React, { useEffect, useState } from "react"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"

import type { NavItem as NavItemType } from "@/types/nav"
import { cn } from "@/lib/utils"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItemType<Route>[]
  activeId?: string
  className?: string
  exactMatch?: boolean
}) {
  const pathname = usePathname()
  const [clickSound] = useClickSound()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<string>("")

  // Detect active section on homepage scroll
  useEffect(() => {
    if (pathname !== "/") return

    const sectionIds = items
      .map((item) => {
        const hashMatch = item.href.match(/#(.*)$/)
        return hashMatch ? hashMatch[1] : null
      })
      .filter(Boolean) as string[]

    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = 220

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          if (scrollY >= elementTop - offset) {
            setActiveSection(id)
            return
          }
        }
      }

      if (scrollY < 200 && sectionIds.length > 0) {
        setActiveSection(sectionIds[0])
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname, items])

  return (
    <nav
      data-active-id={activeId}
      className={cn(
        "relative flex items-center gap-0.5 rounded-none border border-line bg-muted/25 p-0.5 shadow-none backdrop-blur-md dark:bg-muted/15",
        className
      )}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {items.map(({ title, href }, index) => {
        const hashMatch = href.match(/#(.*)$/)
        const sectionId = hashMatch ? hashMatch[1] : null

        const isSectionActive =
          pathname === "/" && sectionId ? activeSection === sectionId : false

        const isPageActive = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/" // Home page
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(href))

        const isActive = isSectionActive || (!sectionId && isPageActive)
        const isHovered = hoveredIndex === index

        const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
          clickSound()
          if (pathname === "/" && sectionId) {
            const target = document.getElementById(sectionId)
            if (target) {
              e.preventDefault()
              target.scrollIntoView({ behavior: "smooth", block: "start" })
              history.pushState(null, "", href)
              setActiveSection(sectionId)
            }
          }
        }

        const indexStr = String(index + 1).padStart(2, "0")

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={handleClick}
            className={cn(
              "group relative flex items-center gap-1.5 rounded-none px-3 py-1 text-xs transition-colors outline-none sm:text-[13px]",
              isActive
                ? "font-semibold text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* Smooth floating indicator for hover */}
            {isHovered && (
              <motion.span
                layoutId="nav-hover-pill"
                className="absolute inset-0 rounded-none bg-foreground/6 dark:bg-foreground/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            {/* Active section indicator pill */}
            {isActive && !isHovered && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 rounded-none border border-foreground/20 bg-foreground/8 shadow-none dark:border-foreground/25 dark:bg-foreground/12"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            <span className="relative z-1 font-mono text-[10px] text-muted-foreground/50 transition-colors group-hover:text-muted-foreground">
              {indexStr}
            </span>
            <span className="relative z-1 font-heading text-xs tracking-wider uppercase sm:text-[13px]">
              {title}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

export function NavItem({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "text-sm font-medium tracking-wide text-muted-foreground transition-[color] hover:text-foreground aria-[current=page]:text-foreground",
        className
      )}
      {...props}
    />
  )
}
