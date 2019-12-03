import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import MyBooks from './Components/MyBooks/MyBooks';
import NewBook from './Components/NewBook/NewBook';
import BookTinder from './Components/BookTinder/BookTinder';

export default (
    <Switch>
        <Route component={Profile} path='/profile' />
        <Route component={MyBooks} path='/mybooks' />
        <Route component={Register} path='/register' />
        <Route component={NewBook} path='/newbook' />
        <Route component={BookTinder} path='/booktinder' />
        <Route component={Login} path='/' />
    </Switch>
)