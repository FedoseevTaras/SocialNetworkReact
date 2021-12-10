import React from "react";
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()


    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let addNewText = (text) => {
        let action = addPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts updateNewPostText = {addNewText}
                 addPost = {addNewPost}
                 post = {state.profilePage.post}
                 newPostText = {state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;
