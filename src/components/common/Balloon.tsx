import { Grid, Typography } from "@mui/material"
import Egg from "./Egg"

const Balloon = () => {
  return (
    <Grid container>
      <Grid item xs={3} sm={2}>
        <Egg />
      </Grid>
      <Grid item xs={9} sm={10}>
        <Typography
          sx={{
            backgroundColor: "white",
            p: 2,
            position: "relative",
            "&::before": {
              content: "''",
              position: "absolute",
              top: "calc(50% - 10px)",
              left: "-10px",
              width: "20px",
              height: "20px",
              backgroundColor: "white",
              transform: "rotate(45deg)",
            },
          }}
        >
          飼い主の、あなたのお名前を 教えてください！
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Balloon
