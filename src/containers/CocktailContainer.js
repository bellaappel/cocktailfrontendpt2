import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCocktails} from '../actions/cocktailsActions';
import CocktailCard from '../components/CocktailCard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

class CocktailContainer extends Component {

        componentDidMount() {
        this.props.fetchCocktails()
    }

    render() {
        return (
            <Switch>
                <Route exact path='/cocktails'>
                    <CocktailCard />
                </Route>
            </Switch>
        )
    }
} 

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails
    }
}
export default connect(mapStateToProps, {fetchCocktails})(CocktailContainer)
