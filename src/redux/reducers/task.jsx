import { GET_TASKS, TASKS_ERROR, SET_TASK, CREATE_TASK} from '../constants'

const inistialState = {
    tasks : [],
    finished: [],
    loading: true,
    error: {}
}

export default function(state = inistialState, action){
    const { type, payload } = action
    //let tasks =[] 

    switch(type){
        case GET_TASKS: 
            return {
                ...state,
                tasks: payload,
                loading: false
            } 
        case SET_TASK:                              
            return {                               
                ...state,
                finished: state.finished.findIndex(obj => obj === payload) > -1 ? state.finished.filter(finish => payload !== finish) :
                [payload, ...state.finished] 
                
               // finished:                          
            }
        case CREATE_TASK:
            return{
                ...state,
                tasks: [ payload, ...state.tasks],
                loading: false
            }
        default: return state
    }
}