import React, {useState} from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
import axios from 'axios'

function Login(props){

    const [user_email, updateEmail] = useState('')
    const [user_password, updatePassword] = useState('')

    // function checkServer(){
    //     axios.get('/ping')
    //         .then((response) => {
    //             console.log(response)
    //         })
    // }

    const log = () => {
        if(!user_email){
            alert('Please enter a valid email.')
        }else if(!user_password){
            alert('Please enter your password.')
        }else if(user_password && user_password){
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
        
    }


    return(
        <div className="LoginMain">
            <div className="Login">
                <h2>Login</h2>
                <div className="LoginBoxes">
                    <input type='text' placeholder='Email' onChange={(event) => updateEmail(event.target.value)}/>
                    <input type='password' placeholder='Password' onChange={(event) => updatePassword(event.target.value)}/>
                </div>
                
                <button onClick={() => log()}>Login</button>
                <br />

                {/* <button onClick={() => checkServer()}>Check If Server Works</button> */}
                
                <div className="LoginRegister">
                    Don't have an account? <Link to='/register'>Register here.</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Login;