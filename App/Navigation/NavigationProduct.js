import React, { Component } from "react";
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import VideoFlip from "../Containers/VideoFlip.js";
import ProductDetail from "../Containers/ProductDetail";

const NavigationProduct = new StackNavigator(
  {
    VideoFlip: { screen: VideoFlip },
    ProductDetail: { screen: ProductDetail }
  },
  {
    headerMode: "none"
    // initialRouteName: "ProductDetail"
  }
);

export default NavigationProduct;
