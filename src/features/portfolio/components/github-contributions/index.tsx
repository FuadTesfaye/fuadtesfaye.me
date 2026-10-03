import { getGitHubContributions } from "@/features/portfolio/data/github-contributions"

import { Panel } from "../panel"
import { GitHubContributionGraph } from "./graph"

export async function GitHubContributions() {
  const contributions = await getGitHubContributions()

  return (
    <Panel className="screen-line-top-border">
      <div className="flex items-center justify-between border-b border-line bg-muted/20 px-4 py-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:text-[11px]">
        <span>SECTION // 02</span>
        <span className="flex items-center gap-1.5">
          <span className="font-arabic text-xs font-bold text-foreground/80">
            إيقاع
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span>ENGINEERING CADENCE</span>
        </span>
        <span>CADENCE // LAST 365 DAYS</span>
      </div>
      <h2 className="sr-only">GitHub contributions</h2>
      <GitHubContributionGraph initialData={contributions} />
    </Panel>
  )
}
