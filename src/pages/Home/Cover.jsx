import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <img
        src="https://wallpaperaccess.com/full/318854.jpg"
        alt="cover"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <Stack orientation="vetical" color='white' sx={{ position: "absolute", top:'25%', left:'5%' }}>
        <Typography variant="h1">Stylish Klothes</Typography>
        <Typography variant="h6" sx={{ mb:1 }}>Best Klothes In Nepal</Typography>
        <Link to="/menu">
          <Button variant="contained" sx={{ bgcolor:'gray', borderRadius:'0%' }}>Order Now</Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Cover;
