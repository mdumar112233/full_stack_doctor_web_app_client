import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: 'doctor',
    initialState: {
        isLogin : '' 
    },
    reducers: {
        loginUser: (state, action) => {
            state.isLogin = action.payload
        }
    }
})

export const {loginUser} = LoginSlice.actions;

export default LoginSlice.reducer;


