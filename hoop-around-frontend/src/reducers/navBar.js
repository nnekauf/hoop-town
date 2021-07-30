const initialState = {
    show: false,
   
  }
  
  
  const navBar = (state = initialState, action) => {
    switch (action.type) {
      case "switch":
        return !initialState
      default:
        return state
    }
  }
  export default navBar