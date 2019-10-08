import React, {useState} from 'react';
import './Login.css'
import {Link} from 'react-router-dom';

function Login(props){

    const [user_name, updateUsername] = useState('')
    const [user_password, updatePassword] = useState('')




    return(
        <div>
            Login

            <input type='text' placeholder='Username' onChange={(event) => updateUsername(event.target.value)}/>
            <input type='password' placeholder='Password' onChange={(event) => updatePassword(event.target.value)}/>
            <button onClick={() => props.history.push('/mybooks')}>Enter</button>
            
            Don't have an account? <Link to='/register' onClick={console.log('cool beans')}>Register here.</Link>
            

        </div>
    )
}

export default Login;