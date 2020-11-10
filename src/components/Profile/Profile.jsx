import React from 'react';
import MyProfile from "./MyPosts/MyProfile";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


 const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyProfile posts={props.posts} />

    </div>

}

export default Profile;