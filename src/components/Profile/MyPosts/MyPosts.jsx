import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
        <Post message="Hi, how are you?" />
        <Post message="my first message" />
      </div>
    </div>
  );
};
export default MyPosts;
