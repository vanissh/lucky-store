import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from '../actions/types'

const initialState = {
    favorites: []
}

function favReducer(state = initialState, action){
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {...state, favorites: [...state.favorites, action.payload]}
        case DELETE_FROM_FAVORITES:
            return {...state, favorites: state.favorites.filter(item => item !== action.payload)}
        default: return state
    }
}

export default favReducer