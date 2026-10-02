"use client"

import { useCallback, useState } from "react"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"

import type { NavItem } from "@/types/nav"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { haptic } from "@/registry/lib/haptic"

export function NavMobile({ items }: { items: NavItem<Route>[] }) {
  const [open, setOpen] = useState(false)

  const isDesktop = useMediaQuery("(min-width: 40rem)") // sm breakpoint

  const pathname = usePathname()

  const handleOpenChange = useCallback((open: boolean) => {
    haptic()
    setOpen(open)
  }, [])

  if (isDesktop) {
    return <NavMobileTrigger />
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange} modal>
      <PopoverTrigger render={<NavMobileTrigger />} />

      <PopoverContent
        className="w-48 rounded-none border border-line p-1 shadow-lg"
        side="top"
        align="center"
        sideOffset={8}
        finalFocus={false}
      >
        <div className="flex flex-col">
          {items.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/" // Home page
                ? ["/", "/index"].includes(pathname || "")
                : pathname?.startsWith(link.href))

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className="flex items-center justify-between rounded-none px-3 py-2 font-heading text-xs tracking-wider uppercase transition-colors aria-[current=page]:bg-accent aria-[current=page]:text-foreground"
                onClick={() => handleOpenChange(false)}
              >
                <span>{link.title}</span>
                <span className="font-mono text-[10px] text-muted-foreground/50">
                  {String(items.indexOf(link) + 1).padStart(2, "0")}
                </span>
              </Link>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default NavMobile

function NavMobileTrigger(
  props: Omit<React.ComponentProps<typeof Button>, "children">
) {
  return (
    <Button
      className="group relative flex touch-manipulation flex-col gap-1 border-none before:absolute before:-inset-x-2 before:-top-8 before:-bottom-1 active:scale-none aria-expanded:bg-accent"
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle Menu"
      {...props}
    >
      <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-popup-open:translate-y-0.75 group-data-popup-open:rotate-45" />
      <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-popup-open:-translate-y-0.75 group-data-popup-open:-rotate-45" />
    </Button>
  )
}
