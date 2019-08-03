export function managePresents(state, action){
    switch (action.type){
        case 'INCREASE':
            let presents = state;
            return {...presents, numberOfPresents: presents.numberOfPresents + 1}
        default:
            return state;
    }
}
