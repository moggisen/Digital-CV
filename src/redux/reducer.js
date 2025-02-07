// actions.js
export const setActiveLink = (link) => {
  return {
    type: "SET_ACTIVE_LINK",
    payload: link,
  };
};

// reducer.js
const initialState = {
  activeLink: "home", // Standardlänk vid första renderingen
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_LINK":
      return {
        ...state,
        activeLink: action.payload,
      };
    default:
      return state;
  }
};

export default navReducer;
