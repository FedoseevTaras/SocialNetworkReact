import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
            <img
                className={s.contentImg}
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt=""
            />
            <div className = {s.blockDescription}>ava+description</div>
        </div>
    )
        ;
};
export default ProfileInfo;
