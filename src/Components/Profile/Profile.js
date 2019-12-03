import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import './Profile.css'

function Profile(){

    const [userImage, updateUserImage] = useEffect('')

    useEffect(()=> {
        axios.get('/user/photo')
        .then(response => {
            updateUserImage(response.data.image)
        })
    })
    return(
        <div>
            <NavBar />
            <img src={userImage}/>
            Profile
        </div>
    )
}

export default Profile;