// import { Box, Typography } from "@mui/material"
import EggTimer from "~/components/common/EggTimer"
import TimerBack from "~/components/common/TimerBack"

const Illust = () => {
  return (
    <>
      <TimerBack
        css={{
          width: "100%",
          height: "auto",
        }}
      />
      <EggTimer />
    </>
  )
}

export default Illust
