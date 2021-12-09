import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator,addPostMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.message.map (m => <Message message={m.message}/>)
    let newMessageElement = React.createRef();
    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let updateMessageText = () => {
        let text = newMessageElement.current.value
        props.dispatch(addPostMessageTextActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement }
            </div>
            <div className="messages">
                {messagesElement}
                <textarea ref = {newMessageElement}
                          value= {props.newMessageText}
                          onChange={updateMessageText}
                          placeholder="Enter your message"/>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs