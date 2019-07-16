import { GET_LEADS, CREATE_LEAD, GET_LEAD_DETAILS, EDIT_LEAD } from '../constants'
import { pageSize } from '../../config.json'

const initialState = {
    lead: null,
    leadDetails: {
            lead: null,
            notes: null
        },
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
        case EDIT_LEAD:
            return {
                ...state
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
        case GET_LEAD_DETAILS:
            return {
            ...state,
            loading: false,
            leadDetails: { lead: payload.lead, notes: payload.notes} 
        }
        default: return state
    }
}