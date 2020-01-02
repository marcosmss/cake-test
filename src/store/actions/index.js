export const handleMenuProfile = item => {
  return {
    type: "HANDLE_MENU_PROFILE",
    item
  };
};

export const handleShoppingCard = item => {
  return {
    type: "HANDLE_SHOPPING_CART",
    item
  };
};

export const fetchProductsPending = () => {
  return {
    type: "FETCH_PRODUCTS_PENDING"
  };
};

export const fetchProductsSuccess = data => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    data
  };
};

export const fetchProductsError = error => {
  return {
    type: "FETCH_PRODUCTS_ERROR",
    error: error
  };
};
