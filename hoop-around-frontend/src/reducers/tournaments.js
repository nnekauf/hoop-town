const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
      case "ALL":
        return action.tournament
    //   case "SELECT_BY_CITY":
    //     return initialState
    //     case "SELECT_BY_DATE":
    //         return null
      default:
        return state
    }
  }