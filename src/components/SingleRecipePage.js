import React from 'react'
import { useSelector } from 'react-redux'

export const SingleRecipePage = ({match}) => {

    const recipeId = match.params.recipeId
   
    const recipe = useSelector(state => state.recipes.find(recipe => recipe.id.toString()=== recipeId))
        return (
            <div className="card">
                <h1>{console.log(recipe)}</h1>
                <h1>{recipe.title}</h1>
                <h2>{recipe.instructions}</h2>
            </div>
        )
}