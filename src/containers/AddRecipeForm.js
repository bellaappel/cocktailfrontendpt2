import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipes } from '../actions/recipesActions'

class AddRecipeForm extends Component {

    state = {
        cocktail_id: '',
        liquor_id: '',
        instructions: '',
        glassware: ''
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
            liquor_id: '',
            instructions: '',
            glassware: ''
        })
       
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <label>Cocktail</label>
                        <br />
                        <input type="text" value={this.state.cocktail_id} onChange={this.handleChange} name="cocktail_id"/>
                        <br />
                        <label>Liquors</label>
                        <br />
                        <input type="text" value={this.state.liquor_id} onChange={this.handleChange} name="liquor_id"/>
                        <br />
                        <label>instructions</label>
                        <br />
                        <textarea rows="5" cols="30" value={this.state.instructions} onChange={this.handleChange} name="instructions" />
                        <br />
                    <input type="submit" value="Submit Review" />
                </form>
            </div>
        );
    }
}



export default connect(null, { addRecipes })(AddRecipeForm);