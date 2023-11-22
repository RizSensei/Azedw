import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom'

const Topbar = ({text}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });
  return (
    <>
      <Box
        sx={{
          height: isMobile ? '30vh': '45vh',
          bgcolor: "#e5e7eb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb:2
        }}
      >
        <Box sx={{ textAlign:'center' }}>
          <Typography variant="h4" sx={{ fontWeight:'500', mb: 2 }}>{text}</Typography>
          <Typography sx={{ fontSize:'15px' }}>
            <Link to="/">Home </Link>
            &nbsp; &gt; &nbsp;<span sx={{ color:'#6b7280' }}>{text}</span></Typography>
        </Box>
      </Box>
    </>
  );
};

export default Topbar;
