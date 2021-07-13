import React from 'react'
import { useSelector } from 'react-redux'

export const SingleCocktailPage = ({match}) => {

    const cocktailId = match.params.cocktailId
   
    const cocktail = useSelector(state => state.cocktails.find(cocktail => cocktail.id.toString()=== cocktailId))
        return (
            <div className="card">
                <h1>{console.log(cocktail)}</h1>
                <h1>{cocktail.name}</h1>
                <h1>Cocktail</h1>
               
             
                <h3>Recipes:</h3>
              
            </div>
        )
}

