export const fetchCocktails = (dispatch) => {
    return (dispatch) => {
        fetch("http://localhost:3000/cocktails")
        .then(res => res.json())
        .then(cocktails => dispatch({type: 'FETCH_COCKTAILS', payload: cocktails}))

    }
}

export const addCocktails = recipe => {
    return dispatch => {
        fetch('http://localhost:3000/cocktails', {
        method: 'POST',
        body: JSON.stringify(recipe),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(cocktail => dispatch({ type: 'ADD_COCKTAIL', payload: cocktail}))
    }
    
}
