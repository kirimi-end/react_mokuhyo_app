import { Box, Typography } from "@mui/material"
import DragonFaceGreen from "~/components/common/DragonFaceGreen"
import DragonFaceRed from "~/components/common/DragonFaceRed"

type Props = {
  dragonType: "green" | "red"
  title: string
  description: string
}

const Dragon = ({ dragonType, title, description }: Props) => {
  return (
    <Box sx={{ backgroundColor: "white", p: 1 }}>
      <Box sx={{ textAlign: "center" }}>
        {dragonType === "green" && (
          <DragonFaceGreen
            css={{
              width: "118px",
              height: "auto",
            }}
          />
        )}
        {dragonType === "red" && (
          <DragonFaceRed
            css={{
              width: "118px",
              height: "auto",
            }}
          />
        )}
      </Box>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Box>
  )
}

export default Dragon
