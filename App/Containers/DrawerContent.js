import React, { Component } from "react";
import { ScrollView, Image, BackHandler, TouchableOpacity } from "react-native";
import {
  List,
  ListItem,
  Text,
  View,
  Content,
  Icon,
  Left,
  Body
} from "native-base";
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
  render() {
    const navigation = this.props.navigation;
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
        <Content>
          <List
            dataArray={items}
            renderRow={item => (
              <ListItem
                icon
                onPress={() => navigation.navigate(item.routeName)}
              >
                <Left>
                  <Icon name={itemIcon[item.routeName]} />
                </Left>
                <Body>
                  <Text>{item.routeName}</Text>
                </Body>
              </ListItem>
            )}
          />
        </Content>
      </View>
    );
  }
}

export default DrawerContent;
