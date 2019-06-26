import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
    Navbar,
    Collapse,
    Nav,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap'
import { signOut } from '../../redux/actions/auth'
import {toggleSideBar} from '../../redux/actions/toggleSideBar'

const NavBar = ({toggleSideBar, signOut, history, auth:{ isAuthenticated, user}}) =>{
    return(
        isAuthenticated === true ? ( <Navbar color="white" light expand>
        <span
            className="sidebar-toggle d-flex mr-2"
            onClick={() =>toggleSideBar()}>
             <i className="hamburger align-self-center" />
         </span>
         <form className="form-inline d-none d-sm-inline-block">
            <input className="form-control form-control-no-border mr-sm-2" type="text" placeholder="Search projects..." aria-label="Search" />
         </form>
         <Collapse navbar>
             <Nav className="ml-auto" navbar>
             <UncontrolledDropdown nav inNavbar>
                    <span className="d-inline-block d-sm-none">
                    <DropdownToggle nav caret>
                       
                    </DropdownToggle>
                    </span>
                    <span className="d-none d-sm-inline-block">
                    <DropdownToggle nav caret>
                        <img
                        src=''
                        className="avatar img-fluid rounded-circle mr-1"
                        alt="Chris Wood"
                        />
                        <span className="text-dark">Chris Wood</span>
                    </DropdownToggle>
                    </span>
                    <DropdownMenu right>
                    <DropdownItem divider />
                    <DropdownItem>Settings & Privacy</DropdownItem>
                    <DropdownItem>Help</DropdownItem>
                    <DropdownItem onClick={()=>signOut(history)}>Sign out</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
             </Nav>
         </Collapse>
    </Navbar>) : ('')        
    )
}
const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps, {toggleSideBar, signOut})(withRouter(NavBar))