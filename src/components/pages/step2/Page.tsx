import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  Button,
  Divider,
} from "@mui/material"
import Balloon from "../../common/Balloon"
import GlobalStyles from "~/components/common/GlobalStyles"
import Egg from "~/components/common/Egg"
import OkButton from "~/components/common/OkButton"

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
