import type { SVGProps } from "react"

function TavoDev(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      >
        <path d="M 25 65 L 10 50 L 50 10 L 65 25" />
        <path d="M 75 35 L 90 50 L 50 90 L 35 75" />
      </g>
    </svg>
  )
}

export default TavoDev
