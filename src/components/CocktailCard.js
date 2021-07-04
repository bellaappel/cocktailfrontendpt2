import React, { PureComponent } from 'react'

export default class CocktailCard extends PureComponent {
    render() {
        return (
            <div className="card">
                <img alt={"photo of " + this.props.name} src={this.props.photo} className="cocktail-avatar"/>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
