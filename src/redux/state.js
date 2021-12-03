import {rerenderEntireTree} from "../rerender";

let state = {
    profilePage: {
        post: [
            {id:0, message: "Hi, how are you? ", countLike: 11},
            {id:1, message: "my first message", countLike: 12}
        ]
    },
    dialogsPage: {
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
        ]
    },
    friendsPage: {
        friends: [
            {name: "Taras", id: "1"},
            {name: "Petya", id: "2"},
            {name: "Vasya", id: "3"},
            {name: "Masha", id: "4"},
            {name: "Stepan", id: "5"},
            {name: "Vitya", id: "6"},

        ]
    }

}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id:2, message: postMessage, countLike: 0
    }
    state.profilePage.post.push(newPost)
    rerenderEntireTree(state)
}
export default state

