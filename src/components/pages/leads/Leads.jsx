import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLeads } from '../../../redux/actions/leads'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap'

import LeadsTable from './LeadsTable'
import AddNewLead from './AddNewLead'
import LeadsSticker from './LeadsSticker'
import Spinner from '../../commons/elements/spinner'
import Pagination from '../../commons/elements/pagination'

const Leads = ({getLeads, auth: {user}, leads: {lead, loading, itemsCount, currentPage, pageSize, skip, sortBy, orderBy}}) =>{
    useEffect(()=>{ getLeads(skip,currentPage, sortBy, orderBy)}, [getLeads, skip, currentPage, sortBy, orderBy])

    const handlePageChange = (page) =>{
       // console.log(page)
        const skip = pageSize*page - pageSize
        getLeads(skip, page, sortBy, orderBy)
    }

    const handleSortChange = (path) =>{
        let order = ''
        sortBy === path && orderBy  === 'asc' ? order = 'desc' : order = 'asc'
        getLeads(skip, currentPage, path, order)
    }

    return(
            <Container fluid className="p-0">
                <h1 className="h3 mb-3">Leads Page</h1>
                <Row>
                    <Col xl="8">
                        <Card>                                                                                      
                            <CardBody>
                            <AddNewLead />   
                                 {loading ? <Spinner/> : <LeadsTable leads={lead} onSortChange={handleSortChange} sortBy={sortBy} orderBy={orderBy} />} 
                                <Pagination itemsCount={itemsCount} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />     
                            </CardBody>
                        </Card>                                          
                    </Col>
                    <Col xl="4">
                        <LeadsSticker />
                    </Col>
                </Row>
            </Container>
    )
}

Leads.propTypes ={
    getLeads: PropTypes.func.isRequired,
    leads: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth : state.auth,
    leads: state.leads
})

export default connect(mapStateToProps, {getLeads})(Leads)