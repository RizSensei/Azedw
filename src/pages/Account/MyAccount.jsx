import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Topbar from "../../components/Topbar/Topbar";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Profile from "./Profile";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { selectUser } from "../../redux/features/userSlice";
import { useSelector } from "react-redux";

const MyAccount = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const user = useSelector(selectUser)
    const [userData, setUserData] = useState([])

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
      defaultMatches: true
    });
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch("http://localhost:3000/users");
          const json = await response.json();
          setUserData(json);
        } catch (error) {
          console.error("Unable to fetch User");
        }
      };
      fetchUser();
    }, []);

  return (
    <Layout>
      <Topbar text="My Account" />
      <Box sx={{ p:{xs:5, md: 10}, display:{xs:'block', md:'flex'}, justifyContent:'center', columnGap:5 }}>
        {!user  ? 
        <>
        <Login userData={userData}/>
        <SignUp />
        </>
        :
        <>
        <Profile/>
        </>   
        }
      </Box>
    </Layout>
  );
};

export default MyAccount;
