import {
    SET_ALERT,
    REMOVE_ALERT
    } from '../constants'

const initialState = []

export default function(state = initialState, action){
    const {type, payload} = action

    switch(type){
        case SET_ALERT:
            return [...state, payload]
            case REMOVE_ALERT:
                return state.filter(alert=> alert._id === payload)
        default: return state
    }
}