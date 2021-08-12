import React, { Component } from 'react';
import SearchList from '../components/SearchList';
import SearchBar from '../components/SearchBar';
export default class CocktailSearchContainer extends Component {
    constructor() {
        super()
        this.state = {
            cocktails: []
        }
    }
    componentDidMount() {
        fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(response => response.json())
            .then(drinks => this.setState({
                drinks: [drinks.drinks[0], drinks.drinks[1], drinks.drinks[2]]
            }));
    }

    handleSubmit = (event, value) => {
        event.preventDefault()
        fetch(`www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${value}`)
            .then(response => response.json())
            .then(drinks => this.setState({
                drinks: [drinks.drinks[0], drinks.drinks[1], drinks.drinks[2]]
            }));
    }

    render() {
        return (
            <div>
                < SearchList initialSearch={this.state.drinks} />
                < SearchBar handleSubmit={this.handleSubmit} />
                
            </div>
        )
    }
}
