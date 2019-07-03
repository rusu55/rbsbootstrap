import React from 'react'
import Moment from 'moment'
import PropTypes from 'prop-types'

import { 
     Table,
     Badge
     } from 'reactstrap'

import {
        faArrowAltCircleUp,
        faArrowAltCircleDown
    } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"   
    
const LeadsTable = ({leads, onSortChange, sortBy, orderBy}) => {
    const  renderSortIcon = (path) =>{
        if(sortBy === path && orderBy === 'asc') return (<FontAwesomeIcon
            className="align-middle mr-2"
            icon={faArrowAltCircleUp}
            fixedWidth
          /> )
        if(sortBy === path && orderBy === 'desc') return (<FontAwesomeIcon
            className="align-middle mr-2"
            icon={faArrowAltCircleDown}
            fixedWidth
          /> )
    } 
    
    return(   
        <Table className="mb-0">
                <thead>
                    <tr>
                        <th style={{ cursor: "pointer" }} onClick={()=>onSortChange('name')}>
                            Name {renderSortIcon('name')}
                        </th>
                        <th style={{ cursor: "pointer" }} onClick={()=>onSortChange('email')}>
                            Email {renderSortIcon('email')}</th>
                        <th style={{ cursor: "pointer" }} onClick={()=>onSortChange('weddingDate')}>
                            Wedding Date {renderSortIcon('weddingDate')}</th>
                        <th>Venue</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map(lead => (
                            <tr key ={ lead._id }>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{Moment(lead.weddingDate).format('YYYY/MM/DD')}</td>
                                <td>{lead.details.venue}</td>
                                <td>{lead.leadType === 'hotLead' ? (<Badge color="success" className="mr-1 mb-1">Active</Badge>) : (<Badge color="warning" className="mr-1 mb-1">Inactive</Badge>)}</td>
                            </tr>
                    ))}
                </tbody>
        </Table>
    )
 }



LeadsTable.propTypes ={
    leads: PropTypes.array.isRequired
}

export default LeadsTable