import React from 'react';
import s from './Profile.module.css';
import MyProfile from "./MyPosts/MyProfile";


const Profile = () => {
    return <div>

        <div><img className={s.imgBanner} src="https://www.dw.com/image/50133636_401.jpg" alt=""/></div>
        <div>ava + text</div>
        <MyProfile/>

    </div>

}

export default Profile;