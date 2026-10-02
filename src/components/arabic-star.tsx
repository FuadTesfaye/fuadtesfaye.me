import { cn } from "@/lib/utils"

export function ArabicStar({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-3.5 shrink-0 select-none", className)}
      {...props}
    >
      {/* Outer 8-pointed star (Rub el Hizb) formed by two 45-deg intersecting squares */}
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        stroke="currentColor"
        strokeWidth="1.2"
        className="opacity-70"
      />
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(45 12 12)"
        className="opacity-70"
      />
      {/* Concentric inner geometric ring */}
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="0.9"
        className="opacity-90"
      />
      {/* Center solid core */}
      <circle
        cx="12"
        cy="12"
        r="1.2"
        fill="currentColor"
        className="opacity-100"
      />
    </svg>
  )
}
