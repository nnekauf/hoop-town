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

export const createTournament = (formData, history) => {
    const body = {
        user: {
            name: formData.name,
            venue: formData.venue,
            date: formData.date_time,
            host: formData.host,
            about: formData.about,
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zipcode

        }
    }
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/tournaments", {
            formData: "include",
            method: "POST",
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
                dispatch(resetTournamenrForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

