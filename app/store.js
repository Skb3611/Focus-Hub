import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/app/features/userslice'


export const store = configureStore({
  reducer: {
    user: userReducer,

  },
})