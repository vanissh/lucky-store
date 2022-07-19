import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useHttp } from '../hooks/http.hook';


export const signIn = createAsyncThunk(
    'user/signIn',
    ({email, password}) => {
        const auth = getAuth()
        // const request = useHttp()
        return signInWithEmailAndPassword(auth, email, password)
            .then(data => data.user)
    }
)

export const signUp = createAsyncThunk(
    'user/signUp',
    ({email, password}) => {
        const auth = getAuth()
        return createUserWithEmailAndPassword(auth, email, password)
            .then(data => data.user)
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
        setUser: (state, action) => {
            state.email = action.payload.email
            state.id = action.payload.id
        },
        removeUser: (state) => {
            state.email = null
            state.id = null
            state.isAuth = false
        },
        checkAuth: (state) => {state.isAuth = !!state.email}
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
            .addDefaultCase(() => {})
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

