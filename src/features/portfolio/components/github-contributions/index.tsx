import { getGitHubContributions } from "@/features/portfolio/data/github-contributions"

import { Panel } from "../panel"
import { GitHubContributionGraph } from "./graph"

export async function GitHubContributions() {
  const contributions = await getGitHubContributions()

  return (
    <Panel className="screen-line-top-border">
      <div className="flex items-center justify-between border-b border-line bg-muted/20 px-4 py-1.5 font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
        <span>SECTION // 02</span>
        <span>ENGINEERING CADENCE</span>
        <span>CADENCE // LAST 365 DAYS</span>
      </div>
      <h2 className="sr-only">GitHub contributions</h2>
      <GitHubContributionGraph initialData={contributions} />
    </Panel>
  )
}
