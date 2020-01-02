import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError
} from "../store/actions";

const fetchProducts = dispatch => {
  dispatch(fetchProductsPending());
  fetch("https://desolate-brushlands-20405.herokuapp.com/api/v1/products")
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      setTimeout(() => {
        dispatch(fetchProductsSuccess(res));

        return res;
      }, 1500);
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    });
};

export default fetchProducts;
