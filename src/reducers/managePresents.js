export function managePresents(state = {numberOfPresents : 0}, action){

    switch (action.type){
        case 'INCREASE':
            let newState = {...state};
            newState.numberOfPresents = state.numberOfPresents + 1;
            return newState;
            default:
                return state;
    }

}
