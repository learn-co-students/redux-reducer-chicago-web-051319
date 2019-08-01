export function manageFriends(state, action){
    switch (action.type){
        case 'ADD_FRIEND':
            let newState = Object.assign({}, state, {friends: [...state.friends, action.friend]})
            return newState
        case 'REMOVE_FRIEND':
            let removeState = Object.assign({}, state)
            let reducedFriends = removeState.friends.filter((friend) => friend.id !== action.id)
            removeState.friends = reducedFriends
            return removeState
        default:
            return state;
    }
}