import React from 'react';
import s from './MyProfile.module.css';
import Post from "./Post/Post";


const MyProfile = () => {
    let posteDate = [
        {id: 1, message: 'text 1', likeCount: 25},
        {id: 2, message: 'text 2', likeCount: 92},
        {id: 3, message: 'text 3', likeCount: 27},
        {id: 4, message: 'text 4', likeCount: 5},
        {id: 5, message: 'text 5', likeCount: 75}
    ]
    return <div className={s.container}>
        <h3> My posts</h3>

        <div>
            New post
        </div>
        <div>

            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button>Add posts</button>
            </div>
            <div>
                <button>Remove</button>
            </div>


        </div>

        <div className={s.posts}>
            <Post likeCount={posteDate[0].likeCount} message={posteDate[0].message}/>
            <Post likeCount={posteDate[1].likeCount} message={posteDate[1].message}/>
            <Post likeCount={posteDate[2].likeCount} message={posteDate[2].message}/>
            <Post likeCount={posteDate[3].likeCount} message={posteDate[3].message}/>


        </div>

    </div>

}

export default MyProfile;