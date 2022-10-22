import { Box, Button, Divider, Typography } from "@mui/material"

const ConfirmButton = () => {
  return (
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
  )
}

export default ConfirmButton
