import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userSlice";

import storage from "redux-persist/lib/storage";

export default configureStore ({
    reducer : {
        cart: cartReducer,
        user: userReducer,
    },
})