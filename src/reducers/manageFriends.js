export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            let newFriends = Object.assign({}, state, {friends:[...state.friends, action.friend]})
            return newFriends;
        case 'REMOVE_FRIEND':
            let friends = state.friends;
            let filteredFriends = friends.filter(friend => friend.id !== action.id);
            return ({friends: filteredFriends})
        default:
            return state;
    }
}

