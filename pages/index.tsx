import { Box, Stack, Container } from "@mui/material";
import { green, grey, orange } from "@mui/material/colors";

export default function Home() {
  return (
    <>
      <Stack sx={{ background: "#81c784" }}>Header</Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
      <Stack sx={{ background: orange[300] }}>Footer</Stack>
    </>
  )
}
