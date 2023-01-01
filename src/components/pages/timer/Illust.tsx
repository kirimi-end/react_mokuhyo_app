// import { Box, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import DragonTimer from "~/components/common/DragonTimer"
import EggTimer from "~/components/common/EggTimer"
import TimerBack from "~/components/common/TimerBack"

const Illust = () => {
  return (
    <Box
      css={{
        position: "relative",
      }}
    >
      <TimerBack
        css={{
          width: "100%",
          height: "auto",
        }}
      />
      <Container>
        <Box
          css={{
            position: "absolute",
            bottom: "30px",
            left: "calc(50% - 140px)",
            width: "280px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DragonTimer />
          <EggTimer />
        </Box>
      </Container>
    </Box>
  )
}

export default Illust
