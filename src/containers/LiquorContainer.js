import React, { Component } from 'react';
import LiquorCard from '../components/LiquorCard'
import {fetchLiquors} from '../actions/liquorsActions'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

class LiquorContainer extends Component {

        componentDidMount() {
        this.props.fetchLiquors()
    }

    render() {
        return (
            <Switch>
                <Route exact path='/liquors'>
                    <LiquorCard />
                </Route>
            </Switch>
        )
    }
} 

const mapStateToProps = state => {
    return {
        liquors: state.liquors
    }
}
export default connect(mapStateToProps, {fetchLiquors})(LiquorContainer)

