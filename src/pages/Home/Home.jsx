import React from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../../styles/homeStyles.css";
import { Box, useMediaQuery } from "@mui/material";
import AzedwCategories from "./AzedwCategories";
import Collection from "./Collection";
import Trending from "./Trending";
import Cover from "./Cover";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });

  return (
    <Layout>
      <Cover/>
      <Collection theme ={theme}/>
      <AzedwCategories/>
      {/* <Trending/> */}
    </Layout>
  );
};

export default Home;
