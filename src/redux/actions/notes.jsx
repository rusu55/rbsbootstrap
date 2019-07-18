import { ADD_NOTE, GET_NOTES, DELETE_NOTE, UPDATE_NOTE } from '../constants'
import http  from '../../services/httpService'
import { apiUrl } from '../../config.json'
import { setAlert } from './alert'

export const addNote = (data, leadId) => async dispatch =>{
    const apiEndPoint = apiUrl + `notes/${leadId}`

    const result = await http.post(apiEndPoint, data)

    dispatch({
        type: ADD_NOTE,
        payload: result.data
    })

    dispatch(setAlert('Note Added', 'success'))
}

export const getNotes = (leadId) => async dispatch =>{
    
    const apiEndPoint = apiUrl +`notes/${leadId}`

    const result = await http.get(apiEndPoint)
    
    dispatch({
        type: GET_NOTES,
        payload: result.data
    })
}

export const deleteNote = (noteId) => async dispatch =>{
    const apiEndPoint = apiUrl + `notes/${noteId}`
    
    await http.delete(apiEndPoint)

    dispatch({
        type: DELETE_NOTE,
        payload: noteId
    })

    dispatch(setAlert('Note dleted!', 'danger'))
    
}

export const editCurrentNote = (data, noteId) => async dispatch =>{
    const apiEndPoint = apiUrl + `notes/${noteId}`
     const result = await http.put(apiEndPoint, data)
    
    dispatch({
        type: UPDATE_NOTE,
        payload: result.data
    })
}