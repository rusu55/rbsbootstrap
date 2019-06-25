import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Joi from 'joi-browser'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from '../../../redux/actions/auth'

import {
    Card,
    CardBody,
    Container,
    Row,
    Col
  } from "reactstrap";

  import Form from '../../commons/elements/form'

class Login extends Form{
    state ={
        data: {
            email: "", password: ""
        },
        errors: {}  
     }
 
     schema = {
         email: Joi.string()
           .required()
           .label("Email")
           .email(),
         password: Joi.string()
           .required()
           .label("Password")
       }

       doSubmit = () =>{
        const { email, password } = this.state.data
        this.props.login({ email, password})
         }  

    render(){
        if(this.props.isAuthenticated){
            return <Redirect to='/' />
        }

        return(
            <Fragment>
                <div className="main d-flex w-100">
                    <Container className="d-flex flex-column">
                        <Row className="h-100">
                            <Col sm="10" md="8" lg="6" className="mx-auto d-table h-100">
                                <div className="d-table-cell align-middle">
                                    <div className="text-center mt-4">                
                                        <p className="lead">Sign in to your account to continue</p>
                                    </div>
                                    <Card>
                                        <CardBody>
                                            <form onSubmit={this.handleSubmit}>
                                                {this.renderInput("email", "Email", "form-group")}
                                                {this.renderInput("password", "Password", "form-group", "password")}   
                                                {this.renderButton("Login")}
                                            </form>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

Login.propTypes ={
    login: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login)
