import React, {useState} from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
import axios from 'axios'

function Login(props){

    const [user_name, updateUsername] = useState('')
    const [user_password, updatePassword] = useState('')

    const log = () => {
        const obj = {user_name, user_password}
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

            <input type='text' placeholder='Username' onChange={(event) => updateUsername(event.target.value)}/>
            <input type='password' placeholder='Password' onChange={(event) => updatePassword(event.target.value)}/>
            <button onClick={() => log()}>Enter</button>
            
            Don't have an account? <Link to='/register'>Register here.</Link>
            

        </div>
    )
}

export default Login;