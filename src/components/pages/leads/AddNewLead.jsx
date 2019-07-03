import React from 'react'
import Joi from 'joi-browser'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Card,
    CardHeader,   
    Modal,
    ModalHeader,
    ModalBody,  
    ModalFooter,  
    Button
    } from 'reactstrap'

import Form from '../../commons/elements/form'
import { createNewLead } from '../../../redux/actions/leads'

class AddNewLead extends Form {
    constructor(props){
        super(props)
        this.state={
            modal: false,
            data:{
                name: '', email: '', phone: '', weddingDate: '', venue: ''
            },
            errors:{}
        }
    }

    toggle = () =>{
        this.setState(state => ({
            modal: !state.modal
          }));
    }

    doSubmit = () =>{  
        this.toggle()   
        this.props.createNewLead( this.state.data, this.props.history)        
    }

    schema = {
        name: Joi.string().required().min(4).max(50).label("Name"),
        email: Joi.string().required().min(6).max(50).email().label("Email Address"),
        phone: Joi.string().allow(''),
        weddingDate: Joi.date().allow(''),
        venue: Joi.string().allow('')
    }

    render(){
        return(
            <Card>
                    <CardHeader>
                        <Button color="primary" onClick={()=>this.toggle()} className="mr-1">Add New Employee</Button>                  
                    </CardHeader>                   
                            <Modal isOpen={this.state.modal}>
                            <ModalHeader>                            
                                Employee Info
                            </ModalHeader>
                            <ModalBody>
                                <p className="mb-0">
                                    Use Bootstrap’s JavaScript modal plugin to add dialogs to
                                    your site for lightboxes, user notifications, or completely
                                    custom content.
                                </p>
                                <form onSubmit={this.handleSubmit}>
                                        {this.renderInput("name" , "Name",  "form-group") } 
                                        {this.renderInput("email" , "Email Address", "form-group") }
                                        {this.renderInput("phone" , "Phone Number", "form-group") }
                                    <div className="form-row">
                                        {this.renderInput("weddingDate" , "Wedding Date", "form-group col-md-4","date") }
                                        {this.renderInput("venue" , "Venue", "form-group col-md-8") }					
                                    </div>
                                        {this.renderButton("Add Lead" ,"form-group")}     
                                </form>                           
                            </ModalBody>  
                            <ModalFooter>
                                <Button color="secondary" className="mr-1" onClick={()=>this.toggle()}>Close</Button>
                            </ModalFooter>                         
                        </Modal>                   
                </Card>
        )
    }
}

export default connect(null, { createNewLead })(withRouter(AddNewLead))