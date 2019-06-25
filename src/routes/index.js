import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from '../components/pages/auth/Login'

const Routes = () =>(
    <Switch>
         <Route path="/login" component={Login} />
    </Switch>   
)


export default Routes


