import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: {
        isLogedIn: false,
        userData: null,
    },
    reducers: {
        login: (state, action)=>{
            state.isLogedIn = true;
            state.userData = action.payload;
        },
        logout: (state)=>{
            state.isLogedIn = false;
            state.userData = null;
        },
    }
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;