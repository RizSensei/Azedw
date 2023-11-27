import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const categories_images = [
  {
    image: "https://cdn-icons-png.flaticon.com/256/1926/1926409.png",
    title: "Men/s",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/3362/3362589.png",
    title: "Electronics",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/3109/3109884.png",
    title: "Jewellery",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/2347/2347025.png",
    title: "Women/s",
  },
];

const AzedwCategories = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: {xs:2, md:10},
        py: 5,
        mt: 10
      }}
    >
      <Typography variant="h4" fontWeight="500">
        Azedw Categories
      </Typography>
      <Typography variant="body2" color={"gray"}>
        Our campaigns, latest trends and new collections
      </Typography>
      <Box sx={{ mt:5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          {categories_images.map((item, index) => (
            <Grid item xs={3} key={index}>
              <Card sx={{ p:{xs:1, md:5}, borderRadius:'0%', boxShadow: 0 ,
            '&:hover': {
                cursor:'pointer',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: '0.3s'
            }}}>
                <img src={item.image} alt={item.title} style={{ height:'80px' }}/>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", fontSize: "14px" }}
                >
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AzedwCategories;
