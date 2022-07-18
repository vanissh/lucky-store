import { CATEGORIES_FETCHED, SET_CATEGORY, PRODUCTS_FETCHING_ERROR, PRODUCTS_FETCHING, PRODUCTS_FETCHED, ADD_TO_FAVORITES, ADD_TO_CART, DELETE_FROM_FAVORITES } from './types'

export const fetchProducts = (request, modifyData) => dispatch => {
    dispatch(productsFetching())
      request(`http://localhost:3001/products`) 
          .then(data => modifyData(data))
          .then(data => dispatch(productsFetched(data)))
      .catch(() => productsFetchingError())
}

export const fetchCategories = request => dispatch => {
    request("http://localhost:3001/categories")
        .then(data => dispatch(categoriesFetched(data)))
}

export function categoriesFetched(data) {
    return {
        type: CATEGORIES_FETCHED,
        payload: data
    }
}

export function setActiveCategory(category){
    return {
        type: SET_CATEGORY,
        payload: category
    }
}

export function productsFetchingError (){
    return {
        type: PRODUCTS_FETCHING_ERROR
    }
}

export function productsFetching (){
    return {
        type: PRODUCTS_FETCHING
    }
}

export function productsFetched (data){
    return {
        type: PRODUCTS_FETCHED,
        payload: data
    }
}

export function addToFav (id) {
    return {
        type: ADD_TO_FAVORITES,
        payload: id
    }
}

export function addToCart (id) {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export function deleteFromFav (id) {
    return {
        type: DELETE_FROM_FAVORITES,
        payload: id
    }
}