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
import { login } from "../../redux/features/userSlice";
import { useTheme } from "@emotion/react";
import { Formik } from "formik";

const Login = ({ userData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const dispatch = useDispatch();

  return (
    <Card sx={{ width: { xs: "100%", md: "50%" }, p: 5, mb: 2 }}>
      <ToastContainer />
      <Typography sx={{ fontWeight: "600" }}>Login</Typography>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={ (values) => {
          let existing_user = userData.find(
            (user) =>
              values.username === user.username &&
              values.password === user.password
          );
          console.log("error456")

          if (existing_user) {
            dispatch(
              login({
                username: values.username,
                password: values.password,
              })
            );
          } else {
            console.log("error")
            toast.error("Invalid Credentials");
          }
        }}
      >
        {({
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              size={isMobile ? "small" : ""}
              label="Username or Email Address"
              required
              fullWidth
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ my: 3 }}
            />
            <br />
            <TextField
              label="Password"
              type="password"
              name="password"
              size={isMobile ? "small" : ""}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              required
            />
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
                <Typography sx={{ fontSize: { xs: "13px", md: "" } }}>
                  Remember me
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: { xs: "13px", md: "" } }}>
                  Lost your password?
                </Typography>
              </Box>
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: "black", borderRadius: "0%" }}
            >
              Login
            </Button>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default Login;
