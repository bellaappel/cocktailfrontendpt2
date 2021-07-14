export const liquorsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_LIQUORS':
            return action.payload
            default:
            return state
    }
}