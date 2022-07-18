import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        init: state => state
        }
    }
)

const {actions, reducer} = profileSlice

export {reducer}
// export const {
//     addToFav,
//     deleteFromFav
// } = actions

