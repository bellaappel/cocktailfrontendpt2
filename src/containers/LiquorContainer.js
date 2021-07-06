import React, { Component } from 'react'
import LiquorCard from '../components/LiquorCard'

export default class LiquorContainer extends Component {
    state =  {liquor: []}

    componentDidMount(){
        fetch("http://localhost:3000/liquors")
        .then(res => res.json())
        .then(liquorObj => this.setState({liquor: liquorObj}))

    }

    renderLiquors(){
        return(
            <div>
                {this.state.liquor.map(liquorObj => <LiquorCard key={liquorObj.name + "-card"} name={liquorObj.name}/>)}
            </div>
        )
    }
    render() {
        return (
            <div className="container">
                {this.renderLiquors()}
            </div>
        )
    }
}
