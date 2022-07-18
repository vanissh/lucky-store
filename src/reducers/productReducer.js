import { CATEGORIES_FETCHED, SET_CATEGORY, PRODUCTS_FETCHING_ERROR, PRODUCTS_FETCHING, PRODUCTS_FETCHED } from '../actions/types'

const initialState = {
    products: {},
    categories: [],
    productsLoadingStatus: 'idle',
    activeCategory: 'Каталог'
}

function productReducer(state = initialState, action){
    switch (action.type) {
        case CATEGORIES_FETCHED:
            return {...state, categories: action.payload}
        case SET_CATEGORY:
            return {...state, activeCategory: action.payload}
        case PRODUCTS_FETCHING:
            return {...state, productsLoadingStatus: 'loading'}
        case PRODUCTS_FETCHED:
            return {...state, productsLoadingStatus: 'idle', products: action.payload}
        case PRODUCTS_FETCHING_ERROR:
            return {...state, productsLoadingStatus: 'error'}
        default: return state
    }
}

export default productReducer