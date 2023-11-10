import {
  Box,
  Card,
  ImageList,
  ImageListItem,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";

const Instagram = () => {
  const theme = useTheme();
  const images = [
    {
      image:
        "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/3473525/pexels-photo-3473525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/2905819/pexels-photo-2905819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/3579181/pexels-photo-3579181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <Box sx={{ p: {xs:4, md:10} }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* {console.log("BREAK POINTS : ", theme.breakpoints.down("md"))} */}
        <ImageList
          sx={{ width: "95%" }}
          xs={3}
          rowHeight={useMediaQuery(theme.breakpoints.down("md")) ? 200 : 300}
          cols={useMediaQuery(theme.breakpoints.down("md")) ? 2 : 6}
        >
          {images.map((img, index) => (
            <ImageListItem key={index}>
              <img src={`${img.image}`} alt={`${img.image}`} />
            </ImageListItem>
          ))}
        </ImageList>
        <Card
          sx={{
            position: "absolute",
            bottom: "-60px",
            bgcolor: "white",
            width: {xs:"300px", md:"400px"},
            py: {xs:1, md:2},
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Follow our instagram
            </Typography>
            <Typography sx={{ color: "gray" }}>@aviwp.studio</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Instagram;
