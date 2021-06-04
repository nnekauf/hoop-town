//synchronout

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


// asych
export const login = credentials => {
    return dispatch => {
        return fetch("http:localhost:3000/api/v1/login")
    }
}