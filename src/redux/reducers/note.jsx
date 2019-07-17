import { ADD_NOTE, GET_NOTES } from '../constants'

const initialState = {
    notes : []  
}

export default function(state=initialState, action){
    const {type, payload} = action

    switch(type){
        case ADD_NOTE:
            return{
                ...state,
                notes: [ payload, ...state.notes],
               
            }
        case GET_NOTES:
            return{
                ...state,
                notes: payload                
            }
        default:
             return state
    }
}