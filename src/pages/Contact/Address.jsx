import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";

const Address = () => {
  return (
    <>
      <Box sx={{}}>
        <Grid container columnSpacing={5} rowSpacing={5} sx={{}}>
          <Grid item xs={4} sx={{ textAlign:'right' }}>
            <MapsHomeWorkOutlinedIcon
              sx={{
                fontSize: 52,
                color: "gray",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ fontWeight: "600" }}>Office Address</Typography>
            <Typography sx={{ color: "gray" }}>
              Ailded frame showed a lady fitted out with fur hat <br/> and fur boa who
              sat upright
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign:'right' }}>
            <LocalPhoneOutlinedIcon
              sx={{
                fontSize: 52,
                color: "gray",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ fontWeight: "600" }}>Phone number</Typography>
            <Typography sx={{ color: "gray" }}>
              54875465-65741895-6547 <br /> 2222-3333-4444-555
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign:'right' }}>
            <MarkEmailReadOutlinedIcon
              sx={{
                fontSize: 52,
                color: "gray",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ fontWeight: "600" }}>Email us</Typography>
            <Typography sx={{ color: "gray" }}>
              Admin@mail.com <br />
              example@mail.com
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign:'right' }}>
            <AccessAlarmsOutlinedIcon
              sx={{
                fontSize: 52,
                color: "gray",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ fontWeight: "600" }}>Office time</Typography>
            <Typography sx={{ color: "gray" }}>
              10AM - 5 PM, Sunday closed
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Address;
