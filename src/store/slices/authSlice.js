import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  email: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
        state.isAuth = true;
        state.email = action.payload;
    },
    unauthorize: (state) => {
        state.isAuth = false;
        state.email = null;
    }
  },
})

export const { authorize, unauthorize } = authSlice.actions

export default authSlice.reducer