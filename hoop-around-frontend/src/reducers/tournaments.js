export default (state = null, action) => {
    switch (action.type) {
      case "ALL":
        return action.user
      case "SELECT_BY_CITY":
        return null
        case "SELECT_BY_DATE":
            return null
      default:
        return state
    }
  }