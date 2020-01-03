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
    error
  };
};

export const fetchDetailPending = () => {
  return {
    type: "FETCH_DETAIL_PENDING"
  };
};

export const fetchDetailSuccess = productDetail => {
  return {
    type: "FETCH_DETAIL_SUCCESS",
    productDetail
  };
};

export const fetchDetailError = error => {
  return {
    type: "FETCH_DETAIL_ERROR",
    error
  };
};

export const handleBuyItemProducts = buyItem => {
  return {
    type: "HANDLE_BUY_ITEM_PRODUCTS",
    buyItem
  };
};

export const handleCleanCart = productsSelects => {
  return {
    type: "HANDLE_CLEAN_CART",
    productsSelects
  };
};
