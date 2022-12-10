import { Box, Container, Button, Divider, Typography } from "@mui/material"
import Balloon from "../../common/Balloon"
import Step1Form from "./Step1Form"
import GlobalStyles from "~/components/common/GlobalStyles"
import OkButton from "~/components/common/OkButton"

const Page = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "100px" }} />
      <GlobalStyles />
      <Box sx={{ mb: 2 }}>
        <Balloon>飼い主の、あなたのお名前を教えてください！</Balloon>
      </Box>
      <Step1Form />
      <Box sx={{ marginTop: "200px" }}>
        <>
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
          <OkButton />
        </>
      </Box>
    </Container>
  )
}

export default Page
