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
    let dialogs = [
        {name: "Taras", id: "1"},
        {name: "Petya", id: "2"},
        {name: "Vasya", id: "3"},
        {name: "Masha", id: "4"},
        {name: "Stepan", id: "5"},
        {name: "Vitya", id: "6"},

    ]
    let message = [
        {message: "Hi?"},
        {message: "How are you?"},
        {message: "Yo"},
        {message: "Yo"},
    ]
    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = message.map (m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement }
            </div>
            <div className="messages">
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs