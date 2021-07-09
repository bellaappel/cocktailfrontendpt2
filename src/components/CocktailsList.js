import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { cocktailsReducer } from '../reducers/cocktailsReducer';
class CocktailsList extends Component {
    render() {
        const cocktails = this.props.cocktails.map(cocktail => <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>)
        return (
            <div className="cocktailslist-container">
                <h1>All Cocktails</h1>
                <ul className= "cocktail-list">
                    {cocktails}
                </ul>
            </div>
        )
    }
}

export default connect((state) => {
    return {cocktails: state.cocktails}
})(CocktailsList)
