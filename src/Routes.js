import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Preferences from './Components/Preferences/Preferences';
import MyBooks from './Components/MyBooks/MyBooks';

export default (
    <Switch>
        <Route component={Preferences} path='/preferences'/>
        <Route component={MyBooks} path='/mybooks'/>
        <Route component={Register} path='/register' />
        <Route component={Login} path='/' />
    </Switch>
)