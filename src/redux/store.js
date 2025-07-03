import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./slices/userSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
    reducer: {
        user: useReducer,
        products: productReducer
    }
});
export default store;