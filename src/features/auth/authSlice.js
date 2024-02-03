388888888// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './authActions'

const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false
            state.success = true // registration successful
        })
        builder.addCase(registerUser.rejected, (state, action, { payload }) => {
            state.loading = false
            state.error = payload
        })
    }
})
export default authSlice.reducer