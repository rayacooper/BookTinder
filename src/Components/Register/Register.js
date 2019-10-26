import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Register.css'

function Register(props){

    const [user_given_name, updateFirstName] = useState('')
    const [user_surname, updateSurname] = useState('')
    const [user_email, updateUserEmail] = useState('')
    const [user_password, updatePassword] = useState('')
    const [second_password, updateSecond] = useState('')
    const [img_url, updateURL] = useState('')

    const reg = () => {
        if(user_password === second_password){
            const stuff = {user_given_name, user_surname, user_email, user_password, img_url}
            axios.post('/register', stuff)
            .then(infoback => {
                if(infoback.data.success){
                    props.history.push('/mybooks')
                    console.log(infoback.data.user)
                }else{
                    alert('That username already exists. Please pick another one')
                    console.log(infoback.data.err)
                }
            })
        }else{
            alert('Passwords do not match. Please try again.')
        }
    }

    return(
        <div>
            Register
            <input type='text' placeholder='First Name' onChange={e => updateFirstName(e.target.value)}/>
            <input type='text' placeholder='Last Name' onChange={e => updateSurname(e.target.value)}/>
            <input type='text' placeholder='Email' onChange={e => updateUserEmail(e.target.value)} />
            <input type='password' placeholder='Password' onChange={e => updatePassword(e.target.value)} />
            <input type='password' placeholder='Re-type Password' onChange={e => updateSecond(e.target.value)} />
            <input type='text' placeholder='Profile image URL' onChange={e => updateURL(e.target.value)}/>
            
            <button onClick={() => reg()}>Register</button>
            Already have an account? <Link to='/'>Login here.</Link>
        </div>
    )
}

export default Register;