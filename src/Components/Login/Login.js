import React, {useState} from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
import axios from 'axios'

function Login(props){

    const [user_email, updateEmail] = useState('')
    const [user_password, updatePassword] = useState('')

    const log = () => {
        const obj = {user_email, user_password}
        axios.post('/login', obj)
        .then(res => {
            console.log(res)
            if (res.data.success){
                props.history.push('/mybooks')
            }else{
                alert(`Error occured: ${res.data.err}`)
            }
        })
    }


    return(
        <div>
            Login

            <input type='text' placeholder='Email' onChange={(event) => updateEmail(event.target.value)}/>
            <input type='password' placeholder='Password' onChange={(event) => updatePassword(event.target.value)}/>
            <button onClick={() => log()}>Login</button>
            
            Don't have an account? <Link to='/register'>Register here.</Link>
            

        </div>
    )
}

export default Login;