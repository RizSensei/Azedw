import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const FromOurBlog = () => {
    const images = [
        {
            image: 'https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            image: 'https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    ]

  return (
    <Box>
      <Stack sx={{ textAlign: "center" }} orientation="vertical">
        <Typography sx={{ color: "orange", fontSize: "15px" }}>
          RECENT NEWS
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: "35px", mb: 5 }}>
          From Our Blog
        </Typography>
      </Stack>

      <Box sx={{ px: {xs:4, md:10} }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12 }}
        >
          {images.map((image, index) => (
            <Grid item xs={4} md={4} key={index} sx={{}}>
              <CardMedia
                sx={{ height: {xs:150, md:250}, mb:1 }}
                image={image.image}
                title="image"
              />
              <Typography sx={{ fontSize:'12px', color:'gray', mb:1 }}>
                27 NOV, 2020 <u>FASHION</u> , <u>TREND</u>
              </Typography>
              <Typography sx={{ fontWeight:'550',fontSize:{xs:'15px',md:'20px'}, mb:1 }}>Clothing Stores understands the human nature of presenting</Typography>
              <Typography sx={{ fontSize:'10px', textDecoration:'underline' }}>READ MORE</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FromOurBlog;
