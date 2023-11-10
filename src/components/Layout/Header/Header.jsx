import React, { useState } from "react";
import LeftDrawer from "./LeftDrawer";
import NavigationMenu from "./NavigationMenu";
import TrackerButtons from "./TrackerButtons";
import {
  Box,
  Typography,
  InputAdornment,
  Tooltip,
  Button,
  Input,
  FormControl
} from "@mui/material";
import "../../../styles/headerStyles.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Box sx={{ bgcolor: "black", color: "white", p : 1, textAlign: "center" }}>
        <Typography fontSize={"14px"}>
          Join our showroom and get 25 % off ! Coupon code : Bangbang45
        </Typography>
      </Box>

      <Box
        component={"nav"}
        sx={{
          bgcolor: "white",
          color: "black",
          p: 3,
          borderBottom: "1px solid white",
        }}
      >
        <Box sx={{ display: "flex" }} justifyContent="space-between">

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button onClick={toggleDrawer}>
              <MenuOutlinedIcon sx={{ color: "gray", mr: 2 }} />
            </Button>

            <FormControl variant="standard" sx={{ display:{ xs:'none', md:'block' } }}>
              <Input
                id="input-with-icon-adornment"
                placeholder="Search for...."
                startAdornment={
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

          <NavigationMenu/>

          <TrackerButtons/>
        </Box>
      </Box>

      <LeftDrawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen}/>
    </>
  );
};

export default Header;
