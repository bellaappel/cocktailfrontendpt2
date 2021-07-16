import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/">Home</Link>
                <div className="dropdown left">
                    <button className="dropbtn gen">Cocktails</button>
                    <div className="dropdown-content">
                    <Link to="/cocktails">All Cocktails</Link>
                    <Link to="/addCocktail">New Cocktail</Link>
                    </div>
                </div>
                <Link to ="/recipes">Recipes</Link>
                <Link to ="/liquors">Liquors</Link>
                
            </div>
        )
    }
}
