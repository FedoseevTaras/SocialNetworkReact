let initialState = {
    friends: [
        {name: "Taras", id: "1"},
        {name: "Petya", id: "2"},
        {name: "Vasya", id: "3"},
        {name: "Masha", id: "4"},
        {name: "Stepan", id: "5"},
        {name: "Vitya", id: "6"},

    ]
}
const sidebarReducer = (state=initialState,action) => {
    return state
}

export default sidebarReducer