import { configureStore } from '@reduxjs/toolkit';
import { reducer as productReducer } from '../slices/productSlice';
import { reducer as favReducer } from '../slices/favSlice';
import { reducer as cartReducer } from '../slices/cartSlice';
import { reducer as profileReducer } from '../slices/profileSlice';

const store = configureStore({
    reducer: {productReducer, favReducer, cartReducer, profileReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;