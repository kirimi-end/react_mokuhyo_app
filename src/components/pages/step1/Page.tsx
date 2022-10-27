import { Box, Container } from "@mui/material"
import Balloon from "../../common/Balloon"
import Step1Form from "./Step1Form"
import ConfirmButton from "../../common/ConfirmButton"
import GlobalStyles from "~/components/common/GlobalStyles"

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
        <ConfirmButton />
      </Box>
    </Container>
  )
}

export default Page
