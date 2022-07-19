import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    email: null,
    token: null,
    id: null,
    cart: [],
    favorites: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser: (state) => {
            state.email = null
            state.token = null
            // state.id = action.payload.id
        },
        checkAuth: (state) => {state.isAuth = !!state.email}
        }
    }
)

const {actions, reducer} = userSlice

export {reducer}

export const {
    setUser,
    removeUser,
    checkAuth
} = actions

