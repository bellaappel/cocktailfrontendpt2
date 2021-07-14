import {combineReducers} from 'redux'
import { cocktailsReducer } from './cocktailsReducer'
import { liquorsReducer } from './liquorsReducer'
import { recipesReducer } from './recipesReducer'

export const rootReducer = combineReducers({
    cocktails: cocktailsReducer,
    liquors: liquorsReducer,
    recipes: recipesReducer
})