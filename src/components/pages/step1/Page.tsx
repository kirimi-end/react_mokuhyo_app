import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { Global, css } from "@emotion/react"
import Balloon from "./Balloon"
import Step1Form from "./Step1Form"

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
        <Balloon />
      </Box>
      <Step1Form />
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
