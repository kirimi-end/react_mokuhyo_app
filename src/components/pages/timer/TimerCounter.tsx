import { Box } from "@mui/system"

const TimerCounter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1661D1",
        color: "white",
        fontWeight: "bold",
        fontSize: "40px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      00:00
    </Box>
  )
}

export default TimerCounter
