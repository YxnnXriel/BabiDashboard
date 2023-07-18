


import React from 'react'
import AdutAkech from "../../images/adut akech.jpeg"
import '../../components/styles/styles.css'

const Profile = () => {
    return (
        <div class="right">

            <div class="top">
                <button id="menu-btn" >
                    <span class="material-icons-sharp">menu</span>
                </button>
                <div class="theme-toggler">
                    <span class="material-icons-sharp active">light_mode</span>
                    <span class="material-icons-sharp">dark_mode</span>
                </div>
                <div class="profile">
                    <p>Hey, <b>Ariel</b></p>
                    <small class="text-muted" >Admin</small>
                </div>
                <div class="profile-photo">
                    <img src={AdutAkech} alt="" />
                </div>
            </div>
        </div>
    
    )
}

export default Profile
