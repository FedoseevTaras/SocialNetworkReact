import React from "react";

import {addMessageActionCreator,addPostMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage


    let addNewMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let updateMessageText = (body) => {
        props.store.dispatch(addPostMessageTextActionCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody = {updateMessageText} sendMessage = {addNewMessage} dialogsPage = {state}/>
    )
}
export default DialogsContainer