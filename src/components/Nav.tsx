import type { FunctionComponent } from "preact"
import Logo from "./ui/Logo"

const Nav: FunctionComponent = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 mx-8 flex items-center justify-center p-4 sm:justify-between sm:p-8">
      <div>
        <Logo className="h-12 w-12" />
      </div>
      <ul className="hidden space-x-8 sm:flex md:space-x-16">
        <li>
          <a class="transition-colors hover:text-primary" href="#servizi">
            Servizi
          </a>
        </li>
        <li>
          <a class="transition-colors hover:text-primary" href="#i-miei-lavori">
            I miei lavori
          </a>
        </li>
        <li>
          <a class="transition-colors hover:text-primary" href="#contatti">
            Contatti
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
