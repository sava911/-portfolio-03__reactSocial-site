import React from 'react';
import s from './MyProfile.module.css';
import Post from "./Post/Post";


const MyProfile = (props) => {


    let postsElements = props.posts.map(p => <Post likeCount={p.likeCount} message={p.message}/>)

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

            {postsElements}

        </div>

    </div>

}

export default MyProfile;