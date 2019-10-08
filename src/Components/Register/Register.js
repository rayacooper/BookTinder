import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Register.css'

function Register(props){

    const [user_name, updateUsername] = useState('')
    const [user_password, updatePassword] = useState('')
    const [second_password, updateSecond] = useState('')

    return(
        <div>
            Register
            <input type='text' placeholder='Username' onChange={(e) => updateUsername(e.target.value)} />
            <input type='password' placeholder='Password' onChange={(e) => updatePassword(e.target.value)} />
            <input type='password' placeholder='Re-type Password' onChange={(e) => updateSecond(e.target.value)} />
            <button onClick={() => props.history.push('/mybooks')}>Enter</button>
            Already have an account? <Link to='/'>Login here.</Link>
        </div>
    )
}

export default Register;