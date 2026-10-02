import { USER } from "@/features/portfolio/data/user"

import { FlipSentences } from "./flip-sentences"
import { HeroInteractiveMark } from "./hero-interactive-mark"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] overflow-y-clip border-x screen-line-bottom-border after:z-1">
      <figure className="relative col-span-2 flex min-h-[230px] w-full items-center justify-center overflow-hidden border-b border-line sm:col-span-1 sm:col-start-1 sm:row-start-1 sm:min-h-[290px] sm:border-r sm:border-b-0">
        <HeroInteractiveMark />
      </figure>

      {/* Name and Flip Sentences */}
      <div className="col-start-1 row-start-2 flex flex-col sm:col-start-1 sm:row-start-2">
        <div className="z-1 mt-auto border-line sm:border-t">
          <div className="flex -translate-x-px items-center gap-1.5 pl-3 min-[380px]:gap-2 min-[380px]:pl-4">
            <h1 className="-translate-y-px font-name text-[1.65rem] font-normal tracking-wide min-[360px]:text-[1.85rem] min-[420px]:text-[2.1rem]/none">
              {USER.displayName}
            </h1>

            <VerifiedIcon
              className="size-4 shrink-0 select-none min-[380px]:size-4.5"
              aria-hidden
            />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <FlipSentences className="flex min-h-13 items-center border-t border-line py-1.5 pr-2 pl-3 min-[380px]:pl-4 sm:h-9 sm:min-h-9 sm:py-1">
            {USER.flipSentences}
          </FlipSentences>
        </div>
      </div>

      {/* Avatar */}
      <div className="col-start-2 row-start-2 flex flex-col sm:col-start-2 sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-l border-line">
          <div className="mx-0.5 my-0.75 flex outline-none">
            <div className="relative size-24 rounded-full min-[22rem]:size-28 min-[24rem]:size-32 sm:size-40">
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
    </div>
  )
}
