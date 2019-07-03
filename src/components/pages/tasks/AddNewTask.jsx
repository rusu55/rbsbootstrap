import React from 'react'
import PropTypes from 'prop-types'
import Joi from 'joi-browser'
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
import { createNewTask } from '../../../redux/actions/tasks'

class AddNewTask extends Form {
    constructor(props){
        super(props)
        this.state={
            modal: false,
            data:{
                taskDate: '', description: ''
            },
            errors:{}
        }
    }

    schema = {
        taskDate: Joi.string().required().label("Date"),
        description: Joi.string().required().min(6).max(255).label("Description"),
    }

    toggle = () =>{
        this.setState(state => ({
            modal: !state.modal
          }));
    }

    doSubmit = () =>{  
        this.toggle()   
        this.props.createNewTask(this.state.data)        
    }

    render(){
        return(
            <Card>
                <CardHeader>
                    <Button color="primary" onClick={()=>this.toggle()} className="mr-1">Add New Task</Button> 
                </CardHeader>
                <Modal isOpen={this.state.modal}>
                     <ModalHeader>                            
                                Task Info
                     </ModalHeader>
                     <ModalBody>
                                 <p className="mb-0">
                                    Use Bootstrap’s JavaScript modal plugin to add dialogs to
                                    your site for lightboxes, user notifications, or completely
                                    custom content.
                                </p>
                                <form onSubmit={this.handleSubmit}>
                                    {this.renderInput("description" , "description",  "form-group") }
									{this.renderInput("taskDate" , "Todo Date", "form-group","date") }
									{this.renderButton("Add Todo" ,"btn btn-primary")}	
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

AddNewTask.PropTypes ={
    createNewTask: PropTypes.func.isRequired
}
export default connect(null, {createNewTask})(AddNewTask)