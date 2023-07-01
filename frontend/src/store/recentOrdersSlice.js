import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: 'orders',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        }
    }
})

export const { add } = ordersSlice.actions;
export default ordersSlice.reducer;