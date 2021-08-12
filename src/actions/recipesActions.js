export const fetchRecipes = (dispatch) => {
    return (dispatch) => {
        fetch("http://localhost:3000/recipes")
        .then(res => res.json())
        .then(reviews => dispatch({type: 'FETCH_RECIPES',payload: reviews}))
    }
}



export const addRecipes = recipe => {
    return dispatch => {
        fetch('http://localhost:3000/recipes', {
        method: 'POST',
        body: JSON.stringify(recipe),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(recipe => dispatch({ type: 'ADD_RECIPE', payload: recipe}))
    }
    
}



