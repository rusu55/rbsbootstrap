import { SIDEBAR_TOGGLE } from '../constants'

const initialState = {
    isOpen : true
}

export default function(state = initialState, action){
    const { type } = action

    switch(type) {
        case SIDEBAR_TOGGLE:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default: return state   
    }
}