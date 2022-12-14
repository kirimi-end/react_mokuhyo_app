import { Box, Container, Stack, TextField, Typography } from "@mui/material"
import Balloon from "../../common/Balloon"
import ConfirmButton from "../../common/ConfirmButton"
import GlobalStyles from "~/components/common/GlobalStyles"
import Egg from "~/components/common/Egg"

const Page = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "100px" }} />
      <GlobalStyles />
      <Box sx={{ mb: 2 }}>
        <Balloon>ぼくの名前をつけてね！</Balloon>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Egg
          css={{
            width: "118px",
            height: "auto",
          }}
        />
      </Box>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Stack spacing={2}>
          <Typography>この子の名前は</Typography>
          <TextField
            sx={{
              backgroundColor: "white",
            }}
          />
          <Typography>だよ!</Typography>
        </Stack>
      </Box>

      <Box sx={{ marginTop: "200px" }}>
        <ConfirmButton />
      </Box>
    </Container>
  )
}

export default Page
