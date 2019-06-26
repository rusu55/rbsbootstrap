import {
    LOGIN_SUCCESS,
    LOG_OUT
} from '../constants'

import http from '../../services/httpService'
import { apiUrl } from '../../config.json'

export const login = ({email, password}) => async dispatch =>{
    const apiEndPoint = apiUrl + "auth" 
    
    try{
        const response = await http.post(apiEndPoint, {email, password})
       
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })
   }
   catch(err){

   }
}

export const signOut = (history) => dispatch =>{
    dispatch({
        type: LOG_OUT
    })
    history.push('/login')
}