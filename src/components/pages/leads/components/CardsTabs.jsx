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
import { Trash } from 'react-feather'

import { connect } from 'react-redux'
import AddNewNote from './modals/AddNewNote'
import EditNote from './modals/EditNote'
import { getNotes, deleteNote } from '../../../../redux/actions/notes'
import { getTasksByOwner } from '../../../../redux/actions/tasks'

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
        this.props.getTasksByOwner(this.props.leadId)
    }
    
    render(){
        console.log(this.props)
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
                                                                 <EditNote note={note} />
                                                                 <Trash width={18} height={18} className="mr-1 mb-1" style={{ cursor: "pointer" }} onClick={()=>this.props.deleteNote(note._id)} />
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
                                  {this.props.tasks.tasks.length > 0 ? 
                                 (
                                     this.props.tasks.tasks.map(task=>(
                                         <Fragment key={task._id}>
                                             <Media body>
                                                    <small className="float-right">                                                    
                                                      <EditNote task={task} />
                                                       <Trash width={18} height={18} className="mr-1 mb-1" style={{ cursor: "pointer" }} onClick={()=>this.props.deleteNote(task._id)} />                                                                
                                                    </small>
                                                            {task.description}
                                                            <br />
                                                            <small className="text-muted">{Moment(task.taskDate).format('YYYY/MM/DD')}</small>
                                                            <br />
                                             </Media>
                                         </Fragment>
                                     ))
                                 ) 
                                    :
                                 (<span>No Tasks Found!</span>)}
                                     
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
    notes: state.notes.notes,
    tasks: state.task
})

export default connect(mapStateToProps, {getNotes, deleteNote, getTasksByOwner})(CardsTabs)