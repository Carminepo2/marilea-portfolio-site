import type { FunctionalComponent } from "preact"
import type { ProjectType } from "@/types"
import clsx from "clsx"
import Image from "@astrojs/image"
import { useState } from "preact/hooks"
import Container from "../Container"
import PROJECTS from "@/static/data/progetti"

const tabs: Array<ProjectType> = [
  "web-design",
  "app-design",
  "graphic-design",
  "social-design",
]

const tabNames: Record<ProjectType, string> = {
  "web-design": "Web Design",
  "app-design": "App Design",
  "graphic-design": "Graphic Design",
  "social-design": "Social Design",
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
        <div className="mt-4 grid grid-cols-2 gap-6 py-8 sm:mt-6 md:grid-cols-3 lg:grid-cols-4">
          {PROJECTS[selected].map((projectImage) => (
            <ProjectImage key={projectImage.filename} data={projectImage} />
          ))}
        </div>
      </Container>
    </>
  )
}

interface ProjectImageProps {
  data: typeof PROJECTS[keyof typeof PROJECTS][0]
}

const ProjectImage: FunctionalComponent<ProjectImageProps> = ({ data }) => {
  return (
    <div key={data.filename} className="aspect-square rounded-xl shadow-custom">
      <img
        className="rounded-xl"
        src={`/${data.filename}`}
        alt={data.alt}
        height={384}
        width={384}
      />
    </div>
  )
}

export default ProjectSection
