import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Card,
  useMediaQuery,
  Box,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schema";

const initialValues = {
  username: "",
  password: "",
};

const SignUp = ({userData}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {

        try {
          let existing_user = userData.find((user) => (values.username === user.username));
          if(existing_user){
            return toast.warning("User with same username alreasy exists!!!")
          }else{
            const response = await axios.post(
            "http://localhost:3000/users",
            values
          );
          if (response.status == 201) {
            action.resetForm();
            return toast.success("User Registered Successfully");
          }
          }
        } catch (error) {
          console.error("Error:" + error);
        }
      },
    });

  return (
    <Card sx={{ width: { xs: "100%", md: "50%" }, p: 5, mb: 2 }}>
      {/* <ToastContainer /> */}
      <Typography sx={{ fontWeight: "600" }}>SignUp</Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ my: 3 }}>
          <TextField
            size={isMobile ? "small" : ""}
            label="Username or Email Address"
            fullWidth
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <Typography sx={{ color: "red", fontSize: "14px" }}>
              {errors.username}
            </Typography>
          ) : null}
        </Box>
        <Box>
          <TextField
            size={isMobile ? "small" : ""}
            type="password"
            name="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {errors.password && touched.password ? (
            <Typography sx={{ color: "red", fontSize: "14px" }}>
              {errors.password}
            </Typography>
          ) : null}
        </Box>

        <Typography
          variant="body2"
          sx={{
            my: 3,
            fontSize: { xs: "13px", md: "" },
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
