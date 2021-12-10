import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator,addPostMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.message.map (m => <Message message={m.message}/>)
    let newMessageText = state.newMessageText

    let addNewMessage = () => {
        props.sendMessage()
    }
    let updateMessageText = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement }
            </div>
            <div className="messages">
                {messagesElement}
                <textarea
                          value= {newMessageText}
                          onChange={updateMessageText}
                          placeholder="Enter your message"/>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs