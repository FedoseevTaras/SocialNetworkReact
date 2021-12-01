import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./FriendItem/Friend";

const Navbar = (props) => {
    let friendNameElement = props.state.map (f => <Friend name = {f.name}/> )
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" className = { navData => navData.isActive ? s.active : s.item }>
                    Friends
                    <div>
                        {friendNameElement}
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
