import React from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";

import { fetchProductDetail } from "../../api";
import LoadingProduct from "../Products/Loading";
import ProductDetail from "./ProductDetail";

const Product = ({ dispatch, isLoading, productDetail }) => {
  React.useEffect(() => {
    const pathName = window.location && window.location.pathname;
    fetchProductDetail(dispatch, pathName);
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      {isLoading && <LoadingProduct isLoading={isLoading} />}
      {!isLoading && productDetail.length && (
        <ProductDetail productDetail={productDetail} dispatch={dispatch} />
      )}
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isLoading: state.store.status,
  productDetail: state.store.productDetail
});

export default connect(mapStateToProps)(Product);
