import React from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../api";
import LoadingProduct from "./Loading";

import ProductsItems from "./Products";

const Products = ({ products, isLoading, productSelected, dispatch }) => {
  React.useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <React.Fragment>
      {<LoadingProduct isLoading={isLoading} />}

      {!isLoading && <ProductsItems products={products} dispatch={dispatch} />}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.store.data,
  isLoading: state.store.status,
  productSelected: state.store.buyItem
});

export default connect(mapStateToProps)(Products);
