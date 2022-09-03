import type { FunctionalComponent } from "preact"
import Logo from "./ui/Logo"

const Footer: FunctionalComponent = () => {
  return (
    <nav className="mx-8 flex flex-col items-center justify-center border-t-2 px-8 py-12 text-center sm:flex-row sm:justify-between">
      <Logo className="h-12 w-12" />
      <p className="mt-4 text-primary sm:mt-0">
        Marilea Minasi © Tutti i Diritti Riservati 2022
      </p>
    </nav>
  )
}

export default Footer
