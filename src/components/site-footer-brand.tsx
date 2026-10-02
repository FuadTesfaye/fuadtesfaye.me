"use client"

export function SiteFooterInteractiveLogotype() {
  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div className="overflow-hidden">
        <div className="flex w-full translate-y-[28%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1410 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="705"
              y="195"
              textAnchor="middle"
              className="font-cursive text-[360px] tracking-normal select-none"
              textLength="1260"
              lengthAdjust="spacingAndGlyphs"
              style={{ fontFamily: "var(--font-cursive)" }}
              fill="var(--foreground)"
              fillOpacity="0.07"
              stroke="var(--foreground)"
              strokeOpacity="0.32"
              strokeWidth="1.4"
            >
              Fuad
            </text>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[60%] max-w-full -translate-x-1/2 bg-line/60 dark:block"
        aria-hidden
      />
    </div>
  )
}
