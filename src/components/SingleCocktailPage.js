import React from 'react'
import { useSelector } from 'react-redux'

export const SingleCocktailPage = ({match}) => {

    const cocktailId = match.params.cocktailId
    const cocktail = useSelector(state => state.cocktails.cocktails.find(cocktail => cocktail.id.toString()=== cocktailId))
        return (
            <div className="card">
                <h1>Cocktail</h1>
                <h2>{cocktail.name}</h2>
                <h2>{cocktail.photo}</h2>
                <h3>Recipes:</h3>
              
            </div>
        )
}

