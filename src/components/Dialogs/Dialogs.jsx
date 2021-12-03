import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.message.map (m => <Message message={m.message}/>)
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let message = newMessageElement.current.value
        alert (message)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement }
            </div>
            <div className="messages">
                {messagesElement}
                <textarea ref = {newMessageElement}>lkdsmlaskdm</textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs