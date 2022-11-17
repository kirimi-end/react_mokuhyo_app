import { Box, Typography } from "@mui/material"
import DragonFace from "~/components/common/DragonFace"

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
          <DragonFace
            css={{
              width: "118px",
              height: "auto",
            }}
          />
        )}
        {dragonType === "red" && (
          <DragonFace
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
