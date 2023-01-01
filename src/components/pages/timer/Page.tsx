import { Button } from "@mui/material"
import { Container } from "@mui/system"
import Illust from "./Illust"
import TimerCounter from "./TimerCounter"
import TimerStart from "./TimerStart"

const Page = () => {
  return (
    <div css={{ paddingTop: "40px", backgroundColor: "#D1E1FA" }}>
      <Container>
        <TimerStart />
        <TimerCounter />
      </Container>
      <Illust />
    </div>
  )
}

export default Page
