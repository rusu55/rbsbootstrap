import { combineReducers } from 'redux'
import { reducer as toastr } from "react-redux-toastr"
import auth from './auth'
import alert from './alert'
import sidebar from './sideBar'
import leads from './lead'
import task from './task'

export default combineReducers({
    toastr,
    auth,
    alert,
    sidebar,
    leads,
    task
})