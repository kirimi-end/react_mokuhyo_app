import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material"
import { Global, css } from "@emotion/react"
import { relative } from "path"

const Egg = () => {
  return (
    <svg
      width="74"
      height="88"
      viewBox="0 0 74 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_94_722)">
        <path
          d="M74 50.167C74 77.8734 57.4345 87.2469 37 87.2469C16.5655 87.2469 0 77.8734 0 50.167C0 22.4605 16.5655 0 37 0C57.4345 0 74 22.4605 74 50.167Z"
          fill="white"
        />
      </g>
      <path
        d="M21.926 33.3457C32.3943 37.4471 42.1419 37.7681 52.9878 33.3457"
        stroke="black"
      />
      <circle cx="22.0534" cy="21.2038" r="1.73799" fill="black" />
      <circle cx="51.5991" cy="21.2038" r="1.73799" fill="black" />
      <defs>
        <filter
          id="filter0_ii_94_722"
          x="-2"
          y="-2"
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
            result="effect1_innerShadow_94_722"
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
            in2="effect1_innerShadow_94_722"
            result="effect2_innerShadow_94_722"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Egg
