import type { FunctionComponent, ComponentProps } from "preact"

interface Props extends ComponentProps<"svg"> {}

const GithubIcon: FunctionComponent<Props> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
      {...props}
    >
      <path d="M5.641 22.569l-5.641 1.431 1.397-5.674 4.244 4.243zm-2.829-5.657l4.243 4.243 16.945-16.913-4.242-4.242-16.946 16.912zm14.114-2.783l-1.414 1.414.708.708 1.414-1.414 1.414 1.414-2.122 2.122.707.707 2.122-2.122 1.417 1.385-2.829 2.829-4.232-4.233-1.415 1.413 5.648 5.648 5.656-5.657-5.643-5.643-1.431 1.429zm-9.887-4.261l-4.21-4.21 2.828-2.829 1.369 1.401-2.121 2.121.707.707 2.121-2.122 1.414 1.415-1.414 1.414.707.707 1.414-1.414 1.432-1.429-5.629-5.629-5.657 5.657 5.623 5.624 1.416-1.413z" />{" "}
    </svg>
  )
}

export default GithubIcon
