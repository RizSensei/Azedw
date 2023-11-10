import {createSlice} from '@reduxjs/toolkit'

const localStorageUser = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : []

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: localStorageUser,
    },
    reducers: {
        login : (state, action) => {
            state.user = action.payload;

            localStorage.setItem('user', JSON.stringify(state.user))
        },
        logout : (state) => {
            state.user = null;
            localStorage.removeItem('user')
        },
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;