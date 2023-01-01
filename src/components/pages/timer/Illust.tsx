// import { Box, Typography } from "@mui/material"
import DragonTimer from "~/components/common/DragonTimer"
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
      <DragonTimer />
    </>
  )
}

export default Illust
