export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state, {friends: [...state.friends, action.friend]} )
      break;
    case "REMOVE_FRIEND":
      const currentFriends = state.friends.slice()
      const updatedFriends = currentFriends.filter((friend)=> friend.id !== action.id )
      return Object.assign({}, state, {friends: updatedFriends} )
      break;
    default:
      return state;
  }
}
