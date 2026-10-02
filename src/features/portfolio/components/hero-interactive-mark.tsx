"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"

const springTransition: Transition = {
  type: "spring",
  mass: 0.4,
  damping: 16,
  stiffness: 260,
}

export function HeroInteractiveMark() {
  const id = useId()
  const ids = {
    radialGradient: `fuad-spotlight-${id}`,
    hatchPattern: `fuad-hatch-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)
  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 520]), {
    stiffness: 280,
    damping: 28,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 320]), {
    stiffness: 280,
    damping: 28,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return
    if (window.matchMedia("(hover: none)").matches) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect()
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        mouseX.set(Math.max(0, Math.min(1, x)))
        mouseY.set(Math.max(0, Math.min(1, y)))
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <div className="relative flex size-full items-center justify-center p-3 select-none sm:p-5">
      <motion.svg
        ref={ref}
        className="h-auto w-full max-w-[480px] cursor-pointer touch-manipulation overflow-visible [--stroke-hi:color-mix(in_oklab,var(--foreground)_55%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_18%,var(--background))]"
        viewBox="0 0 520 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="normal"
        whileTap="pressed"
        onTap={() => play()}
      >
        <defs>
          <motion.radialGradient
            id={ids.radialGradient}
            cx={cx}
            cy={cy}
            r="160"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor="var(--foreground)"
              stopOpacity="0.45"
            />
            <stop
              offset="60%"
              stopColor="var(--foreground)"
              stopOpacity="0.12"
            />
            <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
          </motion.radialGradient>

          <pattern
            id={ids.hatchPattern}
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 8L8 0M-2 2L2 -2M6 10L10 6"
              stroke="var(--stroke)"
              strokeWidth="0.75"
              strokeOpacity="0.3"
            />
          </pattern>
        </defs>

        {/* Blueprint outer boundary & crosshair marks */}
        <g
          stroke="var(--stroke)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.4"
        >
          <line x1="20" y1="20" x2="500" y2="20" />
          <line x1="20" y1="300" x2="500" y2="300" />
          <line x1="20" y1="20" x2="20" y2="300" />
          <line x1="500" y1="20" x2="500" y2="300" />
        </g>

        {/* Corner alignment crosshairs */}
        <g stroke="var(--foreground)" strokeWidth="1" opacity="0.35">
          <path d="M16 20h8M20 16v8" />
          <path d="M496 20h8M500 16v8" />
          <path d="M16 300h8M20 296v8" />
          <path d="M496 300h8M500 296v8" />
        </g>

        {/* Technical telemetry labels */}
        <text
          x="26"
          y="36"
          className="fill-muted-foreground/70 font-mono text-[9px] tracking-widest uppercase"
        >
          SYS // FU&apos;AYD (فُؤَيْد) • v2.6
        </text>
        <text
          x="494"
          y="36"
          textAnchor="end"
          className="fill-muted-foreground/70 font-mono text-[9px] tracking-widest uppercase"
        >
          {"ADDIS ABABA // 9°01'N 38°44'E"}
        </text>

        {/* Isometric 3D Base Pedestal */}
        <g className="fill-card/40 stroke-line" strokeWidth="1.2">
          {/* Base bottom drop shadow / floor outline */}
          <polygon
            points="260,250 420,165 260,80 100,165"
            fill="var(--background)"
            stroke="var(--stroke)"
            strokeDasharray="4 4"
            opacity="0.6"
          />

          {/* Left extrusion wall */}
          <polygon
            points="100,165 260,250 260,270 100,185"
            fill="color-mix(in oklab, var(--background) 90%, var(--foreground))"
            stroke="var(--stroke)"
          />
          {/* Right extrusion wall */}
          <polygon
            points="260,250 420,165 420,185 260,270"
            fill="color-mix(in oklab, var(--background) 82%, var(--foreground))"
            stroke="var(--stroke)"
          />
        </g>

        {/* Depressible Mechanical Keycap / Top Module */}
        <motion.g
          variants={{
            normal: { y: 0 },
            pressed: { y: 12 },
          }}
          transition={springTransition}
        >
          {/* Keycap Left Extrusion */}
          <polygon
            points="120,154 260,230 260,248 120,172"
            fill="color-mix(in oklab, var(--background) 85%, var(--foreground))"
            stroke="var(--stroke)"
            strokeWidth="1.5"
          />

          {/* Keycap Right Extrusion */}
          <polygon
            points="260,230 400,154 400,172 260,248"
            fill="color-mix(in oklab, var(--background) 78%, var(--foreground))"
            stroke="var(--stroke)"
            strokeWidth="1.5"
          />

          {/* Keycap Top Face */}
          <polygon
            points="260,78 400,154 260,230 120,154"
            fill="var(--card)"
            stroke="var(--stroke)"
            strokeWidth="1.5"
          />

          {/* Diagonal hatch on top face */}
          <polygon
            points="260,78 400,154 260,230 120,154"
            fill={`url(#${ids.hatchPattern})`}
            opacity="0.5"
          />

          {/* Inner bezel accent diamond */}
          <polygon
            points="260,94 378,154 260,214 142,154"
            fill="none"
            stroke="var(--stroke)"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            opacity="0.7"
          />

          {/* Center Brand Emblem: Arabic Calligraphy Fuayd (فُؤَيْد) */}
          <g className="pointer-events-none select-none">
            <text
              x="260"
              y="166"
              textAnchor="middle"
              className="fill-foreground font-arabic text-[50px] font-bold tracking-normal select-none"
              style={{
                filter:
                  "drop-shadow(0 2px 10px color-mix(in oklab, var(--foreground) 25%, transparent))",
              }}
            >
              فُؤَيْد
            </text>
            <text
              x="260"
              y="186"
              textAnchor="middle"
              className="fill-muted-foreground/80 font-mono text-[9px] tracking-[0.22em] uppercase select-none"
            >
              {"FU'AYD // HEART & INTELLECT"}
            </text>
          </g>

          {/* Interactive cursor spotlight highlight stroke over keycap */}
          <polygon
            points="260,78 400,154 260,230 120,154"
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            strokeWidth="2.5"
          />
        </motion.g>

        {/* Fig 1.0 notation */}
        <text
          x="494"
          y="288"
          textAnchor="end"
          className="fill-muted-foreground/60 font-mono text-[10px] tracking-wider"
        >
          FIG. 1.0 // ITQĀN (إتقان) TACTILE SWITCH
        </text>
      </motion.svg>

      {/* Cursive arrow & annotation pointing to the switch */}
      <HandwrittenNote
        className="right-4 bottom-3 hidden w-36 flex-col items-end pointer-fine:md:flex"
        aria-hidden
      >
        <span className="-rotate-6 font-cursive text-3xl text-muted-foreground">
          tactile switch
          <span className="block text-xl opacity-85">click for sound</span>
        </span>
        <HandwrittenArrow className="translate-x-2 -scale-x-100 -rotate-12" />
      </HandwrittenNote>
    </div>
  )
}

export default HeroInteractiveMark
