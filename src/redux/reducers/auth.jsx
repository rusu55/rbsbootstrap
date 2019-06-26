import {
    LOGIN_SUCCESS,
    LOG_OUT
} from '../constants'
import { setHeaderJWT } from '../../services/httpService'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function(state = initialState, action){
    const { type, payload } = action

    switch(type){
        case LOGIN_SUCCESS:
                localStorage.setItem('token', payload.token)
                setHeaderJWT(localStorage.token)
                return {
                     ...state, 
                     token: payload.token,                   
                     isAuthenticated: true,
                     loading: false,
                     user: payload.user
                }
        case LOG_OUT:
                localStorage.removeItem('token')
                return {
                   // ...state,
                    //token: null,
                   // isAuthenticated: false,
                   // user: null,
                   // loading: false
                   state: undefined
               }

        default: return state
    }
}