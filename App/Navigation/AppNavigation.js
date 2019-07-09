import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";

// screens identified by the router
import Login from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import NavigationDrawer from "./NavigationDrawer";
import NavigationProduct from "./NavigationProduct";
import VideoFlip from "../Containers/VideoFlip.js";
import ProductDetail from "../Containers/ProductDetail.js";
import ShopDetail from "../Containers/ShopDetail.js";

const PrimaryNav = StackNavigator(
  {
    Login: { screen: Login },
    LaunchScreen: { screen: LaunchScreen },
    NavigationDrawer: { screen: NavigationDrawer },
    VideoFlip: { screen: VideoFlip },
    NavigationProduct: { screen: NavigationProduct },
    ProductDetail: { screen: ProductDetail },
    ShopDetail: { screen: ShopDetail }
  },
  {
    initialRouteName: "NavigationDrawer",
    headerMode: "none"
  }
);

export default PrimaryNav;
