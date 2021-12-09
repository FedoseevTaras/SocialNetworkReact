const ADD_POST = "ADD-POST";
const ADD_POST_TEXT = "ADD-POST-TEXT";

const profileReducer = (state,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:2, message: state.newPostText, countLike: 0
            }
            state.post.push(newPost)
            state.newPostText = ""
            return state
        case ADD_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const addPostTextActionCreator = (text) => ({type: ADD_POST_TEXT, newText: text})

export default profileReducer