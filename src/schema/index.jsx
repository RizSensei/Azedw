import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username: Yup.string().min(3).max(10).required("Please enter your username"),
    // email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(5).required("Please enter your password"),
    // confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
});