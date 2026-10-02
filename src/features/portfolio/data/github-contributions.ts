import "server-only"

import { GITHUB_USERNAME } from "@/config/site"
import type { Activity } from "@/registry/components/contribution-graph"
import { getCachedContributions } from "@/registry/components/github-contributions/lib/get-cached-contributions"

import fallbackContributions from "./github-contributions-fallback.json"

export async function getGitHubContributions(): Promise<Activity[]> {
  try {
    const live = await getCachedContributions(GITHUB_USERNAME)
    if (live && live.length > 0) {
      return live
    }
  } catch {
    // Ignore error and fall through to fallback
  }

  return fallbackContributions as Activity[]
}
