import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: 'doctor',
    initialState: {
        isLogin : '' 
    },
    reducers: {
        loginUser: (state, action) => {
            state.isLogin = action.payload
        },
        userLogout: (state, action) => {
            state.isLogin = ''
        }
    }
})

export const {loginUser, userLogout} = LoginSlice.actions;

export default LoginSlice.reducer;


