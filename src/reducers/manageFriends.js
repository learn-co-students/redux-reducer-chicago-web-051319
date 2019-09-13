export function manageFriends(state, action) {
  //console.log(state)
  //console.log(action)
  //console.log('=====================')
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const newState = state.friends.filter(friend => {
        return friend.id !== action.id;
      });
      console.log(action)
      //console.log(newState)
      return {friends: newState}
    default:
      return state;
  }
}
