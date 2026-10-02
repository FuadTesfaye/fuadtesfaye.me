import { USER } from "@/features/portfolio/data/user"

import { FlipSentences } from "./flip-sentences"
import { HeroInteractiveMark } from "./hero-interactive-mark"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] overflow-y-clip border-x screen-line-bottom-border after:z-1">
      <figure className="relative col-span-2 flex min-h-[260px] w-full items-center justify-center overflow-hidden border-b border-line sm:col-span-1 sm:col-start-1 sm:row-start-1 sm:min-h-[290px] sm:border-r sm:border-b-0">
        <HeroInteractiveMark />
      </figure>

      <div className="flex flex-col sm:col-start-2 sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-l border-line">
          <div className="mx-0.5 my-0.75 flex outline-none">
            <div className="relative size-30 rounded-full min-[24rem]:size-32 sm:size-40">
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
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] inset-ring-1 inset-ring-foreground/30 dark:inset-ring-foreground/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:col-start-1 sm:row-start-2">
        <div className="z-1 mt-auto border-t border-line sm:border-r">
          <div className="flex -translate-x-px items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-[2rem]/none font-medium tracking-tight">
              {USER.displayName}
            </h1>

            <VerifiedIcon className="size-4.5 select-none" aria-hidden />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <FlipSentences className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
            {USER.flipSentences}
          </FlipSentences>
        </div>
      </div>
    </div>
  )
}
