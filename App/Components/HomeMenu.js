import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, Icon, Thumbnail } from "native-base";
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
    const uri = ["1.png", "2.png", "3.png", "4.png"];

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Thumbnail source={{ uri: uri[0] }} />
          <Text style={styles.title}>All Categories</Text>
        </View>
        <View style={styles.item}>
          <Thumbnail source={{ uri: uri[1] }} />
          <Text style={styles.title}>Request for Quotation</Text>
        </View>
        <View style={styles.item}>
          <Thumbnail source={{ uri: uri[2] }} />
          <Text style={styles.title}>Ready to Ship</Text>
        </View>
        <View style={styles.item}>
          <Thumbnail source={{ uri: uri[3] }} />
          <Text style={styles.title}>New User Zone</Text>
        </View>
      </View>
    );
  }
}
