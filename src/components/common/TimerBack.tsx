type Props = {
  className?: string
}

const TimerBack = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="375"
      height="156"
      viewBox="0 0 375 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_515_324)">
        <path
          d="M74.1384 135.184L-6.42292 115.359L-66.2613 155.504H407L346.423 114.864L265.862 134.688L169.845 105L74.1384 135.184Z"
          fill="#5C913B"
        />
        <path
          d="M111.66 135.155L47.9249 115.349L0.584453 155.456H375L327.075 114.854L263.34 134.66L187.378 105L111.66 135.155Z"
          fill="#ABCF96"
        />
        <path
          d="M195.5 66L198.51 82.2366L210.489 70.8701L203.38 85.7749L219.752 83.6201L205.24 91.5L219.752 99.3799L203.38 97.2251L210.489 112.13L198.51 100.763L195.5 117L192.49 100.763L180.511 112.13L187.62 97.2251L171.248 99.3799L185.76 91.5L171.248 83.6201L187.62 85.7749L180.511 70.8701L192.49 82.2366L195.5 66Z"
          fill="#FFD600"
        />
      </g>
      <defs>
        <clipPath id="clip0_515_324">
          <rect width="375" height="156" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default TimerBack
