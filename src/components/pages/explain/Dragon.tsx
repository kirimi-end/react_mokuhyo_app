import { Box, Typography } from "@mui/material"
import DragonFace from "~/components/common/DragonFace"

const Dragon = () => {
  return (
    <Box sx={{ backgroundColor: "white", p: 1 }}>
      <Box sx={{ textAlign: "center" }}>
        <DragonFace
          css={{
            width: "118px",
            height: "auto",
          }}
        />
      </Box>
      <Typography>習慣の竜</Typography>
      <Typography>
        毎日、毎週何曜日など、 決められた時に発生する竜 筋トレ、掃除、勉強など
      </Typography>
    </Box>
  )
}

export default Dragon
