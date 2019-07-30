import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { List, ListItem, Text, View, Icon } from "native-base";
import styles from "./Styles/DrawerContentStyles";
import { Images } from "../Themes";

const itemIcon = {
  Home: "ios-home",
  Feeds: "ios-heart",
  Messenger: "ios-chatboxes",
  "My Foresee": "ios-person",
  "My Favorites": "ios-star",
  "Scan QR Code": "ios-qr-scanner",
  "Currency Converter": "ios-checkbox",
  "Help Center": "ios-help-circle",
  Settings: "ios-settings"
};

class DrawerContent extends Component {
  renderMenuItem = item => (
    <ListItem
      noBorder
      button
      onPress={() => this.props.navigation.navigate(item.routeName)}
    >
      <Icon name={itemIcon[item.routeName]} style={styles.icon} />
      <Text style={styles.listText}>{item.routeName}</Text>
    </ListItem>
  );

  render() {
    const items = this.props.items;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("My Foresee")}
          >
            <Image source={Images.account} style={styles.logo} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={styles.logout}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Sign In
            </Text>
            <Text style={styles.logout}> | </Text>
            <Text
              style={styles.logout}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Register
            </Text>
          </View>
        </View>
        <View style={styles.list}>
          <List
            bounces={false}
            dataArray={items}
            renderRow={this.renderMenuItem}
          />
        </View>
      </View>
    );
  }
}

export default DrawerContent;
