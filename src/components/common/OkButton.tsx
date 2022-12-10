import { Button } from "@mui/material"

const OkButton = () => {
  return (
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
  )
}

export default OkButton
