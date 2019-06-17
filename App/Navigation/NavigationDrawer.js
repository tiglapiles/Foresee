import React from "react";
import { DrawerNavigator } from "react-navigation";
import FeedsScreen from "../Containers/FeedsScreen";
import ForeseeScreen from "../Containers/ForeseeScreen";
import HomeScreen from "../Containers/HomeScreen";
import MessengerScreen from "../Containers/MessengerScreen";
import DrawerContent from "../Containers/DrawerContent";
import MyScreen from "../Containers/MyScreen.js";
import CurrencyScreen from "../Containers/CurrencyScreen.js";
import HelpScreen from "../Containers/HelpScreen.js";
import ScanScreen from "../Containers/ScanScreen.js";
import SettingsScreen from "../Containers/SettingsScreen.js";

import styles from "./Styles/NavigationStyles";

const NavigationDrawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Feeds: { screen: FeedsScreen },
    Messenger: { screen: MessengerScreen },
    "My Foresee": { screen: ForeseeScreen },
    "My Favorites": { screen: MyScreen },
    "Scan QR Code": { screen: ScanScreen },
    "Currency Converter": { screen: CurrencyScreen },
    "Help Center": { screen: HelpScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <DrawerContent {...props} />
  }
);

export default NavigationDrawer;
