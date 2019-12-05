import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import './Profile.css'
import noPhoto from './../../Assets/No_Photo.png'

function Profile(props){

    const [userImage, updateUserImage] = useState('')
    const [changeVisible, updateChangeVisible] = useState(false)

    const newPhoto = () => {
        console.log("done it")
        updateChangeVisible(true)
    }

    useEffect(()=> {
        axios.get('/user/photo')
        .then(response => {
            if(response.data.success){
                if(response.data.img){
                    updateUserImage(response.data.image)
                }else{
                    updateUserImage(noPhoto)
                }
                
            }else{
                props.history.push('/')
            }
        })
    })
    return(
        <div>
            <NavBar />
            <div>
                <div className='ProfileImage'>
                    <img src={userImage} alt='Profile Image'onMouseOver={() => {newPhoto()}}/>
                    <div className="ChangeProfileImage" display={changeVisible === true ? 'block' : 'none'}>
                        <h2>Change Image</h2>
                    </div>
                </div>
                
                
            </div>
            
            Profile
        </div>
    )
}

export default Profile;