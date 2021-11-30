import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "dialogs" + props.id
    return (<div className="items">
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}
const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Taras" id="1"/>
                <DialogItem name="Petya" id="2"/>
                <DialogItem name="Vasya" id="3"/>
                <DialogItem name="Masha" id="4"/>
                <DialogItem name="Stepan" id="5"/>
                <DialogItem name="Vitya" id="6"/>
            </div>
            <div className="messages">
                <Message message = "Hi"/>
                <Message message = "How are you?"/>
                <Message message = "Yo"/>
                <Message message = "Yo"/>
            </div>
        </div>
    )
}
export default Dialogs