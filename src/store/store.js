import { configureStore } from '@reduxjs/toolkit';
import { reducer as productReducer } from '../slices/productSlice';
import { reducer as favReducer } from '../slices/favSlice';
import { reducer as cartReducer } from '../slices/cartSlice';

const store = configureStore({
    reducer: {productReducer, favReducer, cartReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;