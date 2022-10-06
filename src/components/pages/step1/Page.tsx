import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material"
import { Global, css } from "@emotion/react"
import Egg from "./Egg"

const Page = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "100px" }} />
      {/* TODO: Globalは全ページに適応させたいので、共通化させる */}
      <Global
        styles={css`
          body {
            background-color: #d1e1fa;
          }
        `}
      />

      <Box sx={{ mb: 2 }}>
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
      </Box>
      <TextField
        fullWidth
        label="お名前"
        sx={{
          backgroundColor: "white",
        }}
      />
      <Box sx={{ marginTop: "200px" }} />
      <Divider
        variant="middle"
        sx={{
          borderColor: "white",
        }}
      />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="caption" gutterBottom>
          こちらでよろしいですか？
        </Typography>
      </Box>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        OK
      </Button>
    </Container>
  )
}

export default Page
