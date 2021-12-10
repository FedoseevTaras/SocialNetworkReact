import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postElement = props.post.map(p => <Post message={p.message} countLike={p.countLike}/>)

    let newPostElement = React.createRef()

    let onAddNewPost = () => {
        props.addPost()
    }
    let onAddNewText = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postBlock}>
            my post
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onAddNewText}/>
                </div>
                <div>
                    <button onClick={onAddNewPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};
export default MyPosts;
