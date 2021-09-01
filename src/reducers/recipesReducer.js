
export const recipesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_RECIPES':
            return action.payload
        case 'ADD_RECIPE':
            return[...state, action.payload]
        default: 
        return state
    }
}

export const likesReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_LIKE':
            return state + 1;
        default:
            return state
    }
}

