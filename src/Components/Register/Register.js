import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Register.css'

function Register(props){

    const [user_name, updateUsername] = useState('')
    const [user_password, updatePassword] = useState('')
    const [second_password, updateSecond] = useState('')

    const reg = () => {
        if(user_password === second_password){
            const stuff = {user_name, user_password}
            axios.post('/register', stuff)
            .then(res => {
                console.log(res.data)
                props.history.push('/mybooks')
            })
        }else{
            alert('Passwords do not match. Please try again.')
        }
    }

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