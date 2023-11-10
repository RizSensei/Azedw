import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import FooterTypo from "./FooterTypo";


const Footer = () => {
  return (
    <>
      <Box sx={{}}>
        <Box sx={{ p: 5, bgcolor: "#f1f1f1" }}>
          <Grid container spacing={3} sx={{ display:'flex', justifyContent:'center' }}  columns={{ xs: 4, sm: 8, md: 12 }}>

            <Grid item xs={4} sm={8} md={5} rowSpacing={5}>
              <Typography sx={{ fontWeight: "600", mb: 2 }}>
                Sign Up Now & Get 10% Off
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Get timely updates from your favorite products
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  size="small"
                  required
                />
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#1A1A19", borderRadius: "0px" }}
                >
                  SUBSCRIBE
                </Button>
              </Box>
            </Grid>

            <Grid item xs={4} sm={8} md={3}>
              <Typography sx={{ fontWeight: "600", mb: 2 }}>
                Contact info
              </Typography>
              <FooterTypo text={'Phone : 888-999-000-1425'}/>
              <FooterTypo text={'Email: azedw@mail.com'}/>
              <FooterTypo text={'Address: 22/1 natinoal city austria, dreem land, Huwai'}/>
            </Grid>

            <Grid item xs={4} sm={8} md={2}>
              <Typography sx={{ fontWeight: "600", mb: 2 }}>Company</Typography>
              <FooterTypo text={'About us'}/>
              <FooterTypo text={'Best services'}/>
              <FooterTypo text={'Recent insight'}/>
              <FooterTypo text={'Shipping guid'}/>
              <FooterTypo text={'Privacy policy'}/>
            </Grid>
            
            <Grid item xs={4} sm={8} md={2}>
              <Typography sx={{ fontWeight: "600", mb: 2 }}>
                Payment & Shipping
              </Typography>
              <FooterTypo text={'Payment method'}/>
              <FooterTypo text={'Terms of use'}/>
              <FooterTypo text={'Shipping policy'}/>
              <FooterTypo text={'Shipping guide'}/>
              <FooterTypo text={'Return policy'}/>
            </Grid>

          </Grid>
        </Box>
        <Box sx={{ bgcolor: "#1A1A19", color: "white", p: 3 }}>
          <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
            All Rights Reserved &copy; Techinfo YT
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
