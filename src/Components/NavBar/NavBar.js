import React from 'react';
import { Link, withRouter } from 'react-router-dom'

import './NavBar.css';

function NavBar({history}){

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
                    <button onClick={() => history.push('/')}>Logout</button>
                </div>
            </div>
        )
    }

export default withRouter(NavBar) ;