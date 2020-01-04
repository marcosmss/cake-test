import axios from "axios";
import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
  fetchDetailPending,
  fetchDetailSuccess,
  fetchDetailError
} from "../store/actions";

export const fetchProducts = dispatch => {
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
      }, 1000);
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    });
};

export const fetchProductDetail = (dispatch, pathName) => {
  dispatch(fetchDetailPending());
  fetch(`https://desolate-brushlands-20405.herokuapp.com/api/v1${pathName}`)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      setTimeout(() => {
        dispatch(fetchDetailSuccess(res));

        return res;
      }, 1000);
    })
    .catch(error => {
      dispatch(fetchDetailError(error));
    });
};

export const postUser = data => {
  axios
    .post("https://api.vtexcrm.com.br/corebiz/dataentities/TE/documents", data)
    .then(response => {
      console.warn(response);
    })
    .catch(error => {
      console.warn(error);
    });
};
