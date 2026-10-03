import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import type { Experience } from "@/features/portfolio/types/experiences"

import { ExperienceItem } from "./experience-item"

const ID = "experience"
const MAX = 3

export function Experiences() {
  return (
    <Panel id={ID}>
      <div className="flex items-center justify-between border-b border-line bg-muted/20 px-4 py-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:text-[11px]">
        <span>SECTION // 05</span>
        <span className="flex items-center gap-1.5">
          <span className="font-arabic text-xs font-bold text-foreground/80">
            مسيرة
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span>CAREER CHRONOLOGY</span>
        </span>
        <span>INDEX // {EXPERIENCES.length} APPOINTMENTS</span>
      </div>

      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Experience</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="px-4">
        <ExperienceList experiences={EXPERIENCES.slice(0, MAX)} />
      </div>

      {EXPERIENCES.length > MAX && (
        <Collapsible className="group/collapsible">
          <CollapsibleContent render={<div className="px-4" />}>
            <ExperienceList experiences={EXPERIENCES.slice(MAX)} />
          </CollapsibleContent>

          <div className="-mt-px flex items-center justify-center py-4">
            <CollapsibleTrigger
              render={
                <Button
                  className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
                  variant="secondary"
                  size="sm"
                >
                  <span className="hidden group-data-closed/collapsible:block">
                    Show more
                  </span>

                  <span className="hidden group-data-open/collapsible:block">
                    Show less
                  </span>

                  <ChevronDownIcon className="group-data-open/collapsible:rotate-180" />
                </Button>
              }
            />
          </div>
        </Collapsible>
      )}
    </Panel>
  )
}

function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </>
  )
}
