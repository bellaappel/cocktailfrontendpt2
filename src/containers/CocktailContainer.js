import React, { Component } from 'react';
import CocktailCard from '../components/CocktailCard';
import {connect} from 'react-redux';
import {fetchCocktails} from '../actions/cocktailsActions';
import CocktailsList from '../components/CocktailsList'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class CocktailContainer extends Component {

    // state={ cocktails: []}


    // componentDidMount(){
    //     fetch("http://localhost:3000/cocktails")
    //     .then(res => res.json())
    //     .then(cocktailsObj => this.setState({cocktails: cocktailsObj}))
    // }

 
//     renderCocktails(){
//         return(
//             <div className="container">
//                 {this.state.cocktails.map(cocktailsObj => <CocktailCard key={cocktailsObj.name + "-card"} name={cocktailsObj.name} image={cocktailsObj.photo}/>)}
//             </div>
//         )

//     }

 

//     render() {
//         return (
//             <div className="container">
//                 {this.renderCocktails()}
//             </div>
//         )
//     }

        componentDidMount() {
        this.props.fetchCocktails()
    }

    render() {
        return (
            <Switch>
                <Route exact path='/cocktails'>
                    <CocktailsList/>
                </Route>
                <Route path='/cocktails/:id' component={(routeData) => {
                    const id= parseInt(routeData.match,params.id)
                    const cocktail = this.props.cocktails.find(i => i.id === id)
                    return !! cocktail ? <CocktailCard cocktail={cocktail} id={id}/> : <div>404 page not found</div>
                }
            } />

            </Switch>
        )
    }
} 

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails
    }
}
export default connect(mapStateToProps, {fetchCocktails})(CocktailContainer)
