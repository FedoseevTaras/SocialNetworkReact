import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElement = props.post.map (p => <Post message={p.message} countLike = {p.countLike}/>)
    let newPostElement = React.createRef()
    let addNewPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ""
    }
  return (
    <div className = {s.postBlock}>
      my post
      <div>
          <div>
              <textarea ref={newPostElement}></textarea>
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
