import {configureStore} from "@reduxjs/toolkit";
import {countSlice} from "./count-slice.ts";

const store = configureStore({
    reducer: {
        count: countSlice.reducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
