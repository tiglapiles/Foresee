import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";

// screens identified by the router
import Login from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import NavigationDrawer from "./NavigationDrawer";
// import NavigationProduct from "./NavigationProduct";
import VideoFlip from "../Containers/VideoFlip.js";
import ProductDetail from "../Containers/ProductDetail.js";
import ProductCategory from "../Containers/ProductCategoryScreen.js";
import ProductListDrawer from "../Components/ProductListDrawer.js";
import ShopDetail from "../Containers/ShopDetail.js";
// import SettingScreen from "../Containers/SettingScreen";
// import HelpCenterScreen from "../Containers/HelpCenterScreen";
import CloundDriveScreen from "../Containers/CloundDriveScreen";
import ShippingAddressScreen from "../Containers/ShippingAddressScreen";
import PayLaterScreen from "../Containers/PayLaterScreen";
import MyCouponsScreen from "../Containers/MyCouponsScreen";
import ManageQuotesScreen from "../Containers/ManageQuotesScreen";
import InquiriesScreen from "../Containers/InquiriesScreen";
import RequestForQuotationScreen from "../Containers/RequestForQuotationScreen";
import ManageOrderScreen from "../Containers/ManageOrderScreen";
import NotificationScreen from "../Containers/NotificationScreen";
import HistoryScreen from "../Containers/HistoryScreen";
import PersonalScreen from "../Containers/PersonalScreen";

const PrimaryNav = StackNavigator(
  {
    Login: { screen: Login },
    LaunchScreen: { screen: LaunchScreen },
    NavigationDrawer: { screen: NavigationDrawer },
    VideoFlip: { screen: VideoFlip },
    // NavigationProduct: { screen: NavigationProduct },
    ProductCategory: { screen: ProductCategory },
    ProductList: { screen: ProductListDrawer },
    ProductDetail: { screen: ProductDetail },
    ShopDetail: { screen: ShopDetail },
    // My Foresee
    // Setting: { screen: SettingScreen },
    // HelpCenter: { screen: HelpCenterScreen },
    CloundDrive: { screen: CloundDriveScreen },
    ShippingAddress: { screen: ShippingAddressScreen },
    PayLater: { screen: PayLaterScreen },
    MyCoupons: { screen: MyCouponsScreen },
    ManageQuotes: { screen: ManageQuotesScreen },
    Inquiries: { screen: InquiriesScreen },
    RequestForQuotation: { screen: RequestForQuotationScreen },
    ManageOrder: { screen: ManageOrderScreen },
    // message
    Notification: { screen: NotificationScreen },
    History: { screen: HistoryScreen },
    Personal: { screen: PersonalScreen }
  },
  {
    initialRouteName: "NavigationDrawer",
    headerMode: "none"
  }
);

export default PrimaryNav;
