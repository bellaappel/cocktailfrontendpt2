export const cocktailsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_COCKTAILS':
            return action.payload
        case 'ADD_COCKTAIL':
            return[...state, action.payload]
        default: 
        return state
    }
}