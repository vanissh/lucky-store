import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {state.cart.push(action.payload)}
    }
})

const {actions, reducer} = cartSlice

export {reducer}
export const {
    addToCart
} = actions