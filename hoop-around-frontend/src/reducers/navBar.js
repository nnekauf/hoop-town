const initialState = {
    show: false,
   
  }
  
  
  const navBar = (state = initialState, action) => {
    switch (action.type) {
      case "CHANGE":
        return {...state, show: action.payload};
      default:
        return state
    }
  }
  export default navBar