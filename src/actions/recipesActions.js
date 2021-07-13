export const fetchRecipes = () => {
    return (dispatch) => {
        fetch('https://localhost:3000/recipes')
        .then(res => res.json())
         .then(recipes => dispatch({type: 'FETCH_RECIPES', payload: recipes}))
    }
}