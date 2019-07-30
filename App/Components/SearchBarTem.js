import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { TouchableOpacity } from "react-native";
import { View, Text, Icon, Input } from "native-base";
import styles from "./Styles/SearchBarTemStyle";

export default class SearchBarTem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.icon}>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            />
          </View>
          <View>
            <Input
              placeholder="Search products or suppliers"
              style={{ flex: 4 }}
            />
          </View>
          <View style={styles.camera}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Scan QR Code")}
            >
              <Icon name="ios-camera" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
