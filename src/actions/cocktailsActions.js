export const fetchCocktails = (dispatch) => {
    return (dispatch) => {
        fetch("http://localhost:3000/cocktails")
        .then(res => res.json())
        .then(cocktails => dispatch({type: 'FETCH_COCKTAILS', payload: cocktails}))

    }
}

