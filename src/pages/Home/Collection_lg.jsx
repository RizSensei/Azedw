import React from 'react'
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

const Collection_lg = ({images}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
        // overflowX: { xs: "scroll", md: "hidden" },
      }}
      columnGap={2}
    >
      {images?.map((img, index) =>
        
          <Box
            key={index}
            sx={{
              position: "relative",
              "&:nth-child(2)": {
                bottom: 30,
              },
            }}
          >
            <img src={img.image} alt={img.title} height={550} />
            <Stack
              orientation="vertical"
              sx={{
                bgcolor: "white",
                p: 5,
                position: "absolute",
                bottom: 50,
                left: 50,
              }}
            >
              <Typography sx={{ fontWeight: "600" }}>{img.title}</Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                SHOP NOW
              </Typography>
            </Stack>
          </Box>
      )}
    </Box>
  )
}

export default Collection_lg