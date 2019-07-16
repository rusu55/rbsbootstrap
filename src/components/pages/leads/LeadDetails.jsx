import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getLeadDetails, editLead } from '../../../redux/actions/leads'

import {
    Container,
    Row,
    Col
    } from 'reactstrap'
    
import CardsTabs from './components/CardsTabs'
import ContractTab from './components/ContractTab'
import ProfileTab from './components/ProfileTab';

 

 const LeadDetails = ({match, getLeadDetails, editLead, lead: {loading, leadDetails: {lead, notes}}}) =>{
    useEffect(()=>{getLeadDetails(match.params.id)}, [getLeadDetails])
    
    const handleAction = (actionType) =>{
        console.log(actionType)
    }
   //const { notes, lead } = leadDetails
   //console.log(lead)
    return(
       // leadDetails ? `Lead Detail ${leadDetails.name}` : 'Nothing'
       <Container fluid className="p-0">
           <h1 className="h3 mb-3">Lead Profile</h1>
           <Row>
                <Col md="4" xl="3">
                   <ProfileTab details={lead} onAction={handleAction} />
                </Col>
                <Col md="8" xl="9">
                    <CardsTabs notes={notes} onAction={handleAction} />
                    <ContractTab />
                </Col>
           </Row>
       </Container>
    )
}

const mapStateToProps = state =>({
    lead: state.leads
})
export default connect(mapStateToProps, {getLeadDetails, editLead})(LeadDetails)