import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle
    } from 'reactstrap'

const ContractTab = () =>{
    return(
        <Card>
             <CardHeader>            
            <div className="card-actions float-right">
                
            </div>
            <CardTitle tag="h5" className="mb-0">Proposal</CardTitle>
            </CardHeader>
           
            <CardBody className="m-sm-3 m-md-5">
                <div className="mb-4">
                Hello <strong>Chris Wood</strong>,
                <br /> This is the receipt for a payment of <strong>
                    $268.00
                </strong>{" "}
                (USD) you made to AppStack.
                </div>
            </CardBody>
        </Card>
    )
}

export default ContractTab