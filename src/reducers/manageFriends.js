export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      return ({friends: [...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
      let oldFriends = state.friends
      let newFriends = oldFriends.filter(friend => friend.id !== action.id)
      return { friends: newFriends }
    default:
      return state
  }
}
