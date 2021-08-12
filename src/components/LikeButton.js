import React from 'react'
export default class Likes extends React.Component {
    constructor() {
        super()
        // initial state has count set at 0
        this.state = {
            likes: 0
        }
    }


    handleClick = () => {
        this.setState(previousState => {
        return {
            likes: previousState.likes + 1
        }
        })
    }

 

    render() {
        return (
            <div>
                <button className="likebutton" onClick={this.handleClick}>Likes {this.state.likes}</button>
            </div>
        )
    }
}


