import React from 'react';
import s from './MyProfile.module.css';
import Post from "./Post/Post";


const MyProfile = (props) => {


    let postsElements = props.posts.map(p => <Post likeCount={p.likeCount} message={p.message}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return <div className={s.container}>
        <h3> My posts</h3>

        <div>
            New post
        </div>
        <div>

            <div>
                <textarea name="" id="" cols="30" rows="10" ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add posts</button>
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