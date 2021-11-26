import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
        <Post message="Hi, how are you?" />
        <Post message="my first message" />
        {/* <Post />
        <Post />
        <Post /> */}
      </div>
    </div>
  );
};
export default MyPosts;
