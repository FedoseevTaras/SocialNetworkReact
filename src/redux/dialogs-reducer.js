const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_POST_MESSAGE_TEXT = "ADD-POST-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {name: "Taras", id: "1"},
        {name: "Petya", id: "2"},
        {name: "Vasya", id: "3"},
        {name: "Masha", id: "4"},
        {name: "Stepan", id: "5"},
        {name: "Vitya", id: "6"},

    ],
    message: [
        {message: "Hi?"},
        {message: "How are you?"},
        {message: "Yo"},
        {message: "Yo"},
    ],
    newMessageText : ""
}

const dialogsReducer = (state=initialState,action) => {
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
