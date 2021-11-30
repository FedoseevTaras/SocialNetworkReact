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
    let dialogsItemData = [
        {name: "Taras", id: "1"},
        {name: "Petya", id: "2"},
        {name: "Vasya", id: "3"},
        {name: "Masha", id: "4"},
        {name: "Stepan", id: "5"},
        {name: "Vitya", id: "6"},

    ]
    let messageData = [
        {message: "Hi?"},
        {message: "How are you?"},
        {message: "Yo"},
        {message: "Yo"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsItemData[0].name} id={dialogsItemData[0].id}/>
                <DialogItem name={dialogsItemData[1].name} id={dialogsItemData[1].id}/>
                <DialogItem name={dialogsItemData[2].name} id={dialogsItemData[2].id}/>
                <DialogItem name={dialogsItemData[3].name} id={dialogsItemData[3].id}/>
                <DialogItem name={dialogsItemData[4].name} id={dialogsItemData[4].id}/>
                <DialogItem name={dialogsItemData[5].name} id={dialogsItemData[5].id}/>

            </div>
            <div className="messages">
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
            </div>
        </div>
    )
}
export default Dialogs