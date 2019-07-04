import React, { Component } from "react";
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import ProductDetail from "../Containers/ProductDetail";

const NavigationProduct = new StackNavigator(
  {
    ProductDetail: { screen: ProductDetail }
  },
  {
    headerMode: "none",
    initialRouteName: "ProductDetail"
  }
);

export default NavigationProduct;
