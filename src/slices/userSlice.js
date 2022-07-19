import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useHttp } from '../hooks/http.hook';

export const signIn = createAsyncThunk(
    'user/signIn',
    async ({email, password}) => {
        const auth = getAuth()
        return await signInWithEmailAndPassword(auth, email, password)
            .then(data => data.user)
    }
)

export const signUp = createAsyncThunk(
    'user/signUp',
    async ({email, password}) => {
        const auth = getAuth()
        return await createUserWithEmailAndPassword(auth, email, password)
            .then(data => data.user)
    }
)

export const putOnServer = createAsyncThunk(
    'user/putOnServer',
    async ({id, favorites, cart}) => {
        const request = useHttp()
        return request('http://localhost:3001/users', 'POST', {
            id,
            favorites,
            cart
        })
    }
)

const initialState = {
    isAuth: false,
    userLoadingStatus: 'idle',
    id: null,
    email: null,
    cart: [],
    favorites: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        removeUser: state => {
            state.email = null
            state.id = null
            state.isAuth = false
        },
        addUserFavorites: (state, action) => {
            state.favorites.push(...action.payload)
        },
        addUserCart: (state, action) => {
            state.cart.push(...action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.fulfilled, (state, action) => {
                        state.email = action.payload.email
                        state.id = action.payload.uid
                        state.isAuth = !!state.email
                        state.userLoadingStatus = 'idle'
                    })
            .addCase(signIn.rejected, state => {state.userLoadingStatus = 'error'})
            .addCase(signUp.fulfilled, (state, action) => {
                        state.email = action.payload.email
                        state.id = action.payload.uid
                        state.isAuth = !!state.email
                        state.userLoadingStatus = 'idle'
                    })
            .addCase(signUp.rejected, state => {state.userLoadingStatus = 'error'})
            .addCase(putOnServer.fulfilled, state => {state.userLoadingStatus = 'idle'})
            .addCase(putOnServer.rejected, state => {state.userLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
    }
)

const {actions, reducer} = userSlice

export {reducer}

export const {
    removeUser,
    addUserFavorites,
    addUserCart
} = actions

