import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        {message: "Hi, how are you? ", countLike: "11" },
        {message: "my first message", countLike: "12" }
    ]
  return (
    <div className = {s.postBlock}>
      my post
      <div>
          <div>
              <textarea></textarea>
          </div>
        <div>
            <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} countLike = {postData[0].countLike}/>
          <Post message={postData[1].message} countLike = {postData[1].countLike}/>
      </div>
    </div>
  );
};
export default MyPosts;
