import { Box, Container } from "@mui/material"
import Balloon from "../../common/Balloon"
import Step1Form from "./Step1Form"
import ConfirmButton from "../../common/ConfirmButton"
import GlobalStyles from "~/components/common/GlobalStyles"
import { useForm } from "react-hook-form"
import type { Step1FormFields } from "./Step1Form.types"

const Page = () => {
  const methods = useForm<Step1FormFields>()
  const { handleSubmit } = methods
  const onSubmit = ({ name }: Step1FormFields) => {
    console.log(name)
  }

  return (
    <Container>
      <Box sx={{ marginTop: "100px" }} />
      <GlobalStyles />
      <Box sx={{ mb: 2 }}>
        <Balloon>飼い主の、あなたのお名前を教えてください！</Balloon>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Step1Form methods={methods} />
        <Box sx={{ marginTop: "200px" }}>
          <ConfirmButton />
        </Box>
      </form>
    </Container>
  )
}

export default Page
