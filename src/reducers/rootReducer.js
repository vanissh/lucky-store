import productReducer from './productReducer';
import filterReducer from './filterReducer';
import profileReducer from './profileReducer'
import favReducer from './favReducer'
import cartReducer from './cartReducer'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    product: productReducer,
    filter: filterReducer,
    profile: profileReducer,
    favorites: favReducer,
    cart: cartReducer
})