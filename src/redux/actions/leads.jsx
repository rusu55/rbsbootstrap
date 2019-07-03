import { GET_LEADS, CREATE_LEAD } from '../constants'
import { setAlert } from './alert'
import http from '../../services/httpService'
import { apiUrl, pageSize } from '../../config.json'

export const getLeads = (skip, page, path, order) => async dispatch =>{
    const apiEndPoint  = apiUrl + `leads?limit=${pageSize}&skip=${skip}&sortBy=${path}:${order}`

    const result = await http.get(apiEndPoint)
    const {leads, leadsCount} = result.data

    dispatch({
        type: GET_LEADS,
        payload: {leads, leadsCount, skip, page, path, order}
    })
}

export const createNewLead = (data, history) => async dispatch =>{
    const apiEndPoint = apiUrl + "leads"

    await http.post(apiEndPoint,data)
    
    dispatch({
        type: CREATE_LEAD,
        payload: data
    })
    dispatch(setAlert("New Lead Added!", 'success'))
    history.push('/leads')
}