export function manageFriends(state, action){

  if (action.type === 'ADD_FRIEND'){
    return({friends: [...state.friends, action.friend]})
  } else if (action.type === 'REMOVE_FRIEND') {
    const allFriends = state.friends
    const newState = allFriends.filter(friend=> friend.id !== action.id)
    return({friends: newState})
  } else {
    return({friends: state.friends})
  }
}
