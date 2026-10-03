"use client"

import { useId, useRef } from "react"
import type { Transition } from "motion/react"
import { motion } from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"

const springTransition: Transition = {
  type: "spring",
  mass: 0.35,
  damping: 15,
  stiffness: 280,
}

export function HeroInteractiveMark() {
  const id = useId()
  const hatchPatternId = `fuad-hatch-${id}`
  const gridPatternId = `fuad-grid-${id}`

  const ref = useRef<SVGSVGElement>(null)
  const [play] = useSound(metalClickSound)

  return (
    <div className="relative flex size-full items-center justify-center p-2 select-none sm:p-4">
      <motion.svg
        ref={ref}
        className="h-auto w-full max-w-full cursor-pointer touch-manipulation overflow-visible [--stroke-hi:color-mix(in_oklab,var(--foreground)_55%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_18%,var(--background))]"
        viewBox="0 0 680 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="normal"
        whileTap="pressed"
        onTap={() => play()}
      >
        <defs>
          {/* Subtle millimeter CAD coordinate grid pattern */}
          <pattern
            id={gridPatternId}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="var(--stroke)"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
          </pattern>

          {/* Intricate Islamic 8-pointed star rosette mesh */}
          <pattern
            id={hatchPatternId}
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="var(--stroke)"
              strokeWidth="0.75"
              strokeOpacity="0.4"
            >
              {/* Primary 8-pointed star */}
              <rect x="8" y="8" width="12" height="12" />
              <rect
                x="8"
                y="8"
                width="12"
                height="12"
                transform="rotate(45 14 14)"
              />
              <circle cx="14" cy="14" r="2.5" />
              {/* Corner rosettes */}
              <circle cx="0" cy="0" r="2" />
              <circle cx="28" cy="0" r="2" />
              <circle cx="28" cy="28" r="2" />
              <circle cx="0" cy="28" r="2" />
              {/* Diagonal interlacing links */}
              <line x1="0" y1="0" x2="8" y2="8" />
              <line x1="28" y1="0" x2="20" y2="8" />
              <line x1="28" y1="28" x2="20" y2="20" />
              <line x1="0" y1="28" x2="8" y2="20" />
            </g>
          </pattern>
        </defs>

        {/* CAD Coordinate Grid Background */}
        <rect
          x="16"
          y="16"
          width="648"
          height="258"
          fill={`url(#${gridPatternId})`}
          opacity="0.5"
        />

        {/* Blueprint outer boundary */}
        <g
          stroke="var(--stroke)"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.4"
        >
          <line x1="16" y1="16" x2="664" y2="16" />
          <line x1="16" y1="274" x2="664" y2="274" />
          <line x1="16" y1="16" x2="16" y2="274" />
          <line x1="664" y1="16" x2="664" y2="274" />
        </g>

        {/* Subtle architectural background calligraphy watermark */}
        <text
          x="340"
          y="195"
          textAnchor="middle"
          className="pointer-events-none fill-foreground/3 font-arabic text-[210px] font-bold select-none dark:fill-foreground/4"
          aria-hidden
        >
          فُؤَيْد
        </text>

        {/* Wide Isometric Base Pedestal (Fixed Deck) */}
        <g className="fill-card/40 stroke-line" strokeWidth="1.2">
          {/* Base footprint drop shadow */}
          <polygon
            points="340,230 610,150 340,70 70,150"
            fill="var(--background)"
            stroke="var(--stroke)"
            strokeDasharray="4 4"
            opacity="0.6"
          />

          {/* Left extrusion wall */}
          <polygon
            points="70,150 340,230 340,250 70,170"
            fill="color-mix(in oklab, var(--background) 90%, var(--foreground))"
            stroke="var(--stroke)"
          />
          {/* Right extrusion wall */}
          <polygon
            points="340,230 610,150 610,170 340,250"
            fill="color-mix(in oklab, var(--background) 82%, var(--foreground))"
            stroke="var(--stroke)"
          />

          {/* Front lip optic status channel */}
          <line
            x1="74"
            y1="168"
            x2="340"
            y2="248"
            stroke="var(--foreground)"
            strokeOpacity="0.15"
            strokeWidth="1.5"
          />
          <line
            x1="340"
            y1="248"
            x2="606"
            y2="168"
            stroke="var(--foreground)"
            strokeOpacity="0.12"
            strokeWidth="1.5"
          />
        </g>

        {/* Depressible Mechanical Wide Key Module / Actuator Deck */}
        <motion.g
          variants={{
            normal: { y: 0, scale: 1 },
            pressed: { y: 9, scale: 0.992 },
          }}
          transition={springTransition}
          style={{ transformOrigin: "340px 150px" }}
        >
          {/* Left Side Extrusion Skirt */}
          <polygon
            points="95,140 340,212 340,228 95,156"
            fill="color-mix(in oklab, var(--background) 86%, var(--foreground))"
            stroke="var(--stroke)"
            strokeWidth="1.4"
          />

          {/* Right Side Extrusion Skirt */}
          <polygon
            points="340,212 585,140 585,156 340,228"
            fill="color-mix(in oklab, var(--background) 78%, var(--foreground))"
            stroke="var(--stroke)"
            strokeWidth="1.4"
          />

          {/* Main Wide Top Face (490px wide!) */}
          <polygon
            points="340,68 585,140 340,212 95,140"
            fill="var(--card)"
            stroke="var(--stroke)"
            strokeWidth="1.5"
          />

          {/* Geometric Girih Rosette Pattern on Top Face */}
          <polygon
            points="340,68 585,140 340,212 95,140"
            fill={`url(#${hatchPatternId})`}
            opacity="0.45"
          />

          {/* Inner Chamfer Bezel Outline */}
          <polygon
            points="340,82 562,140 340,198 118,140"
            fill="none"
            stroke="var(--stroke)"
            strokeWidth="0.8"
            strokeDasharray="2.5 2.5"
            opacity="0.75"
          />

          {/* Left Wing: Tactile Machined Grooves */}
          <g stroke="var(--stroke-hi)" strokeWidth="0.7" opacity="0.6">
            <line x1="140" y1="135" x2="200" y2="152" />
            <line x1="146" y1="130" x2="206" y2="147" />
            <line x1="152" y1="125" x2="212" y2="142" />
            <line x1="158" y1="120" x2="218" y2="137" />
          </g>

          {/* Right Wing: Metric Stepper Grooves */}
          <g stroke="var(--stroke-hi)" strokeWidth="0.7" opacity="0.6">
            <line x1="480" y1="152" x2="540" y2="135" />
            <line x1="474" y1="147" x2="534" y2="130" />
            <line x1="468" y1="142" x2="528" y2="125" />
            <line x1="462" y1="137" x2="522" y2="120" />
          </g>

          {/* Center Brand Medallion: Geometric Octagon & Sculpted Arabic Calligraphy */}
          <g className="pointer-events-none select-none">
            {/* Medallion outer ring */}
            <circle
              cx="340"
              cy="140"
              r="44"
              fill="var(--background)"
              stroke="var(--stroke)"
              strokeWidth="1.2"
              className="fill-background/85 backdrop-blur-xs"
            />
            {/* Concentric 8-point geometric star ring */}
            <rect
              x="313"
              y="113"
              width="54"
              height="54"
              fill="none"
              stroke="var(--stroke)"
              strokeWidth="0.75"
              strokeDasharray="2 2"
              opacity="0.8"
            />
            <rect
              x="313"
              y="113"
              width="54"
              height="54"
              fill="none"
              stroke="var(--stroke)"
              strokeWidth="0.75"
              strokeDasharray="2 2"
              transform="rotate(45 340 140)"
              opacity="0.8"
            />

            {/* Sculpted Arabic Calligraphy: Fu'ayd (فُؤَيْد) */}
            <text
              x="340"
              y="156"
              textAnchor="middle"
              className="fill-foreground font-arabic text-[50px] font-bold tracking-normal select-none"
            >
              فُؤَيْد
            </text>
          </g>

          {/* Anodized Bevel Rim Highlight */}
          <polygon
            points="340,68 585,140 340,212 95,140"
            fill="none"
            stroke="var(--foreground)"
            strokeOpacity="0.28"
            strokeWidth="1.2"
          />
        </motion.g>
      </motion.svg>

      {/* Cursive annotation pointing to the switch */}
      <HandwrittenNote
        className="right-3 bottom-2 hidden w-36 flex-col items-end pointer-fine:md:flex"
        aria-hidden
      >
        <span className="-rotate-6 font-cursive text-2xl text-muted-foreground sm:text-3xl">
          tactile switch
          <span className="block text-lg opacity-85 sm:text-xl">
            click for sound
          </span>
        </span>
        <HandwrittenArrow className="translate-x-2 -scale-x-100 -rotate-12" />
      </HandwrittenNote>
    </div>
  )
}

export default HeroInteractiveMark
