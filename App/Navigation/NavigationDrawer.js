import React from "react";
import { DrawerNavigator } from "react-navigation";
import MessengerScreen from "../Containers/MessengerScreen";
import ProductList from "../Containers/ProductList";
import ListviewExample from "../Containers/ListviewExample";
import CardExample from "../Containers/CardExample";
import DrawerContent from "../Containers/DrawerContent";
import MyScreen from "../Containers/MyScreen.js";
import CurrencyScreen from "../Containers/CurrencyScreen.js";
import HelpScreen from "../Containers/HelpScreen.js";
import ScanScreen from "../Containers/ScanScreen.js";
import SettingsScreen from "../Containers/SettingsScreen.js";

import styles from "./Styles/NavigationStyles";

const NavigationDrawer = DrawerNavigator(
  {
    Home: { screen: ProductList },
    Feeds: { screen: CardExample },
    Messenger: { screen: MessengerScreen },
    "My Foresee": { screen: ListviewExample },
    "My Favorites": { screen: MyScreen },
    "Scan QR Code": { screen: ScanScreen },
    "Currency Converter": { screen: CurrencyScreen },
    "Help Center": { screen: HelpScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: "My Foresee",
    contentComponent: props => <DrawerContent {...props} />
  }
);

export default NavigationDrawer;
