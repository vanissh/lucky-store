import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../hooks/http.hook'
import { modifyData } from '../aux/modifyData'

export const fetchCategories = createAsyncThunk(
     'products/fetchCategories',
    () => {
        const {request} = useHttp()
        return request(`http://localhost:3001/categories`) 
    }   
)

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const {request} = useHttp()
        return await request(`http://localhost:3001/products`)
                .then(data => modifyData(data)) 
    }
)

const initialState = {
    products: {},
    categories: [],
    productsLoadingStatus: 'idle',
    activeCategory: 'Каталог'
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {state.activeCategory = action.payload},
        navigateByLabel: (state, action) => {
            state.activeCategory = state.categories.find(item => item.label === action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, state => {state.productsLoadingStatus = 'loading'})
            .addCase(fetchProducts.fulfilled, (state, action) => {
                    state.productsLoadingStatus = 'idle'
                    state.products = action.payload
                    })
            .addCase(fetchProducts.rejected, state => {state.productsLoadingStatus = 'error'})
            .addCase(fetchCategories.fulfilled, (state, action) => {state.categories = action.payload})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = productSlice

export {reducer}
export const {
    categoriesFetched,
    setActiveCategory,
    productsFetchingError,
    productsFetching,
    productsFetched,
    navigateByLabel
} = actions