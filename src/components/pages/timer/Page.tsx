import { Button } from "@mui/material"
import { Container } from "@mui/system"
import Illust from "./Illust"
import TimerCounter from "./TimerCounter"

const Page = () => {
  return (
    <div css={{ padding: "0px" }}>
      <Container>
        <TimerCounter />
      </Container>
      <Illust />
    </div>
  )
}

export default Page
