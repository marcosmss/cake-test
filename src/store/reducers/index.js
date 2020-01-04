import { combineReducers } from "redux";

const initialState = {
  data: {},
  productDetail: {},
  buyItem: [],
  productSold: [],
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

    case "HANDLE_BUY_ITEM_PRODUCTS":
      return {
        ...state,
        buyItem: [...state.buyItem, action.buyItem]
      };

    case "HANDLE_CLEAN_CART": {
      return {
        ...state,
        buyItem: []
      };
    }

    case "REMOVE_PRODUCT_CART": {
      return {
        ...state,
        buyItem: state.buyItem.filter(
          buyItem => buyItem.productId !== action.id
        )
      };
    }

    case "HANDLE_PRODUCT_SOLD": {
      return {
        ...state,
        productSold: action.productSold,
        buyItem: []
      };
    }

    case "HANDLE_MENU_PROFILE":
      return { ...state, openMenuProfile: !state.openMenuProfile };

    case "HANDLE_SHOPPING_CART":
      return { ...state, openShoppingCart: !state.openShoppingCart };

    default:
      return state;
  }
}

export default combineReducers({ store });
