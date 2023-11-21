import { createSlice } from "@reduxjs/toolkit";

const localStorageUser =
  localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user"))
    : null;
// console.log(localStorageUser)

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      data: localStorageUser,
      isAuthenticated: localStorageUser !== null,
    },
    checkout: {
      data: [],
    },
  },
  reducers: {
    login: (state, action) => {
      state.user.data = action.payload;
      state.user.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(state.user.data));
    },
    logout: (state) => {
      state.user.data = null;
      state.user.isAuthenticated = false;
      localStorage.removeItem("user");
    },
    checkout: (state, action) => {
        state.checkout.data = action.payload;
      },
  },
});

export const { login, logout, checkout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectCart = (state) => state.user.checkout;

export default userSlice.reducer;
