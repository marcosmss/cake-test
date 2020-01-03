import { combineReducers } from "redux";

const initialState = {
  data: {},
  productDetail: {},
  openMenuProfile: false,
  openShoppingCart: false,
  status: false,
  error: null
};

function store(state = initialState, action) {
  console.warn(state, "state sotre");
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

    case "FETCH_DETAIL_PENDING":
      return {
        ...state,
        status: true
      };

    case "FETCH_DETAIL_SUCCESS":
      return {
        ...state,
        status: false,
        productDetail: action.productDetail
      };

    case "FETCH_DETAIL_ERROR":
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
