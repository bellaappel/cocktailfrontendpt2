import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipes } from '../actions/recipesActions'


class AddRecipeForm extends Component {

    state = {
        cocktail_id: '',
        instructions: '',
        creator: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value, cocktail_id: this.props.id
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addRecipes(this.state)

        this.setState({
            cocktail_id: '',
            instructions: '',
            creator: ''
        })
       
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <label>Creator</label>
                        <br />
                        <input type="text" value={this.state.creator} onChange={this.handleChange} name="creator"/>
                        <br />
                        <label>instructions</label>
                        <br />
                        <textarea rows="5" cols="30" value={this.state.instructions} onChange={this.handleChange} name="instructions" />
                        <br />
                    <input type="submit" value="Submit Recipe" />
                </form>
            </div>
        );
    }
}



export default connect(null, { addRecipes })(AddRecipeForm);