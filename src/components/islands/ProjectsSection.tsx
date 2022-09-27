import type { FunctionalComponent } from "preact"
import type { ProjectType } from "@/types"
import clsx from "clsx"
import { useState } from "preact/hooks"
import Container from "../Container"
import PROJECTS from "@/static/data/progetti"
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/icons"

const tabs: Array<ProjectType> = [
  "web-design",
  "case-studies",
  "graphic-design",
  // "social-design",
]

const tabNames: Record<ProjectType, string> = {
  "web-design": "Web Design",
  "case-studies": "Case Studies",
  "graphic-design": "Graphic Design",
  // "social-design": "Social Design",
}

const ProjectSection: FunctionalComponent = () => {
  const [selected, setSelected] = useState<ProjectType>("web-design")

  const handleSelectedTabChange = (tab: ProjectType) => {
    setSelected(tab)
  }

  return (
    <>
      <Container className="pt-0">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">
            Seleziona una tab
          </label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full rounded-xl border-content font-syne text-gray-600 shadow-custom focus:border-primary focus:ring-primary"
            value={selected}
            onChange={(e) => {
              handleSelectedTabChange(
                //@ts-ignore
                (e.target?.value ?? "web-design") as ProjectType
              )
            }}
          >
            {tabs.map((tab) => (
              <option key={tab} value={tab}>
                {tabNames[tab]}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav
            className="isolate flex divide-x divide-content rounded-lg shadow-custom"
            aria-label="Tabs"
          >
            {tabs.map((tab, tabIdx) => (
              <button
                key={tab}
                className={clsx(
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden py-3 px-4 text-center font-syne text-lg font-bold text-gray-400 focus:z-10",
                  selected === tab && "bg-content !text-primary"
                )}
                aria-current="page"
                onClick={() => handleSelectedTabChange(tab)}
              >
                <span>{tabNames[tab]}</span>
              </button>
            ))}
          </nav>
        </div>
      </Container>
      <div className="-mx-4 mt-4 overflow-auto whitespace-nowrap py-8 px-4 scrollbar-hide sm:mt-6 md:px-20">
        {PROJECTS[selected].map((projectImage) => (
          <ProjectImage key={projectImage.filename} data={projectImage} />
        ))}
      </div>
      <div className="relative bottom-6 -mb-8 flex items-end justify-end px-4 md:hidden">
        <ArrowRightIcon className="h-8 w-8 text-secondary" />
      </div>
    </>
  )
}

interface ProjectImageProps {
  data: typeof PROJECTS[keyof typeof PROJECTS][0]
}

const ProjectImage: FunctionalComponent<ProjectImageProps> = ({ data }) => {
  return (
    <a
      target="_blank"
      className="relative mx-4 inline-block overflow-hidden rounded-xl shadow-custom"
      href={data.link}
    >
      {!!data.link && (
        <div className="group absolute inset-0 flex items-center justify-center rounded-xl transition-all hover:bg-primary/80 hover:backdrop-blur-sm">
          <ExternalLinkIcon className="h-12 w-12 text-white opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      )}
      <img
        className="rounded-xl"
        src={`/images/${data.filename}`}
        alt={data.alt}
        height={632}
        width={808}
      />
    </a>
  )
}

export default ProjectSection
