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

      <Dragon
        dragonType="green"
        title="習慣の竜"
        description="毎日、毎週何曜日など、決められた時に発生する竜。筋トレ、掃除、勉強など"
      />
      <Dragon
        dragonType="red"
        title="単発の竜"
        description="単発のもの。今日だけや、腰が重い仕事、初めてやりたいことなど"
      />

      <Box sx={{ marginTop: "200px" }}>
        <ConfirmButton />
      </Box>
    </Container>
  )
}

export default Page
