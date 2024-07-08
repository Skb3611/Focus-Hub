import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/app/features/userslice'
import user from '@/models/user'
export const store = configureStore({
  reducer: {
    user: userReducer
  },
})