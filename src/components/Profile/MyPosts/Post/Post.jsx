import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return <div className={s.item}>
        <img className={s.ava}
             src="https://static3.avast.com/2000987/web/i/mkt/share/avast-logo.png" alt=""/>
        {props.message}
        <span> like </span> {props.likeCount}
    </div>


}

export default Post;