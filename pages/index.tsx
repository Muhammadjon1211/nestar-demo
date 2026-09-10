import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Stack, Container } from "@mui/material";
import { green, grey, orange } from "@mui/material/colors";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <Stack flexDirection={"column"}>
        <Box>Popular Properties</Box>
        <Box>Top Agents</Box>
        <Box>Top Properties</Box>
        <Box>Events</Box>
      </Stack>
    </Container>
  )
}

export default withLayoutMain(Home);