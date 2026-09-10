import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Stack, Container } from "@mui/material";
import { green, grey, orange } from "@mui/material/colors";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default withLayoutMain(Home);