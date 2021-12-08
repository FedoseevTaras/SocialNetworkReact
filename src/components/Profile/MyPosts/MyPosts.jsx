import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postElement = props.post.map(p => <Post message={p.message} countLike={p.countLike}/>)
    let newPostElement = React.createRef()
    let addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let addNewText = () => {
        let text = newPostElement.current.value
        props.dispatch(addPostTextActionCreator(text))
    }
    return (
        <div className={s.postBlock}>
            my post
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={addNewText}/>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};
export default MyPosts;
