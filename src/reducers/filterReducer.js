const initialState = {
    filters: []
}

const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INIT':
            return {...state}
        default: return state
    }
}

export default filterReducer