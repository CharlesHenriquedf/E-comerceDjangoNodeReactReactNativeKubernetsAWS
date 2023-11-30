export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_LOGIN_REQUEST' });
        const response = await fetch('/api/users/login', { /* ...configurações da requisição... */ });
        const data = await response.json();
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAIL', payload: error.message });
    }
};
