import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Box sx={{ display: {md:"flex"}, py: 10, px: 5 }}>
      <Box
        sx={{
          height: {xs:"50vh", md:'100vh'},
          width: {md:"70%"},
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <CardMedia
          sx={{ height: "100%", width: {xs:'100%', md:"60%"}, mb: 1 }}
          image="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="image"
        />
        <Box
          sx={{
            width: "400px",
            position: "absolute",
            left: {md:"150px"},
            top: "50px",
            bgcolor: "white",
            py: 10,
            px: 5,
            opacity: {xs:"60%", md:'80%'},
          }}
        >
          <Typography
            sx={{ color: "orange", fontSize: "15px", fontWeight: "600", mb: 2 }}
          >
            ABOUT US
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "600", mb: 2 }}>
            Clothes that will be your best friends
          </Typography>
          <Typography sx={{ color: "gray", mb: 2 }}>
            Compared with the size of the rest of him, waved about helplessly as
            he looked to me gregor then turned to look
          </Typography>
          <Button variant="outlined">CONTACT US</Button>
        </Box>
      </Box>

      <Box sx={{ width: {md:"30%"} }}>
        <Box sx={{ p: 5 }}>
          <Typography sx={{ fontWeight: "600", fontSize: "25px" }}>
            Our Mission
          </Typography>
          <Typography sx={{ color: "gray", fontSize:'15px' }}>
            Pitifully thin compared with the size of the rest of him, waved
            about helplessly as he looked. "What's happened to me gregor then
            turned to look out the window at the dull weather deal to the day
          </Typography>
        </Box>
        <Box sx={{ px: 5, pb: 5 }}>
          <Typography sx={{ fontWeight: "600", fontSize: "25px" }}>
            Goal Of Our Business
          </Typography>
          <Typography sx={{ color: "gray", fontSize:'15px' }}>
            Pitifully thin compared with the size of the rest of him, waved
            about helplessly as he looked. "What's happened to me gregor then
            turned to look out the window at the dull weather deal to the day
          </Typography>
        </Box>
        <Box sx={{ px: 5 }}>
          <Button
            variant="outlined"
            sx={{
              fontWeight: "600",
              borderRadius: "0%",
              fontSize: "15px",
              px: 5,
            }}
          >
            GO TO SHOP
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
