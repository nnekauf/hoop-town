//synchronout

export const showAllTournaments = tournaments => {
    return {
        type: "ALL",
        tournaments
    }
}


// asych


export const getAllTournaments = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/tournaments", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify()
        })
        .then (response => response.json())
        .then (r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(showAllTournaments(r))
    
            }
        })
        .catch(console.log)
    }
}

