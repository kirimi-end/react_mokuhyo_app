import { TextField } from "@mui/material"
import type { UseFormReturn } from "react-hook-form"
import type { Step1FormFields } from "./Step1Form.types"

type Props = {
  methods: UseFormReturn<Step1FormFields>
}

const Step1Form = ({ methods: { register } }: Props) => {
  return (
    <TextField
      fullWidth
      label="お名前"
      sx={{
        backgroundColor: "white",
      }}
      {...register("name")}
    />
  )
}

export default Step1Form
