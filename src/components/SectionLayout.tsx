import type { FunctionComponent, ComponentChildren } from "preact"
import Container from "@/components/Container"

interface Props {
  title: string
  children: ComponentChildren
}

const SectionLayout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className="mx-4 mb-14 sm:mx-0">
      <Container className="relative rounded-3xl bg-content !p-6">
        <div className="absolute -left-28 top-4 rounded-2xl !bg-white py-3 pr-6 pl-32 shadow-custom sm:py-4 sm:pl-40">
          <h2 className="font-syne text-xl sm:text-3xl">{title}</h2>
        </div>
        <div className="mt-16 sm:mt-24 sm:px-6 sm:pb-6 sm:pt-2">{children}</div>
      </Container>
    </div>
  )
}

export default SectionLayout
