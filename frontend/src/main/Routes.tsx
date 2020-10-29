import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import User from '../components/user/User'
import AccessCard from '../components/accessCard/AccessCard'
import AddUsers from '../components/addUser/AddUser'

function Routes() {
    return (

        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/users' component={User}></Route>
            <Route path='/cards' component={AccessCard}></Route>
            <Route path='/add-user' component={AddUsers}></Route>
            <Redirect from="*" to="/" ></Redirect>
        </Switch>
    
    )
    
}

export default Routes