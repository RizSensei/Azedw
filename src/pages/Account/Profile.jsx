import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/userSlice";

const Profile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOutClick = (e) => {
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ width: {xs:100, md:200}, height: {xs:100, md:200}, mb:2 }}>A</Avatar>
      <Typography sx={{ mb:2 }}>You are logged in, {user.data.username} !!!</Typography>
      <Button
        onClick={(e) => handleLogOutClick(e)}
        variant="contained"
        color="error"
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Profile;
