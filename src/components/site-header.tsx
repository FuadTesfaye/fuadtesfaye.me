import dynamic from "next/dynamic"
import Link from "next/link"

import { MAIN_NAV } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { ChanhDaiMark } from "@/components/chanhdai-mark"
import { NavDesktop } from "@/components/nav-desktop"
import { NavItemGitHub } from "@/components/nav-item-github"
import { ThemeToggle } from "@/components/theme-toggle"
import blocks from "@/registry/__blocks__.json"
import { BOOKMARKS } from "@/features/bookmark/data"
import { sortBookmarksNewestFirst } from "@/features/bookmark/lib/sort"
import type { BookmarkPreview } from "@/features/bookmark/types"
import { getAllDocs } from "@/features/doc/data/documents"
import type { DocPreview } from "@/features/doc/types/document"

const CommandMenu = dynamic(() => import("@/components/command-menu"))

export function SiteHeader() {
  const docs = getAllDocs()

  // Minimize data serialized to client component - only send necessary fields
  const docPreviews: DocPreview[] = docs.map((doc) => ({
    slug: doc.slug,
    title: doc.metadata.title,
    category: doc.metadata.category,
  }))

  const bookmarkPreviews: BookmarkPreview[] = sortBookmarksNewestFirst(
    BOOKMARKS
  ).map((bookmark) => ({
    title: bookmark.title,
    url: bookmark.url,
  }))

  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background/80 px-2 backdrop-blur-md transition-all supports-backdrop-filter:bg-background/60">
      <div className="screen-line-top screen-line-bottom relative mx-auto flex h-(--header-height) items-center gap-2 border-x screen-line-bottom-border screen-line-top-border pr-2 pl-3 group-has-data-[slot=layout-wide]/layout:container after:z-1 sm:gap-4 sm:pl-4 md:max-w-4xl">
        <Link
          href="/"
          aria-label="Fuad Tesfaye Home"
          className="group flex items-center gap-2.5 transition-opacity outline-none select-none hover:opacity-90"
        >
          <div className="relative flex items-center">
            <ChanhDaiMark className="h-6 shrink-0 transition-transform duration-300 group-hover:scale-105 group-active:scale-95" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-name text-lg font-normal tracking-wide text-foreground transition-colors group-hover:text-foreground/80">
              Fuad
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-medium tracking-widest text-emerald-400 uppercase sm:inline-flex">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              ONLINE
            </span>
          </div>
        </Link>

        <div className="flex-1" />

        <NavDesktop items={MAIN_NAV} />

        <div className="flex items-center max-sm:*:data-[slot=command-menu-trigger]:hidden">
          <Separator
            orientation="vertical"
            className="mr-1.5 opacity-60 max-sm:hidden data-vertical:h-4 data-vertical:self-center"
          />
          <CommandMenu
            docs={docPreviews}
            blocks={blocks}
            bookmarks={bookmarkPreviews}
            enabledHotkeys
          />
          <Separator
            orientation="vertical"
            className="mx-1 opacity-60 max-sm:hidden data-vertical:h-4 data-vertical:self-center"
          />
          <NavItemGitHub />
          <Separator
            orientation="vertical"
            className="mx-1 opacity-60 data-vertical:h-4 data-vertical:self-center"
          />
          <ThemeToggle />
        </div>

        {/* Precision corner crosshairs */}
        <div
          className="pointer-events-none absolute -top-1 -left-1 z-2 flex size-2 items-center justify-center font-mono text-[9px] text-muted-foreground/35 select-none"
          aria-hidden
        >
          +
        </div>
        <div
          className="pointer-events-none absolute -top-1 -right-1 z-2 flex size-2 items-center justify-center font-mono text-[9px] text-muted-foreground/35 select-none"
          aria-hidden
        >
          +
        </div>
        <div
          className="pointer-events-none absolute -bottom-1 -left-1 z-2 flex size-2 items-center justify-center font-mono text-[9px] text-muted-foreground/35 select-none"
          aria-hidden
        >
          +
        </div>
        <div
          className="pointer-events-none absolute -right-1 -bottom-1 z-2 flex size-2 items-center justify-center font-mono text-[9px] text-muted-foreground/35 select-none"
          aria-hidden
        >
          +
        </div>
      </div>
    </header>
  )
}
