import React, { Component, Fragment } from 'react'
import Moment from 'moment'
import {
        Card,
        CardHeader,
        CardBody,
        CardText,
        CardTitle,
        TabContent,
        TabPane,
        Nav,
        NavItem,
        NavLink,
        Media,
        Badge
    } from 'reactstrap'

import { connect } from 'react-redux'
import AddNewNote from './modals/AddNewNote'
import { getNotes } from '../../../../redux/actions/notes'

class CardsTabs extends Component {
    state = {
        activeTab: '1'
    }
    toggle = (tab) =>{
        if(this.state.activeTab !== tab){
            this.setState({
                activeTab: tab
            })
        }
    }
    
    componentDidMount(){
        this.props.getNotes(this.props.leadId)
    }
    
    render(){
        
        return(
            <Card>
                <CardHeader>
                    <Nav tabs className="card-header-tabs">
                        <NavItem>
                            <NavLink  
                                className={this.state.activeTab === '1' ? 'active' : ''}                     
                                 onClick={() => {
                                   this.toggle("1");
                                 }}
                                 href="#"
                               >Notes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  
                                className={this.state.activeTab === '2' ? 'active' : ''}                              
                                 onClick={() => {
                                   this.toggle("2");
                                 }}
                                 href="#"
                               >Tasks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  
                                className={this.state.activeTab === '3' ? 'active' : ''}                              
                                 onClick={() => {
                                   this.toggle("3");
                                 }}
                                 href="#"
                               >Emails</NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>
                <CardBody>
                    <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                        <AddNewNote leadId={this.props.leadId} />
                                         {this.props.notes.length > 0 ? (                                                                              
                                            this.props.notes.map(note=>(
                                                <Fragment  key={note._id}>
                                                    <Media>
                                                        <Media body >
                                                            <small className="float-right">
                                                                 <Badge color="warning" className="mr-1 mb-1" style={{ cursor: "pointer" }} onClick={()=>this.props.onAction('Edit Note')}>Edit</Badge>
                                                                 <Badge color="danger" className="mr-1 mb-1" style={{ cursor: "pointer" }} onClick={()=>this.props.onAction('Delete Note')}>Delete</Badge>
                                                            </small>
                                                            {note.details}
                                                            <br />
                                                            <small className="text-muted">{Moment(note.dateAdded).format('YYYY/MM/DD')}</small>
                                                            <br />
                                                                                                                        
                                                        </Media>                                                    
                                                    </Media>
                                                    <hr />
                                                </Fragment>
                                          ))                                                                       
                                    ) : (<span>No Notes Yet!</span>)}                    
                                
                            </TabPane>
                         
                    </TabContent>
                    <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="2">
                                <CardTitle tag="h5">Tasks to Complete</CardTitle>
                                <CardText>
                                Some quick example text to build on the card title and make up
                                 the bulk of the card's content.
                                 Some quick example text to build on the card title and make up
                                 the bulk of the card's content.
                                </CardText>
                            </TabPane>
                    </TabContent>
                    <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="3">
                                <CardTitle tag="h5">Emails</CardTitle>
                                <CardText>
                                Some quick example text to build on the card title and make up
                                 the bulk of the card's content.
                                 Some quick example text to build on the card title and make up
                                 the bulk of the card's content.
                                </CardText>
                            </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = state =>({
    auth : state.auth,
    notes: state.notes.notes
})

export default connect(mapStateToProps, {getNotes})(CardsTabs)