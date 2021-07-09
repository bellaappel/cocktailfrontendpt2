import React, {Component } from 'react'

const CocktailCard = (props) => {
        return (
            <div className="card">
                <h2>{props.cocktail.name}</h2>
                <h2>{props.cocktail.photo}</h2>
                <h3>Recipes:</h3>
                <ul></ul>
            </div>
        )
}

export default CocktailCard