import { Box, Container } from "@mui/material"
import Balloon from "../../common/Balloon"
import ConfirmButton from "../../common/ConfirmButton"
import GlobalStyles from "~/components/common/GlobalStyles"
import Egg from "~/components/common/Egg"
import Dragon from "./Dragon"

const Page = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "100px" }} />
      <GlobalStyles />
      <Box sx={{ mb: 2 }}>
        <Balloon>タスクは色によって違いがあるよ</Balloon>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Egg
          css={{
            width: "118px",
            height: "auto",
          }}
        />
      </Box>

      <Dragon />

      <Box sx={{ marginTop: "200px" }}>
        <ConfirmButton />
      </Box>
    </Container>
  )
}

export default Page
