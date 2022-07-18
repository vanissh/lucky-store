import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorites: []
}

const favSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFav: (state, action) => {state.favorites.push(action.payload)},
        deleteFromFav: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload)
        }
    }

})

const {actions, reducer} = favSlice

export {reducer}
export const {
    addToFav,
    deleteFromFav
} = actions