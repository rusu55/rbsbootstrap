import { combineReducers } from 'redux'
import { reducer as toastr } from "react-redux-toastr"
import auth from './auth'
import alert from './alert'
import sidebar from './sideBar'

export default combineReducers({
    toastr,
    auth,
    alert,
    sidebar
})