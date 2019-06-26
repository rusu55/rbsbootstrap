import {
    SIDEBAR_TOGGLE
 } from '../constants'

 export const toggleSideBar = () => dispatch =>{
     dispatch({
         type: SIDEBAR_TOGGLE
     })
 }