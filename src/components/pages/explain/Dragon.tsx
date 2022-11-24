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
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        p: 2,
        mt: 3,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        {dragonType === "green" && (
          <DragonFaceGreen
            css={{
              width: "50px",
              height: "auto",
            }}
          />
        )}
        {dragonType === "red" && (
          <DragonFaceRed
            css={{
              width: "50px",
              height: "auto",
            }}
          />
        )}
      </Box>
      <Typography
        sx={{
          fontWeight: "bold",
          flex: "none",
          ml: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          ml: 2,
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default Dragon
