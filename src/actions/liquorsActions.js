export const fetchLiquors = (dispatch) => {
    return (dispatch) => {
        fetch("http://localhost:3000/liquors")
        .then(res => res.json())
        .then(liquors => dispatch({type: 'FETCH_LIQUORS', payload: liquors}))

    }
}