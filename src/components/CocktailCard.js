import React, { PureComponent } from 'react'

export default class CocktailCard extends PureComponent {
    render() {
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <h2>{this.props.photo}</h2>
            </div>
        )
    }
}
