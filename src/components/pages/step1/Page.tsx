import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material"
import { Global, css } from "@emotion/react"

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
      <TextField
        id="demo-helper-text-aligned-no-helper"
        label="Name"
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
