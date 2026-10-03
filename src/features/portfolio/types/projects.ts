export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string
  title: string
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** Public URL (site, repository, demo, or video). */
  link: string
  /** Tags/technologies for chips or filtering. */
  skills: string[]
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string
  /** Inline SVG icon, framed in a tile; defaults to a box icon. */
  icon?: React.ReactElement
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean
  /** Architectural domain category. */
  category?: "ai" | "systems" | "platforms"
  /** Status indicator label (e.g. "Live App", "Open Source", "Enterprise"). */
  status?: string
  /** Direct GitHub source code repository URL if distinct from `link`. */
  githubUrl?: string
  /** Key architectural highlight or metric. */
  highlight?: string
}

export type ProjectCategory = "all" | "ai" | "systems" | "platforms"
