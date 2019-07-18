import React, {Fragment} from 'react'
import Joi from 'joi-browser'
import {
    
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button, 
    Badge
    } from 'reactstrap'

import { connect } from 'react-redux'
import { editCurrentNote } from '../../../../../redux/actions/notes'

import Form from '../../../../commons/elements/form'

class EditNote extends Form{
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

    populateForm = () =>{
        console.log(this.props.note)
        this.toggle()
        this.setState({data: this.mapToViewModel(this.props.note)})
    }
    
    mapToViewModel(note){
        return {
            details : note.details
        }
    }

    doSubmit = () => {
       
        this.toggle()
       this.props.editCurrentNote(this.state.data, this.props.note._id)
    }

    render(){
        return(
                <Fragment>
                    <Badge color="warning" className="mr-1 mb-1" style={{ cursor: "pointer" }} onClick={()=>this.populateForm()}>Edit Note</Badge>
               
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>
                        Edit Note
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
                </Fragment>
        )
    }
}

export default connect(null, {editCurrentNote})(EditNote)