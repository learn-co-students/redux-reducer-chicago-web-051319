export function managePresents(state, action){
  if(action.type==='INCREASE'){
    let count = state.numberOfPresents + 1
    return {numberOfPresents: count}
  } else {
    return state
  }
}
