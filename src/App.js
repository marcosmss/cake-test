import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      {/* <div style={{ height: 1500 }}>teste</div> */}
      <Products />
      <Footer />
    </Provider>
  );
};

export default App;
