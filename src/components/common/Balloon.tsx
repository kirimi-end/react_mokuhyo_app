import { Grid, Typography } from "@mui/material"
import Egg from "./Egg"

type Props = {
  children: React.ReactNode
}

const Balloon = ({ children }: Props) => {
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
          {children}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Balloon
