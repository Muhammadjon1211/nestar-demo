import { Stack } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Component } from "lucide-react";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#81c784" }}>Header Basic</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: orange[300] }}>Footer</Stack>
        </Stack>
      </>
    )
  };
};

export default withLayoutMain;