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
      <div className="flex items-center justify-between border-b border-line bg-muted/20 px-4 py-1.5 font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
        <span>SECTION // 03</span>
        <span>فلسفة • MANIFESTO &amp; PHILOSOPHY</span>
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
        <div className="flex items-center gap-2 border border-line bg-background/90 px-2.5 py-0.5 font-mono text-[9px] text-muted-foreground backdrop-blur-xs select-none">
          <ArabicStar className="size-2.5 text-muted-foreground/60" />
          <span className="font-arabic text-[11px] font-bold text-foreground/85">
            حكمة ومبدأ
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span className="tracking-widest uppercase">CANON // CORE</span>
          <ArabicStar className="size-2.5 text-muted-foreground/60" />
        </div>
      </div>
      <div className="screen-line-bottom h-px screen-line-bottom-border" />
    </Panel>
  )
}
