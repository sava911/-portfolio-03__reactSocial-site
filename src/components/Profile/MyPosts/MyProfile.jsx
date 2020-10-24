import React from 'react';
import s from './MyProfile.module.css';
import Post from "./Post/Post";


const MyProfile = () => {
    return <div>
        My posts
        <div>
            New post
        </div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add posts</button>
                <button>Remove</button>
            </div>

            <div className={s.posts}>
                <Post likeCount='75' message='hi my post first number one'/>
                <Post likeCount='23' message='hi my post first number two'/>

            </div>

    </div>

}

export default MyProfile;