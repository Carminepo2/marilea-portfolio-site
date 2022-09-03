import type { FunctionComponent, ComponentProps } from "preact"

interface Props extends ComponentProps<"svg"> {}

const FiverrIcon: FunctionComponent<Props> = (props) => {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <circle cx="256" cy="256" id="ellipse" r="256" />
      <path
        d="M297,137c0,17,13.8,30.8,31,30.8c17,0,30.8-13.8,30.8-30.8c0-17.2-13.8-31-30.8-31  C310.8,106,297,119.8,297,137L297,137z M223.5,111.1c-40,0-65.9,23.8-71,48.2c-0.5,2.9-1,5.8-1,8.7v22.8h-26.9v45.3h26.9v103h-26.9  V386c39,0,78.1,0,117.1,0v-46.8h-27.2v-103h81.9v103h-26.4V386c39,0,78.3,0,117.3,0v-46.8h-27.9V190.8h-145v-13.6  c0-11.2,10.9-17.9,20.1-17.9h22.5v-48.2H223.5z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export default FiverrIcon
