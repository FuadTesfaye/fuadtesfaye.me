import { getGitHubContributions } from "@/features/portfolio/data/github-contributions"

import { Panel } from "../panel"
import { GitHubContributionGraph } from "./graph"

export async function GitHubContributions() {
  const contributions = await getGitHubContributions()

  return (
    <Panel className="screen-line-top-border">
      <h2 className="sr-only">GitHub contributions</h2>
      <GitHubContributionGraph initialData={contributions} />
    </Panel>
  )
}
