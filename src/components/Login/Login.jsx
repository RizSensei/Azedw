import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  Card,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../../redux/features/userSlice"
import { useTheme } from "@emotion/react";

const Login = ({userData}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let existing_user = userData.find((user) => (loginCredentials.username === user.username && loginCredentials.password === user.password))
  
    if(existing_user){
      dispatch(
        login({
          username: loginCredentials.username,
          password : loginCredentials.password,
          // isAuthenticated: true,
        })
      )
    }else{
      return toast.error("Invalid Credentials")
    }
  }

  return (
    <Card sx={{ width: {xs:"100%", md:"50%"}, p: 5, mb:2 }}>
      <ToastContainer/>
      <Typography sx={{ fontWeight: "600" }}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
        size={ isMobile ? "small": "" }
          label="Username or Email Address"
          required
          fullWidth
          value={loginCredentials.username}
          onChange={(e) =>
            setLoginCredentials({
              ...loginCredentials,
              username: e.target.value,
            })
          }
          sx={{ my: 3 }}
        />
        <br />
        <TextField label="Password" 
        size={ isMobile ? "small": "" }
         value={loginCredentials.password}
         onChange={(e) =>
          setLoginCredentials({
             ...loginCredentials,
             password: e.target.value,
           })
         }
         fullWidth required />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox size="small" />
            <Typography sx={{ fontSize: {xs:'13px', md:''} }}>Remember me</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: {xs:'13px', md:''} }}>Lost your password?</Typography>
          </Box>
        </Box>
        <Button type="submit"
          variant="contained"
          sx={{ bgcolor: "black", borderRadius: "0%" }}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
