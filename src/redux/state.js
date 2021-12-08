
let store = {
    _state : {
        profilePage: {
            post: [
                {id:0, message: "Hi, how are you? ", countLike: 11},
                {id:1, message: "my first message", countLike: 12}
            ],
            newPostText: ""
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
            ],
            newMessageText : ""
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

    },
    _callBacker () {
    },
    getState () {
        return this._state
    },

    // addPost () {
    //     let newPost = {
    //         id:2, message: this._state.profilePage.newPostText, countLike: 0
    //     }
    //     this._state.profilePage.post.push(newPost)
    //     this._state.profilePage.newPostText = ""
    //     this._callBacker(this._state)
    // },
    // updatePostText (text) {
    //     this._state.profilePage.newPostText = text
    //     this._callBacker(this._state)
    //
    // },
    // addMessage () {
    //     let newPost = {
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.message.push(newPost)
    //     this._state.dialogsPage.newMessageText = ""
    //     this._callBacker(this._state)
    // },
    // updateMessageText (text) {
    //     this._state.dialogsPage.newMessageText = text
    //     this._callBacker(this._state)
    //
    // },

    dispatch (action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id:2, message: this._state.profilePage.newPostText, countLike: 0
            }
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callBacker(this._state)
        }
        else if (action.type === "ADD-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callBacker(this._state)
        }
        else if (action.type === "ADD-MESSAGE") {
            let newPost = {
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.message.push(newPost)
            this._state.dialogsPage.newMessageText = ""
            this._callBacker(this._state)
        }
        else if (action.type === "ADD-POST-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.newText
            this._callBacker(this._state)
        }

    },
    subscribe (obsorver) {
        this._callBacker = obsorver
    }
}

export default store

