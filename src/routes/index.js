import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Login from '../components/pages/auth/Login'
import Leads from '../components/pages/leads/Leads'
import LeadDetails from '../components/pages/leads/LeadDetails'
import Jobs from '../components/pages/jobs/Jobs'
import Tasks from '../components/pages/tasks/Tasks'
import Landing from '../components/pages/landing/Landing'
import Vendors from '../components/pages/vendors/vendors'
import Contracts from '../components/pages/contracts/Contracts'
import Payments from '../components/pages/payments/Payments'
import Clients from '../components/pages/clients/Clients'
import Calendar from '../components/pages/calendar/Calendar'
import PrivateRoute from '../components/commons/utils/privateRoute'

const Routes = () =>(
    <Switch>
         <Route path="/login" component={Login} />
         <PrivateRoute exact path="/" component={Landing} />
         <PrivateRoute path="/leads" component={Leads} />
         <PrivateRoute path="/leadDetails/:id" component={LeadDetails} />
         <PrivateRoute path="/jobs" component={Jobs} />
         <PrivateRoute path="/tasks" component={Tasks} />
         <PrivateRoute path="/vendors" component={Vendors} />
         <PrivateRoute path="/contracts" component={Contracts} />
         <PrivateRoute path="/payments" component={Payments} />
         <PrivateRoute path="/clients" component={Clients} />
         <PrivateRoute path="/calendar" component={Calendar} />
    </Switch>   
)


export default Routes


