import React from "react";
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItemIcon,
  FormControl,
  Input,
  InputAdornment,
  ListItem,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const LeftDrawer = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <Box
        sx={{
          width: "400px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
          px: 5,
          textAlign: "center",
        }}
      >
        <img
          src="https://www.azedw-react.wp-ts.com/assets/images/slidbar-logo.png"
          alt="New York"
        />

        <Box sx={{ display: {sm:'block', md:'none'}, mt:5 }}>
          <FormControl variant="standard">
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

          <List>
            <Link to="/">
              <ListItem>Home</ListItem>
            </Link>
            <Link to="/about">
              <ListItem>About</ListItem>
            </Link>
            <Link to="/menu">
              <ListItem>Category</ListItem>
            </Link>
            <Link to="/contact">
              <ListItem>Contact</ListItem>
            </Link>
          </List>
        </Box>

        <Typography sx={{ color: "gray", my: 5 }}>
          Covered the whole of her lower arm towards the viewer gregor then
          turned to look out the window
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Contact us: ++8801682530219 <br /> Mail us: eoard@gmail.com
        </Typography>
        <List>
          <ListItemIcon sx={{ color: "black" }}>
            <InstagramIcon
              sx={{ cursor: "pointer", "&:hover": { color: "orange" } }}
            />
          </ListItemIcon>
          <ListItemIcon sx={{ color: "black" }}>
            <TwitterIcon
              sx={{ cursor: "pointer", "&:hover": { color: "#0073e6" } }}
            />
          </ListItemIcon>
          <ListItemIcon sx={{ color: "black" }}>
            <YouTubeIcon
              sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
            />
          </ListItemIcon>
          <ListItemIcon sx={{ color: "black" }}>
            <PinterestIcon
              sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
            />
          </ListItemIcon>
        </List>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
