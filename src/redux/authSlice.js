import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
  },

  reducers: {
    register: (state, action) => {
      state.user = action.payload;
    },

    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;