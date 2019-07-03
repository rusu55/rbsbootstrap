import { GET_LEADS, CREATE_LEAD } from '../constants'
import { pageSize } from '../../config.json'

const initialState = {
    lead: null,
    loading: true, 
    itemsCount : 0,
    currentPage : 1,
    pageSize: pageSize,
    skip: 0,  
    sortBy: 'name',
    orderBy: 'asc',
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action

    switch(type){
        case CREATE_LEAD : 
            return {
                ...state,
                //lead: [payload, ...state.lead],
                loading: false,
                error : null,
            }
        case GET_LEADS:
            return {
                ...state,
                loading: false,
                lead: payload.leads,
                itemsCount: payload.leadsCount,
                skip: payload.skip,
                currentPage: payload.page,
                sortBy: payload.path,
                orderBy: payload.order
            }
        default: return state
    }
}