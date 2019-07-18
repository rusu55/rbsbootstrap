import { ADD_NOTE, GET_NOTES, DELETE_NOTE, UPDATE_NOTE } from '../constants'

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
        case DELETE_NOTE:
            return{
                ...state,
                notes: state.notes.filter(note => payload !== note._id)
               
            }
        case UPDATE_NOTE:
            return{
                ...state,
                notes: state.notes.map(note => note._id === payload._id ? {...note,  details: payload.details} : note)
            }
        default:
             return state
    }
}