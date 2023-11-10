import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Card,
  useMediaQuery,
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useTheme } from "@emotion/react";

const SignUp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [signUpCredentials, setSignUpCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        signUpCredentials
      );
      if (response.status == 201) {
        setSignUpCredentials({
            username: "",
            password: ""
        });
        return toast.success("User Registered Successfully");
      }
    } catch (error) {
      console.error("Error:" + error);
    }
  };

  return (
    <Card sx={{ width: {xs:"100%", md:"50%"}, p: 5, mb:2 }}>
    <ToastContainer/>
      <Typography sx={{ fontWeight: "600" }}>SignUp</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
        size={ isMobile ? "small": "" }
          label="Username or Email Address"
          fullWidth
          sx={{ my: 3 }}
          value={signUpCredentials.username}
          onChange={(e) =>
            setSignUpCredentials({
              ...signUpCredentials,
              username: e.target.value,
            })
          }
          required
        />
        <br />
        <TextField
        size={ isMobile ? "small": "" }
          label="Password"
          value={signUpCredentials.password}
          onChange={(e) =>
            setSignUpCredentials({
              ...signUpCredentials,
              password: e.target.value,
            })
          }
          fullWidth
          required
        />
        <Typography
          variant="body2"
          sx={{
            my: 3,
            fontSize: {xs:'13px', md:''}
          }}
        >
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </Typography>
        <Button
          type="submit"
          variant="contained"
          sx={{ bgcolor: "black", borderRadius: "0%" }}
        >
          Register
        </Button>
      </form>
    </Card>
  );
};

export default SignUp;
