import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';

import './NavBar.css';

function NavBar({history}){

    const logout = () => {
        axios.get('/logout')
        .then(getback => {
            if (getback.data.success){
                history.push('/')
            }else{
                alert('Error logging out. Please try again.')
            }
        })
    }

         return(
            <div>
                <div>
                    Logo
                </div>

                <div>
                        <Link to="/preferences">My Preferences</Link>
                        <Link to="/mybooks">My Books</Link>
                </div>

                <div>
                    <button onClick={() => logout}>Logout</button>
                </div>
            </div>
        )
    }

export default withRouter(NavBar) ;