import React from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import BannerImage from "../../images/back.jpg";
import "../../styles/homeStyles.css";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <Box
        className="home"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="headerContainer">
          <h1>Stylish Klothes</h1>
          <p>Best Klothes In Nepal</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </Box>
    </Layout>
  );
};

export default Home;
