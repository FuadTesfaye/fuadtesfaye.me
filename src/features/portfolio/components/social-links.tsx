import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArabicStar } from "@/components/arabic-star"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"
import { Panel, PanelContent } from "@/features/portfolio/components/panel"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

export function SocialLinks() {
  return (
    <Panel className="screen-line-bottom-line">
      <h2 className="sr-only">Social links</h2>

      <PanelContent className="flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.name}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      className="border-line bg-card/50 text-foreground/80 shadow-none transition-colors duration-200 hover:bg-foreground hover:text-background [&_svg:not([class*='size-'])]:size-4.5"
                      variant="outline"
                      size="icon-sm"
                      nativeButton={false}
                      render={
                        <a
                          href={addQueryParams(item.href, UTM_PARAMS)}
                          target="_blank"
                          rel="noopener"
                        >
                          {SOCIAL_ICONS[item.name]}
                          <span className="sr-only">{item.title}</span>
                        </a>
                      }
                    />
                  }
                />
                <TooltipContent>
                  {item.title} ({item.handle})
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 border border-line bg-muted/20 px-3 py-1 font-mono text-[9px] tracking-widest text-muted-foreground select-none sm:flex">
          <ArabicStar className="size-3 text-muted-foreground/70" />
          <span className="font-arabic text-xs font-bold text-foreground/85">
            تَواصُل
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span className="uppercase">NETWORK // ACTIVE</span>
          <ArabicStar className="size-3 text-muted-foreground/50" />
        </div>
      </PanelContent>

      <HandwrittenNote className="-top-4 right-full mr-4 hidden w-28 flex-col items-end lg:flex">
        <span className="-rotate-6 font-cursive text-3xl select-none">
          follow me
        </span>
        <HandwrittenArrow className="size-7 translate-x-3 -scale-x-100 -rotate-6" />
      </HandwrittenNote>
    </Panel>
  )
}
