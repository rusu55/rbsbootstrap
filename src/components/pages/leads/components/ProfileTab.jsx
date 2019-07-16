import React, { Fragment } from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Badge,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap'

   import avatar1 from '../../../../assets/img/avatars/avatar.jpg'
   import { 
        Mail,
        Phone,
        Calendar,
        MoreHorizontal
         } from 'react-feather'
   import Spinner from '../../../commons/elements/spinner'

const ProfileTab = ({details, onAction}) =>{
   
    //console.log(details)
    return(
        <Card>
        <CardHeader>            
            <div className="card-actions float-right">
                <UncontrolledDropdown>
                    <DropdownToggle tag="a">
                        <MoreHorizontal />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={()=>onAction('edit')}>Edit Profile</DropdownItem>
                        <DropdownItem onClick={()=>onAction('booked')}>Marked as Booked</DropdownItem>
                        <DropdownItem onClick={()=>onAction('archive')}>Archive Profile</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            <CardTitle tag="h5" className="mb-0">Profile</CardTitle>
        </CardHeader>
        { details !==null ? (
                <Fragment>
                    <CardBody className="text-center">
                    <img src={avatar1}  className="img-fluid rounded-circle mb-2"
                        width="128"
                        height="128" />
            
                <CardTitle tag="h5" className="mb-0">
                   {details.name}
                    <div>
                        <Badge color="success" className="mr-1 my-1">Active</Badge>
                    </div>            
                </CardTitle>
                </CardBody>
                <hr className="my-0" />
                <CardBody>
                    <CardTitle tag="h5">About</CardTitle>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-1"><Mail width={14} height={14} className="mr-1"/>Email: {details.email} </li>
                        <li className="mb-1"><Phone width={14} height={14} className="mr-1"/>Phone: {details.phone} </li>
                        <li className="mb-1"><Calendar width={14} height={14} className="mr-1"/>Wedding Date: {details.weddingDate} </li>
                    </ul>
                </CardBody>
            </Fragment>
            ) : (<Spinner />)}
        

        <hr className="my-0" />
        <CardBody>
            
            <div className="card-actions float-right">
                    <UncontrolledDropdown>
                        <DropdownToggle tag="a">
                            <MoreHorizontal />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Edit Profile</DropdownItem>
                            <DropdownItem>Marked as Booked</DropdownItem>
                            <DropdownItem>Archive Profile</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            <CardTitle tag="h5">Workfllow</CardTitle>
            <hr className="my-0" />
            <ul className="timeline mt-2">
                <li className="timeline-item">
                    <strong>First Email</strong>
                    <span className="float-right text-muted text-sm">30m ago</span>
                    <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
                </li>
                <li className="timeline-item">
                    <strong>Secon Email</strong>
                    <span className="float-right text-muted text-sm">30m ago</span>
                    <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
                </li>
            </ul>
        </CardBody>
    </Card>
    )
}

 export default ProfileTab
 