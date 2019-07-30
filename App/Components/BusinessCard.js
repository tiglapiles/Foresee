import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/BusinessCardStyle";

export default class BusinessCard extends Component {
  shouldComponentUpdate(newProps) {
    return this.props.img !== newProps.img;
  }
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
    const { info } = this.props;
    const text = `How to Ensure Your Next Marketing Compaign is a Success`;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => this.props.navigation.navigate("ProductDetail")}
        >
          <View style={styles.date}>
            <View
              style={{ backgroundColor: "lightgray", height: 50, width: 40 }}
            />
            <Text numberOfLines={3} style={styles.text}>
              {text}
            </Text>
          </View>
          <View style={styles.imgBox}>
            <Image
              style={styles.img}
              source={{
                uri:
                  "https://sc02.alicdn.com/kf/HTB1foTel7SWBuNjSszdq6zeSpXae/Wholesale-100-Cotton-Children-Blank-Round-Collar.jpg_300x300.jpg"
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
