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

  category = e => {
    // console.log(e);
    this.props.navigation.navigate("ProductCategory");
  };

  render() {
    const uri = [
      "https://sc01.alicdn.com/kf/HLB1AVBSTmzqK1RjSZPcq6zTepXaT/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg",
      "https://sc01.alicdn.com/kf/HLB1sUeqTbvpK1RjSZFqq6AXUVXaF/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg",
      "https://sc02.alicdn.com/kf/HLB119SvTkPoK1RjSZKbq6x1IXXaY/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg",
      "https://sc02.alicdn.com/kf/HLB119SvTkPoK1RjSZKbq6x1IXXaY/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg"
    ];

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity onPress={this.category}>
            <Thumbnail source={{ uri: uri[0] }} />
          </TouchableOpacity>
          <Text style={styles.title}>All Categories</Text>
        </View>

        <View style={styles.item}>
          <Thumbnail source={{ uri: uri[0] }} />
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
