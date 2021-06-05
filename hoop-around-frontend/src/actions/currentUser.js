//synchronout

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


// asych
export const getCurrentUser = (credentials) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(credentials)
        })
        .then (response => response.json())
        .then (r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(setCurrentUser(r))
            }
        })
        .catch(console.log)
    }
}