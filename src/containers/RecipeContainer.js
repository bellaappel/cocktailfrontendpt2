import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../actions/recipesActions';
import RecipeCard from '../components/RecipeCard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

class RecipeContainer extends Component {

        componentDidMount() {
            console.log('a')
        this.props.fetchRecipes()
        console.log('b')
    }

    render() {
        return (
            <Switch>
                <Route exact path='/recipes'>
                    <RecipeCard />
                </Route>
            </Switch>
        )
    }
} 

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}
export default connect(mapStateToProps, {fetchRecipes})(RecipeContainer)