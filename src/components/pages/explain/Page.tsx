import { Box, Container, Button, Divider, Typography } from "@mui/material"
import Balloon from "../../common/Balloon"
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

      <Box sx={{ mt: 3 }}>
        <>
          <Divider
            variant="middle"
            sx={{
              borderColor: "white",
            }}
          />
          <Box
            sx={{
              my: 3,
            }}
          >
            <Typography variant="caption" gutterBottom>
              達成頻度をあげたり、所定の条件を満たすことで、
              <br />
              より経験値をもらえます。
              <br />
              経験値を貯めて、◯◯◯◯を
              <br />
              レベルアップ & 進化させましょう。
              <br />
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
        </>
      </Box>
    </Container>
  )
}

export default Page
