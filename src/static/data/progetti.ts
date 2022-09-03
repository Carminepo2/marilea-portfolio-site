import type { ProjectType } from "@/types"

const PROJECTS: Record<
  ProjectType,
  Array<{ filename: string; alt: string }>
> = {
  // QUA
  // ----------------------------------------
  "web-design": [
    { filename: "events-site.png", alt: "Web design 1" },
    { filename: "shopisea.png", alt: "Web design 2" },
    { filename: "sito-carmine.png", alt: "Web design 3" },
  ],
  "app-design": [],
  "graphic-design": [],
  "social-design": [],
  // ----------------------------------------
}

export default PROJECTS
