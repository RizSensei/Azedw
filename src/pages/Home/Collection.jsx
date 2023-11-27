import { useTheme } from "@emotion/react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Collection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });

  const images = [
    {
      image:
        "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Spring Collection",
    },
    {
      image:
        "https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Winter Collection",
    },
    {
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Wool Sweater",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
        overflowX: { xs: "scroll", md: "hidden" },
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
  );
};

export default Collection;
