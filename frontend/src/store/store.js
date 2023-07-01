import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import ordersReducers from './recentOrdersSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        orders:ordersReducers
    },
});

export default store;