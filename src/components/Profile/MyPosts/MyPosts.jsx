import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let post = [
        {message: "Hi, how are you? ", countLike: "11" },
        {message: "my first message", countLike: "12" }
    ]
    let postElement = post.map (p => <Post message={p.message} countLike = {p.countLike}/>)
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
          {postElement}
      </div>
    </div>
  );
};
export default MyPosts;
