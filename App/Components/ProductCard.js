import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from "react-native";
import { View, Icon, Text } from "native-base";
import styles from "./Styles/ProductCardStyle";

export default class ProductCard extends Component {
  shouldComponentUpdate(newProps) {
    return this.props.item.img !== newProps.img;
  }
  //   // Prop type warnings
  //   static propTypes = {
  //     someProperty: PropTypes.object,
  //     someSetting: PropTypes.bool.isRequired,
  //       }
  //
  //       // Defaults for props
  //       static defaultProps = {
  //         someSetting: false
  //       }

  handleDetail = () => {
    this.props.navigation.navigate("ProductDetail");
  };

  render() {
    const { item = {} } = this.props;

    return (
      <TouchableOpacity onPress={this.handleDetail} style={styles.item}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: item.img }} />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.priceS}>
            {item.priceS} - {item.priceE}
          </Text>
          <Text>
            {item.piece} Piece<Text style={styles.moq}> (MOQ)</Text>
          </Text>
          <View style={styles.bottom}>
            <Text style={styles.bottomItem}>1YR</Text>
            <Icon name="star" style={styles.bottomItem} />
            <Icon name="ios-heart" style={styles.bottomItem} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
