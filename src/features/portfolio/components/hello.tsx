import { ArabicStar } from "@/components/arabic-star"
import { Markdown } from "@/components/markdown"
import { HelloTitle } from "@/features/portfolio/components/hello-title"
import {
  Panel,
  PanelContent,
  PanelHeader,
} from "@/features/portfolio/components/panel"
import { USER } from "@/features/portfolio/data/user"

const ID = "hello"

export function Hello() {
  return (
    <Panel id={ID} className="screen-line-bottom-none">
      <div className="flex items-center justify-between border-b border-line bg-muted/20 px-4 py-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:text-[11px]">
        <span>SECTION // 03</span>
        <span className="flex items-center gap-1.5">
          <span className="font-arabic text-xs font-bold text-foreground/80">
            فلسفة
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span>MANIFESTO &amp; PHILOSOPHY</span>
        </span>
        <span>ARCHIVE // FU&apos;AYD</span>
      </div>

      <PanelHeader>
        <h2 className="sr-only">About</h2>
        <HelloTitle />
      </PanelHeader>

      <PanelContent>
        <div className="typeset typeset-description [&_li]:ps-0.5 [&_ul]:ps-3.5">
          <Markdown>{USER.about}</Markdown>
        </div>
      </PanelContent>

      <div className="screen-line-bottom h-px" />
      <div className="stripe-divider-kufic relative flex h-6 items-center justify-center border-y border-line/40">
        <div className="flex items-center gap-2 border border-line bg-background/90 px-3 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur-xs select-none sm:text-[11px]">
          <ArabicStar className="size-3 text-muted-foreground/60" />
          <span className="font-arabic text-xs font-bold text-foreground/85 sm:text-[13px]">
            حكمة ومبدأ
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span className="tracking-widest uppercase">CANON // CORE</span>
          <ArabicStar className="size-3 text-muted-foreground/60" />
        </div>
      </div>
      <div className="screen-line-bottom h-px screen-line-bottom-border" />
    </Panel>
  )
}
