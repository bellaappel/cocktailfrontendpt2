import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class RecipeCard extends Component {
    render() {
        
        const recipes = this.props.recipes.map(recipe => <li key={recipe.id}><Link to={{pathname: `/recipes/${recipe.id}`}}>{recipe.title}</Link></li>)
        console.log(recipes)
        return (
            <div className="recipeslist-container">
                <h1>All recipes</h1>
                <ul className= "recipe-list">
                    {recipes}
                </ul>
            </div>
        )
    }
}



export default connect((state) => {
    return {recipes: state.recipes}
})(RecipeCard)