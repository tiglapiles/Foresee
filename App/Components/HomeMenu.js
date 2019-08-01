import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { TouchableOpacity } from "react-native";
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

  category = e => this.props.navigation.navigate(e);

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => this.category("ProductCategory")}>
            <Thumbnail source={require("../Images/Home/1.png")} />
          </TouchableOpacity>
          <Text style={styles.title}>All Categories</Text>
        </View>

        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => this.category("RequestForQuotation")}
          >
            <Thumbnail source={require("../Images/Home/2.png")} />
          </TouchableOpacity>
          <Text style={styles.title}>Request for Quotation</Text>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => this.category("ShippingAddress")}>
            <Thumbnail source={require("../Images/Home/3.png")} />
          </TouchableOpacity>
          <Text style={styles.title}>Ready to Ship</Text>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => this.category("Help Center")}>
            <Thumbnail source={require("../Images/Home/4.png")} />
          </TouchableOpacity>
          <Text style={styles.title}>New User Zone</Text>
        </View>
      </View>
    );
  }
}
