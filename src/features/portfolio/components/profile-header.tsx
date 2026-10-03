import { ArabicStar } from "@/components/arabic-star"
import { USER } from "@/features/portfolio/data/user"

import { FlipSentences } from "./flip-sentences"
import { HeroHalftoneFlower } from "./hero-halftone-flower"
import { HeroInteractiveMark } from "./hero-interactive-mark"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[1fr_auto] grid-rows-[auto_1fr_auto] overflow-y-clip border-x screen-line-bottom-border after:z-1">
      {/* Top Architectural Dossier Header Ribbon */}
      <div className="col-span-2 flex flex-wrap items-center justify-between gap-2 border-b border-line bg-muted/20 px-3 py-2 font-mono text-[10px] tracking-wider text-muted-foreground uppercase min-[380px]:px-4 sm:text-[11px]">
        <span className="flex items-center gap-1.5 font-medium text-foreground/80">
          <ArabicStar className="size-3 text-muted-foreground/70" />
          DOSSIER // FU&apos;AYD
        </span>
        <span className="hidden min-[480px]:inline">
          ADDIS ABABA (9°01&apos;N 38°44&apos;E) • GMT+3
        </span>
        <span className="flex items-center gap-1.5">
          <span className="font-arabic text-xs font-bold text-foreground/80">
            سِجِلّ
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span>INDEX // 2026.1</span>
        </span>
      </div>

      <figure className="relative col-span-2 flex min-h-[230px] w-full items-center justify-center overflow-hidden border-b border-line sm:col-span-1 sm:col-start-1 sm:row-start-2 sm:min-h-[290px] sm:border-r sm:border-b-0">
        <HeroInteractiveMark />
      </figure>

      {/* Name and Details */}
      <div className="col-start-1 row-start-3 flex flex-col sm:col-start-1 sm:row-start-3">
        <div className="z-1 mt-auto border-line sm:border-t">
          <div className="flex -translate-x-px flex-wrap items-baseline gap-x-3 gap-y-1 pt-3 pr-2 pl-3 min-[380px]:pl-4">
            <div className="flex items-center gap-1.5 min-[380px]:gap-2">
              <h1 className="-translate-y-px font-name text-2xl font-normal tracking-wide min-[360px]:text-[1.95rem] min-[420px]:text-[2.35rem]/none sm:text-[2.5rem]/none">
                {USER.displayName}
              </h1>

              <VerifiedIcon
                className="size-4.5 shrink-0 select-none min-[380px]:size-5"
                aria-hidden
              />

              {USER.namePronunciationUrl && (
                <PronounceMyName
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              )}
            </div>

            {/* Arabic signature seal inline */}
            <span
              className="font-arabic text-2xl font-bold tracking-normal text-muted-foreground/80 select-none min-[380px]:text-3xl"
              title="Fu'ayd in Arabic"
            >
              فُؤَيْد
            </span>
          </div>

          <div className="px-3 pt-1.5 pb-2 font-mono text-xs text-muted-foreground min-[380px]:px-4 sm:text-[13px]">
            <span className="font-medium text-foreground/90">
              Chief Technology Officer
            </span>{" "}
            • Full-Stack Systems Engineer
          </div>

          <FlipSentences className="flex min-h-13 items-center border-t border-line py-1.5 pr-2 pl-3 min-[380px]:pl-4 sm:h-9 sm:min-h-9 sm:py-1">
            {USER.flipSentences}
          </FlipSentences>
        </div>
      </div>

      {/* Right Column: Top-Right Flower Shader + Bottom-Right Avatar */}
      <div className="col-start-2 row-start-3 flex flex-col sm:col-start-2 sm:row-span-2 sm:row-start-2">
        {/* Top-Right Halftone Flower Shader */}
        <div className="relative hidden min-h-[160px] w-full flex-1 overflow-hidden border-l border-line sm:flex">
          <HeroHalftoneFlower />
        </div>

        {/* Avatar with precision crop marks */}
        <div className="screen-line-top mt-auto shrink-0 border-l border-line">
          <div className="relative p-2 sm:p-3">
            {/* Precision corner crop brackets */}
            <div className="pointer-events-none absolute top-1 left-1 font-mono text-[8px] text-muted-foreground/40 select-none">
              ⌜
            </div>
            <div className="pointer-events-none absolute top-1 right-1 font-mono text-[8px] text-muted-foreground/40 select-none">
              ⌝
            </div>
            <div className="pointer-events-none absolute bottom-1 left-1 font-mono text-[8px] text-muted-foreground/40 select-none">
              ⌞
            </div>
            <div className="pointer-events-none absolute right-1 bottom-1 font-mono text-[8px] text-muted-foreground/40 select-none">
              ⌟
            </div>

            <div className="relative size-24 rounded-full ring-1 ring-border/80 min-[22rem]:size-28 min-[24rem]:size-32 sm:size-40">
              <img
                className="block size-full rounded-[inherit] object-cover select-none dark:hidden"
                src={USER.avatarSketch}
                alt="Avatar with sketch style in light mode"
              />
              <img
                className="hidden size-full rounded-[inherit] object-cover select-none dark:block"
                src={USER.avatar}
                alt="Avatar in dark mode"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] inset-ring-1 inset-ring-foreground/20 dark:inset-ring-foreground/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
