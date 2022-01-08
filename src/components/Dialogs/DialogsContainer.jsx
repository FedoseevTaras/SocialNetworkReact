import React from "react";
import {addMessageActionCreator,addPostMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 let state = store.getState().dialogsPage
//
//
//                 let addNewMessage = () => {
//                     store.dispatch(addMessageActionCreator())
//                 }
//                 let updateMessageText = (body) => {
//                     store.dispatch(addPostMessageTextActionCreator(body))
//                 }
//
//                return <Dialogs updateNewMessageBody = {updateMessageText}
//                          sendMessage = {addNewMessage}
//                          dialogsPage = {state}/>
//             }
//
//             }
//
//         </StoreContext.Consumer>
//
//     )
// }
const mapStateToProps = (state) => {
    return {
        dialogsPage : state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody : (body) => {
            dispatch(addPostMessageTextActionCreator(body))
        },
        sendMessage : () => {
            dispatch(addMessageActionCreator())
        }

    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer