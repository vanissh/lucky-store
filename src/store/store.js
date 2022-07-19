import { configureStore } from '@reduxjs/toolkit';
import { reducer as productReducer } from '../slices/productSlice';
import { reducer as favReducer } from '../slices/favSlice';
import { reducer as cartReducer } from '../slices/cartSlice';
import { reducer as userReducer } from '../slices/userSlice';

const store = configureStore({
    reducer: {productReducer, favReducer, cartReducer, userReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;