export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
        fetch('/api/products')
            .then(response => response.json())
            .then(data => dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data }))
            .catch(error => dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error }));
    };
};
