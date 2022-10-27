import { Box, Container } from "@mui/material"
import Balloon from "../../common/Balloon"
import ConfirmButton from "../../common/ConfirmButton"
import GlobalStyles from "~/components/common/GlobalStyles"

const Page = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "100px" }} />
      <GlobalStyles />
      <Box sx={{ mb: 2 }}>
        <Balloon>ぼくの名前をつけてね！</Balloon>
      </Box>
      <Box sx={{ marginTop: "200px" }}>
        <ConfirmButton />
      </Box>
    </Container>
  )
}

export default Page
