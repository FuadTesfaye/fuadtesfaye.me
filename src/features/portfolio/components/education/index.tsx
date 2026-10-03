import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EDUCATION } from "@/features/portfolio/data/education"
import type { Education } from "@/features/portfolio/types/education"

import { EducationItem } from "./education-item"

const ID = "education"

export function Education() {
  return (
    <Panel id={ID}>
      <div className="flex items-center justify-between border-b border-line bg-muted/20 px-4 py-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:text-[11px]">
        <span>SECTION // 06</span>
        <span className="flex items-center gap-1.5">
          <span className="font-arabic text-xs font-bold text-foreground/80">
            معارف
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span>ACADEMIC FOUNDATION</span>
        </span>
        <span>INDEX // CREDENTIALS</span>
      </div>

      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      {EDUCATION.map((item) => (
        <div
          key={item.id}
          id={`education-${item.id}`}
          className="screen-line-bottom scroll-mt-14 p-4"
        >
          <EducationItem key={item.id} item={item} />
        </div>
      ))}
    </Panel>
  )
}
