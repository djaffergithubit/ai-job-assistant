import { createSlice } from "@reduxjs/toolkit";

const initialState =
  JSON.parse(localStorage.getItem("auth")) || {
    isAuth: false,
    currentUser: null,
  };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload.value;
      state.currentUser = action.payload.user || null;
      localStorage.setItem("auth", JSON.stringify(state));
    }

  },
});

export const authSelector = (state) => state.auth

export const { setAuth, setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
