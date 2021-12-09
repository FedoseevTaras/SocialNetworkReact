const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_POST_MESSAGE_TEXT = "ADD-POST-MESSAGE-TEXT";

const dialogsReducer = (state,action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                message: state.newMessageText
            }
            state.message.push(newPost)
            state.newMessageText = ""
            return state
        case ADD_POST_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }

}

export const addMessageActionCreator = () => ({type : ADD_MESSAGE})
export const addPostMessageTextActionCreator = (text) => ({type : ADD_POST_MESSAGE_TEXT, newText : text})

export default dialogsReducer
