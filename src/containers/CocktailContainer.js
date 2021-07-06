import React, { Component } from 'react'
import CocktailCard from '../components/CocktailCard'

export default class CocktailContainer extends Component {

    state={ cocktails: []}


    componentDidMount(){
        console.log("COMPONENT DID MOUNT");
        fetch("http://localhost:3000/cocktails")
        .then(res => res.json())
        .then(cocktailsObj => this.setState({cocktails: cocktailsObj}))
    }

    renderCocktails(){
        return(
            <div className="container">
                {this.state.cocktails.map(cocktailsObj => <CocktailCard key={cocktailsObj.name + "-card"} name={cocktailsObj.name} image={cocktailsObj.photo}/>)}
            </div>
        )

    }

 

    render() {
        return (
            <div className="container">
                {this.renderCocktails()}
            </div>
        )
    }
}
