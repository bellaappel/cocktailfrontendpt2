import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class LiquorCard extends Component {
    render() {
        const liquors = this.props.liquors.map(liquor => <li key={liquor.id}><Link to={{pathname: `/liquors/${liquor.id}`}}>{liquor.name}</Link></li>)
        return (
            <div className="liquorslist-container">
                <h1>All Liquors</h1>
                <ul className= "liquor-list">
                    {liquors}
                </ul>
            </div>
        )
    }
}



export default connect((state) => {
    return {liquors: state.liquors}
})(LiquorCard)

