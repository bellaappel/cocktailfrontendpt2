import React, { PureComponent } from 'react'

export default class LiquorCard extends PureComponent {
    render() {
        return (
            <div className="card">
                {this.props.name}
            </div>
        )
    }
}

