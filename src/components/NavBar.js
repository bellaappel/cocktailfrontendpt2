import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <NavLink to="/">Home</NavLink>
                
            </div>
        )
    }
}
