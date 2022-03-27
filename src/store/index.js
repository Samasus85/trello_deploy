import { configureStore } from "@reduxjs/toolkit";

import columnSlice from "./column-slice";
import authSlice from "./isAuthenticatedSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        column: columnSlice.reducer,
    }
})
export default store;