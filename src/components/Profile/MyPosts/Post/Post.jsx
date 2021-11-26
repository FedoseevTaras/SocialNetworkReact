import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://prikolnye-kartinki.ru/img/picture/Dec/26/da0427eaeb205630073a623f37887ee4/1.jpg" />
        {props.message}
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
