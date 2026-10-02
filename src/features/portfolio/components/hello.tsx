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
        <span>MANIFESTO &amp; PHILOSOPHY</span>
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
      <div className="h-4" />
      <div className="screen-line-bottom h-px screen-line-bottom-border" />
    </Panel>
  )
}
