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
            const index = state.notes.findIndex(obj => obj._id === payload._id)
            console.log(index)
            return{
                ...state
                //notes: state.notes.findIndex(obj => obj._id === payload._id) > -1 ? 
                       // state.notes
            }
        default:
             return state
    }
}