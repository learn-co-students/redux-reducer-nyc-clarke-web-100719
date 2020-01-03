let state={
    friends: []
}

let action={
    type: "ADD_FRIEND",
    friend: {
      name: "Chrome Boi",
      homewtown: "NYC",
      id: 1
    }
}
action={
    type: "REMOVE_FRIEND",
    id: 1
}

export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND":
           return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND": 
        return {friends: state.friends.filter(ele => ele.id !== action.id) }
        default:
           return state
    }
}
