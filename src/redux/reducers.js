import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: sessionStorage.getItem("email") || "",
        token: sessionStorage.getItem("token") || "",
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const { setEmail, setToken } = userSlice.actions;

export const userReducer = userSlice.reducer;