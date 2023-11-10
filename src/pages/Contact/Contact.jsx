import React from "react";
import Layout from "../../components/Layout/Layout";
import Topbar from "../../components/Topbar/Topbar";
import Address from "./Address";
import Form from "./Form";
import { Box, Grid } from "@mui/material";

const Contact = () => {
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
          <Grid item xs={6}>
            <Address />
          </Grid>
          <Grid item xs={6}>
            <Form />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ height: "100vh", width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.15656930384!2d85.31535457425431!3d27.71245172526845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197b2c0aed2d%3A0x426741e3dcfefb7a!2sLondon%20Pub!5e0!3m2!1sen!2snp!4v1699071130389!5m2!1sen!2snp"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Layout>
  );
};

export default Contact;
