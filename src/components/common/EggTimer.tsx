type Props = {
  className?: string
}

const EggTimer = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="91"
      height="111"
      viewBox="0 0 91 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_94_2052)">
        <path
          d="M91 73.167C91 100.873 74.4345 110.247 54 110.247C33.5655 110.247 17 100.873 17 73.167C17 45.4605 33.5655 23 54 23C74.4345 23 91 45.4605 91 73.167Z"
          fill="white"
        />
      </g>
      <path
        d="M30.6104 56.3457C41.0787 60.4471 50.8262 60.7681 61.6721 56.3457"
        stroke="black"
      />
      <circle cx="30.738" cy="44.2038" r="1.73799" fill="black" />
      <circle cx="60.2839" cy="44.2038" r="1.73799" fill="black" />
      <defs>
        <filter
          id="filter0_ii_94_2052"
          x="15"
          y="21"
          width="80"
          height="89.2471"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_94_2052"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_94_2052"
            result="effect2_innerShadow_94_2052"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default EggTimer
