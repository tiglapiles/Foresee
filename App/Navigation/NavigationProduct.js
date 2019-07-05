import React, { Component } from "react";
import { StackNavigator, addNavigationHelpers } from "react-navigation";

// import VideoFlip from "../Containers/VideoFlip.js";
// import ProductDetail from "../Containers/ProductDetail";
import ProductCategory from "../Containers/ProductCategoryScreen.js";

const NavigationProduct = new StackNavigator(
  {
    // VideoFlip: { screen: VideoFlip },
    // ProductDetail: { screen: ProductDetail },
    ProductCategory: { screen: ProductCategory }
  },
  {
    headerMode: "none"
    // initialRouteName: "ProductDetail"
  }
);

export default NavigationProduct;
