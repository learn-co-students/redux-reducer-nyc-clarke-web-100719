export function manageFriends(state, action){
    switch (action.type){
        case 'ADD_FRIEND':
            let newState = {...state};
            if (!newState.friends) {newState.friends = []}
            newState.friends.push(action.friend);
            return newState;
        case 'REMOVE_FRIEND':
            let index = 0;
            state.friends.forEach((friend,ind) => {
                if (friend.id === action.id)
                {
                    index = ind; 
                }
            });
            let newArr = [...state.friends];
            newArr.splice(index, 1);
            let newerState = {};
            newerState.friends = newArr;
            return newerState; 
        default: 
            return state; 
    }
}
