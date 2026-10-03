import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS } from "@/features/portfolio/data/projects"

import { ProjectItem } from "./project-item"

const ID = "projects"

export function Projects() {
  return (
    <Panel id={ID}>
      <div className="flex items-center justify-between border-b border-line bg-muted/20 px-4 py-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:text-[11px]">
        <span>SECTION // 07</span>
        <span className="flex items-center gap-1.5">
          <span className="font-arabic text-xs font-bold text-foreground/80">
            إنجاز
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span>SELECTED ARCHIVE</span>
        </span>
        <span>INDEX // {PROJECTS.length} WORKS</span>
      </div>

      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  )
}
