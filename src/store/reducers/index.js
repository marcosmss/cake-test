import { combineReducers } from "redux";
import getData from "../../api/index";

const initialState = {
  data: getData().then(result => (initialState.data = result)),
  openMenuProfile: false,
  openShoppingCart: false,
  status: false
};

function store(state = initialState, action) {
  console.warn(state, "state store");

  if (action.type === "HANDLE_MENU_PROFILE") {
    return { ...state, openMenuProfile: !state.openMenuProfile };
  }

  if (action.type === "HANDLE_SHOPPING_CART") {
    return { ...state, openShoppingCart: !state.openShoppingCart };
  }

  return state;
}

export default combineReducers({ store });
