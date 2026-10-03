"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"

import { useIsClient } from "@/hooks/use-is-client"
import { ArabicStar } from "@/components/arabic-star"

const HalftoneDots = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.HalftoneDots),
  {
    ssr: false,
    loading: () => (
      <div className="flex size-full items-center justify-center bg-background font-mono text-[9px] text-muted-foreground/30 select-none">
        <ArabicStar className="size-3 animate-spin text-muted-foreground/30" />
      </div>
    ),
  }
)

export function HeroHalftoneFlower() {
  const { resolvedTheme } = useTheme()
  const isClient = useIsClient()

  const isDark = resolvedTheme === "dark"

  // Base background matches the site's base color exactly in both light and dark modes:
  // - Dark mode base color: #0e1019 (the exact theme background defined in globals.css)
  // - Light mode base color: #ffffff (the exact theme background defined in globals.css)
  const colorBack = isDark ? "#0e1019" : "#ffffff"

  // High-contrast dots so the flowers are clearly seen against the base background
  const colorFront = isDark ? "#ffffff" : "#0e1019"

  if (!isClient) {
    return (
      <div className="flex size-full items-center justify-center bg-background font-mono text-[9px] text-muted-foreground/30 select-none">
        <ArabicStar className="size-3 text-muted-foreground/40" />
      </div>
    )
  }

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden bg-background select-none">
      {/* Halftone Flower Shader Canvas */}
      <HalftoneDots
        width="100%"
        height="100%"
        className="size-full"
        image="/images/flowers.webp"
        colorBack={colorBack}
        colorFront={colorFront}
        originalColors={false}
        type="gooey"
        grid="hex"
        inverted={false}
        size={0.22}
        radius={1.03}
        contrast={0.55}
        grainMixer={1}
        grainOverlay={0.35}
        grainSize={0.27}
        scale={0.88}
        fit="cover"
      />

      {/* Subtle Micro-Stamp at the top left */}
      <div className="backdrop-blur-2xs pointer-events-none absolute top-1.5 left-3.5 z-2 flex items-center gap-1 bg-background/85 px-1.5 py-0.5 font-mono text-[8px] tracking-wider text-muted-foreground uppercase">
        <ArabicStar className="size-2 text-muted-foreground/70" />
        <span className="font-arabic font-bold text-foreground/80">
          زَهْرَة
        </span>
      </div>
    </div>
  )
}
