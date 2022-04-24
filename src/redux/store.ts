import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './slices/loginSlice'

export const store = configureStore({
  reducer: {
    loginUser : LoginSlice,  
  },
})