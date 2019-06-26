import React, { Fragment } from 'react'
import { Link, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'



const SideBar = ({ auth: {isAuthenticated, loading}, sidebar}) =>{
    const authLinks = (
        <Fragment>
                     <nav className={
                            "sidebar" +
                            (!sidebar.isOpen ? " toggled" : "")                                 
                            }>
                                <div className="sidebar-content ">
                                        <Link className="sidebar-brand" to="/">
                                            <i className="align-middle" data-feather="box"></i>
                                            <span className="align-middle">Red Bank Studio</span>
                                        </Link>

                                    <ul className="sidebar-nav">
                                        <li className="sidebar-header">
                                            Main
                                        </li>
                                        <li className="sidebar-item">
                                            <NavLink className="sidebar-link" to="/leads">
                                                <i className="align-middle fa fa-users" aria-hidden="true"></i> <span className="align-middle">Leads</span>
                                            </NavLink>
                                        </li>
                                        <li className="sidebar-item">
                                            <NavLink className="sidebar-link" to="/clients">
                                                <i className="align-middle fas fa-user-friends"></i> <span className="align-middle">Clients</span>
                                            </NavLink>
                                        </li>
                                        <li className="sidebar-item">
                                            <NavLink className="sidebar-link" to="/vendors">
                                                <i className="align-middle fa fa-users"></i> <span className="align-middle">Vendors</span>
                                            </NavLink>
                                        </li>	
                                        <li className="sidebar-item">
                                            <NavLink className="sidebar-link" to="/tasks">
                                                <i className="align-middle far fa-list-alt"></i> <span className="align-middle">To Do List</span>
                                            </NavLink>
                                        </li>
                                        <li className="sidebar-item">
                                            <NavLink className="sidebar-link" to="/calendar">
                                                <i className="align-middle far fa-calendar-alt"></i> <span className="align-middle">Events Calendar</span>
                                            </NavLink>
                                        </li>
                                        <li className="sidebar-item">
                                            <NavLink className="sidebar-link" to="/jobs">
                                                <i className="align-middle fa fa-users"></i> <span className="align-middle">Jobs</span>
                                            </NavLink>
                                        </li>
                                        <li className="sidebar-item">
                                            <NavLink className="sidebar-link" to="/contracts">
                                                <i className="align-middle fa fa-users"></i> <span className="align-middle">Contracts</span>
                                            </NavLink>
                                        </li>
                                        <li className="sidebar-item">
                                            <NavLink className="sidebar-link" to="/payments">
                                                <i className="align-middle fa fa-users"></i> <span className="align-middle">Payments</span>
                                            </NavLink>
                                        </li>				
                                    </ul>
                                </div>
                        </nav>
                </Fragment>
)

const navBarNotLoged = ( <p></p>)

    return(
        <Fragment>{ isAuthenticated ? authLinks : navBarNotLoged}  </Fragment>
    )
}

const mapStateToProps = state =>({
    auth: state.auth,
    sidebar: state.sidebar
  })

export default connect(mapStateToProps, {})(SideBar)