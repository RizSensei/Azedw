import React from "react";
import Layout from "../../components/Layout/Layout";
import Topbar from "../../components/Topbar/Topbar";
import Address from "./Address";
import Form from "./Form";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import Map from "./Map";

const Contact = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });

  return (
    <Layout>
      <Topbar text="Contact" />
      <Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={3}
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Address theme={theme}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Form theme={theme}/>
          </Grid>
        </Grid>
      </Box>

      <Map/>
    </Layout>
  );
};

export default Contact;
