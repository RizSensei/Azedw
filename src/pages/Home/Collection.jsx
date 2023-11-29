import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React from "react";
import Collection_lg from "./Collection_lg";
import Collection_xs from "./Collection_xs";

const Collection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
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
  return <>{isMobile ? <Collection_xs images={images} isMobile={isMobile}/> : <Collection_lg images={images}/>}</>;
};

export default Collection;
