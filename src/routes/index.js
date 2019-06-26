import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Login from '../components/pages/auth/Login'
import Leads from '../components/pages/leads/Leads'
import Jobs from '../components/pages/jobs/Jobs'
import Tasks from '../components/pages/tasks/Tasks'
import Landing from '../components/pages/landing/Landing'
import PrivateRoute from '../components/commons/utils/privateRoute';

const Routes = () =>(
    <Switch>
         <Route path="/login" component={Login} />
         <PrivateRoute exact path="/" component={Landing} />
         <PrivateRoute path="/leads" component={Leads} />
         <PrivateRoute path="/jobs" component={Jobs} />
         <PrivateRoute path="/tasks" component={Tasks} />
    </Switch>   
)


export default Routes


