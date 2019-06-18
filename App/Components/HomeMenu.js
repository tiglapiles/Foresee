import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, Icon } from "native-base";
import styles from "./Styles/HomeMenuStyle";

export default class HomeMenu extends Component {
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
        <View style={styles.item}>
          <Icon name="ios-menu" />
          <Text style={styles.title}>All Categories</Text>
        </View>
        <View style={styles.item}>
          <Icon name="logo-android" />
          <Text style={styles.title}>Request for Quotation</Text>
        </View>
        <View style={styles.item}>
          <Icon name="logo-dropbox" />
          <Text style={styles.title}>Ready to Ship</Text>
        </View>
        <View style={styles.item}>
          <Icon name="ios-compass" />
          <Text style={styles.title}>New User Zone</Text>
        </View>
      </View>
    );
  }
}
