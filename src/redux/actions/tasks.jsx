import { GET_TASKS, TASKS_ERROR, SET_TASK, CREATE_TASK } from '../constants'
import { apiUrl } from '../../config.json'
import http from '../../services/httpService'
import { setAlert } from '../actions/alert'

export const getTasks = () => async dispatch =>{
    const apiEndPoint = apiUrl + 'tasks'

    const result = await http.get(apiEndPoint)

    dispatch({
        type: GET_TASKS,
        payload: result.data
    })
}

export const getTasksByOwner = ( id ) => async dispatch =>{
    const apiEndPoint = apiUrl + `tasks/owner/${id}`

    const result = await http.get(apiEndPoint)
    dispatch({
        type: GET_TASKS,
        payload: result.data
    })
}

export const setTask = id => async dispatch =>{
    const apiEndPoint = apiUrl + `tasks/${id}`

    const result = await http.put(apiEndPoint, id)
    dispatch({
        type: SET_TASK,
        payload: id
    })
}

export const createNewTask = data => async dispatch =>{
    const apiEndPoint = apiUrl + "tasks"
    const result = await http.post(apiEndPoint, data)
    dispatch({
        type: CREATE_TASK,
        payload: result.data
    })
}