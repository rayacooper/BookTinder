import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return(
        <div>
            <div>
                Logo
            </div>
            <div>
                <Link to='/preferences'>My Preferences</Link>
                <Link to='/mybooks'>My Books</Link>
            </div>
        </div>
    )
}

export default NavBar;