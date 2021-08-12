import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCocktails } from '../actions/cocktailsActions'


class AddCocktailForm extends Component {

    state = {
       name: "",
       desc: ""
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addCocktails(this.state)

        this.setState({
            name: "",
            desc: ""
        })
       
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <br />
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                        <br />
                        <label>Description</label>
                        <br />
                        <textarea rows="5" cols="30" value={this.state.desc} onChange={this.handleChange} name="desc" />
                        <br />
                    <input type="submit" value="Submit Cocktail" />
                </form>
            </div>
        );
    }
}



export default connect(null, {addCocktails})(AddCocktailForm);