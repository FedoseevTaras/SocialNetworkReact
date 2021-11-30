import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};
export default Profile;
