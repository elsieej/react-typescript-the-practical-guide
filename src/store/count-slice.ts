import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type CountState = {
    value: number
}

const initialState: CountState = {
    value: 0,
}

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

export {countSlice}

export const {
    increment,
    decrement,
    reset
} = countSlice.actions;
