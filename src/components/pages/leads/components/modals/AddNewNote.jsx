import React from 'react'
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

import Form from '../../../../commons/elements/form'
import { addNote } from '../../../../../redux/actions/notes'



class AddNewNote extends Form {
    state = {
        modal : false,
        data: {
            details: ''
        },
        errors: {}
    }

    schema = {
        details: Joi.string().min(5).max(2000).required().label('Text')
    }

    toggle = () =>{
        this.setState(state=> ({
            modal: !state.modal
        }))
    }

    doSubmit = () => {
       
        this.toggle()
        this.props.addNote(this.state.data, this.props.leadId)
    }

    render(){
        return(
            <Card>
                <CardHeader>
                    <Button color='primary' className="mr-1" onClick={()=>this.toggle()}>Add Note</Button>
                </CardHeader>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>
                        Note Info
                    </ModalHeader>
                    <ModalBody>
                        <p className="mb-0">dsdsds</p>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput("details" , "New Note",  "form-group")}
                            {this.renderButton("Add Note" ,"form-group")}
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

export default connect(null, {addNote})(AddNewNote)