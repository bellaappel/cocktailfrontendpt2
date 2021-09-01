import React, { Component } from 'react'
import {connect} from 'react-redux'
import { SingleCocktailPage } from './SingleCocktailPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class CocktailCard extends Component {
     constructor() {
        super()
        this.state = { 
            cocktails: [],
            filter: ""
        }
    }

     sortAsc = () => {
         console.log('button')
         return(this.setState(
             {cocktails: this.props.cocktails.sort((a, b) => a.name.localeCompare(b.name))
            }
            )
         )
    }

    



    
    render() {
        
        const cocktails = this.state.cocktails.length == 0 ? this.props.cocktails.filter(cocktail => cocktail.name.includes(this.state.filter)).map(cocktail => <li key={cocktail.id}><SingleCocktailPage match={{params: {cocktailId: cocktail.id.toString()}}}/></li>) : 
        this.state.cocktails.filter(cocktail => cocktail.name.includes(this.state.filter)).map(cocktail => <li key={cocktail.id}><SingleCocktailPage match={{params: {cocktailId: cocktail.id.toString()}}}/></li>) 
        console.log(cocktails)
        
        
    
        
    

        
        return (
            <div className="cocktailslist-container">
                <h1>All Cocktails</h1>
                <input type="text" id="search-bar" placeholder="Search Cocktails" value={this.state.filter} onChange={e => this.setState({filter: e.target.value},  ()=>console.log(this.state))} />
                <button onClick={this.sortAsc}> Sort Alphabetically </button>
                <ul className= "cocktail-list">
                    {cocktails}
                </ul>
            </div>
        )
    }
     
    

    
}



export default connect((state) => {
    return {cocktails: state.cocktails}
})(CocktailCard)

// import React from 'react'
// import {Link} from "react-router-dom"

// class CocktailCard = ({cocktail}) => {
//     return (
//     <div className="cocktailcard">
//         <Link to={{pathname: `/cocktails/${cocktail.id}`}}>{cocktail.name}</Link>

//     </div>
//     )
// }


