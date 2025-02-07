// reducer.js

const initialState = {
    activeLink: 'home', // Standardvärde för aktiv länk
  };
  
  const navReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_LINK':
        return {
          ...state,
          activeLink: action.payload, // Uppdaterar aktiv länk
        };
      default:
        return state;
    }
  };
  
  export default navReducer;