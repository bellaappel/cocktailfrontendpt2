import React from 'react'
import { useSelector } from 'react-redux'
import AddRecipeForm from '../containers/AddRecipeForm'
import RecipesContainer from '../containers/AddRecipeForm'
import RecipeCard from './RecipeCard'

export const SingleCocktailPage = ({match}) => {

    const cocktailId = match.params.cocktailId
    const cocktail = useSelector(state => state.cocktails.find(cocktail => cocktail.id.toString()=== cocktailId))
        return (
            <div className="card">
                <h1>{console.log(cocktail)}</h1>
                <h1>{cocktail.name}</h1>
                <h2>{cocktail.desc}</h2>
                <h4>Recipes: </h4> 
                <RecipeCard  />
                <h5>Leave a new Recipe:</h5>
                    <AddRecipeForm id={cocktail.id}/>
            </div>
        )
}

