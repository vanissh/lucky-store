import { } from '../actions/types'


const initialState = {
    isAuth: false,
    userName: '',
    userEmail: ''
}

function profileReducer(state = initialState, action){
    switch (action.type) {
        case 'INIT':
            return state
        default: return state
    }
}

export default profileReducer