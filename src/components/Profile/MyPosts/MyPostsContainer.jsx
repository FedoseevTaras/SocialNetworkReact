import React from "react";
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//
//
//                 let addNewPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 let addNewText = (text) => {
//                     let action = addPostTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//
//                 return <MyPosts updateNewPostText={addNewText}
//                          addPost={addNewPost}
//                          post={state.profilePage.post}
//                          newPostText={state.profilePage.newPostText}/>
//             }
//
//             }
//         </StoreContext.Consumer>
//
//     );
// };
const mapStateToProps = (state) => {
    return {
        post : state.profilePage.post,
        newPostText : state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = addPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: dispatch(addPostActionCreator())
    }
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
