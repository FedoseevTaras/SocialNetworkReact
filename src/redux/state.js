import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



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
        sidebar: {
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

    dispatch (action) {
        this._state.profilePage = profileReducer (this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage,action)
        sidebarReducer (this._state.sidebar,action)
        this._callBacker(this._state)
    },
    subscribe (obsorver) {
        this._callBacker = obsorver
    }
}


export default store

