import React, { Component } from 'react'

export default class CocktailContainer extends Component {

    state={ cocktails: []}


    componentDidMount(){
        console.log("COMPONENT DID MOUNT");
        fetch("http://localhost:3000/cocktails")
        .then(res => res.json())
        .then(cocktailssObj => this.setState({cocktails: cocktailsObj}))
    }

 

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
