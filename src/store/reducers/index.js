import { combineReducers } from "redux";

const initialState = {
  data: {},
  openMenuProfile: false,
  openShoppingCart: false,
  status: false,
  error: null
};

function store(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS_PENDING":
      return {
        ...state,
        status: true
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        status: false,
        data: action.data
      };

    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        status: false,
        error: action.error
      };

    case "HANDLE_MENU_PROFILE":
      return { ...state, openMenuProfile: !state.openMenuProfile };

    case "HANDLE_SHOPPING_CART":
      return { ...state, openShoppingCart: !state.openShoppingCart };

    default:
      return state;
  }
}

export default combineReducers({ store });
