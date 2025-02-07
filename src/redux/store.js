import { createStore } from "redux";

// Din reducer
const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVE_LINK":
      return { ...state, activeLink: action.payload };
    default:
      return state;
  }
};

// Skapa Redux store
const store = createStore(rootReducer);

export default store;
